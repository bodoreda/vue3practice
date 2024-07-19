<template>
    <h3>이벤트</h3>
    <button @click="count++">1 추가</button>
    <p>숫자 값은 : {{ count }}</p>
    <br>
    <button @click="greet">환영하기</button>
    <button @click="say('잘가')">배웅하기</button>
    <br>
    <button @click="warn('아직 양식을 제출할 수 없습니다.', $event)">제출하기</button>
    <button @click="(event) => warn('아직 양식을 제출할 수 없습니다.', event)">제출하기2</button>
</template>

<script setup>
import { ref } from 'vue'

// variables
const count = ref(0)
const name = ref('Vue.js')

// function
const greet = (e) => {
    alert(`안녕 ${name.value}!`)
    if(e){
        alert(e.target.tagName)
    }
}

const say = (message) => {
    alert(message)
}

const warn = (message, event) => {
    // 네이티브 이벤트 객체에 접근 가능
    if(event){
        event.preventDefault();
    }
    alert(message)
}

</script>