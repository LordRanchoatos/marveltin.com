// Re-exports from the shop cart so non-shop components (e.g. Navbar) can access cart state
export { CartProvider, useCart } from "../shop/cart";
export type { CartItem } from "../shop/cart";
