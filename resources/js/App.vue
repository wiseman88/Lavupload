<script setup>
// Import FilePond
import vueFilePond, { setOptions } from 'vue-filepond';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size'

// Import styles
import 'filepond/dist/filepond.min.css';
import { onMounted, ref } from 'vue';
import ImageComponent from './components/ImageComponent.vue';
import ModalComponent from "./components/ModalComponent.vue";

const token = document.querySelector('meta[name="csrf-token"]').content;
const images = ref(null);
let serverMessage = {};
let showModal = ref(false);

onMounted(() => {
    setOptions({
        server: {
            process: {
                url: './upload',
                onerror: (response) => {
                    serverMessage = JSON.parse(response);
                },
                headers: {
                    'X-CSRF-TOKEN': token
                }
            }
        },
        labelFileProcessingError: () => {
            return serverMessage.error;
        }
    });
})

// Create FilePond component
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginFileValidateSize);

const pond = ref(null);

function filePondInitialized() {
    console.log('Filepond is ready');
    console.log('File is: ', pond.value);
}

function handleProcessedFile(error, file) {
    if ( error ) {
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
            accepted-file-types="image/jpg, image/jpeg, image/png"
            max-file-size="1MB"
            :allow-multiple="true"
            @processfile="handleProcessedFile"
            @init="filePondInitialized"/>
    </div>
    <div class="mt-8">
        <h3 class="font-bold text-xl text-center">Image Gallery</h3>
        <div
            class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md-grid-cols-3 lg:grid-cols-5 gap-8 justify-evenly mt-4">
            <ImageComponent @showModal="showModal = true"/>
        </div>
        <ModalComponent v-show="showModal" @closeModal="showModal = false"/>
    </div>
</template>

<style scoped>
</style>
