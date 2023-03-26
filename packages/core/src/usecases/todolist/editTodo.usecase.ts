import type { ITodoService, Todo } from "../../domain";

export async function editTodo(todoService: ITodoService, todoId: number): Promise<Todo> {
    return todoService.updateTodo(todoId)
}