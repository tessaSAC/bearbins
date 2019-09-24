<script>
import TreeVisualizer from './TreeVisualizer'

export default {
  components: { TreeVisualizer },

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
      this.treeData[0].status = 'dirty'
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
      this.timeout += 700
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
  <TreeVisualizer :treeData="treeData" @bear-selected="switchBearStatus" />
</div>
</template>

<style lang="scss" scoped>
.Visual04RenderTree {
  min-height: 50vh;
  display: flex;
  justify-content: center;
}
</style>