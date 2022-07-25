<template>
<main>
  <p v-for="intro of intro">
    <nuxt-content :document="intro" />
  </p>
  
  <ul>
    <li v-for="article of projects" :key="article.slug">
      <NuxtLink :to="article.slug"> {{ article.title }}
      </NuxtLink>
    </li>
  </ul>
  
</main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const projects = await $content("/projects").sortBy('title').fetch();
    const intro = await $content("").where({ title: 'intro' }).fetch();
    return {
      projects,
      intro
    };
  },
  layout: "layout-test",
}
</script>
