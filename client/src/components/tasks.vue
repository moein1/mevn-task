<template>
  <div>
    <users/>
    <task-boards/>
  </div>
</template>

<script lang="ts" >
import { mapGetters, mapActions } from "vuex";
import Vue from "vue";
export default Vue.extend({
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
});
</script>

<style lang="scss">
</style>