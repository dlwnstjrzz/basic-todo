import useSignUp from 'hooks/useSignUp';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function SignUp() {
  const navigate = useNavigate();
  const { errorMessage, handleInputChange, isDisabled, handleRegister, isLoading } = useSignUp();

  return (
    <SignUpWrapper>
      <SignUpContainer>
        <Title>Sign Up</Title>
        <SignUpForm onSubmit={handleRegister}>
          <UserInput
            data-testid="email-input"
            onChange={(event) => handleInputChange(event, 'email')}
            placeholder="EMAIL"
            disabled={isLoading}
          />
          {errorMessage.email && <ErrorMessage>{errorMessage.email}</ErrorMessage>}
          <Line />
          <UserInput
            data-testid="password-input"
            type="password"
            onChange={(event) => handleInputChange(event, 'password')}
            placeholder="PASSWORD"
            disabled={isLoading}
          />
          {errorMessage.password && <ErrorMessage>{errorMessage.password}</ErrorMessage>}
          <Line />
          <SubmitBtn type="submit" data-testid="signup-button" disabled={isDisabled || isLoading}>
            Register
          </SubmitBtn>
        </SignUpForm>
        <Options>
          <p>이미 계정이 있으신가요?</p>
          <Link onClick={() => navigate('/signin')}>로그인하러 가기</Link>
        </Options>
      </SignUpContainer>
    </SignUpWrapper>
  );
}

// 이하 생략

const ErrorMessage = styled.p`
  color: red;
  font-size: 9px;
  text-align: left;
`;
const Link = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: blue;
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
  background: ${({ disabled }) => (disabled ? '#BCBCBC' : '#26428f')};

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

const SignUpForm = styled.form`
  width: 70%;
  margin: 10px auto;
  text-align: center;
  font-style: normal;
  line-height: 19px;
`;

export default SignUp;
