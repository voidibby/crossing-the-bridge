<template>
  <img :src="imgSrc()" :alt="alt" class="main_image" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    }
  },
  methods: {
    imgSrc() {
      try {
        return require(`/assets/images/${this.src}`)
      } catch (error) {
        return null
      }
    }
  }
}
</script>
