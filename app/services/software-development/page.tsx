import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Development Services Nigeria | Marvel Tech",
  description:
    "Custom enterprise software, ERP systems, APIs, and legacy modernisation. Built precisely for your business needs.",
};

const features = [
  {
    title: "Custom Enterprise Software",
    desc: "We design and build robust enterprise-grade applications for operations, finance, HR, logistics, inventory, and more — tailored entirely to your business requirements.",
    icon: "🏗️",
  },
  {
    title: "ERP & Business Management Systems",
    desc: "Consolidate your business data and automate core processes with a custom or configured ERP system that gives you real-time visibility across every department.",
    icon: "📊",
  },
  {
    title: "Database Design & Architecture",
    desc: "Well-structured data is the foundation of great software. We design secure, efficient, and scalable database architectures that handle your data with integrity.",
    icon: "🗄️",
  },
  {
    title: "API Development & Integration",
    desc: "Connect your systems, third-party services, and data sources through robust, well-documented APIs. We build bridges between your tools so they all work together seamlessly.",
    icon: "🔌",
  },
  {
    title: "Legacy System Modernisation",
    desc: "Is your old software slowing you down? We analyse, rebuild, and migrate legacy systems to modern technologies — without disrupting your day-to-day operations.",
    icon: "🔄",
  },
  {
    title: "UI/UX Design for Applications",
    desc: "Great software must also be a pleasure to use. Our designers create intuitive, user-friendly interfaces that reduce training time and increase productivity.",
    icon: "🎨",
  },
];

const process = [
  {
    num: "01",
    title: "Discovery & Requirements",
    desc: "We meet with your team, map your workflows, and define a detailed project specification. No assumptions — only precision.",
  },
  {
    num: "02",
    title: "Architecture & Design",
    desc: "We design the system architecture, database schema, and UI/UX wireframes before any development begins.",
  },
  {
    num: "03",
    title: "Agile Development",
    desc: "We build in sprints, delivering working increments regularly so you can review progress and give feedback throughout.",
  },
  {
    num: "04",
    title: "Testing & Quality Assurance",
    desc: "Every feature is tested rigorously — unit tests, integration tests, and user acceptance testing — before it goes live.",
  },
  {
    num: "05",
    title: "Deployment & Launch",
    desc: "We handle all deployment tasks, server configuration, and go-live activities to ensure a smooth, zero-downtime launch.",
  },
  {
    num: "06",
    title: "Maintenance & Support",
    desc: "Post-launch, we provide ongoing maintenance, feature updates, and technical support to keep your software running at its best.",
  },
];

const techStack = [
  { category: "Languages", items: "Python, JavaScript (Node.js), PHP, Java, C#" },
  { category: "Frameworks", items: "Django, Laravel, React, Vue.js, .NET" },
  { category: "Databases", items: "PostgreSQL, MySQL, MongoDB, Redis" },
  { category: "Cloud", items: "AWS, Google Cloud, Azure, DigitalOcean" },
  { category: "DevOps", items: "Docker, CI/CD Pipelines, GitHub Actions" },
];

export default function SoftwareDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "760px" }}>
          <div className="eyebrow-gold fade-in-up" style={{ marginBottom: "16px" }}>
            Software Design & Development
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
            Bespoke Software Built for the Way You Work
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
            Off-the-shelf software is built for everyone — which means it&apos;s built for no one. At Marvel Tech, we design and develop custom software solutions that fit your exact workflows, your specific challenges, and your long-term business ambitions.
          </p>
          <Link href="/contact" className="btn btn-gold btn-lg">
            Discuss Your Project
          </Link>
        </div>
      </section>

      {/* Service Intro */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "64px", alignItems: "start" }} className="section-grid">
            <div>
              <div className="eyebrow" style={{ marginBottom: "12px" }}>Our Approach</div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(26px, 3vw, 34px)",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "20px",
                }}
              >
                Software That Solves Real Business Problems
              </h2>
              <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.75, marginBottom: "16px" }}>
                Every organisation has unique processes. We take the time to deeply understand how your business works before writing a single line of code. The result is software that integrates seamlessly into your operations, automates the right tasks, and gives your team the tools they actually need.
              </p>
              <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.75 }}>
                Our development team follows industry-best practices — clean code architecture, rigorous testing, and thorough documentation — to ensure what we build is maintainable, scalable, and built to last.
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <div
                style={{
                  background: "var(--navy)",
                  borderRadius: "16px",
                  padding: "32px",
                  color: "white",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "20px",
                  }}
                >
                  Technologies We Use
                </div>
                <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "20px", lineHeight: 1.6 }}>
                  We are technology-agnostic — we choose the best tools for your project, not the most convenient ones for us.
                </p>
                {techStack.map((t) => (
                  <div
                    key={t.category}
                    style={{
                      padding: "14px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "var(--gold)",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}
                    >
                      {t.category}
                    </div>
                    <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
                      {t.items}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .section-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* What We Build */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="eyebrow" style={{ marginBottom: "12px" }}>What We Build</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 700,
                color: "var(--navy)",
              }}
            >
              Service Features
            </h2>
          </div>
          <div className="grid-3">
            {features.map((f) => (
              <div key={f.title} className="card" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ fontSize: "28px" }}>{f.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--navy)",
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

      {/* Process */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="eyebrow" style={{ marginBottom: "12px" }}>Our Process</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 700,
                color: "var(--navy)",
              }}
            >
              How We Deliver Your Software
            </h2>
          </div>

          <div className="grid-2">
            {process.map((step) => (
              <div
                key={step.num}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "24px",
                  border: "1px solid var(--fog)",
                  borderRadius: "12px",
                  background: "var(--bg)",
                }}
              >
                <div className="step-number">{step.num}</div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: "8px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65 }}>{step.desc}</p>
                </div>
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
            Have a Software Project in Mind?
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
            Share your idea with us. We&apos;ll provide a free initial consultation and project assessment with no obligation.
          </p>
          <Link href="/contact" className="btn btn-gold btn-lg">
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
