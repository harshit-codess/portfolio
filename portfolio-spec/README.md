# Portfolio (design 71 — spec sheet, light / dark)

React + Vite frontend, Express backend. No database: all content lives in `backend/data/portfolio.js`.

## Run it (two terminals)

```bash
cd backend
npm install
npm run dev        # http://localhost:5000
```

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

## Edit your content

Everything on the page comes from **`backend/data/portfolio.js`**. Values in `[brackets]` are placeholders to replace.
Project screenshots are in `frontend/public/images/`. Put your résumé at `frontend/public/resume.pdf`.

## Folders

```
backend/
  server.js            Express app, one route: GET /api/portfolio
  data/portfolio.js    <- your content
frontend/
  index.html
  public/images/       project screenshots
  src/
    main.jsx  App.jsx  api.js  index.css
    components/        Header, TitleBlock, Block, KeyFigures, Specifications, Applications, RevisionHistory, Ordering, Footer, Logo, ThemeToggle
```

## Light / dark

The button in the header switches the theme and remembers the choice in the browser.
The first visit follows the device setting. Colours for both themes are at the top of `frontend/src/index.css`.

## Phone layout

Screens 640px wide or less get their own layout (design 72): a header with only the monogram,
an email button and the light / dark button; large project screenshots; shorter project cards.
Large screens are unchanged.

- `frontend/src/useIsPhone.js` decides which layout to show.
- `frontend/src/components/phone/` holds the phone components.
- `frontend/src/phone.css` holds the phone styles.
