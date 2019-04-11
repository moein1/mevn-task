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
      <button @click="login(user)">login</button>
    </div>
  </div>
</template>

<script lang="ts" >
import { mapActions } from "vuex";
import Vue from "vue";
interface User {
  email: string;
  password: string;
}
interface LoginInterface {
  user: User;
}
export default Vue.extend({
  name: "login",
  data(): LoginInterface {
    return {
      user: { email: "", password: "" }
    };
  },
  methods: {
    ...mapActions(["login"])
  }
});
</script>

<style>
</style>
