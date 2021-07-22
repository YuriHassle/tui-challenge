<template>
  <div>
    <Nuxt />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapActions } from 'vuex';

  export default Vue.extend({
    methods: {
      ...mapActions({
        getAmadeusToken: `Auth/authenticate`,
      }),
    },
    async fetch() {
      const app = this.$nuxt.context.app;

      const cookie = app.$cookiz.get('amadeus_token');
      if (!cookie) {
        try {
          const { access_token } = await this.getAmadeusToken(app);
          app.$cookiz.set('amadeus_token', access_token);
        } catch (error) {
          console.log('Falha na autenticação', error);
        }
      }
    },
  });
</script>

<style></style>
