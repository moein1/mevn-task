<template>
  <div>
    <div>
      first name :
      <input type="text" v-model="user.firstname">
    </div>
    <div>
      last name :
      <input type="text" v-model="user.lastname">
    </div>
    <div>
      email :
      <input type="text" v-model="user.email">
    </div>
    <div>
      password :
      <input type="text" v-model="user.password">
    </div>
    <div>
      <button @click="signup">Signup</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "signup",
  data() {
    return {
      user: {}
    };
  },
  methods: {
    signup() {
      this.addUser(this.user);
      // this.user = [];
    },
    ...mapActions(["addUser"])
  }
};
</script>

<style>
</style>
