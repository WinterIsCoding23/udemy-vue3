let vm = Vue.createApp({});

vm.component("hello", {
  data() {
    return {
      message: "Hello world!",
    };
  },
});

vm.mount("#app");
