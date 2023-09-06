import { NavLink } from 'react-router-dom'
import styles from './style.module.scss'

export const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? `${styles.link_active} ${styles.link}` : styles.link
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* <NavLink className={getActiveClass} to='/'>Home</NavLink>
        <NavLink className={getActiveClass} to='/todo'>ToDo</NavLink> */}
        <NavLink className={getActiveClass} to='/'>ToDo</NavLink>
        <NavLink className={getActiveClass} to='/todo'>List</NavLink>
      </div>
    </header>
  )
}