<template>
  <footer class="footer">
    <div class="container inline">
      <router-link to="/notification" class="toolBar" >
        <i class="material-icons" style="font-size: 28px" v-if="currentPage=='notification'">notifications</i>
        <i class="material-icons-outlined" style="font-size: 28px" v-if="currentPage!='notification'">notifications</i>
      </router-link>

      <router-link to="/emptyhouse" class="toolBar">
        <i class="material-icons" style="font-size: 28px" v-if="currentPage=='emptyhouse'">home</i>
        <i class="material-icons-outlined" style="font-size: 28px" v-if="currentPage!='emptyhouse'">home</i>
      </router-link>

      <router-link to="/querycontract" class="toolBar">
        <i class="material-icons" style="font-size: 28px" v-if="currentPage=='querycontract'">assignment</i>
        <i class="material-icons-outlined" style="font-size: 28px" v-if="currentPage!='querycontract'">assignment</i>
      </router-link>

      <router-link to="reportproblem" class="toolBar">
        <i class="material-icons-outlined" style="font-size: 28px" v-if="currentPage!='reportproblem'">email</i>
        <i class="material-icons" style="font-size: 28px" v-if="currentPage=='reportproblem'">email</i>
        
      </router-link>

      <router-link to="/personalprofile" class="toolBar">
        <i class="material-icons" style="font-size: 28px" v-if="currentPage=='personalprofile'">face</i>
        <i class="material-icons-outlined" style="font-size: 28px" v-if="currentPage!='personalprofile'">face</i>
      </router-link>
    </div>
  </footer>
</template>


<script>
// import globalService from "../../global.js";

export default {
  name: "ToolBar",
  components: {},
  data(){
    return{
      currentPage:null
    }
  },
  watch:{
    $route(){
      this.currentPage=this.$route.name;
    }
  }
};
</script>


<style scoped>
.footer {
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #f4f4f4;
  color: #797d7f;
  text-align: left;
  padding: 10px;
  box-shadow: 4px 0 8px 0 rgba(0, 0, 0, 0.2);
  max-height: 60px;
}

.inline {
  display: inline-block;
}

.toolBar {
  /* margin:6%; */
  text-decoration: none;
  font-size: 25px;
  padding-top:2%;
  padding-bottom:2%;
  max-width: 100%;
  object-fit: cover;
  display: inline-block;
  width: 20%;
  text-align: center;
}
.toolBar i {
  /* max-width:100%; */
  width: 20%;
  height: auto;
}
</style>