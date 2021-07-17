<template>
  <section>
    <div>
      Tui Challenge
      <p v-if="$fetchState.pending">Fetching mountains...</p>
      <p v-else-if="$fetchState.error">An error occurred :(</p>
      <div v-else>
        <div v-for="offer in hotels" :key="offer.hotel.hotelId">
          {{ offer.hotel.name }}
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data() {
      return {
        hotels: [],
        teste: 'hello',
      };
    },
    async fetch() {
      const { data } = await this.$nuxt.context.app.$hotelsRepo.getOffers({
        cityCode: 'PAR',
      });
      this.hotels = data;
    },
  });
</script>
