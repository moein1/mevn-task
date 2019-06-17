<template>
  <div class="modal-container">
    {{getModal}}
    <button @click="openModal">ModalContaine</button>
    <!-- <modal></modal> -->
    <div v-for="(item,index) in getModal" :key="index">
      <component :is="item.name" :close-modal="closeModal(item)" :right="item.right"></component>
    </div>
    <!-- <div id="modal1" class="modal">
      <div class="modal-header">
        <h4>New message</h4>
        <div class="button-area">
          <i @click="minimize()" class="fa fa-window-minimize"></i>
          <i class="fa fa-compress"></i>
          <i class="fa fa-close"></i>
        </div>
      </div>
      <div class="modal-content">this is the conten of the modal</div>
    </div>-->
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
      componentList: [{ name: "modal", right: 0, id: "modal0" }]
    };
  },
  methods: {
    openModal() {
      /**we need to open the div for the modal on the bottom right section of the page */
      this.currnetRight += this.modalWidth + 5;
      this.componentList.push({ name: "modal", right: this.currnetRight });
      this.addModal({ name: "modal", right: this.currnetRight });
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
