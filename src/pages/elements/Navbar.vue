<template>
  <div class="main">
    <div class="logo" v-on:click="$router.push('/')">Logo</div>
    <div class="navbutton" v-on:click="navpaneLogic = !navpaneLogic"></div>
    <div class="navpane" v-if="navpaneLogic">
      <div class="search" v-on:click="navpaneLogic = false; $router.push('/search')" v-if="logged">Search</div>
      <div class="account" v-on:click="navpaneLogic = false; $router.push('/account')" v-if="logged">Account</div>
      <div class="submit" v-on:click="navpaneLogic = false; $router.push('/submit')" v-if="logged">Submit</div>
      <div class="login" v-on:click="navpaneLogic = false; $router.push('/login')" v-if="!logged">Login</div>
      <div class="register" v-on:click="navpaneLogic = false; $router.push('/register')" v-if="!logged">Register</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: ['logged'],
  data () {
    return {
      navpaneLogic: false
    }
  }
}
</script>

<style scoped lang="less">
  .main {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 120px;
    background-color: #222;
    opacity: .8;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 120px 400px;
    margin-bottom: 100px;
    z-index: 5;
  }

  .logo {
    grid-column-start: 1;
    grid-column-end: 3;
    width: 140px;
    height: 100px;
    background-color: #666;
    opacity: .6;
    line-height: 100px;
    font-size: 3em;
    padding-left: 20px;
    margin-left: 20px;
    margin-top: 10px;
  }

  .navbutton {
    width: 100px;
    background-image: url('../../assets/hamburger.svg');
    background-repeat: no-repeat;
    grid-column: 4;
    margin-left: 20px;
  }

  .navpane {
    width: 100%;
    height: 400px;
    grid-column-start: 2;
    grid-column-end: 5;
    grid-row: 2;
    display: grid;
    grid-template-rows: repeat(6, 1fr);
    background-color: #666;
    opacity: .6;
    border-radius: 10px;
    margin-top: 10px;
  }

  .search {
    grid-row: 1;
    width: 100%;
    font-size: 2em;
    color: #fff;
    text-align: center;
  }

  .forum {
    grid-row: 2;
    width: 100%;
    font-size: 2em;
    color: #fff;
    text-align: center;
  }

  .login {
    grid-row: 3;
    width: 100%;
    font-size: 2em;
    color: #fff;
    text-align: center;
  }
  .register {
    grid-row: 4;
    width: 100%;
    font-size: 2em;
    color: #fff;
    text-align: center;
  }
  .account{
    grid-row: 3;
    width: 100%;
    font-size: 2em;
    color: #fff;
    text-align: center;
  }
  .submit {
    grid-row: 4;
    width: 100%;
    font-size: 2em;
    color: #fff;
    text-align: center;
  }
</style>
