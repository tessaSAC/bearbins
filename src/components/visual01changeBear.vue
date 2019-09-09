<script>
export default {
  data: _ => ({
    bearBins: [{ type: 'tub', bears: [] }],
  }),

  computed: {
    lenBearBins() { return this.bearBins.length }
  },

  created() { window.bearBins = this.bearBins },

  methods: {
    // Visual 01: dumpsters get pushed on nextTick, bears get good or bad added to the latest container

    // example:
    // start with a dumpster
      // good add bear
        // renders and new dumpster gets pushed and rendered
    // bad add bear
      // bear gets added to new dumpster but nothing renders
    // good add bear
      // good bear gets added to new dumpster
      // renders dumpster with good and bad bea
      // renders and adds new dumpster

    addBearReactive() {
      this.bearBins[ this.lenBearBins - 1 ].bears.push('clean')
    },

    addBearHidden() {
      const currentBin = this.bearBins[ this.lenBearBins - 1 ].bears
      currentBin[currentBin.length] = 'dirty'
    },
  },
}
</script>

<template>
<div class="example1">
  <div class="bearBinsAll">
    <div v-for="(bin, idx) in bearBins" :key="idx" :class="`${ bin.type } bearBin`">
      <div v-for="(bear, idx) in bin.bears" :key="idx" :class="`${ bear } bear`" />
    </div>
  </div>

  <div class="controls">
    <button @click="addBearReactive" class="button">+ clean bear</button>
    <button @click="addBearHidden" class="button">+ washing bear</button>
  </div>
</div>
</template>