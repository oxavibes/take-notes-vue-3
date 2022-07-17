<script setup>
import { computed } from "vue";

const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<template>
  <footer class="box">
    <div class="content has-text-centered">
      <p><strong>Notius</strong> &copy; Stefano Bozzi - {{ currentYear }}</p>
    </div>
  </footer>
</template>

<style scoped>
</style>
