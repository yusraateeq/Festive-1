import Breadcrumbs from '@/components/Breadcrumbs';
import Reveal from '@/components/Reveal';
import { SITE, makeMetadata } from '@/lib/site';

export const metadata = makeMetadata({
  title: 'Privacy Policy | Festive Occasions',
  description: 'How Festive Occasions collects, uses and protects your personal information.',
  path: '/privacy-policy/',
});

export default function PrivacyPage() {
  return (
    <>
      <section className="hero hero-compact">
        <div className="container">
          <h1 className="h-anim h1">Privacy Policy</h1>
          <p className="hero-sub h-anim h2">How we handle your information — simply and transparently.</p>
        </div>
      </section>
      <Breadcrumbs crumbs={[{ label: 'Privacy Policy' }]} />
      <section className="section">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="prose">
            <Reveal>
              <h2>1. Who we are</h2>
              <p>Festive Occasions provides Christmas and festive decoration services across the United Arab Emirates. Our business centre is at {SITE.address}.</p>

              <h2>2. What we collect</h2>
              <p>When you contact us through WhatsApp, email or our website form, we receive the details you choose to share — typically your name, phone number, property type and message. We do not collect payment information through this website.</p>

              <h2>3. How we use your information</h2>
              <p>We use your details to respond to enquiries, prepare quotes, schedule consultations and installations, and provide the services you request. We may occasionally send seasonal messages about our services; you can opt out at any time by replying “stop”.</p>

              <h2>4. What we do not do</h2>
              <p>We do not sell, rent or trade your personal information to third parties. We do not use tracking or advertising cookies on this website.</p>

              <h2>5. Data retention &amp; security</h2>
              <p>Enquiries are kept only for as long as needed to serve you. Access to your information is limited to the team members who need it to deliver your project.</p>

              <h2>6. Your rights</h2>
              <p>You may request a copy of the information we hold about you, or ask us to delete it, at any time by emailing {SITE.email}.</p>

              <h2>7. Contact</h2>
              <p>Questions about this policy? Reach us at {SITE.email} or {SITE.phoneDisplay}.</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}