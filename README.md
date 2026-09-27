# 🎬 MovieExplorer

A React + Vite app for browsing and searching movies using the [TVMaze API](https://www.tvmaze.com/api).

## Features

- Browse a default list of shows on load
- Search shows by title — results update as you type
- View show details in a modal (rating, year, genres, summary)
- Dark / light mode toggle with `localStorage` persistence
- Responsive grid layout (1 → 2 → 3 → 4 columns)
- Fixed footer, full-page hero section

## Tech Stack

- [React 19](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [TVMaze REST API](https://www.tvmaze.com/api) — free, no API key required

## Project Structure

```
src/
├── components/
│   ├── shared/
│   │   ├── MovieCard.jsx
│   │   ├── MovieModal.jsx
│   │   ├── MovieSearch.jsx
│   │   └── NoMovieFound.jsx
│   ├── Hero.jsx
│   └── Movies.jsx
├── hooks/
│   └── useTheme.js
├── layouts/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── MainLayout.jsx
├── pages/
│   ├── Home.jsx
│   └── Movie.jsx
└── index.css
template/
├── assets/css/styles.css
├── index.html
└── movies.html
```

## Getting Started

```bash
npm install
npm run dev
```

## API

| Query | Endpoint |
|---|---|
| Empty (default) | `https://api.tvmaze.com/shows` |
| Search term | `https://api.tvmaze.com/search/shows?q={query}` |
