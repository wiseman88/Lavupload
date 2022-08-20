<script setup>
import { useImageStore } from "/resources/js/stores/ImageStore.js";
import { onMounted } from "vue";
import GalleryItemComponent from "./GalleryItemComponent.vue";


const imageStore = useImageStore();

onMounted(() => {
    imageStore.fetchImages();
});
</script>
<template>
    <div v-for="(image, index) in imageStore.getImages" :key="index">
        <GalleryItemComponent :image="image" :index="index"/>
    </div>
</template>
<style>

</style>
