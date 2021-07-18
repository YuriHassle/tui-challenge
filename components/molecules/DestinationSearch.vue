<template>
  <div>
    <label for="">Para onde você quer ir?</label>
    <CityAutoComplete :list="filteredList" @input="handleInput" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { getAvailableCities } from '~/helpers';

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
    methods: {
      handleInput(e: { value: string; selectedCity: City }) {
        this.filterInput = e.value;
        if (e.selectedCity) {
          this.selectedCity = e.selectedCity;
        }
      },
    },
    computed: {
      filteredList(): City[] {
        if (this.filterInput) {
          return this.citiesList.filter(
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
          );
        } else {
          return this.citiesList;
        }
      },
    },
  });
</script>

<style scoped></style>
