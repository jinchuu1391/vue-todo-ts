<template>
  <div class="about">
    <h1>할 일 목록</h1>
    <div class="statusDiv">
      <span>{{ todos.length }} item left</span>
      <div class="flexDiv">
        <button>모두</button>
        <button>완료</button>
        <button>미완료</button>
      </div>
      <button>전체삭제</button>
    </div>
    <hr/>
    <ul>
      <li v-for="todoItem in todos" :key="todoItem.id">
       <input type="checkbox" :checked="todoItem.isDone" @change="() => toggleIsDone(todoItem.id)"/>
       {{ todoItem.todo }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useTodosStore } from '@/stores/todos';

const {todos, toggleIsDone} = useTodosStore()


</script>
<style scoped>

ul {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  list-style-type: none;
}

.flexDiv {
  display: flex;
  align-items: center;
  column-gap: 4px;
}

.statusDiv {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>
