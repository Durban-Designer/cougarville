<template>
  <div id="q-app">
    <div class="main">
    <navbar  :logged="loggedIn" :user="user"></navbar>
    <transition name="fade">
      <router-view v-on:login="login" v-on:logout="logOut" v-on:register="register" :logged="loggedIn" :user="user"/>
    </transition>
    <foot :logged="loggedIn" :user="user"></foot>
  </div>
</div>
</template>

<script>
import navbar from './pages/elements/Navbar'
import Foot from './pages/elements/Foot'
export default {
  name: 'App',
  components: {
    'navbar': navbar,
    'foot': Foot
  },
  created () {
    let vue = this
    vue.user.token = localStorage.getItem('cougarvilletoken')
    vue.user.id = localStorage.getItem('cougarvilleuserId')
    vue.user.name = localStorage.getItem('cougarvillename')
    vue.user.admin = localStorage.getItem('cougarvilleadmin')
    if (vue.user.token !== null) {
      vue.loggedIn = true
    }
  },
  data: function () {
    return {
      loggedIn: false,
      user: {
        id: '',
        token: '',
        name: '',
        admin: false
      }
    }
  },
  methods: {
    login: function (user) {
      let vue = this
      vue.user.token = user.token
      vue.user.id = user.id
      vue.user.admin = user.admin
      vue.loggedIn = true
      vue.$router.push('/characters')
    },
    logOut: function () {
      let vue = this
      vue.user.token = ''
      vue.user.id = ''
      vue.loggedIn = false
      localStorage.removeItem('cougarvilletoken')
      localStorage.removeItem('cougarvilleuserId')
      localStorage.removeItem('cougarvillename')
      localStorage.removeItem('cougarvilleadmin')
      vue.$router.push('/')
    },
    register: function (user) {
      let vue = this
      console.log(user)
      vue.user.token = user.token
      vue.user.id = user.id
      vue.user.name = user.name
      vue.user.admin = user.admin
      vue.$router.push('/characters')
    }
  }
}
</script>

<style scoped lang="less">
  .fade-enter-active, .fade-leave-active {
    transition: all .25s ease;
    transition: all .25s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
    transform: translateY(20px);
  }
</style>
