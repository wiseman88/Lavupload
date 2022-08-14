<template>
    <div class="inset-0 fixed bg-slate-900/75 grid place-items-center">
        <div class="bg-white w-[800px] h-[500px] rounded-lg relative">
            <button @click="$emit('closeModal')" class="absolute top-4 right-4">
                <svg class="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "ModalComponent"
}
</script>

<style scoped>

</style>
