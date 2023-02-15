import { methodFormat } from 'utils/utils';

import client from './client';

const PATH = '/todos';

const todoApi = {
  getTodoList: methodFormat(async (access_token: string) => {
    const response = await client.get(`${PATH}`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
    return response.data;
  }),
  addTodo: methodFormat(async (inputData: unknown, access_token: string) => {
    const response = await client.post(`${PATH}`, inputData, {
      headers: { Authorization: `Bearer ${access_token}`, 'Content-Type': 'application/json' },
    });
    return response.data;
  }),
  deleteTodo: methodFormat(async (id: unknown, access_token: string) => {
    await client.delete(`${PATH}/${id}`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
  }),
  editTodo: methodFormat(async (inputData: unknown, id: number, access_token: string) => {
    const response = await client.put(`${PATH}/${id}`, inputData, {
      headers: { Authorization: `Bearer ${access_token}`, 'Content-Type': 'application/json' },
    });
    return response.data;
  }),
  toggleTodo: methodFormat(async (inputData: unknown, id: number, access_token: string) => {
    const response = await client.put(`${PATH}/${id}`, inputData, {
      headers: { Authorization: `Bearer ${access_token}`, 'Content-Type': 'application/json' },
    });
    return response.data;
  }),
};
export default todoApi;
