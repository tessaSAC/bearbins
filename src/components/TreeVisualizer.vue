<script>
import { setTimeout } from 'timers';
export default {
  name: 'TreeVisualizer',
  props: { treeData: Array },
}
</script>

<template>
<ul>
  <!-- All sub-children get re-rendered if v-for is in a template tag and key is unique and not index fsr -->
  <li v-for="leaf in treeData" :key="leaf.name" :ref="leaf.name">
    <div class="leafContainer" :class="leaf.bear" />
    <TreeVisualizer v-if="leaf.children" :treeData="leaf.children" />
  </li>
</ul>
</template>