<script>
import BearControls from './BearControls'
import BearVisualizer from './BearVisualizer'

export default {
  components: { BearControls, BearVisualizer },

  data: _ => ({
    bearBins: [{ type: 'dumpster', bears: [] }],
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

    addBearNonReactive() {
      const currentBin = this.bearBins[ this.bearBins.length - 1 ].bears
      currentBin[currentBin.length] = 'dirty'
    },
  },
}
</script>

<template>
<div class="Visual01ChangeBear">
  <BearVisualizer :bearBins="bearBins" />

  <BearControls>
    <button @click="addBearReactive" class="button">+ clean bear</button>
    <button @click="addBearNonReactive" class="button">+ washing bear</button>
  </BearControls>
</div>
</template>