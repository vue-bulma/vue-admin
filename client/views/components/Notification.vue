<template>
  <div class="notifications-box">
    <div class="tile is-ancestor">
      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h1 class="title">Styles</h1>
          <div class="block styles-box">

            <notification :title="'Normal'" :direction="'Down'" :message="'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></notification>

            <notification :title="'Primary'" :type="'primary'" :direction="'Right'" :message="'Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></notification>

            <notification :title="'Info'" :type="'info'" :direction="'Right'" :message="'Info lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></notification>

            <notification :title="'Success'" :type="'success'" :direction="'Left'" :message="'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></notification>

            <notification :title="'Warning'" :type="'warning'" :direction="'Left'" :message="'Warning lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></notification>

            <notification :title="'Danger'" :container="'.styles-box'" :type="'danger'" :direction="'Down'" :message="'Danger lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></notification>

          </div>
        </article>
      </div>

      <div class="tile is-parent is-6">
        <article class="tile is-child box">
          <h1 class="title">Buttons</h1>
          <div class="block">
            <button class="button" @click="openNotificationWithType('')">Normal</button>
            <button class="button is-primary" @click="openNotificationWithType('primary')">Primary</button>
            <button class="button is-info" @click="openNotificationWithType('info')">Info</button>
            <button class="button is-success" @click="openNotificationWithType('success')">Success</button>
            <button class="button is-warning" @click="openNotificationWithType('warning')">Warning</button>
            <button class="button is-danger" @click="openNotificationWithType('danger')">Danger</button>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Notification from 'vue-bulma-notification'

const NotificationComponent = Vue.extend(Notification)

const openNotification = (propsData = {
  title: '',
  message: '',
  type: '',
  direction: '',
  duration: 4500,
  container: '.notifications'
}) => {
  return new NotificationComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  components: {
    Notification
  },

  mounted () {
    openNotification({
      message: 'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      type: 'success',
      duration: 0
    })
  },

  methods: {
    openNotificationWithType (type) {
      openNotification({
        title: 'This is a title',
        message: 'This is the message.',
        type: type
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.styles-box .notification {
  margin-bottom: 20px;
}

.button {
  margin: 5px 0 0;
}
</style>
