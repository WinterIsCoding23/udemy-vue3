<template>
  <button type="button" @click="flag = !flag">Toggle</button>

  <!-- Chapter 71-72 -->
  <!-- by default: When animating 2 elements that appear conditionally, Vue animates the second element in & then the first element out -->
  <!-- ...the property "mode" of the transition-component controls/sets this behaviour -->
  <!-- <transition name="fade" mode="out-in"> -->
  <!-- v-show / v-if have the same effect here -->
  <!-- <h2 v-if="flag" key="main">Hello World!</h2> -->
  <!-- <h2 v-show="flag">Hello World!</h2> -->
  <!-- <h2 v-else key="secondary">Another Hello!</h2> -->
  <!-- </transition> -->

  <transition name="zoom">
    <h2 v-if="flag">Hello</h2>
  </transition>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: false,
    };
  },
};
</script>

<style>
h2 {
  width: 400px;
  margin: 20px;
  padding: 20px;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s linear;
  /* "opacity = 1" does not have to be applied bc its default value is 1 */
}

.fade-leave-to {
  transition: all 1s linear;
  opacity: 0;
}
</style>
