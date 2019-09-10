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