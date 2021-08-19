<template>
  <div>
    <input
      type="text"
      name="name"
      placeholder="enter Title"
      v-model="title"
    /><br />
    <input
      type="id"
      name="products"
      placeholder="products"
      v-model="products"
    /><br />
    <input
      type="number"
      name="quantity"
      placeholder="enter quantity"
      v-model="quantity"
    /><br />

    <button v-on:click="addOrder">order</button>
    <br /><br />
  </div>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";
export default {
  name: "CreateOrder",
  data() {
    return {
      title: "",
      products: "",
      supplier_id: "",
      quantity: "",
    };
  },
  methods: {
    async addOrder() {
      let result = await axios.post("http://3.1.103.18/orders", {
        headers: {
          Authorization: Cookies.get("access_token", "refresh_token"),
        },
        title: this.title,
        products: this.products,
        quantity: this.quantity,
      });
      console.log(result);
      if (result.status == 201) {
        alert("done");
      }
      localStorage.setItem("user-info", JSON.stringify(result.data));
      this.$router.push({ path: "/" });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ path: "/" });
    }
  },
};
</script>

<style scoped></style>
