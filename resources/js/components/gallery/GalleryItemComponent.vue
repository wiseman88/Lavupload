<script setup>
import { defineProps } from "vue";
import { useImageStore } from "/resources/js/stores/ImageStore.js";

const props = defineProps({
    image: String,
});

const imageStore = useImageStore();
</script>

<template>
    <a href="" @click.prevent="imageStore.showModalItem()">
        <img :src="'/storage/images/' + props.image" alt="">
    </a>
</template>

<style scoped>

</style>
