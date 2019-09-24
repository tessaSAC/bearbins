<script>
export default {
  name: 'TreeVisualizer',

  props: {
    bearSelected: Object,

    treeData: {
      type: Array,
      required: true,
    }
  },

  methods: {
    selectBear(bear) { this.$emit('bear-selected', bear) }
  }
}
</script>

<template>
<ul class="TreeVisualizer">
  <!-- All sub-children get re-rendered if v-for is in a template tag and key is unique and not index fsr -->
  <li v-for="bear in treeData" :key="bear.name">
    <div
      class="leafContainer"
      :class="[
        bear.status,
        bearSelected ? bear.name === bearSelected.name ? 'bearSelected' : '' : ''
      ]"
      @click="selectBear(bear)"
      @bear-selected="bear => $emit('bear-selected', bear)"
    />
    <TreeVisualizer
      v-if="bear.children"
      :bearSelected=bearSelected
      :treeData="bear.children"
      @bear-selected="bear => $emit('bear-selected', bear)"
    />
  </li>
</ul>
</template>

<style lang="scss" scoped>
// https://codepen.io/Pestov/pen/BLpgm

ul {
  padding-top: 20px; position: relative;

  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;

  // Time to add downward connectors from parents
  ul::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    border-left: 1px solid #ccc;
    width: 0;
    height: 26px;
  }
}

li {
  float: left; text-align: center;
  list-style-type: none;
  position: relative;
  padding: 20px 5px 0 5px;

  transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;

  // We will use ::before and ::after to draw the connectors
  &::before, &::after{
    content: '';
    position: absolute; top: 0; right: 50%;
    border-top: 1px solid #ccc;
    width: 50%; height: 20px;
  }
  &::after{
    right: auto; left: 50%;
    border-left: 1px solid #ccc;
  }

  // We need to remove left-right connectors from elements without any siblings
  &:only-child::after, &:only-child::before {
  display: none;
  }

  // Remove space from the top of single children
  &:only-child{ padding-top: 0;}

  // Remove left connector from first child and right connector from last child
  &:first-child::before, &:last-child::after{
    border: 0 none;
  }
  // Adding back the vertical connector to the last nodes
  &:last-child::before{
    border-right: 1px solid #ccc;
    border-radius: 0 5px 0 0;
  }
  &:first-child::after{
    border-radius: 5px 0 0 0;
  }

  // Time for some hover effects
  // We will apply the hover effect the the lineage of the element also
  a:hover, a:hover+ul a {
    background: #c8e4f8; color: #000; border: 1px solid #94a0b4;
  }

  // Connector styles on hover
  a:hover+ul &::after,
  a:hover+ul &::before,
  a:hover+ul::before,
  a:hover+ul ul::before{
    border-color: #94a0b4;
  }

  .leafContainer {
    mix-blend-mode: multiply;
    opacity: 0.8;
    display: inline-block;
    transition: all 0.5s;
    cursor: pointer;

    &.clean { content:url('../assets/bear_head.png') }
    &.dirty { content:url('../assets/bear_head-washing.png') }
  }
}
</style>