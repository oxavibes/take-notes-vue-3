<script setup>
import { storeToRefs } from "pinia";
import { useStoreDeleteNoteModal } from "@/store";
import { useToast } from "vue-toast-notification";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  onDelete: {
    type: Function,
    required: true,
  },
});

const { closeModal } = useStoreDeleteNoteModal();
const { isOpen } = storeToRefs(useStoreDeleteNoteModal());

const onSubmit = () => {
  const $toast = useToast();

  props.onDelete();

  $toast.default("Note deleted successfully!");

  closeModal();
};
</script>

<template>
  <Teleport to="body">
    <div class="modal" :class="isOpen ? 'is-active' : ''">
      <div class="modal-background"></div>
      <div class="modal-card">
        <form @submit.prevent="onSubmit">
          <header class="modal-card-head">
            <p class="modal-card-title is-size-5 has-text-weight-bold">{{ title }}</p>
            <a class="delete" aria-label="close" @click="closeModal"></a>
          </header>
          <section class="modal-card-body">
            <p>{{ text }}</p>
          </section>
          <footer class="modal-card-foot is-justify-content-flex-end">
            <div class="field is-grouped is-grouped-right">
              <p class="control">
                <a class="button is-small" @click="closeModal">Cancel</a>
              </p>
              <p class="control">
                <button class="button is-dark is-small">Delete</button>
              </p>
            </div>
          </footer>
        </form>
      </div>
    </div>
  </Teleport>
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
    max-width: 450px;
  }
}
</style>
