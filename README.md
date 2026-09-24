# Festive Occasions — Christmas Decoration Website

A fast, SEO-first website for **Festive Occasions**, a luxury Christmas decoration company
serving Dubai and all 7 Emirates. Built with **Next.js (App Router)** and exported as a
fully static site — perfect for any host and built for 95–100 Lighthouse scores.

## Quick start

```bash
npm install        # install dependencies
npm run dev        # local dev server -> http://localhost:3000
npm run build      # static export to ./out
npm run preview    # serve ./out locally at http://localhost:3000
```

Deploy the **`out/`** folder to any static host (Netlify, Vercel, Cloudflare Pages, cPanel,
S3/CloudFront, etc.).

## Pages

| URL path | Purpose |
| --- | --- |
| `/` | Home — all services, packages, gallery, FAQ, CTAs |
| `/services/` | All-services hub |
| `/villa-christmas-decoration/` | Villa decoration (Palm, Emirates Hills etc.) |
| `/home-christmas-decoration/` | Flats, apartments & homes — "elegant Xmas decoration for my flat" |
| `/office-christmas-decoration/` | Office & workspace décor |
| `/corporate-christmas-decoration/` | Hotels, malls, venues & events |
| `/christmas-lighting/` | LED lighting design & installation |
| `/outdoor-christmas-decoration/` | Gardens, facades, gates & rooftops |
| `/christmas-decoration-dubai/` | City guide — Dubai |
| `/christmas-decoration-uae/` | All 7 Emirates guide |
| `/nationwide-christmas-decoration/` | Nationwide coverage |
| `/packages/` | Pricing packages Silver / Gold / Platinum + corporate |
| `/gallery/` | Filterable photo gallery |
| `/blog/` | Blog listing |
| `/blog/<slug>/` | Article pages |
| `/about/` | Company story |
| `/contact/` | Contact + WhatsApp form |
| `/privacy-policy/` | Legal |

## Adding your photos

Drop your real photos into **`public/images/`** using the exact filenames below.
The site already references them; when the file exists it shows automatically,
until then an elegant branded placeholder is shown. No code changes needed.

- `public/images/gallery/*.jpg` — gallery grid (11 slots listed in `lib/data/gallery.js`)
- `public/images/services/*.jpg` — the six service-page feature images
  (e.g. `villa-christmas-decoration.jpg`, `home-christmas-decoration.jpg`,
  `office-christmas-decoration.jpg`, `corporate-christmas-decoration.jpg`,
  `christmas-lighting.jpg`, `outdoor-christmas-decoration.jpg`)

Recommended size: **1280×960 (4:3)**; images below ~200 KB each keep pages fast.
JPG/WebP both work — update the extension in `lib/data/gallery.js` and `lib/data/services.js`
if you use WebP.

## SEO features (built in)

- Unique title, meta description, keywords & canonical on **every page**
- JSON-LD structured data: `Organization`, `HomeAndConstructionBusiness`, `Service`,
  `Offer`, `BreadcrumbList`, `FAQPage`, `Blog`/`BlogPosting`, `ImageGallery`, `WebSite`
- `sitemap.xml` + `robots.txt` generated at build time
- Semantic HTML5, single `h1` per page, breadcrumbs, aria labels, skip link
- Internal links target the ranking keywords:
  *Christmas decoration Dubai*, *Villa Christmas decoration*, *Home decoration*,
  *elegant Christmas decoration for my flat*, *Christmas decoration services in Dubai*,
  *real Christmas tree decoration*, *Christmas decoration UAE*, *nationwide all 7 emirates*
- Real CMS-free content (human-written copy) on every page

## Performance (built in)

- 100% static export — no server, no blocking scripts, no third-party requests
- Self-hosted fonts (Playfair Display + Inter) with `font-display: swap` + preload
- All images lazy-loaded with explicit dimensions; hero is pure CSS/SVG (instant LCP)
- Scroll-reveal + snowfall animations respect `prefers-reduced-motion`
- Single small JS bundle, `defer`-free (client components only)

## WhatsApp integration

Every section ends with a WhatsApp CTA button, plus a floating WhatsApp button.
All links open `wa.me/971564284444` with a pre-filled message. Edit the number
and links in **`lib/site.js`** (`SITE.whatsapp`, `wa()`).

## Customising content

- Site details (phone, email, address, Instagram, WhatsApp) → `lib/site.js`
- Services, FAQs, areas → `lib/data/services.js`
- Packages → `lib/data/packages.js`
- Gallery + testimonials → `lib/data/gallery.js`
- Blog posts → `lib/data/blog.js`
- Location guides → `lib/data/locations.js`
- Colours & design tokens → `app/globals.css` (`:root` variables)