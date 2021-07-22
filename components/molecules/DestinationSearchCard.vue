<template>
  <div>
    <div class="container">
      <label class="subtitle" for="">Para onde você quer ir?</label>
      <CityAutoComplete :cityList="filteredList" @input="handleInput" />
    </div>
    <div class="container">
      <label class="subtitle" for="">Quando você quer ir?</label>
      <DatePicker @handleDatePicker="handleDatePicker" />
    </div>
    <div class="container">
      <GuestSelector @handleMenuClick="handleMenuClick" />
    </div>
    <div class="container__button">
      <Button :label="'Procurar'" @handleButtonClick="handleButtonClick" />
    </div>
    <div v-if="message" class="message-container">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { getAvailableCities, formatDateToYearMonthDay } from '~/helpers';
  import { mapState, mapMutations, mapActions } from 'vuex';
  import { Mutations as SearchMT } from '~/store/MySearch/types';
  import { City } from '~/helpers/types';

  export default Vue.extend({
    data() {
      return {
        citiesList: getAvailableCities(),
        filterInput: '',
        selectedCity: {},
        message: '',
      };
    },
    computed: {
      ...mapState('MySearch', ['search']),
      ...mapState('HotelOffers', ['hotelOffers']),
      filteredList(): City[] {
        if (!this.filterInput) return this.citiesList;

        return this.citiesList
          .filter(
            ({ name }) =>
              name
                .trim()
                .normalize('NFD')
                .toLowerCase()
                .replace(/[\u0300-\u036f]/g, '')
                .indexOf(
                  this.filterInput
                    .trim()
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                ) !== -1
          )
          .slice(0, 8);
      },
    },
    methods: {
      ...mapMutations({
        setSearch: `MySearch/${SearchMT.SET_SEARCH}`,
      }),
      ...mapActions({
        searchOffers: `MySearch/fetchOffers`,
      }),
      handleInput(e: { value: string; selectedCity: City }) {
        this.filterInput = e.value;
        if (e.selectedCity) {
          this.selectedCity = e.selectedCity;
          this.setSearch({
            ...this.search,
            latitude: e.selectedCity.latitude,
            longitude: e.selectedCity.longitude,
          });
        }
      },
      handleDatePicker(range: { start: Date; end: Date }) {
        this.setSearch({
          ...this.search,
          checkInDate: formatDateToYearMonthDay(range.start),
          checkOutDate: formatDateToYearMonthDay(range.end),
        });
      },
      handleMenuClick(guestQuantity: number) {
        this.setSearch({
          ...this.search,
          adults: guestQuantity,
        });
      },
      async handleButtonClick() {
        if (Object.keys(this.selectedCity).length === 0) {
          this.message = 'Por favor, selecione uma cidade';
        } else {
          this.message = 'Carregando...';
          this.searchOffers(this.search)
            .then(() => {
              if (this.hotelOffers.length > 0) {
                this.$router.push({
                  name: 'offers',
                });
              } else {
                this.message =
                  'Não foi possível encontar hospedagens com esses parâmetros. Por favor, tente em novas datas.';
              }
            })
            .catch((error) => {
              this.message = 'Erro ao consultar a hospedagem';
            });
        }
      },
    },
  });
</script>

<style scoped lang="scss">
  .subtitle {
    font-size: 1.3rem;
  }
  .container {
    margin-bottom: 1.2rem;
  }
  .container__button {
    margin-top: 2rem;
  }
  .message-container {
    margin-top: 1rem;
    width: 60%;
    flex-wrap: wrap;
    p {
      color: #092a5e;
      font-size: 1.1rem;
    }
  }
</style>
