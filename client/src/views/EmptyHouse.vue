<template>
  <div>
    <section class="content"></section>
    <div class="container">
        
      <div v-for="emptyRoom in emptyRooms" class="inline" :key="emptyRoom.id">
        <EmptyHouseContainer v-bind:emptyRoom="emptyRoom" />
      </div>
        <!-- <EmptyHouseContainer/>
        <EmptyHouseContainer/>
        <EmptyHouseContainer/>
        <EmptyHouseContainer/> -->
      <div class="hr-sect">End of Results</div>
    </div>
    
  </div>
</template>

<script>
import EmptyHouseContainer from "../components/layout/EmptyHouseContainer";
import PostService from '../PostService';

export default {
  name: "emptyHouse",
  components: {
    EmptyHouseContainer
  },
  data() {
    return {
      emptyHouses: [],
      emptyRooms:[],
      error:''
    };
  },
  props: ["email", "password"],
  async created() {
    //get request for all Rooms
    try {
      this.emptyRooms = await PostService.getRooms();
      this.emptyRooms=this.emptyRooms.slice(0,6);
    } catch (err) {
      this.error = err.message;
    }
    
  }
  
};
</script>

<style scoped>

.content {
  background: #f4f4f4;
  background-position: right center;
  height: 70px;
  text-align: center;
}
.hr-sect {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #c7c6c5;
  margin: 10px 0px 80px 0px;
}
.hr-sect::before,
.hr-sect::after {
  content: "";
  flex-grow: 1;
  background: #c7c6c5;
  height: 1px;
  font-size: 0px;
  line-height: 0px;
  margin: 0px 8px;
}
.hr-sect::before {
  margin-left: 15%;
}
.hr-sect::after {
  margin-right: 15%;
}
</style>