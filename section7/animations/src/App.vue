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
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="true"
    name="fade"
  >
    <!-- Vue checks first if there are CSS-animations before checking on the JS-animations
    -> binding the css-attribute like this to the transition-component: ":css="false" saves ressources since Vue then doesnt check for (the in this case non-existent) CSS-animations:  -->
    <h2 v-if="flag">Hey!</h2>
  </transition>

  <!-- Chapter 77 Animating a List: -->
  <button @click="addItem">Add</button>

  <ul>
    <!-- Other available classes are: -->
    <!-- 
      enter-from-class=""
      enter-to-class=""
      leave-from-class=""
      leave-to-class="" 
    -->
    <transition-group
      name="fade"
      enter-active-class="animate__animated animate__flipInX"
      leave-active-class="animate__animated animate__flipOutX"
    >
      <li
        v-for="(number, index) in numbers"
        :key="number"
        @click="removeItem(index)"
      >
        {{ number }}
      </li>
    </transition-group>
  </ul>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      flag: true,
      numbers: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    // addItem-function inserts a random number "num" between 1 and 100
    // & inserts it at the position of a random index-number from the numbers-array
    // the splice-method makes sure that the insertion is done at index "index", 0 elements removed and "num" is inserted
    addItem() {
      const num = Math.floor(Math.random() * 100 + 1);
      const index = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(index, 0, num);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
    beforeEnter(el) {
      console.log("beforeEnter-event fired", el);
    },
    enter(el) {
      console.log("enter-event fired", el);

      // animate() can include as many objects (= animations) inside the array as we want
      // ...second object can remain empty when we want the element to animate back to its original size
      // const animation = el.animate([{ transform: "scale3d(0, 0, 0)" }, {}], {
      //   duration: 1000,
      // });

      // animation.onfinish = () => {
      //   done();
      // };
    },
    afterEnter(el) {
      console.log("afterEnter-event fired", el);
    },
    beforeLeave(el) {
      console.log("beforeLeave-event fired", el);
    },
    leave(el) {
      console.log("leave-event fired", el);
      // const animation = el.animate([{}, { transform: "scale3d(0, 0, 0)" }], {
      //   duration: 1000,
      // });

      // animation.onfinish = () => {
      //   done();
      // };
    },
    afterLeave(el) {
      console.log("afterLeave-event fired", el);
    },
  },
};
</script>

<style>
ul {
  width: max-content;
}
li {
  list-style: none;
  font-size: 22px;
  cursor: pointer;
}

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

.fade-move {
  transition: all 1s linear;
}

/*chapter 78: this class prevents the moved li-items to "jump" to take over the spot of the removed item  */
.fade-leave-active {
  position: absolute;
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

<!-- Code from chapter 75: Javascript Zoom Animation -->
<!-- <script>
export default {
  name: "App",
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter-event fired", el);
    },
    enter(el, done) {
      console.log("enter-event fired", el);

      // animate() can include as many objects (= animations) inside the array as we want
      // ...second object can remain empty when we want the element to animate back to its original size
      const animation = el.animate([{ transform: "scale3d(0, 0, 0)" }, {}], {
        duration: 1000,
      });

      animation.onfinish = () => {
        done();
      };
    },
    afterEnter(el) {
      console.log("afterEnter-event fired", el);
    },
    beforeLeave(el) {
      console.log("beforeLeave-event fired", el);
    },
    leave(el, done) {
      console.log("leave-event fired", el);
      const animation = el.animate([{}, { transform: "scale3d(0, 0, 0)" }], {
        duration: 1000,
      });

      animation.onfinish = () => {
        done();
      };
    },
    afterLeave(el) {
      console.log("afterLeave-event fired", el);
    },
  },
};
</script> -->
