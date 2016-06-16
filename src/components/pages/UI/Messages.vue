<template>
  <div class="notifications-box">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Styles</h1>
          <div class="block styles-box">

            <message :title="'Normal'" :container="'.styles-box'" :direction="'down'" :message="'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></message>

            <message :title="'Primary'" :container="'.styles-box'" :type="'primary'" :direction="'right'" :message="'Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></message>

            <message :title="'Info'" :container="'.styles-box'" :type="'info'" :direction="'right'" :message="'Info lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></message>

            <message :title="'Success'" :container="'.styles-box'" :type="'success'" :direction="'left'" :message="'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></message>

            <message :title="'Warning'" :container="'.styles-box'" :type="'warning'" :direction="'left'" :message="'Warning lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></message>

            <message :title="'Danger'" :container="'.styles-box'" :type="'danger'" :direction="'down'" :message="'Danger lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></message>

          </div>
        </article>
      </div>

      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Buttons</h1>
          <div class="block">
            <button class="button" @click="openMessageWithType('')">Normal</button>
            <button class="button is-primary" @click="openMessageWithType('primary')">Primary</button>
            <button class="button is-info" @click="openMessageWithType('info')">Info</button>
            <button class="button is-success" @click="openMessageWithType('success')">Success</button>
            <button class="button is-warning" @click="openMessageWithType('warning')">Warning</button>
            <button class="button is-danger" @click="openMessageWithType('danger')">Danger</button>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Message from '../../ui/Message'

const MessageConstructor = Vue.extend(Message)

const openMessage = (propsData = {
  title: '',
  message: '',
  type: '',
  direction: '',
  duration: 1500,
  container: '.messages'
}) => {
  return new MessageConstructor({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  components: {
    Message
  },

  ready () {
    openMessage({
      message: 'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      type: 'success',
      duration: 0
    })
  },

  methods: {
    openMessageWithType (type) {
      openMessage({
        title: 'This is a title',
        message: 'This is the message.',
        type: type
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.button {
  margin: 5px 0 0;
}
</style>
