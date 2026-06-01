"use client";

import { useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    PaystackPop: {
      setup: (config: Record<string, unknown>) => { openIframe: () => void };
    };
  }
}

const SERVICE_CATEGORIES = [
  "Software Development",
  "Web & Mobile App Development",
  "IT Consultancy",
  "Hardware & Accessories",
  "General Payment",
  "Others",
];

interface PaymentForm {
  name: string;
  email: string;
  phone: string;
  category: string;
  otherCategory: string;
  purpose: string;
  amount: string;
}

interface ReceiptData {
  reference: string;
  name: string;
  email: string;
  phone: string;
  category: string;
  purpose: string;
  amount: number;
  date: string;
}

type Stage = "form" | "processing" | "success";

function formatNaira(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
  }).format(amount);
}

function generateReceiptPDF(data: ReceiptData) {
  import("jspdf").then(({ default: jsPDF }) => {
    const doc = new jsPDF({ unit: "mm", format: "a4" });
    const W = 210;
    const pad = 20;

    // Navy header band
    doc.setFillColor(10, 22, 40);
    doc.rect(0, 0, W, 48, "F");

    // Accent stripe
    doc.setFillColor(26, 86, 232);
    doc.rect(0, 48, W, 3, "F");

    // Brand mark
    doc.setFillColor(26, 86, 232);
    doc.roundedRect(pad, 14, 18, 18, 3, 3, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.setTextColor(255, 255, 255);
    doc.text("M", pad + 5.5, 26.5);

    // Company name
    doc.setFontSize(13);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text("MARVEL TECHNOLOGICAL INNOVATIONS LTD", pad + 24, 22);
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(150, 180, 220);
    doc.text("www.marveltechinnovations.com  ·  info@marveltechinnovations.com", pad + 24, 29);

    // Receipt title (right-aligned in header)
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(245, 166, 35);
    doc.text("PAYMENT RECEIPT", W - pad, 22, { align: "right" });
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(150, 180, 220);
    doc.text(`REF: ${data.reference}`, W - pad, 29, { align: "right" });

    // Summary block — grey background
    doc.setFillColor(248, 250, 252);
    doc.rect(pad, 60, W - pad * 2, 28, "F");
    doc.setDrawColor(229, 231, 235);
    doc.rect(pad, 60, W - pad * 2, 28);

    // Amount
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(107, 114, 128);
    doc.text("AMOUNT PAID", pad + 6, 70);
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(10, 22, 40);
    doc.text(formatNaira(data.amount), pad + 6, 83);

    // Status badge (right side of summary block)
    doc.setFillColor(220, 252, 231);
    doc.roundedRect(W - pad - 46, 65, 40, 14, 3, 3, "F");
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(22, 163, 74);
    doc.text("✓  SUCCESSFUL", W - pad - 43, 73.5);

    // Section: Payment Details
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
      doc.setTextColor(17, 24, 39);
      doc.setFont("helvetica", "bold");
      doc.text(value, pad + 55, yPos);
    };

    sectionTitle("Payment Details", y);
    y += 10;
    row("Transaction Reference", data.reference, y);
    y += 8;
    row("Date & Time", data.date, y);
    y += 8;
    row("Payment Method", "Paystack (Card / Bank Transfer)", y);
    y += 8;
    row("Currency", "Nigerian Naira (NGN)", y);
    y += 8;
    row("Status", "Successful", y);

    y += 18;
    sectionTitle("Customer Details", y);
    y += 10;
    row("Full Name", data.name, y);
    y += 8;
    row("Email Address", data.email, y);
    if (data.phone) {
      y += 8;
      row("Phone Number", data.phone, y);
    }

    y += 18;
    sectionTitle("Service Information", y);
    y += 10;
    row("Service Category", data.category, y);
    y += 8;

    // Purpose may wrap
    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(107, 114, 128);
    doc.text("Purpose of Payment", pad, y);
    doc.setTextColor(17, 24, 39);
    doc.setFont("helvetica", "bold");
    const wrappedPurpose = doc.splitTextToSize(data.purpose, W - pad - (pad + 55));
    doc.text(wrappedPurpose, pad + 55, y);
    y += wrappedPurpose.length * 6;

    // Footer band
    const footerY = 272;
    doc.setFillColor(10, 22, 40);
    doc.rect(0, footerY, W, 25, "F");
    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(150, 180, 220);
    doc.text("This is a computer-generated receipt. No signature is required.", W / 2, footerY + 8, { align: "center" });
    doc.text("For queries, contact us at info@marveltechinnovations.com", W / 2, footerY + 14, { align: "center" });
    doc.setTextColor(245, 166, 35);
    doc.setFont("helvetica", "bold");
    doc.text("Marvel Technological Innovations Limited", W / 2, footerY + 21, { align: "center" });

    doc.save(`Marvel_Tech_Receipt_${data.reference}.pdf`);
  });
}

export default function PayPage() {
  const [stage, setStage] = useState<Stage>("form");
  const [receipt, setReceipt] = useState<ReceiptData | null>(null);
  const [paystackReady, setPaystackReady] = useState(false);
  const [form, setForm] = useState<PaymentForm>({
    name: "",
    email: "",
    phone: "",
    category: "",
    otherCategory: "",
    purpose: "",
    amount: "",
  });
  const [errors, setErrors] = useState<Partial<PaymentForm>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof PaymentForm]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<PaymentForm> = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Enter a valid email address";
    if (!form.category) newErrors.category = "Please select a service category";
    if (form.category === "Others" && !form.otherCategory.trim())
      newErrors.otherCategory = "Please describe the service";
    if (!form.purpose.trim()) newErrors.purpose = "Purpose of payment is required";
    if (!form.amount.trim()) newErrors.amount = "Amount is required";
    else if (isNaN(Number(form.amount)) || Number(form.amount) <= 0)
      newErrors.amount = "Enter a valid amount greater than 0";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (!paystackReady) {
      alert("Payment gateway is still loading. Please wait a moment and try again.");
      return;
    }

    const resolvedCategory =
      form.category === "Others" ? form.otherCategory : form.category;
    const reference = `MRVEL-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    const amountKobo = Math.round(Number(form.amount) * 100);

    setStage("processing");

    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "",
      email: form.email,
      amount: amountKobo,
      currency: "NGN",
      ref: reference,
      metadata: {
        custom_fields: [
          { display_name: "Customer Name", variable_name: "customer_name", value: form.name },
          { display_name: "Purpose", variable_name: "purpose", value: form.purpose },
          { display_name: "Category", variable_name: "category", value: resolvedCategory },
        ],
      },
      callback: (response: { reference: string }) => {
        const receiptData: ReceiptData = {
          reference: response.reference,
          name: form.name,
          email: form.email,
          phone: form.phone,
          category: resolvedCategory,
          purpose: form.purpose,
          amount: Number(form.amount),
          date: new Date().toLocaleString("en-NG", {
            dateStyle: "long",
            timeStyle: "short",
          }),
        };
        setReceipt(receiptData);
        setStage("success");
      },
      onClose: () => {
        setStage("form");
      },
    });

    handler.openIframe();
  };

  return (
    <>
      <Script
        src="https://js.paystack.co/v1/inline.js"
        strategy="afterInteractive"
        onReady={() => setPaystackReady(true)}
      />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="eyebrow-gold fade-in-up" style={{ marginBottom: "16px" }}>
            Secure Payments
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
            Make a Payment
          </h1>
          <p
            className="fade-in-up delay-2"
            style={{
              fontSize: "17px",
              color: "rgba(255,255,255,0.65)",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Pay securely for any Marvel Tech service. All transactions are processed
            via Paystack and you&apos;ll receive a downloadable PDF receipt.
          </p>
        </div>
      </section>

      {/* Trust badges */}
      <section
        style={{
          background: "var(--navy)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "16px 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {[
              { icon: "🔒", label: "SSL Encrypted" },
              { icon: "🏦", label: "Paystack Secured" },
              { icon: "📄", label: "Instant Receipt" },
              { icon: "✅", label: "Verified Business" },
            ].map((b) => (
              <div
                key={b.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                <span style={{ fontSize: "16px" }}>{b.icon}</span>
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: "48px",
              alignItems: "start",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
            className="pay-grid"
          >
            {/* Left — Info sidebar */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Services list */}
              <div
                style={{
                  background: "var(--navy)",
                  borderRadius: "16px",
                  padding: "32px",
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
                    pointerEvents: "none",
                  }}
                />
                <div
                  className="eyebrow-gold"
                  style={{ marginBottom: "18px", position: "relative", zIndex: 1 }}
                >
                  What You Can Pay For
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {[
                    { icon: "💻", label: "Software Development", desc: "Custom apps & systems" },
                    { icon: "📱", label: "Web & Mobile Apps", desc: "Websites & app projects" },
                    { icon: "🎯", label: "IT Consultancy", desc: "Strategy & advisory" },
                    { icon: "🖥️", label: "Hardware & Accessories", desc: "Devices & components" },
                    { icon: "💳", label: "General / Others", desc: "Any other payment" },
                  ].map((s) => (
                    <div
                      key={s.label}
                      style={{ display: "flex", gap: "12px", alignItems: "center" }}
                    >
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          background: "rgba(26,86,232,0.2)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "16px",
                          flexShrink: 0,
                        }}
                      >
                        {s.icon}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "13px",
                            fontWeight: 600,
                            color: "white",
                            lineHeight: 1.2,
                          }}
                        >
                          {s.label}
                        </div>
                        <div
                          style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)" }}
                        >
                          {s.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment security note */}
              <div
                style={{
                  background: "white",
                  border: "1px solid var(--fog)",
                  borderRadius: "12px",
                  padding: "20px 24px",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    alignItems: "flex-start",
                    marginBottom: "14px",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: "var(--accent-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      flexShrink: 0,
                    }}
                  >
                    🔒
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "var(--navy)",
                        marginBottom: "4px",
                      }}
                    >
                      Secured by Paystack
                    </div>
                    <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: 1.6 }}>
                      Your payment is protected by 256-bit SSL encryption. We never store your card details.
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    borderTop: "1px solid var(--fog)",
                    paddingTop: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    Questions? Contact us at{" "}
                    <a
                      href="mailto:info@marveltechinnovations.com"
                      style={{ color: "var(--accent)", fontWeight: 600 }}
                    >
                      info@marveltechinnovations.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form / Success */}
            <div
              style={{
                background: "white",
                border: "1px solid var(--fog)",
                borderRadius: "16px",
                padding: "40px",
                boxShadow: "var(--shadow)",
              }}
            >
              {stage === "success" && receipt ? (
                <SuccessView receipt={receipt} onNewPayment={() => { setStage("form"); setReceipt(null); setForm({ name: "", email: "", phone: "", category: "", otherCategory: "", purpose: "", amount: "" }); }} />
              ) : (
                <>
                  <h2
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: "6px",
                    }}
                  >
                    Payment Details
                  </h2>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--muted)",
                      marginBottom: "28px",
                      lineHeight: 1.6,
                    }}
                  >
                    Fill in your details below and proceed to pay securely via Paystack.
                  </p>

                  <form onSubmit={handleSubmit} noValidate>
                    {/* Name + Email */}
                    <div className="pay-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">
                          Full Name <span style={{ color: "var(--error)" }}>*</span>
                        </label>
                        <input
                          className="form-input"
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Chidi Okafor"
                          style={errors.name ? { borderColor: "var(--error)" } : {}}
                        />
                        {errors.name && <FieldError msg={errors.name} />}
                      </div>
                      <div className="form-group" style={{ marginBottom: 0 }}>
                        <label className="form-label">
                          Email Address <span style={{ color: "var(--error)" }}>*</span>
                        </label>
                        <input
                          className="form-input"
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="chidi@company.com"
                          style={errors.email ? { borderColor: "var(--error)" } : {}}
                        />
                        {errors.email && <FieldError msg={errors.email} />}
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="form-group">
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

                    {/* Category */}
                    <div className="form-group">
                      <label className="form-label">
                        Service Category <span style={{ color: "var(--error)" }}>*</span>
                      </label>
                      <select
                        className="form-select"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        style={errors.category ? { borderColor: "var(--error)" } : {}}
                      >
                        <option value="">Select a category...</option>
                        {SERVICE_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                      {errors.category && <FieldError msg={errors.category} />}
                    </div>

                    {/* Other category input */}
                    {form.category === "Others" && (
                      <div className="form-group">
                        <label className="form-label">
                          Please specify <span style={{ color: "var(--error)" }}>*</span>
                        </label>
                        <input
                          className="form-input"
                          type="text"
                          name="otherCategory"
                          value={form.otherCategory}
                          onChange={handleChange}
                          placeholder="Describe the service or reason..."
                          style={errors.otherCategory ? { borderColor: "var(--error)" } : {}}
                        />
                        {errors.otherCategory && <FieldError msg={errors.otherCategory} />}
                      </div>
                    )}

                    {/* Purpose */}
                    <div className="form-group">
                      <label className="form-label">
                        Purpose of Payment <span style={{ color: "var(--error)" }}>*</span>
                      </label>
                      <textarea
                        className="form-textarea"
                        name="purpose"
                        value={form.purpose}
                        onChange={handleChange}
                        placeholder="Briefly describe what this payment is for, e.g. 'Deposit for e-commerce website development project'"
                        style={{
                          minHeight: "100px",
                          ...(errors.purpose ? { borderColor: "var(--error)" } : {}),
                        }}
                      />
                      {errors.purpose && <FieldError msg={errors.purpose} />}
                    </div>

                    {/* Amount */}
                    <div className="form-group">
                      <label className="form-label">
                        Amount (NGN) <span style={{ color: "var(--error)" }}>*</span>
                      </label>
                      <div style={{ position: "relative" }}>
                        <span
                          style={{
                            position: "absolute",
                            left: "14px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            fontSize: "15px",
                            fontWeight: 600,
                            color: "var(--muted)",
                            pointerEvents: "none",
                          }}
                        >
                          ₦
                        </span>
                        <input
                          className="form-input"
                          type="number"
                          name="amount"
                          value={form.amount}
                          onChange={handleChange}
                          placeholder="0.00"
                          min="1"
                          step="0.01"
                          style={{
                            paddingLeft: "30px",
                            ...(errors.amount ? { borderColor: "var(--error)" } : {}),
                          }}
                        />
                      </div>
                      {errors.amount && <FieldError msg={errors.amount} />}
                      {form.amount && !isNaN(Number(form.amount)) && Number(form.amount) > 0 && (
                        <div
                          style={{
                            marginTop: "6px",
                            fontSize: "12px",
                            color: "var(--accent)",
                            fontWeight: 600,
                          }}
                        >
                          You will be charged: {formatNaira(Number(form.amount))}
                        </div>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={stage === "processing"}
                      style={{
                        width: "100%",
                        padding: "15px",
                        fontSize: "16px",
                        opacity: stage === "processing" ? 0.7 : 1,
                        cursor: stage === "processing" ? "not-allowed" : "pointer",
                      }}
                    >
                      {stage === "processing" ? (
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                          <Spinner />
                          Opening Payment Gateway…
                        </span>
                      ) : (
                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                            <line x1="1" y1="10" x2="23" y2="10" />
                          </svg>
                          Proceed to Payment
                        </span>
                      )}
                    </button>

                    <p
                      style={{
                        fontSize: "12px",
                        color: "var(--muted)",
                        textAlign: "center",
                        marginTop: "12px",
                        lineHeight: 1.6,
                      }}
                    >
                      By proceeding, you agree that this payment is for a Marvel Tech service.
                      A receipt will be available for download after payment.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .pay-grid { grid-template-columns: 1fr !important; }
            .pay-row { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}

function FieldError({ msg }: { msg: string }) {
  return (
    <p
      style={{
        fontSize: "12px",
        color: "var(--error)",
        marginTop: "5px",
        display: "flex",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
      {msg}
    </p>
  );
}

function Spinner() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      style={{ animation: "spin 0.8s linear infinite" }}
    >
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}

function SuccessView({
  receipt,
  onNewPayment,
}: {
  receipt: ReceiptData;
  onNewPayment: () => void;
}) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    generateReceiptPDF(receipt);
    setTimeout(() => setDownloading(false), 1500);
  };

  return (
    <div>
      {/* Success icon */}
      <div style={{ textAlign: "center", marginBottom: "28px" }}>
        <div
          style={{
            width: "72px",
            height: "72px",
            background: "var(--success-light)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 16px",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "24px",
            fontWeight: 800,
            color: "var(--navy)",
            marginBottom: "8px",
          }}
        >
          Payment Successful!
        </h2>
        <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6 }}>
          Your payment has been confirmed. Download your receipt below.
        </p>
      </div>

      {/* Receipt summary card */}
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--fog)",
          borderRadius: "12px",
          padding: "24px",
          marginBottom: "24px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
            paddingBottom: "16px",
            borderBottom: "1px solid var(--fog)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "16px",
              fontWeight: 700,
              color: "var(--navy)",
            }}
          >
            Receipt Summary
          </span>
          <span
            style={{
              background: "var(--success-light)",
              color: "var(--success)",
              fontSize: "12px",
              fontWeight: 700,
              padding: "4px 12px",
              borderRadius: "100px",
            }}
          >
            ✓ Paid
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {[
            { label: "Reference", value: receipt.reference },
            { label: "Name", value: receipt.name },
            { label: "Email", value: receipt.email },
            { label: "Category", value: receipt.category },
            { label: "Date", value: receipt.date },
          ].map((row) => (
            <div
              key={row.label}
              style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}
            >
              <span style={{ fontSize: "13px", color: "var(--muted)", fontWeight: 500, flexShrink: 0 }}>
                {row.label}
              </span>
              <span
                style={{
                  fontSize: "13px",
                  color: "var(--body)",
                  fontWeight: 600,
                  textAlign: "right",
                  wordBreak: "break-all",
                }}
              >
                {row.value}
              </span>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "10px",
              borderTop: "1px solid var(--fog)",
              marginTop: "4px",
            }}
          >
            <span style={{ fontSize: "14px", color: "var(--navy)", fontWeight: 700 }}>
              Amount Paid
            </span>
            <span
              style={{
                fontSize: "18px",
                color: "var(--accent)",
                fontWeight: 800,
                fontFamily: "var(--font-heading)",
              }}
            >
              {formatNaira(receipt.amount)}
            </span>
          </div>
        </div>
      </div>

      {/* Download button */}
      <button
        onClick={handleDownload}
        disabled={downloading}
        className="btn btn-primary"
        style={{
          width: "100%",
          padding: "15px",
          fontSize: "16px",
          marginBottom: "12px",
          opacity: downloading ? 0.75 : 1,
        }}
      >
        {downloading ? (
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <Spinner />
            Generating PDF…
          </span>
        ) : (
          <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF Receipt
          </span>
        )}
      </button>

      <button
        onClick={onNewPayment}
        className="btn btn-outline-dark"
        style={{ width: "100%", padding: "13px", fontSize: "15px" }}
      >
        Make Another Payment
      </button>
    </div>
  );
}
