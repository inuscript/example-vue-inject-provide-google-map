<template></template>
<script>
export default {
  props: {
    google: Object,
    map: Object,
    position: Object
  },
  data(){
    return { marker: null }
  },
  mounted(){
    const { Marker } = this.google.maps
    this.marker = new Marker({
      position: this.position,
      map: this.map,
      title: "Child marker!"
    })
  }
}
</script>

