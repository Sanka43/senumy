# Senumy Web

Mobile-first React app for Senumy Jailbreak (guest experience), with luxury iOS-style UI.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS
- React Router v7

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build (output in `dist/`)
- `npm run preview` — preview production build

## Hosting

After `npm run build`, upload the **contents** of `dist/` to your host’s web root (so `index.html` and `assets/` are at the root, not inside a `dist/` folder).

### Fix 404 on refresh or direct links

The server must serve `index.html` for every path (e.g. `/BecomePremiumUser/`, `/prytexdmifgdv7um/`) so the SPA can load. Use the config that matches your host:

| Host | What to use |
|------|-------------|
| **Apache** (XAMPP, cPanel, shared hosting) | `dist/.htaccess` is included after build. Ensure **AllowOverride** is enabled (e.g. `AllowOverride All`) for the folder. |
| **Nginx** | `.htaccess` is ignored. Add this inside your `server { }` block: `try_files $uri $uri/ /index.html;` (see `dist/nginx.conf` after build). |
| **Netlify** | `dist/_redirects` is included. Deploy the `dist/` folder. |

If you still get 404: confirm the host is using one of the configs above and that you uploaded the **contents** of `dist/` (not the `dist` folder itself) to the correct document root.

## Images

Copy the `img` folder from the guest app (`fr7hfcgxc5gcee/img/`) into `public/img/` so that the logo and card icons resolve. Required paths:

- `public/img/senumylogo/senumy-logo.png`
- `public/img/cardIcons/*` (senipa.png, applejr.webp, ipa-installer.png, etc.)

For a full checklist (including theme install guide screenshots and favicon), see `ASSETS.txt`.

**Favicon:** Place `f7-icon.png` in `public/img/` to use a custom favicon; the app uses `/img/f7-icon.png` when present.

## Routes

All routes live under the same layout (navbar + main content).

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Card list by category (IPA stores, jailbreak, themes, etc.) |
| `/BecomePremiumUser/` | BecomePremiumUser | Donate link + registration code + Upgrade |
| `/donate/` | Donate | Senumy info + Install premium / Become premium / Contact |
| `/SenumyJailbreakTools/` | SenumyJailbreakTools | CTA page (jailbreak tools) |
| `/SenumyIpaLibrary/` | SenumyIpaLibrary | CTA page (IPA library) |
| `/iOSTweaks/` | iOSTweaks | CTA page (iOS tweaks) |
| `/Best_iOS_themes/` | BestiosThemes | CTA page (best iOS themes) |
| `/3rd_party_OSes/` | ThirdPartyOses | CTA page (third‑party OSes) |
| `/zignee/` | Zignee | CTA page (Zignee) |
| `/acutus/` | Acutus | CTA page (Acutus) |
| `/themesInstallGuide/` | ThemesInstallGuide | Step‑by‑step themes install guide |
| `/prytexdmifgdv7um/` | Home | Premium app entry (redirect target after valid code) |

Valid registration codes redirect to the premium app on the same site and set `localStorage.senumy_premium`.

## Premium registration codes (Option A – env variable)

To accept real donation codes without a backend:

1. Copy `.env.example` to `.env`.
2. Set **`VITE_PREMIUM_CODES`** to a comma-separated list of valid codes (the same codes you send to users after donation):

   ```env
   VITE_PREMIUM_CODES=SN2345,SN6789,DONOR-ABC123
   ```

3. Run `npm run build` and deploy. Users who enter any of these codes (case-insensitive) on the Become Premium page will get premium access and be redirected to the premium app.

If `VITE_PREMIUM_CODES` is not set, the app uses a small default list for development only (e.g. SN2345, sn345, MX2367, NH1359).

## Optional: server-side validation (Option B)

- **`VITE_PREMIUM_VALIDATE_URL`** — API URL for server-side code validation. If set, the app sends `POST` with `{ code: "..." }` and expects `{ "valid": true }` or `{ "success": true }`. When this is set, `VITE_PREMIUM_CODES` is ignored.
