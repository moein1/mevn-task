<template>
  <div class="join">
    <div class="showcase"></div>
    <div class="logo">
      <h3>Uber</h3>
      <h2>Uber needs partners like you</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam vel eaque iste porro. Dolorem asperiores enim laboriosam quia animi, reiciendis fuga placeat nihil rerum, cum ipsum ea, iure vero excepturi possimus quod nobis repellendus facilis natus eveniet corporis accusantium suscipit.</p>
    </div>
    <div class="signup-area">
      <div>
        <input type="text" v-model="user.firstname" placeholder="First Name">
        <input type="text" v-model="user.lastname" placeholder="Last Name">
      </div>
      <div>
        <input type="text" v-model="user.email" placeholder="Email">
      </div>
      <div>
        <input type="text" v-model="user.password" placeholder="Password">
      </div>
      <div>
        <button @click="signup">Signup</button>
      </div>
    </div>
    <div class="highlight">
      <div class="highlight-card">
        <img src="../assets/money.png" alt="Money">
        <div class="card-title">
          <h3>Make good money</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, dolores. Officiis, vitae ad commodi nostrum praesentium suscipit dolores incidunt blanditiis architecto fuga harum culpa repellat at sed debitis quasi eum hic adipisci quam quia, recusandae voluptates molestiae. Quidem, amet voluptatibus.</p>
        </div>
      </div>
      <div class="highlight-card">
        <img src="../assets/time.png" alt="Money">
        <div class="card-title">
          <h3>Make good money</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, dolores. Officiis, vitae ad commodi nostrum praesentium suscipit dolores incidunt blanditiis architecto fuga harum culpa repellat at sed debitis quasi eum hic adipisci quam quia, recusandae voluptates molestiae. Quidem, amet voluptatibus.</p>
        </div>
      </div>
      <div class="highlight-card">
        <div class="card-img">
          <img src="../assets/freedom.png" alt="Money">
        </div>
        <div class="card-title">
          <h3>Make good money</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, dolores. Officiis, vitae ad commodi nostrum praesentium suscipit dolores incidunt blanditiis architecto fuga harum culpa repellat at sed debitis quasi eum hic adipisci quam quia, recusandae voluptates molestiae. Quidem, amet voluptatibus.</p>
        </div>
      </div>
    </div>
    <footer>
      <p>&copy 2019 Uber Technologies Inc</p>
    </footer>
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
