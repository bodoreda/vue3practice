<template>
    <div style="border: 1px solid black; padding: 20px;">
        <p>자식 컴포넌트 영역</p>
        <p>부모 컴포넌트로부터 받은 메세지 : {{ message }}</p>
        <input v-model="newObj.msg">
        <button @click="sendMsg">메세지 전달</button>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const props = defineProps(['message'])
const emit = defineEmits(['send-message'])

const newObj = reactive({
    msg: '',
    name: 'child',
    age: 20,
    addr: 'seoul'
})

const sendMsg = () => {
    emit('send-message', newObj)
}



</script>

<style>

</style>