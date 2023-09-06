import { Link } from "react-router-dom";
import { IToDo } from "../../models/todo-item";
import styles from './style.module.scss'

interface IComponentProps {
  todo: IToDo
}

export const ListItem = (props: IComponentProps) => {
  return (
    <>
      <Link
        className={`${styles.link} ${props.todo.isDone ? styles.done : styles.notDone}`}
        to={`/list/${props.todo.id}`}
      >
        {props.todo.text}
      </Link>
    </>

  )
};