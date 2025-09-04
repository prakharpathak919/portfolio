# Prakhar Pathak — Portfolio

A ready-to-deploy React + Tailwind portfolio for GitHub Pages.

## Quick start

```bash
npm i
npm run dev
```

Open http://localhost:5173

## Deploy to GitHub Pages (docs folder)
1. Ensure `vite.config.js` has `base: '/portfolio/'` and `build.outDir = 'docs'`.
2. `npm run build`
3. Push to GitHub.
4. Repo → Settings → Pages → Source: Deploy from a branch → Branch: `main` and folder: `/docs`.

## Customize
- Edit constants at the top of `src/App.jsx` (name, email, phone, socials).
- Put your images in `public/images/` and update paths (10th/12th/Graduation + project thumbnails).
- Replace `Prakhar-Resume.pdf` in `public/` to enable the download button.
