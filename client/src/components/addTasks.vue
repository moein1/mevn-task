<template>
  <div>
    <div class="task-board">
      <i class="fa fa-plus" @click="toggleSection(backlogId)"></i>
    </div>
    <div :id="backlogId" class="task-board add-task-section">
      <input type="text" v-model="task.author">
      <br>
      <input type="text" v-model="task.priority">
      <br>
      <input type="text" v-model="task.deadline">
      <button @click="addTaskMethod(task)">AddTask</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "addTasks",
  data() {
    return {
      task: {}
    };
  },
  props: { backlogId: String },
  methods: {
    ...mapActions(["addTask"]),
    addTaskMethod() {
      this.addTask(this.task);
      this.task = {};
      this.toggleSection(this.backlogId);
    },
    toggleSection(sectionId) {
      const section = this._id(sectionId);
      if (section.classList.contains("active"))
        section.classList.remove("active");
      else section.classList.add("active");
    },
    _id(id) {
      return document.getElementById(id);
    }
  },
  computed: {
    ...mapGetters(["singleTask"])
  }
};
</script>

<style lang="scss">
</style>
