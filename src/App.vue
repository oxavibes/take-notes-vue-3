<script setup>
import { ref } from "vue";
import { useBreakpoints } from "@vueuse/core";

import NavBar from "@/components/layout/NavBar.vue";
import Footer from "@/components/layout/Footer.vue";

const breakpoints = useBreakpoints({
  mobile: 768,
  tablet: 769,
  desktop: 1024,
  widescreen: 1216,
  fullhd: 1408,
});

const desktopAndGreater = breakpoints.greater("desktop");
</script>

<template>
  <div class="container is-max-desktop is-flex is-flex-direction-column is-full-height">
    <header class="block box" :class="desktopAndGreater ? 'mt-2' : ''">
      <NavBar />
    </header>

    <main class="is-flex-grow-1">
      <RouterView />
    </main>

    <Footer :class="desktopAndGreater ? 'mb-4' : ''" />
  </div>
</template>

<style>
@import "animate.css";
@import "bulma/css/bulma.min.css";

.is-full-height {
  min-height: 100vh;
}
</style>
