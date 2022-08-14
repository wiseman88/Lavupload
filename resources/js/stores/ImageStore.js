import {defineStore} from "pinia";

export let useImageStore = defineStore('image', {
    state() {
        return {
            images: []
        }
    },
    getters: {
        getImages(state) {
            return state.images;
        }
    },
    actions: {
        fetchImages() {
            fetch('/images')
                .then((res) => res.json())
                .then((json) => (this.images = json))
                .catch((err) => error.value = err)
        }
    }
});
