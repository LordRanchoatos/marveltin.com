export type Category =
  | "laptops"
  | "phones"
  | "networking"
  | "peripherals"
  | "ai-hardware";

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  originalPrice?: number;
  description: string;
  specs: string[];
  badge?: "New" | "Hot" | "Sale" | "Low Stock";
  inStock: boolean;
  emoji: string;
  bgColor: string;
  rating: number;
  reviews: number;
}

export const CATEGORIES: { id: Category | "all"; label: string; icon: string }[] = [
  { id: "all", label: "All Products", icon: "🏪" },
  { id: "laptops", label: "Laptops & Computers", icon: "💻" },
  { id: "phones", label: "Phones & Tablets", icon: "📱" },
  { id: "networking", label: "Networking & Servers", icon: "🌐" },
  { id: "peripherals", label: "Peripherals & Accessories", icon: "🖱️" },
  { id: "ai-hardware", label: "AI & Specialist Hardware", icon: "🤖" },
];

export const PRODUCTS: Product[] = [
  // ── LAPTOPS & COMPUTERS ────────────────────────────────────────────
  {
    id: "dell-xps-15-9530",
    name: "Dell XPS 15 9530",
    brand: "Dell",
    category: "laptops",
    price: 1150000,
    description:
      "Premium 15.6″ OLED ultrabook for professionals. Stunning display meets powerhouse performance.",
    specs: ['15.6" 3.5K OLED 120Hz', "Core i7-13700H + RTX 4060", "32GB DDR5 / 1TB NVMe"],
    badge: "Hot",
    inStock: true,
    emoji: "💻",
    bgColor: "#0A1628",
    rating: 4.8,
    reviews: 47,
  },
  {
    id: "hp-elitebook-840-g10",
    name: "HP EliteBook 840 G10",
    brand: "HP",
    category: "laptops",
    price: 580000,
    description:
      "Business-class laptop built for security, durability, and productivity in demanding environments.",
    specs: ['14" FHD IPS Anti-Glare', "Core i5-1345U", "16GB DDR5 / 512GB SSD"],
    inStock: true,
    emoji: "🖥️",
    bgColor: "#003087",
    rating: 4.6,
    reviews: 32,
  },
  {
    id: "lenovo-thinkpad-x1-carbon",
    name: "ThinkPad X1 Carbon Gen 11",
    brand: "Lenovo",
    category: "laptops",
    price: 720000,
    originalPrice: 850000,
    description:
      "Iconic ultralight ThinkPad — legendary keyboard, all-day battery, enterprise-grade security.",
    specs: ['14" 2.8K OLED 120Hz', "Core i7-1365U", "16GB LPDDR5 / 1TB SSD"],
    badge: "Sale",
    inStock: true,
    emoji: "⌨️",
    bgColor: "#111827",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "apple-macbook-air-m2",
    name: "MacBook Air 15″ (M2)",
    brand: "Apple",
    category: "laptops",
    price: 950000,
    description:
      "Supercharged by M2. Remarkably thin with massive performance and all-day battery.",
    specs: ['15.3" Liquid Retina', "Apple M2 (8-core CPU)", "8GB Unified / 256GB SSD"],
    badge: "New",
    inStock: true,
    emoji: "🍎",
    bgColor: "#374151",
    rating: 4.9,
    reviews: 124,
  },
  {
    id: "acer-swift-3",
    name: "Acer Swift 3 (SF314-56)",
    brand: "Acer",
    category: "laptops",
    price: 265000,
    description:
      "Slim, powerful, and affordable — the everyday laptop for students and professionals on a budget.",
    specs: ['14" FHD IPS Display', "Core i5-1235U", "8GB LPDDR4X / 512GB SSD"],
    inStock: true,
    emoji: "💼",
    bgColor: "#1E4D9A",
    rating: 4.4,
    reviews: 56,
  },

  // ── PHONES & TABLETS ───────────────────────────────────────────────
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro (256GB)",
    brand: "Apple",
    category: "phones",
    price: 860000,
    description:
      "Titanium design. A17 Pro chip. Pro camera system with 5× optical zoom.",
    specs: ['6.1" Super Retina XDR', "A17 Pro + 5× Optical Zoom", "USB-C 3.0 / 256GB"],
    badge: "Hot",
    inStock: true,
    emoji: "📱",
    bgColor: "#1C1C1E",
    rating: 4.9,
    reviews: 203,
  },
  {
    id: "samsung-galaxy-s24-ultra",
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    category: "phones",
    price: 740000,
    description:
      "Galaxy AI + titanium build + built-in S Pen. 200MP camera, Snapdragon 8 Gen 3.",
    specs: ['6.8" QHD+ Dynamic AMOLED', "200MP camera / 12GB RAM", "S Pen Included"],
    badge: "Hot",
    inStock: true,
    emoji: "✏️",
    bgColor: "#1A1A2E",
    rating: 4.8,
    reviews: 178,
  },
  {
    id: "samsung-galaxy-tab-s9-fe",
    name: "Galaxy Tab S9 FE + S Pen",
    brand: "Samsung",
    category: "phones",
    price: 320000,
    description:
      "Fan Edition tablet with large display, included S Pen, and all-day battery for work and creativity.",
    specs: ['10.9" TFT LCD 90Hz', "Exynos 1380 / 8GB RAM", "S Pen + 10,090 mAh"],
    inStock: true,
    emoji: "📟",
    bgColor: "#0F3460",
    rating: 4.5,
    reviews: 67,
  },
  {
    id: "ipad-air-m2",
    name: "iPad Air 11-inch (M2)",
    brand: "Apple",
    category: "phones",
    price: 590000,
    description:
      "Serious performance. Stunning display. Thin and light — supercharged by the M2 chip.",
    specs: ['11" Liquid Retina 500 nits', "Apple M2 / 8GB RAM", "USB-C 10Gbps / Apple Pencil Pro"],
    badge: "New",
    inStock: true,
    emoji: "📲",
    bgColor: "#1A4060",
    rating: 4.8,
    reviews: 91,
  },
  {
    id: "xiaomi-redmi-note-13-pro-plus",
    name: "Xiaomi Redmi Note 13 Pro+",
    brand: "Xiaomi",
    category: "phones",
    price: 195000,
    description:
      "200MP camera, 120W HyperCharge, AMOLED display — flagship features at a fraction of the cost.",
    specs: ['6.67" AMOLED 120Hz', "200MP + Snapdragon 7s Gen 2", "120W fast charging / 12GB"],
    inStock: true,
    emoji: "🔴",
    bgColor: "#8B0000",
    rating: 4.6,
    reviews: 45,
  },

  // ── NETWORKING & SERVERS ───────────────────────────────────────────
  {
    id: "ubiquiti-udm-pro",
    name: "UniFi Dream Machine Pro",
    brand: "Ubiquiti",
    category: "networking",
    price: 525000,
    description:
      "All-in-one: security gateway, 10G SFP+, 8-port PoE switch, and NVR recorder in 1U rack.",
    specs: ["10G SFP+ WAN / 8x PoE LAN", "Built-in IDS/IPS", "3.5″ HDD Bay (NVR)"],
    inStock: true,
    emoji: "🔷",
    bgColor: "#00558A",
    rating: 4.7,
    reviews: 29,
  },
  {
    id: "mikrotik-crs326",
    name: "MikroTik CRS326-24G-2S+RM",
    brand: "MikroTik",
    category: "networking",
    price: 185000,
    description:
      "Rack-mount managed 24-port Gigabit switch with dual 10G SFP+ uplinks. RouterOS v7 or SwitchOS.",
    specs: ["24x GbE + 2x 10G SFP+", "RouterOS v7 / SwitchOS", "88 Gbps switching capacity"],
    inStock: true,
    emoji: "🔌",
    bgColor: "#1A3050",
    rating: 4.6,
    reviews: 18,
  },
  {
    id: "qnap-ts-464",
    name: "QNAP TS-464 NAS (4-Bay)",
    brand: "QNAP",
    category: "networking",
    price: 460000,
    description:
      "High-performance 4-bay NAS with PCIe Gen 3, dual 2.5GbE, and M.2 NVMe SSD cache slots.",
    specs: ["Intel Celeron N5095 / 8GB", "4x SATA + 2x M.2 NVMe", "2x 2.5GbE + PCIe Gen 3"],
    badge: "New",
    inStock: true,
    emoji: "🗄️",
    bgColor: "#0D4F4F",
    rating: 4.8,
    reviews: 14,
  },
  {
    id: "tp-link-archer-axe75",
    name: "TP-Link Archer AXE75 WiFi 6E",
    brand: "TP-Link",
    category: "networking",
    price: 98000,
    description:
      "Tri-band WiFi 6E router with 6 GHz band for ultra-low latency and maximum throughput.",
    specs: ["WiFi 6E / 6 + 5 + 2.4 GHz", "Up to 7207 Mbps total", "4x Gigabit LAN + USB 3.0"],
    inStock: true,
    emoji: "📡",
    bgColor: "#00692C",
    rating: 4.5,
    reviews: 38,
  },
  {
    id: "dell-poweredge-t150",
    name: "Dell PowerEdge T150 Tower Server",
    brand: "Dell",
    category: "networking",
    price: 780000,
    description:
      "Entry-level tower server ideal for small businesses. iDRAC9 remote management included.",
    specs: ["Intel Xeon E-2314 (4-core)", "16GB ECC DDR4 RAM", "2x 1TB SATA HDD + RAID"],
    badge: "Low Stock",
    inStock: true,
    emoji: "🖧",
    bgColor: "#3D2B1F",
    rating: 4.5,
    reviews: 11,
  },

  // ── PERIPHERALS & ACCESSORIES ──────────────────────────────────────
  {
    id: "lg-ultrafine-27",
    name: 'LG UltraFine 27" 4K IPS Monitor',
    brand: "LG",
    category: "peripherals",
    price: 330000,
    description:
      "Factory-calibrated 4K IPS panel with HDR400, USB-C 96W power delivery, and ergonomic stand.",
    specs: ['27" 4K UHD 144Hz HDR400', "USB-C 96W Power Delivery", "HDMI 2.0 × 2 + DP 1.4"],
    inStock: true,
    emoji: "🖥️",
    bgColor: "#7B1113",
    rating: 4.7,
    reviews: 52,
  },
  {
    id: "logitech-mx-combo",
    name: "Logitech MX Keys S + MX Master 3S",
    brand: "Logitech",
    category: "peripherals",
    price: 88000,
    originalPrice: 105000,
    description:
      "The ultimate productivity combo. Quiet clicks, fast scrolling, and smart backlit keys.",
    specs: ["MX Keys S — backlit, low-profile", "MX Master 3S — silent 8K DPI", "Multi-device (3 devices)"],
    badge: "Sale",
    inStock: true,
    emoji: "🖱️",
    bgColor: "#333333",
    rating: 4.9,
    reviews: 88,
  },
  {
    id: "samsung-t9-ssd-2tb",
    name: "Samsung 2TB T9 Portable SSD",
    brand: "Samsung",
    category: "peripherals",
    price: 110000,
    description:
      "USB 3.2 Gen 2×2 speeds up to 2,000 MB/s. Rugged pocket-sized external SSD for professionals.",
    specs: ["2TB / up to 2,000 MB/s", "USB 3.2 Gen 2×2", "IP65 dust & water resistant"],
    inStock: true,
    emoji: "💾",
    bgColor: "#003153",
    rating: 4.8,
    reviews: 61,
  },
  {
    id: "sony-wh-1000xm5",
    name: "Sony WH-1000XM5 Headphones",
    brand: "Sony",
    category: "peripherals",
    price: 120000,
    description:
      "Industry-leading noise cancellation with 30-hr battery and crystal-clear call quality.",
    specs: ["Industry-leading ANC", "30-hour battery / Quick Charge", "Multi-device + Speak-to-Chat"],
    badge: "Hot",
    inStock: true,
    emoji: "🎧",
    bgColor: "#1A1A1A",
    rating: 4.9,
    reviews: 134,
  },
  {
    id: "anker-usbc-dock",
    name: "Anker 13-in-1 USB-C Docking Station",
    brand: "Anker",
    category: "peripherals",
    price: 72000,
    description:
      "One cable, unlimited connectivity. Dual 4K HDMI, 10Gbps USB ports, SD cards, and 100W PD.",
    specs: ["2× HDMI 2.0 (4K@60Hz)", "100W USB-C Power Delivery", "3× USB-A + SD + Gigabit LAN"],
    inStock: true,
    emoji: "🔗",
    bgColor: "#8B0000",
    rating: 4.6,
    reviews: 44,
  },

  // ── AI & SPECIALIST HARDWARE ───────────────────────────────────────
  {
    id: "nvidia-rtx-4080-super",
    name: "NVIDIA GeForce RTX 4080 SUPER",
    brand: "NVIDIA",
    category: "ai-hardware",
    price: 1850000,
    description:
      "Ada Lovelace architecture. DLSS 3, AI-accelerated rendering, and 16GB VRAM for AI workloads.",
    specs: ["10,240 CUDA Cores / 16GB GDDR6X", "DLSS 3 + Ada Lovelace", "PCIe 4.0 x16 / 320W TDP"],
    badge: "Hot",
    inStock: true,
    emoji: "🎮",
    bgColor: "#1A3A1A",
    rating: 4.9,
    reviews: 38,
  },
  {
    id: "nvidia-jetson-orin-nx",
    name: "NVIDIA Jetson Orin NX (16GB)",
    brand: "NVIDIA",
    category: "ai-hardware",
    price: 385000,
    description:
      "Up to 100 TOPS AI performance. The most powerful compact AI module for edge deployments.",
    specs: ["Up to 100 TOPS AI performance", "8-core Arm A78AE + 1024 CUDA", "16GB LPDDR5 / Industrial grade"],
    badge: "New",
    inStock: true,
    emoji: "🤖",
    bgColor: "#1A3A1A",
    rating: 4.8,
    reviews: 12,
  },
  {
    id: "intel-core-i9-14900k",
    name: "Intel Core i9-14900K Processor",
    brand: "Intel",
    category: "ai-hardware",
    price: 465000,
    description:
      "24 cores (8P + 16E), 5.6 GHz max boost — extreme gaming and creative workstation power.",
    specs: ["24 Cores / 32 Threads", "Up to 5.6 GHz boost clock", "36MB L3 Cache / LGA 1700"],
    inStock: true,
    emoji: "⚡",
    bgColor: "#003366",
    rating: 4.7,
    reviews: 29,
  },
  {
    id: "raspberry-pi-5-kit",
    name: "Raspberry Pi 5 (8GB) Starter Kit",
    brand: "Raspberry Pi",
    category: "ai-hardware",
    price: 98000,
    description:
      "The most powerful Pi ever — 2-3× faster than Pi 4. Complete kit with cooler, PSU, and case.",
    specs: ["BCM2712 Quad-core A76 @ 2.4GHz", "8GB LPDDR4X / Dual 4K HDMI", "PCIe Gen 2 + Active Cooler"],
    inStock: true,
    emoji: "🍓",
    bgColor: "#8B0000",
    rating: 4.8,
    reviews: 57,
  },
  {
    id: "coral-usb-accelerator",
    name: "Google Coral USB Edge TPU",
    brand: "Google",
    category: "ai-hardware",
    price: 68000,
    originalPrice: 80000,
    description:
      "Add ML inferencing to any Linux system via USB. 4 TOPS performance, plug-and-play Edge TPU.",
    specs: ["4 TOPS (int8) Edge TPU", "USB 3.0 SuperSpeed", "TensorFlow Lite compatible"],
    badge: "Sale",
    inStock: true,
    emoji: "🔵",
    bgColor: "#1565C0",
    rating: 4.5,
    reviews: 23,
  },
];
