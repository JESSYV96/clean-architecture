export type Todo = {
    id: string
    title: string
    isDone: boolean
}

export const getTodosfilteredByDone = (todoList: Todo[]): Todo[] => {
    return todoList.filter(todo => todo.isDone)
}