<template>
  <select>
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>
</template>

<script>
import Home from "./components/Home.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  components: {
    Home,
    About,
  },
};
</script>
