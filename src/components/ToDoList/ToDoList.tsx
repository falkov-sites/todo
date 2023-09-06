import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import { IToDo } from "../../models/todo-item"

import styles from './style.module.scss'

interface IComponentProps {
  todos: IToDo[],
  updateToDo: Function,
  deleteToDo: Function
}

export const ToDoList = (props: IComponentProps) => {
  const filterToDoList = (done: boolean) => {
    return props.todos
      .filter((item) => item.isDone === done)
      .map((item, index) => {
        return (
          <ToDoListItem
            toDoItemProps={item}
            key={index}
            updateToDo={props.updateToDo}
            deleteToDo={props.deleteToDo}
          />
        )
      })
  }

  return (
    <>
      <div className={styles.container}>
        <ul className={`${styles.list} ${styles.failed}`}>
          {filterToDoList(false)}
        </ul>

        <ul className={`${styles.list} ${styles.completed}`}>
          {filterToDoList(true)}
        </ul>
      </div>
    </>
  )
}
