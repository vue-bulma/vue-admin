
export default {

  props: {
    card: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    transition: {
      type: String,
      default: 'fade'
    }
  },

  compiled () {
    this.$nextTick(() => {
      this.$appendTo(document.body)
    })
  },

  methods: {
    active () {
      this.$el.classList.add('fadeIn')
      this.visible = true
    },

    deactive () {
      this.visible = false
    },

    close () {
      this.$destroy(true)
    },

    open () {
      this.active()
    }
  }

}
