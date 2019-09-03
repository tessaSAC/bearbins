<template>
<div id="app">
  <div class="bearBin">
    <div class="dumpster"><div class="clean bear" /></div>
  </div>
  <div class="bearBin">
    <div class="dumpster"><div class="clean bear" /><div class="dirty bear" /></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'app'
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

  + .bearBin { margin-left: 5vh; }
}

.dumpster {
  display: flex;
  justify-content: space-around;
  background: green;
  width: $dumpsterWidth;
  height: $dumpsterHeight;
}

.bear {
  background: brown;
  width: $bearWidth;
  height: $bearHeight;

  position: relative;
  bottom: $bearHeight;

  &.dirty {
    background: red;
  }
}

#app {
  // dumpster styles:
  display: flex;



  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
