<template>
  <div>
    <div class="container">
      <img src="~assets/images/hotel.jpg" alt="hotel-cover" class="image" />
      <div class="text-container">
        <p class="text-container__title">{{ hotelInfo.hotel.name }}</p>
        <p class="text-container__subtitle">
          {{ address.countryCode }},
          {{ address.cityName }}
        </p>
        <p v-if="sortedOffers[0].price.total" class="text-container__price">
          Hospedagens a partir de
          {{
            sortedOffers[0].price.total.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })
          }}
        </p>
        <p v-else class="text-container__price">
          Clique para consultar o preço
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { HotelOffers } from '~/store/HotelOffers/types';

  type Address = HotelOffers['hotel']['address'];
  type Offers = HotelOffers['offers'];

  export default Vue.extend({
    props: {
      hotelInfo: Object as () => HotelOffers,
    },
    computed: {
      sortedOffers(): Offers {
        const offers = [...this.hotelInfo.offers];
        const sortedOffers = offers.sort(
          ({ price: a }, { price: b }) =>
            parseFloat(b.total) - parseFloat(a.total)
        );
        return sortedOffers;
      },
      address(): Address {
        return this.hotelInfo.hotel.address;
      },
    },
  });
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    padding: 10px 10px;
  }
  .text-container {
    padding: 0px 15px;
    display: flex;
    flex-direction: column;
  }
  .text-container__title {
    font-size: 2.2rem;
    font-style: bold;
    color: #092a5e;
  }
  .text-container__subtitle {
    font-size: 1.3rem;
    font-style: normal;
    color: #092a5e;
  }
  .text-container__price {
    font-size: 1.1rem;
    font-style: normal;
    color: #092a5e;
  }
  .image {
    width: 20rem;
    height: 12rem;
  }
</style>
