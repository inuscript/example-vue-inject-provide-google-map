<template></template>
<script>
export default {
  inject: ["google", "map"],
  props: {
    position: Object
  },
  data(){
    return { marker: null}
  },
  mounted(){
    const { Marker } = this.google.maps
    console.log(this.map)
    this.marker = new Marker({
      position: this.position,
      map: this.map,
      title: "Child marker!"
    })
  }
}
</script>

