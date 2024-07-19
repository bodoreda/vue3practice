<template>
    <h2>부모 컴포넌트</h2>
    <Child :message="msgFromParent" @send-message="emitCallBack"></Child>
</template>

<script setup>
import Child from './Child.vue'

const msgFromParent = "Hello! My Child!"

const emitCallBack = (args) => {
    console.log("수신한 메세지 : " + JSON.stringify(args))
}

</script>