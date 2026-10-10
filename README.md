# Orbital — Suivi de cinq satellites Inmarsat bande L

Visualisation 3D et carte 2D d’I-6 F1, Alphasat, I-4 F2, I-4 F3 et I-3 F5. Les positions sont calculées par SGP4 à partir d’éléments orbitaux CelesTrak. Le site propose la rotation terrestre, le suivi du satellite sélectionné, une simulation ×1 à ×1 000, une pause et un décalage de ±12 heures.

## Démarrer

Node.js 20.19+ ou 22.12+ est nécessaire.

```sh
npm install
npm run dev
```

Ouvrir http://127.0.0.1:5173. Ne pas ouvrir index.html directement avec file:// : les modules et l’API nécessitent le serveur local.

Pour utiliser la version compilée :

```sh
npm run build
npm start
```

Ouvrir http://127.0.0.1:4173. Le serveur écoute uniquement sur la machine locale. Vite et le serveur de production fournissent l’API /api/satellites.

## Empreintes au sol

- **Horizon 5° (par défaut)** : visibilité géométrique au-dessus de 5° d’élévation, environ 17 000 km de diamètre au sol en orbite géostationnaire. Ce contour ne garantit aucune réception.
- **Zone indicative** : cercle régional simplifié. Les rayons et centres sont illustratifs ; ils ne sont pas les contours commerciaux des produits Inmarsat.
- **Nadir** : point situé à la verticale du satellite. Il peut être distinct du centre de la zone illustrative.
- **Mon antenne** : visibilité géométrique, élévation, azimut, portée et trajet radio aller-retour théorique. Ce dernier exclut le réseau et le traitement des communications.

La référence de flotte présentée par Inmarsat à l’OACI en juillet 2024 est également illustrative et ne représente pas un produit précis :
https://www.icao.int/sites/default/files/APAC/Meetings/2024/2024%20FIT-Asia-14/4-Information%20Papers/IP04-Inmarsat-Aeronautical-Satellite-Safety-Communications-Update.pdf

Pour une couverture commerciale, utiliser la carte du service choisi chez l’opérateur. Le catalogue local décrit les cinq satellites retenus ; il ne certifie pas la disponibilité de chaque service en temps réel.

## Interface et données

Les cinq satellites s’affichent ensemble en 2D. Sélection possible par la liste, la carte et sa légende. La carte accepte le glissement au doigt ou à la souris, la molette et les boutons de zoom. Les contrôles s’affichent sous la carte sur mobile. Le globe dispose d’un suivi de caméra ; la carte 2D reste accessible si WebGL est indisponible.

L’état des sources distingue les éléments actualisés, le secours partiel et le mode entièrement hors ligne. La fiche affiche la date des éléments et leur provenance. Les positions calculées à partir de données de secours continuent à évoluer avec la simulation, sans devenir des mesures récentes pour autant.

Les éléments actualisés sont mis en cache deux heures ; une source en échec est réessayée après une minute lors de la prochaine demande. Le bouton d’actualisation respecte ce cache. Aucun compte ni clé API n’est nécessaire.

## Vérification

```sh
npm run check
npm run build
```

Les vérifications couvrent la propagation, la rotation sidérale, le suivi de caméra, les cinq satellites affichés, les calculs géométriques, les modes de données et les régressions du rendu 2D. Les parcours desktop et mobile nécessitent aussi un contrôle dans le navigateur.
