import type { ITodoService, Todo } from "src/domain";

export async function editTodo(todoService: ITodoService, todoId: number): Promise<Todo> {
    return todoService.updateTodo(todoId)
}