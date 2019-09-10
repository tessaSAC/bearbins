<script>
export default {
  props: {
    bearBins: {
      type: Array,
      default: _ => [],
    },
  },
}
</script>

<template>
<div class="bearBinsAll">
  <div v-for="(bin, idx) in bearBins" :key="idx" class="bearBin">
    <div :class="bin.type" />
    <div class="bearsAll">
      <div v-for="(bear, idx) in bin.bears" :key="idx" :class="`${ bear } bear`" />
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.bearBinsAll {
  min-height: 50vh;
  overflow-x: scroll;
  display: flex;
}

.bearBin {
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-start;

  + .bearBin {
    margin-left: 5vh;
  }
}

.dumpster {
  content:url('../assets/dumpster.png');
  mix-blend-mode: multiply;
  opacity: 0.9;
}
.tub {
  content:url('../assets/tub.png');
  mix-blend-mode: multiply;
  opacity: 0.9;
}

.bearsAll {
  padding: 0 0.8rem;
  display: flex;
  justify-content: space-around;
}

.bear {
  content:url('../assets/bear.png');
  mix-blend-mode: multiply;
  opacity: 0.9;


  &.dirty { content:url('../assets/bear-washing.png'); }
}

</style>