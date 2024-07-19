<template>
    <div class="divStyle">
        <h3>바인딩</h3>
        <input v-model="content">
        <p>내용 : {{content}}</p>
        <span>여러 줄 메세지:</span>
        <p style="white-space: pre-line;">{{ message }}</p>
        <textarea v-model="message" placeholder="여러 줄을 추가해보세요"></textarea>
    </div>
    <div class="divStyle">
        <h4>체크박스</h4>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{checked}}</label>
        <div>체크된 이름 : {{ checkedNames }}</div>
        <input type="checkbox" id="jack" value="잭" v-model="checkedNames">
        <label for="jack">잭</label>
        <input type="checkbox" id="john" value="존" v-model="checkedNames">
        <label for="john">존</label>
        <input type="checkbox" id="mike" value="마이크" v-model="checkedNames">
        <label for="mike">마이크</label>
    </div>
    <div class="divStyle">
        <h4>라디오</h4>
        <div>선택한 것 : {{ picked }}</div>

        <input type="radio" id="one" value="하나" v-model="picked">
        <label for="one">하나</label>
        <input type="radio" id="two" value="둘" v-model="picked">
        <label for="two">둘</label>
    </div>
    <div class="divStyle">
        <h4>셀렉트</h4>
        <div>선택됨 : {{ selected }}</div>
        <select v-model="selected" multiple>
            <option disabled value="">다음 중 하나를 선택하세요.</option>
            <option>가</option>
            <option>나</option>
            <option>다</option>
        </select>
        <h4>셀렉트 옵션(객체 선택)</h4>
        <select v-model="selected4">
            <option :value="{number: 123}">123</option>
            <option :value="{number: 456}">456</option>
            <option :value="{number: 789}">789</option>
        </select>
        <p>선택된 객체 : {{ selected4 }}</p>
    </div>
    <div class="divStyle">
        <h4>셀렉트 v-for</h4>
        <select v-model="selected2">
            <option v-for="option in options" :value="option.value">
                {{ option.text }}
            </option>
        </select>
        <div>선택됨 : {{ selected2}}</div>
    </div>
    <div class="divStyle">
        <h4>값 바인딩하기</h4>
        <input type="radio" v-model="picked2" value="선택됨">
        <p>라디오 : {{ picked2 }}</p>
        <input type="checkbox" v-model="toggle">
        <p>체크박스(토글) : {{ toggle }}</p>
        <select v-model="selected3">
            <option value="한글">한글</option>
        </select>
        <p>셀렉트박스 : {{ selected3 }}</p>
    </div>
    <div class="divStyle">
        <h4>값 바인딩하기2</h4>
        <input 
            type="checkbox" 
            v-model="toggle2"
            true-value="네"
            false-value="아니오"    
        >
        <p>체크박스(토글) : {{ toggle2 }}</p>
    </div>
    <div class="divStyle">
        <h4>라디오</h4>
        <input type="radio" v-model="radio1" :value="first">
        <input type="radio" v-model="radio1" :value="second">
        <p>라디오 선택 : {{ radio1 }}</p>
    </div>
    <div class="divStyle">
        <h4>사용자 입력의 공백(맨앞, 맨뒤)을 자동 트리밍</h4>
        <input v-model.trim="msg">
        <p>공백이 제거된 내용 : {{ msg }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const content = ref()
const message = ref()
const checked = ref(false)
const checkedNames = ref([])
const picked = ref()
const selected = ref('')
const selected2 = ref('1')
const options = ref([
    { text: '하나', value: '1'},
    { text: '둘', value: '2'},
    { text: '셋', value: '3'},
])
const picked2 = ref()
const toggle = ref(false)
const selected3 = ref()
const toggle2 = ref()
const radio1 = ref('')
const first = "첫번째"
const second = "두번째"
const selected4 = ref({ number: 123 })
const msg = ref()
const age = ref()

</script>

<style>
    .divStyle {
        border: 1px solid grey;
        padding: 10px;
    }
</style>