<template>
  <section>
    <div>
      Tui Challenge
      <Hero />
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data() {
      return {
        hotels: [],
      };
    },
    async fetch() {
      // const { data } = await this.$nuxt.context.app.$hotelsRepo.getOffers({
      //   cityCode: 'PAR',
      // });
      // this.hotels = data;
    },
  });
</script>
