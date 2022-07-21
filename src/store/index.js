import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      notes: [],
      selectedNote: { title: "", message: "" },
    };
  },
  actions: {
    addNote({ title, message }) {
      let id = new Date().getTime().toString();

      let note = {
        id,
        title,
        message,
      };

      this.notes.unshift(note);
    },
    updateNote(updatedNote) {
      let index = this.notes.findIndex((note) => note.id === this.selectedNote.id);
      this.notes[index] = updatedNote;
    },
    deleteNote() {
      this.notes = this.notes.filter((note) => note.id !== this.selectedNote.id);
    },
    updateSelectedNote(selectedNote) {
      this.selectedNote = selectedNote;
    },
  },
  getters: {
    getNoteContent: (state) => {
      return (id) => {
        return state.notes.filter((note) => note.id === id).at(0).content;
      };
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    /*totalCharactersCount: (state) => {
      let count = state.notes.reduce((previousValue, currentValue) => previousValue.content.length + currentValue.content.length, 0);

      return count;
    },*/
  },
});

export const useStoreManageNoteModal = defineStore("storeManageNoteModal", {
  state: () => {
    return {
      isOpen: false,
      isUpdate: false,
    };
  },
  actions: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
      this.isUpdate = false;
    },
  },
});

export const useStoreDeleteNoteModal = defineStore("storeDeleteNoteModal", {
  state: () => {
    return {
      isOpen: false,
    };
  },
  actions: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
  persist: true
});
