<template>
  <div>
    <input class="input" :placeholder="placeholder" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      placeholder: String,
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
    margin: 24px 0px;
    font-family: TUITypeLight LATN;
    font-size: 20px;
    line-height: 24px;
    color: #092a5e;

    &:focus {
      border: 1px solid #10a0de;
      box-shadow: 0px 0px 0px 4px #70cbf4;
    }
  }
</style>
