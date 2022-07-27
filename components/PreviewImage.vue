<template>
<div class="preview-image-container" >
    <img :src="imgSrc()" :alt="alt" class="preview_image" />
</div>
</template>

<style>
.preview_image {
    position: relative;
    width: 100%;
    left: 50%;
    transform: translate(-50%, 0%);
}

.preview-image-container {
    position: relative;
    padding: 2px 10px 2px 10px;
    overflow: hidden;
    background: var(--main);
}
</style>

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
