interface Result {
  ok: boolean;
  data?: any;
  message?: string;
}

const methodFormat = (callbackfunc) => {
  const method = async (...args: any[]) => {
    let result: Result = {
      ok: false,
    };
    try {
      const data = await callbackfunc(...args);
      result = {
        ok: true,
        data,
      };
    } catch (error: unknown) {
      if (error instanceof Error) {
        result = {
          ok: false,
          message: error.message,
        };
      }
    }
    return result;
  };
  return method;
};

const validate = (value: string, formType: string) => {
  let isValidate = true;
  const passwordRegex = /^.{8,}$/;
  const emailRegex = /@/;

  const errorMessage = {
    password: '비밀번호는 8자리 이상입니다.',
    email: '이메일은 @을 반드시 포함해야합니다.',
  };
  // 위에서 회원가입 입력창들마다 정규표현식 사용해서 문자,숫자,자릿수를 제한.

  const validationResult = {};

  if (formType === 'password') {
    if (!passwordRegex.test(value)) {
      isValidate = false;
    }
  }

  if (formType === 'email') {
    if (!emailRegex.test(value)) {
      isValidate = false;
    }
  }

  if (!isValidate) {
    validationResult[formType] = errorMessage[formType];
  } else {
    validationResult[formType] = '';
  }
  return validationResult;
};

export { validate, methodFormat };
