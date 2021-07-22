import brazilCities from './utils/availableCities/br.json';
import italyCities from './utils/availableCities/it.json';
import portugalCities from './utils/availableCities/pt.json';
import spainCities from './utils/availableCities/es.json';
import { City } from './types';

export function getAvailableCities() {
  const availableCities = [
    ...brazilCities,
    ...italyCities,
    ...portugalCities,
    ...spainCities,
  ].map(({ city, admin_name, lat, lng, country }) => ({
    name: city,
    country,
    admin_name,
    latitude: lat,
    longitude: lng,
  })) as City[];

  return availableCities;
}
