---
name: wilocorp-structure
description: "Define a professional, scalable folder structure for a React (Vite) portfolio project (Wilocorp). Use when: estructura de carpetas, arquitectura, organizacion, escalable, trabajo en equipo, github, react, vite, portfolio."
argument-hint: "Apply Wilocorp folder structure guidance"
user-invocable: true
disable-model-invocation: false
---

# Wilocorp Project Structure

Define and enforce a professional, scalable folder structure for the Wilocorp React portfolio. This skill is for team collaboration in GitHub and consistent project growth.

## When to Use
- You need a scalable folder structure for a React/Vite portfolio.
- You are organizing features, pages, or shared UI.
- You are setting up team conventions for GitHub collaboration.

## Recommended Structure
```
.
├── public/
├── src/
│   ├── app/              # App shell, routes, providers
│   │   ├── routes/
│   │   ├── providers/
│   │   └── app.tsx
│   ├── assets/           # Static assets imported by code
│   ├── components/       # Shared UI components
│   ├── features/         # Feature modules (section-based)
│   │   └── <feature>/
│   │       ├── components/
│   │       ├── hooks/
│   │       ├── services/
│   │       └── index.ts
│   ├── hooks/            # Cross-feature hooks
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route-level pages
│   ├── services/         # API clients, integrations
│   ├── styles/           # Global styles, tokens, theme
│   ├── types/            # Shared TypeScript types
│   ├── utils/            # Pure helpers
│   └── main.tsx
├── .github/
│   └── workflows/
├── README.md
└── package.json
```

## Procedure
1. Review existing folders under `src/` and map them to the recommended structure.
2. Create missing folders and move files to the closest matching folder.
3. Introduce a feature folder for each portfolio section (e.g., `about`, `work`, `contact`).
4. Keep shared UI only in `components/` and page-level UI in `pages/` or `features/`.
5. Keep cross-feature logic in `hooks/`, `services/`, and `utils/`.

## Conventions
- Use kebab-case for feature folders (e.g., `case-studies`).
- Use PascalCase for React components and their files.
- Add an `index.ts` barrel in feature folders to control public exports.
- Keep `assets/` for files used by code; static public files stay in `public/`.

## Team Guidance
- Keep folder boundaries clear to reduce merge conflicts.
- Prefer small, composable components in `components/`.
- Add new features by creating a folder inside `features/`.
