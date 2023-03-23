export type Todo = {
    id: string
    title: string
    isDone: boolean
    createdAt?: string
}

export const getTotalTodos = (todoList: Todo[]): number => {
    return todoList.length
}

export const getTodosDone = (todoList: Todo[]): Todo[] => {
    return todoList.filter(todo => todo.isDone)
}