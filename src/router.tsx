import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/404/404";
import { ViewListPage } from "./pages/ViewListPage/ViewListPage";
import { ToDoListPage } from "./pages/ToDoListPage/ToDoListPage";
import { ItemDescription } from "./pages/ItemDescriptionPage/ItemDescriptionPage";
// import { IToDo } from "./models/todo-item";

// тестовые данные
// const todos: IToDo[] = [
//   { id: 0, text: 'сходить в магазин', isDone: false },
//   { id: 1, text: 'приготовить завтрак', isDone: true },
//   { id: 2, text: 'приготовить обед', isDone: false },
//   { id: 3, text: 'приготовить ужин', isDone: true },
//   { id: 4, text: 'поесть на ночь', isDone: false },
//   { id: 5, text: 'посмотреть ютуб', isDone: true },
//   { id: 6, text: 'погулять с собакой', isDone: true },
//   { id: 7, text: 'погулять с кошкой', isDone: false },
//   { id: 8, text: 'встретить жену', isDone: true },
// ]

export const router = createBrowserRouter([{
  path: '/', element: <Layout />, errorElement: <NotFound />,
  children: [
    // { path: '/', element: <ViewListPage todos={todos} /> },
    // { path: '/todo', element: <ToDoListPage /> },
    // { path: '/list/:id', element: <ItemDescription todos={todos} /> },
    { path: '/', element: <ViewListPage /> },
    { path: '/todo', element: <ToDoListPage /> },
    { path: '/list/:id', element: <ItemDescription /> },
  ]
},
{ path: '*', element: <NotFound /> }
], { basename: '/app/' })
// теперь все url будут относительно basename, (напр. "http://localhost:3000/app/todo" )
// basename нужно, если приложение будет, например, на поддомене