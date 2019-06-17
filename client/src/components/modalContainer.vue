<template>
  <div class="modal-container">
    {{getModal}}
    <button @click="openModal">ModalContaine</button>
    <div v-for="(item,index) in getModal" :key="index">
      <component :is="item.name" :right="item.right" :modalId="item.id"></component>
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
      currnetRight: 0,
      modalWidth: 300,
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

      //this.currnetRight += this.modalWidth + 5;
      this.currnetRight =
        this.getModal[this.getModal.length - 1].right + this.modalWidth;
    },
    /**minimize the modal */
    minimize() {
      const modal = document.getElementById("modal1");
      var translate = this.minimized ? 0 : 260;
      modal.style.transform = `translateY(${translate}px)`;

      this.minimized = !this.minimized;
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
