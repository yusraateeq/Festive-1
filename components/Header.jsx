'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Icon from '@/components/Icon';
import { SITE, wa } from '@/lib/site';
import { services } from '@/lib/data/services';

/* Locations group — keeps Dubai / UAE / Nationwide together so the top
   menu stays clean (keyword-heavy anchors live in footer + these links). */
const LOCATIONS = [
  {
    href: '/christmas-decoration-dubai/',
    label: 'Christmas Decoration Dubai',
    short: 'Villas, homes & offices across every Dubai district',
    icon: 'building',
  },
  {
    href: '/christmas-decoration-uae/',
    label: 'Christmas Decoration UAE',
    short: 'All 7 emirates covered by one dedicated team',
    icon: 'pin',
  },
  {
    href: '/nationwide-christmas-decoration/',
    label: 'Nationwide Service',
    short: 'Abu Dhabi, Sharjah, Ajman, RAK, Fujairah & UAQ',
    icon: 'truck',
  },
];

const NAV = [
  { href: '/', label: 'Home' },
  { key: 'services', label: 'Services', dropdown: true, active: 'services' },
  { key: 'locations', label: 'Locations', dropdown: true, active: 'locations' },
  { href: '/packages/', label: 'Packages' },
  { href: '/gallery/', label: 'Gallery' },
  { href: '/blog/', label: 'Blog' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // mobile drawer
  const [dd, setDd] = useState(''); // 'services' | 'locations' | ''
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const drawerRef = useRef(null); // <nav> drawer (focus management)
  const burgerRef = useRef(null); // hamburger / close button
  const prevOpenRef = useRef(false); // so focus-return only runs on a real close

  /* Hover-reveal of dropdowns only makes sense with a real pointer (desktop).
     On touch, mouseenter/mouseleave fire right after each tap and undo the
     click-toggled dropdown, so we gate them behind a >1080px viewport. */
  useEffect(() => {
    const mq = window.matchMedia('(min-width:1081px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDd('');
    document.body.style.overflow = '';
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  /* Escape closes the drawer; focus moves into the drawer on open and
     back to the burger on close (keyboard accessibility). */
  const close = () => {
    setOpen(false);
    setDd('');
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    const t = setTimeout(() => drawerRef.current?.querySelector('button, a')?.focus({ preventScroll: true }), 260);
    return () => {
      window.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
  }, [open]);

  useEffect(() => {
    const wasOpen = prevOpenRef.current;
    prevOpenRef.current = open;
    if (!open && wasOpen) burgerRef.current?.focus({ preventScroll: true });
  }, [open]);

  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const servicesActive =
    pathname === '/services/' || services.some((s) => pathname.startsWith(`/${s.slug}/`));
  const locationsActive =
    pathname.startsWith('/christmas-decoration-dubai/') ||
    pathname.startsWith('/christmas-decoration-uae/') ||
    pathname.startsWith('/nationwide-christmas-decoration/');

  const dropActive = (key) => (key === 'services' ? servicesActive : locationsActive);

  const toggleDd = (key) => setDd((v) => (v === key ? '' : key));

  const renderDdTrigger = (item) => (
    <button
      type="button"
      className={`nav-trigger${dropActive(item.key) ? ' active' : ''}`}
      onClick={() => toggleDd(item.key)}
      aria-expanded={dd === item.key}
      aria-haspopup="true"
    >
      {item.label}
      <span className="chev" aria-hidden="true">
        <Icon name="chevron" size={14} />
      </span>
    </button>
  );

  const renderDrop = (item) =>
    item.key === 'services' ? (
      <div className="dropdown dd-services">
        <div className="dd-head">
          <span className="dd-title">Christmas decoration services</span>
          <Link href="/services/" className="dd-all" onClick={close}>
            All services <Icon name="arrow" size={13} />
          </Link>
        </div>
        <div className="dd-grid">
          {services.map((s) => (
            <Link key={s.slug} href={`/${s.slug}/`} className="dd-item" onClick={close}>
              <span className="dd-ico">
                <Icon name={s.icon} size={18} />
              </span>
              <span className="dd-meta">
                <strong>{s.name}</strong>
                <small>{s.short}</small>
              </span>
            </Link>
          ))}
        </div>
        <div className="dd-foot">
          <Link href="/packages/" onClick={close}>
            <Icon name="gift" size={15} /> Packages &amp; price list{' '}
            <Icon name="arrow" size={13} />
          </Link>
          <a className="dd-quote" href={wa()}>
            Free quote <Icon name="whatsapp" size={15} />
          </a>
        </div>
      </div>
    ) : (
      <div className="dropdown dd-locations">
        <div className="dd-head">
          <span className="dd-title">Where we decorate</span>
        </div>
        <div className="dd-list">
          {LOCATIONS.map((l) => (
            <Link key={l.href} href={l.href} className="dd-item" onClick={close}>
              <span className="dd-ico">
                <Icon name={l.icon} size={18} />
              </span>
              <span className="dd-meta">
                <strong>{l.label}</strong>
                <small>{l.short}</small>
              </span>
            </Link>
          ))}
        </div>
      </div>
    );

  const renderNavItem = (item) => {
    if (item.dropdown) {
      return (
        <li
          key={item.key}
          className={`has-drop${dd === item.key ? ' open' : ''}${dropActive(item.key) ? ' active-dd' : ''}`}
          onMouseEnter={isDesktop ? () => setDd(item.key) : undefined}
          onMouseLeave={isDesktop ? () => setDd('') : undefined}
        >
          {renderDdTrigger(item)}
          {renderDrop(item)}
        </li>
      );
    }
    return (
      <li key={item.href}>
        <Link
          href={item.href}
          className={`nav-link${isActive(item.href) ? ' active' : ''}`}
          onClick={close}
        >
          {item.label}
        </Link>
      </li>
    );
  };

  return (
    <>
      <div className="topbar">
        <div className="container">
          <div className="t-left">
            <a href={`tel:${SITE.phoneTel}`}>
              <Icon name="phone" size={13} /> {SITE.phoneDisplay}
            </a>
            <span className="sep">|</span>
            <a href={`mailto:${SITE.email}`}>
              <Icon name="mail" size={13} /> {SITE.email}
            </a>
            <span className="sep">|</span>
            <span>
              <Icon name="clock" size={13} /> {SITE.hours}
            </span>
          </div>
          <div className="t-right">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" size={14} /> {SITE.instagramHandle}
            </a>
          </div>
        </div>
      </div>

      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="container">
          <Link href="/" className="brand" aria-label="Festive Occasions home">
            <span className="logo-badge" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="16" r="6" fill="#d8bd6e" />
                <path d="M22.6 35h18.8l-2 13H24.6z" fill="#fff" />
                <rect x="29" y="48" width="6" height="6" rx="1.5" fill="#b08d2e" />
              </svg>
            </span>
            <span>
              Festive Occasions
              <small>Christmas Decoration</small>
            </span>
          </Link>

          {/* Desktop (and tablet-wide) inline navbar */}
          <nav className="nav nav-desktop" aria-label="Main navigation">
            <ul className="nav-list">{NAV.map(renderNavItem)}</ul>
          </nav>

          <div className="header-cta">
            <a className="btn btn-gold btn-sm" href={wa()}>
              <Icon name="whatsapp" size={16} /> Free Quote
            </a>
          </div>

          <button
            ref={burgerRef}
            className={`hamburger${open ? ' open' : ''}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="site-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile / tablet slide-in drawer — OUTSIDE <header> so its fixed
          positioning + z-index sit at root level (header has backdrop-filter,
          which otherwise creates a containing block and traps the drawer). */}
      <nav id="site-nav" ref={drawerRef} className={`nav nav-drawer${open ? ' open' : ''}`} aria-label="Mobile navigation">
        <div className="nav-mobile-head">
          <span className="brand" aria-hidden="true">
            <span className="logo-badge">
              <svg width="24" height="24" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="16" r="6" fill="#d8bd6e" />
                <path d="M22.6 35h18.8l-2 13H24.6z" fill="#fff" />
                <rect x="29" y="48" width="6" height="6" rx="1.5" fill="#b08d2e" />
              </svg>
            </span>
            <span>
              Festive Occasions
              <small>Christmas Decoration</small>
            </span>
          </span>
          <button className="nav-close" onClick={close} aria-label="Close menu">
            <Icon name="x" size={24} />
          </button>
        </div>

        <ul className="nav-list">{NAV.map(renderNavItem)}</ul>

        <div className="nav-mobile-foot">
          <a className="btn btn-gold btn-lg" href={wa()}>
            <Icon name="whatsapp" size={18} /> Get Your Free Quote
          </a>
          <div className="nav-contact">
            <a href={`tel:${SITE.phoneTel}`}>
              <Icon name="phone" size={15} /> {SITE.phoneDisplay}
            </a>
            <a href={`mailto:${SITE.email}`}>
              <Icon name="mail" size={15} /> {SITE.email}
            </a>
            <span>
              <Icon name="pin" size={15} /> {SITE.hours}
            </span>
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" size={15} /> {SITE.instagramHandle}
            </a>
          </div>
        </div>
      </nav>

      <div
        className={`nav-backdrop${open ? ' show' : ''}`}
        onClick={close}
        aria-hidden="true"
      />
    </>
  );
}