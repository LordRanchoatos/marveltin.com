import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1 — Brand */}
          <div>
            <div className="footer-logo">
              <Image
                src="/marvel.jpg"
                alt="Marvel Tech Logo"
                width={148}
                height={44}
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <p className="footer-tagline">
              Your trusted technology partner. Building digital solutions that
              power growth for businesses and individuals across Nigeria.
            </p>

            {/* Social Icons */}
            <div className="footer-social">
              {[
                {
                  label: 'LinkedIn',
                  path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 4m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0',
                  fill: true,
                },
                {
                  label: 'Twitter',
                  path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
                  fill: true,
                },
                {
                  label: 'Instagram',
                  path: 'M2 2 h20 a5 5 0 0 1 0 20 H2 a5 5 0 0 1 0-20z M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01',
                  fill: false,
                },
                {
                  label: 'Facebook',
                  path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
                  fill: true,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="footer-social-link"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={s.fill ? 'currentColor' : 'none'}
                    stroke={s.fill ? 'none' : 'currentColor'}
                    strokeWidth="2"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Services */}
          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              {[
                {
                  label: 'Software Development',
                  href: '/services/software-development',
                },
                {
                  label: 'Web & Mobile Apps',
                  href: '/services/web-mobile-apps',
                },
                {
                  label: 'Software Consultancy',
                  href: '/services/consultancy',
                },
                { label: 'Hardware & Accessories', href: '/services/hardware' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Blog / Insights', href: '/blog' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Careers', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <div className="footer-col-title">Contact</div>
            <div className="footer-contact-list">
              {[
                {
                  iconPath:
                    'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0',
                  text: '12 Avera Estate, Ajah, Lagos, Nigeria',
                },
                {
                  iconPath:
                    'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.87h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.5z',
                  text: '+234 814 279 8542',
                },
                {
                  iconPath:
                    'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6L12 13 2 6',
                  text: 'marveltech@gmail.com',
                },
              ].map((item, i) => (
                <div key={i} className="footer-contact-item">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="footer-contact-icon"
                  >
                    <path d={item.iconPath} />
                  </svg>
                  <span>{item.text}</span>
                </div>
              ))}

              <div className="footer-hours">
                <div className="footer-hours-title">Business Hours</div>
                Mon – Fri: 8am – 6pm WAT
                <br />
                Sat: 9am – 3pm WAT
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} Marvel Technological Innovations Limited. All Rights
            Reserved.
          </p>
          <div className="footer-legal">
            <Link href="#" className="footer-legal-link">
              Privacy Policy
            </Link>
            <Link href="#" className="footer-legal-link">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: var(--navy);
          color: rgba(255,255,255,0.75);
          padding-top: 64px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .footer-logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, var(--accent), #3b82f6);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 18px;
          flex-shrink: 0;
        }
        .footer-brand-name {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 15px;
          color: white;
        }
        .footer-tagline {
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255,255,255,0.6);
          margin-bottom: 24px;
          max-width: 280px;
        }
        .footer-social {
          display: flex;
          gap: 10px;
        }
        .footer-social-link {
          width: 34px;
          height: 34px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.6);
          transition: all 0.15s;
        }
        .footer-social-link:hover {
          background: rgba(255,255,255,0.1);
          color: white;
          border-color: rgba(255,255,255,0.3);
        }
        .footer-col-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-link {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          transition: color 0.15s;
        }
        .footer-link:hover { color: white; }
        .footer-contact-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-contact-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-size: 13px;
          color: rgba(255,255,255,0.6);
          line-height: 1.5;
        }
        .footer-contact-icon {
          color: var(--gold);
          flex-shrink: 0;
          margin-top: 1px;
        }
        .footer-hours {
          padding: 12px;
          background: rgba(255,255,255,0.05);
          border-radius: 8px;
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          line-height: 1.7;
        }
        .footer-hours-title {
          font-weight: 600;
          color: rgba(255,255,255,0.75);
          margin-bottom: 4px;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-copy {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
        }
        .footer-legal {
          display: flex;
          gap: 20px;
        }
        .footer-legal-link {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
          transition: color 0.15s;
        }
        .footer-legal-link:hover { color: rgba(255,255,255,0.75); }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
