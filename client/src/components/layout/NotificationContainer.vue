<template>
    <div class="card">
        <img class="event_pic" alt="Event Picture" v-bind:src="notification.photo">
        <div class="container">
            
            <h2 class="event_title">{{notification.title}}</h2>
            <h4 class="right">{{formatedDate}}<br>{{notification.place}}</h4>
            <h5>{{notification.description}} </h5>
        
        </div>
        <button v-on:click.prevent="cardBtn">Join</button><button class="leftBorder" v-on:click.prevent="cardBtn">Share</button>
    </div>                
</template>
<script>
export default {
    data(){
        return{
            formatedDate:""
        }
    },
    props:["notification"],
    created(){
        this.formatedDate =  `${this.$props.notification.date.getDate()}/${this.$props.notification.date.getMonth()+1}/${this.$props.notification.date.getFullYear()}` 
    },
    methods:{
        cardBtn:function(){
            alert("Sorry, this function is under maintenance :(\nPlease contact "+ this.$props.notification.host);
        }
    },
}
</script>

<style scoped>
*{
   background: #fff;
}
.container{
    margin: auto;
    margin-top:3%;
    margin-bottom: 3%;
    overflow: hidden;
    /* position: relative; */
    width: 90%;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width:100%;
  text-align: left;
  font-family: arial;
  display: inline-block;
  margin:5px;
}
h3,h2{
    display:inline-block;
}
.event_title{
    display:inline-block;
    margin-top:5px;
}
h5,p{
    color:#797D7F;
    display: inline-block;
    margin-top:10px;
}
.date_display{
    padding-top:8px;
    float: right;
}

.right{
  margin:0px;
  float: right;
}

.image-cropper {
    width: 60px;
    height: 60px;
    overflow: hidden;
    border-radius: 50%;
}

button{
    width:50%;
    border:0px;
    height:30px;
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
.event_pic{
    width:100%;
    max-height: 150px;
    overflow: hidden;
    object-fit: cover;
}
</style>