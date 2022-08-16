<script setup>
import { useImageStore } from "/resources/js/stores/ImageStore.js";
import { onMounted } from "vue";
import GalleryItemComponent from "./GalleryItemComponent.vue";


const imageStore = useImageStore();
const emit = defineEmits(['showModal']);

onMounted(() => {
    imageStore.fetchImages();
});

function openModal(image) {
    emit('showModal');
}
</script>
<template>
    <div v-for="(image, index) in imageStore.getImages" :key="index">
        <GalleryItemComponent :image="image"/>
    </div>
</template>
<style>

</style>
