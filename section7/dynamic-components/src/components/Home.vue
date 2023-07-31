<template>
  <h1>Home Page</h1>
</template>
<script>
export default {
  unmounted() {
    console.log("Home component is unmounted");
  },
  // life-cycle-hooks activated & deactivated --> opportunity to run code when a component is activated ("mounted") and deactivated ("unmounted")
  activated() {
    console.log("Home component is activated");
  },
  deactivated() {
    console.log("Home component is deactivated");
  },
};
</script>
