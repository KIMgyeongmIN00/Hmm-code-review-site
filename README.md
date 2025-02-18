<div align="center">
  <img src="https://github.com/user-attachments/assets/f5c679b0-49d7-4a62-9762-e745bc6f4b85" alt="HMM Logo" />
</div>

## <img width="24px" src="https://github.com/user-attachments/assets/9804ceee-d162-4f0e-b2cb-d5b1e32430f0" alt="HMM Logo" /> 흐음 프로젝트 소개

"흐음..."은 개발자가 다른 사람의 코드를 처음 볼 때 자연스럽게 나오는 첫 말에서 시작된 이름입니다. <br/>
개발자들이 **서로의 코드**를 **공유**하고 **리뷰**하며 **피드백**을 주고받을 수 있는 온라인 플랫폼입니다.

<br/>

## ⚙ 주요 기능

- 코드 공유 및 리뷰: Markdown 기반의 에디터를 통해 코드와 설명을 쉽게 작성하고 공유할 수 있습니다.
- 사용자 경험 향상: SPA(Single Page Application) 구조를 활용하여 빠르고 매끄러운 페이지 전환을 제공합니다.
- 사용자 경험 향상: 구글 계정을 통한 소셜 로그인으로 간편하고 안전한 인증을 지원합니다.
- 사용자 데이터 관리: BaaS 서비스인 Supabase를 활용하여 사용자 인증부터 게시글, 댓글, 좋아요까지 실시간으로 관리합니다.

<br/>

## 🕶️ 기술 스택

#### **Deploy** <br/>

&emsp; <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>

#### **Frontend** <br/>

&emsp; <img src="https://img.shields.io/badge/React_18.3.1-087ea4?style=for-the-badge&logo=React&logoColor=white" alt="React"/> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white" alt="TypeScript"/> <img src="https://img.shields.io/badge/Yarn_1.22.22-514C87.svg?style=for-the-badge&logo=Yarn&logoColor=white" alt="Yarn"/> <img src="https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" alt="styled-component"/>

<br/>
<br/>

## 👩‍👩‍👧‍👧 프로젝트 멤버 소개

<table>
  <tbody>
    <tr>
      <td width="300px" align="center">
        <a href="https://github.com/KIMgyeongmIN00">
        <img src="https://github.com/KIMgyeongmIN00.png" width="80" alt="KIMgyeongmIN00"/>
        <br />
        <sub><b>KIMgyeongmIN00</b></sub>
        </a>
        <br />
      </td>
      <td width="300px" align="center">
        <a href="https://github.com/SuimKim">
        <img src="https://github.com/SuimKim.png" width="80" alt="SuimKim"/>
        <br />
        <sub><b>SuimKim</b></sub>
        </a>
        <br />
      </td>
      <td width="300px" align="center">
        <a href="https://github.com/dev-woohyeok">
        <img src="https://github.com/dev-woohyeok.png" width="80" alt="dev-woohyeok"/>
        <br />
        <sub><b>dev-woohyeok</b></sub>
        </a>
        <br />
      </td>
    </tr>
    <tr>
      <td align="center">
        게시글 뷰어 및 편집 페이지 구현 <br/>
      </td>
      <td align="center">
        사용자의 전역 상태 관리 코드 구현 <br/>
        마이 페이지 구현 <br/>
      </td>
      <td align="center">
        public / private 라우팅 경로 설계 <br/>
        공통 컴포넌트 및 마이 페이지 구현 <br/>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://github.com/llddang">
        <img src="https://github.com/llddang.png" width="80" alt="llddang"/>
        <br />
        <sub><b>llddang</b></sub>
        </a>
        <br />
      </td>
      <td align="center">
        <a href="https://github.com/LSJ0706">
        <img src="https://github.com/LSJ0706.png" width="80" alt="LSJ0706"/>
        <br />
        <sub><b>LSJ0706</b></sub>
        </a>
        <br />
      </td>
      <td align="center">
        <a href="https://github.com/choichangyeon">
        <img src="https://github.com/choichangyeon.png" width="80" alt="choichangyeon"/>
        <br />
        <sub><b>choichangyeon</b></sub>
        </a>
        <br />
      </td>
    </tr>
    <tr>
      <td align="center">
        게시글 작성 페이지 구현 <br/>
        공통 컴포넌트 및 소셜 로그인 구현 <br/>
      </td>
      <td align="center">
        회원가입 / 로그인 페이지 구현 <br/>
        supabase trigger 설정 <br/>
      </td>
      <td align="center">
        Header 컴포넌트 구현 <br/>
        홈 페이지 구현 <br/>
      </td>
    </tr>
  </tbody>
</table>

<br/>
<br/>

## 프로젝트 실행
```sh
$ git clone https://github.com/KIMgyeongmIN00/Hmm-code-review-site
$ cd Hmm-code-review-site

$ pnpm install
$ pnpm dev
```

<br/>
<br/>

## 📁 프로젝트 구조
```
📦 Hmm-code-review-site
├─ public
└─ src
   ├─ main.jsx
   ├─ App.jsx
   ├─ app
   │  ├─ ProtectedRouter.jsx
   │  └─ Router.jsx
   ├─ components
   │  ├─ commons
   │  ├─ features
   │  └─ layouts
   ├─ contexts
   │  └─ auth
   │     ├─ AuthProvider.jsx
   │     ├─ auth.context.js
   │     └─ auth.reducer.js
   ├─ data
   ├─ hooks
   │  └─ auth
   │     └─ useSignInForm.js
   ├─ libs\api
   ├─ pages
   ├─ styles
   └─ utils
```

<br />
<br/>

## 📃 프로젝트 기록

#### [<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" /> 피그마 Link](https://www.figma.com/design/rW5I2sDtCNNy4hdCD8zy5C/%ED%9D%90%EC%9D%8C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-(%EC%BD%94%EB%93%9C-%EB%A6%AC%EB%B7%B0-%ED%94%8C%EB%9E%AB%ED%8F%BC)?node-id=0-1&p=f&t=PBg0of6CNe1IEEsa-0)
#### [<img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" alt="Notion" /> 노션 Link](https://teamsparta.notion.site/2-_-I-1802dc3ef5148132be2cd3ab726d5384)
#### 배포된 링크 : [HMM...](https://www.hmm-code.shop/)
#### KPT 회고 : [추가 예정...]()
