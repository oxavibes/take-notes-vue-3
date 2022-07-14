<script setup>
/*
  IMPORTS
*/
import { ref, reactive, computed } from "vue";
import { storeToRefs } from "pinia";
import { useStoreNotes } from "@/store";

/*
  REFS AND REACTIVE AND COMPUTED PROPERTIES
*/
const form = ref(null);
const note = reactive({ title: "", message: "" });

let fieldsAreEmpty = computed(() => {
  return note.title === "" || note.message === "";
});

/*
  STORE
*/
const storeNotes = useStoreNotes();
const { hideModal, addNote } = storeNotes;
const { openModal } = storeToRefs(useStoreNotes());

/*
  METHODS 
*/

const resetForm = () => {
  note.title = "";
  note.message = "";

  form.value.reset();
};

const onAdd = (event) => {
  event.preventDefault();

  addNote(note);
  hideModal();

  resetForm();
};
</script>

<template>
  <Teleport to="body">
    <div class="modal" :class="openModal ? 'is-active' : ''">
      <div class="modal-background"></div>
      <div class="modal-card">
        <form ref="form" @submit.prevent="onAdd">
          <header class="modal-card-head">
            <p class="modal-card-title">Add Note</p>
            <a class="delete" aria-label="close" @click="hideModal"></a>
          </header>
          <section class="modal-card-body">
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">Title</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <input v-model="note.title" class="input" type="text" placeholder="e.g. Partnership opportunity" />
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
                    <textarea v-model="note.message" class="textarea" placeholder="Explain how we can help you"></textarea>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer class="modal-card-foot">
            <div class="field is-grouped is-grouped-right">
              <p class="control">
                <button class="button is-success" :disabled="fieldsAreEmpty">Add</button>
              </p>
            </div>
          </footer>
        </form>
      </div>
    </div>
  </Teleport>
</template>
