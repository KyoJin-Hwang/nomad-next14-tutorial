# 😎 Nomad-Next14-Tutorial

`by Kyojin Hwang`

## 💻 Version

<img src="https://img.shields.io/badge/Node.js 20.12.1-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/NPM 10.5.0-346?style=for-the-badge&logo=npm&logoColor=red">
<img src="https://img.shields.io/badge/NPM 14.2.4-000000?style=for-the-badge&logo=next.js&logoColor=white">

## 📚Category

- [🎬 Routing](#-Routing)

---

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

---

## 🎬 Routing

### 1️⃣ Defining Routes

![alt text](image.png)
(사진출처 : [NextJS 공식홈페이지 Defining Routes](https://nextjs.org/docs/app/building-your-application/routing/defining-routes))

#### 🎈 Root Segment

- app 안의 폴더 로 들어가지않는 `page`와 `layout`은 root segment다.

#### 🎈 Page Create

- 폴더를 생성하고 page.tsx 파일을 생성하면 페이지가 된다.

![alt text](route-create.png)

---

### 2️⃣ Not Found Routes

#### 🎈 404 Error 페이지

- not-found.tsx를 만들어서 사용 할 수 있다.
- 일반 jsx 방식으로 만들면 된다.

  ![alt text](route-404.png)

#### 🎈 Client Components Error

![alt text](image-1.png)

- 클라이언트 컴포넌트에는 맨상단에 `"use client"` 기입해준다.

```javascript
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{" "}
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
```

---

### 3️⃣ SSR vs CSR

- `React`
  - client side rendering
  - 브라우저가 rendering 작업을 한다.
  - create-react-app 을 사용하여 app을 생성하면 client side application
- `Next`
  - server side rendering
  - 서버가 rendering 작업을 한다.

---

### 4️⃣ Hydration

#### 🎈 Link Component

- react 와 같이 페이지를 이동할 때 사용된다.
- reload 되지 않는다.

---

### 5️⃣ Layouts

#### 🎈 Layouts 의 rendering 방식

```javascript
<Layout>
  <AboutLayout>
    <AboutUs />
  </AboutLayout>
</Layout>

1. 레이아웃 랜더링
2. children으로 해당 URL에 맞는 컴포넌트가 들어간다.
```

---

### 6️⃣ Metadata

#### 🎈
