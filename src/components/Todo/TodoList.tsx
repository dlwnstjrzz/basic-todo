import { TodoType } from 'pages/Todo';
import React from 'react';

type TodoListProps = {
  children: any;
  todos: TodoType[];
};
function TodoList({ todos, children }: TodoListProps) {
  return (
    <>
      {todos.map((todo, index) => {
        return React.cloneElement(children, {
          todo: todo,
          index: index,
          key: todo.id,
        });
      })}
    </>
  );
}

export default TodoList;
