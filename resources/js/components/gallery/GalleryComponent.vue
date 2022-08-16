<script setup>
import { useImageStore } from "/resources/js/stores/ImageStore.js";
import { onMounted } from "vue";

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
        <a href="" @click.prevent="openModal()">
            <img :src="'/storage/images/' + image" alt="">
        </a>
    </div>
</template>
<style>

</style>
