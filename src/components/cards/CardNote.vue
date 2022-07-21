<script setup>
import { computed } from "@vue/reactivity";
import { useFormatDateDay } from "@/composables/useFormatDay";
import { useStoreNotes, useStoreManageNoteModal, useStoreDeleteNoteModal } from "@/store";

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const messageCharLength = computed(() => {
  const { length } = props.note.message;
  return length > 1 ? `${length} caracters` : `${length} caracter`;
});

const { date } = useFormatDateDay();

const storeManageNoteModal = useStoreManageNoteModal();
const storeDeleteNoteModal = useStoreDeleteNoteModal();

const { updateSelectedNote, deleteNote } = useStoreNotes();

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
        <div class="content has-text-grey">
          <p>{{ props.note.message }}</p>
        </div>
        <div class="is-flex is-justify-content-space-between">
          <p class="is-size-7 has-text-weight-bold">{{ messageCharLength  }}</p>
          <p class="is-size-7 has-text-weight-bold">{{ date }}</p>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item has-text-info-dark" @click="onEdit"><font-awesome-icon size="sm" icon="fa-regular fa-pen-to-square" /></a>
        <a href="#" class="card-footer-item has-text-danger" @click="onDelete"><font-awesome-icon size="sm" icon="fa-regular fa-trash-can" /></a>
      </footer>
    </div>
  </div>
</template>

<style></style>
