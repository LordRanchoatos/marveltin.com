import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | Software, Apps, Consultancy & Hardware",
  description:
    "Explore Marvel Tech's complete technology services: software development, web & mobile apps, IT consultancy, and hardware sales.",
};

const services = [
  {
    num: "01",
    icon: "💻",
    title: "Software Design & Development",
    subtitle: "Custom software engineered for your exact business requirements.",
    href: "/services/software-development",
    color: "var(--accent)",
    features: [
      "Custom Enterprise Software",
      "ERP & Business Management Systems",
      "Database Design & Architecture",
      "API Development & Integration",
      "Legacy System Modernisation",
      "UI/UX Design for Desktop Applications",
    ],
  },
  {
    num: "02",
    icon: "📱",
    title: "Web & Mobile App Development",
    subtitle: "Websites and apps that engage, convert, and grow with your business.",
    href: "/services/web-mobile-apps",
    color: "#7c3aed",
    features: [
      "Corporate & E-commerce Websites",
      "Progressive Web Applications (PWA)",
      "Native iOS & Android App Development",
      "Cross-Platform App Development (React Native / Flutter)",
      "UI/UX Design & Prototyping",
      "CMS Integration & Web Maintenance",
    ],
  },
  {
    num: "03",
    icon: "🎯",
    title: "Software Consultancy",
    subtitle: "Strategic technology advice that aligns IT with your business goals.",
    href: "/services/consultancy",
    color: "var(--gold-dark)",
    features: [
      "IT Strategy & Digital Transformation Planning",
      "Technology Audit & Assessment",
      "Software Architecture Consulting",
      "Project Management & Delivery Advisory",
      "Cloud Solutions Strategy",
      "Cybersecurity Advisory",
    ],
  },
  {
    num: "04",
    icon: "🛒",
    title: "Computer Hardware, Mobile Hardware & Accessories",
    subtitle: "Premium devices and accessories — trusted brands, competitive prices.",
    href: "/services/hardware",
    color: "#16a34a",
    features: [
      "Smartphones & Mobile Devices",
      "Laptops & Desktop Computers",
      "Computer Peripherals & Accessories",
      "Phone Accessories (cases, chargers, earphones)",
      "Laptop Accessories (bags, adapters, cooling pads)",
      "Hardware Procurement for Businesses & Organisations",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow-gold fade-in-up" style={{ marginBottom: "16px" }}>
            Home › Services
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
            Our Services
          </h1>
          <p
            className="fade-in-up delay-2"
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "480px",
              margin: "0 auto",
            }}
          >
            Four Core Capabilities. One Trusted Partner.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-sm" style={{ background: "white" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "720px" }}>
          <p
            style={{
              fontSize: "18px",
              color: "var(--muted)",
              lineHeight: 1.75,
            }}
          >
            At Marvel Technological Innovations Limited, we offer a comprehensive suite of technology services designed to meet the complete needs of modern businesses and individuals. From building complex enterprise software to selling the latest smartphones, we are your all-in-one technology company.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="section" style={{ background: "var(--bg)", paddingTop: "0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {services.map((svc, i) => (
              <div
                key={svc.num}
                style={{
                  background: "white",
                  border: "1px solid var(--fog)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-sm)",
                  display: "grid",
                  gridTemplateColumns: i % 2 === 0 ? "1fr 1.6fr" : "1.6fr 1fr",
                }}
                className="service-overview-card"
              >
                {/* Left — Info */}
                <div
                  style={{
                    padding: "40px",
                    background: `${svc.color}08`,
                    borderRight: i % 2 === 0 ? `1px solid ${svc.color}22` : "none",
                    borderLeft: i % 2 !== 0 ? `1px solid ${svc.color}22` : "none",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    order: i % 2 === 0 ? 0 : 1,
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        color: svc.color,
                        textTransform: "uppercase",
                        marginBottom: "16px",
                      }}
                    >
                      Service {svc.num}
                    </div>
                    <div style={{ fontSize: "40px", marginBottom: "16px" }}>{svc.icon}</div>
                    <h2
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "24px",
                        fontWeight: 700,
                        color: "var(--navy)",
                        marginBottom: "12px",
                        lineHeight: 1.2,
                      }}
                    >
                      {svc.title}
                    </h2>
                    <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.65 }}>
                      {svc.subtitle}
                    </p>
                  </div>
                  <Link
                    href={svc.href}
                    className="btn"
                    style={{
                      background: svc.color,
                      color: "white",
                      alignSelf: "flex-start",
                      marginTop: "28px",
                    }}
                  >
                    Learn More →
                  </Link>
                </div>

                {/* Right — Features */}
                <div
                  style={{
                    padding: "40px",
                    order: i % 2 === 0 ? 1 : 0,
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      color: "var(--muted)",
                      textTransform: "uppercase",
                      marginBottom: "20px",
                    }}
                  >
                    What&apos;s Included
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {svc.features.map((f) => (
                      <li
                        key={f}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontSize: "14px",
                          color: "var(--body)",
                          lineHeight: 1.5,
                        }}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke={svc.color}
                          strokeWidth="2.5"
                          style={{ flexShrink: 0, marginTop: "2px" }}
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .service-overview-card {
              grid-template-columns: 1fr !important;
            }
            .service-overview-card > div {
              order: unset !important;
              border-right: none !important;
              border-left: none !important;
            }
          }
        `}</style>
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
              marginBottom: "16px",
            }}
          >
            Not sure which service you need?
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.65)",
              marginBottom: "32px",
              maxWidth: "480px",
              margin: "0 auto 32px",
            }}
          >
            Talk to our team. We&apos;ll listen to your goals and recommend the right approach.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-gold btn-lg">
              Get a Free Consultation
            </Link>
            <Link href="/portfolio" className="btn btn-outline btn-lg">
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
