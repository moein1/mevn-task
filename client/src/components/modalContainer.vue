<template>
  <div class="modal-container" :class="{'active' : getFullSize}">
    <i @click="openModal" class="fa fa-plus-circle fa-2x"></i>
    <div v-for="(item,index) in getModal" :key="index">
      <component :is="item.name" :modal="item"></component>
    </div>
    <!-- <div class="full-modal"></div> -->
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
        id: this.counter,
        fullSize: false,
        minimized: false
      });
      this.counter++;
    },
    closeModal(item) {},
    ...mapActions(["addModal"])
  },
  computed: {
    ...mapGetters(["getModal", "getFullSize"])
  }
};
</script>

<style>
</style>
