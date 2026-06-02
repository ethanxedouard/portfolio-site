# alex. — Portfolio

A minimal Next.js 14 portfolio with App Router, TypeScript, and Tailwind CSS.

## Stack

- **Next.js 14** — App Router, static generation
- **TypeScript** — strict mode throughout
- **Tailwind CSS** — utility classes + CSS variables for theming
- **Inter** + **JetBrains Mono** — Google Fonts

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customizing Content

**All content lives in one file: `lib/data.ts`**

Edit that file to update:
- Your name, role, location, bio, links
- Experience entries
- Awards & fellowships
- Projects (title, tags, metrics, case study text)

No other files need to change for content updates.

## Project Structure

```
app/
  layout.tsx           # Root layout, Nav, ThemeProvider
  page.tsx             # Home (hero, experience, awards, heatmap)
  globals.css          # Design tokens, base styles
  not-found.tsx        # 404 page
  projects/
    page.tsx           # Projects list
    [slug]/
      page.tsx         # Project detail (dynamic)
  contact/
    page.tsx           # Contact page

components/
  Nav.tsx              # Sticky nav with dark mode toggle
  Footer.tsx           # Footer with social icons
  ThemeProvider.tsx    # Client-side dark/light theme
  GitHubHeatmap.tsx    # Contribution heatmap
  SectionLabel.tsx     # Reusable # section label

lib/
  data.ts              # All site content — edit here
```

## Theme

The palette uses CSS variables defined in `globals.css`:

| Variable     | Light         | Dark          |
|-------------|---------------|---------------|
| `--bg`       | `#ffffff`     | `#000000`     |
| `--ink`      | `#0a0a0a`     | `#f5f5f5`     |
| `--accent`   | `#E51937`     | `#E51937`     |
| `--navy`     | `#003A63`     | `#4d9bcc`     |
| `--ink2`     | `#5F6062`     | `#9aa0a3`     |

Dark mode is toggled via the `.dark` class on `<html>`, persisted to `localStorage`.

## Deployment

```bash
npm run build
```

Deploy to [Vercel](https://vercel.com) — just connect your repo, zero config needed.
