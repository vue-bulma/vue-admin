<template>
  <div class="content has-text-centered top5p">
    <h1 class="is-title is-bold">CMS管理系统</h1>

    <div class="columns is-vcentered">
      <div class="column is-6 is-offset-3">
        <div class="box">
          <form v-on:submit.prevent="login">
            <label class="label">账号</label>
            <p class="control">
              <input v-model="data.body.username" class="input" type="text" placeholder="账号">
            </p>
            <label class="label">密码</label>
            <p class="control">
              <input v-model="data.body.password" class="input" type="password" placeholder="密码">
            </p>

            <p class="control">
              <label class="checkbox">
                <input type="checkbox" v-model="data.rememberMe">
                记住密码
              </label>
            </p>

            <hr>
            <p class="control">
              <button type="submit" class="button is-primary">登录</button>
            </p>
          </form>
          <div v-show="error" style="color:red; word-wrap:break-word;">{{ error }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        data: {
          body: {
            username: null,
            password: null
          },
          rememberMe: false
        },
        error: null
      }
    },
    mounted () {
      if (this.$auth.redirect()) {
        console.log('Redirect from: ' + this.$auth.redirect().from.name)
      }
      // Can set query parameter here for auth redirect or just do it silently in login redirect.
    },
    methods: {
      ...mapActions([
        'appendMenu'
      ]),
      login () {
        var redirect = this.$auth.redirect()
        this.$auth.login({
          headers: {
            'Content-Type': 'application/json'
          },
          data: this.data.body,
          rememberMe: this.data.rememberMe,
          redirect: {name: redirect ? redirect.from.name : 'Home'},
          success (res) {
            if (Object.is(res.data.code, 0)) {
              /* res 暂不包含角色和菜单
               {
                 "code": 0,
                 "msg": "sucess",
                 "result": {
                   "token": "b07d6ce803f6410a89b572ead3328e1a"
                 }
               }
               */
              this.$auth.token(null, res.data.result.token)
              // window.localStorage.setItem('default-auth-token', res.data.result.token)

              // 模拟后端返回菜单
              let menu = [{
                name: ' 系统设置',
                meta: {
                  icon: 'fa-gear',
                  expanded: false
                },
                children: [{
                  name: 'Chartist',
                  path: '/charts/chartist', // 注意路径
                  component: 'charts/Chartist',
                  meta: {
                    icon: 'fa-bug',
                    link: 'charts/Chartist.vue'
                  }
                },
                {
                  name: 'Chartjs',
                  path: '/charts/chartjs',
                  component: 'charts/Chartjs',
                  meta: {
                    icon: ' fa-book',
                    link: 'charts/Chartjs.vue'
                  }
                }]
              },
              {
                name: ' 报表',
                meta: {
                  icon: 'fa-gear',
                  expanded: false
                },
                children: [{
                  name: 'Chartist',
                  path: '/charts/chartist', // 注意路径
                  component: 'charts/Chartist',
                  meta: {
                    icon: 'fa-bug',
                    link: 'charts/Chartist.vue'
                  }
                },
                {
                  name: 'Chartjs',
                  path: '/charts/chartjs',
                  component: 'charts/Chartjs',
                  meta: {
                    icon: ' fa-book',
                    link: 'charts/Chartjs.vue'
                  }
                }]
              }
              ]
              this.$auth.user({'menu': menu})
              let localmenu = window.sessionStorage.getItem('menu')
              if (!localmenu) {
                window.sessionStorage.setItem('menu', JSON.stringify(this.$auth.user().menu))
                this.appendMenu(this.$auth.user().menu)
              }
            } else {
              // window.localStorage.setItem('default-auth-token', '')
              this.$auth.token(null)
              this.$auth.logout({
                redirect: {name: 'Login'}
              })
              this.error = res.data.msg
            }
          },
          error (err) {
            if (err.response) {
              // The request was made, but the server responded with a status code
              // that falls out of the range of 2xx
              this.error = err.response.data
            } else {
              // Something happened in setting up the request that triggered an Error
              this.error = err.message
            }
            console.log(err.config)
          }
        })
      }
    }
    // filters: {
    //   json: function (value) {
    //     console.log(value)
    //     return value
    //   }
    // }

  }
</script>

<style lang="scss" scoped>
  .top5p {
    margin-top: 5%;
  }

  .is-title {
    text-transform: capitalize;
  }
</style>
