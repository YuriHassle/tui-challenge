<template>
  <div>
    <Button :label="'Voltar'" @handleButtonClick="handleGoBack" />
    <div v-for="offer in this.hotelOffers" :key="offer.hotel.hotelId">
      <HotelCard :hotelInfo="offer" />
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { mapState } from 'vuex';

  export default Vue.extend({
    computed: {
      ...mapState('HotelOffers', ['hotelOffers']),
    },
    methods: {
      handleGoBack() {
        this.$router.push({
          name: 'index',
        });
      },
    },
  });
</script>

<style scoped lang="scss"></style>
