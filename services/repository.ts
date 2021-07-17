import { NuxtAxiosInstance } from '@nuxtjs/axios';

export default ($axios: NuxtAxiosInstance) => ({
  get(url: string) {
    return $axios.$get(`${url}`);
  },

  post(url: string, payload: object) {
    return $axios.$post(`${url}`, payload);
  },

  put(url: string, payload: object) {
    return $axios.$put(`${url}`, payload);
  },

  delete(url: string) {
    return $axios.$delete(`${url}`);
  },
});
