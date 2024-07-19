<template>
    <h3>Watch</h3>
    <p>데이터를 감시 - 데이터가 변할때마다 동작</p>
    <button @click="changeData">데이터 변경</button>
    <p>현재 데이터 : {{ data }}</p>
    <div><input v-model="prefix"></div>
    <ul>
        <li v-for="name in filteredNames" :key="name">{{ name }}</li>
    </ul>
</template>

<script setup>
import { ref, reactive, watch, computed, onMounted } from 'vue'

const data = ref('hello!')
const prefix = ref('')
const names = reactive(['Alice', 'Bob', 'Charlie'])

const filteredNames = computed(() => {
    names.filter((n) => n.toLowerCase().startsWith(prefix.value.toLowerCase()))
})

const changeData = () => {
    data.value = 'world!'
}

watch(data, (newVal, oldVal) => {
    console.log('변경된 데이터:', newVal, '이전 데이터:', oldVal)
    console.log(filteredNames)
})
</script>

<style>

</style>