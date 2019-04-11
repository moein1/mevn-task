<template>
  <div>
    <h4>users</h4>
    <div v-for="(user,index) in allUsers" :key="index">{{user}}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { User } from "../interface/user";
export default {
  name: "users",
  methods: {
    ...mapActions(["fetchUsers"])
  },
  computed: {
    ...mapGetters(["allUsers"])
  },
  created() {
    this.fetchUsers();
  }
};
</script>

<style>
</style>
