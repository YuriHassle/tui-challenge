<template>
  <div>
    <input v-model="input" @input="handleInput" />
    <div v-if="list.length > 0 && input && !reset" class="bordered">
      <ul>
        <li
          v-for="city in list"
          :key="`${city.name}-${city.admin_name}-${city.country}`"
          @click="setInput(city)"
        >
          {{ city.name }} - {{ city.admin_name }} - {{ city.country }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      list: Array,
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
      setInput(city: any) {
        this.input = city.name;
        this.reset = true;
        this.$emit('input', { value: city.name, selectedCity: city });
      },
    },
  });
</script>

<style scoped>
  .bordered {
    border: 1px solid black;
    display: block;
  }

  ul li {
    cursor: pointer;
  }

  ul li:hover {
    background: rgba(0, 0, 0, 0.3);
  }
</style>
