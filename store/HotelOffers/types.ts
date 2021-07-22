import { MutationTree, ActionTree } from 'vuex';

interface Address {
  lines: string[];
  postalCode: string;
  cityName: string;
  countryCode: string;
}

interface Contact {
  phone: string;
  fax: string;
  email: string;
}

interface Media {
  uri: string;
  category: string;
}

export interface Hotel {
  type: string;
  hotelId: string;
  chainCode: string;
  dupeId: string;
  name: string;
  rating: string;
  cityCode: string;
  latitude: number;
  longitude: number;
  hotelDistance: {
    distance: number;
    distanceUnit: string;
  };
  address: Address;
  contact: Contact;
  media: Media;
}

export interface Offer {
  id: string;
  checkInDate: string;
  checkOutDate: string;
  rateCode: string;
  room: {
    type: string;
    typeEstimated: {
      category: string;
      beds: number;
      bedType: string;
    };
    description: {
      text: string;
    };
  };
  guests: {
    adults: number;
  };
  price: {
    currency: string;
    total: string;
    variations: {
      average: {
        total: string;
      };
      changes: [
        {
          startDate: string;
          endDate: string;
          total: string;
        }
      ];
    };
  };
  policies: {
    deposit: {
      acceptedPayments: {
        creditCards: string[];
        methods: string[];
      };
    };
    paymentType: string;
  };
  self: string;
}

export interface HotelOffers {
  type: string;
  hotel: Hotel;
  available: boolean;
  offers: Offer[];
  self: string;
}

export interface State {
  selectedHotelId: string;
  hotelOffers?: HotelOffers[];
}

export enum Mutations {
  SET_SELECTED_HOTEL_ID = 'SET_SELECTED_HOTEL_ID',
  SET_HOTEL_OFFERS = 'SET_HOTEL_OFFERS',
}

export type RootState = ReturnType<() => State>;

export interface MutationsInterface extends MutationTree<RootState> {
  [Mutations.SET_SELECTED_HOTEL_ID](s: State, hotelId: string): void;
  [Mutations.SET_HOTEL_OFFERS](s: State, offers: HotelOffers[]): void;
}

export interface Actions extends ActionTree<RootState, RootState> {
  fetchOffersByHotel(context: any, payload: { hotelId: string }): Promise<void>;
}
