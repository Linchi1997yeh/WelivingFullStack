<template>
  <div>
    <section class="content"></section>
    <div class="container">
      <div v-for="notification in notifications" class="inline" :key="notification.id">
        <NotificationContainer v-bind:notification="notification" />
      </div>

      <div class="hr-sect">End of Notifications</div>
    </div>
  </div>
</template>

<script>
import NotificationContainer from "../components/layout/NotificationContainer";
import PostService from '../PostService';
export default {
  name: "notifications",
  components: {
    NotificationContainer
  },
  data() {
    return {
      notifications: [],
      error:''
    };
  },
  props: ["email", "password"],
  async created() {
    //get request for all notifications
    try {
      this.notifications = await PostService.getEvents();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async getNotification(){
      this.notifications = await PostService.getEvents();
    }
  }
};
</script>

<style scoped>

.content {
  background: #f4f4f4;
  background-position: right center;
  height: 80px;
  text-align: center;
}
.hr-sect {
  display: flex;
  flex-basis: 100%;
  align-items: center;
  color: #c7c6c5;
  margin: 20px 0px 80px 0px;
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