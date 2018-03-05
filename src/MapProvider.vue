<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    google: Object,
    map: Object,
  },
  provide() {
    return {
      google: this.google,
      map: this.map
    }
  },
}
</script>

