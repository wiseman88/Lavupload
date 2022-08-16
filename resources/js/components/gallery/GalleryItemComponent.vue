<script setup>
import { defineProps } from "vue";

const props = defineProps({
    image: String,
});
</script>

<template>
    <a href="" @click.prevent="openModal()">
        <img :src="'/storage/images/' + props.image" alt="">
    </a>
</template>

<style scoped>

</style>
