<template>
<div id="app">
  <div class="tabs">
    <div
      :class="tabActive === 1 ? 'active' : ''"
      class="tab"
      @click="changeTabActive(1)"
    >visual i</div>
    <div
      :class="tabActive === 2 ? 'active' : ''"
      class="tab"
      @click="changeTabActive(2)"
    >visual ii</div>
  </div>

  <visual01changeBear v-if="tabActive === 1" />
  <visual02changeContainer v-else />
</div>
</template>

<script>
import visual01changeBear from './components/visual01changeBear'
import visual02changeContainer from './components/visual02changeContainer'

export default {
  name: 'App',

  components: {
    visual01changeBear,
    visual02changeContainer,
  },

  data: _ => ({ tabActive: 1, }),

  methods: {
    changeTabActive(newTab) { this.tabActive = newTab },
  },
}
</script>

<style lang="scss">
.tabs {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;

  .tab {
    background: rgba(0, 0, 0, 0.1);
    box-shadow: inset 0 0 0.2rem 0.2rem rgba(0, 0, 0, 0.03);
    opacity: 0.8;
    padding: 0.75rem 6rem 0.5rem;
    display: flex;
    align-items: flex-end;

    &.active {
      background: none;
      box-shadow: 0 -0.3rem 0.3rem rgba(0, 0, 0, 0.2);
      opacity: 1;
    }
  }
}



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
