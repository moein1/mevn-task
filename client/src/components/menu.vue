<template>
  <div>
    <ul class="main-menu">
      <li class="menu-item" v-for="(menu , index) in 5" :key="index">
        <span>{{'menu'+index}}</span>
        <ul class="sub-menu">
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
  }
};
</script>

<style>
</style>
