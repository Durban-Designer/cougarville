<template >
  <div class="main">
    <div class="barView" v-if="barView">
      <p class=""></p>
      <p class=""></p>
      <p class=""></p>
      <button v-on:click="barView=false">BACK</button>
    </div>
    <div class="searchView" v-else>
      <h3>Search</h3>
      <input type="text" class="search" placeholder="search by location">
      <select class="searchFilter">
        <option value="hotspots">Hotspots</option>
        <option value="bars">Bars</option>
        <option value="restaurants">Restaurants</option>
      </select>
      <button type="submit" class="searchButton" v-on:click="search">SEARCH</button>
      <div class="barList" v-for="bar in bars" v-bind:key="bar.id">
        <h5 v-on:click="viewBar(bar)" class="">{{bar.name}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'search',
  data () {
    return {
      barView: false,
      searchBox: '',
      bars: []
    }
  },
  methods: {
    populateBars () {
      let vue = this
      axios.get('', {headers: { 'Authorization': 'JWT ' + vue.user.token }})
        .then(function (response) {
          vue.bars = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    clearBars () {
      this.bars = []
    },
    search () {
      let vue = this
      if (vue.searchBox === '') {
        vue.clearBars()
        vue.populateBars()
      } else {
        axios.get('' + vue.searchBox, {headers: { 'Authorization': 'JWT ' + vue.user.token }})
          .then(function (response) {
            vue.clearBars()
            vue.bars = response.data
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
}
</script>
<style scoped lang="less">
  .main {
    width: 100%;
    height: 100%;
    background-color: #888;
  }

  .searchView {
    padding-top: 80px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(14, 40px);
    width: 90%;
    height: 100%;
    margin-left: 5%;
  }

  .barView {
    margin-top: 140px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(9, 45px);
  }

  h3 {
    font-size: 3em;
    text-align: center;
    width: 100%;
    color: #ffe128;
    text-shadow: 0px 2px 5px black;
    grid-column-start: 1;
    grid-column-end: 7;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  .search {
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 4;
    grid-row-end: 5;
    height: 30px;
  }

  .searchFilter {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 6;
    height: 30px;
    border: 1px solid #000;
    border-radius: 0;

  }

  .searchButton {
    grid-column-start: 5;
    grid-column-end: 7;
    grid-row-start: 4;
    grid-row-end: 5;
    height: 30px;
    border: none;
    background-image:url('../assets/noise2.jpg');
    color: #ffe128;
    border: 1px solid #ffe128;
    box-shadow: 0px 2px 5px black;
  }

  .barList {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 5;
    grid-row-end: 9;
  }

  .barView {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 9;
  }

  .search {
    border: 1px solid #000000;
  }

  .go {
    border: 1px solid black;
    border-radius: 1em;
    display:grid;
    grid-template-rows:repeat(12, 50px);
    grid-template-columns:repeat(12, 50px);
    width: 100%;
    background-Color: grey
  }

  input {
    grid-column-start: 2;
    grid-column-end: 7;
    width: 100%;
    height: 70%;
    border-width: 7px;
  }

  h2 {
     color: black;
     font-size: 10px;
     grid-column-start: 2;
     grid-column-end: 4;
  }

  h1 {
     color: black;
     font-size: 10px;
     grid-row-start:0;
     grid-row-end:0;
     grid-column-start: 0;
     grid-column-end:0
  }
</style>
