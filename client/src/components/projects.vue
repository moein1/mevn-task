<template>
  <div>
    <div v-for="(project , index) in allProject" :key="index">
      <div @click="selectProject(project)">{{project.name}} {{project.status}}</div>
    </div>
    <add-projects :mode="mode"></add-projects>
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
    ...mapActions(["fetchProjects", "setProject"]),
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
