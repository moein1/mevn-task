<template>
  <div>
    <tasks/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Tasks from "@/components/tasks.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "home",
  components: {
    Tasks
  }
});
</script>
