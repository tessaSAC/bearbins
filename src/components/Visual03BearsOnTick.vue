<script>
import BearControls from './BearControls'
import BearVisualizer from './BearVisualizer'

export default {
  components: { BearControls, BearVisualizer },

  data: _ => ({
    bearBins: [],
  }),

  computed: {
    lenBearBins() { return this.bearBins.length }
  },

  // This separates the 1st bear from the rest because of how nextTick vs $nextTick works
  // created() { window.bearBins = this.bearBins },

  methods: {
    // Visual 03: Add random number of bears on nextTick — each gets a distinct nextTick but all get batched together

    // example:
    // start with a dumpster
      // Add 3 bears
      // Each gets own $nextTick but all have only one paint

    addBears() {
      // Note that even though this isn't in $nextTick it gets batched together
      this.bearBins.push({ bears: [], type: 'dumpster' })

      for(let i = 0; i < this.getRandomNumberBetween1and4(); ++i) {
        console.countReset('calling $nextTick')  // shows each count is distinct

        this.$nextTick(_ => {
          console.count('calling $nextTick')
          this.bearBins[this.lenBearBins - 1].bears.push('clean')
        })
      }
    },

    getRandomNumberBetween1and4() {
      return Math.ceil(Math.random() * 4)
    },
  },
}
</script>

<template>
<div class="Visual01ChangeBear">
  <BearVisualizer :bearBins="bearBins" />

  <BearControls>
    <button @click="addBears" class="button">+1~4 bear(s)</button>
  </BearControls>
</div>
</template>