import { Plugin } from '@nuxt/types';
import hotelsRepository from '~/services/hotels';

const repositoryPlugin: Plugin = (ctx, inject) => {
  const hotelsRepositoryWithAxios = hotelsRepository(ctx.$axios);
  inject('hotelsRepo', hotelsRepositoryWithAxios());
};

export default repositoryPlugin;
