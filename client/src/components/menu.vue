<template>
  <div>
    <ul class="main-menu">
      <li class="menu-item" v-for="(menu , index) in 5" :key="index" @click="openSubmenu(index)">
        <span>{{'menu'+index}}</span>
        <ul class="sub-menu" :id="'subMenu'+ index">
          <li
            class="sub-menu-item"
            v-for="(submenu , index2) in 5"
            :key="index2"
          >{{'submenu'+index2}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "menu",
  data() {
    return {};
  },
  methods: {
    openSubmenu(index) {
      console.log("this is the menu", index);
      this.toggleItem(`subMenu${index}`);
    },
    toggleItem(id) {
      const element = document.getElementById(id);
      if (element.classList.contains("show")) element.classList.remove("show");
      else element.classList.add("show");
    }
  }
};
</script>

<style>
</style>
