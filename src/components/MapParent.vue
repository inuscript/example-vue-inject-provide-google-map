<template>
  <div>
    <div id="map"></div>
    <template v-if="!!map">
      <template v-for="marker in markers">
        <child-maker :position="marker" />
      </template>
    </template>
  </div>
</template>

<script>
import ChildMaker from './ChildMaker'

export default {
  props: {
    google: Object,
    map: Object,
    markers: Array
  },
  components: {
    ChildMaker
  },
  provide() {
    return {
      google: this.google,
      map: this.map
    }
  },
  mounted(){
    this.map.setCenter(this.markers[0])
  }
}
</script>

