<script setup>
import { computed } from "vue";

const currentYear = computed(() => {
  return new Date().getFullYear();
});
</script>

<template>
  <footer class="box mb-4">
    <div class="content has-text-centered">
      <p><strong>Notius</strong> &copy; Stefano Bozzi - {{ currentYear }}</p>
    </div>
  </footer>
</template>

<style scoped>
@media (max-width: 1023px) {
  footer.mb-4 {
    margin-bottom: 0 !important
  }
}
</style>
