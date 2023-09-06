import { useSelector } from "react-redux";
import { ListItem } from "../../components/ListItem/ListItem";
import { IToDo } from "../../models/todo-item";
import styles from './style.module.scss'
import { RootState } from "../../store";

// interface IComponentProps {
//   todos: IToDo[]
// }

// export const ViewListPage = (props: IComponentProps) => {
export const ViewListPage = () => {
  const todoList = useSelector((state: RootState) => state.toDoList.todos)

  return (
    <>
      <div className={styles.container}>
        {
          todoList.map((todo: IToDo, index: number) => {
            return (
              <ul className={styles.list} key={index}>
                <li className={styles.item}>
                  <ListItem todo={todo} />
                </li>
              </ul>
            )
          })
        }
      </div>
    </>
  )
}
