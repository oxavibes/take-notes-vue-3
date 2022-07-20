<script setup>
import { ref } from "vue";
import { useStoreManageNoteModal } from "@/store";

const { openModal } = useStoreManageNoteModal();

const showNavBar = ref(false);
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <h1 class="title is-3">Notius</h1>
      </div>

      <a
        role="button"
        @click="showNavBar = !showNavBar"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasic"
        :class="showNavBar ? 'is-active' : ''"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasic" class="navbar-menu" :class="showNavBar ? 'is-active' : ''">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <div class="field is-grouped">
              <p class="control">
                <button class="button" @click="openModal"><font-awesome-icon icon="fa-regular fa-square-plus" /></button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
