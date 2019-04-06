<template>
  <div>
    <users/>
    <task-boards/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "tasks",
  data() {
    return {
      test: "fdg"
    };
  },
  methods: {
    ...mapActions(["fetchTasks", "removeTask", "selectTask"])
  },
  computed: {
    ...mapGetters(["allTasks"])
  },
  created() {
    this.fetchTasks();
  }
};
</script>

<style lang="scss">
</style>