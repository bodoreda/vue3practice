<template>
    <button @click="increment" id="counter">
        {{  state.count }}
    </button>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { nextTick } from 'vue';

const state = reactive({ count: 0 })
const count = ref(0)

const increment = async () => {
    state.count++
    
    console.log("DOM 업데이트 전 : " + document.getElementById('counter').textContent)
    await nextTick(() => {
        console.log("DOM 업데이트 후 : " + document.getElementById('counter').textContent)
    });

    // console.log("DOM 업데이트 전 : " + state.count)
    // await nextTick(() => {
    //     console.log("DOM 업데이트 후 : " + state.count)
    // });
}

</script>

<style>

</style>