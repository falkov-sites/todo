import { Link } from 'react-router-dom';
import styles from './style.module.scss'

export const NotFound = () => {
   return (
    <div className={styles.container}>
       <span className={styles.img}>😥</span>
       <h1 className={styles.title}>Такая страница не найдена</h1>
      <Link className={styles.link} to='/'>go Home!</Link>
    </div>
   )
};