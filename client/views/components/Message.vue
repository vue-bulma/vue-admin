<template>
  <div class="notifications-box">
    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h1 class="title">Styles</h1>
          <div class="block styles-box">

            <message :title="'Normal'" :direction="'down'" :message="'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></message>

            <message :title="'Primary'" :type="'primary'" :direction="'right'" :message="'Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></message>

            <message :title="'Info'" :type="'info'" :direction="'right'" :message="'Info lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></message>

            <message :title="'Success'" :type="'success'" :direction="'left'" :message="'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></message>

            <message :title="'Warning'" :type="'warning'" :direction="'left'" :message="'Warning lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></message>

            <message :title="'Danger'" :container="'.styles-box'" :type="'danger'" :direction="'down'" :message="'Danger lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></message>

          </div>
        </article>
      </div>

      <div class="tile is-parent is-6">
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
import Message from 'vue-bulma-message'

const MessageComponent = Vue.extend(Message)

const openMessage = (propsData = {
  title: '',
  message: '',
  type: '',
  direction: '',
  duration: 1500,
  container: '.messages'
}) => {
  return new MessageComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  components: {
    Message
  },

  mounted () {
    openMessage({
      message: 'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      type: 'success',
      duration: 0,
      showCloseButton: true
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
.styles-box .message-box {
  margin-bottom: 20px;
}

.button {
  margin: 5px 0 0;
}
</style>
