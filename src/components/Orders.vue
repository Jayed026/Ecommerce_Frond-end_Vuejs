<template>
  <div>
    <div>
      <h2>OnlineBazar.com</h2>
      <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/CreateOrdr">Create Orders</router-link>
        <router-link to="/ShowOrders"> Show Orders </router-link>
        <router-link to="/DeleteOrder"> Update and Delete </router-link>

        <a v-on:click="logout" href="#">LogOut</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Orders",

  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ path: "/Login" });
    },
  },
};
</script>

<style scoped>
.nav {
  background-color: rgb(92, 109, 54);
  overflow: hidden;
}
.nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 10px 14px;
  text-decoration: none;
  font-size: 16px;
  margin-right: 4px;
}
.nav a:hover {
  background-color: antiquewhite;
  color: #222;
}
</style>
