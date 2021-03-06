<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useToast } from "vue-toast-notification";
import { useStoreNotes, useStoreManageNoteModal } from "@/store";

const { selectedNote } = storeToRefs(useStoreNotes());
const { addNote, updateNote, deleteNote } = useStoreNotes();

const { openModal, closeModal } = useStoreManageNoteModal();
const { isUpdate, isOpen } = storeToRefs(useStoreManageNoteModal());

const onSubmit = (e) => {
  const action = e.submitter.value;

  const actions = { onAdd, onUpdate };

  actions[action]();
};

const onClose = () => {
  selectedNote.value.title = "";
  selectedNote.value.message = "";

  closeModal();
};

const onAdd = () => {
  const $toast = useToast();

  addNote(Object.assign({}, selectedNote.value));

  $toast.default("Note added successfully!", {
    queue: true,
  });

  onClose();
};

const onUpdate = () => {
  const $toast = useToast();

  updateNote(Object.assign({}, selectedNote.value));

  $toast.default("Note updated successfully!", {
    queue: true,
  });

  onClose();
};
</script>

<template>
  <div class="modal" :class="isOpen ? 'is-active' : ''">
    <div class="modal-background"></div>
    <div class="modal-card">
      <form @submit.prevent="onSubmit">
        <header class="modal-card-head">
          <p class="modal-card-title is-size-5 has-text-weight-bold">Note details</p>
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
              <a class="button is-small" @click="onClose">Cancel</a>
            </p>
            <p class="control" v-if="!isUpdate">
              <button class="button is-dark is-small" name="action" value="onAdd">Add</button>
            </p>
            <p class="control" v-else>
              <button class="button is-dark is-small" name="action" value="onUpdate">Update</button>
            </p>
          </div>
        </footer>
      </form>
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 768px) {
  .modal-card,
  .modal-content {
    max-width: 300px;
  }
}

@media screen and (min-width: 769px) {
  .modal-card,
  .modal-content {
    max-width: 600px;
  }
}
</style>
