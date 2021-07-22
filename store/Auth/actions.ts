import { Actions } from './types';

export default {
  async authenticate(_, app) {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', 'lQhJc13klPEoCQ7ouGFzSD3qXSUBlxqJ');
    params.append('client_secret', '6Hn0Al53AWuZpRTW');

    return app.$hotelsRepo.getAccessToken(params);
  },
} as Actions;
