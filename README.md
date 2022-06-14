# TypeScript와 rest api를 이용해 만든 지금 뭐하지?

- [배포주소 바로가기](http://pager.kr/~c11st16/portfolio/do_now/)

<br>
<br>

## 🛠 기술 스택

### **📚 Frameworkes & Libraries**

- react.js@^18.1.0
- typescript@^4.6.4
- axios@^0.27.2
- node-sass@^7.0.1

### **🔧 Tools**

- webpack@^5.64.4

<br>
<br>

## 🧐 프로젝트 빌드 및 실행 방법

1. 상단 `Code` 버튼을 눌러 레포지토리를 클론 받습니다.

```
$ git clone https://github.com/ahnhuiwon/Doing-now.git
```

2. 패키지를 설치합니다.

```
$ npm install
```

3. 서버를 실행합니다.

```
$ npm start
```

## 🙆‍♀️ 구현

### 필수 구현 사항

- [] bored api에서 필요한 파라미터에 대한 input 구현 및 데이터 전달
- [] bored api에서 받아온 response 값을 카카오 번역 api를 통해 한글로 번역
- [] 결과 페이지에서 research 기능 구현

### 추가 구현 사항

- 로딩 컴포넌트 구현
  - api 통신시 사용자의 편의성을 위해 구현
- 각 카테고리 별로 이미지 다르게 출력
  - 결과 페이지에서 각 카테고리마다 이미지가 다르게 출력
- 자세히 보기 출력 / 미출력
  - bored api에서 받아온 response 값에 url이 있다면 자세히 보기 출력, 없다면 미출력

### 코드 리팩토링

- api 로직 custom hooks에서 분리
- type 추가 설정

<br>
<br>

## 📈 디렉토리 구조

```
.
├── README.md
├── config
├── package.json
├── public
│   ├── index.html
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
     ├── component
     ├── hooks
     ├── style
     ├── types
     └── view
```
