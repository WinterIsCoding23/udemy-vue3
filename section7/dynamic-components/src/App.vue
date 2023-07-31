<template>
  <select v-model="componentName">
    <option value="Home">Home</option>
    <option value="About">About</option>
  </select>

  <!-- the <component>-Component is a Vue-feature meaning it loads the specified component -->
  <!-- ...to not load always the same component but to load a component dynamically, we add the componentName-data-property -->
  <keep-alive>
    <component :is="componentName"></component>
  </keep-alive>
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
  data() {
    return {
      // ...meaning the Home-component is loaded as default
      componentName: "Home",
    };
  },
};
</script>
