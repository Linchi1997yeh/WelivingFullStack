<template>
  <footer class="footer">
    <div class="container inline">
        <router-link to="#" class="toolBar"><i class="bullhorn icon"></i></router-link>
        <router-link to="#" class="toolBar"><i class="home icon"></i></router-link>
        <router-link to="#" class="toolBar"><i class="clipboard outline icon"></i></router-link>
        <router-link to="#" class="toolBar"><i class="wrench icon"></i></router-link>
        <router-link to="#" class="toolBar"><i class="user icon"></i></router-link>
    </div>
    
  </footer>
</template>


<script>
export default {
  name: "ToolBar",
  components: {},
  data() {
    return {
    };
  },
};
</script>


<style scoped>
.footer {
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  bottom:0;
  background: #f4f4f4;
  color: #797d7f;
  text-align: left;
  padding: 10px;
  box-shadow: 4px 0  8px 0 rgba(0, 0, 0, 0.2);
  max-height: 60px;
}

.inline{
  display: inline-block;
}

.toolBar{
  margin:6%;
  text-decoration: none;
  font-size:22px;
  padding:15px 0px;
}
.toolBar i{
  max-width:100%;
  height:auto;
}


</style>