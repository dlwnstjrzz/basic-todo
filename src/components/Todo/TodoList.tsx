import { TodoType } from 'pages/Todo';
import React from 'react';
import styled from 'styled-components';

type TodoListProps = {
  children: any;
  todos: TodoType[];
};
function TodoList({ todos, children }: TodoListProps) {
  return (
    <TodoListContainer>
      {todos.map((todo, index) => {
        return React.cloneElement(children, {
          todo: todo,
          index: index,
          key: todo.id,
        });
      })}
    </TodoListContainer>
  );
}

const TodoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export default TodoList;
