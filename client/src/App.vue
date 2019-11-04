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

export default {
  name:"app",
  components: {
    Header,
    ToolBar
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