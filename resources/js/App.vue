<script setup>
// Import FilePond
import vueFilePond, { setOptions } from 'vue-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'

// Import styles
import 'filepond/dist/filepond.min.css';
import { onMounted, ref } from 'vue';

const token = document.querySelector('meta[name="csrf-token"]').content;
const images = ref(null);

onMounted(() => {
    setOptions({
        server: {
            process: {
                url: './upload',
                headers: {
                    'X-CSRF-TOKEN': token
                }
            }
        }
    });

    fetch('/images')
        .then((res) => res.json())
        .then((json) => (images.value = json))
        .catch((err) => error.value = err)
})

// Create FilePond component
const FilePond = vueFilePond(FilePondPluginFileValidateType);

const pond = ref(null);

function filePondInitialized() {
    console.log('Filepond is ready');
    console.log('File is: ', pond.value);
}

function handleProcessedFile(error, file) {
    if (error) {
        console.log(error)
        return;
    }

    images.value.unshift(file.serverId);
}
</script>

<template>
    <div class="max-w-lg mx-auto mt-24">
        <h1 class="text-xl font-bold text-center mb-6">
            Image uploader
        </h1>
        <file-pond 
            name="image" 
            ref="pond" 
            label-idle="Click to choose image, or drag here..." 
            server="/upload"
            accepted-file-types="image/*"
            @processfile="handleProcessedFile" 
            @init="filePondInitialized" />
    </div>
    <div class="mt-8">
        <h3 class="font-bold text-xl text-center">Image Gallery</h3>
        <div class="container mx-auto grid grid-cols-5 gap-8 justify-evenly mt-4">
            <div v-for="(image, index) in images" :key="index">
                <img :src="'/storage/images/' + image" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
