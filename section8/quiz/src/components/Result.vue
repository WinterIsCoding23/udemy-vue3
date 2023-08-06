<template>
  <div class="result">
    <div class="title">{{ result[resultIndex].title }}</div>
    <div class="desc">{{ result[resultIndex].desc }}</div>
  </div>
</template>

<script>
export default {
  props: ["results", "totalCorrect"],
  computed: {
    resultIndex() {
      let index = 0;

      this.results.forEach((item, i) => {
        if (item.min <= this.totalCorrect && item.max >= this.totalCorrect) {
          index = i;
        }
      });

      return index;
    },
  },
};
</script>
