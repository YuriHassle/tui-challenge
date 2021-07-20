import { Actions } from './types';

export default {
  async fetchOffers(context, payload) {
    const app = window.$nuxt.context.app;
    const { data: offers } = await app.$hotelsRepo.getOffers(payload);
    console.log(offers);
    //context.commit('SET_OFFERS', offers);
  },
} as Actions;
