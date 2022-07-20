<script setup>
import { useFormatDateDay } from "@/composables/useFormatDay";
import { useStoreNotes, useStoreManageNoteModal, useStoreDeleteNoteModal } from "@/store";

const { date } = useFormatDateDay();

const storeNotes = useStoreNotes();
const storeManageNoteModal = useStoreManageNoteModal();
const storeDeleteNoteModal = useStoreDeleteNoteModal();

const { updateSelectedNote, deleteNote } = storeNotes;

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const onEdit = () => {
  updateSelectedNote(Object.assign({}, props.note));

  storeManageNoteModal.isUpdate = true;

  storeManageNoteModal.openModal();
};

const onDelete = () => {
  updateSelectedNote(Object.assign({}, { id: props.note.id }));

  storeDeleteNoteModal.openModal();
};

</script>

<template>
  <div class="block">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title is-capitalized">{{ props.note.title }}</p>
        <button class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div class="card-content">
        <div class="content">
          <p>{{ props.note.message }}</p>
          <p class="is-size-7 has-text-right has-text-weight-medium">{{ date }}</p>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item has-text-info-dark" @click="onEdit"><font-awesome-icon icon="fa-regular fa-pen-to-square" /></a>
        <a href="#" class="card-footer-item has-text-danger" @click="onDelete"><font-awesome-icon icon="fa-regular fa-trash-can" /></a>
      </footer>
    </div>
  </div>
</template>

<style></style>
