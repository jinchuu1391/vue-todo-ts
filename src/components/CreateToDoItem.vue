<template>
  <div class="container">
    <input placeholder="할 일을 입력하세요" type="text" v-model="newTodo"/>
    <button @click="onAddTodo">추가</button>
  </div>
</template>

<script setup lang="ts">
import { useTodosStore } from '@/stores/todos';
import { uniqueId } from 'lodash-es'

import {ref} from 'vue'

const newTodo = ref('')

const {addTodo} = useTodosStore()

const onAddTodo = () => {
 if(newTodo.value.length > 0){
  addTodo({id: uniqueId(), todo: newTodo.value, isDone: false})
  newTodo.value = ''
 }
}

</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  column-gap: 16px;
}
</style>