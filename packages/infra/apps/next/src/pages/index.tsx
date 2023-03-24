import { getTodos } from "@jessyv96/core"

export default function Home() {
  const todos = getTodos()
  console.log(todos)
  return (
    <>
      <main>
        {todos.map(todo => <p key={todo.id}>{todo.title}</p>)}
      </main>
    </>
  )
}
