import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Marvel Technological Innovations | Nigeria Tech Company',
  description:
    'Software development, web & mobile apps, IT consultancy, and premium hardware sales. Your trusted technology partner in Nigeria.',
};

const services = [
  {
    icon: '💻',
    title: 'Software Development',
    desc: 'Custom software built for your exact needs.',
    href: '/services/software-development',
  },
  {
    icon: '📱',
    title: 'Web & Mobile Apps',
    desc: 'Beautiful apps for iOS, Android & Web.',
    href: '/services/web-mobile-apps',
  },
  {
    icon: '🎯',
    title: 'IT Consultancy',
    desc: 'Expert technology strategy & support.',
    href: '/services/consultancy',
  },
  {
    icon: '🛒',
    title: 'Hardware & Accessories',
    desc: 'Phones, laptops, and accessories.',
    href: '/services/hardware',
  },
];

const features = [
  {
    icon: '🏆',
    title: 'Proven Expertise',
    desc: 'Our developers and engineers bring years of hands-on experience across industries, ensuring your project is in the right hands.',
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    desc: 'We understand that time is money. We work efficiently without compromising on quality — delivering on time, every time.',
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    desc: 'Security is built into everything we build. From data encryption to secure architectures, we protect your business.',
  },
  {
    icon: '🤝',
    title: 'Client-First Approach',
    desc: 'Your goals are our goals. We listen, plan, and execute with your success as the primary benchmark.',
  },
  {
    icon: '🌍',
    title: 'Local Expertise, Global Standards',
    desc: 'We operate from Nigeria with a deep understanding of the local market, while applying world-class development standards.',
  },
  {
    icon: '🔧',
    title: 'End-to-End Support',
    desc: 'From initial concept through to post-launch maintenance, we are with you at every stage of your technology journey.',
  },
];

const testimonials = [
  {
    quote:
      "Marvel Tech built our company's inventory management system in record time. The quality was outstanding and they supported us every step of the way.",
    author: 'Operations Director',
    company: 'Deeltix Company, Lagos',
    initials: 'DT',
  },
  {
    quote: 'Marvel Tech is our go-to technology partner. Built everything from our website to our internal tools. Highly recommend!',
    author: 'CEO',
    company: 'Sooseed, Lagos',
    initials: 'CE',
  },
  {
    quote:
      'Marvel Tech built our e-commerce platform and it has transformed our business. The team was professional, responsive, and delivered a fantastic product.',
    author: 'CEO',
    company: 'Yante, Lagos',
    initials: 'YÉ',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ---- HERO ---- */}
      <section
        className="hero-gradient"
        style={{
          backgroundImage: [
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            'linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            'linear-gradient(rgba(10,22,40,0.72), rgba(10,22,40,0.88))',
            'url(/hero-bg.jpg)',
          ].join(', '),
          backgroundSize: '40px 40px, 40px 40px, 100%, cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat, repeat, no-repeat, no-repeat',
          padding: '96px 0 80px',
          minHeight: 'min(90vh, 720px)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '680px' }}>
            <div
              className="eyebrow-gold fade-in-up"
              style={{ marginBottom: '20px' }}
            >
              Your Trusted Technology Partner in Nigeria
            </div>

            <h1
              className="fade-in-up delay-1"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(38px, 5.5vw, 64px)',
                fontWeight: 800,
                color: 'white',
                lineHeight: 1.1,
                letterSpacing: '-1.5px',
                marginBottom: '24px',
              }}
            >
              We Build Software.
              <br />
              We Power Businesses.
              <br />
              <span style={{ color: 'var(--gold)' }}>
                We Deliver Technology.
              </span>
            </h1>

            <p
              className="fade-in-up delay-2"
              style={{
                fontSize: '18px',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.7,
                marginBottom: '40px',
                maxWidth: '560px',
              }}
            >
              From bespoke software development and mobile applications to IT
              consultancy and premium hardware, Marvel Technological Innovations
              Limited delivers end-to-end technology solutions for businesses
              and individuals across Nigeria.
            </p>

            <div
              className="fade-in-up delay-3"
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
            >
              <Link href="/services" className="btn btn-gold btn-lg">
                Explore Our Services
              </Link>
              <Link href="/contact" className="btn btn-outline btn-lg">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---- STATS STRIP ---- */}
      <section
        style={{
          background: 'var(--accent)',
          padding: '48px 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
              textAlign: 'center',
            }}
            className="stats-grid"
          >
            {[
              { value: '50+', label: 'Projects Delivered' },
              { value: '30+', label: 'Happy Clients' },
              { value: '5+', label: 'Years of Excellence' },
              { value: '4', label: 'Core Service Areas' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
        `}</style>
      </section>

      {/* ---- WHAT WE DO ---- */}
      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="eyebrow" style={{ marginBottom: '12px' }}>
              What We Do
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 700,
                color: 'var(--navy)',
                marginBottom: '16px',
              }}
            >
              Complete Technology Solutions Under One Roof
            </h2>
            <p
              style={{
                fontSize: '17px',
                color: 'var(--muted)',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Whether you need a powerful enterprise application, a stunning
              mobile app, strategic IT advice, or quality devices and
              accessories — Marvel Tech is your single, reliable technology
              partner.
            </p>
          </div>

          <div className="grid-4">
            {services.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="card card-accent-top"
                  style={{
                    textAlign: 'center',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                >
                  <div style={{ fontSize: '40px', marginBottom: '16px' }}>
                    {svc.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '17px',
                      fontWeight: 700,
                      color: 'var(--navy)',
                      marginBottom: '8px',
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      color: 'var(--muted)',
                      lineHeight: 1.6,
                    }}
                  >
                    {svc.desc}
                  </p>
                  <div
                    style={{
                      marginTop: '20px',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px',
                    }}
                  >
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- WHY CHOOSE US ---- */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="eyebrow" style={{ marginBottom: '12px' }}>
              Why Choose Marvel Tech
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 700,
                color: 'var(--navy)',
                marginBottom: '16px',
              }}
            >
              Technology That Actually Works for You
            </h2>
            <p
              style={{
                fontSize: '17px',
                color: 'var(--muted)',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              At Marvel Technological Innovations Limited, we don&apos;t just
              deliver technology — we deliver results. Our team of experienced
              engineers, developers, and consultants are committed to building
              solutions that are reliable, scalable, and perfectly aligned with
              your business goals.
            </p>
          </div>

          <div className="grid-3">
            {features.map((feat) => (
              <div
                key={feat.title}
                className="card card-accent-left"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                >
                  <div
                    className="icon-box icon-box-accent"
                    style={{ fontSize: '20px' }}
                  >
                    {feat.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: 'var(--navy)',
                    }}
                  >
                    {feat.title}
                  </h3>
                </div>
                <p
                  style={{
                    fontSize: '14px',
                    color: 'var(--muted)',
                    lineHeight: 1.65,
                  }}
                >
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- TESTIMONIALS ---- */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="eyebrow" style={{ marginBottom: '12px' }}>
              What Our Clients Say
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.5vw, 40px)',
                fontWeight: 700,
                color: 'var(--navy)',
              }}
            >
              Trusted by Businesses Across Nigeria
            </h2>
          </div>

          <div className="grid-3">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card">
                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--body)',
                    lineHeight: 1.7,
                    marginTop: '32px',
                    marginBottom: '24px',
                    fontStyle: 'italic',
                  }}
                >
                  {t.quote}
                </p>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'var(--accent-light)',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '14px',
                      fontFamily: 'var(--font-heading)',
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        fontSize: '14px',
                        color: 'var(--navy)',
                      }}
                    >
                      {t.author}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)' }}>
                      {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- BOTTOM CTA ---- */}
      <section
        className="hero-gradient"
        style={{ padding: '80px 0', textAlign: 'center' }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(245,166,35,0.12)',
              border: '1px solid rgba(245,166,35,0.3)',
              borderRadius: '100px',
              padding: '6px 16px',
              fontSize: '12px',
              fontWeight: 700,
              color: 'var(--gold)',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Ready to get started?
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              fontWeight: 800,
              color: 'white',
              marginBottom: '16px',
              lineHeight: 1.15,
            }}
          >
            Ready to Build Something Great?
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '480px',
              margin: '0 auto 40px',
              lineHeight: 1.65,
            }}
          >
            Talk to our team today. Whether you have a full project brief or
            just an idea — we&apos;ll help you take the next step.
          </p>
          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link href="/contact" className="btn btn-gold btn-lg">
              Start a Project
            </Link>
            <a href="tel:+2348142798542" className="btn btn-outline btn-lg">
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
