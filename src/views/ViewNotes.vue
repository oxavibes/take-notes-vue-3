<script setup>
import { storeToRefs } from "pinia";
import { useStoreNotes } from "@/store";
import Note from "@/components/notes/Note.vue";
import AddNoteModal from "@/components/notes/AddNoteModal.vue";

const storeNotes = useStoreNotes();
const { notes } = storeToRefs(useStoreNotes());

const { showModal } = storeNotes;
</script>

<template>
  <div class="container is-max-desktop">
    <section class="section pt-0">
      <div class="field is-grouped">
        <p class="control">
          <button class="button is-success" @click="showModal">Add Note</button>
        </p>
      </div>
      <div class="columns is-multiline" v-if="notes.length">
        <div class="column is-12-mobile is-6-tablet" v-for="(note, index) in notes">
          <Note :key="index" :note="note"/>
        </div>
      </div>

      <p v-else class="has-text-centered has-text-weight-semibold">There are not notes to show</p>
    </section>
  </div>

  <AddNoteModal></AddNoteModal>
</template>

<style scoped>
.textarea {
  resize: none;
}
</style>
