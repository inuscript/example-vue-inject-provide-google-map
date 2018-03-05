<template>
  <div>
    <div id="map"></div>
    <template v-if="!!this.google && !!this.map">
      <map-provider
        :google="google"
        :map="map"
      >
        <slot/>
      </map-provider>
    </template>
  </div>
</template>

<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'
import MapProvider from './MapProvider'

export default {
  props:{
    mapConfig: Object,
    apiKey: String
  },
  components: {
    MapProvider
  },
  data(){
    return {
      google: null,
      map: null
    }
  },
  mounted () {
    GoogleMapsApiLoader({
      apiKey: this.apiKey
    }).then((google) => {
      this.google = google
      this.initializeMap()
    })
  },
  methods: {
    initializeMap (){
      const mapContainer = this.$el.querySelector('#map')
      const { Map } = this.google.maps
      this.map = new Map(mapContainer, this.mapConfig)
    }
  }
}
</script>

<style scoped>
#map {
  height: 100vh;
  width: 100%;
}
</style>
