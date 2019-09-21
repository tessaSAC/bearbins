<script>
export default {
  name: 'TreeVisualizer',

  props: {
    bearSelected: Object,

    treeData: Array
  },

  methods: {
    selectBear(bear) { this.$emit('bear-selected', bear) }
  }
}
</script>

<template>
<ul>
  <!-- All sub-children get re-rendered if v-for is in a template tag and key is unique and not index fsr -->
  <li v-for="bear in treeData" :key="bear.name">
    <div
      class="leafContainer"
      :class="[
        bear.status,
        bear.name === bearSelected.name ? 'bearSelected' : 'no'
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