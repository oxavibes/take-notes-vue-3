<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useStoreNotes } from "@/store";
// import supabase from "@/utils/supabase";
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
    <section :class="tabletAndSmaller ? 'mx-5' : ''">
      <TransitionGroup
        class="columns is-multiline"
        name="custom-classes"
        tag="div"
        enter-active-class="animate__animated animate__fadeIn"
      >
        <div class="column is-12-mobile is-6-tablet" v-for="(note, index) in notes" :key="note.id">
          <CardNote :key="note.id" :note="note" />
        </div>
      </TransitionGroup>

      <Transition name="custom-classes" enter-active-class="animate__animated animate__fadeIn">
        <p v-show="!notes.length" class="box has-text-centered has-text-weight-semibold notification">No data to show</p>
      </Transition>
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
