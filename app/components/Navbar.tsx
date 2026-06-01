"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartContext";

const services = [
  { label: "Software Development", href: "/services/software-development" },
  { label: "Web & Mobile Apps", href: "/services/web-mobile-apps" },
  { label: "Software Consultancy", href: "/services/consultancy" },
  { label: "Hardware & Accessories", href: "/services/hardware" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services", hasDropdown: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Shop", href: "/shop" },
  { label: "Pay", href: "/pay" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { itemCount } = useCart();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid var(--fog)" : "1px solid transparent",
          boxShadow: scrolled ? "0 2px 12px rgba(10,22,40,0.08)" : "none",
          transition: "all 0.2s ease",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            height: "64px",
            gap: "8px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginRight: "32px",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                background: "linear-gradient(135deg, var(--navy), var(--accent))",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              M
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "15px",
                  color: "var(--navy)",
                  lineHeight: 1.1,
                }}
              >
                MARVEL TECH
              </div>
              <div
                style={{
                  fontSize: "9px",
                  color: "var(--muted)",
                  letterSpacing: "0.06em",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                Innovations Limited
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              flex: 1,
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  ref={dropdownRef}
                  style={{ position: "relative" }}
                >
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{
                      background: "none",
                      border: "none",
                      padding: "8px 14px",
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: isActive(link.href) ? "var(--accent)" : "var(--body)",
                      cursor: "pointer",
                      borderRadius: "6px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      transition: "all 0.15s",
                      backgroundColor: isActive(link.href) ? "var(--accent-light)" : "transparent",
                    }}
                  >
                    {link.label}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      style={{
                        transform: dropdownOpen ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform 0.2s",
                      }}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div className={`nav-dropdown ${dropdownOpen ? "open" : ""}`}>
                    {services.map((s) => (
                      <Link key={s.href} href={s.href}>
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : link.href === "/shop" ? (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    padding: "7px 14px",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: isActive(link.href) ? "white" : "var(--accent-dark)",
                    borderRadius: "100px",
                    transition: "all 0.15s",
                    background: isActive(link.href) ? "var(--accent)" : "var(--accent-light)",
                    border: "1.5px solid var(--accent)",
                    letterSpacing: "0.02em",
                  }}
                >
                  🛍️ Shop
                </Link>
              ) : link.href === "/pay" ? (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    padding: "7px 14px",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: isActive(link.href) ? "var(--navy)" : "#7a4a0a",
                    borderRadius: "100px",
                    transition: "all 0.15s",
                    background: isActive(link.href) ? "var(--gold)" : "var(--gold-light)",
                    border: "1.5px solid var(--gold)",
                    letterSpacing: "0.02em",
                  }}
                >
                  💳 Pay
                </Link>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  style={{
                    padding: "8px 14px",
                    fontSize: "14px",
                    fontWeight: 500,
                    color: isActive(link.href) ? "var(--accent)" : "var(--body)",
                    borderRadius: "6px",
                    transition: "all 0.15s",
                    backgroundColor: isActive(link.href) ? "var(--accent-light)" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>



          {/* Cart icon */}
          <Link
            href="/shop/checkout"
            className="hidden-mobile"
            title="View cart"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "38px",
              height: "38px",
              borderRadius: "8px",
              color: "var(--body)",
              flexShrink: 0,
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            {mounted && itemCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "1px",
                  right: "1px",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  color: "white",
                  fontSize: "9px",
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: 1,
                  border: "1.5px solid white",
                }}
              >
                {itemCount > 9 ? "9+" : itemCount}
              </span>
            )}
          </Link>

          {/* CTA */}
          <Link
            href="/contact"
            className="btn btn-primary btn-sm hidden-mobile"
            style={{ flexShrink: 0 }}
          >
            Get a Quote
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{
              marginLeft: "auto",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "center",
            }}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "var(--navy)",
                borderRadius: "2px",
                transition: "all 0.2s",
                transform: menuOpen ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "var(--navy)",
                borderRadius: "2px",
                opacity: menuOpen ? 0 : 1,
                transition: "all 0.2s",
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                background: "var(--navy)",
                borderRadius: "2px",
                transition: "all 0.2s",
                transform: menuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <div
          style={{
            padding: "20px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "16px",
              color: "white",
            }}
          >
            MARVEL TECH
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              background: "none",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontSize: "24px",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        <div style={{ padding: "24px" }}>
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div key={link.label}>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  style={{
                    width: "100%",
                    background: "none",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    fontFamily: "var(--font-body)",
                    fontSize: "17px",
                    fontWeight: 500,
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {link.label}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    style={{
                      transform: mobileServicesOpen ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div style={{ paddingLeft: "16px", paddingBottom: "8px" }}>
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        style={{
                          display: "block",
                          padding: "10px 0",
                          fontSize: "15px",
                          color: "rgba(255,255,255,0.75)",
                          borderBottom: "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : link.href === "/shop" ? (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  display: "block",
                  padding: "12px 16px",
                  marginTop: "8px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "white",
                  background: "var(--accent)",
                  textAlign: "center",
                }}
              >
                🛍️ Browse the Shop
              </Link>
            ) : link.href === "/pay" ? (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  display: "block",
                  padding: "12px 16px",
                  marginTop: "8px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--navy)",
                  background: "var(--gold)",
                  textAlign: "center",
                }}
              >
                💳 Make a Payment
              </Link>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  display: "block",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  fontSize: "17px",
                  fontWeight: 500,
                  color: isActive(link.href) ? "var(--gold)" : "white",
                }}
              >
                {link.label}
              </Link>
            )
          )}

          <Link
            href="/contact"
            className="btn btn-gold"
            style={{ width: "100%", marginTop: "12px" }}
          >
            Get a Quote
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
