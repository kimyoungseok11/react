# ⚙️ Legacy JSP 시스템 React 포팅 프로젝트

기존에 회사에서 운영되던 JSP 기반의 웹 시스템을 React로 마이그레이션한 사이드 프로젝트입니다.
JSP -> react + REST API 구조로 프로젝트를 개선하였습니다.

---

## 🛠 기술 스택

- Frontend
React : 18.3.1
React Router : 6.23.0
Axios : 1.6.8
swiper : 11.1.15

- Backend
프로젝트 url : https://github.com/kimyoungseok11/healthcare_api.git

---

### 주요 개선 내용

| 항목 | 개선 내용 |
|------|------------|
| **화면 렌더링 구조** | JSP → React SPA 전환 (React Router로 페이지 관리) |
| **데이터 통신** | form submit → Axios 기반 REST API 통신 |
| **UI 구조** | JSP include → 공통 컴포넌트(Header, Sidebar, Table 등) 재사용 |
| **상태 관리** | DOM 조작 → useState / useEffect 기반 상태 관리 |


📦 frontend

 ┣ 📂src
 
 ┃ ┣ 📂util         # Axios 요청 모듈 및 js 로직
 
 ┃ ┣ 📂components  # 공통 UI 컴포넌트
 
 ┃ ┣ 📂pages       # 주요 페이지 컴포넌트
 
 ┃ ┣ 📂images      # 이미지
 
 ┃ ┣ 📂css      # css(css_module 사용)
 
 ┃ ┗ 📜App.jsx
 
 ┗ 📜package.json
