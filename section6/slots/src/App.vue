<!-- the component can be named "AppForm" or "appForm" or "app-Form" -->
<template>
  <app-Form>
    <template v-slot:help><p>This is some help-text.</p></template>
    <template v-slot:fields>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
    <p>Some intelligent Dummy-text</p>
  </app-Form>

  <app-form>
    <!-- the form-component can be used multiple times - even with modified content! -->
    <template v-slot:help><p>Contact:</p></template>
    <template v-slot:fields>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="message" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </app-form>
</template>

<script>
// "AppForm" to prevent naming-conflict with the form-element
import AppForm from "@/components/Form.vue";

export default {
  name: "App",
  components: {
    AppForm,
  },
};
</script>
