import { ActionTree } from 'vuex';

export interface Credentials {
  grant_type: string;
  client_id: string;
  client_secret: string;
}

export interface State {}

export type RootState = ReturnType<() => State>;

export interface Actions extends ActionTree<RootState, RootState> {
  authenticate(context: any, app: any): Promise<void>;
}
