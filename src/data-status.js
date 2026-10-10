import { isOperationalLBandSatellite } from '../shared/catalogue.js';

// Décrit les données réellement affichées, sans compter les sources d'autres flottes.
export function orbitalDataStatus(payload) {
  const visible = (payload.items || []).filter(isOperationalLBandSatellite);
  const tagged = visible.every(item => item.DATA_SOURCE);
  const recent = tagged
    ? visible.filter(item => item.DATA_SOURCE === 'celestrak').length
    : payload.live ? visible.length : 0;
  if (!recent) return {
    level: 'offline', label: 'Données orbitales de secours',
    message: 'Hors ligne · Positions calculées depuis les éléments de secours'
  };
  if (recent < visible.length || (!tagged && payload.degraded)) return {
    level: 'degraded', label: 'Données orbitales partiellement actualisées',
    message: `CelesTrak · ${recent} / ${visible.length} satellites actualisés · secours pour les autres`
  };
  return {
    level: 'live', label: 'Éléments orbitaux CelesTrak actualisés',
    message: `CelesTrak · ${visible.length} satellites · Positions calculées par SGP4`
  };
}
