<template>
  <h3>Hey!</h3>

  <!-- Components can be inserted with lower-case or Upper-case -->
  <greeting :age="age"></greeting>
  <!-- if written like <user age="age"></user> </user>-> Vue would assume a String has to be passed down -->
  <!-- ":" in front needed to bind the value inside the data-function -->
  <user :age="age"></user>
</template>

<script>
import Greeting from "@/Components/Greeting.vue";
import User from "@/Components/User.vue";

export default {
  name: "App",
  components: {
    Greeting,
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
};
</script>
