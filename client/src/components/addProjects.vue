<template>
  <div>
    <div>
      <h3>Add new project</h3>
      <div>
        <input type="text" v-model="project.name">
      </div>
      <div>
        <input type="text" v-model="project.status">
      </div>
      <button @click="addNewProjec()">Add Project</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import { IProject } from "../interface/project";
import projects from "../store/modules/projects";
export default Vue.extend({
  name: "addProject",
  data() {
    return {
      test: null,
      project: {}
    };
  },
  methods: {
    ...mapActions(["addProject"]),
    /**add the new project */
    addNewProjec() {
      console.log("this is the project that we want to add ", this.project);
      this.addProject(this.project);
    }
  }
});
</script>

<style>
</style>
