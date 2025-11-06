# Star Wars Explorer

A sleek, React + Vite app to **browse Star Wars characters** (SWAPI) with real-time search, pagination, polished UI, skeleton loading, modal details, and a mocked authentication flow.

---

## Demo credentials (fake)

Use these to sign in to the app (mock auth, no backend):

- **Email:** `demo@user.com`
- **Password:** `password123`

---

## Project repository

Clone the project:

```bash
git clone https://github.com/ImArjit/Star-Wars.git
cd Star-Wars
```

---

## Prerequisites

- Node.js v18+ recommended.
- npm available on your machine.

---

## Step-by-step: Install & run locally

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

Open the URL shown by Vite (`http://localhost:5173`).

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

---

## What I implemented

### Core features

- **Fetch characters** from SWAPI (`https://swapi.dev/api/people`) with pagination.
- **Pagination UI**: Prev / numbered pages / Next (uses SWAPI pages, 10 items per page).
- **Character cards**: premium glassy design, responsive grid, proper image cropping.
- **Modal details**: polished modal with cinematic styling, shows extended info and homeworld (fetched on demand).
- **Search**: debounced, real-time search calling SWAPI `?search=`; dropdown of matches; click to open modal.
- **Loading skeletons**: pixel-perfect skeleton cards with shimmer matching final card layout.
- **Error & empty states**: graceful UX for network errors and no results.

### State & architecture

- **Zustand** for global state (characters + auth) — simple, fast, scalable.
- Modular components: `components/`, `pages/`, and `store/` for maintainability.

### Mock authentication (bonus)

- **Mock login/logout** with hardcoded credentials (see above).
- Stores a **mock token** and `user` in `localStorage`.
- **Silent token refresh** (simulated interval) and auto-logout on expiry (all mocked — no backend).

---

## Design choices & trade-offs

- **Zustand over Context/Redux**: lighter bundle and simpler API for this scale.
- **Tailwind CSS**: fast development and consistent design tokens. Easy to tweak theme.
- **Mock auth**: chosen _only and only_ for assignment demonstration. Not secure — do not use in production.
- **Images**: `picsum.photos` seeded with stable ids for consistent thumbnails (no official character images from SWAPI).
- **Pagination based on SWAPI**: SWAPI returns 10 results per page; UI respects that to avoid client-side page slicing.

---

## Project folder structure

```
src/
├─ api/                  # axios instance, helpers (extract id)
├─ components/           # SearchBar, CharacterGrid, CharacterCard, SkeletonCard, Modal, Pagination, etc.
├─ pages/
│  └─ LoginPage.jsx
├─ store/                 # zustand stores: useCharacterStore.js, authStore.js
├─ App.jsx
├─ main.jsx
└─ index.css
```

---

## Notes for reviewers / evaluators

- This is a frontend-focused take-home: emphasis on UI quality, state management, and API integration.
- Authentication is mocked for demonstration.
- All code is modular and easy to extend (add filters, film/species pages, caching, or real auth).

---

## 👨‍💻 Author

**Arjit Anand**
Frontend Developer — React / Vite / Tailwind / Zustand
GitHub: [https://github.com/ImArjit]
