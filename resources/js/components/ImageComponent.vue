<script setup>
defineProps({
    images: Object,
})
</script>
<template>
    <div v-for="(image, index) in images" :key="index">
        <img :src="'/storage/images/' + image" alt="">
    </div>
</template>
<style>

</style>
