# Personal Website

Static Angular site, auto-deployed to GitHub Pages via GitHub Actions.

## Local Development

```bash
cd frontend
npm install
ng serve
```

Open http://localhost:4200

## Deployment

Pushing to `main` triggers the GitHub Actions workflow which builds the site
and deploys it to GitHub Pages automatically. No manual steps needed after
initial setup.

## Personalising

All content lives in one file:
`frontend/src/app/services/portfolio.service.ts`

Also update your links in:
- `src/app/components/contact/contact.component.html`
- `src/app/components/footer/footer.component.html`
- `src/index.html` (page title + meta description)
