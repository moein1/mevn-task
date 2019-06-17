<template>
  <div class="modal-container">
    <button @click="openModal">ModalContaine</button>
    <div v-for="(item,index) in getModal" :key="index">
      <component :is="item.name" :modalId="item.id"></component>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "modalContainer",
  data() {
    return {
      test: "this is test",
      minimized: false,
      counter: 1
    };
  },
  methods: {
    openModal() {
      /**we need to open the div for the modal on the bottom right section of the page */
      this.addModal({
        name: "modal",
        right: this.currnetRight,
        id: this.counter
      });
      this.counter++;
    },
    closeModal(item) {
      console.log(
        "this is the item to closing and removing form tne list",
        item
      );
    },
    ...mapActions(["addModal"])
  },
  computed: {
    ...mapGetters(["getModal"])
  }
};
</script>

<style>
</style>
