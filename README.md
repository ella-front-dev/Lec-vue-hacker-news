# vue-hacker-news


## 프로젝트 소개
> 해당 글의 내용은 [인프런] Vue.js 완벽 가이드 : 실습과 리팩토링으로 배우는 실전 개념 강의를 만들어졌습니다.

Hacker News를 Vue 프레임워크로 클론한 프로젝트 입니다.

<br />

## 프로젝트 설치 및 실행

#### 설치
```
npm install
```

#### 개발모드 실행
```
npm run serve
```

#### 운영모드
```
npm run build
```  

<br />

## 폴더 구조 설명

```
├── README.md
├── babel.config.js : 바벨 설정
├── package.json : 프로젝트 정보 및 의존성 관리 문서
├── public : 처음 로드되는 기본 HTML
└── src
    ├── App.vue : 최상의 컨테이너 뷰
    ├── _etc : 프로젝트 구성에 필요한 파일 / 기록용 파일들 
    ├── api : api 함수들이 있는 폴더
    ├── assets : 기타 자원 폴더
    ├── components : 컴포넌트 폴더
    ├── main.js : 애플리케이션 진입점
    ├── mixins : 믹스인 폴더
    ├── routes : 라우터 폴더
    ├── store : 스토어 상태 관리 폴더 
    ├── utils : 유틸리티 함수 폴더
    ├── views : 라운터 페이지 폴더
    └── vue.config.js

```

<br />

## 브랜치 설명
  - master
  - develop : 개발 브랜치(기본)
  - utils/chart-lib : 차트라이브러리를 적용한 프로젝트로 구성
  - design/common : 일반적인 디자인 패턴 프로젝트로 구성
  - design/controlled : controlled 디자인 패턴 프로젝트로 구성
  - design/slot : 슬롯을 적용한 디자인 패턴 프로젝트로 구성
  - design/renderless : renderless 디자인 패턴 프로젝트로 구성

