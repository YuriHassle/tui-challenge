<template>
  <div>
    <button @click="$emit('handleButtonClick')" class="button">
      {{ label }}
    </button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      label: String,
    },
  });
</script>

<style scoped lang="scss">
  .button {
    background-color: #fff;
    color: #092a5e;
    font-style: bold;
    line-height: 24px;
    letter-spacing: 0px;
    font-size: 20px;
    height: 40px;
    border: 1px solid #092a5e;
    border-radius: 3px;

    &:hover {
      border: 3px solid #092a5e;
    }

    &:focus {
      border: 1px solid #10a0de;
      box-shadow: 0px 0px 0px 4px #70cbf4;
    }

    &:active {
      border: 3px solid #092a5e;
    }
  }
</style>
