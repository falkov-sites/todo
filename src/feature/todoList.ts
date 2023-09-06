import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IToDo } from '../models/todo-item'
import { toast } from 'react-toastify';

export interface TodoState {
  todos: IToDo[]
}

const initialState: TodoState = {
  todos: [],
}

let toastMsg: string = ''

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    createAction: (state, action: PayloadAction<string>) => {
      const newToDo: IToDo = { id: state.todos.length, text: action.payload, isDone: false }
      state.todos = [...state.todos, newToDo]
    },

    updateAction: (state, action: PayloadAction<IToDo>) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone

          if (todo.isDone === true) { toastMsg = `выполнено: "${todo.text}"` }
          else { toastMsg = `в список для исполнения: "${todo.text}"` }
        }
        return todo
      })
      state.todos = newTodos
      toast.success(toastMsg)
    },

    deleteAction: (state, action: PayloadAction<IToDo>) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload.id)
      state.todos = newTodos
      toast.warning(`удалена задача: "${action.payload.text}"`)
    },
  },
})

export const { createAction, updateAction, deleteAction } = todoSlice.actions
export default todoSlice.reducer