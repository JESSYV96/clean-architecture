import { getTodos, editTodo, deleteTodo } from "@jessyv96/core"
import { todoListService } from "@jessyv96/adapters"
import { useMutation, useQuery } from "@tanstack/react-query"

export default function Home() {
  const todoService = todoListService()

  const { isLoading, error, data: todos } = useQuery({
    queryKey: ['todos', todoService],
    queryFn: async () => {
      const data = await getTodos(todoService)
      return data
    },
  })

  const editTodoMutation = useMutation({
    mutationFn: (todoId: number) => {
      return editTodo(todoService, todoId)
    },
  })

  const deleteTodoMutation = useMutation({
    mutationFn: (todoId: number) => {
      return deleteTodo(todoService, todoId)
    },
  })

  if (isLoading) return 'Loading...'
  if (error) return 'An error has occurred: ' + error

  return (
    <>
      <main>
        {todos && todos.map(todo => (
          <div key={todo.id}>{todo.title}
            <div>
              Fait : <input type="checkbox" name="isTodoDone" checked={todo.isDone} onChange={(e) => console.log('change isDone value', e.target.value)} />
            </div>
            <div>
              <button onClick={() => editTodoMutation.mutate(todo.id)}>Modifier</button> <button onClick={() => deleteTodoMutation.mutate(todo.id)}>Supprimer</button>
            </div>
          </div>
        ))}
      </main>
    </>
  )
}
