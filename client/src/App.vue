<template>
  <div>
      <Header/>
      <router-view/>
      <ToolBar/>
  </div>
</template>


<script>
import Header from "./components/layout/Header"
import ToolBar from "./components/layout/ToolBar"
import PostService from "./PostService"

export default {
  name:"app",
  components: {
    Header,
    ToolBar
  },
  data() {
    return {
      posts: [],
      username: "",
      password: "",
      valid: Boolean
    };
  },
  created() {
  
      
  },
  methods: {
    async createPost(){
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    }
  }
  
};
  

</script>

<style>
* {
    font-family: Microsoft JhengHei, Helvetica, sans-serif;
    color:#494848;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    /* overflow: hidden; */
}
body {
    background: #f4f4f4;
    line-height: 1.4;
}
.container {
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 98%;
}
</style>