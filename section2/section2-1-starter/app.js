// Instance 1:
const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      url: "https://www.google.com/",
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
    increment() {
      this.age++;
    },
    updateLastName(event, msg) {
      // event.preventDefault() can be omitted when using the
      // ...event-modifier ".prevent" in the HTML:
      // event.preventDefault();
      console.log(msg);
      this.lastName = event.target.value;
    },
  },
}).mount("#app");

// Instance 2:
// Vue.createApp({
//   data() {
//     return {
//       firstName: "Jane",
//       lastName: "Doe",
//     };
//   },
// }).mount("#app2");
