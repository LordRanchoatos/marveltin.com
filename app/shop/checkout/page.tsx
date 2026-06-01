"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import { useCart } from "../cart";

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: Record<string, unknown>) => { openIframe: () => void };
    };
  }
}

const DELIVERY_FEE = 5000;

interface OrderForm {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  notes: string;
}

interface OrderReceipt {
  reference: string;
  date: string;
  form: OrderForm;
  items: { name: string; brand: string; quantity: number; unitPrice: number }[];
  subtotal: number;
  deliveryFee: number;
  total: number;
}

type Stage = "checkout" | "processing" | "success";

const NIGERIA_STATES = [
  "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno",
  "Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT — Abuja","Gombe",
  "Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos",
  "Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto",
  "Taraba","Yobe","Zamfara",
];

function fmt(n: number) {
  return "₦" + n.toLocaleString("en-NG");
}

function generateOrderPDF(receipt: OrderReceipt) {
  import("jspdf").then(({ default: jsPDF }) => {
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const W = 210;
    const pad = 20;

    // Navy header
    doc.setFillColor(10, 22, 40);
    doc.rect(0, 0, W, 48, "F");
    doc.setFillColor(26, 86, 232);
    doc.rect(0, 48, W, 3, "F");

    // Brand mark
    doc.setFillColor(26, 86, 232);
    doc.roundedRect(pad, 14, 18, 18, 3, 3, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(255, 255, 255);
    doc.text("M", pad + 5.5, 26.5);

    doc.setFontSize(12);
    doc.text("MARVEL TECHNOLOGICAL INNOVATIONS LTD", pad + 24, 22);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(150, 180, 220);
    doc.text("www.marveltechinnovations.com  ·  info@marveltechinnovations.com", pad + 24, 29);

    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(245, 166, 35);
    doc.text("ORDER RECEIPT", W - pad, 21, { align: "right" });
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(150, 180, 220);
    doc.text(`REF: ${receipt.reference}`, W - pad, 28, { align: "right" });
    doc.text(`DATE: ${receipt.date}`, W - pad, 34, { align: "right" });

    // Total block
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(229, 231, 235);
    doc.rect(pad, 60, W - pad * 2, 28);
    doc.setFillColor(248, 250, 252);
    doc.rect(pad, 60, W - pad * 2, 28, "F");

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(107, 114, 128);
    doc.text("TOTAL AMOUNT PAID", pad + 6, 70);
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(10, 22, 40);
    doc.text(fmt(receipt.total), pad + 6, 83);

    doc.setFillColor(220, 252, 231);
    doc.roundedRect(W - pad - 46, 65, 40, 14, 3, 3, "F");
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(22, 163, 74);
    doc.text("✓  CONFIRMED", W - pad - 43, 73.5);

    let y = 102;

    const sectionTitle = (title: string, yPos: number) => {
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(26, 86, 232);
      doc.text(title.toUpperCase(), pad, yPos);
      doc.setDrawColor(26, 86, 232);
      doc.setLineWidth(0.4);
      doc.line(pad, yPos + 2, W - pad, yPos + 2);
    };

    const row = (label: string, value: string, yPos: number) => {
      doc.setFontSize(9);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(107, 114, 128);
      doc.text(label, pad, yPos);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(17, 24, 39);
      const wrapped = doc.splitTextToSize(value, W - pad - (pad + 52));
      doc.text(wrapped, pad + 52, yPos);
      return wrapped.length;
    };

    // Customer
    sectionTitle("Customer Details", y);
    y += 10;
    row("Name", receipt.form.name, y); y += 8;
    row("Email", receipt.form.email, y); y += 8;
    row("Phone", receipt.form.phone, y); y += 8;
    const addrLines = row("Delivery Address", `${receipt.form.address}, ${receipt.form.city}, ${receipt.form.state}`, y);
    y += addrLines > 1 ? addrLines * 6 : 8;

    // Items table
    y += 10;
    sectionTitle("Order Items", y);
    y += 10;

    // Table header
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(107, 114, 128);
    doc.text("QTY", pad, y);
    doc.text("PRODUCT", pad + 14, y);
    doc.text("UNIT PRICE", W - pad - 42, y);
    doc.text("SUBTOTAL", W - pad - 8, y, { align: "right" });
    y += 3;
    doc.setDrawColor(229, 231, 235);
    doc.setLineWidth(0.3);
    doc.line(pad, y, W - pad, y);
    y += 6;

    // Table rows
    receipt.items.forEach((item) => {
      doc.setFont("helvetica", "normal");
      doc.setTextColor(17, 24, 39);
      doc.setFontSize(8.5);
      doc.text(String(item.quantity), pad, y);
      const nameLines = doc.splitTextToSize(`${item.brand} ${item.name}`, 80);
      doc.text(nameLines, pad + 14, y);
      doc.text(fmt(item.unitPrice), W - pad - 42, y);
      doc.text(fmt(item.unitPrice * item.quantity), W - pad - 8, y, { align: "right" });
      y += Math.max(nameLines.length * 5, 6) + 2;
    });

    // Totals
    y += 4;
    doc.setDrawColor(229, 231, 235);
    doc.line(pad, y, W - pad, y);
    y += 8;

    const totRow = (label: string, value: string, bold = false) => {
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setFontSize(bold ? 10 : 9);
      doc.setTextColor(bold ? 10 : 107, bold ? 22 : 114, bold ? 40 : 128);
      doc.text(label, W - pad - 60, y);
      doc.setTextColor(bold ? 26 : 17, bold ? 86 : 24, bold ? 232 : 39);
      doc.text(value, W - pad - 8, y, { align: "right" });
      y += bold ? 10 : 7;
    };

    totRow("Subtotal", fmt(receipt.subtotal));
    totRow("Delivery Fee", fmt(receipt.deliveryFee));
    totRow("Total Paid", fmt(receipt.total), true);

    // Footer
    const footerY = 272;
    doc.setFillColor(10, 22, 40);
    doc.rect(0, footerY, W, 25, "F");
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(150, 180, 220);
    doc.text("This is a computer-generated receipt. No signature required.", W / 2, footerY + 8, { align: "center" });
    doc.text("For queries, contact info@marveltechinnovations.com", W / 2, footerY + 14, { align: "center" });
    doc.setTextColor(245, 166, 35);
    doc.setFont("helvetica", "bold");
    doc.text("Marvel Technological Innovations Limited", W / 2, footerY + 21, { align: "center" });

    doc.save(`Marvel_Order_${receipt.reference}.pdf`);
  });
}

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [stage, setStage] = useState<Stage>("checkout");
  const [paystackReady, setPaystackReady] = useState(false);
  const [receipt, setReceipt] = useState<OrderReceipt | null>(null);
  const [downloading, setDownloading] = useState(false);
  const [form, setForm] = useState<OrderForm>({
    name: "", email: "", phone: "", address: "", city: "", state: "", notes: "",
  });
  const [errors, setErrors] = useState<Partial<OrderForm>>({});

  const total = subtotal + DELIVERY_FEE;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof OrderForm]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const errs: Partial<OrderForm> = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim()) errs.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.phone.trim()) errs.phone = "Required";
    if (!form.address.trim()) errs.address = "Required";
    if (!form.city.trim()) errs.city = "Required";
    if (!form.state) errs.state = "Required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!paystackReady) {
      alert("Payment gateway loading. Please wait a moment.");
      return;
    }

    const reference = `MRVEL-ORD-${Date.now()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;

    setStage("processing");

    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "",
      email: form.email,
      amount: total * 100,
      currency: "NGN",
      ref: reference,
      metadata: {
        custom_fields: [
          { display_name: "Customer Name", variable_name: "customer_name", value: form.name },
          { display_name: "Delivery Address", variable_name: "delivery_address", value: `${form.address}, ${form.city}, ${form.state}` },
          { display_name: "Item Count", variable_name: "item_count", value: String(items.length) },
        ],
      },
      callback: (response: { reference: string }) => {
        const orderReceipt: OrderReceipt = {
          reference: response.reference,
          date: new Date().toLocaleString("en-NG", { dateStyle: "long", timeStyle: "short" }),
          form,
          items: items.map((i) => ({
            name: i.product.name,
            brand: i.product.brand,
            quantity: i.quantity,
            unitPrice: i.product.price,
          })),
          subtotal,
          deliveryFee: DELIVERY_FEE,
          total,
        };
        setReceipt(orderReceipt);
        clearCart();
        setStage("success");
      },
      onClose: () => setStage("checkout"),
    });

    handler.openIframe();
  };

  const handleDownload = () => {
    if (!receipt) return;
    setDownloading(true);
    generateOrderPDF(receipt);
    setTimeout(() => setDownloading(false), 1800);
  };

  // Empty cart state
  if (items.length === 0 && stage !== "success") {
    return (
      <>
        <section className="page-hero" style={{ paddingBottom: "48px" }}>
          <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "36px", fontWeight: 800, color: "white", marginBottom: "12px" }}>
              Checkout
            </h1>
          </div>
        </section>
        <section className="section" style={{ background: "var(--bg)" }}>
          <div className="container" style={{ textAlign: "center", maxWidth: "480px", margin: "0 auto" }}>
            <div style={{ fontSize: "64px", marginBottom: "20px" }}>🛒</div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", fontWeight: 700, color: "var(--navy)", marginBottom: "12px" }}>
              Your cart is empty
            </h2>
            <p style={{ color: "var(--muted)", marginBottom: "28px", lineHeight: 1.65 }}>
              Add some products before proceeding to checkout.
            </p>
            <Link href="/shop" className="btn btn-primary">
              Browse the Shop
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Script
        src="https://js.paystack.co/v1/inline.js"
        strategy="afterInteractive"
        onReady={() => setPaystackReady(true)}
      />

      {/* Hero */}
      <section className="page-hero" style={{ paddingTop: "60px", paddingBottom: "48px" }}>
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
            <Link
              href="/shop"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "rgba(255,255,255,0.6)",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back to Shop
            </Link>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(26px, 4vw, 42px)",
              fontWeight: 800,
              color: "white",
              marginBottom: "8px",
              lineHeight: 1.2,
            }}
          >
            {stage === "success" ? "Order Confirmed! 🎉" : "Checkout"}
          </h1>
          {stage !== "success" && (
            <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.6)" }}>
              {items.length} item{items.length !== 1 ? "s" : ""} · {fmt(total)} total
            </p>
          )}
        </div>
      </section>

      <section style={{ background: "var(--bg)", padding: "48px 0 80px" }}>
        <div className="container">
          {stage === "success" && receipt ? (
            <SuccessView receipt={receipt} onDownload={handleDownload} downloading={downloading} />
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1.4fr 1fr",
                gap: "40px",
                alignItems: "start",
                maxWidth: "1000px",
                margin: "0 auto",
              }}
              className="checkout-grid"
            >
              {/* Left — form */}
              <div
                style={{
                  background: "white",
                  border: "1px solid var(--fog)",
                  borderRadius: "16px",
                  padding: "36px",
                  boxShadow: "var(--shadow)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "20px",
                    fontWeight: 700,
                    color: "var(--navy)",
                    marginBottom: "6px",
                  }}
                >
                  Delivery Information
                </h2>
                <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "28px" }}>
                  We'll deliver to the address below. Please double-check before placing your order.
                </p>

                <form onSubmit={handlePlaceOrder} noValidate>
                  {/* Name + Email */}
                  <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}
                    className="form-row-2"
                  >
                    <Field label="Full Name" error={errors.name}>
                      <input
                        className="form-input"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Chidi Okafor"
                        style={errors.name ? { borderColor: "var(--error)" } : {}}
                      />
                    </Field>
                    <Field label="Email Address" error={errors.email}>
                      <input
                        className="form-input"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="chidi@example.com"
                        style={errors.email ? { borderColor: "var(--error)" } : {}}
                      />
                    </Field>
                  </div>

                  <Field label="Phone Number" error={errors.phone}>
                    <input
                      className="form-input"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+234 800 000 0000"
                      style={errors.phone ? { borderColor: "var(--error)" } : {}}
                    />
                  </Field>

                  <Field label="Delivery Address" error={errors.address}>
                    <input
                      className="form-input"
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="12 Adeola Odeku Street, Victoria Island"
                      style={errors.address ? { borderColor: "var(--error)" } : {}}
                    />
                  </Field>

                  {/* City + State */}
                  <div
                    style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}
                    className="form-row-2"
                  >
                    <Field label="City / Town" error={errors.city}>
                      <input
                        className="form-input"
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="Lagos"
                        style={errors.city ? { borderColor: "var(--error)" } : {}}
                      />
                    </Field>
                    <Field label="State" error={errors.state}>
                      <select
                        className="form-select"
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        style={errors.state ? { borderColor: "var(--error)" } : {}}
                      >
                        <option value="">Select state…</option>
                        {NIGERIA_STATES.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Order Notes (optional)" error={undefined}>
                    <textarea
                      className="form-textarea"
                      name="notes"
                      value={form.notes}
                      onChange={handleChange}
                      placeholder="Any special delivery instructions or notes for your order…"
                      style={{ minHeight: "90px" }}
                    />
                  </Field>

                  <div
                    style={{
                      background: "var(--accent-light)",
                      border: "1px solid rgba(26,86,232,0.2)",
                      borderRadius: "8px",
                      padding: "12px 16px",
                      marginBottom: "20px",
                      fontSize: "13px",
                      color: "var(--accent-dark)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ flexShrink: 0, marginTop: "1px" }}>ℹ️</span>
                    <span>
                      Delivery is available nationwide. A flat fee of <strong>₦5,000</strong> applies to all orders. You will be contacted to confirm delivery timeline.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={stage === "processing"}
                    style={{
                      width: "100%",
                      padding: "16px",
                      fontSize: "16px",
                      opacity: stage === "processing" ? 0.7 : 1,
                      cursor: stage === "processing" ? "not-allowed" : "pointer",
                    }}
                  >
                    {stage === "processing" ? (
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                        <Spinner /> Opening Paystack…
                      </span>
                    ) : (
                      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="1" y="4" width="22" height="16" rx="2" />
                          <line x1="1" y1="10" x2="23" y2="10" />
                        </svg>
                        Place Order — {fmt(total)}
                      </span>
                    )}
                  </button>

                  <p style={{ fontSize: "12px", color: "var(--muted)", textAlign: "center", marginTop: "10px" }}>
                    Secured by Paystack · 256-bit SSL encryption
                  </p>
                </form>
              </div>

              {/* Right — Order summary */}
              <div style={{ position: "sticky", top: "80px" }}>
                <div
                  style={{
                    background: "white",
                    border: "1px solid var(--fog)",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <div
                    style={{
                      padding: "20px 24px",
                      borderBottom: "1px solid var(--fog)",
                      background: "var(--surface)",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "var(--navy)",
                      }}
                    >
                      Order Summary
                    </h3>
                  </div>

                  {/* Items */}
                  <div style={{ padding: "8px 24px", maxHeight: "340px", overflowY: "auto" }}>
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        style={{
                          display: "flex",
                          gap: "12px",
                          padding: "12px 0",
                          borderBottom: "1px solid var(--fog)",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "8px",
                            background: `linear-gradient(135deg, ${item.product.bgColor} 0%, ${item.product.bgColor}bb 100%)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "20px",
                            flexShrink: 0,
                          }}
                        >
                          {item.product.emoji}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            style={{
                              fontSize: "13px",
                              fontWeight: 600,
                              color: "var(--navy)",
                              lineHeight: 1.3,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {item.product.name}
                          </div>
                          <div style={{ fontSize: "12px", color: "var(--muted)" }}>
                            Qty: {item.quantity} × {fmt(item.product.price)}
                          </div>
                        </div>
                        <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--navy)", flexShrink: 0 }}>
                          {fmt(item.product.price * item.quantity)}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div style={{ padding: "16px 24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                      <span style={{ fontSize: "14px", color: "var(--muted)" }}>Subtotal</span>
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>{fmt(subtotal)}</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                      <span style={{ fontSize: "14px", color: "var(--muted)" }}>Delivery</span>
                      <span style={{ fontSize: "14px", fontWeight: 600 }}>{fmt(DELIVERY_FEE)}</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: "12px",
                        borderTop: "2px solid var(--fog)",
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-heading)", fontSize: "16px", fontWeight: 700, color: "var(--navy)" }}>
                        Total
                      </span>
                      <span style={{ fontFamily: "var(--font-heading)", fontSize: "18px", fontWeight: 800, color: "var(--accent)" }}>
                        {fmt(total)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Security badges */}
                <div
                  style={{
                    marginTop: "16px",
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  {["🔒 SSL Secure", "🏦 Paystack", "📄 Instant Receipt"].map((b) => (
                    <span key={b} style={{ fontSize: "12px", color: "var(--muted)" }}>{b}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <style>{`
          @media (max-width: 768px) {
            .checkout-grid { grid-template-columns: 1fr !important; }
            .form-row-2 { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="form-group">
      <label className="form-label">
        {label} {label !== "Order Notes (optional)" && <span style={{ color: "var(--error)" }}>*</span>}
      </label>
      {children}
      {error && (
        <p style={{ fontSize: "12px", color: "var(--error)", marginTop: "4px", display: "flex", gap: "4px", alignItems: "center" }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          {error}
        </p>
      )}
    </div>
  );
}

function Spinner() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
      style={{ animation: "spin 0.8s linear infinite" }}>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

function SuccessView({
  receipt,
  onDownload,
  downloading,
}: {
  receipt: OrderReceipt;
  onDownload: () => void;
  downloading: boolean;
}) {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <div
        style={{
          background: "white",
          border: "1px solid var(--fog)",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "var(--shadow-md)",
        }}
      >
        {/* Success header */}
        <div
          style={{
            background: "linear-gradient(135deg, var(--navy) 0%, #0f2d5a 100%)",
            padding: "40px 40px 32px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              background: "rgba(22,163,74,0.15)",
              border: "2px solid rgba(22,163,74,0.4)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "24px",
              fontWeight: 800,
              color: "white",
              marginBottom: "8px",
            }}
          >
            Order Confirmed!
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
            Thank you, <strong style={{ color: "white" }}>{receipt.form.name}</strong>. Your order has been received and payment confirmed.
          </p>
        </div>

        {/* Receipt body */}
        <div style={{ padding: "32px 40px" }}>
          {/* Reference + date */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--fog)",
              borderRadius: "10px",
              padding: "16px 20px",
              marginBottom: "24px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "12px",
            }}
          >
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>Order Reference</div>
              <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--navy)", wordBreak: "break-all" }}>{receipt.reference}</div>
            </div>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>Date</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--body)" }}>{receipt.date}</div>
            </div>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>Delivery To</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--body)" }}>{receipt.form.city}, {receipt.form.state}</div>
            </div>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "3px" }}>Status</div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", padding: "3px 10px", borderRadius: "100px", background: "var(--success-light)", color: "var(--success)", fontSize: "12px", fontWeight: 700 }}>
                ✓ Paid
              </span>
            </div>
          </div>

          {/* Items */}
          <div style={{ marginBottom: "20px" }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>
              Items Ordered
            </div>
            {receipt.items.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: "1px solid var(--fog)",
                  fontSize: "14px",
                  gap: "12px",
                }}
              >
                <span style={{ color: "var(--body)" }}>
                  <span style={{ color: "var(--muted)", marginRight: "6px" }}>×{item.quantity}</span>
                  {item.brand} {item.name}
                </span>
                <span style={{ fontWeight: 700, color: "var(--navy)", flexShrink: 0 }}>
                  {fmt(item.unitPrice * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div style={{ borderTop: "2px solid var(--fog)", paddingTop: "16px", marginBottom: "28px" }}>
            {[
              { label: "Subtotal", value: fmt(receipt.subtotal) },
              { label: "Delivery Fee", value: fmt(receipt.deliveryFee) },
            ].map((r) => (
              <div key={r.label} style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px", fontSize: "14px" }}>
                <span style={{ color: "var(--muted)" }}>{r.label}</span>
                <span style={{ fontWeight: 600 }}>{r.value}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "16px", color: "var(--navy)" }}>Total Paid</span>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "20px", color: "var(--accent)" }}>{fmt(receipt.total)}</span>
            </div>
          </div>

          {/* Actions */}
          <button
            onClick={onDownload}
            disabled={downloading}
            className="btn btn-primary"
            style={{ width: "100%", padding: "15px", fontSize: "15px", marginBottom: "12px", opacity: downloading ? 0.75 : 1 }}
          >
            {downloading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                <Spinner /> Generating PDF…
              </span>
            ) : (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Order Receipt (PDF)
              </span>
            )}
          </button>

          <Link
            href="/shop"
            className="btn btn-outline-dark"
            style={{ width: "100%", padding: "13px", fontSize: "14px", textAlign: "center", display: "block" }}
          >
            Continue Shopping
          </Link>

          <p style={{ fontSize: "12px", color: "var(--muted)", textAlign: "center", marginTop: "16px", lineHeight: 1.6 }}>
            A confirmation email will be sent to <strong>{receipt.form.email}</strong>.<br />
            Our team will contact you to confirm delivery details.
          </p>
        </div>
      </div>
    </div>
  );
}
