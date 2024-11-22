import useSWR, { mutate } from 'swr'

type TodosResponse = Todo[]

export interface Todo {
  id: number
  title: string
  completed: boolean
  userId: number
}


const fetchTodos = async () => {
  const response = localStorage.getItem('todos')
  if (response) {
    return JSON.parse(response) as TodosResponse
  }
  const response2 = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=6')
  const data = await response2.json()
  localStorage.setItem('todos', JSON.stringify(data))
  return data as TodosResponse
}
const addTodo = async (title: string) => {
  if (!title || title.trim() === '') return
  let data = await fetchTodos()
  const lastId = data[data.length - 1].id
  data.push({ id: lastId + 1, title: title, completed: false } as Todo)
  localStorage.setItem('todos', JSON.stringify(data))
  mutate('todos', data)
  return data as TodosResponse
}

const deleteTodo = async (id: number) => {
  let data = await fetchTodos()
  data = data.filter((todo) => todo.id !== id)
  localStorage.setItem('todos', JSON.stringify(data))
  mutate('todos', data)
  return data as TodosResponse
}

const updateTodo = async (id: number, title: string, completed: boolean) => {
  let data = await fetchTodos()
  data = data.map((todo) => {
    if (todo.id === id) {
      return { ...todo, todo: title, completed }
    }
    return todo
  })
  localStorage.setItem('todos', JSON.stringify(data))
  mutate('todos', data)
  return data as TodosResponse
}

function useTodos() {
  const result = useSWR<TodosResponse>(
    'todos',
    fetchTodos
  )

  return result
}

export { useTodos, addTodo, deleteTodo, updateTodo }
