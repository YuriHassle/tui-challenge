import { Mutations, MutationsInterface } from './types';

export default {
  [Mutations.SET_SELECTED_HOTEL_ID](state, hotelId) {
    state.selectedHotelId = hotelId;
  },
  [Mutations.SET_HOTEL_OFFERS](state, offers) {
    state.hotelOffers = offers;
  },
} as MutationsInterface;
