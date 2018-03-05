<template>
  <div>
    <div id="map"></div>
    <template v-if="!!this.google && !!this.map">
      <slot :google="google" :map="map"/>
    </template>
  </div>
</template>

<script>
import GoogleMapsLoader from 'google-maps'
import MapParent from './MapParent'
import InfoItem from "./InfoItem"
import Vue from "vue"

const API_KEY = 'AIzaSyC9VdVBb15bb4-msBd_SqBv0SiofrAAKk0'
GoogleMapsLoader.KEY = API_KEY

export default {
  data(){
    return {
      google: null,
      map: null
    }
  },
  mounted () {
    GoogleMapsLoader.load((google) => {
      this.google = google
      this.initializeMap()
    })
  },
  methods: {
    initializeMap (){
      const mapContainer = this.$el.querySelector('#map')
      const { Map } = this.google.maps
      this.map = new Map(mapContainer, {
        zoom: 12
      })
    }
  }
}
</script>

<style scoped>
#map {
  height: 500px;
  width: 500px;
}
</style>
