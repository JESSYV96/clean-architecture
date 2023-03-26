import type { ITodoService, TodoRequest, Todo } from "../../domain";

export async function addTodo(todoService: ITodoService, newTodo: TodoRequest): Promise<Todo> {
    return todoService.createTodo(newTodo)
}