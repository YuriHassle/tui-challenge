<template>
  <div>
    <button @click="$emit('handleButtonClick')">{{ label }}</button>
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

<style scoped></style>
