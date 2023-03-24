import { Todo } from "../domain/models/Todo.model";
import { ITodoService } from "../domain/ports/services/todo-service.port";

export function getTodos(todoService?: ITodoService): Todo[] {
    return [
        {
            id: "1",
            title: "Faire la vaisselle",
            isDone: false
        },
        {
            id: "2",
            title: "Faire les courses",
            isDone: true
        }
    ]
}