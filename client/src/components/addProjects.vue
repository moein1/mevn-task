<template>
  <div>
    <div>
      <h3>Add new project</h3>
      {{mode}}
      <div>
        <input type="text" v-model="singleProject.name">
      </div>
      <div>
        <input type="text" v-model="singleProject.status">
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
  props: { mode: String },
  methods: {
    ...mapActions(["addProject", "setProject"]),
    /**add the new project */
    addNewProjec() {
      console.log(
        "this is the project that we want to add ",
        this.singleProject
      );
      this.addProject(this.singleProject);
      this.setProject({});
    }
  },
  computed: {
    ...mapGetters(["singleProject"])
  }
});
</script>

<style>
</style>
