<script setup>
import { computed } from "@vue/reactivity";
import { storeToRefs } from "pinia";
import { useFormatDateDay } from "@/composables/useFormatDay";
import { useStoreNotes, useStoreManageNoteModal, useStoreDeleteNoteModal } from "@/store";

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const messageCharLength = computed(() => {
  return props.note.message.length > 1 ? 
  `${props.note.message.length} caracters` : 
  `${props.note.message.length} caracter`;
});

const { date } = useFormatDateDay();

const { updateSelectedNote } = useStoreNotes();

const onEdit = () => {
  const { openModal } = useStoreManageNoteModal();
  const { isUpdate } = storeToRefs(useStoreManageNoteModal());

  updateSelectedNote(Object.assign({}, props.note));

  isUpdate.value = true;

  openModal();
};

const onDelete = () => {
  const { openModal } = useStoreDeleteNoteModal();

  updateSelectedNote(Object.assign({}, { id: props.note.id }));

  openModal();
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
          <p class="is-size-7 has-text-weight-bold">{{ messageCharLength }}</p>
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
