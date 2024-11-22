import useSWR from 'swr'
import { useMemo } from "react"

export type TodosResponse = Todo[]

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  return data as TodosResponse
}
const addTodo = async (title: string) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  })
  const data = await response.json()
  return data as Todo
}

const deleteTodo = async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'DELETE',
  })
  const data = await response.json()
  return data as Todo
}

const updateTodo = async (id: number, title: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  })
  const data = await response.json()
  return data as Todo
}

export function useTodos() {
  const result = useSWR<TodosResponse>(
    'todos',
    fetchTodos
  )

  return result
}
