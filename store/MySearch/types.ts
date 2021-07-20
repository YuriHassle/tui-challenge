import { MutationTree, ActionTree, ActionContext } from 'vuex';

export interface Search {
  latitude: number;
  longitude: number;
  radius: number;
  adults: number;
  checkInDate: string;
  checkOutDate: string;
}

export interface State {
  search: Search;
}

export enum Mutations {
  SET_SEARCH = 'SET_SEARCH',
}

export type RootState = ReturnType<() => State>;

export interface MutationsInterface extends MutationTree<RootState> {
  [Mutations.SET_SEARCH](s: State, search: Search): void;
}

export interface Actions extends ActionTree<RootState, RootState> {
  fetchOffers(context: any, payload: object): Promise<void>;
}
