import { execSync } from 'node:child_process';
import { existsSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

function run(cmd) {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit', cwd: process.cwd() });
}

console.log('=== Déploiement manuel sur la branche gh-pages ===\n');

try {
  // 1. Build
  console.log('1. Compilation du projet avec Vite...');
  run('npm run build');

  // Assurer la présence du fichier .nojekyll pour GitHub Pages
  const nojekyllPath = resolve('dist', '.nojekyll');
  if (!existsSync(nojekyllPath)) {
    writeFileSync(nojekyllPath, '');
  }

  // 2. Déploiement du dossier dist sur la branche gh-pages
  console.log('\n2. Envoi sur la branche gh-pages du dépôt distant...');
  run('git add -f dist');
  run('git commit -m "deploy: mise à jour du site GitHub Pages [skip ci]" --allow-empty');
  run('git subtree push --prefix dist origin gh-pages');
  run('git reset --soft HEAD~1');
  run('git restore --staged dist');

  console.log('\n✅ Déploiement réussi sur GitHub Pages !');
  console.log('👉 URL du site : https://corbacktoz.github.io/Satellite-tracker/');
} catch (err) {
  console.error('\n❌ Erreur lors du déploiement manuel :', err.message);
  console.log('\nAstuce : Vous pouvez aussi laisser GitHub Actions déployer automatiquement en poussant sur main :');
  console.log('  git push origin main');
  process.exit(1);
}
