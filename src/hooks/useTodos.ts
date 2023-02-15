import todoApi from 'api/todoApi';
import { TodoType } from 'pages/Todo';
import { useEffect, useState } from 'react';

function useTodos(access_token: string | null) {
  const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data } = await todoApi.getTodoList(access_token);
      setTodos(data);
    };
    if (access_token) {
      fetchTodos();
    }
  }, [access_token]);

  const addTodo = async (inputData: { todo: string }) => {
    const { data } = await todoApi.addTodo(inputData, access_token);
    setTodos((prevTodos) => [...prevTodos, { isCompleted: false, todo: data.todo, id: data.id }]);
  };

  const toggleTodo = async (id: number, index: number) => {
    const inputData = { todo: todos[index].todo, isCompleted: !todos[index].isCompleted };
    const { data } = await todoApi.toggleTodo(inputData, id, access_token);
    const newTodos = [...todos];
    newTodos[index].isCompleted = data.isCompleted;
    setTodos(newTodos);
  };

  const editTodo = async (id: number, index: number, modifyTodo: string) => {
    const inputData = { todo: modifyTodo, isCompleted: false };
    const { data } = await todoApi.editTodo(inputData, id, access_token);

    const newTodos = [...todos];
    newTodos[index].todo = data.todo;
    setTodos(newTodos);
  };

  const deleteTodo = async (id: number, index: number) => {
    await todoApi.deleteTodo(id, access_token);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    setTodos,
  };
}

export default useTodos;
