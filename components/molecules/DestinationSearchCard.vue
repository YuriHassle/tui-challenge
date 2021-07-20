<template>
  <div>
    <label for="">Para onde você quer ir?</label>
    <CityAutoComplete :cityList="filteredList" @input="handleInput" />
    <DatePicker @handleDatePicker="handleDatePicker" />
    <GuestSelector @handleMenuClick="handleMenuClick" />
    <Button :label="'Procurar'" @handleButtonClick="handleButtonClick" />
    {{ this.search }}
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { getAvailableCities, formatDateToYearMonthDay } from '~/helpers';
  import { mapState, mapMutations, mapActions } from 'vuex';
  import { Mutations as SearchMT } from '~/store/MySearch/types';

  interface City {
    name: string;
    country: string;
    latitude: string;
    longitude: string;
  }

  export default Vue.extend({
    data() {
      return {
        citiesList: getAvailableCities(),
        filterInput: '',
        selectedCity: {},
      };
    },
    computed: {
      ...mapState('MySearch', ['search']),
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
          this.setSearch({
            ...this.search,
            latitude: e.selectedCity.latitude,
            longitude: e.selectedCity.longitude,
          });
        }
      },
      handleDatePicker(range: { start: Date; end: Date }) {
        console.log(range);
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
      handleButtonClick() {
        this.searchOffers(this.search);
      },
    },
  });
</script>

<style scoped></style>
