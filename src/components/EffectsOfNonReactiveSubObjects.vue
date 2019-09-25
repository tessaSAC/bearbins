<script>
import BearControls from './BearControls'
import TreeVisualizer from './TreeVisualizer'

export default {
  components: { BearControls, TreeVisualizer },

  data: _ => ({
    bearSelected: {},

    counterUniqueId: 0,

    showTree: true,

    treeData: [{ name: 'root', status: 'clean' }],
  }),

  computed: {
    hasChildArray() { return this.bearSelected.children }
  },

  created() { this.bearSelected = this.treeData[0] },

  methods: {
    async addChild(addingMethod) {
      // If child array doesn't exists, creates a child array and awaits child array's UL to render (so as not to trigger rerender with first child (regardless of reactivity) getting batched in with reactive array's UL)
      this.checkIfGenerationExists()
      await this.$nextTick()

      if(!this.bearSelected.children) return  // can't use computed property here because this is used by both reactive and non-reactive approaches

      const { name, children } = this.bearSelected

      addingMethod(children, { name: `${ name }-${ this.counterUniqueId }`, status: 'clean' })
      ++this.counterUniqueId

      console.dir(this.treeData)
    },

    addChildReactive() {
      function addReactively(arr, newChild) { arr.push(newChild) }
      this.addChild(addReactively)

      console.dir(this.treeData)
    },

    addChildNonReactive() {
      function addNonReactively(arr, newChild) { arr[arr.length] = newChild }
      this.addChild(addNonReactively)

      console.dir(this.treeData)
    },

    addGenerationReactive() {
      if(this.hasChildArray) return
      this.$set(this.bearSelected, 'children', [])

      console.dir(this.treeData)
    },

    addGenerationNonReactive() {
      if(this.bearSelected.children) return
      this.bearSelected.children = []

      console.dir(this.treeData)
    },

    // addChild() {
    //   if(!this.hasChildArray) return  // don't add children if generation doesn't exist

    //   const { name, children } = this.bearSelected
    //   children.push({ name: `${ name }-${ this.counterUniqueId }`, status: 'clean' })
    //   ++this.counterUniqueId
    // },

    changeBearStatus() {
      const { status } = this.bearSelected
      this.bearSelected.status = status === 'clean' ? 'dirty' : 'clean'
    },

    checkIfGenerationExists () {
      const { children } = this.bearSelected
      if(!children) this.$set(this.bearSelected, 'children', [])
    },

    resetTreeData() {
      this.treeData = [{ name: 'root', status: 'clean' }]
      this.bearSelected = this.treeData[0]
    },

    selectBear(bearSelected) {
      this.bearSelected = bearSelected
      console.log('bear selected:')
      console.dir(this.bearSelected)
    },

    triggerRender() {
      // rerendering using keys was adding observers to everything
      this.showTree = !this.showTree
      this.$nextTick(_ => this.showTree = !this.showTree)

      console.dir(this.treeData)
    }
  },
}
</script>

<template>
<div class="EffectsOfNonReactiveSubObjects">
  <div class="TreeContainer">
    <TreeVisualizer v-if="showTree" :bearSelected=bearSelected :treeData="treeData" @bear-selected="selectBear" />
  </div>

  <BearControls>
    <button class="button" @click="addGenerationReactive">add reactive generation</button>
    <button class="button" @click="addGenerationNonReactive">add non-reactive generation</button>
    <button class="button" @click="addChildReactive">add reactive child</button>
    <button class="button" @click="addChildNonReactive">add non-reactive child</button>
    <button class="button" @click="changeBearStatus">change bear status</button>
    <button class="button" @click="triggerRender">trigger render</button>
    <button class="button" @click="resetTreeData">restart</button>
  </BearControls>
</div>
</template>

<style lang="scss">
.EffectsOfNonReactiveSubObjects {
  min-height: 50vh;
  display: flex;
  justify-content: space-between;

  .TreeContainer {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  .BearControls {
    flex-direction: column;
    align-items: center;
    margin-top: 0;
    padding: 1rem;

    button:first-of-type { margin-left: 1rem; }

    .button + .button { margin-top: 2rem; }
  }

  .bearSelected { filter: drop-shadow(0 0 0.75rem green); }
}
</style>