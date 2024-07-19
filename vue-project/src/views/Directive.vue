<template>
    <div class="divStyle">
        <button @click="vif = !vif">v-if</button>
        <h2 v-if="vif">v-if는 요소가 사라지거나 대체됨(조건부 렌더링)</h2>
        <h2 v-else>v-else</h2>
    </div>
    <div class="divStyle">
        <button @click="vshow = !vshow">v-show</button>
        <h2 v-show="vshow">v-show는 항상 렌더링 되고 DOM에 남아있음.</h2>
        <h4>일반적으로 v-if는 전환 비용이 더 높고, v-show는 초기 렌더링 비용이 더 높습니다.</h4>
    <h4>따라서 매우 자주 전환해야 하는 경우 v-show를, 실행 중에 조건이 변경되지 않는 경우 v-if를 사용하는 것이 좋습니다.</h4>
    </div>
    <div class="divStyle">
        <h3>v-for</h3>
        <li v-for="item of vfor">
            {{ item.message }}
        </li>
        <h3>v-for index</h3>
        <li v-for="(item, index) in vfor">
            {{ index }} - {{ item.message }}
        </li>
        <h3>v-for object(Map)</h3>
        <li v-for="(value, key) in myObj">
            {{ key }} : {{ value }}
        </li>
        <h3>v-for component (with :key)</h3>
        <Counter
            v-for="(item, index) in items"
            :item="item"
            :index="index"
            :key="item.id" 
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Counter from './Counter.vue';

let vif = ref(true);
let vshow = ref(true);
const vfor = ref([{ message: '월'}, { message: '화'}, { message: '수'}])
const myObj = ref({
    name: '홍길동',
    age: 25,
    addr: '서울',
    birth: '1996-01-01'
})

</script>

<style>
    .divStyle {
        margin: 6px;
        padding: 6px;
        border: 1px solid green
    }
</style>