"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import type { Product } from "./products";

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartCtx {
  items: CartItem[];
  addItem: (product: Product, qty?: number) => void;
  removeItem: (productId: string) => void;
  updateQty: (productId: string, qty: number) => void;
  clearCart: () => void;
  subtotal: number;
  itemCount: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const CartContext = createContext<CartCtx | null>(null);

export function useCart(): CartCtx {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

function fmt(n: number) {
  return "₦" + n.toLocaleString("en-NG");
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem("marvel-shop-cart");
      if (saved) setItems(JSON.parse(saved));
    } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("marvel-shop-cart", JSON.stringify(items));
  }, [items, mounted]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const addItem = useCallback((product: Product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...prev, { product, quantity: qty }];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== id));
  }, []);

  const updateQty = useCallback(
    (id: string, qty: number) => {
      if (qty < 1) { removeItem(id); return; }
      setItems((prev) =>
        prev.map((i) => (i.product.id === id ? { ...i, quantity: qty } : i))
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => setItems([]), []);

  const subtotal = items.reduce((s, i) => s + i.product.price * i.quantity, 0);
  const itemCount = items.reduce((s, i) => s + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items, addItem, removeItem, updateQty, clearCart,
        subtotal, itemCount,
        isOpen,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
      }}
    >
      {children}

      {/* Backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(10,22,40,0.5)",
          zIndex: 998,
          backdropFilter: "blur(2px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "all" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Drawer */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100dvh",
          width: "min(420px, 100vw)",
          background: "white",
          zIndex: 999,
          boxShadow: "-4px 0 48px rgba(10,22,40,0.22)",
          display: "flex",
          flexDirection: "column",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Drawer header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 24px",
            background: "var(--navy)",
            flexShrink: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "20px" }}>🛒</span>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "16px",
                  color: "white",
                }}
              >
                Shopping Cart
              </div>
              {itemCount > 0 && (
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "1px" }}>
                  {itemCount} item{itemCount !== 1 ? "s" : ""}
                </div>
              )}
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "none",
              color: "white",
              width: "32px",
              height: "32px",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              lineHeight: 1,
            }}
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {/* Drawer body */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          {items.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                padding: "48px 32px",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "60px", marginBottom: "16px" }}>🛒</div>
              <h3
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: "8px",
                }}
              >
                Your cart is empty
              </h3>
              <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: 1.6, marginBottom: "24px" }}>
                Add products to your cart and they&apos;ll appear here.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn btn-primary btn-sm"
              >
                Browse Products
              </button>
            </div>
          ) : (
            <div style={{ padding: "8px 16px" }}>
              {items.map((item) => (
                <CartRow
                  key={item.product.id}
                  item={item}
                  onRemove={() => removeItem(item.product.id)}
                  onQty={(qty) => updateQty(item.product.id, qty)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Drawer footer */}
        {items.length > 0 && (
          <div
            style={{
              padding: "20px 24px",
              borderTop: "1px solid var(--fog)",
              background: "var(--surface)",
              flexShrink: 0,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span style={{ fontSize: "14px", color: "var(--muted)" }}>Subtotal</span>
              <span style={{ fontSize: "14px", fontWeight: 600 }}>{fmt(subtotal)}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "14px" }}>
              <span style={{ fontSize: "13px", color: "var(--muted)" }}>Delivery</span>
              <span style={{ fontSize: "13px", color: "var(--muted)" }}>₦5,000 flat rate</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "12px",
                borderTop: "1px solid var(--fog)",
                marginBottom: "18px",
              }}
            >
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "16px", color: "var(--navy)" }}>
                Total
              </span>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "18px", color: "var(--accent)" }}>
                {fmt(subtotal + 5000)}
              </span>
            </div>
            <button
              className="btn btn-primary"
              style={{ width: "100%", padding: "14px", fontSize: "15px" }}
              onClick={() => {
                setIsOpen(false);
                router.push("/shop/checkout");
              }}
            >
              Proceed to Checkout →
            </button>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "10px",
                background: "none",
                border: "none",
                color: "var(--muted)",
                fontSize: "13px",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
              }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>

      {/* Floating cart button — only after hydration to avoid SSR mismatch */}
      {mounted && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label={`Open cart — ${itemCount} item${itemCount !== 1 ? "s" : ""}`}
          style={{
            position: "fixed",
            bottom: "28px",
            right: "96px",
            width: "52px",
            height: "52px",
            background: "var(--navy)",
            border: "2px solid rgba(255,255,255,0.12)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 500,
            boxShadow: "0 4px 20px rgba(10,22,40,0.35)",
            transition: "transform 0.2s, box-shadow 0.2s",
            fontSize: "20px",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.08)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
          }}
        >
          🛒
          {itemCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-4px",
                right: "-4px",
                minWidth: "20px",
                height: "20px",
                padding: "0 4px",
                background: "var(--accent)",
                borderRadius: "10px",
                fontSize: "11px",
                fontWeight: 700,
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-body)",
                border: "2px solid white",
                lineHeight: 1,
              }}
            >
              {itemCount > 99 ? "99+" : itemCount}
            </span>
          )}
        </button>
      )}
    </CartContext.Provider>
  );
}

function CartRow({
  item,
  onRemove,
  onQty,
}: {
  item: CartItem;
  onRemove: () => void;
  onQty: (qty: number) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        padding: "14px 0",
        borderBottom: "1px solid var(--fog)",
        alignItems: "flex-start",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "10px",
          background: `linear-gradient(135deg, ${item.product.bgColor} 0%, ${item.product.bgColor}bb 100%)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "26px",
          flexShrink: 0,
        }}
      >
        {item.product.emoji}
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: "10px",
            fontWeight: 700,
            color: "var(--accent)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "2px",
          }}
        >
          {item.product.brand}
        </div>
        <div
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "var(--navy)",
            lineHeight: 1.3,
            marginBottom: "10px",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {item.product.name}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Qty stepper */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid var(--fog)",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <QtyBtn onClick={() => onQty(item.quantity - 1)} label="−" />
            <span
              style={{
                width: "32px",
                textAlign: "center",
                fontSize: "13px",
                fontWeight: 600,
                color: "var(--navy)",
              }}
            >
              {item.quantity}
            </span>
            <QtyBtn onClick={() => onQty(item.quantity + 1)} label="+" />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "14px", fontWeight: 700, color: "var(--navy)" }}>
              {"₦" + (item.product.price * item.quantity).toLocaleString("en-NG")}
            </span>
            <button
              onClick={onRemove}
              title="Remove item"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--error)",
                display: "flex",
                alignItems: "center",
                padding: "4px",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function QtyBtn({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: "28px",
        height: "28px",
        border: "none",
        background: "var(--surface)",
        cursor: "pointer",
        fontSize: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--body)",
        flexShrink: 0,
      }}
    >
      {label}
    </button>
  );
}
