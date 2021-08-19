<template>
  <div>
    <body>
      <form>
        <h1>Please log In</h1>
        <label for="inputEmail" class="sr-only">Email :</label>
        <input
          type="name"
          v-model="username"
          placeholder="Enter Email"
          required
          autofocus
        /><br /><br />
        <label for="inputPassword" class="sr-only">Password :</label>
        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        /><br /><br />
        <button type="submit" @click="login()">log in</button>
      </form>
    </body>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
export default {
  name: "Login",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      console.log("work");
      let user = {
        username: this.username,
        password: this.password,
      };
      axios.post("http://api-shekhao.herokuapp.com/login", user).then(
        (res) => {
          console.log("work1");
          Cookies.set("access_token", res.data.access_token);
          Cookies.set("refresh_token", res.data.refresh_token);
          this.$router.push("/dashboard");
        },
        (err) => {
          console.log("work2");
          console.log(err.response);
          this.$router.push("/dashboard"); //because API end point are not valid
          this.error = err.response.data.error;
        }
      );
    },
  },
};
</script>

<style scoped></style>
