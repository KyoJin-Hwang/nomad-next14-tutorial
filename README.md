# 😎 Nomad-Next14-Tutorial

`by Kyojin Hwang`

## 💻 Version

<img src="https://img.shields.io/badge/Node.js 20.12.1-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/NPM 10.5.0-346?style=for-the-badge&logo=npm&logoColor=red">
<img src="https://img.shields.io/badge/NPM 14.2.4-000000?style=for-the-badge&logo=next.js&logoColor=white">

## 📚Category

- [🎬 Routing](#-Routing)

### 💡 Install & Setting

### 1. 폴더생성

#### terminal 에서 폴더를 만들어준다.

```bash
mkdir [폴더명]
```

### 2. npm init -y 및 next 설치

```bash
// default값으로 설정된 package.json 생성
npm init -y

// next 설치 최신버전으로
npm install react@latest next@latest react-dom@latest
```

### 3. License 변경

```json
{
  "name": "nomad-next14-tutorial",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "next dev"
  },
  "keywords": [],
  "author": "",
  // 이 부분 변경
  "license": "MIT",
  "dependencies": {
    "next": "^14.2.4",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/node": "20.14.10",
    "@types/react": "18.3.3",
    "typescript": "5.5.3"
  }
}
```

- [📌 1. 폴더생성 ](#1.mkdir)

## 🎬 Routing

![alt text](image.png)
(사진출처 : [NextJS 공식홈페이지 Defining Routes](https://nextjs.org/docs/app/building-your-application/routing/defining-routes))

### 🎈 Root Segment

- app 안의 폴더 로 들어가지않는 `page`와 `layout`은 root segment다.

### 🎈 Page Create

![alt text](route-create.png)
