<template>
  <div
    :id="modal.id"
    class="modal1"
    :class="{'full-modal' : modal.fullSize , 'modal' : !modal.fullSize}"
    :style="modalStyle"
  >
    <div class="modal-header">
      <h4>New message</h4>
      <div class="button-area">
        <i @click="minimize()" class="fa fa-window-minimize"></i>
        <i class="fa fa-compress" @click="toggleFullSize(modal.id)"></i>
        <i class="fa fa-close" @click="closeModal(modal.id)"></i>
      </div>
    </div>
    <div class="modal-content">
      <div class="spinner spinner1"></div>
      <div class="spinner spinner2"></div>
      <div class="spinner spinner3"></div>
      <div class="spinner spinner4"></div>
      <div class="spinner spinner5">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div>
      <div class="loader1"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "modal",
  data() {
    return {
      modalWidth: 400
    };
  },
  props: {
    right: Number,
    modal: Object
  },
  methods: {
    /**minimize the modal */
    minimize() {
      /**first we need to resize and the minimize */
      const modal = document.getElementById(`${this.modal.id}`);
      var translate =
        !this.modal.minimized && !this.modal.fullSize
          ? modal.clientHeight - 35
          : 0;
      modal.style.transform = `translateY(${translate}px)`;
      this.toggleMinimize(this.modal.id);
    },
    ...mapActions(["closeModal", "toggleFullSize", "toggleMinimize"])
  },
  computed: {
    ...mapGetters(["getModal"]),
    modalStyle() {
      if (!this.modal.fullSize)
        return {
          right: this.getModalIndex * this.modalWidth + `px`
        };
      return {};
    },
    getModalIndex() {
      const modals = this.getModal;
      return modals.findIndex(obj => obj.id == this.modal.id);
    }
  }
};
</script>

<style>
</style>
