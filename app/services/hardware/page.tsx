import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Laptops, Phones & Accessories Nigeria | Marvel Tech",
  description:
    "Buy genuine smartphones, laptops, and accessories at competitive prices. Bulk corporate orders welcome.",
};

const categories = [
  {
    icon: "📱",
    title: "Smartphones & Mobile Devices",
    desc: "The latest iPhones, Samsung Galaxy, Tecno, Infinix, Itel, and more. We stock flagship, mid-range, and budget-friendly smartphones to suit every user and every budget.",
  },
  {
    icon: "💻",
    title: "Laptops & Desktop Computers",
    desc: "From ultrabooks for professionals to powerhouse laptops for developers and creatives — we carry top brands including HP, Dell, Lenovo, Apple MacBook, and Asus.",
  },
  {
    icon: "🖨️",
    title: "Computer Peripherals",
    desc: "Mice, keyboards, webcams, monitors, printers, routers, and everything your workstation or office needs to function at its best.",
  },
  {
    icon: "📦",
    title: "Phone Accessories",
    desc: "Premium cases and screen protectors, chargers and power banks, earphones, TWS earbuds, Bluetooth speakers, pop sockets, and more.",
  },
  {
    icon: "🎒",
    title: "Laptop Accessories",
    desc: "Laptop bags and backpacks, cooling pads, external hard drives, USB hubs, HDMI adapters, and other essentials for on-the-go productivity.",
  },
  {
    icon: "🏢",
    title: "Business & Bulk Procurement",
    desc: "Equipping a new office or supplying devices for your team? We offer competitive pricing on bulk hardware orders, with procurement management and delivery coordination.",
  },
];

const whyBuy = [
  { icon: "✅", title: "100% Genuine Products", desc: "We source only authentic devices and accessories from authorised distributors. No fakes, no refurbished units sold as new." },
  { icon: "💰", title: "Competitive Pricing", desc: "We work hard to offer the best prices in the market without sacrificing quality." },
  { icon: "💡", title: "Expert Advice", desc: "Our team helps you choose the right device for your specific needs and budget." },
  { icon: "🛠️", title: "After-Sales Support", desc: "We're here after your purchase. We assist with setup, troubleshooting, and warranty claims." },
  { icon: "📊", title: "Bulk & Corporate Orders", desc: "Special pricing and account management for organisations purchasing in volume." },
  { icon: "🚚", title: "Fast, Reliable Delivery", desc: "We offer delivery across Nigeria with careful packaging to ensure devices arrive in perfect condition." },
];

const brands = [
  "Apple", "Samsung", "HP", "Dell", "Lenovo", "Asus",
  "Infinix", "Tecno", "Itel", "Anker", "Oraimo", "Xiaomi",
  "Realme", "Hisense",
];

export default function HardwarePage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1, maxWidth: "760px" }}>
          <div className="eyebrow-gold fade-in-up" style={{ marginBottom: "16px" }}>
            Phones, Laptops & Tech Accessories
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
            Premium Technology.
            <br />
            <span style={{ color: "var(--gold)" }}>Trusted Brands. Unbeatable Service.</span>
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
            From the latest smartphones to high-performance laptops and every accessory in between — Marvel Tech brings you genuine, quality technology products at competitive prices. We serve individuals, students, professionals, and businesses across Nigeria.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-gold btn-lg">
              Browse Products
            </Link>
            <Link href="/contact" className="btn btn-outline btn-lg">
              Request a Bulk Order
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="eyebrow" style={{ marginBottom: "12px" }}>Product Categories</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 700,
                color: "var(--navy)",
              }}
            >
              What We Stock
            </h2>
          </div>

          <div className="grid-3">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="card"
                style={{ textAlign: "center", cursor: "default" }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "var(--accent-light)",
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    margin: "0 auto 16px",
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: "8px",
                  }}
                >
                  {cat.title}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.65 }}>{cat.desc}</p>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-block",
                    marginTop: "16px",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--accent)",
                  }}
                >
                  Enquire →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="section-sm" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div className="eyebrow" style={{ marginBottom: "12px" }}>Brands We Carry</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--navy)",
              }}
            >
              Trusted brands, authentic products
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
            }}
          >
            {brands.map((brand) => (
              <div
                key={brand}
                style={{
                  padding: "10px 20px",
                  background: "var(--surface)",
                  border: "1px solid var(--fog)",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--body)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="eyebrow" style={{ marginBottom: "12px" }}>Our Promise</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 700,
                color: "var(--navy)",
              }}
            >
              Why Buy From Marvel Tech?
            </h2>
          </div>
          <div className="grid-3">
            {whyBuy.map((w) => (
              <div key={w.title} className="card" style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    background: "var(--accent-light)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    flexShrink: 0,
                  }}
                >
                  {w.icon}
                </div>
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
                    {w.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.6 }}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--navy)",
          padding: "72px 0",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            background: "rgba(245,166,35,0.1)",
          }}
        />
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
            Looking for a Specific Product or Need a Bulk Quote?
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
            Contact our sales team with your requirements and we&apos;ll get back to you with availability and the best price we can offer.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-gold btn-lg">
              Send a Product Enquiry
            </Link>
            <a href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-lg">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
