import { IToDo } from '../../../models/todo-item'

import styles from './style.module.scss'

interface IComponentProps{
  toDoItemProps: IToDo
  updateToDo: Function
  deleteToDo: Function
}

export const ToDoListItem = (props: IComponentProps) => {
  return (
    <li className={styles.wrapper}>
      <span>{props.toDoItemProps.text}</span>

      <div className={styles.buttons}>
        <button
          className={styles.btn_trash}
          onClick={() => props.deleteToDo(props.toDoItemProps)}
        ></button>

        <button
          className={props.toDoItemProps.isDone ? styles.btn_check : styles.btn_uncheck}
          onClick={() => props.updateToDo(props.toDoItemProps)}
        ></button>
      </div>
    </li >
  )
}