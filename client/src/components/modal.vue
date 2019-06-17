<template>
  <div :id="'modal'+right" class="modal" :style="{right : (getModalIndex) * modalWidth +'px'}">
    <div class="modal-header">
      {{modalId}}{{getModalIndex}}
      <h4>New message</h4>
      <div class="button-area">
        <i @click="minimize()" class="fa fa-window-minimize"></i>
        <i class="fa fa-compress"></i>
        <i class="fa fa-close" @click="closeModal(modalId)"></i>
      </div>
    </div>
    <div class="modal-content">this is the conten of the modal</div>
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
      const modal = document.getElementById(`modal${this.right}`);
      var translate = this.minimized ? 0 : 260;
      modal.style.transform = `translateY(${translate}px)`;

      this.minimized = !this.minimized;
    },
    ...mapActions(["closeModal"])
  },
  computed: {
    newStyle() {
      return `right:${this.right}`;
    },
    ...mapGetters(["getModal"]),
    getModalIndex() {
      const modals = this.getModal;
      console.log("this is the list of modal ", modals);
      return modals.findIndex(obj => obj.id == this.modalId);
    }
  }
};
</script>

<style>
</style>
