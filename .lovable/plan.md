

## Use Triplex-Light font for H1 headings

### What changes

1. **Copy font file** to `public/fonts/Triplex-Light.ttf`

2. **Register @font-face** in `src/index.css`:
   ```css
   @font-face {
     font-family: 'Triplex Light';
     src: url('/fonts/Triplex-Light.ttf') format('truetype');
     font-weight: 300;
     font-style: normal;
     font-display: swap;
   }
   ```

3. **Add new font utility** in `tailwind.config.ts` — add a `heading` font family:
   ```ts
   fontFamily: {
     sans: ["Inter", "system-ui", "sans-serif"],
     display: ["Playfair Display", "Georgia", "serif"],
     heading: ["Triplex Light", "system-ui", "sans-serif"],
   }
   ```

4. **Apply globally to H1** in `src/index.css` base layer:
   ```css
   @layer base {
     h1 {
       font-family: 'Triplex Light', system-ui, sans-serif;
     }
   }
   ```

This keeps `font-display` (Playfair Display) for other headings and only overrides H1 elements with the new Triplex Light font.

