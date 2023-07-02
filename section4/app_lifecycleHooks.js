let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  beforeCreate() {
    console.log("beforeCreate() function called,", this.message);
  },
  created() {
    console.log("created() function called", this.message);
  },
  beforeMount() {
    console.log("beforeMount() function called", this.$el);
  },
  mounted() {
    console.log("mounted() function called", this.$el);
  },
  beforeUpdate() {
    console.log("beforeUpdate() function called, ", "this.$el:", this.$el);
  },
  updated() {
    console.log("updated() function called", "this.$el:", this.$el);
  },
  beforeUnmount() {
    console.log("beforeUnmount() function called, ", this.$el);
  },
  unmounted() {
    console.log("unmounted() function called, ", this.$el);
  },
});

vm.mount("#app");

// setTimeout(() => {
//   vm.mount("#app");
// }, 3000);
