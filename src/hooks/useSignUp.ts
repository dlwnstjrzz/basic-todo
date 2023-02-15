import accountApi from 'api/accountApi';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validate } from 'utils/utils';

function useSignUp() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<{ email: string; password: string }>({
    email: '',
    password: '',
  });
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
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

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const inputData = { email, password };
    const response = await accountApi.signUp(inputData);
    if (response.ok) {
      setIsLoading(false);
      navigate('/signin');
    } else {
      setIsLoading(false);
    }
  };

  const isDisabled = !email || !password || !!errorMessage.email || !!errorMessage.password;

  return {
    errorMessage,
    handleInputChange,
    isDisabled,
    handleRegister,
    isLoading,
  };
}

export default useSignUp;
