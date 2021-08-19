<template>
  <div>
    <body>
      <form>
        <h1>Please sign up</h1>

        <label for="inputname" class="sr-only">Name :</label>
        <input
          type="name"
          placeholder="Your name"
          v-model="name"
          required
          autofocus
        /><br /><br />

        <label for="inputEmail" class="sr-only">Email address :</label>
        <input
          type="email"
          placeholder="Email address"
          v-model="email"
          required
          autofocus
        />
        <br /><br />
        <label for="isSupplier">isSupplier :</label>
        <select id="isSupplier" placeholder="isSupplier" v-model="isSupplier">
          <option>true</option>
          <option>false</option>
        </select>
        <br /><br />
        <label for="inputPassword" class="sr-only">Password :</label>
        <input
          type="password"
          placeholder="Password"
          v-model="password"
          required
        />
        <br /><br />

        <label for="company" class="sr-only">Company :</label>
        <input
          type="company"
          placeholder="Company Name"
          v-model="company"
          required
          autofocus
        />
        <br /><br />

        <button type="submit" @click="signup">Sign up</button>
      </form>
    </body>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      isSupplier: Boolean,
      company: "",
    };
  },
  components: {},
  methods: {
    signup() {
      let newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
        isSupplier: this.isSupplier,
        company: this.company,
      };
      axios.post("http://3.1.103/user/signup", newUser).then(
        (res) => {
          console.log(res);
          this.error = "";
          this.$router.push("/Login");
        },
        (err) => {
          console.log(err.response);
          // this.$router.push("/Login"); // because API end point are not currect
          this.err = err.response.data.err;
        }
      );
    },
  },
};
</script>

<style scoped></style>
