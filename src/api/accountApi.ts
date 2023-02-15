import { methodFormat } from 'utils/utils';

import client from './client';

const PATH = '/auth';

type SignUpData = {
  email: string;
  password: string;
};

type SignInData = {
  email: string;
  password: string;
};

const accountApi = {
  signUp: methodFormat(async (inputData: SignUpData) => {
    await client.post<void>(`${PATH}/signup`, inputData, {
      headers: { 'Content-Type': 'application/json' },
    });
  }),
  signIn: methodFormat(async (inputData: SignInData) => {
    const response = await client.post(`${PATH}/signin`, inputData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response.data;
  }),
};

export default accountApi;
