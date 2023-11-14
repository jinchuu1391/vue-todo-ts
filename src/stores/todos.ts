import { ref} from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@/compositions/useStorage'

export type TodoItem = {
  id: string
  todo: string
  isDone: boolean
}
export const useTodosStore = defineStore('todos', () => {
  const {saveTodos, removeAllTodos} = useStorage()
  const todos = ref<TodoItem[]>([])

  const addTodo = (todo: TodoItem) => {
    todos.value.push(todo)
    saveTodos(todos.value)
  }

  const removeTodo = (id: string) => {
    const newTodos = todos.value.filter((todoItem) => todoItem.id !== id )
    todos.value = newTodos
    saveTodos(newTodos)
  }

  const clearTodos = () => {
    todos.value = []
    removeAllTodos()
  }

  const toggleIsDone = (id: string) => {
    const targetItem = todos.value.find((item) => item.id === id)
    if(!targetItem){
      throw new Error('이미 해당 항목이 제거되었습니다')
    }
    targetItem.isDone = !targetItem.isDone
    saveTodos(todos.value)
  }

  return { todos, addTodo, removeTodo, clearTodos, toggleIsDone}
})
