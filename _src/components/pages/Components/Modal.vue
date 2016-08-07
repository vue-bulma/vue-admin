<template>
  <div>
    <modal></modal>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Classic</h1>
          <a class="button is-primary is-large modal-button" @click="openModalBasic">Launch example modal</a>
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Image</h1>
          <a class="button is-primary is-large modal-button" @click="openModalImage">Launch image modal</a>
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Card</h1>
          <a class="button is-primary is-large modal-button" @click="openModalCard()">Launch modal card</a>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Modal from './modals/Modal'
import ImageModal from './modals/ImageModal'
import { CardModal } from 'vue-bulma-modal'

const ModalComponent = Vue.extend(Modal)
const ImageModalComponent = Vue.extend(ImageModal)
const CardModalComponent = Vue.extend(CardModal)

const openModal = (propsData = {}) => {
  return new ModalComponent({
    el: document.createElement('div'),
    propsData
  })
}

const openImageModal = (propsData = {
}) => {
  return new ImageModalComponent({
    el: document.createElement('div'),
    propsData
  })
}

const img = require('assets/logo.svg')

const openCardModal = (propsData = {
}) => {
  var d = document.createElement('div')
  d.innerHTML = '<div class="content has-text-centered"><img src="' + img + '" alt="Vue Admin"></div>'
  return new CardModalComponent({
    el: d,
    propsData,
    methods: {
      ok () {
        window.alert("Thant's ok!")
        this.close()
      }
    }
  })
}

export default {
  components: {
    Modal
  },

  methods: {
    openModalBasic () {
      openModal()
    },

    openModalImage () {
      openImageModal()
    },

    openModalCard () {
      openCardModal({
        title: 'Modal title'
      })
      .open()
    }
  }
}
</script>

<style>
</style>
