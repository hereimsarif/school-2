# School Website

A modern, multi-page school website built with Next.js, React, and Tailwind CSS. Features include a sticky navigation header, light/dark mode, prospectus and syllabus downloads, accessible forms, and engaging galleries, events, and school news.

---

## Features

- Academic branding: blue, green, and white palette used throughout
- Fully responsive and mobile-first
- Sticky global navigation and floating CTA
- Home, About Us, Academics, Admissions, Faculty, Events, Gallery, Contact, Blog
- Downloadable prospectus and syllabi
- Admissions and contact forms with validation
- Faculty search/filter by department
- Events with upcoming list/calendar and past gallery
- Carousel gallery (photos & videos)
- Dark/light mode toggle
- Accessible, ARIA roles & skip links
- Newsletter signup and social media links

---

## Tech Stack

- [Next.js 13+ (App Router)](https://nextjs.org/)
- [React 18+](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma (optional)](https://www.prisma.io/) for backend modeling

---

## Setup & Development

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
2. **Environment variables:**
   - Copy `.env.example` to `.env` and fill as needed.
3. **Run development server:**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000.
4. **Build for production:**
   ```bash
   npm run build && npm start
   ```
5. **Lint and format:**
   ```bash
   ./scripts/lint.sh
   ```
6. **Seed DB (if using Prisma):**
   ```bash
   npx prisma db push && ts-node scripts/seed.ts
   ```

---

## Contribution

1. Fork the repo and create a branch: `git checkout -b feature/your-feature`
2. Add/fix code, tests, or docs with clear commit messages
3. Run linter: `./scripts/lint.sh`
4. Push changes and submit a pull request.

---

## License

MIT

---

## Acknowledgments

- Hero image, gallery, and photo assets are placeholders (replace with real-school media).
- Follow ARIA and accessibility best-practices.
