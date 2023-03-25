import { getTodos } from "@jessyv96/core"
import { todoListService } from "@jessyv96/adapters"
import { useQuery } from "react-query"

export default function Home() {
  const todoService = todoListService()
  const { isLoading, error, data: todos } = useQuery('getTodos', () => getTodos(todoService))

  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error

  return (
    <>
      <main>
        {todos && todos.map(todo => <p key={todo.id}>{todo.title}</p>)}
      </main>
    </>
  )
}
