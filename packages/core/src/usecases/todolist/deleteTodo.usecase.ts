import type { ITodoService } from "../../domain";

export async function deleteTodo(todoService: ITodoService, todoId: number): Promise<void> {
    await todoService.deleteTodo(todoId)
}