<template>
  <div>
   <h1>this the test component that we can use for the restfull api using axios</h1>
   <div v-for="(post,index) in posts" :key="index"  >{{post.text}}
      <button @click="deletePost(post._id)" > delete</button>
   </div>
   <div v-if="error">{{error}}</div>
   <h2>Add a new post</h2>
   <div>
     <input type="text" id="create-post" v-model="text" placeholder="Add a new post" >
     <button @click="createPost" > Post!</button>
   </div>
  </div>
</template>

<script>
import PostService from '../postService';
export default {
  name: 'PostComponent',
  data() {
    return {
      posts:[],
      error:'',
      text:''
    }
  },
  async created(){
    try{
      /**we try to access to the server and get the list of the posts */
      this.posts = await PostService.getPosts();
    }
    catch(error){
      this.error = error.message;
    }
  },
  methods: {
    async createPost(){
      await PostService.insertPost(this.text);
      this.posts= await PostService.getPosts();
    },
    async deletePost(id){
      await PostService.deletePost(id);
      this.posts= await PostService.getPosts();
    }
  },
}
//this is the test secion an we can use that for esay developing and we must use h
//this is the section that we can check taht we write correctly with ten fingure and without 
//mistake and this just for test
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>