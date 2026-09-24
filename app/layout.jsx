import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import BackToTop from '@/components/BackToTop';
import JsonLd from '@/components/JsonLd';
import { SITE, ld, orgGraph } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(SITE.domain),
  title: 'Christmas Decoration in Dubai & UAE | Festive Occasions',
  description:
    'Professional Christmas decoration services in Dubai & across all 7 Emirates. Villa, home, office, corporate, lighting & outdoor décor — design, install & takedown.',
  keywords: [
    'Christmas decoration Dubai', 'Christmas decoration UAE', 'Villa Christmas decoration',
    'Home Christmas decoration', 'office Christmas decoration', 'Christmas lighting installation',
    'real Christmas tree Dubai', 'outdoor Christmas decoration', 'Christmas decorators UAE',
  ],
  other: { 'theme-color': '#0e3a2b' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-js" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/playfair-display-700-.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-400-.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/images/hero.jpg" as="image" fetchPriority="high" />
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <BackToTop />
        <JsonLd data={ld(orgGraph)} />
      </body>
    </html>
  );
}