# Nosratee Jahan Naba — Portfolio

React + Vite portfolio. Deploy on Netlify.

## Setup

```bash
npm install
npm run dev
```

## Build & Deploy (Netlify)

```bash
npm run build
```

Then drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)
OR connect your GitHub repo in Netlify dashboard — auto-deploys on every push.

Build settings:
- Build command: `npm run build`
- Publish directory: `dist`

## Adding Project Screenshots

1. Put your screenshot images inside `src/assets/`
2. In `src/components/Projects.jsx`, import at the top:
   ```js
   import ssAcademix from '../assets/academix.png'
   ```
3. Set `screenshot: ssAcademix` on the relevant project object.

## Adding Certificate Images

Same process — import in `src/components/Certificates.jsx` and set `screenshot` on each cert object.

## Updating Content

All data is in the component files as arrays/objects at the top — easy to edit without touching JSX.
