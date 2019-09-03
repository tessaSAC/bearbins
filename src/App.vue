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
  // dumpster styles:
  display: flex;
  margin-top: 60px;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
