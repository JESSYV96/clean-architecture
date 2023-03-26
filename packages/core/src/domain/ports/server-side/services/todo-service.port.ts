import type { Todo, TodoRequest } from "../../../models/Todo.model";

export interface ITodoService {
    fetchTodos: () => Promise<Todo[]>
    createTodo: (newTodo: TodoRequest) => Promise<Todo>
    updateTodo: (todoId: number) => Promise<Todo>
    deleteTodo: (todoId: number) => Promise<void>
}