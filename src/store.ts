import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
import { loadFromLocalStorage, saveToLicalStorage } from './helpers/storage'

export const store = configureStore({
  reducer: {
    toDoList: todoReducer
  },
  preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLicalStorage(store.getState()))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch