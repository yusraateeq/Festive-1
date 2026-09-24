'use client';

import { useState } from 'react';
import Icon from '@/components/Icon';
import { SITE, wa } from '@/lib/site';
import { services } from '@/lib/data/services';

/* Contact form that composes a WhatsApp message (no backend needed). */
export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', type: 'Home / Flat', service: '', budget: '', message: '' });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const lines = [
      `Hi Festive Occasions! I'd like a free Christmas decoration quote.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Property type: ${form.type}`,
      form.service ? `Interested in: ${form.service}` : '',
      form.budget ? `Budget range: ${form.budget}` : '',
      form.message ? `Details: ${form.message}` : '',
      SITE.instagramHandle,
    ].filter(Boolean);
    window.open(wa(lines.join('\n')), '_blank', 'noopener');
    setSent(true);
  };

  const inputCls = {
    width: '100%',
    padding: '.8rem 1rem',
    border: '1px solid var(--line)',
    borderRadius: '12px',
    fontFamily: 'var(--font-body)',
    fontSize: '.98rem',
    background: 'var(--cream)',
    color: 'var(--ink)',
    marginBottom: '.9rem',
  };

  return (
    <div className="card" style={{ padding: '1.6rem' }}>
      <h3 style={{ fontSize: '1.2rem', marginBottom: '.3rem' }}>Request a free WhatsApp quote</h3>
      <p style={{ fontSize: '.92rem', color: 'var(--ink-soft)' }}>Fill this in and we&rsquo;ll reply on WhatsApp — usually within the hour.</p>

      <form onSubmit={submit} style={{ marginTop: '1.1rem' }}>
        <input type="text" required placeholder="Your name" value={form.name} onChange={set('name')} style={inputCls} aria-label="Your name" />
        <input type="tel" required placeholder="Phone / WhatsApp number" value={form.phone} onChange={set('phone')} style={inputCls} aria-label="Phone number" />
        <select value={form.type} onChange={set('type')} style={inputCls} aria-label="Property type">
          {['Home / Flat', 'Villa', 'Office', 'Corporate / Venue', 'Garden / Outdoor', 'Not sure yet'].map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
        <select value={form.service} onChange={set('service')} style={inputCls} aria-label="Service">
          <option value="">Interested in… (optional)</option>
          {services.map((s) => <option key={s.slug}>{s.name}</option>)}
          <option>Christmas Lighting</option>
          <option>Real Christmas Tree</option>
          <option>Full Christmas decoration package</option>
        </select>
        <select value={form.budget} onChange={set('budget')} style={inputCls} aria-label="Budget">
          <option value="">Budget (optional)</option>
          <option>Under AED 1,000</option>
          <option>AED 1,000 – 3,000</option>
          <option>AED 3,000 – 8,000</option>
          <option>AED 8,000+</option>
          <option>Corporate / Bespoke</option>
        </select>
        <textarea rows={3} placeholder="Tell us about your space and your dates…" value={form.message} onChange={set('message')} style={{ ...inputCls, resize: 'vertical' }} aria-label="Message" />
        <button type="submit" className="btn btn-wa" style={{ width: '100%' }}>
          <Icon name="whatsapp" size={18} /> Send via WhatsApp
        </button>
        {sent && (
          <p style={{ marginTop: '.8rem', fontSize: '.9rem', fontWeight: 600, color: 'var(--wa-dark)' }}>
            WhatsApp should have opened with your message ready to send. If not, call us on {SITE.phoneDisplay}.
          </p>
        )}
      </form>
    </div>
  );
}