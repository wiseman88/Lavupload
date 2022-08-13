<script setup>
import {useImageStore} from "../stores/ImageStore.js";

let image = useImageStore();
defineProps({
    images: Object,
});

const emit = defineEmits(['showModal']);

function openModal(image) {
    emit('showModal');
}
</script>
<template>
    <p>
        {{ image }}
    </p>
    <div v-for="(image, index) in images" :key="index">
        <a href="" @click.prevent="openModal()">
            <img :src="'/storage/images/' + image" alt="">
        </a>
    </div>
</template>
<style>

</style>
