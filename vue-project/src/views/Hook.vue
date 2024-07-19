<template>
    <button id="count" @click="count++">{{ count }}</button>
</template>

<script setup>
import { ref, onMounted, onUpdated } from 'vue';

const count = ref(0)

onMounted(() => {
    console.log('onMounted')
})

onUpdated(() => {
    console.log(document.getElementById('count').textContent)
})
</script>

<style>

</style>