# To Do App
## 주요 사용 기술 스택
- react
- typescript

## 배포 링크
!! 요쳥을 보내던 서버가 닫혀서 기능이 제대로 수행되지 않음 !!

기능 작동은 아래 데모영상으로 확인해주세요
### [github-pages 배포 링크](https://dlwnstjrzz.github.io/wanted-pre-onboarding-frontend/)

## 프로젝트 실행 방법
node.js 버전 - v16.13.1

node.js 설치 후
이 저장소를 클론합니다.

```
git clone https://github.com/dlwnstjrzz/wanted-pre-onboarding-frontend.git
```

클론한 폴더로 이동하여 다음 명령을 실행합니다.
```
cd to-do-app
npm install
```

### 중요!!
.env 파일을 설정해줍니다.
```
REACT_APP_HOST = https://pre-onboarding-selection-task.shop
```

앱을 실행합니다.
```
npm run start
```
앱은 http://localhost:3000에서 실행됩니다.

## 동작 시현
### 회원가입/로그인


1. 로그인
- 로그인 여부에 따른 리다이렉트 처리

  - 회원가입이 정상적으로 완료되고 로그인까지 성공하면 응답받은 JWT토큰을 로컬스토리지에 저장합니다.
  - 로컬 스트로지에 토큰이 있는 상태로 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트 시킵니다.
  - 만약 토큰이 없는 상태로 /todo 페이지에 접속한다면 /signin 경로로 리다이렉트 시킵니다.

- 회원가입/로그인 유효성 검사
  - 이메일 조건: @포함
  - 비밀번호 조건: 8자리 이상
  - 유효성 검사를 통과하지 못한다면 안내 문구가 빨간색으로 출력됩니다.

https://user-images.githubusercontent.com/95525638/226836297-e4c23cd0-92a5-465b-b890-d95a4759904c.mov



### 할일 추가/삭제/수정/렌더

- 할 일을 추가하려면 화면 상단의 입력란에 내용을 입력한 후 추가 버튼을 누르면 됩니다.

할 일 수정

- 할 일을 수정하려면 수정하려는 할 일 옆에 위치한 수정 버튼을 클릭합니다. 수정 모드가 활성화되면 할 일 내용을 변경할 수 있습니다.


할 일 삭제

- 할 일을 삭제하려면 삭제하려는 할 일 옆에 위치한 삭제 버튼을 클릭합니다.


완료한 일 처리

- 완료한 일은 체크 박스를 클릭하여 처리할 수 있습니다.

https://user-images.githubusercontent.com/95525638/226837490-b1afebf5-dae3-4d2f-8cb4-927ac13ea747.mov


