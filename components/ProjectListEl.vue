<template>
    <NuxtLink class="project-list-element" :to="project.slug">
            <div class="project-list-title">
                <h1> {{ project.title }} </h1>
                <!--<h3 v-if="project.artist"> {{ project.artist }} </h3>-->
            </div>
            <PreviewImage :src=project.main_image></PreviewImage>
    </NuxtLink>
</template>

<script>
import PreviewImage from './PreviewImage.vue';
export default {
    props: [
        "project"
    ],
    components: { PreviewImage }
}
</script>