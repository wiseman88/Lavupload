import {defineStore} from "pinia";

export let useImageStore = defineStore('image', {
    state() {
        return {
            image: 'random image'
        }
    }
});
