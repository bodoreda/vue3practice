<template>
    <button @click="mutateDeeply" :style="styleObj">
        {{ obj.nested.count  }}
    </button>
</template>

<script setup>
import { ref, reactive } from 'vue'

const obj = reactive({
    nested: { count : 0 },
    arr: ['foo', 'bar']
})

const mutateDeeply = () => {
    obj.nested.count++
    obj.arr.push('baz')
    console.log("arr : " + JSON.stringify(obj.arr))
}

const styleObj = ref({
    color: 'red',
    fontSize: '13px',
    backgroundColor: 'yellow'
})
</script>

<style>

</style>