import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Marvel Tech Nigeria",
  description:
    "See the software, apps, and digital solutions we have built for clients across Nigeria and beyond.",
};

const filters = ["All", "Software", "Web Apps", "Mobile Apps", "Consultancy", "Hardware"];

const projects = [
  {
    category: "Software",
    type: "Custom Software",
    title: "Inventory Management System",
    client: "FMCG Company, Lagos",
    desc: "A complete inventory and supply chain management system integrated across 3 warehouses.",
    outcome: "60% reduction in stock discrepancies",
    tags: ["Python", "Django", "PostgreSQL"],
    color: "var(--accent)",
  },
  {
    category: "Mobile Apps",
    type: "Mobile App",
    title: "Logistics Tracking App",
    client: "Logistics Startup, Abuja",
    desc: "iOS & Android app for real-time shipment tracking, driver management and customer notifications.",
    outcome: "Delivered in 6 weeks. 4.8★ App Store rating",
    tags: ["React Native", "Node.js", "Firebase"],
    color: "#7c3aed",
  },
  {
    category: "Consultancy",
    type: "IT Consultancy",
    title: "IT Infrastructure Overhaul",
    client: "Financial Services Firm",
    desc: "Complete technology audit and infrastructure redesign for a 120-person financial services organisation.",
    outcome: "40% improvement in system speed, zero downtime migration",
    tags: ["Cloud Migration", "Azure", "Cybersecurity"],
    color: "var(--gold-dark)",
  },
  {
    category: "Web Apps",
    type: "E-commerce Platform",
    title: "Multi-vendor E-commerce Store",
    client: "Retail Group, Lagos",
    desc: "Full-featured e-commerce platform with Paystack integration, vendor dashboard and inventory management.",
    outcome: "₦50M+ in transactions processed in first 6 months",
    tags: ["Next.js", "Paystack", "MongoDB"],
    color: "#16a34a",
  },
  {
    category: "Software",
    type: "ERP System",
    title: "HR & Payroll Management System",
    client: "Manufacturing Company, Kano",
    desc: "Custom ERP module covering employee management, payroll processing, leave management, and compliance reporting.",
    outcome: "Reduced payroll processing time from 3 days to 4 hours",
    tags: ["Laravel", "MySQL", "React"],
    color: "var(--accent)",
  },
  {
    category: "Web Apps",
    type: "Corporate Website",
    title: "Professional Services Website",
    client: "Law Firm, Abuja",
    desc: "Modern, SEO-optimised corporate website with case study portfolio, team profiles and lead capture.",
    outcome: "3× increase in organic enquiries within 90 days",
    tags: ["Next.js", "Sanity CMS", "Vercel"],
    color: "#7c3aed",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow-gold fade-in-up" style={{ marginBottom: "16px" }}>
            Our Work
          </div>
          <h1
            className="fade-in-up delay-1"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(32px, 4.5vw, 52px)",
              fontWeight: 800,
              color: "white",
              marginBottom: "16px",
              lineHeight: 1.15,
            }}
          >
            Projects We&apos;re Proud Of
          </h1>
          <p
            className="fade-in-up delay-2"
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "560px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            From complex enterprise systems to sleek mobile apps and strategic consultancy engagements — here is a selection of the work that defines what Marvel Tech stands for.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "white", padding: "48px 0 0" }}>
        <div className="container">
          <p
            style={{
              fontSize: "17px",
              color: "var(--muted)",
              lineHeight: 1.75,
              maxWidth: "720px",
              margin: "0 auto",
              textAlign: "center",
              paddingBottom: "40px",
              borderBottom: "1px solid var(--fog)",
            }}
          >
            Every project represents a real business challenge solved with technology, creativity, and dedication.
          </p>

          {/* Filter Bar */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
              padding: "28px 0",
              justifyContent: "center",
            }}
          >
            {filters.map((f, i) => (
              <div
                key={f}
                style={{
                  padding: "8px 18px",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  background: i === 0 ? "var(--accent)" : "var(--fog)",
                  color: i === 0 ? "white" : "var(--muted)",
                  border: i === 0 ? "1px solid var(--accent)" : "1px solid transparent",
                }}
              >
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section" style={{ background: "var(--bg)", paddingTop: "0" }}>
        <div className="container">
          <div className="grid-3">
            {projects.map((p) => (
              <div
                key={p.title}
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                  padding: "0",
                  overflow: "hidden",
                }}
              >
                {/* Top color bar */}
                <div
                  style={{
                    background: `${p.color}15`,
                    padding: "24px",
                    borderBottom: "1px solid var(--fog)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "-20px",
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: `${p.color}20`,
                    }}
                  />
                  <div
                    style={{
                      display: "inline-block",
                      padding: "4px 12px",
                      background: `${p.color}18`,
                      color: p.color,
                      borderRadius: "100px",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      marginBottom: "12px",
                    }}
                  >
                    {p.type}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--muted)",
                      marginBottom: "8px",
                      fontStyle: "italic",
                    }}
                  >
                    {p.client}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "var(--navy)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {p.title}
                  </h3>
                </div>

                {/* Body */}
                <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65, flex: 1 }}>{p.desc}</p>

                  {/* Outcome */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "8px",
                      padding: "10px 12px",
                      background: "var(--success-light)",
                      borderRadius: "8px",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="var(--success)"
                      strokeWidth="2.5"
                      style={{ marginTop: "2px", flexShrink: 0 }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--success)", lineHeight: 1.4 }}>
                      {p.outcome}
                    </span>
                  </div>

                  {/* Tech Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {p.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                </div>
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
            Like What You See?
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.65)",
              marginBottom: "32px",
              maxWidth: "420px",
              margin: "0 auto 32px",
            }}
          >
            We&apos;d love to add your project to this page. Let&apos;s build something together.
          </p>
          <Link href="/contact" className="btn btn-gold btn-lg">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
