<script>
export default {
  name: 'TreeVisualizer',

  props: { treeData: Array },

  methods: {
    switchBear(bear) { this.$emit('switch-bear-status', bear) }
  }
}
</script>

<template>
<ul>
  <!-- All sub-children get re-rendered if v-for is in a template tag and key is unique and not index fsr -->
  <li v-for="bear in treeData" :key="bear.name">
    <div class="leafContainer" :class="bear.status" @click="switchBear(bear)" @switch-bear-status="bear => $emit('switch-bear-status', bear)" />
    <TreeVisualizer v-if="bear.children" :treeData="bear.children" @switch-bear-status="bear => $emit('switch-bear-status', bear)" />
  </li>
</ul>
</template>