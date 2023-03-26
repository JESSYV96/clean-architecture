import type { ITodoService, Todo, TodoRequest } from "src/domain";

export async function addTodo(todoService: ITodoService, newTodo: TodoRequest): Promise<Todo> {
    return todoService.createTodo(newTodo)
}