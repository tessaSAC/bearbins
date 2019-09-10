<script>
import { setTimeout } from 'timers';
export default {
  name: 'TreeVisualizer',

  props: {
    leavesToShow: Array,
    treeData: Array
  },

  methods: {
    showLeaf(leafName) { return this.leavesToShow.includes(leafName) }
  }
}
</script>

<template>
<ul>
  <template v-for="leaf in treeData">
    <li v-show="showLeaf(leaf.name)" :key="leaf.name" :ref="leaf.name">
      <div class="leafContainer">{{ leaf.name }}</div>

      <TreeVisualizer v-if="leaf.children" :leavesToShow="leavesToShow" :treeData="leaf.children" />
    </li>
  </template>
</ul>
</template>