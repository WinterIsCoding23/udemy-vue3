<template>
  <h1>{{ msg }}</h1>
  <p>{{ test }}</p>
  <p>And another line</p>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      msg: "Hello World!",
    };
  },
  name: "test",
  data() {
    return {
      msg: "This is a test",
    };
  },
};
</script>
