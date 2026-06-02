"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { PRODUCTS, CATEGORIES, type Product } from "./products";
import { useCart } from "./cart";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Best Rated" },
];

const BADGE_COLORS: Record<string, { bg: string; color: string }> = {
  Hot: { bg: "#fee2e2", color: "#b91c1c" },
  New: { bg: "#dcfce7", color: "#15803d" },
  Sale: { bg: "#fef3d8", color: "#92400e" },
  "Low Stock": { bg: "#fff7ed", color: "#c2410c" },
};

function fmt(n: number) {
  return "₦" + n.toLocaleString("en-NG");
}

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const { addItem, openCart } = useCart();
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  const filtered = useMemo(() => {
    let results = [...PRODUCTS];
    if (activeCategory !== "all") {
      results = results.filter((p) => p.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.specs.some((s) => s.toLowerCase().includes(q))
      );
    }
    switch (sort) {
      case "price-asc": return results.sort((a, b) => a.price - b.price);
      case "price-desc": return results.sort((a, b) => b.price - a.price);
      case "rating": return results.sort((a, b) => b.rating - a.rating);
      default: return results;
    }
  }, [activeCategory, search, sort]);

  const handleAdd = (product: Product) => {
    addItem(product, 1);
    setAddedIds((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedIds((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 1600);
  };

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow-gold fade-in-up" style={{ marginBottom: "16px" }}>
            Marvel Tech Store
          </div>
          <h1
            className="fade-in-up delay-1"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(28px, 4.5vw, 50px)",
              fontWeight: 800,
              color: "white",
              marginBottom: "16px",
              lineHeight: 1.15,
            }}
          >
            Premium Tech. Delivered.
          </h1>
          <p
            className="fade-in-up delay-2"
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "520px",
              margin: "0 auto 28px",
              lineHeight: 1.7,
            }}
          >
            Laptops, phones, networking gear, AI hardware, and accessories — all in one place. Secure checkout with Paystack.
          </p>
          {/* Search bar in hero */}
          <div
            className="fade-in-up delay-3"
            style={{
              maxWidth: "480px",
              margin: "0 auto",
              position: "relative",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="2"
              style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)" }}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
            <input
              type="search"
              placeholder="Search products, brands, specs…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px 14px 46px",
                borderRadius: "8px",
                border: "1.5px solid rgba(255,255,255,0.2)",
                background: "rgba(255,255,255,0.1)",
                color: "white",
                fontSize: "15px",
                fontFamily: "var(--font-body)",
                outline: "none",
                backdropFilter: "blur(8px)",
              }}
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div style={{ background: "var(--navy)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "14px 0" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap" }}>
            {[
              { icon: "🔒", label: "Secure Paystack Checkout" },
              { icon: "📦", label: "Nationwide Delivery" },
              { icon: "✅", label: "Genuine Products" },
              { icon: "🔧", label: "After-Sales Support" },
            ].map((b) => (
              <div
                key={b.label}
                style={{ display: "flex", alignItems: "center", gap: "7px", color: "rgba(255,255,255,0.6)", fontSize: "13px" }}
              >
                <span style={{ fontSize: "15px" }}>{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter + Grid */}
      <section style={{ background: "var(--bg)", padding: "40px 0 80px" }}>
        <div className="container">

          {/* Category tabs + sort */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
              marginBottom: "32px",
              flexWrap: "wrap",
            }}
          >
            {/* Category pills — horizontal scroll on mobile */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                flex: 1,
                overflowX: "auto",
                paddingBottom: "4px",
                scrollbarWidth: "none",
              }}
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "8px 16px",
                    borderRadius: "100px",
                    border: activeCategory === cat.id ? "1.5px solid var(--accent)" : "1.5px solid var(--fog)",
                    background: activeCategory === cat.id ? "var(--accent-light)" : "white",
                    color: activeCategory === cat.id ? "var(--accent)" : "var(--body)",
                    fontSize: "13px",
                    fontWeight: activeCategory === cat.id ? 700 : 500,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-body)",
                    transition: "all 0.15s",
                    flexShrink: 0,
                  }}
                >
                  <span>{cat.icon}</span>
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="form-select"
              style={{ width: "auto", minWidth: "180px", flexShrink: 0 }}
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          {/* Results count */}
          <div style={{ marginBottom: "20px", fontSize: "14px", color: "var(--muted)" }}>
            {filtered.length === 0
              ? "No products found"
              : `Showing ${filtered.length} product${filtered.length !== 1 ? "s" : ""}`}
            {search && (
              <span>
                {" "}for &ldquo;<strong style={{ color: "var(--body)" }}>{search}</strong>&rdquo;
              </span>
            )}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{ fontSize: "48px", marginBottom: "16px" }}>🔍</div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "20px", fontWeight: 700, color: "var(--navy)", marginBottom: "8px" }}>
                No results found
              </h3>
              <p style={{ color: "var(--muted)", marginBottom: "20px" }}>Try a different search term or category.</p>
              <button
                className="btn btn-outline-dark btn-sm"
                onClick={() => { setSearch(""); setActiveCategory("all"); }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: "24px",
              }}
            >
              {filtered.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  added={addedIds.has(product.id)}
                  onAdd={() => handleAdd(product)}
                  onViewCart={openCart}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        input[type='search']::placeholder { color: rgba(255,255,255,0.45); }
        input[type='search']:focus { border-color: rgba(255,255,255,0.5) !important; background: rgba(255,255,255,0.15) !important; }
      `}</style>
    </>
  );
}

function ProductImage({ product }: { product: Product }) {
  const [imgError, setImgError] = useState(false);

  if (!product.image || imgError) {
    return (
      <span
        style={{
          fontSize: "70px",
          position: "relative",
          zIndex: 1,
          filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.35))",
          lineHeight: 1,
        }}
      >
        {product.emoji}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={product.image}
      alt={product.name}
      onError={() => setImgError(true)}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        position: "relative",
        zIndex: 1,
        padding: "16px",
      }}
    />
  );
}

function ProductCard({
  product,
  added,
  onAdd,
  onViewCart,
}: {
  product: Product;
  added: boolean;
  onAdd: () => void;
  onViewCart: () => void;
}) {
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <div
      style={{
        background: "white",
        border: "1px solid var(--fog)",
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "var(--shadow-sm)",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.2s, transform 0.2s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-md)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow-sm)";
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
      }}
    >
      {/* Image area */}
      <div
        style={{
          height: "185px",
          background: `linear-gradient(135deg, ${product.bgColor} 0%, ${product.bgColor}cc 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        {/* Subtle radial highlight */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.12) 0%, transparent 65%)",
          }}
        />
        <ProductImage product={product} />

        {/* Badge */}
        {product.badge && (
          <span
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              padding: "4px 10px",
              borderRadius: "100px",
              fontSize: "11px",
              fontWeight: 700,
              ...BADGE_COLORS[product.badge],
            }}
          >
            {product.badge}
          </span>
        )}

        {/* Discount */}
        {discount > 0 && (
          <span
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              padding: "4px 10px",
              borderRadius: "100px",
              fontSize: "11px",
              fontWeight: 700,
              background: "#fee2e2",
              color: "#b91c1c",
            }}
          >
            -{discount}%
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "18px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Brand */}
        <div
          style={{
            fontSize: "10px",
            fontWeight: 700,
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            marginBottom: "5px",
          }}
        >
          {product.brand}
        </div>

        {/* Name */}
        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "15px",
            fontWeight: 700,
            color: "var(--navy)",
            lineHeight: 1.3,
            marginBottom: "8px",
            flex: 1,
          }}
        >
          {product.name}
        </h3>

        {/* Rating */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            marginBottom: "10px",
          }}
        >
          <span style={{ color: "var(--gold)", fontSize: "13px" }}>★</span>
          <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--body)" }}>{product.rating}</span>
          <span style={{ fontSize: "12px", color: "var(--muted)" }}>({product.reviews})</span>
        </div>

        {/* Specs */}
        <ul style={{ listStyle: "none", margin: "0 0 14px", padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
          {product.specs.map((spec) => (
            <li
              key={spec}
              style={{
                fontSize: "12px",
                color: "var(--muted)",
                display: "flex",
                alignItems: "flex-start",
                gap: "6px",
                lineHeight: 1.4,
              }}
            >
              <span style={{ color: "var(--accent)", marginTop: "1px", flexShrink: 0, fontSize: "10px" }}>▸</span>
              {spec}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "14px" }}>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "20px",
              fontWeight: 800,
              color: "var(--navy)",
            }}
          >
            {fmt(product.price)}
          </span>
          {product.originalPrice && (
            <span
              style={{
                fontSize: "13px",
                color: "var(--muted)",
                textDecoration: "line-through",
              }}
            >
              {fmt(product.originalPrice)}
            </span>
          )}
        </div>

        {/* CTA */}
        {added ? (
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              className="btn btn-outline-dark btn-sm"
              style={{ flex: 1, fontSize: "13px" }}
              onClick={onViewCart}
            >
              View Cart
            </button>
            <div
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                padding: "8px",
                borderRadius: "6px",
                background: "var(--success-light)",
                color: "var(--success)",
                fontSize: "13px",
                fontWeight: 700,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Added!
            </div>
          </div>
        ) : (
          <button
            className="btn btn-primary btn-sm"
            style={{ width: "100%", fontSize: "13px" }}
            onClick={onAdd}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

// Keep typescript happy for unused import
export type { Product };
