import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { serializeParams } from '~/helpers';
import createRepository from './repository';
import { Search as getOffersParams } from '~/store/MySearch/types';
import { Credentials } from '~/store/Auth/types';

const authURL = '/v1/security/oauth2/token';
const hotelsURL = '/v2/shopping/hotel-offers';

export default ($axios: NuxtAxiosInstance) => () => ({
  getAccessToken(body: Credentials) {
    return createRepository($axios).post(authURL, body, {
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    });
  },

  getOffers(queryParams: getOffersParams) {
    const params = serializeParams(queryParams);
    return createRepository($axios).get(`${hotelsURL}${params}`);
  },

  getOffersByHotel(queryParams: { hotelId: number }) {
    const params = serializeParams(queryParams);
    return createRepository($axios).get(`${hotelsURL}/by-hotel${params}`);
  },

  getOffersById(id: number) {
    return createRepository($axios).get(`${hotelsURL}/${id}`);
  },
});
