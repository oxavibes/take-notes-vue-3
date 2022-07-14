<script setup>
import NavBar from "@/components/layout/NavBar.vue";
import Footer from "@/components/layout/Footer.vue";
</script>

<template>
  <div class="container is-max-desktop is-flex is-flex-direction-column site">
    <header class="block">
      <div class="box mt-4">
        <NavBar />
      </div>
    </header>

    <main class="is-flex-grow-1">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<style>
@import "bulma/css/bulma.min.css";

.site {
  min-height: 100vh;
}
</style>
