"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactDetails = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: "Office Address",
      value: "12 Avera Estate, Ajah, Lagos, Nigeria",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.87h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.09a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17.5z" />
        </svg>
      ),
      label: "Phone / WhatsApp",
      value: "+234 814 279 8542",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: "Email",
      value: "marveltech@gmail.com",
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: "Business Hours",
      value: "Mon–Fri 8am–6pm · Sat 9am–3pm WAT",
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow-gold fade-in-up" style={{ marginBottom: "16px" }}>
            Get in Touch
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
            Let&apos;s Start a Conversation
          </h1>
          <p
            className="fade-in-up delay-2"
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            We&apos;d love to hear from you — whether it&apos;s a project enquiry, a product question, or just a conversation about technology.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "48px",
              alignItems: "start",
            }}
            className="contact-grid"
          >
            {/* Left — Info */}
            <div>
              {/* Contact Details */}
              <div
                style={{
                  background: "var(--navy)",
                  borderRadius: "16px",
                  padding: "36px",
                  marginBottom: "24px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-40px",
                    right: "-40px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: "rgba(26,86,232,0.2)",
                  }}
                />
                <div className="eyebrow-gold" style={{ marginBottom: "20px", position: "relative", zIndex: 1 }}>
                  Contact Information
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px", position: "relative", zIndex: 1 }}>
                  {contactDetails.map((d) => (
                    <div key={d.label} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                      <div
                        style={{
                          color: "var(--gold)",
                          marginTop: "1px",
                          flexShrink: 0,
                        }}
                      >
                        {d.icon}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "11px",
                            fontWeight: 700,
                            letterSpacing: "0.06em",
                            color: "rgba(255,255,255,0.4)",
                            textTransform: "uppercase",
                            marginBottom: "3px",
                          }}
                        >
                          {d.label}
                        </div>
                        <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>{d.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Card */}
              <div
                style={{
                  background: "#25D366",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "white",
                  transition: "all 0.2s",
                }}
                onClick={() => window.open("https://wa.me/234XXXXXXXXXX", "_blank")}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "15px" }}>Chat with us on WhatsApp</div>
                  <div style={{ fontSize: "12px", opacity: 0.85 }}>We typically reply within minutes</div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div
              style={{
                background: "white",
                border: "1px solid var(--fog)",
                borderRadius: "16px",
                padding: "40px",
                boxShadow: "var(--shadow)",
              }}
            >
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "var(--success-light)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 20px",
                    }}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: "12px",
                    }}
                  >
                    Message Sent!
                  </h3>
                  <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: 1.65 }}>
                    Thank you for reaching out. A member of our team will get back to you within 1 business day.
                  </p>
                </div>
              ) : (
                <>
                  <h2
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: "8px",
                    }}
                  >
                    Send Us a Message
                  </h2>
                  <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "28px" }}>
                    Fill in the form and we&apos;ll get back to you within 1 business day.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div className="grid-2" style={{ gap: "16px" }}>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Full Name *</label>
                        <input
                          className="form-input"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Okafor"
                          required
                        />
                      </div>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">Email Address *</label>
                        <input
                          className="form-input"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          required
                        />
                      </div>
                    </div>

                    <div style={{ marginTop: "16px" }} className="form-group">
                      <label className="form-label">Phone Number (optional)</label>
                      <input
                        className="form-input"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Subject *</label>
                      <select
                        className="form-select"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select a subject...</option>
                        <option value="software">Software Project</option>
                        <option value="webapp">Web / App Project</option>
                        <option value="consultancy">IT Consultancy</option>
                        <option value="hardware">Hardware Enquiry</option>
                        <option value="general">General</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message *</label>
                      <textarea
                        className="form-textarea"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, requirements, or question..."
                        required
                        style={{ minHeight: "140px" }}
                      />
                    </div>

                    <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "14px", fontSize: "16px" }}>
                      Send Message
                    </button>

                    <p style={{ fontSize: "12px", color: "var(--muted)", textAlign: "center", marginTop: "12px" }}>
                      We respect your privacy. Your details will not be shared.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Quick Enquiry Options */}
      <section className="section-sm" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--navy)",
              }}
            >
              Other Ways to Reach Us
            </h3>
          </div>
          <div className="grid-3" style={{ gap: "16px" }}>
            {[
              {
                icon: "💬",
                title: "WhatsApp",
                desc: "Fastest way to get a response. Chat with our team directly.",
                cta: "Open WhatsApp",
                href: "https://wa.me/2348142798542",
                bg: "#25D366",
              },
              {
                icon: "📧",
                title: "Email",
                desc: "Send us a detailed enquiry and we'll respond within 1 business day.",
                cta: "Send Email",
                href: "mailto:marveltech@gmail.com",
                bg: "var(--accent)",
              },
              {
                icon: "📞",
                title: "Phone",
                desc: "Prefer to speak directly? Call us during business hours.",
                cta: "Call Now",
                href: "tel:+2348142798542",
                bg: "var(--navy)",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  className="card"
                  style={{
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "12px" }}>{item.icon}</div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: "8px",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "16px" }}>
                    {item.desc}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "8px 20px",
                      background: item.bg,
                      color: "white",
                      borderRadius: "6px",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    {item.cta}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
