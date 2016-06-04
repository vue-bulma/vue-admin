<template>
  <nav class="level va-levelbar">
    <div class="level-left">
      <div class="level-item">
        <p class="subtitle is-5">
          <strong>{{ name }}</strong>
        </p>
      </div>
    </div>

    <div class="level-right">
      <breadcrumb :list="list"></breadcrumb>
    </div>
  </nav>
</template>

<script>
import Breadcrumb from './ui/Breadcrumb'

export default {
  vuex: {
    getters: {
      menu: state => state.menu
    }
  },

  components: {
    Breadcrumb
  },

  data () {
    return {
      defaultList: [
        {
          label: 'Home',
          link: ''
        }
      ]
    }
  },

  computed: {
    name () {
      return this.$route.name || this.$route.title
    },

    list () {
      console.log(this.defaultList.concat(this.find(this.name, this.menu)))
      return this.defaultList.concat(this.find(this.name, this.menu))
    }
  },

  methods: {
    find (name, list) {
      let temp = []
      for (let i = 0, l = list.length; i < l; ++i) {
        let item = list[i]
        if (item.label === name) {
          temp.push({
            label: item.label,
            link: item.link
          })
          break
        }

        if (item.subMenu) {
          if (item.link) {
            temp.push({
              lable: item.label,
              link: item.link
            })
          }
          let e = this.find(name, item.subMenu)
          if (e.length) {
            temp = temp.concat(e)
          } else if (item.link) {
            temp.pop()
          }
        }
      }

      return temp
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
