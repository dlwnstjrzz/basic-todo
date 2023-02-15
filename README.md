# To Do App
## 주요 사용 기술 스택
- react
- typescript

## 배포 링크
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

## 사용법
로그인

- 앱을 실행하면 로그인 화면이 나타납니다. 이미 계정이 있다면 로그인을 하고, 없다면 회원 가입을 하십시오.


할 일 추가

- 할 일을 추가하려면 화면 상단의 입력란에 내용을 입력한 후 추가 버튼을 누르면 됩니다.


할 일 수정

- 할 일을 수정하려면 수정하려는 할 일 옆에 위치한 수정 버튼을 클릭합니다. 수정 모드가 활성화되면 할 일 내용을 변경할 수 있습니다.


할 일 삭제

- 할 일을 삭제하려면 삭제하려는 할 일 옆에 위치한 삭제 버튼을 클릭합니다.


완료한 일 처리

- 완료한 일은 체크 박스를 클릭하여 처리할 수 있습니다.
