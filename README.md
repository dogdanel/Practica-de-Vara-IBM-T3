# Nest Footer App

React + TypeScript + Vite implementation of the Nest footer & hero section.

## Code conventions (PR review follow-up)

1. **Constants** — colors, font sizes and breakpoints live in `src/constants/`:
   - `colors.ts` (`COLORS`), `fontSizes.ts` (`FONT_SIZES`, `FONT_WEIGHTS`, `LINE_HEIGHTS`, `FONT_FAMILIES`),
     `breakpoints.ts` (`BREAKPOINTS`, `MEDIA_QUERIES`), `sizes.ts` (`ICON_SIZES`, `IMAGES`, `CONTACT`).
   - The CSS side of the same tokens is declared once in `src/styles/tokens.css`.
     Stylesheets must only use those custom properties (`var(--color-*)`, `var(--font-size-*)`, `var(--space-*)`).
     Media queries cannot read custom properties, so the breakpoint rem values are written
     literally and annotated with the token name (e.g. `/* --breakpoint-lg: 64rem */`).
2. **Rem instead of px** — every size, spacing, radius, font-size and breakpoint is expressed in `rem`
   (1rem = 16px). The only exceptions are `--radius-full: 9999px` and the numeric `size` prop of the
   icon components (SVG attributes).
3. **Icons** — all icon components live in `src/components/Icons/` and are re-exported from
   `src/components/Icons/index.ts`:
   `import { FacebookIcon, MailIcon } from '../../Icons';`
4. **Translations** — no static text in components. All copy lives in `src/i18n/translations/en.ts`
   and is read through the `useTranslation()` hook: `const { t } = useTranslation(); t('footer.appInstall.title')`.
   Adding a language = adding a dictionary file and registering it in `src/i18n/translations/index.ts`.

## Scripts

```bash
npm install
npm run dev
npm run build
```
