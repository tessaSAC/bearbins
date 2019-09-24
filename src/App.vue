<script>
import Visual01ChangeBear from './components/Visual01ChangeBear'
import Visual02ChangeContainer from './components/Visual02ChangeContainer'
import Visual03BearsOnTick from './components/Visual03BearsOnTick'
import RenderTree from './components/RenderTree'
import EffectsOfNonReactiveSubObjects from './components/EffectsOfNonReactiveSubObjects'
import ReferenceLinks from './components/ReferenceLinks'

export default {
  name: 'App',

  components: {
    Visual01ChangeBear,
    Visual02ChangeContainer,
    Visual03BearsOnTick,
    RenderTree,
    EffectsOfNonReactiveSubObjects,
    ReferenceLinks,
  },

  data: _ => ({ tabActive: 1, }),

  methods: {
    changeTabActive(newTab) { this.tabActive = newTab },
  },
}
</script>

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
    <div
      :class="tabActive === 3 ? 'active' : ''"
      class="tab"
      @click="changeTabActive(3)"
    >visual iii</div>
    <div
      :class="tabActive === 4 ? 'active' : ''"
      class="tab"
      @click="changeTabActive(4)"
    >render tree</div>
    <div
    <div
      :class="tabActive === 5 ? 'active' : ''"
      class="tab"
      @click="changeTabActive(5)"
    >non-reactive sub-objects</div>
    <div
      :class="tabActive === 6 ? 'active' : ''"
      class="tab"
      @click="changeTabActive(6)"
    >reference</div>
    <div class="tab bg" />
  </div>

  <Visual01ChangeBear v-if="tabActive === 1" class="content" />
  <Visual02ChangeContainer v-else-if="tabActive === 2" class="content" />
  <Visual03BearsOnTick v-else-if="tabActive === 3" class="content" />
  <RenderTree v-else-if="tabActive === 4" class="content" />
  <EffectsOfNonReactiveSubObjects v-else-if="tabActive === 5" class="content" />
  <ReferenceLinks v-else class="content" />
</div>
</template>

<style lang="scss">
$black: rgba(#2c3e50, 0.7);

.tabs {
  width: 100vw;
  display: flex;

  .tab {
    background: rgba(0, 0, 0, 0.1);
    opacity: 0.8;
    padding: 0.75rem 2rem 0.5rem;
    display: flex;
    align-items: center;
    border-left: 0.8px solid rgba(0, 0, 0, 0.08);
    border-right: 0.8px solid rgba(0, 0, 0, 0.08);

    &.active {
      background: none;
      box-shadow: 0 -0.3rem 0.3rem rgba(0, 0, 0, 0.2);
      opacity: 1;
    }

    &.bg { flex-grow: 1; }
  }
}

.content { padding: 10vh; }

#app {
  @import url('https://fonts.googleapis.com/css?family=Overpass&display=swap');

  font-family: 'Overpass', 'Avenir', Helvetica, Arial, sans-serif;
  color: $black;
  font-size: 16px;
  font-size: 0.9rem;
  text-align: center;

  // background:
  background-image: url('./assets/paper_texture.jpg');
  background-blend-mode: multiply;

  box-sizing: border-box;

  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  flex-direction: column;


  // from cli:
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;


  // reset:
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
