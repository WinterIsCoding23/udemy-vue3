// Instance 1:
const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      middleName: "",
      lastName: "Doe",
      url: "https://www.google.com/",
      age: 20,
    };
  },
  methods: {
    // fullName() gets moved into the computed-property in section2-25:
    // fullName() {
    //   return `
    //   ${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
    // },
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
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
  computed: {
    fullName() {
      console.log("fullName-function was called");
      return `
      ${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
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
