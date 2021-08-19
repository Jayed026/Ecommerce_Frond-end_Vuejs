<template>
  <div>
    <section>
      <Head />
      <div :style="image" class="image"></div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Head from "./Head.vue";
import Footer from "./Footer.vue";
export default {
  name: "Welcome",
  components: {
    Head,
    Footer,
  },
  data() {
    return {
      image: {
        backgroundImage:
          "url(https://images.pexels.com/photos/34577/pexels-photo.jpg?cs=srgb&dl=pexels-negative-space-34577.jpg&fm=jpg)",
      },
    };
  },
};
</script>

<style scoped>
.image {
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
