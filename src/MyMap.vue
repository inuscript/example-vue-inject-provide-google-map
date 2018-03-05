<template>
  <div>
    <h1>Map</h1>
    <map-loader 
      :center="markers[0]"
      apiKey="AIzaSyCdsCZwgVbKBnvwqtPQ8Mqcv5P0lNzuxs8"
    >
      <template v-for="marker in markers">
        <child-maker :position="marker" />
      </template>
    </map-loader>
  </div>
</template>

<script>
import MapLoader from "./MapLoader.vue"
import ChildMaker from './ChildMaker'

export default {
  props: {
    markers: Array
  },
  components: {
    MapLoader,
    ChildMaker
  }
}
</script>

