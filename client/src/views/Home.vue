<template>
  <div>
    <tasks/>
  </div>
</template>

<script>
// @ is an alias to /src
import Tasks from "@/components/tasks.vue";

export default {
  name: "home",
  components: {
    Tasks
  }
};
</script>
