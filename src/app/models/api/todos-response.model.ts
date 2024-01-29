import { IToDo } from "../todo.model"

export interface IToDosResponse {
  todos: IToDo[]
  total: number
  skip: number
  limit: number
}
