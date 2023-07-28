<template>
  <button type="button" @click="onClickAge">Update age Event</button>
  <button type="button" @click="ageChangeFn(3)">
    Update age Callback (CB)
  </button>

  <p>The user is {{ age }} years old.</p>
  <p>{{ ageDoubled }}</p>
  <p>UpdateAgeCB: {{ updateAgeCB }}</p>
</template>

<script>
export default {
  name: "User",
  // props: ["age"],
  props: {
    age: {
      type: Number,
      // required: true,
      // ...when there is a default-value, then "required" is unnecessary
      // default: 20,
      validator(value) {
        // validator runs before data, computed etc. --> onClickAge() is undefined
        // this.onClickAge();
        return value < 130;
      },
    },
    ageChangeFn: Function,
  },
  emits: ["age-change"], // Declare the custom event - seems to solve the warning-message:
  // [Vue warn]: Extraneous non-emits event listeners (ageChange) were passed to component
  // but could not be automatically inherited because component renders fragment or text root nodes.
  // If the listener is intended to be a component custom event listener only, declare it using the "emits" option.

  // emits-option: is recommended to use to describe what the Component does/what events it emits
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
  // ...this computed property grabs the age-prop BUT doesnt modify it; it creates a new property!

  methods: {
    onClickAge() {
      this.$emit("age-change", 3);
    },
  },
};
</script>
