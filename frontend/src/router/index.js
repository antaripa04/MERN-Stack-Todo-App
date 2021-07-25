import { lazy } from "react";

const TodoList = lazy(() => import("../components/pages/TodoList"));
const EditTodo = lazy(() => import("../components/pages/EditTodo"));
const CreateTodo = lazy(() => import("../components/pages/CreateTodo"));
const SetEmail = lazy(() => import("../components/pages/SetEmail"));

const routelist = [
  {
    path: "/",
    Component: TodoList,
  },
  {
    path: "/edit/:id",
    Component: EditTodo,
  },
  {
    path: "/create/",
    Component: CreateTodo,
  },
  {
    path: "/set-email",
    Component: SetEmail,
  },
];

export default routelist;
