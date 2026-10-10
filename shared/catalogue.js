export const fleetSources = [
  { title: 'Flotte Viasat (SEC Filing & Investor Relations)', url: 'https://investors.viasat.com/' },
  { title: 'Constellation ViaSat-3 (Americas, EMEA, APAC)', url: 'https://www.viasat.com/space-innovation/satellite-fleet/viasat-3/' },
  { title: 'Flotte Viasat / Inmarsat Global Xpress', url: 'https://www.viasat.com/enterprise-mobility/satellite-network/' },
  { title: 'Entrée en service des satellites arctiques ASBM / GX10', url: 'https://investors.viasat.com/news-releases/news-release-details/viasats-arctic-broadband-dedicated-coverage-advances-payloads' },
  { title: 'Données CelesTrak OMM / SGP4', url: 'https://celestrak.org/NORAD/documentation/gp-data-formats.php' }
];

// Flotte complète Viasat : satellites propriétaires ViaSat, Global Xpress (GX),
// mobilité maritime/aéro Inmarsat et charges utiles partenaires.
// Identifiants vérifiés dans le catalogue CelesTrak au 8 octobre 2026.
export const fleet = [
  // Flotte propriétaire Viasat (Bande Ka ultra-haute capacité)
  {
    id: 37843,
    name: 'ViaSat-1',
    alias: 'Ka VHTS · Amérique du Nord',
    band: 'Ka',
    status: 'service',
    category: 'viasat',
    capacity: '140 Gbps',
    orbitalSlot: '115.1° O',
    nominalLon: -115.1,
    region: 'Amérique du Nord (USA & Canada)',
    serviceSpotRadiusDeg: 24, // Faisceau ciblé sur les USA et le sud du Canada
    spotBeamType: 'Ka Spot Beams régionaux',
    coverageZone: {
      name: 'Amérique du Nord (CONUS & Canada)',
      bounds: { minLat: 22, maxLat: 58, minLon: -128, maxLon: -64 },
      center: { lat: 39, lon: -98 },
      countries: ['États-Unis (50 États, CONUS & Hawaï)', 'Canada (Sud & Est)', 'Nord du Mexique'],
      services: ['WiFi en vol (Delta, United, JetBlue)', 'Internet résidentiel Ka', 'Affaires & Défense'],
      beamArchitecture: '72 Spot Beams Ka régionaux haute densité',
      peakThroughput: '140 Gbps'
    },
    description: 'Pionnier du très haut débit satellitaire résidentiel et mobilité aérienne aux États-Unis.',
    launchDate: '2011-10-19',
    launchVehicle: 'Proton-M / Briz-M',
    order: 1
  },
  {
    id: 42740,
    name: 'ViaSat-2',
    alias: 'Ka VHTS · Amériques & Atlantique',
    band: 'Ka',
    status: 'service',
    category: 'viasat',
    capacity: '260 Gbps',
    orbitalSlot: '69.9° O',
    nominalLon: -69.9,
    region: 'Amériques, Caraïbes & Atlantique Nord',
    serviceSpotRadiusDeg: 28,
    spotBeamType: 'Ka VHTS Haute Capacité',
    coverageZone: {
      name: 'Amériques, Caraïbes & Corridor Atlantique',
      bounds: { minLat: 10, maxLat: 62, minLon: -125, maxLon: -20 },
      center: { lat: 35, lon: -70 },
      countries: ['États-Unis', 'Canada', 'Mexique', 'Caraïbes & Amérique centrale', 'Corridor aérien Atlantique Nord'],
      services: ['WiFi transatlantique en vol', 'Aviation commerciale', 'Maritime & Yachting', 'Gouvernemental'],
      beamArchitecture: 'Ka VHTS dynamique & couloirs aéronautiques',
      peakThroughput: '260 Gbps'
    },
    description: 'Doublement de capacité et extension de couverture vers les routes aériennes et maritimes transatlantiques.',
    launchDate: '2017-06-01',
    launchVehicle: 'Ariane 5 ECA',
    order: 2
  },
  {
    id: 56370,
    name: 'ViaSat-3 Americas',
    alias: 'F1 · Ultra VHTS Amériques',
    band: 'Ka',
    status: 'service',
    category: 'viasat',
    capacity: '~1 000 Gbps (partiel)',
    orbitalSlot: '88.9° O',
    nominalLon: -88.9,
    region: 'Continent américain & Océans',
    serviceSpotRadiusDeg: 34,
    spotBeamType: 'Ultra VHTS Terabit Ka',
    coverageZone: {
      name: 'Continent américain & Zones maritimes',
      bounds: { minLat: -55, maxLat: 65, minLon: -135, maxLon: -35 },
      center: { lat: 10, lon: -85 },
      countries: ['Amérique du Nord (USA, Canada, Mexique)', 'Amérique centrale & Caraïbes', 'Amérique du Sud (Brésil, Colombie, Argentine)'],
      services: ['Connectivité aérienne globale', 'Ultra VHTS Terabit', 'Défense & Sécurité', 'Entreprises'],
      beamArchitecture: 'Faisceaux numériques orientables ultra-denses',
      peakThroughput: '~1 000 Gbps'
    },
    description: 'Satellite de classe terabit fournissant de la connectivité commerciale à haute densité sur le continent américain.',
    launchDate: '2023-05-01',
    launchVehicle: 'Falcon Heavy',
    order: 3
  },
  {
    id: 66454,
    name: 'ViaSat-3 F2',
    alias: 'F2 · Ultra VHTS Amériques',
    band: 'Ka',
    status: 'service',
    category: 'viasat',
    capacity: '1 000 Gbps',
    orbitalSlot: 'Positionnement orbital Amériques',
    nominalLon: -75.0,
    region: 'Amériques & Océan Atlantique (Americas)',
    serviceSpotRadiusDeg: 34,
    spotBeamType: 'Ultra VHTS Terabit Ka',
    coverageZone: {
      name: 'Amériques & Océan Atlantique (Americas)',
      bounds: { minLat: -55, maxLat: 65, minLon: -135, maxLon: -20 },
      center: { lat: 15, lon: -75 },
      countries: ['Amérique du Nord (USA, Canada, Mexique)', 'Amérique centrale & Caraïbes', 'Amérique du Sud', 'Corridor Atlantique'],
      services: ['WiFi en vol VHTS', 'Haut débit commercial & résidentiel', 'Affaires & Défense'],
      beamArchitecture: 'Ultra VHTS Terabit Ka Amériques',
      peakThroughput: '1 000 Gbps'
    },
    description: 'Deuxième unité de la constellation mondiale ViaSat-3, entrée en service commercial le 17 septembre 2026 pour renforcer la capacité sur le continent américain.',
    launchDate: '2026',
    launchVehicle: 'Falcon Heavy',
    order: 4
  },
  {
    id: 68893,
    name: 'ViaSat-3 F3',
    alias: 'F3 · Ultra VHTS Asie-Pacifique',
    band: 'Ka',
    status: 'service',
    category: 'viasat',
    capacity: '1 000 Gbps',
    orbitalSlot: 'Positionnement orbital APAC',
    nominalLon: 140.0,
    region: 'Asie-Pacifique & Océanie',
    serviceSpotRadiusDeg: 32,
    spotBeamType: 'Ultra VHTS Terabit Ka',
    coverageZone: {
      name: 'Asie-Pacifique & Océanie',
      bounds: { minLat: -45, maxLat: 60, minLon: 70, maxLon: 175 },
      center: { lat: 5, lon: 125 },
      countries: ['Asie de l\'Est (Japon, Corée)', 'Asie du Sud-Est', 'Australie & Nouvelle-Zélande', 'Inde'],
      services: ['Aviation transpacifique', 'Mobilité maritime APAC', 'Gouvernemental'],
      beamArchitecture: 'Ultra VHTS Terabit Ka APAC',
      peakThroughput: '1 000 Gbps'
    },
    description: 'Troisième pilier de la constellation globale terabit/s pour la couverture de la région Asie-Pacifique, entré en service en août 2026.',
    launchDate: '2026',
    launchVehicle: 'Falcon Heavy',
    order: 5
  },
  {
    id: 29643,
    name: 'WildBlue-1',
    alias: 'Viasat US · Réserve opérationnelle',
    band: 'Ka',
    status: 'reserve',
    category: 'viasat',
    capacity: 'Faisceau continental',
    orbitalSlot: '111.1° O',
    nominalLon: -111.1,
    region: 'États-Unis continentaux (CONUS)',
    serviceSpotRadiusDeg: 20,
    spotBeamType: 'Ka Faisceau continental US',
    coverageZone: {
      name: 'États-Unis continentaux (CONUS)',
      bounds: { minLat: 25, maxLat: 50, minLon: -125, maxLon: -66 },
      center: { lat: 38, lon: -97 },
      countries: ['États-Unis continentaux (CONUS)'],
      services: ['Internet résidentiel de secours', 'Télémesure & réserve'],
      beamArchitecture: '35 Spot Beams Ka CONUS',
      peakThroughput: 'Faisceau continental'
    },
    launchDate: '2006-12-08',
    launchVehicle: 'Ariane 5 ECA',
    order: 6
  },

  // Flotte Global Xpress (GX / Inmarsat - Bande Ka mondiale)
  {
    id: 39476,
    name: 'I-5 F1',
    alias: 'GX1 · Moyen-Orient & Asie',
    band: 'Ka',
    status: 'service',
    category: 'gx',
    capacity: 'Global Xpress Ka',
    orbitalSlot: '62.6° E',
    nominalLon: 62.6,
    region: 'Moyen-Orient & Océan Indien',
    serviceSpotRadiusDeg: 36,
    spotBeamType: 'GX Faisceau régional Ka',
    coverageZone: {
      name: 'Moyen-Orient, Océan Indien & Asie du Sud',
      bounds: { minLat: -35, maxLat: 58, minLon: 20, maxLon: 105 },
      center: { lat: 18, lon: 65 },
      countries: ['Moyen-Orient (Golfe, Émirats, Arabie)', 'Sous-continent indien', 'Asie centrale', 'Océan Indien'],
      services: ['Global Xpress Ka commercial', 'Aviation (Emirates, Qatar Airways)', 'Maritime commercial'],
      beamArchitecture: 'GX Ka Spot Beams + Faisceaux orientables steerable',
      peakThroughput: 'Réseau Global Xpress'
    },
    description: 'Premier satellite du réseau mondial haut débit Global Xpress (GX).',
    launchDate: '2013-12-08',
    launchVehicle: 'Proton-M / Briz-M',
    order: 7
  },
  {
    id: 40384,
    name: 'I-5 F2',
    alias: 'GX2 · Amériques & Atlantique',
    band: 'Ka',
    status: 'service',
    category: 'gx',
    capacity: 'Global Xpress Ka',
    orbitalSlot: '55.0° O',
    nominalLon: -55.0,
    region: 'Amériques & Océan Atlantique',
    serviceSpotRadiusDeg: 36,
    spotBeamType: 'GX Faisceau régional Ka',
    coverageZone: {
      name: 'Amériques & Océan Atlantique',
      bounds: { minLat: -55, maxLat: 62, minLon: -120, maxLon: -5 },
      center: { lat: 10, lon: -60 },
      countries: ['Amériques (Nord & Sud)', 'Océan Atlantique', 'Caraïbes'],
      services: ['GX Ka Aviation & Maritime', 'Offshore pétrolier & gazier', 'Militaire & Gouvernement'],
      beamArchitecture: 'GX Ka Spot Beams Amériques',
      peakThroughput: 'Réseau Global Xpress'
    },
    description: 'Fournit la couverture Global Xpress aux Amériques et corridors atlantiques.',
    launchDate: '2015-02-01',
    launchVehicle: 'Proton-M / Briz-M',
    order: 8
  },
  {
    id: 40882,
    name: 'I-5 F3',
    alias: 'GX3 · Région Pacifique',
    band: 'Ka',
    status: 'service',
    category: 'gx',
    capacity: 'Global Xpress Ka',
    orbitalSlot: '179.6° E',
    nominalLon: 179.6,
    region: 'Région Pacifique & Océanie',
    serviceSpotRadiusDeg: 36,
    spotBeamType: 'GX Faisceau régional Ka',
    coverageZone: {
      name: 'Région Pacifique & Océanie',
      bounds: { minLat: -50, maxLat: 55, minLon: 115, maxLon: -130 },
      center: { lat: -10, lon: 175 },
      countries: ['Australie & Nouvelle-Zélande', 'Pacifique Sud & Océanie', 'Asie de l\'Est côtière'],
      services: ['GX Ka Maritime & Aviation Pacifique', 'Mines, Défense & Énergie'],
      beamArchitecture: 'GX Ka Spot Beams Pacifique',
      peakThroughput: 'Réseau Global Xpress'
    },
    description: 'Assure la connectivité Global Xpress sur le Pacifique et l’Australie.',
    launchDate: '2015-08-28',
    launchVehicle: 'Proton-M / Briz-M',
    order: 9
  },
  {
    id: 42698,
    name: 'I-5 F4',
    alias: 'GX4 · Moyen-Orient & Europe',
    band: 'Ka',
    status: 'service',
    category: 'gx',
    capacity: 'Global Xpress Ka',
    orbitalSlot: '56.5° E',
    nominalLon: 56.5,
    region: 'Moyen-Orient & Europe',
    serviceSpotRadiusDeg: 36,
    spotBeamType: 'GX Faisceau régional Ka',
    coverageZone: {
      name: 'Moyen-Orient, Europe & Asie du Sud',
      bounds: { minLat: 10, maxLat: 65, minLon: -10, maxLon: 80 },
      center: { lat: 35, lon: 45 },
      countries: ['Europe', 'Moyen-Orient', 'Asie du Sud', 'Afrique du Nord'],
      services: ['GX Ka Capacité flexible', 'Aéroports européens & transit', 'Gouvernements'],
      beamArchitecture: 'GX Ka Haute Capacité',
      peakThroughput: 'Réseau Global Xpress'
    },
    description: 'Capacité supplémentaire dédiée à la mobilité aérienne et aux gouvernements.',
    launchDate: '2017-05-15',
    launchVehicle: 'Falcon 9',
    order: 10
  },
  {
    id: 44801,
    name: 'GX5',
    alias: 'I-5 F5 · VHTS Europe & Moyen-Orient',
    band: 'Ka',
    status: 'service',
    category: 'gx',
    capacity: '30+ Gbps VHTS',
    orbitalSlot: '11.0° E',
    nominalLon: 11.0,
    region: 'Europe, Méditerranée & Moyen-Orient',
    serviceSpotRadiusDeg: 22,
    spotBeamType: 'VHTS Ka Europe & Moyen-Orient',
    coverageZone: {
      name: 'Europe, Méditerranée & Moyen-Orient',
      bounds: { minLat: 20, maxLat: 66, minLon: -15, maxLon: 55 },
      center: { lat: 46, lon: 12 },
      countries: ['Europe de l\'Ouest & Centrale', 'Royaume-Uni & Scandinavie', 'Bassin méditerranéen', 'Moyen-Orient'],
      services: ['Aviation européenne très haute densité (Air France, Lufthansa)', 'Superyachts & Maritime', 'Gouvernement'],
      beamArchitecture: 'Faisceaux ciblés VHTS Ka sur hubs aéroportuaires',
      peakThroughput: '30+ Gbps VHTS'
    },
    description: 'Satellite très haute capacité (VHTS) optimisé pour le trafic aérien européen dense.',
    launchDate: '2019-11-26',
    launchVehicle: 'Ariane 5 ECA',
    order: 11
  },
  {
    id: 60422,
    name: 'GX10A',
    alias: 'ASBM-1 · Partenaire Arctique',
    band: 'Ka',
    status: 'partner',
    category: 'arctic',
    capacity: 'Global Xpress Ka',
    orbitalSlot: 'Orbite HEO Molniya',
    nominalLon: 0.0,
    region: 'Région Arctique & Pôle Nord (>65° N)',
    serviceSpotRadiusDeg: 26,
    spotBeamType: 'HEO Molniya Boréal Ka',
    coverageZone: {
      name: 'Région Arctique & Pôle Nord (>65° N)',
      bounds: { minLat: 62, maxLat: 90, minLon: -180, maxLon: 180 },
      center: { lat: 78, lon: 15 },
      countries: ['Région Arctique (>65° N)', 'Groenland', 'Mer de Norvège', 'Passage du Nord-Ouest', 'Pôle Nord'],
      services: ['Aviation polaire (routes Asie-Amérique)', 'Recherche scientifique & brise-glaces', 'Défense OTAN / Norvège'],
      beamArchitecture: 'Orbite HEO Molniya 24/7 pôle Nord',
      peakThroughput: 'Haut débit polaire dédié'
    },
    description: 'Charge utile Viasat GX sur satellite norvégien en orbite très elliptique pour couvrir le pôle Nord.',
    launchDate: '2024-08-11',
    launchVehicle: 'Falcon 9',
    order: 12
  },
  {
    id: 60423,
    name: 'GX10B',
    alias: 'ASBM-2 · Partenaire Arctique',
    band: 'Ka',
    status: 'partner',
    category: 'arctic',
    capacity: 'Global Xpress Ka',
    orbitalSlot: 'Orbite HEO Molniya',
    nominalLon: 0.0,
    region: 'Région Arctique & Pôle Nord (>65° N)',
    serviceSpotRadiusDeg: 26,
    spotBeamType: 'HEO Molniya Boréal Ka',
    coverageZone: {
      name: 'Région Arctique & Pôle Nord (>65° N)',
      bounds: { minLat: 62, maxLat: 90, minLon: -180, maxLon: 180 },
      center: { lat: 78, lon: 15 },
      countries: ['Région Arctique (>65° N)', 'Groenland', 'Mer de Norvège', 'Passage du Nord-Ouest', 'Pôle Nord'],
      services: ['Aviation polaire continue', 'Surveillance boréale', 'Gouvernements nordiques'],
      beamArchitecture: 'Orbite HEO Molniya 24/7 pôle Nord',
      peakThroughput: 'Haut débit polaire dédié'
    },
    description: 'Satellite jumeau en orbite Molniya assurant une continuité de service 24/7 au-delà du cercle polaire.',
    launchDate: '2024-08-11',
    launchVehicle: 'Falcon 9',
    order: 13
  },

  // Flotte Inmarsat Mobilité Bande L & S (Viasat)
  {
    id: 50319,
    name: 'I-6 F1',
    alias: 'GX6A · Dual Bande L & Ka',
    band: 'L / Ka',
    status: 'service',
    category: 'inmarsat',
    capacity: 'Bande L & Ka',
    orbitalSlot: '83.7° E',
    nominalLon: 83.7,
    region: 'Océan Indien & Asie',
    serviceSpotRadiusDeg: 36,
    spotBeamType: 'Dual L-Band MSS & Ka-Band GX',
    slide5Color: '#b388ff',
    gateways: { primary: 'Perth (Australie)', secondary: 'Merredin (Australie)', arinc: 'XXI, X4I, X5I', sita: 'IOR5, IOR9, IOR7, IOR8', adcc: 'B3I, B1I' },
    safetyDataLink: { fans: 'FANS 1/A (RCP240 / RSP180)', sbs: 'SwiftBroadband-Safety 1.0 & 2.0 (IOE)', voice: 'Dual Voice / SATVOICE VoIP', classicAero: 'Classic Aero over I-6' },
    coverageZone: {
      name: 'Océan Indien, Asie & Moyen-Orient (IOR/IOE)',
      bounds: { minLat: -45, maxLat: 60, minLon: 10, maxLon: 120 },
      center: { lat: 10, lon: 65 },
      countries: ['Moyen-Orient', 'Inde & Asie du Sud-Est', 'Afrique de l\'Est', 'Océan Indien'],
      services: ['Dual-Band : Sécurité SMDSM bande L + Haut débit GX bande Ka', 'Aviation commerciale & d\'affaires'],
      beamArchitecture: 'MSS Bande L numérique + GX Ka',
      peakThroughput: 'Bande L ELERA + GX Ka'
    },
    description: 'Satellite hybride combinant sécurité aéronautique bande L (FANS 1/A, SB-S) et très haut débit GX bande Ka.',
    launchDate: '2021-12-22',
    launchVehicle: 'H-IIA 204',
    order: 14
  },
  {
    id: 39215,
    name: 'Alphasat',
    alias: 'I-4A F4 · EMEA Bande L',
    band: 'L',
    status: 'service',
    category: 'inmarsat',
    capacity: 'Bande L avancée',
    orbitalSlot: '25.0° E',
    nominalLon: 25.0,
    region: 'Europe, Afrique, Moyen-Orient (EMEA)',
    serviceSpotRadiusDeg: 36,
    spotBeamType: 'Bande L MSS EMEA',
    slide5Color: '#00e676',
    gateways: { primary: 'Fucino (Italie)', secondary: 'Thermopyles (Grèce) & Burum (Pays-Bas)', arinc: 'XXF, X4E, X5E', sita: 'EUA1, EUA9, EUA7, EUA8', adcc: 'B4E, B1E' },
    safetyDataLink: { fans: 'FANS 1/A & FANS 3/C (Iris)', iris: 'SB-S Iris ATN/OSI (ATS B2, CPDLC RCP130, ADS-C EPP, 4D TBO)', voice: 'Dual Voice / SATVOICE VoIP', classicAero: 'Classic Aero over I-4' },
    coverageZone: {
      name: 'Europe, Afrique & Moyen-Orient (EMEA)',
      bounds: { minLat: -40, maxLat: 68, minLon: -25, maxLon: 70 },
      center: { lat: 20, lon: 25 },
      countries: ['Europe entière (UE, UK)', 'Afrique subsaharienne & Nord', 'Moyen-Orient'],
      services: ['Iris Airspace Modernization (FANS 3/C, ATS B2)', 'Bande L MSS de sécurité', 'SMDSM / GMDSS maritime'],
      beamArchitecture: 'Grand réflecteur 12m bande L multispot',
      peakThroughput: 'Réseau ELERA Bande L'
    },
    description: 'Pilier du programme Iris en Europe pour la modernisation du trafic aérien (ATS B2, CPDLC RCP130, 4D TBO).',
    launchDate: '2013-07-25',
    launchVehicle: 'Ariane 5 ECA',
    order: 15
  },
  {
    id: 28899,
    name: 'I-4 F2',
    alias: 'Asie-Pacifique · Bande L',
    band: 'L',
    status: 'service',
    category: 'inmarsat',
    capacity: 'Bande L BGAN',
    orbitalSlot: '143.5° E',
    nominalLon: 143.5,
    region: 'Asie-Pacifique & Océanie (APAC)',
    serviceSpotRadiusDeg: 36,
    spotBeamType: 'Bande L BGAN régional',
    slide5Color: '#e91e63',
    gateways: { primary: 'Paumalu (Hawaii, US)', secondary: 'Auckland / Warkworth (Nouvelle-Zélande)', arinc: 'XXA, XXP, X4P, X5P', sita: 'APK1, APK2, APK9, APK7, APK8', adcc: 'B4P, B3P, B1P' },
    safetyDataLink: { fans: 'FANS 1/A (RCP240 / RSP180)', sbs: 'SwiftBroadband-Safety 1.0 & 2.0 (APAC)', voice: 'Dual Voice / SATVOICE VoIP', classicAero: 'Classic Aero over I-4' },
    coverageZone: {
      name: 'Asie-Pacifique & Océanie (APAC / POR)',
      bounds: { minLat: -50, maxLat: 65, minLon: 70, maxLon: 180 },
      center: { lat: 0, lon: 143.5 },
      countries: ['Asie de l\'Est & du Sud', 'Australie & Nouvelle-Zélande', 'Pacifique Ouest & Central'],
      services: ['FANS 1/A Safety Data Link', 'BGAN voix & données IP', 'Sécurité maritime SMDSM/GMDSS'],
      beamArchitecture: 'Bande L BGAN régional',
      peakThroughput: 'BGAN Bande L'
    },
    description: 'Fournit la couverture de sécurité vitale FANS 1/A et Classic Aero sur la région Asie-Pacifique.',
    launchDate: '2005-11-08',
    launchVehicle: 'Ariane 5 ECA',
    order: 16
  },
  {
    id: 33278,
    name: 'I-4 F3',
    alias: 'Amériques · Bande L',
    band: 'L',
    status: 'service',
    category: 'inmarsat',
    capacity: 'Bande L BGAN',
    orbitalSlot: '98.0° O',
    nominalLon: -98.0,
    region: 'Amériques & Pacifique Est',
    serviceSpotRadiusDeg: 36,
    spotBeamType: 'Bande L BGAN Amériques',
    slide5Color: '#00e5ff',
    gateways: { primary: 'Paumalu (Hawaii, US)', secondary: 'Laurentides (Canada)', arinc: 'XXH, XXW, X4A, X5A', sita: 'AME1, AME2, AME9, AME7, AME8', adcc: 'B4A, B3W, B1A' },
    safetyDataLink: { fans: 'FANS 1/A (RCP240 / RSP180)', sbs: 'SwiftBroadband-Safety 1.0 & 2.0 (AMER)', voice: 'Dual Voice / SATVOICE VoIP', classicAero: 'Classic Aero over I-4' },
    coverageZone: {
      name: 'Continent américain & Pacifique Est (AMER)',
      bounds: { minLat: -55, maxLat: 65, minLon: -160, maxLon: -30 },
      center: { lat: 15, lon: -95 },
      countries: ['Amérique du Nord (USA, Canada, Mexique)', 'Amérique centrale & Caraïbes', 'Amérique du Sud', 'Pacifique Est'],
      services: ['FANS 1/A Safety Data Link', 'SwiftBroadband-Safety 1.0 & 2.0', 'Affaires maritimes'],
      beamArchitecture: 'Bande L BGAN Amériques',
      peakThroughput: 'BGAN Bande L'
    },
    description: 'Assure la couverture de sécurité aéronautique FANS 1/A et maritime sur l’ensemble des Amériques.',
    launchDate: '2008-08-18',
    launchVehicle: 'Proton-M / Briz-M',
    order: 17
  },
  {
    id: 28628,
    name: 'I-4 F1',
    alias: 'Satellite de secours · Bande L',
    band: 'L',
    status: 'reserve',
    category: 'inmarsat',
    capacity: 'Bande L réserve',
    orbitalSlot: '143.5° E',
    nominalLon: 143.5,
    region: 'Région Pacifique',
    serviceSpotRadiusDeg: 36,
    spotBeamType: 'Bande L réserve',
    slide5Color: '#818cf8',
    coverageZone: {
      name: 'Région Pacifique & Asie de l\'Est',
      bounds: { minLat: -50, maxLat: 60, minLon: 80, maxLon: 180 },
      center: { lat: 0, lon: 143 },
      countries: ['Pacifique Ouest', 'Australie', 'Japon & Asie de l\'Est'],
      services: ['Bande L réserve opérationnelle', 'Télémesure & relais'],
      beamArchitecture: 'Bande L réserve',
      peakThroughput: 'Réserve opérationnelle'
    },
    description: 'Déplacé pour réserve opérationnelle et résilience de secours (contingency fleet).',
    launchDate: '2005-03-11',
    launchVehicle: 'Atlas V 431',
    order: 18
  },
  {
    id: 42814,
    name: 'EAN',
    alias: 'Hellas-Sat 3 · Charge utile S',
    band: 'S',
    status: 'partner',
    category: 'inmarsat',
    capacity: 'Bande S EAN',
    orbitalSlot: '39.0° E',
    nominalLon: 39.0,
    region: 'Espace aérien européen',
    serviceSpotRadiusDeg: 18,
    spotBeamType: 'Bande S EAN Aviation',
    slide5Color: '#38bdf8',
    coverageZone: {
      name: 'Espace aérien européen (EAN)',
      bounds: { minLat: 34, maxLat: 62, minLon: -10, maxLon: 35 },
      center: { lat: 48, lon: 10 },
      countries: ['Union Européenne (France, Allemagne, Italie, Espagne...)', 'Royaume-Uni', 'Suisse', 'Norvège'],
      services: ['European Aviation Network', 'WiFi en vol 4G/LTE + Bande S satellite', 'Compagnies UE'],
      beamArchitecture: 'Bande S pan-européenne hybride sol/satellite',
      peakThroughput: 'EAN Hybride air-sol'
    },
    description: 'European Aviation Network : connectivité air-sol hybride haut débit pour les compagnies aériennes européennes.',
    launchDate: '2017-06-28',
    launchVehicle: 'Ariane 5 ECA',
    order: 19
  },
  {
    id: 25153,
    name: 'I-3 F5',
    alias: 'Atlantique · Bande L',
    band: 'L',
    status: 'service',
    category: 'inmarsat',
    capacity: 'Bande L MSS',
    orbitalSlot: '54.0° O',
    nominalLon: -54.0,
    region: 'Océan Atlantique Ouest',
    serviceSpotRadiusDeg: 38,
    spotBeamType: 'Bande L MSS Atlantique',
    slide5Color: '#e6ee28',
    gateways: { primary: 'Laurentides (Canada)', secondary: 'None', arinc: 'XXN', sita: 'AOE6', adcc: 'B3E' },
    safetyDataLink: { fans: 'FANS 1/A (RCP240 / RSP180)', classicAero: 'Classic Aero (AORE)', voice: 'Dual Voice / SATVOICE' },
    coverageZone: {
      name: 'Océan Atlantique (AORE / AOR-W)',
      bounds: { minLat: -50, maxLat: 60, minLon: -100, maxLon: 0 },
      center: { lat: 10, lon: -50 },
      countries: ['Corridor Atlantique Nord & Sud', 'Europe de l\'Ouest', 'Amériques côtières', 'Afrique de l\'Ouest'],
      services: ['Classic Aero (AORE)', 'Sécurité maritime SMDSM', 'FANS 1/A'],
      beamArchitecture: 'Bande L MSS Atlantique',
      peakThroughput: 'Classic Aero / MSS'
    },
    description: 'Pilier du service de sécurité Classic Aero sur le corridor océanique Atlantique (AORE).',
    launchDate: '1998-02-04',
    launchVehicle: 'Ariane 44LP',
    order: 20
  },
  {
    id: 23839,
    name: 'I-3 F1',
    alias: 'Satellite de secours · Océan Indien',
    band: 'L',
    status: 'reserve',
    category: 'inmarsat',
    capacity: 'Bande L MSS',
    orbitalSlot: '64.5° E',
    nominalLon: 64.5,
    region: 'Océan Indien',
    serviceSpotRadiusDeg: 38,
    spotBeamType: 'Bande L MSS Océan Indien',
    coverageZone: {
      name: 'Océan Indien & Voies maritimes',
      bounds: { minLat: -50, maxLat: 60, minLon: 15, maxLon: 120 },
      center: { lat: 5, lon: 65 },
      countries: ['Océan Indien', 'Péninsule arabique', 'Inde côtière'],
      services: ['Bande L MSS de réserve', 'Sécurité de navigation'],
      beamArchitecture: 'Bande L MSS Océan Indien',
      peakThroughput: 'MSS Héritage (Réserve)'
    },
    description: 'Satellite Inmarsat-3 maintenu en orbite comme réserve opérationnelle (spare).',
    launchDate: '1996-04-03',
    launchVehicle: 'Atlas IIA',
    order: 21
  },
  {
    id: 24307,
    name: 'I-3 F2',
    alias: 'Satellite de secours · Atlantique Est',
    band: 'L',
    status: 'reserve',
    category: 'inmarsat',
    capacity: 'Bande L MSS',
    orbitalSlot: '15.5° O',
    nominalLon: -15.5,
    region: 'Atlantique Est',
    serviceSpotRadiusDeg: 38,
    spotBeamType: 'Bande L MSS Atlantique Est',
    coverageZone: {
      name: 'Atlantique Est & Afrique de l\'Ouest',
      bounds: { minLat: -50, maxLat: 60, minLon: -60, maxLon: 40 },
      center: { lat: 10, lon: -15 },
      countries: ['Atlantique Est', 'Europe côtière', 'Afrique de l\'Ouest'],
      services: ['Bande L MSS de réserve', 'Sécurité de navigation'],
      beamArchitecture: 'Bande L MSS Atlantique Est',
      peakThroughput: 'MSS Héritage (Réserve)'
    },
    description: 'Satellite Inmarsat-3 maintenu en orbite comme réserve opérationnelle (spare).',
    launchDate: '1996-09-06',
    launchVehicle: 'Proton-K / DM1',
    order: 22
  },
  {
    id: 24674,
    name: 'I-3 F3',
    alias: 'Satellite de secours · Pacifique',
    band: 'L',
    status: 'reserve',
    category: 'inmarsat',
    capacity: 'Bande L MSS',
    orbitalSlot: '178.0° E',
    nominalLon: 178.0,
    region: 'Pacifique',
    serviceSpotRadiusDeg: 38,
    spotBeamType: 'Bande L MSS Pacifique',
    coverageZone: {
      name: 'Océan Pacifique & Océanie',
      bounds: { minLat: -50, maxLat: 60, minLon: 120, maxLon: -120 },
      center: { lat: 0, lon: 178 },
      countries: ['Océan Pacifique', 'Océanie', 'Polynésie'],
      services: ['Bande L MSS de réserve', 'Sécurité maritime'],
      beamArchitecture: 'Bande L MSS Pacifique',
      peakThroughput: 'MSS Héritage (Réserve)'
    },
    description: 'Satellite Inmarsat-3 maintenu en orbite comme réserve opérationnelle (spare).',
    launchDate: '1996-12-18',
    launchVehicle: 'Atlas IIA',
    order: 23
  }
];

// Identifiants historiques Inmarsat (pour compatibilité avec les tests de scripts existants)
const legacyInmarsatIds = new Set([
  50319, 28899, 33278, 39215, 28628, 39476, 40384, 40882, 42698, 44801,
  25153, 23839, 24307, 24674, 42814, 60422, 60423
]);

// Stations sol / Passerelles satellite Viasat & Inmarsat (Gateways - FIT Asia 2025 Slide 6)
export const groundStations = [
  { id: 'paumalu', name: 'Paumalu (Hawaii, US)', lat: 21.67, lon: -158.03, role: 'Gateway Primaire APAC & AMER (ACARS, SB-S)' },
  { id: 'laurentides', name: 'Laurentides (Québec, Canada)', lat: 45.75, lon: -74.00, role: 'Gateway AORE & AMER (Classic Aero, ACARS)' },
  { id: 'fucino', name: 'Fucino (Italie)', lat: 41.97, lon: 13.60, role: 'Gateway Primaire EMEA & Iris (ATN/OSI)' },
  { id: 'thermopylae', name: 'Thermopyles (Grèce)', lat: 38.80, lon: 22.53, role: 'Gateway Secondaire EMEA (SB-S 2.0)' },
  { id: 'burum', name: 'Burum (Pays-Bas)', lat: 53.27, lon: 6.23, role: 'Gateway Passerelle Burum SB-S 2.0' },
  { id: 'perth', name: 'Perth (Australie Occidentale)', lat: -31.95, lon: 115.86, role: 'Gateway Primaire IOR / Océan Indien (Classic Aero, SB-S)' },
  { id: 'merredin', name: 'Merredin (Australie)', lat: -31.48, lon: 118.28, role: 'Gateway Secondaire & Rainfade IOR' },
  { id: 'warkworth', name: 'Warkworth (Nouvelle-Zélande)', lat: -36.43, lon: 174.66, role: 'Gateway Secours APAC (virtual I-3 POR)' },
  { id: 'tempe', name: 'Tempe (Arizona, US)', lat: 33.42, lon: -111.94, role: 'Gateway Passerelle SBD & IP Certus' }
];

// Constellation de sécurité mondiale bande L (Slide 5 officielle FIT Asia 2025)
export const slide5FleetIds = [25153, 28899, 33278, 39215, 50319];

export function fleetInfo(item) {
  const id = Number(item?.NORAD_CAT_ID ?? item?.id ?? item);
  return fleet.find(x => x.id === id);
}

export function isViasatSatellite(item) {
  return Boolean(fleetInfo(item));
}

export function isInmarsatSatellite(item) {
  const id = Number(item?.NORAD_CAT_ID ?? item?.id ?? item);
  return legacyInmarsatIds.has(id);
}

export function isOperationalLBandSatellite(item) {
  const info = fleetInfo(item);
  if (!info) return false;
  return Boolean(info.band?.includes('L')) && info.status === 'service';
}

export const fleetCategories = [
  { id: 'all', label: 'Tous (5)' },
  { id: 'ior', label: 'IOR · Indien' },
  { id: 'emea', label: 'EMEA · Europe-Afrique' },
  { id: 'apac', label: 'APAC · Pacifique' },
  { id: 'amer', label: 'AMER · Amériques' },
  { id: 'aore', label: 'AORE · Atlantique' }
];

export function greatCircleDistanceDeg(lat1, lon1, lat2, lon2) {
  const phi1 = (lat1 * Math.PI) / 180;
  const phi2 = (lat2 * Math.PI) / 180;
  const dPhi = phi2 - phi1;
  const dLam = ((lon2 - lon1) * Math.PI) / 180;
  const a = Math.sin(dPhi / 2) ** 2 + Math.cos(phi1) * Math.cos(phi2) * (Math.sin(dLam / 2) ** 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (c * 180) / Math.PI;
}

export function isPointInCoverage(lat, lon, meta) {
  if (!meta || !meta.coverageZone) return false;
  const cz = meta.coverageZone;

  // Appartenance à la zone illustrative, sans validation de couverture commerciale.
  // Unification avec le contour dessiné et le diamètre annoncé :
  // Si le satellite dispose d'un centre de faisceau et d'un rayon angulaire utile,
  // la zone indicative correspond strictement à ce cercle géométrique.
  if (cz.center && meta.serviceSpotRadiusDeg) {
    const distDeg = greatCircleDistanceDeg(lat, lon, cz.center.lat, cz.center.lon);
    return distDeg <= meta.serviceSpotRadiusDeg;
  }

  // Fallback si rayon utile sans centre explicite (centré au nadir nominal)
  if (meta.serviceSpotRadiusDeg && meta.nominalLon != null) {
    const distDeg = greatCircleDistanceDeg(lat, lon, 0, meta.nominalLon);
    return distDeg <= meta.serviceSpotRadiusDeg;
  }

  // Fallback pour satellites sans rayon circulaire défini (boîte géographique pure)
  if (cz.bounds) {
    const { minLat, maxLat, minLon, maxLon } = cz.bounds;
    const inLat = lat >= minLat && lat <= maxLat;
    let inLon = false;
    if (minLon <= maxLon) {
      inLon = lon >= minLon && lon <= maxLon;
    } else {
      inLon = lon >= minLon || lon <= maxLon;
    }
    return inLat && inLon;
  }

  return false;
}
