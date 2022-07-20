<script setup>
import { storeToRefs } from "pinia";
import { ref, reactive, computed } from "vue";
import { useToast } from "vue-toast-notification";
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
const note = selectedNote.value;

const onClose = () => {
  selectedNote.value.title = "";
  selectedNote.value.message = "";

  closeModal();
};

const onAdd = () => {
  const $toast = useToast();

  props.onAdd(Object.assign({}, selectedNote.value));

  $toast.default("Note added successfully!");

  onClose()
};

const onUpdate = () => {
  const $toast = useToast();

  props.onUpdate(Object.assign({}, selectedNote.value));

  $toast.default("Note updated successfully!");

  onClose()
};
</script>

<template>
  <div class="modal" :class="isOpen ? 'is-active' : ''">
    <div class="modal-background"></div>
    <div class="modal-card">
      <form ref="form">
        <header class="modal-card-head">
          <p class="modal-card-title">Note details</p>
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
                  <input v-model="selectedNote.title" class="input" type="text" placeholder="Tame your work, organize your life" required />
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
                  <textarea
                    v-model="selectedNote.message"
                    class="textarea"
                    placeholder="Remember everything and tackle any project with your notes, tasks, and schedule all in one place."
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot is-justify-content-flex-end">
          <div class="field is-grouped is-grouped-right">
            <p class="control">
              <a class="button" @click="onClose">Cancel</a>
            </p>
            <p class="control" v-if="!isUpdate">
              <a class="button is-link" @click="onAdd">Add</a>
            </p>
            <p class="control" v-else>
              <a class="button is-link" @click="onUpdate">Update</a>
            </p>
          </div>
        </footer>
      </form>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 769px) {
  .modal-card,
  .modal-content {
    max-width: 300px;
  }
}
</style>
