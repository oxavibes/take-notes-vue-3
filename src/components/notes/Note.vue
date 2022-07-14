<script setup>
import { useStoreNotes } from "@/store";
const storeNotes = useStoreNotes();
const { deleteNote } = storeNotes;

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const formatDateDay = (date) => {
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("en-us", options);
};
</script>

<template>
  <div class="block">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">{{ props.note.title }}</p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div class="card-content">
        <div class="content">
          <p>{{ props.note.message }}</p>
          <span class="is-size-7"> {{ formatDateDay(new Date()) }}</span>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item" @click="deleteNote(props.note.id)">Delete</a>
      </footer>
    </div>
  </div>
</template>

<style></style>
