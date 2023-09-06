import { useEffect, useState } from "react";
import { IToDo } from "../../models/todo-item";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../../store";

import styles from './style.module.scss'

export const ItemDescription = () => {
  const todoList = useSelector((state: RootState) => state.toDoList.todos)
  const { id } = useParams()
  const navigate = useNavigate()
  const [todo, setTodo] = useState<IToDo>();


  useEffect(() => {
    const searchTodo = todoList.find((todo) => String(todo.id) === id)

    if (searchTodo) {
      setTodo(searchTodo)
    } else {
      navigate('/404')
    }
  }, [todoList, id, navigate])

  return (
    <>
      <div className={styles.container}>
        <h2>{todo?.text}</h2>
      </div>
    </>
  )
};

