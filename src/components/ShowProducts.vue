<template>
  <div>
    <Head />

    <button v-on:click="getProducts()">Show All products</button>

    <table border="1px solid black">
      <tr>
        <th>Title</th>
        <th>Sku</th>
        <th>unit_price</th>
        <th>currency</th>
        <th>Action</th>
      </tr>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.title }}</td>
        <td>{{ item.sku }}</td>
        <td>{{ item.unit_price }}</td>
        <td>{{ item.currency }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import Head from "./Head.vue";
export default {
  name: "ShowProducts",
  components: {
    Head,
  },
  data() {
    return {
      products: [],
    };
  },
  getProducts() {
    axios
      .get("http://3.1.103/products", {
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
