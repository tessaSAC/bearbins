<script>
import BearControls from './BearControls'
import TreeVisualizer from './TreeVisualizer'

export default {
  components: { BearControls, TreeVisualizer },

  data: _ => ({
    bearSelected: { name: 'root' },

    counterUniqueId: 0,

    treeData: [
      {
        name: 'root',
        status: 'clean',
        children: [
          { name: 'b', status: 'clean' },
          {
            name: 'c',
            status: 'clean',
            children: [
              {
                name: 'e',
                status: 'clean',
                children: [
                  { name: 'g', status: 'clean' },
                  {
                    name: 'h',
                    status: 'clean',
                    children: [
                      { name: 'i', status: 'clean' },
                    ],
                  },
                ],
              },
              { name: 'f', status: 'clean' },
            ]
          },
          { name: 'd', status: 'clean', },
        ],
      },
    ],

    treeKey: 0,
  }),

  mounted() {},

  methods: {
    // TODO: need to switch back to reactive and non-reactive generations because otherwise the parent array is still reactive (can detect changes to bear status)

    async addChild(addingMethod) {
      this.checkIfGenerationExists()

      await this.$nextTick()

      const { name, children } = this.bearSelected

      addingMethod(children, { name: `${ name }-${ this.counterUniqueId }`, status: 'clean' })
      ++this.counterUniqueId
    },

    addChildReactive() {
      function addReactively(arr, newChild) { arr.push(newChild) }
      this.addChild(addReactively)
    },

    addChildNonReactive() {
      function addNonReactively(arr, newChild) { arr[arr.length] = newChild }
      this.addChild(addNonReactively)
    },

    changeBearStatus() {
      const { name, status } = this.bearSelected
      const newStatus = status === 'clean' ? 'dirty' : 'clean'

      searchDeep(this.treeData)

      function searchDeep(bearr) {
        bearr.forEach(bear => {
          if(bear.name === name) return bear.status = newStatus
          if(bear.children) searchDeep(bear.children)
        })
      }
    },

    checkIfGenerationExists () {
      const { children } = this.bearSelected
      if(!children) this.$set(this.bearSelected, 'children', [])
    },

    selectBear(bearSelected) { this.bearSelected = bearSelected },

    triggerRender() { ++this.treeKey }
  },
}
</script>

<template>
<div class="EffectsOfNonReactiveSubObjects">
  <div class="TreeContainer">
    <TreeVisualizer :key="treeKey" :bearSelected=bearSelected :treeData="treeData" @bear-selected="selectBear" />
  </div>

  <BearControls>
    <button class="button" @click="addChildReactive">add reactive child</button>
    <button class="button" @click="addChildNonReactive">add non-reactive child</button>
    <button class="button" @click="changeBearStatus">change bear status</button>
    <button class="button" @click="triggerRender">trigger render</button>
  </BearControls>
</div>
</template>

<style lang="scss">
// https://codepen.io/Pestov/pen/BLpgm

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

    .button + .button { margin-top: 2rem; }
  }

  .bearSelected { filter: drop-shadow(0 0 0.75rem green); }

  ul {
    padding-top: 20px; position: relative;

    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
  }

  li {
    float: left; text-align: center;
    list-style-type: none;
    position: relative;
    padding: 20px 5px 0 5px;

    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
  }

  // We will use ::before and ::after to draw the connectors
  li::before, li::after{
    content: '';
    position: absolute; top: 0; right: 50%;
    border-top: 1px solid #ccc;
    width: 50%; height: 20px;
  }
  li::after{
    right: auto; left: 50%;
    border-left: 1px solid #ccc;
  }

  // We need to remove left-right connectors from elements without any siblings
  li:only-child::after, li:only-child::before {
  display: none;
  }

  // Remove space from the top of single children
  li:only-child{ padding-top: 0;}

  // Remove left connector from first child and right connector from last child
  li:first-child::before, li:last-child::after{
    border: 0 none;
  }
  // Adding back the vertical connector to the last nodes
  li:last-child::before{
    border-right: 1px solid #ccc;
    border-radius: 0 5px 0 0;
  }
  li:first-child::after{
    border-radius: 5px 0 0 0;
  }

  // Time to add downward connectors from parents
  ul ul::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    border-left: 1px solid #ccc;
    width: 0;
    height: 26px;
  }

  li .leafContainer {
    mix-blend-mode: multiply;
    opacity: 0.8;
    display: inline-block;
    transition: all 0.5s;

    &.clean { content:url('../assets/bear_head.png') }
    &.dirty { content:url('../assets/bear_head-washing.png') }
  }

  // Time for some hover effects
  // We will apply the hover effect the the lineage of the element also
  li a:hover, li a:hover+ul li a {
    background: #c8e4f8; color: #000; border: 1px solid #94a0b4;
  }

  // Connector styles on hover
  li a:hover+ul li::after,
  li a:hover+ul li::before,
  li a:hover+ul::before,
  li a:hover+ul ul::before{
    border-color:  #94a0b4;
  }
}
</style>