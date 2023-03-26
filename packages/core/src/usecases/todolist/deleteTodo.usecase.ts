import type { ITodoService } from "src/domain";

export async function deleteTodo(todoService: ITodoService, todoId: number): Promise<void> {
    await todoService.deleteTodo(todoId)
}