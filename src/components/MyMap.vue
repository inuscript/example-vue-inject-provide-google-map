<template>
  <div>
    <h1>Map</h1>
    <map-loader>
      <template slot-scope="scopeProps">
        <map-parent 
          :google="scopeProps.google"
          :map="scopeProps.map"
          :markers="markers"
        />
      </template>
    </map-loader>
  </div>
</template>

<script>
import MapLoader from "./MapLoader.vue"
import MapParent from "./MapParent.vue"
export default {
  props: {
    markers: Array
  },
  components: {
    MapLoader,
    MapParent
  }
}
</script>

