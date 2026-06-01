import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tech Insights & Blog | Marvel Technological Innovations",
  description:
    "Technology insights, guides, and industry news from the Marvel Tech team to help your business thrive.",
};

const categories = ["All", "Software Development", "Web & Mobile Apps", "Consultancy", "Hardware & Products"];

const posts = [
  {
    category: "Software Development",
    title: "Why Custom Software Beats Off-the-Shelf for Growing Nigerian Businesses",
    excerpt:
      "Off-the-shelf tools promise convenience — but for growing businesses, the real cost shows up in missed features, workarounds, and scalability limits. Here's why custom software is the smarter long-term investment.",
    readTime: "5 min read",
    date: "May 20, 2025",
    color: "var(--accent)",
  },
  {
    category: "Web & Mobile Apps",
    title: "Why Every Nigerian SME Needs a Mobile App in 2025",
    excerpt:
      "With over 100 million mobile internet users in Nigeria, the question is no longer whether your business needs a mobile app — it's how soon you can get one that works. Here's everything you need to know.",
    readTime: "6 min read",
    date: "May 12, 2025",
    color: "#7c3aed",
  },
  {
    category: "Consultancy",
    title: "What Is Digital Transformation and Why Should Nigerian Businesses Care?",
    excerpt:
      "Digital transformation is one of the most overused phrases in business today. But strip away the jargon and it becomes something every Nigerian business owner needs to understand — and act on.",
    readTime: "7 min read",
    date: "May 5, 2025",
    color: "var(--gold-dark)",
  },
  {
    category: "Hardware & Products",
    title: "Laptop Buying Guide 2025: The Best Laptops for Nigerian Students and Professionals",
    excerpt:
      "Power cuts, dust, and heat are real factors for Nigerian laptop users. This guide cuts through the specs to tell you what actually matters when buying a laptop for study or work in Nigeria.",
    readTime: "8 min read",
    date: "Apr 28, 2025",
    color: "#16a34a",
  },
  {
    category: "Software Development",
    title: "5 Signs Your Business Has Outgrown Its Current Software",
    excerpt:
      "Is your team working around your software rather than with it? Are you patching holes with spreadsheets and manual processes? These are warning signs — and we've listed them all.",
    readTime: "4 min read",
    date: "Apr 18, 2025",
    color: "var(--accent)",
  },
  {
    category: "Web & Mobile Apps",
    title: "React Native vs Flutter: Which is Right for Your Mobile App?",
    excerpt:
      "Both frameworks let you build for iOS and Android from a single codebase — but they have very different strengths. We break down the technical and practical differences to help you decide.",
    readTime: "6 min read",
    date: "Apr 10, 2025",
    color: "#7c3aed",
  },
  {
    category: "Consultancy",
    title: "How to Choose the Right Technology Partner for Your Business",
    excerpt:
      "Choosing a tech partner is one of the most consequential decisions a business can make. Price is rarely the right filter. Here's a framework for making the right choice.",
    readTime: "5 min read",
    date: "Apr 2, 2025",
    color: "var(--gold-dark)",
  },
  {
    category: "Hardware & Products",
    title: "How to Spot Fake Phone Accessories (And Why It Matters)",
    excerpt:
      "Counterfeit chargers and cables cause phone damage and — in worst cases — fire hazards. This guide shows you exactly how to tell the genuine article from a potentially dangerous fake.",
    readTime: "4 min read",
    date: "Mar 25, 2025",
    color: "#16a34a",
  },
  {
    category: "Software Development",
    title: "How We Build: Marvel Tech's Software Development Process Explained",
    excerpt:
      "Clients often wonder what happens between 'yes, let's proceed' and 'here's your software.' We're lifting the curtain on our full development process — from discovery to deployment.",
    readTime: "6 min read",
    date: "Mar 15, 2025",
    color: "var(--accent)",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow-gold fade-in-up" style={{ marginBottom: "16px" }}>
            Insights & Ideas
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
            Technology Thinking from the Marvel Tech Team
          </h1>
          <p
            className="fade-in-up delay-2"
            style={{
              fontSize: "18px",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            Guides, insights, and ideas to help your business get more from technology.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section style={{ background: "white", padding: "32px 0 0", borderBottom: "1px solid var(--fog)" }}>
        <div className="container">
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", paddingBottom: "24px", justifyContent: "center" }}>
            {categories.map((c, i) => (
              <div
                key={c}
                style={{
                  padding: "8px 18px",
                  borderRadius: "100px",
                  fontSize: "13px",
                  fontWeight: 600,
                  cursor: "pointer",
                  background: i === 0 ? "var(--accent)" : "var(--fog)",
                  color: i === 0 ? "white" : "var(--muted)",
                }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          {/* Featured post */}
          <div
            className="card"
            style={{
              marginBottom: "32px",
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "0",
              padding: "0",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: `linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)`,
                padding: "48px 40px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: "-40px",
                  left: "-40px",
                  width: "160px",
                  height: "160px",
                  borderRadius: "50%",
                  background: "rgba(26,86,232,0.2)",
                }}
              />
              <div
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  background: "rgba(245,166,35,0.2)",
                  color: "var(--gold)",
                  borderRadius: "100px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                Featured
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(22px, 2.5vw, 28px)",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: "16px",
                  position: "relative",
                  zIndex: 1,
                  lineHeight: 1.3,
                }}
              >
                {posts[0].title}
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, position: "relative", zIndex: 1 }}>
                {posts[0].excerpt}
              </p>
            </div>
            <div style={{ padding: "48px 36px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div
                  style={{
                    display: "inline-block",
                    padding: "4px 12px",
                    background: "var(--accent-light)",
                    color: "var(--accent)",
                    borderRadius: "100px",
                    fontSize: "11px",
                    fontWeight: 700,
                    marginBottom: "16px",
                  }}
                >
                  {posts[0].category}
                </div>
                <p style={{ fontSize: "14px", color: "var(--muted)" }}>
                  {posts[0].date} · {posts[0].readTime}
                </p>
              </div>
              <Link href="#" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                Read Article →
              </Link>
            </div>
          </div>

          {/* Rest of posts */}
          <div className="grid-3">
            {posts.slice(1).map((post) => (
              <article
                key={post.title}
                className="card"
                style={{ display: "flex", flexDirection: "column", gap: "12px", cursor: "pointer" }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: post.color,
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: post.color,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {post.category}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--navy)",
                    lineHeight: 1.35,
                  }}
                >
                  {post.title}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.65, flex: 1 }}>{post.excerpt}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingTop: "12px",
                    borderTop: "1px solid var(--fog)",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--muted)" }}>
                    {post.date} · {post.readTime}
                  </span>
                  <Link
                    href="#"
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--accent)",
                    }}
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section
        style={{
          background: "var(--surface)",
          padding: "64px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: "520px",
              margin: "0 auto",
              background: "white",
              border: "1px solid var(--fog)",
              borderRadius: "16px",
              padding: "40px",
              boxShadow: "var(--shadow)",
            }}
          >
            <div style={{ fontSize: "32px", marginBottom: "16px" }}>📬</div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "22px",
                fontWeight: 700,
                color: "var(--navy)",
                marginBottom: "8px",
              }}
            >
              Get insights delivered to your inbox
            </h2>
            <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "24px", lineHeight: 1.6 }}>
              Join business owners and tech leaders who get our monthly technology insights.
            </p>
            <div style={{ display: "flex", gap: "12px" }} className="newsletter-form">
              <input
                type="email"
                placeholder="your@email.com"
                className="form-input"
                style={{ flex: 1 }}
              />
              <button className="btn btn-primary" style={{ flexShrink: 0 }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 480px) {
            .newsletter-form { flex-direction: column !important; }
          }
        `}</style>
      </section>
    </>
  );
}
