import { Todo } from "../../../models/Todo.model";

export interface TodoInitialState {
    todos: Todo[]
}

export interface TodoAction {
    addNewTodo: () => void
}

export interface TodoStore extends TodoInitialState, TodoAction { }