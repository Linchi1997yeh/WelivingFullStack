<template>
  <header class="header">
    <div class="container inline">
      <router-link to="#" class="title">
        <div class="logo">
          <img src="../../assets/icons/apartner_logo.png">
        </div>
      </router-link>

        <router-link to="#" class="right"><i class="paper plane outline icon"></i></router-link>
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
  height:10%;
  width:50%;
  margin:0 0 0 5px;
  display: inline-block;
  
}
.logo img{
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  font-size:20px;
}

.inline{
  display: inline-block;
  /* line-height: 70px;
  height: 70px; */
}

.right{
  float:right;
  text-decoration: none;
  font-size:20px;
  padding:5px 0px;
}


</style>
