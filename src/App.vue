<template>
  <div id="app">
    <div class="bearBin">
      <div class="dumpster"><div class="clean bear"/></div>
    </div>
    <div class="bearBin">
      <div class="dumpster">
        <div class="clean bear" />
        <div class="dirty bear" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
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
  background-blend-mode: multiply;  // will work once image is added
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
