import { useState } from 'react';
import styles from './style.module.scss'

interface IComponentProps{
  createNewToDo: Function
}

export const Form = (props: IComponentProps) => {
  const [inputText, setInputText] = useState<string>('')

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()

    if (inputText) {
      props.createNewToDo(inputText)
      setInputText('')
    }
  };

  return (
    <div className={styles.wrapper}>
      <form action="#" onSubmit={formSubmit}>
        <label>
          <input
            className={styles.input}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className={styles.button}></button>
        </label>
      </form>
    </div>
  )
}
