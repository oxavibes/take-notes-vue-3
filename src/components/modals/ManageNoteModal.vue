<script setup>
import { storeToRefs } from "pinia";
import { ref, reactive, computed } from "vue";
import { useStoreNotes, useStoreManageNoteModal } from "@/store";

const props = defineProps({
  onAdd: {
    type: Function,
    required: true,
  },
  onUpdate: {
    type: Function,
    required: false,
  },
});
const storeNotes = useStoreNotes();
const { selectedNote } = storeToRefs(storeNotes);

const storeManageNoteModal = useStoreManageNoteModal();
const { isUpdate, isOpen } = storeToRefs(storeManageNoteModal);
const { openModal, closeModal } = storeManageNoteModal;

const form = ref(null);
const note = selectedNote.value

let title = computed(() => (!isUpdate.value ? "Add Note" : "Edit Note"));

const resetInputs = () => {
  selectedNote.value.title = "";
  selectedNote.value.message = "";

  form.value.reset();
};

const onClose = () => {
  resetInputs();
  closeModal();
};

const onSubmit = () => {
  if (!isUpdate.value) {
    props.onAdd(Object.assign({}, selectedNote.value));
  } else {
    props.onUpdate(Object.assign({}, selectedNote.value));
  }

  resetInputs();
  closeModal();
};
</script>

<template>
  <div class="modal" :class="isOpen ? 'is-active' : ''">
    <div class="modal-background"></div>
    <div class="modal-card">
      <form ref="form" @submit.prevent="onSubmit">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ title }}</p>
          <a class="delete" aria-label="close" @click="onClose"></a>
        </header>
        <section class="modal-card-body">
          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Title</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <input v-model="selectedNote.title" class="input" type="text" placeholder="e.g. Title" required/>
                </div>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Message</label>
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <textarea v-model="selectedNote.message" class="textarea" placeholder="Explain how we can help you" required></textarea>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <button class="button" v-if="!isUpdate">Add</button>
              <button class="button" v-else>Edit</button>
            </p>
          </div>
        </footer>
      </form>
    </div>
  </div>
</template>

<style scoped>
@media screen and (min-width: 769px) {
  .modal-card,
  .modal-content {
    width: 500px;
  }
}
</style>
