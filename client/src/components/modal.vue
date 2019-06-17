<template>
  <div :id="'modal'+right" class="modal" :style="{right : right+'px'}">
    <div class="modal-header">
      <h4>New message</h4>
      <div class="button-area">
        <i @click="minimize()" class="fa fa-window-minimize"></i>
        <i class="fa fa-compress"></i>
        <i class="fa fa-close" @click="$emit(closeModal)"></i>
      </div>
    </div>
    <div class="modal-content">this is the conten of the modal</div>
  </div>
</template>

<script>
export default {
  name: "modal",
  data() {
    return {
      minimized: false
    };
  },
  props: {
    right: Number,
    closeModal: Function
  },
  methods: {
    /**minimize the modal */
    minimize() {
      const modal = document.getElementById(`modal${this.right}`);
      var translate = this.minimized ? 0 : 260;
      modal.style.transform = `translateY(${translate}px)`;

      this.minimized = !this.minimized;
    }
  },
  computed: {
    newStyle() {
      return `right:${this.right}`;
    }
  }
};
</script>

<style>
</style>
