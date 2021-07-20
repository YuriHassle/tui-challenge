import { Mutations, MutationsInterface } from './types';

export default {
  [Mutations.SET_SEARCH](state, search) {
    state.search = search;
  },
} as MutationsInterface;
