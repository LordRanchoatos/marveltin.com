import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Web & Mobile App Development Nigeria | Marvel Tech",
  description:
    "Professional websites, e-commerce platforms, iOS and Android apps developed for Nigerian businesses and beyond.",
};

const webFeatures = [
  {
    title: "Corporate & Brand Websites",
    desc: "Professional, impactful websites that tell your brand story and convert visitors into customers.",
    icon: "🌐",
  },
  {
    title: "E-commerce Platforms",
    desc: "Powerful online stores built to sell — with seamless checkout, inventory management, and payment integration (Paystack, Flutterwave, and more).",
    icon: "🛒",
  },
  {
    title: "Progressive Web Applications (PWA)",
    desc: "Web apps that feel like native apps — installable, fast, and functional even with limited internet connectivity.",
    icon: "⚡",
  },
  {
    title: "CMS-Powered Websites",
    desc: "Easy-to-manage websites built on WordPress, Webflow, or headless CMS platforms — so you can update content without a developer.",
    icon: "📝",
  },
  {
    title: "Landing Pages & Microsites",
    desc: "High-converting, targeted landing pages for campaigns, product launches, and events.",
    icon: "🎯",
  },
];

const mobileFeatures = [
  {
    title: "Native iOS App Development",
    desc: "Purpose-built for Apple devices using Swift — smooth, fast, and fully integrated with iOS features.",
    icon: "🍎",
  },
  {
    title: "Native Android App Development",
    desc: "Built for the Android ecosystem using Kotlin — performant, reliable, and beautifully designed.",
    icon: "🤖",
  },
  {
    title: "Cross-Platform App Development",
    desc: "One codebase, two platforms. We build cross-platform apps using React Native or Flutter — reducing development time and cost without sacrificing quality.",
    icon: "🔄",
  },
  {
    title: "App UI/UX Design",
    desc: "User experience is everything. Our designers create wireframes, prototypes, and full designs that are tested and refined before a line of code is written.",
    icon: "🎨",
  },
  {
    title: "App Maintenance & Updates",
    desc: "We don't disappear after launch. We provide ongoing updates, bug fixes, and new feature development to keep your app current and competitive.",
    icon: "🔧",
  },
];

const stats = [
  { value: "73%", text: "of consumers judge a business's credibility based on its website design." },
  {
    value: "#1",
    text: "Mobile internet users in Nigeria represent the majority of online traffic — a mobile-first approach is non-negotiable.",
  },
  {
    value: "3×",
    text: "Businesses with optimised digital presence generate significantly more leads and conversions.",
  },
  {
    value: "↑",
    text: "A well-built app dramatically increases customer retention and brand loyalty.",
  },
];

export default function WebMobileAppsPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "760px" }}>
          <div className="eyebrow-gold fade-in-up" style={{ marginBottom: "16px" }}>
            Web & Mobile App Development
          </div>
          <h1
            className="fade-in-up delay-1"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px, 4.5vw, 52px)",
              fontWeight: 800,
              color: "white",
              marginBottom: "20px",
              lineHeight: 1.15,
            }}
          >
            Digital Products That People Love to Use
          </h1>
          <p
            className="fade-in-up delay-2"
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.7,
              marginBottom: "36px",
              maxWidth: "600px",
            }}
          >
            Your website and apps are the face of your brand in the digital world. We design and develop high-performance, visually stunning digital products that not only look great but drive real business results — more leads, more sales, and more loyal customers.
          </p>
          <Link href="/contact" className="btn btn-gold btn-lg">
            Start Your Digital Project
          </Link>
        </div>
      </section>

      {/* Why Your Business Needs */}
      <section
        style={{
          background: "var(--accent)",
          padding: "48px 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "24px",
            }}
            className="stats-4"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  padding: "8px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "36px",
                    fontWeight: 800,
                    color: "var(--gold)",
                    marginBottom: "8px",
                  }}
                >
                  {s.value}
                </div>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .stats-4 { grid-template-columns: 1fr 1fr !important; }
          }
          @media (max-width: 480px) {
            .stats-4 { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Web Development */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ marginBottom: "40px" }}>
            <div className="eyebrow" style={{ marginBottom: "12px" }}>Web Development</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 700,
                color: "var(--navy)",
                marginBottom: "16px",
              }}
            >
              Websites That Work As Hard As You Do
            </h2>
            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.75, maxWidth: "680px" }}>
              We build modern, fast, and highly functional websites for businesses of all sizes — from lean startups to established enterprises. Every site we develop is mobile-responsive, SEO-optimised, and engineered for performance.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {webFeatures.map((f) => (
              <div key={f.title} className="card card-accent-top">
                <div style={{ fontSize: "28px", marginBottom: "12px" }}>{f.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: "8px",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Development */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div style={{ marginBottom: "40px" }}>
            <div className="eyebrow" style={{ marginBottom: "12px" }}>Mobile App Development</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 700,
                color: "var(--navy)",
                marginBottom: "16px",
              }}
            >
              Apps That Your Users Can&apos;t Put Down
            </h2>
            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.75, maxWidth: "680px" }}>
              Mobile is where your customers are. We develop polished, intuitive, and high-performance mobile applications for iOS and Android — building experiences that engage users and keep them coming back.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {mobileFeatures.map((f) => (
              <div key={f.title} className="card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <div className="icon-box icon-box-accent">{f.icon}</div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "var(--navy)",
                    }}
                  >
                    {f.title}
                  </h3>
                </div>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--accent)",
          padding: "72px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 700,
              color: "white",
              marginBottom: "12px",
            }}
          >
            Let&apos;s Build Your Next Digital Product
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.75)",
              marginBottom: "32px",
              maxWidth: "460px",
              margin: "0 auto 32px",
            }}
          >
            Tell us about your project. We&apos;ll review your requirements and come back with a clear plan and honest quote.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-gold btn-lg">
              Request a Quote
            </Link>
            <Link href="/portfolio" className="btn btn-outline btn-lg">
              See Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
