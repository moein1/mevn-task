<template>
  <div>
    <div>
      <div v-for="(project , index) in allProject" :key="index" class="project-item">
        <div @click="selectProject(project)">{{project}}</div>
        <button @click="deleteProject(project.id)">Delete</button>
      </div>
      <add-projects :mode="mode"></add-projects>
    </div>
    <div>
      <tasks></tasks>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
export default Vue.extend({
  name: "projects",
  data() {
    return {
      projects: [],
      mode: "Insert"
    };
  },
  methods: {
    ...mapActions(["fetchProjects", "setProject", "deleteProject"]),
    selectProject(project) {
      console.log("this is the project for editing", project);
      this.setProject(project);
      this.mode = "Edit";
    }
  },
  computed: {
    ...mapGetters(["allProject"])
  },
  created() {
    this.fetchProjects();
  }
});
</script>

<style>
</style>
