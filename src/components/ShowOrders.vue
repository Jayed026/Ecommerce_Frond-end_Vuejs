<template>
  <div>
    <Head />
    <button v-on:click="getOrders">
      Show All orders
    </button>

    <table border="1px solid black">
      <tr>
        <th>Title</th>
        <th>products</th>
        <th>quantity</th>
      </tr>
      <tr v-for="item in orders" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.products }}</td>
        <td>{{ item.quantity }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import Head from "./Head.vue";
export default {
  name: "ShowOrders",
  components: {
    Head,
  },
  data() {
    return {
      orders: [],
    };
  },
  getOrders() {
    console.log("working");
    axios
      .get("http://3.1.103/orders", {
        headers: {
          Authorization: Cookies.get("access_token", "refresh_token"),
        },
      })
      .then((response) => {
        this.posts = response.data;
      })
      .catch((err) => {
        this.err = err.response.data.err;
      });
  },
};
</script>

<style scoped>
button {
  height: 50px;
  width: 100px;
}
</style>
