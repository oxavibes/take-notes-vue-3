<script setup>
import { useStoreDeleteNoteModal } from "@/store";

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

const onSubmit = () => {
  props.onDelete();

  storeDeleteNoteModal.closeModal();
};
</script>

<template>
  <Teleport to="body">
    <div class="modal" :class="storeDeleteNoteModal.isOpen ? 'is-active' : ''">
      <div class="modal-background"></div>
      <div class="modal-card">
        <form @submit.prevent="onSubmit">
          <header class="modal-card-head">
            <p class="modal-card-title">{{ title }}</p>
            <a class="delete" aria-label="close" @click="storeDeleteNoteModal.closeModal"></a>
          </header>
          <section class="modal-card-body">
            <p>{{ text }}</p>
          </section>
          <footer class="modal-card-foot">
            <div class="field is-grouped is-grouped-right">
              <p class="control">
                <button class="button is-danger">Delete</button>
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
