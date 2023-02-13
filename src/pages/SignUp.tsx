import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { validate } from 'utils/utils';

function SignUp() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: '',
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);

  // 로그인과 마찬가지로 회원가입 api 실행
  const handleRegister = async () => {
    // try {
    //   setErrorMsg(' ');
    //   // 데이터베이스에 회원가입시 작성한 내용을 저장
    //   const setUser = await db
    //     .collection('users')
    //     .doc(userId)
    //     .set({ displayName: registerName, uid: userId, friends: [], visitMsg: [], visitUsers: [] });
    //   setRegisterEmail('');
    //   setRegisterPassword('');
    //   alert('회원가입이 완료되었습니다!');
    //   navigate('/login');
    // } catch (err) {
    //   switch (err.code) {
    //     case 'auth/weak-password':
    //       setErrorMsg('비밀번호는 6자리 이상이어야 합니다');
    //       break;
    //     case 'auth/invalid-email':
    //       setErrorMsg('잘못된 이메일 주소입니다');
    //       break;
    //     case 'auth/email-already-in-use':
    //       setErrorMsg('이미 가입되어 있는 계정입니다');
    //       break;
    //   }
    // }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, inputType: 'email' | 'password') => {
    const { value } = event.target;
    const validationResult = validate(value, inputType);
    setErrorMessage((prevErrorMessage) => ({ ...prevErrorMessage, [inputType]: validationResult[inputType] }));
  };
  useEffect(() => {
    if (email !== '' && password !== '') {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [email, password]);
  return (
    <SignUpWrapper>
      <SignUpContainer>
        <Title>Sign Up</Title>
        <SignUpForm>
          <UserInput
            data-testid="email-input"
            onChange={(event) => handleInputChange(event, 'email')}
            placeholder="EMAIL"
          />
          <ErrorMessage>{errorMessage.email}</ErrorMessage>
          <Line />
          <UserInput
            data-testid="password-input"
            type="password"
            onChange={(event) => handleInputChange(event, 'password')}
            placeholder="PASSWORD"
          />
          <ErrorMessage>{errorMessage.password}</ErrorMessage>
          <Line />
          <SubmitBtn disabled={!isFormFilled} onClick={handleRegister}>
            Register
          </SubmitBtn>
        </SignUpForm>
        <Options>
          <Link>이미 계정이 있으신가요?</Link>
          <Link onClick={() => navigate('/login')}>로그인</Link>
        </Options>
      </SignUpContainer>
    </SignUpWrapper>
  );
}
const ErrorMessage = styled.p`
  color: red;
  font-size: 9px;
  text-align: left;
`;
const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
const Options = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;
  font-size: 9px;
`;
const Line = styled.div`
  width: 243px;
  height: 1px;
  background-color: black;
  margin-bottom: 15px;
  margin-top: 5px;
`;

const UserInput = styled.input`
  border: none;
  width: 100%;
  outline: none;
  font-size: 12px;
`;

const Title = styled.div`
  width: 100%;
  background-color: white;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
  padding: 8px 0px;
  margin-bottom: 10px;
`;

const SubmitBtn = styled.button`
  margin-top: 8px;
  margin-bottom: 5px;
  padding: 7px;
  width: 100%;
  text-transform: uppercase;
  outline: 0;
  background: ${({ value }) => (value ? '#26428f' : '#BCBCBC')};

  border: 0;
  border-radius: 10px;
  color: #ffffff;
  -webkit-transition: all 0.3 ease;
  transition: all 0.1s ease-out;
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 0.03em;
`;
const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;
const SignUpContainer = styled.div.attrs({ className: 'SignUp' })`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 300px;
  background-color: white;
  font-family: 'Pretended';
`;

const SignUpForm = styled.div`
  width: 70%;
  margin: 10px auto;
  text-align: center;
  font-style: normal;
  line-height: 19px;
`;

export default SignUp;
