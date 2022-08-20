<script setup>
import { defineProps } from "vue";
import { useImageStore } from "/resources/js/stores/ImageStore.js";

const props = defineProps({
    image: String,
    index: String,
});

const imageStore = useImageStore();
</script>

<template>
    <a href="" @click.prevent="imageStore.showModalItem(props.image)">
        <span>{{ props.index }}</span>
        <img :src="'/storage/images/' + props.image" alt="">
    </a>
</template>

<style scoped>

</style>
