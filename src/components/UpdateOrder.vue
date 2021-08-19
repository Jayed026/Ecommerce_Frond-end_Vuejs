<template>
  <div>
    <h1>this is update page</h1>

    <form class="update">
      <br />
      <input
        type="text"
        placeholder="products"
        v-model="order.products"
        name="products"
      />
      <br />
      <input
        type="number"
        placeholder="enter price_unit"
        v-model="order.quantity"
        name="q"
      /><br />

      <button v-on:click="updateOrder">Update Order</button>
    </form>
  </div>
</template>
<script>
import Cookies from "js-cookie";
import axios from "axios";

export default {
  name: "UpdateOrder",
  data() {
    return {
      order: {
        title: "",
        products: "",
        quantity: "",
        supplier_id: "",
      },
    };
  },

  methods: {
    async updateOrder() {
      const result = await axios.put(
        "http://3.1.103.18/orders/" + this.$route.params.id,
        {
          headers: {
            Authorization: Cookies.get("access_token", "refresh_token"),
          },
          products: this.order.products,

          quantity: this.order.quantity,
        }
      );
      if (result.status == 200) {
        this.$router.push({ path: "/" });
      }
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ path: "/SignUp" });
    }
    console.log(this.$route.params.id);
    const result = await axios.get(
      "http://3.1.103.18/order/" + this.$route.params.id,
      {
        headers: {
          Authorization: Cookies.get("access_token", "refresh_token"),
        },
      }
    );
    this.order = result.data;
  },
};
</script>

<style scoped>
.update input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: black;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid green;
}
</style>
