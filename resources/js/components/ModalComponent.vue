<script setup>
import { useImageStore } from "/resources/js/stores/ImageStore.js";

const imageStore = useImageStore();
</script>

<template>
    <div class="inset-0 fixed bg-slate-900/75 grid place-items-center">
        <div class="bg-white w-[800px] p-4 rounded-lg relative">
            <img v-if="imageStore.imageSrc" class="w-auto" :src="'/storage/images/' + imageStore.imageSrc" alt="">
            <button @click="imageStore.showModal = false" class="absolute -top-12 -right-12">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<style scoped>

</style>
