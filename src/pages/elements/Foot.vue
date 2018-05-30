<template>
  <div class="Foot">
    <div class="search" v-on:click="navpaneLogic = false; $router.push('/search')" v-if="logged">Search</div>
    <div class="account" v-on:click="navpaneLogic = false; $router.push('/account')" v-if="logged">Account</div>
    <div class="submit" v-on:click="navpaneLogic = false; $router.push('/submit')" v-if="logged">Submit</div>
    <div class="login" v-on:click="navpaneLogic = false; $router.push('/login')" v-if="!logged">Login</div>
    <div class="register" v-on:click="navpaneLogic = false; $router.push('/register')" v-if="!logged">Register</div>
  </div>
</template>

<script>
export default {
  name: 'Foot',
  props: ['logged', 'user'],
  data () {
    return {}
  }
}
</script>

<style scoped lang='less'>
@blue: #00a1ff;
@grey: #323d38;
@font: 'Roboto', sans-serif;
@titlefont: 'Timmana', sans-serif;

  .Foot {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 60px;
    text-align: center;
    background-image:url('../../assets/noise2.jpg');
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  h1 {
    font-family: @font;
    bottom: 0;
    z-index: 13;
    position: absolute;
    font-weight: 300;
    font-size: 1em;
    color: #fff;
    text-align: center;
    line-height: 1;
    right: 0;
    margin-bottom: 10px;
    margin-right: 12px;
    letter-spacing: 1px;
  }
  .search {
    grid-column: 1;
    width: 100%;
    font-size: 1.3em;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }

  .login {
    grid-column: 1;
    width: 100%;
    font-size: 1.3em;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .register {
    grid-column: 3;
    width: 100%;
    font-size: 1.3em;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .account{
    grid-column: 3;
    width: 100%;
    font-size: 1.3em;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .submit {
    grid-column: 2;
    width: 100%;
    font-size: 1.3em;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }

  @media only screen and (max-width:750px) {
  }
</style>
