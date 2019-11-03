<template>
    <div class="container">
        <section class="content"></section>
        <div class="form">
            <img src="../assets/Examples/example_avatar.png" alt="Host Avatar" class="image-cropper" />
            <h1>Alfred Loh</h1>
            <h4>alfredloh@gmail.com</h4><br>
            
        </div>
        <button v-on:click.prevent="editprofile">
            Edit Profile
        </button>
        <button class="leftBorder" v-on:click.prevent="changepass">
            Change Password
        </button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            myContract:"",
            formatedStartDate:"",
            formatedEndDate:""
        }
    },
    created(){
        //put code here
    },
    methods:{
        editprofile:function(){
            //insert code here (send the form to backend)
            alert("不准改");
        },
        changepass:function(){
            alert("不准改");
        }
    }
}
</script>

<style scoped>
.content {
  background: #f4f4f4;
  background-position: right center;
  height: 80px;
  text-align: center;
}
.form{
    background:#fff;
    height:auto;
    padding:5%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
     text-align: center;
}
button{
    width:50%;
    border:0px;
    height:50px;
    background-color: #fff;
    color:#797D7F;
    font-size: 14px;
    font-weight: bold;
    border-top:1px solid #f4f4f4;
}
button:hover{
    background-color: #f4f4f4;
    color:#000;
}
.leftBorder{
    border-left:1px solid #eaeaea;
}
h4{
    color:#797D7F;
    display: inline-block;
    margin-top:10px;
    margin-bottom:50px;
    text-align: center;
}
h1{
    text-align: center;
}
input{
    border: 1px solid #797D7F;
    opacity: 0.6;
    background: transparent;
    border-radius: 2px;
    font-size: 14px;
    height: 35px;
    width:100%;
    padding: 15px 15px;
    margin: 10px;
    color:#fff;
  }
  input:focus {
    color: #fff;
  }
  ::placeholder { 
  color: #797D7F;
  opacity: 0.7;
  }
  textarea{
      border: 1px solid #797D7F;
    opacity: 0.6;
    background: transparent;
    border-radius: 2px;
    font-size: 14px;
    height: 180px;
    width:100%;
    padding: 15px 15px;
    margin: 10px;
    color:#fff;
  }
</style>