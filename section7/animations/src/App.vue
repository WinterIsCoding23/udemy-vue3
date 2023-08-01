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

  <!-- Chapter 73 -->
  <!-- <transition name="zoom" type="animation" appear>
      <h2 v-if="flag">Hello</h2>
    </transition> -->

  <!-- Chapter 74: -->
  <!-- There exist also the @enter-cancelled & @leave-cancelled -hooks -->
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <h2 v-if="flag">Hey!</h2>
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
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter-event fired");
    },
    enter(el, done) {
      console.log("enter-event fired");
      done();
    },
    beforeEnter(el) {
      console.log("beforeEnter-event fired");
    },
    leave(el, done) {
      console.log("leave-event fired");
      done();
    },
    afterLeave(el) {
      console.log("afterLeave-event fired");
    },
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

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  /* transition: all 1s linear; */
  /* Vue uses the duration with the longest time --> in this case, animation wont happen, element just appears*/
  /* --> add type="(HERE put the animation OR transition whose duration Vue should use )" PLUS appear as an attribute*/
  transition: all 2s linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  /* transition: all 1s linear; */
  transition: all 2s linear;
}
.zoom-enter-from {
  opacity: 0;
}

.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}
</style>
