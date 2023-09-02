// import './ToDoListItem.scss'
import styles from './ToDoListItem.module.scss'

export const ToDoListItem = () => {
  return (
    <li className={styles.wrapper}>
      <span>Первая задача</span>
      <div className={styles.buttons}>
        <button className={styles.btn_trash}></button>
        <button className={styles.btn_check}></button>
      </div>
    </li>
  )
}