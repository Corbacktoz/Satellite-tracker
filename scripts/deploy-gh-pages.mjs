import { execSync } from 'node:child_process';
import { existsSync, writeFileSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

function run(cmd, cwd = process.cwd()) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd });
}

console.log('=== Déploiement autonome sur la branche gh-pages ===\n');

try {
  const distDir = resolve('dist');

  // 1. Assurer la présence de .nojekyll dans dist
  const nojekyllPath = resolve(distDir, '.nojekyll');
  if (!existsSync(nojekyllPath)) {
    writeFileSync(nojekyllPath, '# GitHub Pages nojekyll\n');
  }

  // 2. Nettoyer tout .git existant dans dist
  const distGit = resolve(distDir, '.git');
  if (existsSync(distGit)) {
    rmSync(distGit, { recursive: true, force: true });
  }

  // 3. Initialiser git temporaire dans dist
  console.log('1. Création de la branche gh-pages à partir de dist...');
  run('git init', distDir);
  run('git checkout -B gh-pages', distDir);
  run('git add -A', distDir);
  run('git commit -m "deploy: publication sur GitHub Pages"', distDir);
  run('git remote add origin https://github.com/Corbacktoz/Satellite-tracker.git', distDir);

  // 4. Push force vers origin gh-pages
  console.log('\n2. Envoi vers GitHub (branche gh-pages)...');
  run('git push -u origin gh-pages --force', distDir);

  // 5. Nettoyer le dossier git temporaire
  rmSync(distGit, { recursive: true, force: true });

  console.log('\n✅ La branche gh-pages a été poussée avec succès sur GitHub !');
  console.log('👉 URL du site : https://corbacktoz.github.io/Satellite-tracker/');
} catch (err) {
  console.error('\n❌ Erreur de déploiement :', err.message);
  process.exit(1);
}
