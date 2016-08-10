<template>
  <aside class="menu app-sidebar">
    <ul class="menu-list">
      <li v-for="item in menu">
        <a class="touchable" v-link="{ name: item.link }" @click="toggle(item, $event)" :aria-expanded="isExpanded(item) ? 'true' : 'false'">
          <span class="icon is-small" v-if="item.icon">
            <i :class="['fa', item.icon]"></i>
          </span>
          <span>{{ item.label }}</span>
          <span class="icon is-small is-angle" v-if="item.subMenu">
            <i class="fa fa-angle-down"></i>
          </span>
        </a>
        <ul v-show="isReady && item.expanded" :class="{ 'collapse': item.subMenu }" @click="autoClose" transition="menu-expand">
          <li v-for="subItem in item.subMenu">
            <a class="touchable" v-link="{ name: subItem.link }">{{ subItem.label }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {

  data () {
    return {
      menu: []
    }
  }

}
</script>
