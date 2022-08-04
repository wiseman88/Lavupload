<script setup>
// Import FilePond
import vueFilePond from 'vue-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'

// Import styles
import 'filepond/dist/filepond.min.css';
import { onMounted, ref } from 'vue';

// Create FilePond component
const FilePond = vueFilePond(FilePondPluginFileValidateType);

const pond = ref(null);

function filePondInitialized() {
    console.log('Filepond is ready');
    console.log('File is: ', pond.value);
}
</script>

<template>
    <div class="max-w-lg mx-auto mt-24">
        <h1 class="text-3xl font-bold text-center mb-6">
            Image uploader
        </h1>
        <file-pond
            name="image"
            ref="pond"
            label-idle="Click to choose image, or drag here..."
            server="/upload"
            accepted-file-types="image/*"
            @init="filePondInitialized"
        />
    </div>
</template>

<style scoped>

</style>
