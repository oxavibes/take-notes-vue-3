<script setup>
import { ref } from "vue";

const showNavBar = ref(false);
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
      </a>

      <a
        role="button"
        @click="showNavBar = !showNavBar"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasic"
        :class="showNavBar ? 'is-active' : ''"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasic" class="navbar-menu" :class="showNavBar ? 'is-active' : ''">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link class="navbar-item" active-class="is-active" to="/">Notes</router-link>
            <router-link class="navbar-item" active-class="is-active" to="/stats">Stats</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
@media (max-width: 1023px) {
  .box.mt-4 {
    margin-top: 0 !important;
  }
}
</style>
