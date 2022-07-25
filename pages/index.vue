<template>
  <main>
    <h1>CROSSING THE BRIDGE —<br>INTERFACE CULTURES<br>AT ARS ELECTRONICA 2022</h1>
    <p v-for="intro of intro" class="intro-text">
      <nuxt-content :document="intro" />
    </p>

    <h2>PROJECTS</h2>

    <ul>
      <li v-for="project of exhibitionProjects" :key="project.slug">
        <NuxtLink :to="project.slug">
          <div class="projects-list">
            <h1> {{ project.title }} </h1>
            <h3> {{ project.artist }} </h3>
          </div>
        </NuxtLink>
      </li>
    </ul>

    <h2>OUTDOOR PROJECTS</h2>

    <ul>
      <li v-for="project of outdoorProjects" :key="project.slug">
        <NuxtLink :to="project.slug">
          <div class="projects-list">
            <h1> {{ project.title }} </h1>
            <h3> {{ project.artist }} </h3>
          </div>
        </NuxtLink>
      </li>
    </ul>

    <h2>PERFORMANCES</h2>

    <ul>
      <li v-for="project of performanceProjects" :key="project.slug">
        <NuxtLink :to="project.slug">
          <div class="projects-list">
            <h1> {{ project.title }} </h1>
            <h3> {{ project.artist }} </h3>
          </div>
        </NuxtLink>
      </li>
    </ul>

    <h2>WORKSHOP</h2>

    <ul>
      <li v-for="project of workshopProjects" :key="project.slug">
        <NuxtLink :to="project.slug">
          <div class="projects-list">
            <h1> {{ project.title }} </h1>
            <h3> {{ project.artist }} </h3>
          </div>
        </NuxtLink>
      </li>
    </ul>

    <h2>EXTRA-PROJECTS</h2>

    <ul>
      <li v-for="project of extraProjects" :key="project.slug">
        <NuxtLink :to="project.slug">
          <div class="projects-list">
            <h1> {{ project.title }} </h1>
            <h3> {{ project.artist }} </h3>
          </div>
        </NuxtLink>
      </li>
    </ul>

    <h2>CREDITS</h2>

    <p v-for="credits of credits">
      <nuxt-content :document="credits" />
    </p>

  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const intro = await $content("").where({ title: { $eq: 'intro' } }).fetch();
    const projects = await $content("/projects").fetch();
    const exhibitionProjects = await $content("/projects").where({ format: { $eq: 'exhibition-project' } }).fetch();
    const outdoorProjects = await $content("/projects").where({ format: { $eq: 'outdoor-project' } }).fetch();
    const performanceProjects = await $content("/projects").where({ format: { $eq: 'performance-project' } }).fetch();
    const workshopProjects = await $content("/projects").where({ format: { $eq: 'workshop-project' } }).fetch();
    const extraProjects = await $content("/projects").where({ format: { $eq: 'extra-project' } }).fetch();
    const credits = await $content("").where({ title: { $eq: 'credits' } }).fetch();

    return {
      intro,
      projects,
      exhibitionProjects,
      outdoorProjects,
      performanceProjects,
      workshopProjects,
      extraProjects,
      credits
    };
  }
}
</script>
