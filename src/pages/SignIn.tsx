import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// 회원가입 폼 사용자 입력 데이터
function SignIn() {
  // react router dom 메서드로 원하는 url로 이동
  const navigate = useNavigate();

  const [errorMsg, setErrorMsg] = useState(' ');
  const [typingEmail, setTypingEmail] = useState('');
  const [typingPassword, setTypingPassword] = useState('');
  const [isFill, setIsFill] = useState(false);

  // 유저가 입력한 값을 상태로 저장
  const handleUserInput = (e, type) => {
    if (type === 'id') {
      setTypingEmail(e.target.value);
    } else if (type === 'password') {
      setTypingPassword(e.target.value);
    }
  };

  // 로그인 버튼 클릭시 firebase 로그인 인증 api 실행
  const handleLogin = async (event) => {
    try {
      alert('로그인에 성공하였습니다!');
      navigate('/');
    } catch (err) {
      setErrorMsg('입력하신 이메일 또는 비밀번호가 일치하지 않습니다.');
    }

    event.preventDefault();
  };

  // 유저가 이메일과 패스워드를 모두 입력해야 Login버튼이 활성화되게 함
  useEffect(() => {
    if (!(typingEmail === '' || typingPassword === '')) {
      setIsFill(true);
    } else {
      setIsFill(false);
    }
  }, [typingEmail, typingPassword]);

  return (
    <SignUpWrapper>
      <SignUpContainer>
        <Title>Login</Title>
        <SignUpForm>
          <UserInput onChange={(e) => handleUserInput(e, 'id')} placeholder="EMAIL" />
          <Line />
          <UserInput type="password" onChange={(e) => handleUserInput(e, 'password')} placeholder="PASSWORD" />
          <Line />
          <ErrorMessage>{errorMsg}</ErrorMessage>
          <SubmitBtn disabled={!isFill} onClick={handleLogin}>
            LOGIN
          </SubmitBtn>
        </SignUpForm>
        <Options>
          <Link>Forgot Password?</Link>
          <Link onClick={() => navigate('/signup')}>회원가입</Link>
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
  width: 230px;
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

export default SignIn;
