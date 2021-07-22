import { Actions } from './types';
import { Mutations as OffersMT } from '~/store/HotelOffers/types';

export default {
  async fetchOffers({ commit }, payload) {
    const app = window.$nuxt.context.app;
    try {
      const { data: offers } = await app.$hotelsRepo.getOffers(payload);
      console.log(offers);
      commit(`HotelOffers/${OffersMT.SET_HOTEL_OFFERS}`, offers, {
        root: true,
      });
    } catch (error: any) {
      console.log(error);
    }
  },
} as Actions;
