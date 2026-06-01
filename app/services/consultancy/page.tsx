import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT & Software Consultancy Nigeria | Marvel Tech",
  description:
    "Strategic technology consulting for digital transformation, IT audits, architecture, cybersecurity, and cloud migration.",
};

const consultancyServices = [
  {
    title: "IT Strategy & Digital Transformation",
    desc: "We work with leadership teams to define a comprehensive digital transformation strategy — identifying technology opportunities, prioritising initiatives, and creating a practical, phased roadmap that aligns technology investment with business outcomes.",
    icon: "🗺️",
  },
  {
    title: "Technology Audit & Assessment",
    desc: "Not sure if your current systems are working effectively? Our technology audit provides a thorough, objective assessment of your IT infrastructure, software stack, security posture, and processes — with clear recommendations for improvement.",
    icon: "🔍",
  },
  {
    title: "Software Architecture Consulting",
    desc: "Planning to build something new? We provide expert input on system architecture — helping you choose the right technical approach, avoid costly mistakes, and build on a foundation that can scale.",
    icon: "🏛️",
  },
  {
    title: "Project Recovery & Rescue",
    desc: "Has a technology project gone off the rails? Our consultants can be parachuted in to assess the situation, stabilise the project, and create a clear plan to get it back on track.",
    icon: "🚑",
  },
  {
    title: "Cloud Strategy & Migration",
    desc: "We help businesses plan and execute their move to the cloud — selecting the right cloud providers, designing migration strategies, and ensuring the transition is smooth, secure, and cost-effective.",
    icon: "☁️",
  },
  {
    title: "Cybersecurity Advisory",
    desc: "We assess your organisation's security risks and help you implement the policies, tools, and processes needed to protect your data, systems, and reputation from cyber threats.",
    icon: "🔐",
  },
  {
    title: "Vendor & Technology Selection",
    desc: "Choosing between technology vendors, platforms, or tools? We provide independent, data-driven assessments to help you select the solution that best fits your requirements and budget.",
    icon: "⚖️",
  },
];

const engagementModels = [
  {
    title: "Project-Based Consulting",
    desc: "A defined scope, timeline, and deliverable. Ideal for specific challenges like a technology audit or architecture review.",
    icon: "📋",
    tag: "One-time",
  },
  {
    title: "Retainer Advisory",
    desc: "Ongoing access to our consultancy team on a monthly basis. Perfect for organisations that want a trusted technology advisor on call.",
    icon: "📅",
    tag: "Monthly",
  },
  {
    title: "Workshop & Strategy Sessions",
    desc: "Structured half-day or full-day sessions with your leadership or IT team to tackle a specific challenge or define a strategic direction.",
    icon: "🎓",
    tag: "Flexible",
  },
];

export default function ConsultancyPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "760px" }}>
          <div className="eyebrow-gold fade-in-up" style={{ marginBottom: "16px" }}>
            Software Consultancy
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
            The Right Technology Strategy Can Transform Your Business
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
            Technology decisions are business decisions. The wrong choice costs time, money, and competitive advantage. Marvel Tech&apos;s consultancy team helps you cut through the complexity — making clear, strategic technology decisions that drive measurable results.
          </p>
          <Link href="/contact" className="btn btn-gold btn-lg">
            Talk to a Consultant
          </Link>
        </div>
      </section>

      {/* Service Intro */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ maxWidth: "720px" }}>
            <div className="eyebrow" style={{ marginBottom: "12px" }}>Our Approach</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 700,
                color: "var(--navy)",
                marginBottom: "20px",
              }}
            >
              Expert Guidance at Every Stage of Your Technology Journey
            </h2>
            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.75, marginBottom: "16px" }}>
              Whether you&apos;re a business considering digital transformation for the first time, an organisation whose existing systems are no longer working, or a growing company that needs a technology roadmap for the next five years — our consultants bring the clarity, experience, and objectivity you need.
            </p>
            <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.75 }}>
              We are vendor-independent. Our advice is always in your interest — not tied to any product, platform, or commission. We assess your actual situation, understand your goals, and recommend what will genuinely work for you.
            </p>
          </div>

          {/* Trust Badge */}
          <div
            style={{
              marginTop: "36px",
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "14px 20px",
              background: "var(--accent-light)",
              borderRadius: "12px",
              border: "1px solid rgba(26,86,232,0.2)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span style={{ fontSize: "14px", fontWeight: 600, color: "var(--accent)" }}>
              Vendor-independent advice — always in your best interest
            </span>
          </div>
        </div>
      </section>

      {/* Consultancy Services */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="eyebrow" style={{ marginBottom: "12px" }}>Our Services</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 700,
                color: "var(--navy)",
              }}
            >
              Consultancy Services
            </h2>
          </div>
          <div className="grid-3">
            {consultancyServices.map((s) => (
              <div key={s.title} className="card card-accent-top" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ fontSize: "28px" }}>{s.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--navy)",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="eyebrow" style={{ marginBottom: "12px" }}>How We Work Together</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 700,
                color: "var(--navy)",
              }}
            >
              Flexible Engagement Models to Suit Your Needs
            </h2>
          </div>

          <div className="grid-3">
            {engagementModels.map((m) => (
              <div
                key={m.title}
                className="card"
                style={{ textAlign: "center", position: "relative", paddingTop: "40px" }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--accent)",
                    color: "white",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "4px 14px",
                    borderRadius: "100px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {m.tag}
                </div>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>{m.icon}</div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: "12px",
                  }}
                >
                  {m.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="hero-gradient"
        style={{ padding: "72px 0", textAlign: "center" }}
      >
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 700,
              color: "white",
              marginBottom: "12px",
            }}
          >
            Your Business Deserves Better Technology Decisions
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.65)",
              marginBottom: "32px",
              maxWidth: "460px",
              margin: "0 auto 32px",
            }}
          >
            Schedule a no-commitment discovery call with one of our consultants. We&apos;ll listen first, then advise.
          </p>
          <Link href="/contact" className="btn btn-gold btn-lg">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
