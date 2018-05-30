<template>
  <div class="main">
    <div class="logo" v-on:click="$router.push('/')"></div>
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 55px;
    background-color: #222;
    background-image:url('../../assets/noise2.jpg');
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    z-index: 5;
    box-shadow: 0px 1px 5px black;
  }

  .logo {
    background-image: url('../../assets/cougarVille_Gold.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    grid-column: 2;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
</style>
