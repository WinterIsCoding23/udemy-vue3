<template>
  <p v-if="age >= 25">{{ msg }}</p>
  <p v-else>You must be 25 years or older to view this message.</p>
</template>

<script>
export default {
  name: "Greeting",
  props: ["age"],
  data() {
    return {
      msg: "Hello World!",
    };
  },
};
</script>

<!-- scss -> SASS -->
<!-- lighten/darken are SASS-functions -->
<style scoped lang="scss">
p:hover {
  color: darken(#cc4444, 15%);
}
p {
  color: red;
}
</style>
