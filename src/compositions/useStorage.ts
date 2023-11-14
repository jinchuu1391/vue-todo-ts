import type { TodoItem } from "@/stores/todos"

export const useStorage = () => {
  const KEY = 'todo-list'

  const getTodosFromStorage = () => {
    return JSON.parse(localStorage.getItem(KEY) || '[]')
  }

  const saveTodos = (todos: TodoItem[]) => {
    localStorage.setItem(KEY, JSON.stringify(todos))
  }

  const removeAllTodos = () => {
    localStorage.setItem(KEY, JSON.stringify([]))
  }

  return {
    getTodosFromStorage,
    saveTodos,
    removeAllTodos
  }  
}