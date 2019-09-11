<script>
import TreeVisualizer from './TreeVisualizer'

export default {
  components: { TreeVisualizer },

  props: { parentData: Array },

  data: _ => ({
    timeout: 1000,

    treeData: [
      {
        name: 'a',
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
          { name: 'd', status: 'clean' },
        ],
      },
    ],
  }),

  mounted() {
    this.updateDom(_ => {})

    this.updateDom(_ => {
      this.treeData[0].status = 'clean'
    })

    this.updateDom(_ => {
      this.treeData[0].status = 'clean'
    })

    this.updateDom(_ => {
      this.treeData[0].children[1].status = 'dirty'
    })

    this.updateDom(_ => {
      this.treeData[0].children[1].status = 'clean'
    })

    this.updateDom(_ => {
      this.treeData[0].children[1].children[0].status = 'dirty'
    })

    this.updateDom(_ => {
      this.treeData[0].children[1].children[0].status = 'clean'
    })

    this.updateDom(_ => {
      this.treeData[0].children[1].children[0].children[1].status = 'dirty'
    })

    this.updateDom(_ => {
      this.treeData[0].children[1].children[0].children[1].status = 'clean'
    })

    this.updateDom(_ => {
      this.treeData[0].children[1].children[0].children[1].children[0].status = 'dirty'
    })

    this.updateDom(_ => {
      this.treeData[0].children[1].children[0].children[1].children[0].status = 'clean'
    })
  },

  methods: {
    updateDom(func) {
      setTimeout(func, this.timeout)
      this.timeout += 2000
    },

    switchBearStatus({ name, status }) {
      const newStatus = status === 'clean' ? 'dirty' : 'clean'

      searchDeep(this.treeData)

      function searchDeep(bearr) {
        bearr.forEach(bear => {
          if(bear.name === name) return bear.status = newStatus
          if(bear.children) searchDeep(bear.children)
        })
      }
    },
  },
}
</script>

<template>
<div class="Visual04RenderTree">
  <TreeVisualizer :treeData="treeData" @switch-bear-status="switchBearStatus" />
</div>
</template>

<style lang="scss">
// https://codepen.io/Pestov/pen/BLpgm

.Visual04RenderTree {
  min-height: 50vh;
  display: flex;
  justify-content: center;

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