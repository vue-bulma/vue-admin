<template>
  <div class="notifications-box">
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h1 class="title">Styles</h1>
          <div class="block">

            <notification :title="'Normal'" :direction="'down'" :message="'Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></notification>

            <notification :title="'Primary'" :type="'primary'" :direction="'right'" :message="'Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></notification>

            <notification :title="'Info'" :type="'info'" :direction="'right'" :message="'Info lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></notification>

            <notification :title="'Success'" :type="'success'" :direction="'left'" :message="'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></notification>

            <notification :title="'Warning'" :type="'warning'" :direction="'left'" :message="'Warning lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></notification>

            <notification :title="'Danger'" :type="'danger'" :direction="'down'" :message="'Danger lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit'" :duration="0"></notification>

          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Notification from '../../ui/Notification'

const NotificationConstructor = Vue.extend(Notification)

const openNotification = (propsData = { title: '', message: '', type: '', direction: '', duration: 4500 }, parent) => {
  console.log(arguments)
  let n = new NotificationConstructor({
    el: document.createElement('div'),
    propsData
  })
  n.$appendTo(parent || document.body)
}

export default {
  components: {
    Notification
  },

  ready () {
    openNotification({
      message: 'Success lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit',
      type: 'success',
      duration: 0
    }, this.$el)
  }

}
</script>

<style lang="scss">
.notifications-box > .notification {
  position: fixed;
  top: 40px;
  right: 0;
  margin: 20px;
  z-index: 133333;
}
</style>
