<template>
  <div class="homeMain">
    <div class="barScreen" v-if="newBar">
      <input class="name" v-model="addBar.name" placeholder="name">
      <input class="address" v-model="addBar.address" placeholder="address">
      <input class="phone" v-model="addBar.phone" placeholder="phone">
      <div class="hours">
        <div class="monday">
          <div class="open"></div><div class="closed"></div>
        </div>
        <div class="tuesday">
          <div class="open"></div><div class="closed"></div>
        </div>
        <div class="wednesday">
          <div class="open"></div><div class="closed"></div>
        </div>
        <div class="thursday">
          <div class="open"></div><div class="closed"></div>
        </div>
        <div class="friday">
          <div class="open"></div><div class="closed"></div>
        </div>
        <div class="saturday">
          <div class="open"></div><div class="closed"></div>
        </div>
        <div class="sunday">
          <div class="open"></div><div class="closed"></div>
        </div>
      </div>
      <input class="tags" v-model="addBar.tags" placeholder="tags separated by ','">
      <div class="submit" v-on:click="submit()">Submit</div>
      <div class="cancel" v-on:click="newBar=false">Cancel</div>
    </div>
    <div class="mapScreen" v-else>
      <mapbox id="map" :access-token="mapboxToken" :map-options="mapOptions" @map-load="mapLoaded"></mapbox>
      <div v-for="bar in bars"  v-bind:key="bar.id">
        <div class="bar" v-on:click="barItemDisplay(bar)" v-bind:id="bar.id"/>
      </div>
      <div class="addBar" v-on:click="newBar=true">request to add bar</div>
    </div>

    <mapbox id="map" :access-token="mapboxToken" :map-options="mapOptions" @map-load="mapLoaded"></mapbox>
  </div>
</template>

<script>
import axios from 'axios'
import Mapbox from 'mapbox-gl-vue'
import mapboxgl from 'mapbox-gl'

export default {
  name: 'home',
  props: ['user'],
  components: {
    'mapbox': Mapbox
  },
  created () {
    let vue = this
    navigator.geolocation.getCurrentPosition(locationSuccess, locationFail)
    function locationSuccess (position) {
      vue.latitude = position.coords.latitude
      vue.longitude = position.coords.longitude
      vue.accuracy = position.coords.accuracy
      vue.coordinates = [vue.longitude, vue.latitude]
    }
    function locationFail () {
      alert('It seems we cant find you, please reload the page and try again.')
      this.locationError = true
    }
  },
  data () {
    return {
      originMarker: document.createElement('div'),
      barMarker: '',
      barItem: false,
      newBar: false,
      bars: [],
      activeBar: {
        name: '',
        address: '',
        coordinates: [0, 0],
        phone: ''
      },
      addBar: {
        name: '',
        address: '',
        phone: '',
        hours: {
        },
        tags: '',
        coordinates: [0, 0]
      },
      marker: document.createElement('div'),
      latitude: '',
      longitude: '',
      accuracy: '',
      coordinates: [0, 0],
      mapboxToken: 'pk.eyJ1IjoiZ3JhcGV0b2FzdCIsImEiOiJjajhkeHR5YzEwdXp4MnpwbWhqYzI4ejh0In0.JzUlf5asD6yOa5XvjUF5Ag',
      mapOptions: {
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [0, 0],
        zoom: 1
      }
    }
  },
  methods: {
    mapLoaded (map) {
      let vue = this
      vue.map = map
      vue.addOriginMarker()
      vue.map.jumpTo({
        center: [vue.longitude, vue.latitude],
        zoom: 14
      })
      vue.clearBars()
      vue.populateBars()
    },
    clearBars () {
      this.bars = []
    },
    populateBars () {
      let vue = this
      let i = 0
      axios.get('https://api.cougarville.net/bars/all')
        .then(function (response) {
          vue.bars = response.data
          console.log(vue.bars)
          for (i = 0; i < vue.bars.length; i++) {
            let barMarker = document.getElementById(vue.bars[i].id)
            new mapboxgl.Marker(barMarker)
              .setLngLat([vue.bars[i].coordinates.longitude, vue.bars[i].coordinates.latitude])
              .addTo(vue.map)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    addOriginMarker () {
      let vue = this
      new mapboxgl.Marker(vue.originMarker)
        .setLngLat(vue.coordinates)
        .addTo(vue.map)
    },
    submit () {
      let vue = this
      vue.geocode()
      vue.postBar()
    },
    geocode () {
      let vue = this
      axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + vue.addBar.address + '?geometries=geojson&access_token=' + vue.mapboxToken)
        .then(function (response) {
          vue.addBar.coordinates = response.data.features.geometry.coordinates
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    postBar () {
      let vue = this
      axios.post('https://api.cougarville.net/bars/', {
        name: vue.addBar.name,
        address: vue.addBar.address,
        phone: vue.addBar.phone,
        tags: vue.addBar.tags
      })
        .then(function () {
          console.log()
        })
        .catch(function (error) {
          console.log(error)
          vue.error = true
        })
    }
  }
}
</script>

<style lang="less">
  .homeMain {
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
    left: 0;
    bottom: 0;
    right: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(8, 120px);
  }

  .mapScreen {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(8, 120px);
  }

  .barScreen {
    grid-row-start: 3;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 4;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(8, 30px);
  }

  .banner {
    top: 0;
    width: 100%;
    height: 15%;
    background:rgba(0,0,0,.6);
    position: fixed;
    z-index: 7;
  }

  .cvpic {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-image: url("../assets/cougarVille.png");
    background-size: contain;
    -webkit-filter: drop-shadow(1px 2px 2px #fff);
    filter: drop-shadow(1px 2px 2px #fff);
    align-items: center;
  }

  #map {
    width: 100%;
    height: 100%;
    padding-top: none;
    grid-row-start: 2;
    grid-row-end: 6;
    z-index: 0;
    position: absolute;
    top:0;
    bottom:0;
  }

  .mapboxgl-marker {
    background-image: url('../assets/cougarVille_Marker.svg');
    background-size: cover;
    width: 50px;
    height: 134px;
    z-index: 4;
    cursor: pointer;
  }

  .mapboxgl-marker svg {
    display: none;
  }

  .addBar {
    grid-row: 6;
    grid-column: 2;
  }

  .name {
    grid-row: 1;
  }

  .address {
    grid-row: 2;
  }

  .phone {
    grid-row: 3;
  }

  .hours {
    grid-row: 4;
  }

  .tags {
    grid-row: 5;
  }

  .submit {
    grid-row: 6;
  }

  .cancel {
    grid-row: 7;
  }

  .wrapper {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(10px, auto);
  }
</style>
