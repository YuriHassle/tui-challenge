import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { serializeParams } from '~/utils';
import createRepository from './repository';

interface Params {
  [key: string]: string;
}

const hotelsURL = '/shopping/hotel-offers';

export default ($axios: NuxtAxiosInstance) => () => ({
  getOffers(queryParams: Params) {
    const params = serializeParams(queryParams);
    return createRepository($axios).get(`${hotelsURL}${params}`);
  },

  getOffersByHotel(queryParams: Params) {
    const params = serializeParams(queryParams);
    return createRepository($axios).get(`${hotelsURL}/by-hotel${params}`);
  },

  getOffersById(id: number) {
    return createRepository($axios).get(`${hotelsURL}/${id}`);
  },
});
