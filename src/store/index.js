import { defineStore } from "pinia";

export const useStoreNotes = defineStore("storeNotes", {
  state: () => {
    return {
      openModal: false,
      notes: [],
    };
  },
  actions: {
    addNote({ title, message }) {
      let id = new Date().getTime().toString();

      let note = {
        id,
        title,
        message
      };

      this.notes.unshift(note);
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
    updateNote(id, content) {
      let index = this.notes.findIndex((note) => note.id === id);
      this.notes[index].content = content;
    },
    showModal() {
      this.openModal = true;
    },
    hideModal() {
      this.openModal = false;
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
    totalCharactersCount: (state) => {
      let count = state.notes.reduce((previousValue, currentValue) => previousValue.content.length + currentValue.content.length, 0);

      return count;
    },
  },
});
