import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Marvel Technological Innovations Limited",
  description:
    "Learn about Marvel Tech — our story, mission, values, and the team behind Nigeria's trusted technology partner.",
};

const values = [
  { icon: "💡", title: "Innovation", desc: "We embrace new ideas, emerging technologies, and creative problem-solving." },
  { icon: "⭐", title: "Excellence", desc: "We hold ourselves to the highest standards in every project and interaction." },
  { icon: "🛡️", title: "Integrity", desc: "We operate with transparency, honesty, and accountability at all times." },
  { icon: "🤝", title: "Partnership", desc: "We treat every client relationship as a long-term collaboration, not a transaction." },
  { icon: "🌍", title: "Accessibility", desc: "We believe great technology should be available to every business and individual." },
];

const differences = [
  {
    title: "We are Nigerian",
    desc: "We understand the local market, infrastructure realities, and business landscape better than offshore providers.",
    icon: "🇳🇬",
  },
  {
    title: "We are full-spectrum",
    desc: "We handle everything from software to hardware under one roof, saving you the complexity of multiple vendors.",
    icon: "🔄",
  },
  {
    title: "We are solutions-focused",
    desc: "We don't just write code; we understand your business challenge and engineer the right answer.",
    icon: "🎯",
  },
  {
    title: "We are committed beyond delivery",
    desc: "Our relationships don't end at launch; we provide ongoing support and maintenance.",
    icon: "♾️",
  },
];

const team = [
  { name: "Atolagbe David Tolulope", role: "Visionary leader driving Marvel Tech's mission", initials: "DT", color: "var(--accent)" },
  { name: "Akindutire Ayomide", role: "Engineering excellence across all platforms", initials: "SA", color: "var(--gold-dark)" },
  { name: "Dr Boluwatife Solomon", role: "Strategic technology advisory", initials: "BC", color: "#16a34a" },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow-gold fade-in-up" style={{ marginBottom: "16px" }}>
            Home › About Us
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
            About Marvel Technological Innovations Limited
          </h1>
          <p
            className="fade-in-up delay-2"
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Building Nigeria&apos;s Digital Future — One Solution at a Time
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "64px",
              alignItems: "center",
            }}
            className="grid-2-responsive"
          >
            <div>
              <div className="eyebrow" style={{ marginBottom: "12px" }}>Our Story</div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(28px, 3vw, 36px)",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "20px",
                }}
              >
                Who We Are
              </h2>
              <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.8, marginBottom: "16px" }}>
                Marvel Technological Innovations Limited is a full-service technology company incorporated in Nigeria and dedicated to transforming the way businesses and individuals interact with technology. We were founded on a simple but powerful belief: that access to world-class technology should not be limited to large corporations or international markets.
              </p>
              <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: 1.8 }}>
                Every business in Nigeria — from a growing startup to an established enterprise — deserves technology that works, scales, and delivers real value. Since our founding, we have grown into a trusted technology partner for clients across multiple industries, delivering software solutions, digital products, IT advisory services, and premium technology hardware.
              </p>
            </div>
            <div>
              <div
                style={{
                  background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)",
                  borderRadius: "20px",
                  padding: "40px",
                  color: "white",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "160px",
                    height: "160px",
                    borderRadius: "50%",
                    background: "rgba(26,86,232,0.2)",
                  }}
                />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div className="eyebrow-gold" style={{ marginBottom: "20px" }}>By the numbers</div>
                  {[
                    { value: "50+", label: "Projects Delivered" },
                    { value: "30+", label: "Happy Clients" },
                    { value: "5+", label: "Years of Excellence" },
                    { value: "100%", label: "Client Satisfaction Goal" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "14px 0",
                        borderBottom: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <span style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)" }}>{stat.label}</span>
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "24px",
                          fontWeight: 800,
                          color: "var(--gold)",
                        }}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .grid-2-responsive { grid-template-columns: 1fr !important; gap: 40px !important; }
          }
        `}</style>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="eyebrow" style={{ marginBottom: "12px" }}>Our Foundation</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(28px, 3vw, 36px)",
                fontWeight: 700,
                color: "var(--navy)",
              }}
            >
              Mission, Vision & Values
            </h2>
          </div>

          {/* Mission & Vision */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", marginBottom: "40px" }}
            className="mvv-grid"
          >
            <div
              style={{
                background: "var(--navy)",
                borderRadius: "16px",
                padding: "36px",
                color: "white",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  right: "-30px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "rgba(26,86,232,0.25)",
                }}
              />
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>🎯</div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "12px",
                }}
              >
                Our Mission
              </div>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: 1.7, position: "relative", zIndex: 1 }}>
                To empower businesses and individuals with innovative, reliable, and accessible technology solutions that drive growth, efficiency, and competitive advantage.
              </p>
            </div>

            <div
              style={{
                background: "var(--accent)",
                borderRadius: "16px",
                padding: "36px",
                color: "white",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-30px",
                  left: "-30px",
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.1)",
                }}
              />
              <div style={{ fontSize: "32px", marginBottom: "16px" }}>🔭</div>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "12px",
                }}
              >
                Our Vision
              </div>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.88)", lineHeight: 1.7, position: "relative", zIndex: 1 }}>
                To be the leading indigenous technology company in Nigeria, recognised for excellence in software innovation, digital transformation, and technology accessibility.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid-3" style={{ gap: "16px" }}>
            {values.map((v) => (
              <div key={v.title} className="card" style={{ display: "flex", gap: "16px" }}>
                <div className="icon-box icon-box-accent">{v.icon}</div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: "6px",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .mvv-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* What Makes Us Different */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="eyebrow" style={{ marginBottom: "12px" }}>Our Advantage</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(28px, 3vw, 36px)",
                fontWeight: 700,
                color: "var(--navy)",
              }}
            >
              The Marvel Tech Difference
            </h2>
          </div>

          <div className="grid-2">
            {differences.map((d) => (
              <div
                key={d.title}
                className="card card-accent-left"
                style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
              >
                <div style={{ fontSize: "28px", flexShrink: 0 }}>{d.icon}</div>
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "17px",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: "8px",
                    }}
                  >
                    {d.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.65 }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="eyebrow" style={{ marginBottom: "12px" }}>Our People</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(28px, 3vw, 36px)",
                fontWeight: 700,
                color: "var(--navy)",
                marginBottom: "12px",
              }}
            >
              The Minds Behind Marvel Tech
            </h2>
            <p style={{ fontSize: "16px", color: "var(--muted)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.7 }}>
              Our team is made up of passionate engineers, creative designers, strategic consultants, and dedicated support professionals — all united by a mission to deliver technology that makes a difference.
            </p>
          </div>

          <div className="grid-3">
            {team.map((member) => (
              <div key={member.name} className="card" style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: "72px",
                    height: "72px",
                    borderRadius: "50%",
                    background: `${member.color}22`,
                    border: `2px solid ${member.color}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: "22px",
                    color: member.color,
                  }}
                >
                  {member.initials}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: "6px",
                  }}
                >
                  {member.name}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--muted)" }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          background: "var(--accent)",
          padding: "64px 0",
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
              marginBottom: "16px",
            }}
          >
            Want to Know More? Let&apos;s Have a Conversation.
          </h2>
          <Link href="/contact" className="btn btn-gold btn-lg" style={{ marginTop: "8px" }}>
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
