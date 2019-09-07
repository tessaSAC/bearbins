<template>
  <div id="app">
    <div class="bearBinsAll">
      <div v-for="(bin, idx) in bearBins" :key="idx" :class="`${ bin.type } bearBin`">
        <div v-for="(bear, idx) in bin.bears" :key="idx" :class="`${ bear } bear`" />
      </div>
    </div>

    <div class="controls">
      <button @click="addTub" class="button">+tub</button>
      <button @click="addDumpster" class="button">+dumpster</button>
      <button @click="addBear" class="button">+bear</button>
      <button @click="addBearReactive" class="button">+ sun bear</button>
      <button @click="addBearHidden" class="button">+ moon bear</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',

  data: _ => ({
    bearBins: [{ type: 'tub', bears: [] }]
  }),

  computed: {
    lenBearBins() { return this.bearBins.length }
  },

  created() { window.bearBins = this.bearBins },

  methods: {
    // TODO: Make two pages because need to not render new dumps on nextTick
    // Example 1:
    // have a method that pushes dumpsters and bathtubs
    // push bears into the lastest bath or dumpster

    // if it's a non-reactive add it will be a dumpster
    // otherwise it will be a bathtub

    // example 1:
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
      this.bearBins[ this.lenBearBins ] = { type: 'dumpster', bears: [] }
    },

    addBear() {
      this.bearBins[ this.lenBearBins - 1 ].bears.push('clean')
    },

    // Example 2: dumpsters get pushed on nextTick, bears get good or bad added to the latest container

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

<style lang="scss">
$bearHeight: 4vw;
$bearWidth: 5vh;

$dumpsterWidth: 10vw;
$dumpsterHeight: 5vh;

.bearBinsAll {
  display: flex;
}

.bearBin {
  display: flex;
  justify-content: space-around;
  min-width: $dumpsterWidth;
  height: $dumpsterHeight;
  background: green;
  background-blend-mode: multiply; // will work once image is added

  + .bearBin {
    margin-left: 5vh;
  }
}

.dumpster {
  background: green;
}
.tub {
 background: darkgrey;
}

.bear {
  position: relative;
  bottom: $bearHeight;
  width: $bearWidth;
  height: $bearHeight;
  background: brown;

  &.dirty {
    background: red;
  }
}

.controls {
  margin-top: 2rem;
  padding: 4rem;
  display: flex;
  justify-content: flex-end;

  .button {
    background: none;
    border: 1px solid black;
    border-radius: 2rem;
    padding: 0.5rem 1.5rem;
    font-family: 'Overpass', sans-serif;
    font-size: 1.3rem;

    &:active {
      position: relative;
      top: 0.2rem;
      left: 0.1rem;
    }

    + .button {
      margin-left: 1rem;
    }
  }
}

#app {
  @import url('https://fonts.googleapis.com/css?family=Bad+Script|Lateef|Overpass|Overpass+Mono&display=swap');

  // reset:
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 10vh;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 16px;
  color: #2c3e50;
  text-align: center;
  // dumpster styles:
  background-image: url('./assets/paper_texture.jpg');
  background-blend-mode: multiply;
  opacity: 0.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  padding: 0;
  margin: 0;
  font-weight: normal;
}
</style>
