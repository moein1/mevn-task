<template>
  <div :id="modalId" class="modal" :style="{right : (getModalIndex) * modalWidth +'px'}">
    <div class="modal-header">
      <h4>New message</h4>
      <div class="button-area">
        <i @click="minimize()" class="fa fa-window-minimize"></i>
        <i class="fa fa-compress"></i>
        <i class="fa fa-close" @click="closeModal(modalId)"></i>
      </div>
    </div>
    <div class="modal-content">
      this is the conten of the modal
      {{modalId}}{{getModalIndex}}
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "modal",
  data() {
    return {
      minimized: false,
      modalWidth: 300
    };
  },
  props: {
    right: Number,
    modalId: Number
  },
  methods: {
    /**minimize the modal */
    minimize() {
      const modal = document.getElementById(`${this.modalId}`);
      var translate = this.minimized ? 0 : 265;
      modal.style.transform = `translateY(${translate}px)`;

      this.minimized = !this.minimized;
    },
    ...mapActions(["closeModal"])
  },
  computed: {
    ...mapGetters(["getModal"]),
    getModalIndex() {
      const modals = this.getModal;
      return modals.findIndex(obj => obj.id == this.modalId);
    }
  }
};
</script>

<style>
</style>
