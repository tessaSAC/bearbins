<template>
  <div id="app">
    <div class="bearBin">
      <div class="dumpster"><div class="clean bear"/></div>
    </div>
    <div class="bearBin">
      <div v-for="(dumpster, idx) in dumpsters" :key="idx" class="dumpster">
        <div v-for="(bear, idx) in dumpster" :key="idx" :class="`${ bear } bear`" />
      </div>
    </div>

    <button @click="radd">good</button>
    <button @click="badd">bad</button>
  </div>
</template>

<script>
export default {
  name: 'App',

  data: _ => ({
    dumpsters: [[]]
  }),

  watch: {
    '$nextTick': function() {
      console.log('hiii')
    }
  },

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


  // alternative: dumpsters get pushed on nextTick, bears get good or bad added to the latest container

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

  // data structure:
  // [
  //   [
  //     'good',
  //     'bad',
  //   ],
  // ]    // actually this can use the same structure as the previous example for consistency


  methods: {
    radd() {
      this.dumpsters[0].push('clean')
    },

    badd() {

    },
  },
}
</script>

<style lang="scss">
$bearHeight: 4vw;
$bearWidth: 5vh;

$dumpsterWidth: 25vw;
$dumpsterHeight: 10vh;

.bearBin {
  display: flex;
  flex-direction: column;

  + .bearBin {
    margin-left: 5vh;
  }
}

.dumpster {
  display: flex;
  justify-content: space-around;
  width: $dumpsterWidth;
  height: $dumpsterHeight;
  background: green;
  background-blend-mode: multiply; // will work once image is added
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

#app {
  // reset:
  box-sizing: border-box;
  display: flex;
  align-items: center;
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
