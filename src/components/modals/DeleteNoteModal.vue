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

const storeDeleteNoteModal = useStoreDeleteNoteModal();

const { closeModal } = storeDeleteNoteModal;
const { isOpen } = storeToRefs(storeDeleteNoteModal);

const onDelete = () => {
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
        <form>
          <header class="modal-card-head">
            <p class="modal-card-title">{{ title }}</p>
            <a class="delete" aria-label="close" @click="closeModal"></a>
          </header>
          <section class="modal-card-body">
            <p>{{ text }}</p>
          </section>
          <footer class="modal-card-foot is-justify-content-flex-end">
            <div class="field is-grouped is-grouped-right">
              <p class="control">
                <a class="button" @click="closeModal">Cancel</a>
              </p>
              <p class="control">
                <a class="button is-link" @click="onDelete">Delete</a>
              </p>
            </div>
          </footer>
        </form>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
@media screen and (min-width: 468px) {
  .modal-card,
  .modal-content {
    width: 450px;
  }
}

</style>
