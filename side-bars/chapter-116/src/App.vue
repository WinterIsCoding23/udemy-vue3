<template>
  <div id="app">
    <hello-world #default="{ user, favorites }">
      <p>Hello {{ user.name }}. I like {{ favorites[0] }}.</p>
    </hello-world>
    <!-- alias for the v-slot-property can be chosen completely freely, conventions: "v" and "slot-props" 
      ..."short-hand-syntax" for v-slot: #default ("default" is the required alias)
    <hello-world v-slot="v">
      <p>Hello {{ v.user.name }}.</p>
    </hello-world>
    -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
