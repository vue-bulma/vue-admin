<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Classic</h1>
          <a class="button is-primary is-large modal-button" @click="openModalBasic">Launch example modal</a>
        </article>
      </div>

      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Image</h1>
          <a class="button is-primary is-large modal-button" @click="openModalImage">Launch image modal</a>
        </article>
      </div>

      <div class="tile is-parent is-4">
        <article class="tile is-child box">
          <h1 class="title">Card</h1>
          <a class="button is-primary is-large modal-button" @click="openModalCard()">Launch modal card</a>
        </article>
      </div>
    </div>
    <modal :visible="showModal" @close="closeModalBasic"></modal>
  </div>
</template>

<script>
import Vue from 'vue'
import Modal from './modals/Modal'
import ImageModal from './modals/ImageModal'
import CardModal from './modals/CardModal'

const ImageModalComponent = Vue.extend(ImageModal)
const CardModalComponent = Vue.extend(CardModal)

const openImageModal = (propsData = {
  visible: true
}) => {
  return new ImageModalComponent({
    el: document.createElement('div'),
    propsData
  })
}

const openCardModal = (propsData = {
  visible: true
}) => {
  return new CardModalComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  components: {
    Modal
  },

  data () {
    return {
      showModal: true,
      cardModal: null,
      imageModal: null
    }
  },

  methods: {
    openModalBasic () {
      this.showModal = true
    },

    closeModalBasic () {
      this.showModal = false
    },

    openModalImage () {
      const imageModal = this.imageModal || (this.imageModal = openImageModal())
      imageModal.$children[0].active()
    },

    openModalCard () {
      const cardModal = this.cardModal || (this.cardModal = openCardModal({
        title: 'Modal title',
        url: this.$store.state.pkg.homepage
      }))
      cardModal.$children[0].active()
    }
  }
}
</script>

<style>
</style>
