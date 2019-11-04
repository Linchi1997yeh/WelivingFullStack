<template>
  <div>
      <Login v-if="this.show == false "/>
      <Header v-if="this.show == true "/>
      <router-view v-if="this.show == true "/>
      <ToolBar v-if="this.show == true "/>
  </div>
</template>


<script>
import Header from "./components/layout/Header"
import ToolBar from "./components/layout/ToolBar"
import Login from "./views/Login"
import globalService from './global.js';

export default {
  name:"app",
  components: {
    Header,
    ToolBar, 
    Login
  },data() {
    return {
      show:false,
      to:"/notification",
      from:"/"
    };
  },
  
  watch:{
    $route(){
      if(globalService.getEmail()==""){
        this.show=false;
      }else{
        this.show=true;
      }
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