<template>
  <header class="header">
    <div class="container inline">
      <router-link to="#" class="title">
        <div class="logo">
          <img src="../../assets/icons/apartner_logo.png">
        </div>
      </router-link>

      <router-link to="/" class="right"><i class="paper plane outline icon"></i></router-link>
      </div>
    
  </header>
</template>


<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      
    };
  },
};
</script>


<style scoped>
.header {
  z-index: 1;
  position: fixed;
  left: 0;
  right: 0;
  background: #f4f4f4;
  color: #797d7f;
  text-align: left;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-height: 60px;
}

.logo{
  height:auto;
  max-width:50%;
  margin:0 0 0 5px;
  display: inline-block;
}
.logo img{
  height:auto;
  max-width:90%;
  display: inline-block;
  vertical-align: middle;
}

.inline{
  display: inline-block;
}

.right{
  float:right;
  text-decoration: none;
  font-size:20px;
  padding:5px 0px;
  height:auto;
}
.right i{
  max-width:100%;
  height:auto;
}


</style>
