<template>
  <div>
    <input
      type="text"
      name="name"
      placeholder="enter Title"
      v-model="title"
    /><br />
    <input type="text" name="sk" placeholder="enter sku" v-model="sku" /><br />
    <input
      type="number"
      name="un"
      placeholder="enter unit_price"
      v-model="unit_price"
    /><br />
    <input
      type="number"
      name="cr"
      placeholder="enter currency"
      v-model="currency"
    /><br />
    <button v-on:click="addProduct">Add product</button>
    <br /><br />
  </div>
</template>

<script>
import Cookies from "js-cookie";
import axios from "axios";
export default {
  name: "Uploadprodct",
  data() {
    return {
      title: "",
      sku: "",
      unit_price: "",
      supplier_id: "",
      currency: "",
    };
  },
  methods: {
    async addProduct() {
      let result = await axios.post("http://3.1.103.18/products", {
        headers: {
          Authorization: Cookies.get("access_token", "refresh_token"),
        },
        title: this.title,
        sku: this.sku,
        unit_price: this.unit_price,
        currency: this.currency,
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
