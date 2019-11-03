<template>
  <div>
    <section class="content"></section>
    <div class="container">
      <div v-for="notification in notifications" class="inline" :key="notification.id">
        <NotificationContainer v-bind:notification="notification" />
      </div>
      
      <NotificationContainer />
      <NotificationContainer />
      <NotificationContainer />
      <NotificationContainer />
      <NotificationContainer />
      <NotificationContainer />

      <div class="hr-sect">End of Notifications</div>
    </div>
  </div>
</template>

<script>
import NotificationContainer from "../components/layout/NotificationContainer";
export default {
  name: "notifications",
  components: {
    NotificationContainer
  },
  data() {
    return {
      notifications: []
    };
  },
  props: ["email", "password"],
  created() {
    //get request for all notifications
  },
  methods: {
    onScroll() {}
  }
};
</script>

<style scoped>
.content {
  background: #fff;
  background-position: right center;
  height: 53px;
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