<template>
  <div class="ctr">
    <button type="button" class="reset-btn">Reset</button>
  </div>
</template>

<script>
import Questions from "../src/components/Questions.vue";
import Result from "../src/components/Result.vue";

export default {
  name: "App",
  components: { Questions, Result },
};
</script>

<style></style>
