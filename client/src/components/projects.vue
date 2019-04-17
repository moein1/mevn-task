<template>
  <div>
    <div>Projects{{allProject}}</div>
    <add-projects></add-projects>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
export default Vue.extend({
  name: "projects",
  data() {
    return {
      projects: []
    };
  },
  methods: {
    ...mapActions(["fetchProjects"])
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
