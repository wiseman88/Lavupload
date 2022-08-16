import { defineStore } from "pinia";

export let useImageStore = defineStore('image', {
    state() {
        return {
            images: [],
            showModal: false,
            imageSrc: null,
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
                .then((json) => ( this.images = json ))
                .catch((err) => error.value = err)
        },
        showModalItem(prop) {
            this.showModal = true;
            this.imageSrc = prop;
        }
    }
});
