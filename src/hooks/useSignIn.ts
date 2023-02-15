import accountApi from 'api/accountApi';
import { ChangeEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { validate } from 'utils/utils';

type InputData = {
  email: string;
  password: string;
};

function useSignIn() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    inputType: 'email' | 'password',
  ) => {
    const { value } = event.target;
    const validationResult = validate(value, inputType);
    setErrorMessage((prevErrorMessage) => ({
      ...prevErrorMessage,
      [inputType]: validationResult[inputType],
    }));
    inputType === 'email' ? setEmail(value) : setPassword(value);
  };

  const saveToken = (token: string) => {
    localStorage.setItem('token', token);
  };

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputData: InputData = { email, password };
    const response = await accountApi.signIn(inputData);
    if (response.ok) {
      saveToken(response.data.access_token);
      navigate('/todo');
    } else {
      alert('아이디나 비밀번호가 일치하지 않습니다. 다시 확인해주세요!');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/todo');
    }
  }, [navigate]);

  const isDisabled = !email || !password || !!errorMessage.email || !!errorMessage.password;

  // 커스텀 훅에서 반환하는 값을 객체로 묶어서 반환
  return { errorMessage, handleInputChange, handleSignIn, isDisabled };
}

export default useSignIn;
