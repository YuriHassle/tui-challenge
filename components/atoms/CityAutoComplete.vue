<template>
  <div>
    <input
      v-model="input"
      @input="handleInput"
      class="input"
      placeholder="Cidade"
    />
    <div v-if="cityList.length > 0 && input && !reset">
      <ul class="input__search-box">
        <li
          v-for="city in cityList"
          :key="`${city.name}-${city.admin_name}-${city.country}`"
          @click="setInput(city)"
          class="input__search-item"
        >
          {{ city.name }} - {{ city.country }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import { City } from '~/helpers/types';

  export default Vue.extend({
    props: {
      cityList: Array as () => City[],
    },
    data() {
      return {
        input: '',
        reset: false,
      };
    },
    methods: {
      //todo: use proper type
      handleInput(e: any) {
        if (this.reset) this.reset = false;
        this.$emit('input', { value: e.target.value });
      },
      setInput(city: City) {
        this.input = city.name;
        this.reset = true;
        this.$emit('input', { value: city.name, selectedCity: city });
      },
    },
  });
</script>

<style scoped lang="scss">
  .input {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding: 11px 12px 11px 8px;
    width: 400px;
    height: 48px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
    border-radius: 3px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 6px 0px;
    font-family: TUITypeLight LATN;
    font-size: 20px;
    line-height: 24px;
    color: #092a5e;

    &:focus {
      border: 1px solid #10a0de;
      box-shadow: 0px 0px 0px 4px #70cbf4;
    }
  }

  .input__search-box {
    background: #ffffff;
    border-radius: 3px;
    padding: 10px 10px;
  }

  .input__search-item {
    width: 338px;
    height: 24px;
    font-family: TUITypeLight LATN;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #092a5e;
    margin-bottom: 0.4rem;
    &:hover {
      background: #c2e6fa;
      cursor: pointer;
    }
  }
</style>
