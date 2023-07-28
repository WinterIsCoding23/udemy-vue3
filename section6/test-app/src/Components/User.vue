<template>
  <button type="button" @click="onClickAge">Update age</button>

  <p>The user is {{ age }} years old.</p>
</template>

<script>
export default {
  name: "User",
  props: ["age"],
  emits: ["age-change"], // Declare the custom event - seems to solve the warning-message:
  // [Vue warn]: Extraneous non-emits event listeners (ageChange) were passed to component
  // but could not be automatically inherited because component renders fragment or text root nodes.
  // If the listener is intended to be a component custom event listener only, declare it using the "emits" option.
  methods: {
    onClickAge() {
      this.$emit("age-change", 3);
    },
  },
};
</script>
