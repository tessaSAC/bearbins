<script>
export default {
  data: _ => ({
    someArr: []
  }),

  methods: {
    // Experiment:
    // Add sub-array
    // Add sub-sub arrays (whether reactive or not)
    // Notice that the reactive sub-sub arrays' contents continue to trigger changes
    // Where non-reactive sub-sub arrays continue to be non-reactive

    addSubArray() { this.someArr.push([]) },

    addReactiveSubArray() { this.someArr[this.someArr.length - 1].push({ a: 1 })},
    addNonReactiveSubArray() {
      const currentSubArray = this.someArr[this.someArr.length - 1]
      currentSubArray[currentSubArray.length] = { a: 1 }
    },

    alterSubArray() { this.someArr[this.someArr.length - 1][0].a += this.someArr[0][0].a }
  }
}
</script>

<template>
<div>
  <pre>
    {{ someArr }}
  </pre>
  <button @click="addSubArray">add sub-array</button>
  <button @click="addReactiveSubArray">add reactive sub-sub array</button>
  <button @click="addNonReactiveSubArray">add non-reactive sub-sub array</button>
  <button @click="alterSubArray">alter first sub-sub array in most recent sub-array</button>
</div>
</template>