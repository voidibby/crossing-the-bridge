<template>
  <article>
    <div class="section-container">

    <div class="section-title">
<svg class="section-backarrow" @click="goToPrev()" viewBox="0 0 163 147" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M72.2189 0L0 73.5L72.2189 147H119.205L64.0979 91.8024H163V55.1976H64.0979L119.205 0H72.2189Z" fill="black"/>
</svg>
    </div>
    <div class="section-content project-content">
      <div class="project-title">
        <h3> {{ project.artist }} </h3>
        <h1> {{ project.title }} </h1>
        <h4 v-if="project.subtitle">{{ project.subtitle }}</h4>
      </div>
      <MainImage :src=project.main_image></MainImage>
      <div class="project-text">
        <nuxt-content :document="project" />
      </div>
    </div>
</div>
</article>
</template>

<style>
</style>

<script>
import MainImage from '../components/MainImage.vue'
export default {
  async asyncData({ $content, params }) {
    const project = await $content("/projects", params.slug).fetch();
    return {
      project
    };
  },
  components: { MainImage },
  layout: "project-description", methods: {
    goToPrev() {
      this.$router.go(-1);
    }
  }
}
</script>
