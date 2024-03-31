import { Counter } from '@/app/components/sections/home-page/counter'
import { useEffect, useState } from 'react'

export function HomePage() {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((res) => res.json())
      .then((res) => setTodos(res.todos))
  }, [])
  return (
    <section>
      <h1>Vite + React</h1>
      <Counter />
      {todos.length > 0 && <div>Todo List: {todos.length}</div>}
    </section>
  )
}
