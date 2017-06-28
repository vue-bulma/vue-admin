<template>
  <section class="hero is-bold app-navbar animated" :class="{ slideInDown: show, slideOutDown: !show }">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-hidden-tablet" @click="toggleSidebar(!sidebar.opened)">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
        <div class="nav-center">
          <a class="nav-item hero-brand" href="/">
            <img src="~assets/logo.png" :alt="pkginfo.description">
            <tooltip :label="'v' + pkginfo.version" placement="right" type="success" size="small" :no-animate="true" :always="true" :rounded="true">
              <div class="is-hidden-mobile">
                <span class="vue">Clinic</span><strong class="admin"> Dashboard</strong>
              </div>
            </tooltip>
          </a>
        </div>
        <div class="nav-right is-flex">
          <div v-on:crm="crm"></div>
          <router-link v-if="!$auth.check()" to="/login" class="nav-item">Login</router-link>
          <a v-if="$auth.check()" @click="logout" class="nav-item">CRM: {{crm}} - Logout</a>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
import Tooltip from 'vue-bulma-tooltip'
import { mapGetters, mapActions } from 'vuex'
const api = 'http://localhost:8091/logout'
export default {

  components: {
    Tooltip
  },

  mounted () {
    console.log(this.$store.state.user.crm)
    if (this.$store.state.user.crm !== '') {
      this.crm = this.$store.state.user.crm
    }
  },

  props: {
    show: Boolean
  },

  data () {
    return {
      crm: ''
    }
  },

  computed: mapGetters({
    pkginfo: 'pkg',
    sidebar: 'sidebar'
  }),

  methods: {
    ...mapActions([
      'toggleSidebar'
    ]),
    logout () {
      this.$auth.logout({
        redirect: 'Login',
        makeRequest: false,
        params: {},
        success: function () {
          window.localStorage.removeItem('login')
          this.$http({
            url: api,
            transformResponse: [(data) => {
              return JSON.parse(data.replace(/T00:00:00/g, ''))
            }],
            params:
            {
              id: this.$store.state.user.id
            }
          }).then((response) => {
            // console.log(response)
          }).catch((error) => {
            console.log(error)
          })
        },
        error: function () {}
      })
    }
  }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/variables';

.app-navbar {
  position: fixed;
  min-width: 100%;
  z-index: 1024;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

  .container {
    margin: auto 10px;
  }

  .nav-right {
    align-items: stretch;
    align-items: stretch;
    flex: 1;
    justify-content: flex-end;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
}

.hero-brand {
  .vue {
    margin-left: 10px;
    color: #36AC70;
  }
  .admin {
    color: #28374B;
  }
}
</style>
