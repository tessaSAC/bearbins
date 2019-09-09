<script>
export default {
  data: _ => ({
    bearBins: [],
  }),

  computed: {
    lenBearBins() { return this.bearBins.length }
  },

  methods: {
    // Visual 02:
    // have a method that pushes dumpsters and bathtubs
    // push bears into the lastest bath or dumpster

    // if it's a non-reactive add it will be a dumpster
    // otherwise it will be a bathtub

    // example:
    // push a tub (should render)
      // add bear to latest container
      // should render in tub
    // push a dumpster (should not render)
      // add bear to latest container
      // should render in newly rendered dumpster
    // alt: try the above
      // push a tub
      // dumpster should render as well

    // data structure:
    // [
    //   {
    //     type: dumpster | tub,
    //     bears: [],
    //   },
    // ]

    addTub() {
      this.bearBins.push({ type: 'tub', bears: [] })
    },

    addDumpster() {
      this.bearBins[ this.bearBins.length ] = { type: 'dumpster', bears: [] }  // NB: can't use computed prop here because it won't update
      console.dir(this.bearBins)  // NB only tubs have observers on them — this may have ramifications for editing grandchildren
    },

    addBear() {
      this.bearBins[ this.lenBearBins - 1 ].bears.push('clean')
    },
  },
}
</script>

<template>
<div class="visual02changeContainer">
  <div class="bearBinsAll">
    <div v-for="(bin, idx) in bearBins" :key="idx" :class="`${ bin.type } bearBin`">
      <div v-for="(bear, idx) in bin.bears" :key="idx" :class="`${ bear } bear`" />
    </div>
  </div>

  <div class="controls">
    <button @click="addTub" class="button">+tub</button>
    <button @click="addDumpster" class="button">+dumpster</button>
    <button @click="addBear" class="button">+bear</button>
  </div>
</div>
</template>