<template>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: "Greeting",
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
</style>
