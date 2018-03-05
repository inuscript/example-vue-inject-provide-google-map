<template>
  <div>
    <h1>Map</h1>
    <map-loader :center="markers[0]">
      <template slot-scope="scopeProps">
        <child-marker 
          v-for="(marker,i) in markers"
          :key="i"
          :position="marker" 
          :google="scopeProps.google"
          :map="scopeProps.map"
        />
      </template>
    </map-loader>
  </div>
</template>

<script>
import MapLoader from "./MapLoader.vue"
import ChildMarker from "./ChildMarker.vue"

export default {
  props: {
    markers: Array
  },
  components: {
    MapLoader,
    ChildMarker
  }
}
</script>

