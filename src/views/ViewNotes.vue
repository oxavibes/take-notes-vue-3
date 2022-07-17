<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useStoreNotes } from "@/store";
import supabase from "@/utils/supabase";
import { useBreakpoints } from "@vueuse/core";

import CardNote from "@/components/cards/CardNote.vue";
import ManageNoteModal from "@/components/modals/ManageNoteModal.vue";
import DeleteNoteModal from "@/components/modals/DeleteNoteModal.vue";

const storeNotes = useStoreNotes();
const { notes, selectedNote } = storeToRefs(storeNotes);
const { addNote, updateNote, updateSelectedNote, deleteNote } = storeNotes;

const breakpoints = useBreakpoints({
  mobile: 768,
  tablet: 769,
  desktop: 1024,
  widescreen: 1216,
  fullhd: 1408,
});

const tabletAndSmaller = breakpoints.smaller("desktop");
</script>

<template>
  <div class="container is-max-desktop">
    <section :class="tabletAndSmaller ? 'section': ''">
      <div class="columns is-multiline" v-if="notes.length">
        <div class="column is-12-mobile is-6-tablet" v-for="(note, index) in notes">
          <CardNote :key="note.id" :note="note" />
        </div>
      </div>

      <p v-else class="has-text-centered has-text-weight-semibold notification">There are not notes to show</p>
    </section>
  </div>

  <ManageNoteModal :onAdd="addNote" :onUpdate="updateNote" />
  <DeleteNoteModal title="Delete note" text="Are you sure to delete this note?" :onDelete="deleteNote" />
</template>

<style scoped>
.textarea {
  resize: none;
}
</style>
