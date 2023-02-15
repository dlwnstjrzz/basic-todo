import { TodoType } from 'pages/Todo';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';

type TodoItemProps = {
  key: number;
  id: number;
  todo: TodoType;
  isCompleted: boolean;
  handleToggleComplete: (id: number, index: number) => void;
  handleSubmitEdit: (id: number, index: number) => void;
  handleCancelEdit: () => void;
  handleDeleteTodo: (id: number, index: number) => void;
  handleEditTodo: (index: number) => void;
  handleModifyTodo: (e) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, newTodo: string) => void;
  index: number;
  isEditMode: boolean;
  editIndex: number;
  modifyTodo: string;
};

function TodoItem({
  key,
  todo: { id, isCompleted, todo },
  index,
  handleToggleComplete,
  handleModifyTodo,
  isEditMode,
  editIndex,
  modifyTodo,
  handleSubmitEdit,
  handleCancelEdit,
  handleEditTodo,
  handleDeleteTodo,
}: TodoItemProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <TodoItemContainer key={key} isCompleted={isCompleted}>
      <TodoLabel>
        <TodoInput
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleToggleComplete(id, index)}
        />
        {todo}
      </TodoLabel>
      <div>
        {isEditMode && editIndex === index ? (
          <>
            <TodoModifyInput
              data-testid="modify-input"
              type="text"
              value={modifyTodo}
              onChange={handleModifyTodo}
              ref={inputRef}
            />
            <TodoSubmitButton
              data-testid="submit-button"
              onClick={() => handleSubmitEdit(id, index)}
            >
              완료
            </TodoSubmitButton>
            <TodoCancelButton data-testid="cancel-button" onClick={handleCancelEdit}>
              취소
            </TodoCancelButton>
          </>
        ) : (
          <>
            <TodoModifyButton data-testid="modify-button" onClick={() => handleEditTodo(index)}>
              수정
            </TodoModifyButton>
            <TodoDeleteButton
              data-testid="delete-button"
              onClick={() => handleDeleteTodo(id, index)}
            >
              삭제
            </TodoDeleteButton>
          </>
        )}
      </div>
    </TodoItemContainer>
  );
}
const TodoItemContainer = styled.li<{ isCompleted: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  font-size: 1.2rem;
  color: ${({ isCompleted }) => (isCompleted ? 'gray' : 'black')};
`;

const TodoLabel = styled.label`
  display: flex;
  align-items: center;
`;

const TodoInput = styled.input`
  margin-right: 10px;
`;

const TodoModifyButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  background-color: #ffc107;
  color: #fff;
  border: none;
  margin-right: 5px;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const TodoDeleteButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  background-color: #dc3545;
  color: #fff;
  border: none;
`;
const TodoModifyInput = styled.input`
  margin-right: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ffc107;
`;

const TodoSubmitButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  background-color: #0077cc;
  color: #fff;
  border: none;
`;

const TodoCancelButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  background-color: #ccc;
  color: #fff;
  border: none;
  margin-left: 5px;
`;
export default TodoItem;
