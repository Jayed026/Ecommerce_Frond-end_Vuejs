<template>
  <div>
    <table border="1px solid black">
      <tr>
        <th>Title</th>
        <th>products</th>
        <th>quantity</th>
        <th>Action</th>
      </tr>
      <tr v-for="item in orders" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.products }}</td>
        <td>{{ item.quantity }}</td>

        <td>
          <router-link :to="'/update/' + item.id">update</router-link>
          <button variant="success" v-on:click="deleteOrder(item.id)">
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";

export default {
  name: "DeleteOrder",
  data() {
    return {
      title: "",
      orders: [],
    };
  },
  methods: {
    async deleteOrder(id) {
      let result = await axios.delete("http://3.1.103.18/orders/" + id, {
        headers: {
          Authorization: Cookies.get("access_token", "refresh_token"),
        },
      });
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      console.log("User", user);
      this.title = JSON.parse(user).title;
      if (!user) {
        this.$router.push({ path: "/SignUp" });
      }
      let result = await axios.get("http://3.1.103.18/orders", {
        headers: {
          Authorization: Cookies.get("access_token", "refresh_token"),
        },
      });
      console.log("output", result.data);
      this.products = result.data;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
td {
  width: 200px;
  height: 50px;
}
</style>
