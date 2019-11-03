<template>
  <div class="loginBackground">
    <div class="content">
        <div class="logo">
          <img src="../assets/icons/apartner_logo1_white.png"><br>
         <img src="../assets/icons/apartner_logo2_white.png">
        </div>
        
        <input placeholder="Email" type="text" v-model="email" /><br>
        <input placeholder="Password" type="password" v-model="password" /><br>
        <button v-on:click="Login">Login</button>
        <p class="signup">
          <router-link to="/signup" class="loginlink">Forgot password?</router-link>
          |
          <router-link to="/signup" class="loginlink">Create Account</router-link>
        </p>
    </div>
    
  </div>
</template>

<script>
import PostService from '../PostService';

export default {
  data() {
    return {
      loginResponse: [],
      email: "",
      password: "",
    };
  },
  async created() {
    // try{
    //   this.posts = await PostService.getPosts();
    //   if (this.posts.valid==true){
    //             this.$router.go("/home");
    //   }else{
    //     alert("Invalid account or password");
    //   }
    // } catch(err){
    //   this.error = err.message;
    // }
  },
  methods: {
    async Login(){
      this.loginResponse = await PostService.memberLogin(this.email,this.password);
      alert(this.loginResponse.valid);
      if(this.loginResponse.valid){
        //sucess
        alert(this.loginResponse.valid);
        this.$router.go('/notification');
      }
    }

  }
  
};
</script>

<style scoped>
.content{
  margin: auto;
    margin-top:20%;
    margin-bottom: 30%;
    overflow: hidden;
    text-align: center;
    display: inline-block;
}
.loginBackground{
  background: url('../assets/backgrounds/login.jpg') center /cover;
  height:100%;
  width:100%;
  overflow:hidden;
  text-align:center;
}
input,select{
    border: 1px solid #fff;
    background: transparent;
    border-radius: 20px;
    font-size: 12px;
    height: 35px;
    padding: 6px 15px;
    margin: 10px;
    color:#fff;
    max-width:100%;
    width:55%;
  }
  input:focus {
    color: #fff;
  }
  ::placeholder { 
  color: #ffffff;
  opacity: 1;
  }

button{
  border: 0px ;
    background: rgb(41,171,97);
    border-radius: 20px;
    font-size: 12px;
    height: 35px;
    padding: 6px 15px;
    margin: 10px;
    color:#fff;
    max-width:100%;
    width:55%;
}
.logo{
  max-width:40%;
  height:auto;
  margin: 10%;
  text-align: center;
  display: inline-block;
}
.logo img{
  max-width:100%;
  height:auto;
}
.signup{
  color:#fff;
  text-decoration: none;
  font-size: 11px;
}
.loginlink{
  color:#fff;
  text-decoration: none;
  font-size: 11px;
  margin: 10px;
}
</style>