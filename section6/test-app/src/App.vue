<template>
  <h3>Hey!</h3>
  <!-- Components can be inserted with lower-case or Upper-case -->
  <greeting></greeting>
  <user></user>
</template>

<script>
import Greeting from "@/Components/Greeting.vue";
import User from "@Components/User.vue";

export default {
  name: "App",
  components: {
    Greeting,
    User,
  },
};
</script>
