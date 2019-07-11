<template>
  <div>
    <ul class="nav">
      <li
        class="nav-item"
        v-for="(item , index) in iconList"
        :key="index"
        @click="selectItem(item)"
        :id="item.icon+item.id"
      >
        <i class="fa" :class="item.icon"></i>
        <ul class="notifications">
          <li v-for="(notif , index2) in notificationlist" :key="index2">
            <i class="fa" :class="notif.icon"></i>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      iconList: [
        { id: 1, icon: "fa-home" },
        { id: 2, icon: "fa-search" },
        { id: 3, icon: "fa-star" },
        { id: 4, icon: "fa-close" }
      ],
      notificationlist: [
        { id: 1, icon: "fa-home" },
        { id: 2, icon: "fa-search" },
        { id: 3, icon: "fa-star" },
        { id: 4, icon: "fa-close" }
      ]
    };
  },
  methods: {
    selectItem(item) {
      /**first we need to remove the class from all the item in the list */
      const itemList = document.getElementsByClassName("nav-item");
      for (let index = 0; index < itemList.length; index++) {
        const element = itemList[index];
        element.classList.remove("active");
      }
      /**now we need to add the class to the seleted one */
      //e.target.classList.add("active");
      document.getElementById(item.icon + item.id).classList.add("active");
    }
  }
};
</script>

<style>
</style>
