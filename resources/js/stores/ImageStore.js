import {defineStore} from "pinia";

export let useImageStore = defineStore('image', {
    state() {
        return {
            imageData: []
        }
    },
    getters: {
        fetchImages(state) {
            fetch('/images')
                .then((res) => res.json())
                .then((json) => (this.imageData = json))
                .catch((err) => error.value = err)
        }
    }
});
