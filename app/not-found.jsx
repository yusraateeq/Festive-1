import Link from 'next/link';
import Icon from '@/components/Icon';
import { waService } from '@/lib/site';

export default function NotFound() {
  return (
    <section className="hero hero-compact" style={{ textAlign: 'center' }}>
      <div className="container">
        <p className="eyebrow" style={{ justifyContent: 'center' }}>Error 404</p>
        <h1>This page took its own winter break</h1>
        <p className="hero-sub" style={{ margin: '0 auto 1.8rem' }}>
          The page you&rsquo;re after doesn&rsquo;t exist — but your dream Christmas does. Head back home or talk to us directly.
        </p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <Link className="btn btn-gold btn-lg" href="/"><Icon name="home" size={18} /> Back to Home</Link>
          <a className="btn btn-light btn-lg" href={waService('a Christmas decoration quote (I landed on a missing page)')} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} /> Chat with us
          </a>
        </div>
      </div>
    </section>
  );
}