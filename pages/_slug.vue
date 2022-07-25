<template>
  <article>
    <h3> {{ project.artist }} </h3>
    <h1> {{ project.title }} </h1>
    <h4 v-if="project.subtitle">{{ project.subtitle }}</h4>
    <nuxt-content :document="project" />
    <MainImage :src=project.main_image></MainImage>
  </article>
</template>

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
  layout: "project-description"
}
</script>
