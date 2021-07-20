<template>
  <div class="container">
    <button
      name="guests"
      id="guests"
      class="button"
      @click="showMenu = !showMenu"
    >
      Quantos adultos?
    </button>
    <ul v-if="showMenu" class="button__menu">
      <li
        v-for="guestQtd in 4"
        :key="guestQtd"
        :value="guestQtd"
        :class="{
          'button__menu-item': true,
          'button__menu-item--active': selectedGuestQuantity === guestQtd,
        }"
        @click="handleMenuClick(guestQtd)"
      >
        {{ guestQtd }} hóspede{{ guestQtd > 1 ? '(s)' : '' }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    data() {
      return {
        showMenu: false,
        selectedGuestQuantity: 0,
      };
    },
    methods: {
      handleMenuClick(guestsQuantity: number, index: number) {
        this.showMenu = false;
        this.selectedGuestQuantity = guestsQuantity;
        this.$emit('handleMenuClick', this.selectedGuestQuantity);
      },
    },
  });
</script>

<style scoped lang="scss">
  .container {
    position: relative;

    &:hover .button {
      background-color: #3e8e41;
    }
  }
  .button {
    background-color: #04aa6d;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
  }
  .button__menu {
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .button__menu-item {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background-color: #ddd;
    }
  }

  .button__menu-item--active {
    background-color: rgb(74, 129, 201);
  }
</style>
