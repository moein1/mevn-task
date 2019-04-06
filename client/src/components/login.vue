<template>
  <div>
    <div>
      <label for>email</label>
      <input type="text" v-model="user.email">
    </div>
    <div>
      <label for>Password</label>
      <input type="text" v-model="user.password">
    </div>
    <div>
      <button @click="loginUser">login</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      user: {}
    };
  },
  methods: {
    loginUser() {
      this.login(this.user);
    },
    ...mapActions(["login"])
  }
};
</script>

<style>
</style>
