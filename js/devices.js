/* ============================================================
   SpecHub KE — Device catalog data
   Prices are approximate STARTING prices in Kenyan Shillings
   compiled from Kenyan retailers (Oct 2026).
   Images: GSMArena CDN / Price in Kenya / Gadget Kenya, with
   graceful fallback to brand artwork if a URL fails.
   ============================================================ */

const GSM = "https://fdn2.gsmarena.com/vv/bigpic/";
const pik = (id, file) =>
  `https://www.priceinkenya.com/_ipx/b_%23ffffff,f_png,q_75,fit_contain,s_600x600/pikapi/media/${id}/conversions/${file}`;
const gk = (fid) =>
  `https://cloud.appwrite.io/v1/storage/buckets/69022e4d0025f34f347c/files/${fid}/view?project=67f374e90029c28d02c5&mode=admin`;

const DEVICES = [
  /* ============================== APPLE ============================== */
  {
    id: "iphone-18-pro-max",
    name: "Apple iPhone 18 Pro Max",
    brand: "Apple",
    category: "Flagship",
    tags: ["New 2026", "5G", "eSIM"],
    released: "September 2026",
    releaseDate: "2026-09-19",
    price: 220000,
    priceNote: "KSh 220,000 (256GB eSIM) · KSh 240,000 (Nano+eSIM) · KSh 275,000 (512GB) · KSh 340,000 (1TB)",
    tagline: "Apple's newest flagship — 2nm A20 Pro chip, first-ever variable-aperture iPhone camera and a huge 5,391 mAh battery.",
    img: [pik(152743, "iphone-18-pro---pro-max-a-medium.webp"), pik(153139, "iphone-18-pro---pro-max-a-medium.webp")],
    highlights: {
      display: '6.9" LTPO OLED 120Hz',
      chip: "Apple A20 Pro (2nm)",
      battery: "5,391 mAh • 60W",
      camera: "Triple 48MP var. aperture"
    },
    specs: {
      "Display": [
        ["Size & type", '6.9" LTPO Super Retina XDR OLED'],
        ["Resolution", "1320 × 2868 pixels"],
        ["Refresh rate", "120Hz ProMotion, Always-On"],
        ["Protection", "Ceramic Shield"]
      ],
      "Performance": [
        ["Chipset", "Apple A20 Pro (2 nm) — 6-core CPU, 7-core GPU"],
        ["RAM", "12GB"],
        ["Storage", "256GB / 512GB / 1TB NVMe"],
        ["Expandable storage", "No"]
      ],
      "Cameras": [
        ["Main", "48MP, f/1.5–4.0 variable aperture, OIS"],
        ["Telephoto", "48MP f/2.8, optical zoom"],
        ["Ultrawide", "48MP f/2.2 + depth sensor"],
        ["Front", "18MP f/1.9 + depth sensor"],
        ["Video", "4K with spatial audio & video"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,391 mAh — largest ever in an iPhone"],
        ["Wired", "60W (PD 3.2)"],
        ["Wireless", "25W MagSafe / Qi2"]
      ],
      "Software & Design": [
        ["OS", "iOS 27 with Apple Intelligence"],
        ["Build", "Aluminum unibody, ceramic shield glass back"],
        ["Water resistance", "IP68 (6 m for 30 min)"],
        ["SIM", "Nano-SIM + eSIM, or eSIM only"]
      ],
      "Connectivity": [
        ["Network", "5G"],
        ["Wi-Fi", "Wi-Fi 7"],
        ["Bluetooth", "6.0"],
        ["Port", "USB-C"]
      ]
    }
  },
  {
    id: "iphone-18-pro",
    name: "Apple iPhone 18 Pro",
    brand: "Apple",
    category: "Flagship",
    tags: ["New 2026", "5G"],
    released: "September 2026",
    releaseDate: "2026-09-19",
    price: 210000,
    priceNote: "KSh 210,000 (256GB eSIM) · KSh 215,000 (Nano+eSIM) · KSh 260,000 (512GB)",
    tagline: "The compact Pro — same 2nm A20 Pro power and variable-aperture camera system in a smaller body.",
    img: [pik(152740, "iphone-18-pro---pro-max-b-medium.webp"), pik(153132, "iphone-18-pro---pro-max-b-medium.webp")],
    highlights: {
      display: '6.3" LTPO OLED 120Hz',
      chip: "Apple A20 Pro (2nm)",
      battery: "All-day battery • 60W",
      camera: "Triple 48MP var. aperture"
    },
    specs: {
      "Display": [
        ["Size & type", '6.3" LTPO Super Retina XDR OLED'],
        ["Refresh rate", "120Hz ProMotion, Always-On"]
      ],
      "Performance": [
        ["Chipset", "Apple A20 Pro (2 nm)"],
        ["RAM", "12GB"],
        ["Storage", "256GB / 512GB NVMe"]
      ],
      "Cameras": [
        ["Main", "48MP, f/1.5–4.0 variable aperture, OIS"],
        ["Telephoto", "48MP f/2.8"],
        ["Ultrawide", "48MP f/2.2"],
        ["Front", "18MP f/1.9"]
      ],
      "Battery & Charging": [
        ["Wired", "60W"],
        ["Wireless", "25W MagSafe / Qi2"]
      ],
      "Software & Design": [
        ["OS", "iOS 27 with Apple Intelligence"],
        ["Water resistance", "IP68"]
      ],
      "Connectivity": [["Network", "5G"], ["Wi-Fi", "Wi-Fi 7"], ["Bluetooth", "6.0"]]
    }
  },
  {
    id: "iphone-17-pro-max",
    name: "Apple iPhone 17 Pro Max",
    brand: "Apple",
    category: "Flagship",
    tags: ["5G", "eSIM"],
    released: "September 2025",
    releaseDate: "2025-09-19",
    price: 165000,
    priceNote: "From KSh 165,000 (256GB) • up to KSh 293,000 (2TB)",
    tagline: "Last year's top iPhone — A19 Pro chip, triple 48MP Pro cameras and up to 33 hours of video playback.",
    img: [GSM + "apple-iphone-17-pro-max.jpg", pik(144134, "Apple-Iphone-17-Pro-Max-b-medium.webp")],
    highlights: {
      display: '6.9" LTPO OLED 120Hz',
      chip: "Apple A19 Pro",
      battery: "~4,823 mAh",
      camera: "Triple 48MP"
    },
    specs: {
      "Display": [
        ["Size & type", '6.9" LTPO Super Retina XDR OLED, Dynamic Island'],
        ["Resolution", "1320 × 2868 pixels (~460 ppi)"],
        ["Refresh rate", "120Hz ProMotion, Always-On"],
        ["Peak brightness", "Up to 3,000 nits"],
        ["Protection", "Ceramic Shield 2 front (3× scratch resistance)"]
      ],
      "Performance": [
        ["Chipset", "Apple A19 Pro (3 nm)"],
        ["CPU / GPU", "6-core CPU • 6-core GPU with Neural Accelerators"],
        ["RAM", "12GB"],
        ["Storage", "256GB / 512GB / 1TB / 2TB"],
        ["Expandable storage", "No"]
      ],
      "Cameras": [
        ["Main", "48MP Fusion, OIS"],
        ["Ultrawide", "48MP"],
        ["Telephoto", "48MP periscope, 4× optical zoom"],
        ["Front", "18MP TrueDepth"],
        ["Video", "4K Dolby Vision up to 60fps, ProRes"]
      ],
      "Battery & Charging": [
        ["Capacity", "~4,823 mAh"],
        ["Video playback", "Up to 33 hours"],
        ["Wired", "Fast charging (USB-C, USB 3 speeds)"],
        ["Wireless", "MagSafe / Qi2 up to 25W"]
      ],
      "Software & Design": [
        ["OS", "iOS 26 with Apple Intelligence"],
        ["Build", "Aluminum unibody, matte glass back"],
        ["Water resistance", "IP68 (6 m for 30 min)"],
        ["Colours", "Cosmic Orange, Deep Blue, Silver"],
        ["Extras", "Action button, Camera Control, satellite SOS"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"], ["Bluetooth", "6.0"], ["Port", "USB-C 3.2"]]
    }
  },
  {
    id: "iphone-17-pro",
    name: "Apple iPhone 17 Pro",
    brand: "Apple",
    category: "Flagship",
    tags: ["5G"],
    released: "September 2025",
    releaseDate: "2025-09-19",
    price: 195000,
    priceNote: "Around KSh 195,000 (256GB)",
    tagline: "The compact A19 Pro flagship with the same triple-48MP camera system as the Pro Max.",
    img: [GSM + "apple-iphone-17-pro.jpg"],
    highlights: {
      display: '6.3" LTPO OLED 120Hz',
      chip: "Apple A19 Pro",
      battery: "All-day battery",
      camera: "Triple 48MP"
    },
    specs: {
      "Display": [
        ["Size & type", '6.3" LTPO Super Retina XDR OLED'],
        ["Refresh rate", "120Hz ProMotion, Always-On"],
        ["Peak brightness", "Up to 3,000 nits"]
      ],
      "Performance": [
        ["Chipset", "Apple A19 Pro (3 nm)"],
        ["RAM", "12GB"],
        ["Storage", "256GB / 512GB / 1TB"]
      ],
      "Cameras": [
        ["Main", "48MP Fusion, OIS"],
        ["Ultrawide", "48MP"],
        ["Telephoto", "48MP periscope, 4× optical zoom"],
        ["Front", "18MP TrueDepth"]
      ],
      "Battery & Charging": [
        ["Wired", "Fast charging (USB-C)"],
        ["Wireless", "MagSafe / Qi2 up to 25W"]
      ],
      "Software & Design": [
        ["OS", "iOS 26 with Apple Intelligence"],
        ["Build", "Aluminum unibody"],
        ["Water resistance", "IP68"],
        ["Colours", "Cosmic Orange, Deep Blue, Silver"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"], ["Bluetooth", "6.0"]]
    }
  },
  {
    id: "iphone-16-pro-max",
    name: "Apple iPhone 16 Pro Max",
    brand: "Apple",
    category: "Flagship",
    tags: ["5G"],
    released: "September 2024",
    releaseDate: "2024-09-20",
    price: 122000,
    priceNote: "From KSh 122,000 (256GB)",
    tagline: "The previous-generation Pro Max — titanium build, A18 Pro and a 5× telephoto, now at a friendlier price.",
    img: [GSM + "apple-iphone-16-pro-max.jpg"],
    highlights: {
      display: '6.9" LTPO OLED 120Hz',
      chip: "Apple A18 Pro",
      battery: "4,685 mAh",
      camera: "48MP + 5× zoom"
    },
    specs: {
      "Display": [
        ["Size & type", '6.9" LTPO Super Retina XDR OLED'],
        ["Resolution", "1320 × 2868 pixels"],
        ["Refresh rate", "120Hz ProMotion"],
        ["Peak brightness", "2,000 nits (HBM)"]
      ],
      "Performance": [
        ["Chipset", "Apple A18 Pro (3 nm)"],
        ["RAM", "8GB"],
        ["Storage", "256GB / 512GB / 1TB"]
      ],
      "Cameras": [
        ["Main", "48MP Fusion, OIS"],
        ["Ultrawide", "48MP"],
        ["Telephoto", "12MP, 5× optical zoom"],
        ["Front", "12MP TrueDepth"],
        ["Video", "4K 120fps Dolby Vision"]
      ],
      "Battery & Charging": [
        ["Capacity", "4,685 mAh"],
        ["Video playback", "Up to 33 hours"],
        ["Wired", "~27W"],
        ["Wireless", "25W MagSafe"]
      ],
      "Software & Design": [
        ["OS", "iOS 18 (upgradable), Apple Intelligence"],
        ["Build", "Grade-5 titanium frame"],
        ["Water resistance", "IP68 (6 m)"],
        ["Extras", "Camera Control button, Action button"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"], ["Bluetooth", "5.3"], ["Port", "USB-C 3.2"]]
    }
  },
  {
    id: "iphone-16-pro",
    name: "Apple iPhone 16 Pro",
    brand: "Apple",
    category: "Flagship",
    tags: ["5G"],
    released: "September 2024",
    releaseDate: "2024-09-20",
    price: 120000,
    priceNote: "Around KSh 120,000 (128/256GB)",
    tagline: "Titanium 16 Pro with the A18 Pro chip and Camera Control — a compact flagship favourite in Kenya.",
    img: [GSM + "apple-iphone-16-pro.jpg"],
    highlights: {
      display: '6.3" LTPO OLED 120Hz',
      chip: "Apple A18 Pro",
      battery: "3,582 mAh",
      camera: "48MP + 5× zoom"
    },
    specs: {
      "Display": [
        ["Size & type", '6.3" LTPO Super Retina XDR OLED'],
        ["Resolution", "1206 × 2622 pixels"],
        ["Refresh rate", "120Hz ProMotion"]
      ],
      "Performance": [
        ["Chipset", "Apple A18 Pro (3 nm)"],
        ["RAM", "8GB"],
        ["Storage", "128GB / 256GB / 512GB / 1TB"]
      ],
      "Cameras": [
        ["Main", "48MP Fusion, OIS"],
        ["Ultrawide", "48MP"],
        ["Telephoto", "12MP, 5× optical zoom"],
        ["Front", "12MP TrueDepth"]
      ],
      "Battery & Charging": [
        ["Capacity", "3,582 mAh"],
        ["Video playback", "Up to 27 hours"],
        ["Wireless", "25W MagSafe"]
      ],
      "Software & Design": [
        ["OS", "iOS 18 (upgradable), Apple Intelligence"],
        ["Build", "Grade-5 titanium frame"],
        ["Water resistance", "IP68"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"], ["Bluetooth", "5.3"]]
    }
  },

  /* ============================= SAMSUNG ============================= */
  {
    id: "galaxy-s26-ultra",
    name: "Samsung Galaxy S26 Ultra",
    brand: "Samsung",
    category: "Flagship",
    tags: ["New 2026", "5G", "S Pen"],
    released: "February 2026",
    releaseDate: "2026-02-25",
    price: 122000,
    priceNote: "From KSh 122,000 (12/256GB) • KSh 146,000 (12/512GB) • KSh 183,000 (16GB/1TB)",
    tagline: "Samsung's 2026 Ultra flagship — 200MP quad camera, Snapdragon 8 Elite Gen 5 and a new Privacy Display.",
    img: [GSM + "samsung-galaxy-s26-ultra-new.jpg", pik(145930, "s26-ultra-d-medium.webp"), gk("69b27a2300052abf4401")],
    highlights: {
      display: '6.9" QHD+ AMOLED 120Hz',
      chip: "Snapdragon 8 Elite Gen 5",
      battery: "5,000 mAh • 60W",
      camera: "200MP quad camera"
    },
    specs: {
      "Display": [
        ["Size & type", '6.9" Dynamic LTPO AMOLED 2X'],
        ["Resolution", "1440 × 3120 pixels (QHD+, ~500 ppi)"],
        ["Refresh rate", "1–120Hz adaptive, 240Hz touch"],
        ["Peak brightness", "2,600 nits (HDR)"],
        ["Protection", "Corning Gorilla Armor 2, anti-reflective"],
        ["Extras", "Privacy Display, Vision Booster, Always-On"]
      ],
      "Performance": [
        ["Chipset", "Qualcomm Snapdragon 8 Elite Gen 5 for Galaxy (3 nm)"],
        ["CPU / GPU", "Octa-core up to 4.74 GHz • Adreno 840"],
        ["RAM", "12GB / 16GB LPDDR5X"],
        ["Storage", "256GB / 512GB / 1TB UFS 4.X"],
        ["Expandable storage", "No"]
      ],
      "Cameras": [
        ["Main", "200MP f/1.4, OIS, 1/1.3\" sensor"],
        ["Ultrawide", "50MP f/1.9, 120°"],
        ["Telephoto", "10MP 3× + 50MP 5× periscope (both OIS)"],
        ["Front", "12MP f/2.2"],
        ["Video", "8K@30fps, 4K@120fps, HDR10+"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,000 mAh"],
        ["Wired", "60W (75% in 30 min)"],
        ["Wireless", "25W Qi2.2"],
        ["Reverse", "4.5W reverse wireless"]
      ],
      "Software & Design": [
        ["OS", "Android 16, One UI with Galaxy AI"],
        ["Updates", "7 major OS upgrades"],
        ["Build", "214 g, 7.9 mm, Armor Aluminum 2"],
        ["Water resistance", "IP68"],
        ["Colours", "Cobalt Violet, Sky Blue, Black, White, Silver Shadow, Pink Gold"],
        ["Extras", "S Pen included, DeX, UWB"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"], ["Wi-Fi", "Wi-Fi 7"], ["Bluetooth", "6.0"], ["Port", "USB-C 3.2"]]
    }
  },
  {
    id: "galaxy-s26-plus",
    name: "Samsung Galaxy S26+",
    brand: "Samsung",
    category: "Flagship",
    tags: ["New 2026", "5G"],
    released: "March 2026",
    releaseDate: "2026-03-11",
    price: 111000,
    priceNote: "KSh 111,000 – 132,000 (12/256GB) • KSh 123,000 – 150,000 (12/512GB)",
    tagline: "The high-performance middle child — QHD+ AMOLED and better battery than the base S26.",
    img: [GSM + "samsung-galaxy-s26-plus.jpg"],
    highlights: {
      display: '6.7" QHD+ AMOLED 120Hz',
      chip: "Snapdragon 8 Elite Gen 5",
      battery: "4,900 mAh",
      camera: "50MP triple"
    },
    specs: {
      "Display": [
        ["Size & type", '6.7" Dynamic LTPO AMOLED 2X'],
        ["Resolution", "1440 × 3120 pixels (QHD+)"],
        ["Refresh rate", "120Hz adaptive"]
      ],
      "Performance": [
        ["Chipset", "Qualcomm Snapdragon 8 Elite Gen 5"],
        ["RAM", "12GB"],
        ["Storage", "256GB / 512GB UFS 4.0"]
      ],
      "Cameras": [
        ["Main", "50MP, OIS"],
        ["Ultrawide", "12MP"],
        ["Telephoto", "10MP 3× optical"],
        ["Front", "12MP"]
      ],
      "Battery & Charging": [
        ["Capacity", "4,900 mAh"],
        ["Wired", "45W"],
        ["Wireless", "Qi2"]
      ],
      "Software & Design": [
        ["OS", "Android 16, One UI 8.5"],
        ["Water resistance", "IP68"],
        ["Colours", "Onyx Black, Marble Gray, Cobalt Violet, Amber Yellow"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"]]
    }
  },
  {
    id: "galaxy-s26",
    name: "Samsung Galaxy S26",
    brand: "Samsung",
    category: "Flagship",
    tags: ["New 2026", "5G"],
    released: "March 2026",
    releaseDate: "2026-03-11",
    price: 100000,
    priceNote: "From KSh 100,000 (12/256GB)",
    tagline: "The compact 2026 Galaxy S flagship with the same flagship silicon as the Ultra.",
    img: [GSM + "samsung-galaxy-s26.jpg"],
    highlights: {
      display: '6.3" FHD+ AMOLED 120Hz',
      chip: "Snapdragon 8 Elite Gen 5",
      battery: "4,300 mAh",
      camera: "50MP triple"
    },
    specs: {
      "Display": [
        ["Size & type", '6.3" Dynamic AMOLED 2X'],
        ["Resolution", "2340 × 1080 (FHD+)"],
        ["Refresh rate", "120Hz"]
      ],
      "Performance": [
        ["Chipset", "Qualcomm Snapdragon 8 Elite Gen 5"],
        ["RAM", "12GB"],
        ["Storage", "256GB / 512GB"]
      ],
      "Cameras": [
        ["Main", "50MP, OIS"],
        ["Ultrawide", "12MP"],
        ["Telephoto", "10MP 3× optical"],
        ["Front", "12MP"]
      ],
      "Battery & Charging": [
        ["Capacity", "4,300 mAh"],
        ["Wired", "25W"],
        ["Wireless", "Qi2"]
      ],
      "Software & Design": [
        ["OS", "Android 16, One UI 8.5"],
        ["Water resistance", "IP68"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"]]
    }
  },
  {
    id: "galaxy-z-fold8-ultra",
    name: "Samsung Galaxy Z Fold8 Ultra",
    brand: "Samsung",
    category: "Flagship",
    tags: ["New 2026", "Foldable", "5G"],
    released: "2026",
    releaseDate: "2026-07-15",
    price: 199000,
    priceNote: "KSh 199,000 (12/256GB) • KSh 219,000 (12/512GB)",
    tagline: "Samsung's newest Ultra-class foldable — the thinnest, most powerful Galaxy Fold yet.",
    img: [pik(150619, "Samsung-Galaxy-Z-Fold8-Ultra-medium.webp"), pik(151529, "Samsung-Galaxy-Z-Fold8-Ultra-medium.webp")],
    highlights: {
      display: 'Foldable AMOLED 2X',
      chip: "Snapdragon 8 Elite Gen 5",
      battery: "All-day dual battery",
      camera: "200MP-class main"
    },
    specs: {
      "Display": [
        ["Main (inner)", 'Foldable Dynamic LTPO AMOLED 2X, 120Hz'],
        ["Cover", 'Dynamic LTPO AMOLED 2X, 120Hz']
      ],
      "Performance": [
        ["Chipset", "Qualcomm Snapdragon 8 Elite Gen 5"],
        ["RAM", "12GB"],
        ["Storage", "256GB / 512GB"]
      ],
      "Software & Design": [
        ["OS", "Android 16, One UI"],
        ["Form factor", "Book-style foldable"],
        ["Extras", "Galaxy AI, Flex Mode"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"]]
    }
  },
  {
    id: "galaxy-z-fold8",
    name: "Samsung Galaxy Z Fold8",
    brand: "Samsung",
    category: "Flagship",
    tags: ["New 2026", "Foldable", "5G"],
    released: "2026",
    releaseDate: "2026-07-15",
    price: 185000,
    priceNote: "KSh 185,000 (12/256GB) • KSh 202,500 (12/512GB)",
    tagline: "The 2026 book-style foldable — tablet-sized screen that fits in your pocket.",
    img: [pik(150634, "Samsung-Galaxy-Z-Fold8-c-medium.webp"), pik(151532, "Samsung-Galaxy-Z-Fold8-c-medium.webp")],
    highlights: {
      display: 'Foldable AMOLED 2X',
      chip: "Snapdragon 8 Elite Gen 5",
      battery: "All-day dual battery",
      camera: "Pro-grade triple"
    },
    specs: {
      "Display": [
        ["Main (inner)", 'Foldable Dynamic LTPO AMOLED 2X, 120Hz'],
        ["Cover", 'Dynamic LTPO AMOLED 2X, 120Hz']
      ],
      "Performance": [
        ["Chipset", "Qualcomm Snapdragon 8 Elite Gen 5"],
        ["RAM", "12GB"],
        ["Storage", "256GB / 512GB"]
      ],
      "Software & Design": [
        ["OS", "Android 16, One UI"],
        ["Form factor", "Book-style foldable"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"]]
    }
  },
  {
    id: "galaxy-z-fold7",
    name: "Samsung Galaxy Z Fold7",
    brand: "Samsung",
    category: "Flagship",
    tags: ["Foldable", "5G"],
    released: "July 2025",
    releaseDate: "2025-07-25",
    price: 160000,
    priceNote: "From KSh 160,000 (12/256GB) • KSh 195,000 (12/512GB)",
    tagline: "The lightest, thinnest Galaxy Fold of its generation — with a 200MP camera and tablet-sized inner display.",
    img: [GSM + "samsung-galaxy-z-fold7.jpg", pik(142076, "Samsung-Galaxy-Z-Fold-7-d-medium.webp")],
    highlights: {
      display: '8.0" foldable AMOLED 120Hz',
      chip: "Snapdragon 8 Elite",
      battery: "4,400 mAh",
      camera: "200MP main"
    },
    specs: {
      "Display": [
        ["Main (inner)", '8.0" Foldable Dynamic LTPO AMOLED 2X, 1968 × 2184, 120Hz'],
        ["Cover", '6.5" Dynamic LTPO AMOLED 2X, 1080 × 2520, 120Hz'],
        ["Protection", "Gorilla Glass Ceramic 2 cover screen"]
      ],
      "Performance": [
        ["Chipset", "Qualcomm Snapdragon 8 Elite (3 nm)"],
        ["RAM", "12GB"],
        ["Storage", "256GB / 512GB / 1TB UFS 4.0"],
        ["Expandable storage", "No"]
      ],
      "Cameras": [
        ["Main", "200MP f/1.7, OIS"],
        ["Telephoto", "10MP f/2.4, 3× optical"],
        ["Ultrawide", "12MP f/2.2"],
        ["Front", "10MP cover + 10MP under-display inner"]
      ],
      "Battery & Charging": [
        ["Capacity", "4,400 mAh"],
        ["Wired", "25W"],
        ["Wireless", "15W Qi2"]
      ],
      "Software & Design": [
        ["OS", "Android 16, One UI 8 with Galaxy AI"],
        ["Updates", "Up to 7 major Android upgrades"],
        ["Build", "Advanced Armour Aluminum frame"],
        ["Water resistance", "IP48"],
        ["Colours", "Blue Shadow, Jet Black, Silver Shadow"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"], ["Port", "USB-C 3.2"]]
    }
  },
  {
    id: "galaxy-z-flip7",
    name: "Samsung Galaxy Z Flip7",
    brand: "Samsung",
    category: "Flagship",
    tags: ["Foldable", "5G"],
    released: "July 2025",
    releaseDate: "2025-07-25",
    price: 116000,
    priceNote: "From KSh 116,000 (12/256GB)",
    tagline: "The pocket-sized flip phone with a huge 4.1-inch cover screen and flagship cameras.",
    img: [pik(142063, "Samsung-Galaxy-Z-Flip-7-a-medium.webp")],
    highlights: {
      display: '6.9" inner + 4.1" cover',
      chip: "Exynos 2500",
      battery: "4,300 mAh",
      camera: "50MP main"
    },
    specs: {
      "Display": [
        ["Main (inner)", '6.9" Dynamic LTPO AMOLED 2X, 120Hz'],
        ["Cover", '4.1" Super AMOLED FlexWindow']
      ],
      "Performance": [
        ["Chipset", "Samsung Exynos 2500 (3 nm)"],
        ["RAM", "12GB"],
        ["Storage", "256GB / 512GB"]
      ],
      "Cameras": [
        ["Main", "50MP, OIS"],
        ["Ultrawide", "12MP"],
        ["Front", "10MP"]
      ],
      "Battery & Charging": [
        ["Capacity", "4,300 mAh"],
        ["Wired", "25W"],
        ["Wireless", "15W Qi2"]
      ],
      "Software & Design": [
        ["OS", "Android 16, One UI 8"],
        ["Form factor", "Clamshell foldable"],
        ["Water resistance", "IP48"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"]]
    }
  },
  {
    id: "galaxy-s25-ultra",
    name: "Samsung Galaxy S25 Ultra",
    brand: "Samsung",
    category: "Flagship",
    tags: ["5G", "S Pen"],
    released: "January 2025",
    releaseDate: "2025-01-24",
    price: 103000,
    priceNote: "From KSh 103,000 (12/256GB) • KSh 122,999 (12/512GB)",
    tagline: "The 2025 Ultra — titanium frame, 200MP camera and Snapdragon 8 Elite, now at a big discount.",
    img: [pik(139644, "Samsung-Galaxy-S25-Ultra-c-medium.webp"), gk("6905e82c00025595e03a")],
    highlights: {
      display: '6.9" QHD+ AMOLED 120Hz',
      chip: "Snapdragon 8 Elite",
      battery: "5,000 mAh • 45W",
      camera: "200MP quad"
    },
    specs: {
      "Display": [
        ["Size & type", '6.9" Dynamic LTPO AMOLED 2X'],
        ["Resolution", "1440 × 3120 pixels (QHD+)"],
        ["Refresh rate", "1–120Hz adaptive"],
        ["Peak brightness", "2,600 nits"],
        ["Protection", "Corning Gorilla Armor 2"]
      ],
      "Performance": [
        ["Chipset", "Qualcomm Snapdragon 8 Elite for Galaxy (3 nm)"],
        ["RAM", "12GB"],
        ["Storage", "256GB / 512GB / 1TB UFS 4.0"]
      ],
      "Cameras": [
        ["Main", "200MP f/1.7, OIS"],
        ["Ultrawide", "50MP"],
        ["Telephoto", "10MP 3× + 50MP 5× periscope"],
        ["Front", "12MP"],
        ["Video", "8K@30fps"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,000 mAh"],
        ["Wired", "45W"],
        ["Wireless", "15W Qi2"]
      ],
      "Software & Design": [
        ["OS", "Android 15, One UI 7 with Galaxy AI"],
        ["Updates", "7 years OS + security"],
        ["Build", "Titanium frame, 218 g"],
        ["Water resistance", "IP68"],
        ["Extras", "S Pen included"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"], ["Wi-Fi", "Wi-Fi 7"]]
    }
  },
  {
    id: "galaxy-s25-fe",
    name: "Samsung Galaxy S25 FE",
    brand: "Samsung",
    category: "Flagship",
    tags: ["5G", "Value flagship"],
    released: "September 2025",
    releaseDate: "2025-09-19",
    price: 71000,
    priceNote: "From KSh 71,000 (8/128GB)",
    tagline: "The Fan Edition flagship — LTPO AMOLED 120Hz, Galaxy AI and 7 years of updates under KSh 75K.",
    img: [GSM + "samsung-galaxy-s25-fe.jpg", gk("6905e6be00218a87eee0")],
    highlights: {
      display: '6.7" LTPO AMOLED 120Hz',
      chip: "Exynos 2400",
      battery: "4,900 mAh • 45W",
      camera: "50MP OIS triple"
    },
    specs: {
      "Display": [
        ["Size & type", '6.7" Dynamic LTPO AMOLED 2X, HDR10+'],
        ["Resolution", "2340 × 1080 (FHD+)"],
        ["Refresh rate", "120Hz"]
      ],
      "Performance": [
        ["Chipset", "Samsung Exynos 2400 (4 nm)"],
        ["RAM", "8GB"],
        ["Storage", "128GB / 256GB / 512GB"]
      ],
      "Cameras": [
        ["Main", "50MP, OIS"],
        ["Ultrawide", "12MP"],
        ["Telephoto", "8MP 3× optical, OIS"],
        ["Front", "12MP"]
      ],
      "Battery & Charging": [
        ["Capacity", "4,900 mAh"],
        ["Wired", "45W"],
        ["Wireless", "15W Qi2"]
      ],
      "Software & Design": [
        ["OS", "Android 16, One UI 8"],
        ["Updates", "7 years OS + security"],
        ["Water resistance", "IP68"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"]]
    }
  },
  {
    id: "galaxy-a57",
    name: "Samsung Galaxy A57 5G",
    brand: "Samsung",
    category: "Mid-range",
    tags: ["New 2026", "5G"],
    released: "2026",
    releaseDate: "2026-03-20",
    price: 57000,
    priceNote: "KSh 57,000 (8/128GB) • KSh 63,000 (8/256GB)",
    tagline: "Samsung's 2026 A-series star — the newest mid-ranger with long-term software support.",
    img: [GSM + "samsung-galaxy-a57.jpg"],
    highlights: {
      display: '6.7" Super AMOLED 120Hz',
      chip: "Exynos (2026)",
      battery: "5,000 mAh",
      camera: "50MP OIS"
    },
    specs: {
      "Display": [
        ["Size & type", '6.7" Super AMOLED'],
        ["Refresh rate", "120Hz"]
      ],
      "Performance": [
        ["RAM", "8GB"],
        ["Storage", "128GB / 256GB"]
      ],
      "Software & Design": [
        ["OS", "Android with One UI"],
        ["Updates", "6 generations of OS upgrades"],
        ["Water resistance", "IP67"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"]]
    }
  },
  {
    id: "galaxy-a56",
    name: "Samsung Galaxy A56 5G",
    brand: "Samsung",
    category: "Mid-range",
    tags: ["5G"],
    released: "March 2025",
    releaseDate: "2025-03-10",
    price: 40500,
    priceNote: "From KSh 39,500 (8/128GB) • ~KSh 46,500 (8/256GB)",
    tagline: "Kenya's favourite Samsung mid-ranger — Exynos 1580, 45W charging and 6 years of updates.",
    highlights: {
      display: '6.7" Super AMOLED 120Hz',
      chip: "Exynos 1580",
      battery: "5,000 mAh • 45W",
      camera: "50MP OIS triple"
    },
    specs: {
      "Display": [
        ["Size & type", '6.7" Super AMOLED'],
        ["Resolution", "2340 × 1080 (FHD+)"],
        ["Refresh rate", "120Hz"],
        ["Peak brightness", "1,200 nits (HBM)"],
        ["Protection", "Gorilla Glass Victus+"]
      ],
      "Performance": [
        ["Chipset", "Samsung Exynos 1580 (4 nm)"],
        ["RAM", "8GB / 12GB"],
        ["Storage", "128GB / 256GB"],
        ["Expandable storage", "No"]
      ],
      "Cameras": [
        ["Main", "50MP f/1.8, OIS"],
        ["Ultrawide", "12MP"],
        ["Macro", "5MP"],
        ["Front", "12MP"],
        ["Video", "4K@30fps"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,000 mAh"],
        ["Wired", "45W"]
      ],
      "Software & Design": [
        ["OS", "Android 15, One UI 7"],
        ["Updates", "6 OS upgrades + 6 years security"],
        ["Build", "198 g, glass front/back, aluminum frame"],
        ["Water resistance", "IP67"],
        ["Colours", "Awesome Graphite, Lightgray, Olive, Pink"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"], ["Extras", "NFC, stereo speakers"]]
    }
  },
  {
    id: "galaxy-a37",
    name: "Samsung Galaxy A37 5G",
    brand: "Samsung",
    category: "Mid-range",
    tags: ["New 2026", "5G"],
    released: "2026",
    releaseDate: "2026-03-20",
    price: 40500,
    priceNote: "KSh 40,500 (8/128GB) • KSh 43,500 (8/256GB)",
    tagline: "The 2026 A37 — dependable Samsung mid-range with 5G and a bright AMOLED display.",
    img: [GSM + "samsung-galaxy-a37.jpg", pik(153699, "Samsung-Galaxy-A37-medium.webp")],
    highlights: {
      display: '6.7" Super AMOLED 120Hz',
      chip: "Exynos (2026)",
      battery: "5,000 mAh",
      camera: "50MP OIS"
    },
    specs: {
      "Display": [
        ["Size & type", '6.7" Super AMOLED'],
        ["Refresh rate", "120Hz"]
      ],
      "Performance": [
        ["RAM", "6GB / 8GB"],
        ["Storage", "128GB / 256GB"]
      ],
      "Software & Design": [
        ["OS", "Android with One UI"],
        ["Updates", "6 generations of OS upgrades"],
        ["Water resistance", "IP67"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM"]]
    }
  },
  {
    id: "galaxy-a27",
    name: "Samsung Galaxy A27 5G",
    brand: "Samsung",
    category: "Mid-range",
    tags: ["New 2026", "5G"],
    released: "2026",
    releaseDate: "2026-06-10",
    price: 33500,
    priceNote: "KSh 33,500 (6/128GB) • KSh 39,000 (8/256GB)",
    tagline: "The newest affordable 5G Galaxy — big AMOLED screen, 25W charging, Samsung reliability.",
    img: [GSM + "samsung-galaxy-a27.jpg", pik(148931, "Samsung-Galaxy-A27-c-medium.webp")],
    highlights: {
      display: '6.7" Super AMOLED 120Hz',
      chip: "Exynos / Snapdragon",
      battery: "5,000 mAh",
      camera: "50MP main"
    },
    specs: {
      "Display": [
        ["Size & type", '6.7" Super AMOLED'],
        ["Refresh rate", "120Hz"]
      ],
      "Performance": [
        ["RAM", "6GB / 8GB"],
        ["Storage", "128GB / 256GB"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,000 mAh"],
        ["Wired", "25W"]
      ],
      "Software & Design": [
        ["OS", "Android with One UI"],
        ["Water resistance", "IP67"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM"]]
    }
  },
  {
    id: "galaxy-a26",
    name: "Samsung Galaxy A26 5G",
    brand: "Samsung",
    category: "Mid-range",
    tags: ["5G", "Value"],
    released: "March 2025",
    releaseDate: "2025-03-15",
    price: 26800,
    priceNote: "From KSh 26,800",
    tagline: "The cheapest 5G Samsung with long-term support — 120Hz AMOLED, IP67 and 6 years of updates.",
    img: [GSM + "samsung-galaxy-a26.jpg", gk("6a5c8a0000158a091840")],
    highlights: {
      display: '6.7" Super AMOLED 120Hz',
      chip: "Exynos 1380",
      battery: "5,000 mAh",
      camera: "50MP OIS triple"
    },
    specs: {
      "Display": [
        ["Size & type", '6.7" Super AMOLED'],
        ["Resolution", "2340 × 1080 (FHD+)"],
        ["Refresh rate", "120Hz"],
        ["Protection", "Gorilla Glass Victus+"]
      ],
      "Performance": [
        ["Chipset", "Samsung Exynos 1380 (5 nm)"],
        ["RAM", "6GB / 8GB"],
        ["Storage", "128GB / 256GB"],
        ["Expandable storage", "microSD"]
      ],
      "Cameras": [
        ["Main", "50MP f/1.8, OIS"],
        ["Ultrawide", "8MP"],
        ["Macro", "2MP"],
        ["Front", "13MP"],
        ["Video", "4K@30fps"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,000 mAh"],
        ["Wired", "25W"]
      ],
      "Software & Design": [
        ["OS", "Android 15, One UI 7"],
        ["Updates", "6 OS upgrades + 6 years security"],
        ["Water resistance", "IP67"],
        ["Weight", "200 g"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM"], ["Extras", "NFC"]]
    }
  },
  {
    id: "galaxy-a07s",
    name: "Samsung Galaxy A07s",
    brand: "Samsung",
    category: "Budget",
    tags: ["New 2026"],
    released: "2026",
    releaseDate: "2026-08-20",
    price: 16500,
    priceNote: "KSh 16,500 (4/64GB)",
    tagline: "Samsung's newest entry-level phone — big screen, big battery, tiny price.",
    img: [GSM + "samsung-galaxy-a07.jpg", pik(153696, "galaxy-a07s-a-medium.webp")],
    highlights: {
      display: '6.7" HD+ 90Hz',
      chip: "Helio / Snapdragon",
      battery: "5,000 mAh",
      camera: "50MP main"
    },
    specs: {
      "Display": [
        ["Size & type", '6.7" LCD'],
        ["Refresh rate", "Up to 90Hz"]
      ],
      "Performance": [
        ["RAM", "4GB"],
        ["Storage", "64GB"],
        ["Expandable storage", "microSD"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,000 mAh"],
        ["Wired", "25W"]
      ],
      "Software & Design": [
        ["OS", "Android (One UI Core)"],
        ["Updates", "6 years security"]
      ],
      "Connectivity": [["Network", "4G LTE"], ["SIM", "Dual Nano-SIM"]]
    }
  },

  /* ============================== GOOGLE ============================== */
  {
    id: "pixel-10-pro-fold",
    name: "Google Pixel 10 Pro Fold",
    brand: "Google",
    category: "Flagship",
    tags: ["Foldable", "5G", "AI"],
    released: "August 2025",
    releaseDate: "2025-08-28",
    price: 165000,
    priceNote: "From KSh 165,000 (16/256GB)",
    tagline: "Google's foldable with Tensor G5 — an 8-inch inner display and the smartest AI features anywhere.",
    img: [GSM + "google-pixel-10-pro-fold-.jpg", pik(152391, "google-pixel-10-pro-fold-medium.webp")],
    highlights: {
      display: '8.0" foldable + 6.4" cover',
      chip: "Google Tensor G5",
      battery: "5,015 mAh",
      camera: "48MP triple"
    },
    specs: {
      "Display": [
        ["Main (inner)", '8.0" Super Actua Flex LTPO OLED, 120Hz'],
        ["Cover", '6.4" Actua OLED, 120Hz']
      ],
      "Performance": [
        ["Chipset", "Google Tensor G5 (3 nm)"],
        ["RAM", "16GB"],
        ["Storage", "256GB / 512GB / 1TB"]
      ],
      "Cameras": [
        ["Main", "48MP, OIS"],
        ["Ultrawide", "10.5MP"],
        ["Telephoto", "10.8MP, 5× optical"],
        ["Front", "10MP inner + 10MP cover"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,015 mAh"],
        ["Wired", "30W"],
        ["Wireless", "15W Qi2 Pixelsnap"]
      ],
      "Software & Design": [
        ["OS", "Android 16"],
        ["Updates", "7 years of updates"],
        ["Water resistance", "IP68"],
        ["AI features", "Gemini, Magic Cue, Camera Coach"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "eSIM"], ["Wi-Fi", "Wi-Fi 7"]]
    }
  },
  {
    id: "pixel-10-pro-xl",
    name: "Google Pixel 10 Pro XL",
    brand: "Google",
    category: "Flagship",
    tags: ["5G", "AI"],
    released: "August 2025",
    releaseDate: "2025-08-28",
    price: 126500,
    priceNote: "KSh 126,500 (16/256GB) • KSh 148,000 (16/512GB)",
    tagline: "The biggest Pixel — 6.8-inch LTPO display, 16GB RAM and a 42MP selfie camera.",
    img: [GSM + "google-pixel-10-pro-xl-.jpg"],
    highlights: {
      display: '6.8" LTPO OLED 120Hz',
      chip: "Google Tensor G5",
      battery: "5,200 mAh",
      camera: "50MP triple + 42MP selfie"
    },
    specs: {
      "Display": [
        ["Size & type", '6.8" LTPO OLED'],
        ["Resolution", "1344 × 2992 pixels"],
        ["Refresh rate", "1–120Hz"],
        ["Peak brightness", "3,300 nits"]
      ],
      "Performance": [
        ["Chipset", "Google Tensor G5 (3 nm)"],
        ["RAM", "16GB"],
        ["Storage", "256GB / 512GB / 1TB"]
      ],
      "Cameras": [
        ["Main", "50MP f/1.7, OIS"],
        ["Ultrawide", "48MP f/1.7"],
        ["Telephoto", "48MP f/2.8, 5× optical"],
        ["Front", "42MP f/2.2"],
        ["Video", "8K@30fps"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,200 mAh"],
        ["Wired", "45W"],
        ["Wireless", "25W Qi2 Pixelsnap"]
      ],
      "Software & Design": [
        ["OS", "Android 16"],
        ["Updates", "7 years of updates"],
        ["Water resistance", "IP68"],
        ["AI features", "Gemini, Camera Coach, Add Me"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"], ["Wi-Fi", "Wi-Fi 7"]]
    }
  },
  {
    id: "pixel-10",
    name: "Google Pixel 10",
    brand: "Google",
    category: "Flagship",
    tags: ["5G", "AI"],
    released: "August 2025",
    releaseDate: "2025-08-28",
    price: 79000,
    priceNote: "From KSh 79,000 (12/128GB) • KSh 95,000–101,000 (12/256GB) at some stores",
    tagline: "Google's AI-first flagship with Tensor G5, a 5× telephoto and 7 years of updates.",
    img: [GSM + "google-pixel-10-.jpg", pik(144978, "Google-Pixel-10-c-medium.webp")],
    highlights: {
      display: '6.3" Actua OLED 120Hz',
      chip: "Google Tensor G5",
      battery: "4,970 mAh",
      camera: "50MP + 5× telephoto"
    },
    specs: {
      "Display": [
        ["Size & type", '6.3" Actua OLED'],
        ["Resolution", "1080 × 2400 pixels"],
        ["Refresh rate", "60–120Hz"],
        ["Peak brightness", "Up to 3,000 nits"],
        ["Protection", "Gorilla Glass Victus 2"]
      ],
      "Performance": [
        ["Chipset", "Google Tensor G5 (3 nm)"],
        ["RAM", "12GB"],
        ["Storage", "128GB / 256GB"],
        ["Expandable storage", "No"]
      ],
      "Cameras": [
        ["Main", "50MP f/1.68, OIS"],
        ["Ultrawide", "48MP f/1.7"],
        ["Telephoto", "10.8MP, 5× optical, f/2.8"],
        ["Front", "10.5MP f/2.2"],
        ["Video", "8K@30fps, 4K@60fps"]
      ],
      "Battery & Charging": [
        ["Capacity", "4,970 mAh"],
        ["Wired", "30W (55% in 30 min)"],
        ["Wireless", "15W Qi2 magnetic"]
      ],
      "Software & Design": [
        ["OS", "Android 16"],
        ["Updates", "7 years of OS, security & Pixel Drops"],
        ["AI features", "Magic Cue, Camera Coach, Add Me, Best Take, Circle to Search"],
        ["Water resistance", "IP68"],
        ["Colours", "Obsidian, Porcelain, Indigo, Frost"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM + eSIM"], ["Wi-Fi", "Wi-Fi 7"], ["Security", "Ultrasonic fingerprint"]]
    }
  },

  /* ============================== XIAOMI ============================== */
  {
    id: "xiaomi-17",
    name: "Xiaomi 17",
    brand: "Xiaomi",
    category: "Flagship",
    tags: ["5G", "Leica"],
    released: "October 2025",
    releaseDate: "2025-10-05",
    price: 115000,
    priceNote: "KSh 115,000 (12/512GB)",
    tagline: "Xiaomi's compact flagship with Snapdragon 8 Elite Gen 5 and Leica optics.",
    img: [GSM + "xiaomi-17.jpg", pik(151874, "Xiaomi-17-a-medium.webp")],
    highlights: {
      display: '6.3" AMOLED 120Hz',
      chip: "Snapdragon 8 Elite Gen 5",
      battery: "≈6,330 mAh • 100W",
      camera: "Leica 50MP triple"
    },
    specs: {
      "Display": [
        ["Size & type", '6.3" AMOLED, flat'],
        ["Refresh rate", "120Hz"],
        ["Peak brightness", "≈3,500 nits"]
      ],
      "Performance": [
        ["Chipset", "Qualcomm Snapdragon 8 Elite Gen 5 (3 nm)"],
        ["RAM", "12GB / 16GB"],
        ["Storage", "256GB / 512GB"]
      ],
      "Cameras": [
        ["Main", "50MP Leica, OIS"],
        ["Ultrawide", "50MP"],
        ["Telephoto", "50MP Leica floating telephoto"],
        ["Front", "32MP"]
      ],
      "Battery & Charging": [
        ["Capacity", "≈6,330 mAh silicon-carbon"],
        ["Wired", "100W HyperCharge"],
        ["Wireless", "50W"]
      ],
      "Software & Design": [
        ["OS", "Android 16, HyperOS 3"],
        ["Water resistance", "IP68"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Dual Nano-SIM + eSIM"]]
    }
  },
  {
    id: "xiaomi-15-ultra",
    name: "Xiaomi 15 Ultra",
    brand: "Xiaomi",
    category: "Flagship",
    tags: ["5G", "Leica"],
    released: "March 2025",
    releaseDate: "2025-03-02",
    price: 135000,
    priceNote: "KSh 135,000 – 143,000 depending on retailer",
    tagline: "Widely rated the best camera phone in Kenya — Leica quad system with a 200MP periscope and 1-inch main sensor.",
    img: [GSM + "xiaomi-15-ultra-.jpg"],
    highlights: {
      display: '6.73" 2K LTPO AMOLED',
      chip: "Snapdragon 8 Elite",
      battery: "5,410 mAh • 90W",
      camera: "Leica 200MP periscope"
    },
    specs: {
      "Display": [
        ["Size & type", '6.73" LTPO AMOLED, Dolby Vision'],
        ["Resolution", "3200 × 1440 (2K, ~522 ppi)"],
        ["Refresh rate", "1–120Hz adaptive"],
        ["Peak brightness", "3,200 nits"]
      ],
      "Performance": [
        ["Chipset", "Qualcomm Snapdragon 8 Elite (3 nm)"],
        ["RAM", "16GB"],
        ["Storage", "512GB / 1TB UFS 4.0"],
        ["Expandable storage", "No"]
      ],
      "Cameras": [
        ["Main", "50MP Sony LYT-900 1-inch, f/1.63, OIS (Leica)"],
        ["Ultrawide", "50MP"],
        ["Telephoto", "50MP 3× + 200MP 4.3× periscope"],
        ["Front", "32MP"],
        ["Video", "8K@30fps, Dolby Vision"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,410 mAh"],
        ["Wired", "90W HyperCharge"],
        ["Wireless", "80W"]
      ],
      "Software & Design": [
        ["OS", "Android 15, HyperOS 2"],
        ["Water resistance", "IP68"],
        ["Extras", "Leica imaging styles, Photography Kit support"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Dual Nano-SIM + eSIM"], ["Port", "USB-C 3.2"]]
    }
  },
  {
    id: "xiaomi-15t",
    name: "Xiaomi 15T",
    brand: "Xiaomi",
    category: "Flagship",
    tags: ["5G", "Leica"],
    released: "September 2025",
    releaseDate: "2025-09-24",
    price: 67500,
    priceNote: "KSh 67,500 – 70,000",
    tagline: "Flagship performance at mid-range money — Dimensity 9400+ with Leica cameras.",
    img: [GSM + "xiaomi-15t.jpg"],
    highlights: {
      display: '6.83" AMOLED 120Hz',
      chip: "Dimensity 9400+",
      battery: "5,500 mAh • 67W",
      camera: "Leica 50MP triple"
    },
    specs: {
      "Display": [
        ["Size & type", '6.83" AMOLED'],
        ["Resolution", "2772 × 1280 (1.5K)"],
        ["Refresh rate", "120Hz"],
        ["Peak brightness", "3,200 nits"]
      ],
      "Performance": [
        ["Chipset", "MediaTek Dimensity 9400+ (3 nm)"],
        ["RAM", "12GB"],
        ["Storage", "256GB / 512GB"]
      ],
      "Cameras": [
        ["Main", "50MP Leica, OIS"],
        ["Ultrawide", "12MP"],
        ["Telephoto", "50MP 2× Leica"],
        ["Front", "32MP"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,500 mAh"],
        ["Wired", "67W"]
      ],
      "Software & Design": [
        ["OS", "Android 15, HyperOS 2"],
        ["Water resistance", "IP68"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Dual Nano-SIM + eSIM"]]
    }
  },

  /* ============================== REDMI ============================== */
  {
    id: "redmi-note-17-pro",
    name: "Redmi Note 17 Pro",
    brand: "Redmi",
    category: "Mid-range",
    tags: ["New 2026"],
    released: "August 2026",
    releaseDate: "2026-08-10",
    price: 44000,
    priceNote: "KSh 44,000",
    tagline: "The new mid-range sweet spot — 1.5K AMOLED at 3,500 nits and 4 OS upgrades.",
    img: [GSM + "xiaomi-redmi-note-17-pro.jpg", gk("6ab806b90006861222c1")],
    highlights: {
      display: '6.83" 1.5K AMOLED 120Hz',
      chip: "Snapdragon / Helio",
      battery: "6,000+ mAh",
      camera: "200MP main"
    },
    specs: {
      "Display": [
        ["Size & type", '6.83" AMOLED'],
        ["Resolution", "2772 × 1280 (1.5K)"],
        ["Refresh rate", "120Hz"],
        ["Peak brightness", "Up to 3,500 nits"]
      ],
      "Performance": [
        ["RAM", "6GB / 8GB"],
        ["Storage", "256GB / 512GB"]
      ],
      "Battery & Charging": [
        ["Wired", "Fast charging (USB-C)"]
      ],
      "Software & Design": [
        ["OS", "Android 16, HyperOS 3"],
        ["Updates", "4 OS upgrades + 6 years security"]
      ],
      "Connectivity": [["Network", "4G / 5G variants"], ["SIM", "Dual Nano-SIM"]]
    }
  },
  {
    id: "redmi-note-15-pro-plus",
    name: "Redmi Note 15 Pro+ 5G",
    brand: "Redmi",
    category: "Mid-range",
    tags: ["5G"],
    released: "December 2025",
    releaseDate: "2025-12-18",
    price: 42500,
    priceNote: "KSh 42,500 (typical retail price)",
    tagline: "200MP camera, 6,500 mAh silicon-carbon battery and 100W charging — the mid-range benchmark.",
    img: [GSM + "xiaomi-redmi-note-15-pro-plus-5g.jpg", gk("69a7cd5a002ef22887aa")],
    highlights: {
      display: '6.83" 1.5K AMOLED 120Hz',
      chip: "Snapdragon 7s Gen 4",
      battery: "6,500 mAh • 100W",
      camera: "200MP OIS"
    },
    specs: {
      "Display": [
        ["Size & type", '6.83" quad-curved AMOLED'],
        ["Resolution", "1.5K (2772 × 1280)"],
        ["Refresh rate", "120Hz"],
        ["Peak brightness", "3,200 nits"],
        ["Protection", "Corning Gorilla Glass Victus 2"]
      ],
      "Performance": [
        ["Chipset", "Qualcomm Snapdragon 7s Gen 4 (4 nm)"],
        ["CPU / GPU", "Octa-core up to 2.7 GHz • Adreno 810"],
        ["RAM", "8GB / 12GB"],
        ["Storage", "256GB / 512GB"]
      ],
      "Cameras": [
        ["Main", "200MP, OIS"],
        ["Ultrawide", "8MP"],
        ["Front", "32MP"],
        ["Video", "4K@30fps"]
      ],
      "Battery & Charging": [
        ["Capacity", "6,500 mAh silicon-carbon"],
        ["Wired", "100W (100% in ~40 min)"],
        ["Reverse", "22.5W reverse wired"]
      ],
      "Software & Design": [
        ["OS", "Android 15, HyperOS 2"],
        ["Updates", "4 major OS upgrades"],
        ["Water resistance", "IP68 / IP69K"],
        ["Extras", "Dual speakers, X-axis linear motor"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Nano-SIM"], ["Wi-Fi", "Wi-Fi 6, Bluetooth 5.4"]]
    }
  },
  {
    id: "redmi-note-15-pro",
    name: "Redmi Note 15 Pro",
    brand: "Redmi",
    category: "Mid-range",
    tags: ["Value"],
    released: "December 2025",
    releaseDate: "2025-12-18",
    price: 38500,
    priceNote: "KSh 38,500",
    tagline: "The Note 15 Pro — 200MP camera and AMOLED display under KSh 40K.",
    img: [GSM + "xiaomi-redmi-note-15-pro-5g.jpg"],
    highlights: {
      display: '6.77" AMOLED 120Hz',
      chip: "Snapdragon / Helio",
      battery: "6,500 mAh",
      camera: "200MP OIS"
    },
    specs: {
      "Display": [
        ["Size & type", '6.77" AMOLED'],
        ["Resolution", "1.5K"],
        ["Refresh rate", "120Hz"]
      ],
      "Performance": [
        ["RAM", "8GB"],
        ["Storage", "256GB / 512GB"]
      ],
      "Cameras": [
        ["Main", "200MP, OIS"],
        ["Ultrawide", "8MP"],
        ["Front", "20MP"]
      ],
      "Battery & Charging": [
        ["Capacity", "6,500 mAh"],
        ["Wired", "45W"]
      ],
      "Software & Design": [
        ["OS", "Android 15, HyperOS 2"],
        ["Water resistance", "IP66"]
      ],
      "Connectivity": [["Network", "4G / 5G variants"], ["SIM", "Dual Nano-SIM"]]
    }
  },
  {
    id: "redmi-note-17",
    name: "Redmi Note 17 4G",
    brand: "Redmi",
    category: "Mid-range",
    tags: ["New 2026", "Big battery"],
    released: "August 2026",
    releaseDate: "2026-08-10",
    price: 33000,
    priceNote: "KSh 33,000 (8/256GB)",
    tagline: "A monster 7,700 mAh silicon-carbon battery rated at 1,000 charge cycles — nearly three days per charge.",
    img: [GSM + "xiaomi-redmi-note-17.jpg", gk("6ab8039a00030bf509fd")],
    highlights: {
      display: '6.99" FHD+ AMOLED 120Hz',
      chip: "Snapdragon 6s 4G Gen 2",
      battery: "7,700 mAh • 45W",
      camera: "AI dual camera"
    },
    specs: {
      "Display": [
        ["Size & type", '6.99" AMOLED'],
        ["Resolution", "1080 × 2396 (FHD+)"],
        ["Refresh rate", "120Hz"],
        ["Protection", "Corning Gorilla Glass 7i"]
      ],
      "Performance": [
        ["Chipset", "Qualcomm Snapdragon 6s 4G Gen 2 (6 nm)"],
        ["CPU / GPU", "Octa-core up to 2.9 GHz • Adreno 610"],
        ["RAM", "8GB"],
        ["Storage", "256GB UFS 2.2"],
        ["Expandable storage", "microSD up to 2TB"]
      ],
      "Battery & Charging": [
        ["Capacity", "7,700 mAh silicon-carbon"],
        ["Endurance", "EU label: 68:58 h, 1,000 charge cycles"],
        ["Wired", "45W (PD 3.0)"],
        ["Reverse", "22.5W reverse wired"]
      ],
      "Software & Design": [
        ["OS", "Android 16, HyperOS 3"],
        ["Security", "Under-display fingerprint"]
      ],
      "Connectivity": [["Network", "4G LTE, Dual SIM"], ["Port", "USB-C"]]
    }
  },
  {
    id: "redmi-note-15",
    name: "Redmi Note 15",
    brand: "Redmi",
    category: "Mid-range",
    tags: ["Value"],
    released: "December 2025",
    releaseDate: "2025-12-18",
    price: 26300,
    priceNote: "From KSh 26,300",
    tagline: "The entry point to the Note 15 family — AMOLED display and big battery at a great price.",
    img: [GSM + "xiaomi-redmi-note-15-5g.jpg"],
    highlights: {
      display: '6.77" AMOLED 120Hz',
      chip: "Snapdragon / Helio",
      battery: "5,800+ mAh",
      camera: "108MP main"
    },
    specs: {
      "Display": [
        ["Size & type", '6.77" AMOLED'],
        ["Refresh rate", "120Hz"]
      ],
      "Performance": [
        ["RAM", "6GB / 8GB"],
        ["Storage", "128GB / 256GB"]
      ],
      "Battery & Charging": [
        ["Wired", "33W / 45W depending on variant"]
      ],
      "Software & Design": [
        ["OS", "Android 15, HyperOS 2"]
      ],
      "Connectivity": [["Network", "4G / 5G variants"], ["SIM", "Dual Nano-SIM"]]
    }
  },
  {
    id: "redmi-a7-pro",
    name: "Redmi A7 Pro",
    brand: "Redmi",
    category: "Budget",
    tags: ["Budget"],
    released: "2026",
    releaseDate: "2026-01-20",
    price: 13700,
    priceNote: "KSh 13,000 – 13,700",
    tagline: "Honest budget phone — huge 6.9-inch 120Hz screen under KSh 14K.",
    img: [GSM + "xiaomi-redmi-a7-pro.jpg", gk("69df462100256876bc56")],
    highlights: {
      display: '6.9" HD+ 120Hz',
      chip: "Helio (entry)",
      battery: "5,000+ mAh",
      camera: "AI camera"
    },
    specs: {
      "Display": [
        ["Size & type", '6.9" LCD'],
        ["Resolution", "1600 × 720 (HD+)"],
        ["Refresh rate", "Up to 120Hz"],
        ["Peak brightness", "800 nits"]
      ],
      "Performance": [
        ["RAM", "4GB"],
        ["Storage", "64GB / 128GB"],
        ["Expandable storage", "microSD"]
      ],
      "Software & Design": [
        ["OS", "Xiaomi HyperOS 3 (Android-based)"]
      ],
      "Connectivity": [["Network", "4G LTE"], ["SIM", "Dual Nano-SIM"]]
    }
  },

  /* =============================== POCO =============================== */
  {
    id: "poco-f7-ultra",
    name: "Poco F7 Ultra",
    brand: "Poco",
    category: "Flagship",
    tags: ["5G"],
    released: "March 2025",
    releaseDate: "2025-03-27",
    price: 86000,
    priceNote: "KSh 86,000 (typical retail price)",
    tagline: "Snapdragon 8 Elite power and a 2K display at nearly half the price of other flagships.",
    img: [GSM + "xiaomi-poco-f7-ultra.jpg"],
    highlights: {
      display: '6.67" 2K AMOLED 120Hz',
      chip: "Snapdragon 8 Elite",
      battery: "5,300 mAh • 120W",
      camera: "50MP OIS triple"
    },
    specs: {
      "Display": [
        ["Size & type", '6.67" AMOLED'],
        ["Resolution", "3200 × 1440 (2K)"],
        ["Refresh rate", "120Hz"],
        ["Peak brightness", "3,200 nits"]
      ],
      "Performance": [
        ["Chipset", "Qualcomm Snapdragon 8 Elite (3 nm)"],
        ["RAM", "12GB / 16GB"],
        ["Storage", "256GB / 512GB UFS 4.0"]
      ],
      "Cameras": [
        ["Main", "50MP Light Fusion 900, OIS"],
        ["Telephoto", "50MP 2.5× floating telephoto (macro)"],
        ["Ultrawide", "32MP"],
        ["Front", "20MP"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,300 mAh"],
        ["Wired", "120W HyperCharge"],
        ["Wireless", "50W"]
      ],
      "Software & Design": [
        ["OS", "Android 15, HyperOS 2"],
        ["Water resistance", "IP68"],
        ["Extras", "VisionBoost D7 gaming chip"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Dual Nano-SIM"]]
    }
  },
  {
    id: "poco-f7-pro",
    name: "Poco F7 Pro",
    brand: "Poco",
    category: "Flagship",
    tags: ["5G"],
    released: "March 2025",
    releaseDate: "2025-03-27",
    price: 61500,
    priceNote: "KSh 61,500",
    tagline: "Snapdragon 8 Gen 3 flagship power without the flagship price tag.",
    img: [GSM + "xiaomi-poco-f7-pro.jpg"],
    highlights: {
      display: '6.67" 2K AMOLED 120Hz',
      chip: "Snapdragon 8 Gen 3",
      battery: "6,000 mAh • 90W",
      camera: "50MP OIS"
    },
    specs: {
      "Display": [
        ["Size & type", '6.67" AMOLED'],
        ["Resolution", "3200 × 1440 (2K)"],
        ["Refresh rate", "120Hz"]
      ],
      "Performance": [
        ["Chipset", "Qualcomm Snapdragon 8 Gen 3 (4 nm)"],
        ["RAM", "12GB"],
        ["Storage", "256GB / 512GB"]
      ],
      "Cameras": [
        ["Main", "50MP Light Fusion 800, OIS"],
        ["Ultrawide", "8MP"],
        ["Front", "20MP"]
      ],
      "Battery & Charging": [
        ["Capacity", "6,000 mAh"],
        ["Wired", "90W HyperCharge"]
      ],
      "Software & Design": [
        ["OS", "Android 15, HyperOS 2"],
        ["Water resistance", "IP68"]
      ],
      "Connectivity": [["Network", "5G"], ["SIM", "Dual Nano-SIM"]]
    }
  },
  {
    id: "poco-x7-pro",
    name: "Poco X7 Pro",
    brand: "Poco",
    category: "Mid-range",
    tags: ["5G"],
    released: "January 2025",
    releaseDate: "2025-01-09",
    price: 45500,
    priceNote: "KSh 45,500 (typical retail price)",
    tagline: "The mid-range performance king — Dimensity 8400-Ultra, 90W charging and IP68 at a sweet price.",
    img: [GSM + "xiaomi-poco-x7-pro.jpg"],
    highlights: {
      display: '6.67" 1.5K AMOLED 120Hz',
      chip: "Dimensity 8400-Ultra",
      battery: "6,000 mAh • 90W",
      camera: "50MP Sony IMX882"
    },
    specs: {
      "Display": [
        ["Size & type", '6.67" AMOLED'],
        ["Resolution", "2712 × 1220 (1.5K)"],
        ["Refresh rate", "120Hz"],
        ["Peak brightness", "3,200 nits"]
      ],
      "Performance": [
        ["Chipset", "MediaTek Dimensity 8400-Ultra (4 nm)"],
        ["RAM", "8GB / 12GB"],
        ["Storage", "256GB / 512GB UFS 4.0"]
      ],
      "Cameras": [
        ["Main", "50MP Sony IMX882 f/1.5, OIS"],
        ["Ultrawide", "8MP"],
        ["Front", "20MP"]
      ],
      "Battery & Charging": [
        ["Capacity", "6,000 mAh"],
        ["Wired", "90W HyperCharge"]
      ],
      "Software & Design": [
        ["OS", "Android 15, HyperOS 2"],
        ["Water resistance", "IP68 / IP69"],
        ["Updates", "3 OS upgrades + 4 years security"]
      ],
      "Connectivity": [["Network", "5G, Dual SIM"], ["Extras", "NFC, IR blaster, stereo speakers"]]
    }
  },
  {
    id: "poco-m7-pro",
    name: "Poco M7 Pro 5G",
    brand: "Poco",
    category: "Mid-range",
    tags: ["5G", "Value"],
    released: "December 2024",
    releaseDate: "2024-12-17",
    price: 28500,
    priceNote: "KSh 28,500",
    tagline: "5G value champion — AMOLED 120Hz, OIS camera and 45W charging under KSh 30K.",
    highlights: {
      display: '6.67" AMOLED 120Hz',
      chip: "Dimensity 7025-Ultra",
      battery: "5,110 mAh • 45W",
      camera: "50MP OIS"
    },
    specs: {
      "Display": [
        ["Size & type", '6.67" AMOLED'],
        ["Resolution", "2400 × 1080 (FHD+)"],
        ["Refresh rate", "120Hz"],
        ["Peak brightness", "2,100 nits"]
      ],
      "Performance": [
        ["Chipset", "MediaTek Dimensity 7025-Ultra (6 nm)"],
        ["RAM", "6GB / 8GB"],
        ["Storage", "128GB / 256GB"]
      ],
      "Cameras": [
        ["Main", "50MP Sony LYT-600, OIS"],
        ["Depth", "2MP"],
        ["Front", "20MP"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,110 mAh"],
        ["Wired", "45W"]
      ],
      "Software & Design": [
        ["OS", "Android 15, HyperOS 2"],
        ["Water resistance", "IP64"],
        ["Extras", "3.5mm jack, stereo speakers"]
      ],
      "Connectivity": [["Network", "5G, Dual SIM"], ["Extras", "NFC"]]
    }
  },

  /* =============================== TECNO ============================== */
  {
    id: "camon-50-ultra",
    name: "Tecno Camon 50 Ultra 5G",
    brand: "Tecno",
    category: "Mid-range",
    tags: ["New 2026", "5G", "Rugged"],
    released: "March 2026",
    releaseDate: "2026-03-15",
    price: 57500,
    priceNote: "KSh 57,500 – 58,600 depending on retailer",
    tagline: "MIL-STD-810H rugged build, 3× optical zoom and a huge 6,500 mAh battery — the Camon series goes flagship-killer.",
    img: [GSM + "tecno-camon-50-ultra.jpg"],
    highlights: {
      display: '6.78" 1.5K AMOLED 144Hz',
      chip: "Dimensity 7400 Ultimate",
      battery: "6,500 mAh • 45W",
      camera: "Triple 50MP, 3× zoom"
    },
    specs: {
      "Display": [
        ["Size & type", '6.78" AMOLED, HDR support'],
        ["Resolution", "1.5K (2780 × 1264)"],
        ["Refresh rate", "144Hz"],
        ["Protection", "Corning Gorilla Glass 7i"]
      ],
      "Performance": [
        ["Chipset", "MediaTek Dimensity 7400 Ultimate (4 nm)"],
        ["CPU / GPU", "Octa-core up to 2.6 GHz • Mali-G615 MC2"],
        ["RAM", "8GB / 12GB LPDDR5X"],
        ["Storage", "256GB / 512GB"]
      ],
      "Cameras": [
        ["Main", "50MP, OIS"],
        ["Telephoto", "50MP periscope, 3× optical zoom"],
        ["Ultrawide / macro", "50MP"],
        ["Front", "50MP autofocus"]
      ],
      "Battery & Charging": [
        ["Capacity", "6,500 mAh silicon-carbon"],
        ["Wired", "45W"]
      ],
      "Software & Design": [
        ["OS", "Android 16, HiOS 16"],
        ["Updates", "Up to 5 years system support"],
        ["Durability", "IP69K + MIL-STD-810H military grade"],
        ["Colours", "Moonshadow Black, Cypress Green, Nebula Titanium, Luminous Orange, Misty Purple"],
        ["Security", "Under-display fingerprint"]
      ],
      "Connectivity": [["Network", "5G, Dual SIM"], ["Extras", "NFC, IR blaster"]]
    }
  },
  {
    id: "camon-40-premier",
    name: "Tecno Camon 40 Premier 5G",
    brand: "Tecno",
    category: "Mid-range",
    tags: ["5G"],
    released: "March 2025",
    releaseDate: "2025-03-05",
    price: 54000,
    priceNote: "KSh 51,500 – 59,500 depending on retailer",
    tagline: "The premium Camon — Dimensity 8350 Ultimate and FlashSnap photography.",
    img: [GSM + "tecno-camon-40-premier.jpg"],
    highlights: {
      display: '6.78" AMOLED 144Hz',
      chip: "Dimensity 8350 Ultimate",
      battery: "5,750 mAh • 70W",
      camera: "50MP FlashSnap"
    },
    specs: {
      "Display": [
        ["Size & type", '6.78" AMOLED'],
        ["Resolution", "1.5K"],
        ["Refresh rate", "144Hz"]
      ],
      "Performance": [
        ["Chipset", "MediaTek Dimensity 8350 Ultimate (4 nm)"],
        ["RAM", "12GB"],
        ["Storage", "256GB / 512GB"]
      ],
      "Cameras": [
        ["Main", "50MP, OIS — FlashSnap instant capture"],
        ["Ultrawide", "8MP"],
        ["Front", "32MP autofocus"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,750 mAh"],
        ["Wired", "70W"]
      ],
      "Software & Design": [
        ["OS", "Android 15, HiOS 15"],
        ["Water resistance", "IP68 / IP69"]
      ],
      "Connectivity": [["Network", "5G, Dual SIM"], ["Extras", "NFC"]]
    }
  },
  {
    id: "camon-50-pro",
    name: "Tecno Camon 50 Pro",
    brand: "Tecno",
    category: "Mid-range",
    tags: ["New 2026"],
    released: "2026",
    releaseDate: "2026-01-25",
    price: 40900,
    priceNote: "KSh 40,900 – 43,500 depending on retailer",
    tagline: "Curved 144Hz AMOLED and 16GB of RAM — the Camon 50 Pro punches well above its price.",
    img: [GSM + "tecno-camon-50-pro.jpg", pik(145712, "Tecno-Camon-50-Pro-medium.webp"), gk("69b29d55000a5e197f16")],
    highlights: {
      display: '6.78" curved 1.5K AMOLED 144Hz',
      chip: "MediaTek (4G)",
      battery: "6,000+ mAh",
      camera: "50MP OIS"
    },
    specs: {
      "Display": [
        ["Size & type", '6.78" Curved AMOLED'],
        ["Resolution", "1208 × 2644 (1.5K)"],
        ["Refresh rate", "144Hz"]
      ],
      "Performance": [
        ["RAM", "16GB (8GB + 8GB extended)"],
        ["Storage", "256GB"]
      ],
      "Software & Design": [
        ["OS", "HiOS 16 (Android-based)"]
      ],
      "Connectivity": [["Network", "4G LTE, Dual SIM"]]
    }
  },
  {
    id: "camon-40-pro",
    name: "Tecno Camon 40 Pro",
    brand: "Tecno",
    category: "Mid-range",
    tags: ["4G"],
    released: "March 2025",
    releaseDate: "2025-03-05",
    price: 35500,
    priceNote: "KSh 35,500 (typical retail price)",
    tagline: "FlashSnap camera with 70W charging and a 144Hz AMOLED screen — unbeatable value under KSh 40K.",
    img: [GSM + "tecno-camon-40-pro-5g.jpg"],
    highlights: {
      display: '6.78" AMOLED 144Hz',
      chip: "Dimensity 7300 Ultimate",
      battery: "5,750 mAh • 70W",
      camera: "50MP OIS FlashSnap"
    },
    specs: {
      "Display": [
        ["Size & type", '6.78" AMOLED'],
        ["Resolution", "2436 × 1080 (FHD+)"],
        ["Refresh rate", "144Hz"]
      ],
      "Performance": [
        ["Chipset", "MediaTek Dimensity 7300 Ultimate (4 nm)"],
        ["RAM", "8GB (+ extended RAM)"],
        ["Storage", "256GB"]
      ],
      "Cameras": [
        ["Main", "50MP, OIS — FlashSnap instant capture"],
        ["Ultrawide", "8MP"],
        ["Front", "32MP autofocus"],
        ["Video", "4K@30fps"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,750 mAh"],
        ["Wired", "70W (50% in 20 min, 100% in 49 min)"]
      ],
      "Software & Design": [
        ["OS", "Android 15, HiOS 15"],
        ["Water resistance", "IP68 / IP69"],
        ["Extras", "One-tap AI button, under-display fingerprint"]
      ],
      "Connectivity": [["Network", "4G LTE, Dual SIM"], ["Extras", "NFC, IR blaster"]]
    }
  },
  {
    id: "camon-50",
    name: "Tecno Camon 50",
    brand: "Tecno",
    category: "Mid-range",
    tags: ["New 2026"],
    released: "2026",
    releaseDate: "2026-01-25",
    price: 33500,
    priceNote: "KSh 33,500",
    tagline: "The standard Camon 50 — 144Hz AMOLED, big battery and HiOS 16 at a friendly price.",
    img: [gk("69b28e410023cf0b9595")],
    highlights: {
      display: '6.78" 1.5K AMOLED 144Hz',
      chip: "MediaTek",
      battery: "6,000+ mAh",
      camera: "50MP AI"
    },
    specs: {
      "Display": [
        ["Size & type", '6.78" AMOLED'],
        ["Resolution", "1208 × 2644 (1.5K)"],
        ["Refresh rate", "144Hz"]
      ],
      "Performance": [
        ["RAM", "8GB / 12GB (extendable to 16GB / 24GB)"],
        ["Storage", "128GB / 256GB"]
      ],
      "Software & Design": [
        ["OS", "HiOS 16 (Android-based)"]
      ],
      "Connectivity": [["Network", "4G LTE, Dual SIM"]]
    }
  },
  {
    id: "spark-slim",
    name: "Tecno Spark Slim",
    brand: "Tecno",
    category: "Mid-range",
    tags: ["Slim design"],
    released: "March 2025",
    releaseDate: "2025-03-01",
    price: 29999,
    priceNote: "KSh 29,999",
    tagline: "Just 7.95mm thin with a 5,160 mAh battery — the stylish slim phone.",
    img: [GSM + "tecno-spark-slim.jpg"],
    highlights: {
      display: '6.78" AMOLED 144Hz',
      chip: "MediaTek",
      battery: "5,160 mAh",
      camera: "50MP AI"
    },
    specs: {
      "Display": [
        ["Size & type", '6.78" AMOLED, curved'],
        ["Refresh rate", "144Hz"]
      ],
      "Performance": [
        ["RAM", "8GB"],
        ["Storage", "256GB"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,160 mAh — inside a 7.95 mm body"],
        ["Wired", "45W"]
      ],
      "Software & Design": [
        ["OS", "Android 15, HiOS 15"],
        ["Build", "7.95 mm, ~156 g"],
        ["Colours", "Slim White, Cool Black"]
      ],
      "Connectivity": [["Network", "4G LTE, Dual SIM"]]
    }
  },
  {
    id: "spark-50",
    name: "Tecno Spark 50 4G",
    brand: "Tecno",
    category: "Budget",
    tags: ["New 2026"],
    released: "2026",
    releaseDate: "2026-05-15",
    price: 19500,
    priceNote: "KSh 19,500 (4/128GB)",
    tagline: "Tecno's newest budget Spark — all-day battery and a smooth screen under KSh 20K.",
    img: [pik(147639, "Tecno-Spark-50-4G-b-medium.webp")],
    highlights: {
      display: '6.67" HD+ 120Hz',
      chip: "MediaTek (entry)",
      battery: "5,000+ mAh",
      camera: "AI dual camera"
    },
    specs: {
      "Display": [
        ["Size & type", '6.67" LCD'],
        ["Refresh rate", "Up to 120Hz"]
      ],
      "Performance": [
        ["RAM", "4GB (+ extended)"],
        ["Storage", "128GB"],
        ["Expandable storage", "microSD"]
      ],
      "Software & Design": [
        ["OS", "Android (HiOS)"]
      ],
      "Connectivity": [["Network", "4G LTE, Dual SIM"]]
    }
  },

  /* ============================== INFINIX ============================= */
  {
    id: "note-60-ultra",
    name: "Infinix Note 60 Ultra",
    brand: "Infinix",
    category: "Mid-range",
    tags: ["5G", "Gaming"],
    released: "May 2025",
    releaseDate: "2025-05-20",
    price: 50000,
    priceNote: "Around KSh 50,000",
    tagline: "Gaming-focused flagship killer — AMOLED 144Hz, Dimensity 7400 and ultra-fast charging.",
    highlights: {
      display: '6.78" 1.5K AMOLED 144Hz',
      chip: "Dimensity 7400",
      battery: "5,500 mAh • 80W",
      camera: "50MP OIS"
    },
    specs: {
      "Display": [
        ["Size & type", '6.78" AMOLED'],
        ["Resolution", "1.5K"],
        ["Refresh rate", "144Hz"]
      ],
      "Performance": [
        ["Chipset", "MediaTek Dimensity 7400 (4 nm)"],
        ["RAM", "8GB / 12GB"],
        ["Storage", "256GB"]
      ],
      "Cameras": [
        ["Main", "50MP, OIS"],
        ["Front", "32MP"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,500 mAh"],
        ["Wired", "80W"],
        ["Wireless", "30W (select markets)"]
      ],
      "Software & Design": [
        ["OS", "Android 15, XOS 15"],
        ["Extras", "Active Halo lighting, gaming triggers"]
      ],
      "Connectivity": [["Network", "5G, Dual SIM"], ["Extras", "NFC"]]
    }
  },
  {
    id: "hot-70-pro",
    name: "Infinix Hot 70 Pro 5G",
    brand: "Infinix",
    category: "Budget",
    tags: ["New 2026", "5G"],
    released: "2026",
    releaseDate: "2026-05-20",
    price: 35999,
    priceNote: "KSh 35,999 (down from KSh 38,000)",
    tagline: "The 5G Hot 70 Pro — faster chip, faster network, same big battery value.",
    highlights: {
      display: '6.78" HD+ 120Hz',
      chip: "Dimensity (5G)",
      battery: "6,000 mAh • 45W",
      camera: "50MP AI"
    },
    specs: {
      "Display": [
        ["Size & type", '6.78" IPS LCD'],
        ["Refresh rate", "120Hz"]
      ],
      "Performance": [
        ["RAM", "8GB (+ virtual)"],
        ["Storage", "256GB"]
      ],
      "Battery & Charging": [
        ["Capacity", "6,000 mAh"],
        ["Wired", "45W"]
      ],
      "Software & Design": [
        ["OS", "Android 16, XOS 16"],
        ["Extras", "One-Tap AI button"]
      ],
      "Connectivity": [["Network", "5G, Dual SIM"]]
    }
  },
  {
    id: "note-edge",
    name: "Infinix Note Edge",
    brand: "Infinix",
    category: "Mid-range",
    tags: ["5G", "Curved"],
    released: "2026",
    releaseDate: "2026-02-10",
    price: 31000,
    priceNote: "KSh 31,000 – 35,500",
    tagline: "Slim curved-edge design with 5G — the stylish new Note.",
    img: [GSM + "infinix-note-edge.jpg"],
    highlights: {
      display: '6.78" curved AMOLED',
      chip: "Dimensity (5G)",
      battery: "5,000+ mAh",
      camera: "50MP main"
    },
    specs: {
      "Display": [
        ["Size & type", '6.78" Curved AMOLED'],
        ["Refresh rate", "120Hz"]
      ],
      "Performance": [
        ["RAM", "8GB"],
        ["Storage", "128GB / 256GB"]
      ],
      "Software & Design": [
        ["OS", "Android 16, XOS 16"],
        ["Colours", "Silk Green, Lunar Titanium"]
      ],
      "Connectivity": [["Network", "5G, Dual SIM"]]
    }
  },
  {
    id: "infinix-hot-70",
    name: "Infinix Hot 70",
    brand: "Infinix",
    category: "Budget",
    tags: ["New 2026", "Budget king", "AI button"],
    released: "May 2026",
    releaseDate: "2026-05-20",
    price: 19000,
    priceNote: "KSh 17,999 – 25,000 depending on variant",
    tagline: "Kenya's best-selling budget phone — 6,000 mAh battery, 45W charging and a dedicated AI button under KSh 20K.",
    img: [gk("6a4288c10024c88e94d7")],
    highlights: {
      display: '6.78" HD+ 120Hz',
      chip: "Helio G100 Ultimate",
      battery: "6,000 mAh • 45W",
      camera: "50MP AI"
    },
    specs: {
      "Display": [
        ["Size & type", '6.78" IPS LCD'],
        ["Resolution", "720 × 1576 (HD+)"],
        ["Refresh rate", "120Hz, 240Hz touch sampling"],
        ["Peak brightness", "700 nits"]
      ],
      "Performance": [
        ["Chipset", "MediaTek Helio G100 Ultimate (6 nm)"],
        ["CPU", "Octa-core (2×2.2 GHz A76 + 6×2.0 GHz A55)"],
        ["RAM", "6GB / 8GB (+ 8GB virtual)"],
        ["Storage", "128GB / 256GB UFS 2.2"],
        ["Expandable storage", "microSD up to 1TB"]
      ],
      "Cameras": [
        ["Main", "50MP f/1.85 with Active Halo LED ring"],
        ["Depth", "2MP"],
        ["Front", "8MP f/2.0 with dual LED flash"],
        ["Video", "2K@30fps"]
      ],
      "Battery & Charging": [
        ["Capacity", "6,000 mAh"],
        ["Wired", "45W"],
        ["Reverse", "16W reverse wired"]
      ],
      "Software & Design": [
        ["OS", "Android 16, XOS 16"],
        ["Updates", "3 OS upgrades + 5 years security"],
        ["Water resistance", "IP64"],
        ["Colours", "Dive Blue, Green Texture, Night Pulse, Thermo Orange, Quiet Violet, Silver Dancer"],
        ["Extras", "One-Tap AI button (Folax AI + FlashMemo), 3.5mm jack"]
      ],
      "Connectivity": [["Network", "4G LTE, Dual SIM"], ["Bluetooth", "5.4"], ["Extras", "NFC"]]
    }
  },
  {
    id: "infinix-smart-20",
    name: "Infinix Smart 20",
    brand: "Infinix",
    category: "Budget",
    tags: ["Entry"],
    released: "2026",
    releaseDate: "2026-03-01",
    price: 13500,
    priceNote: "KSh 12,499 – 15,000",
    tagline: "The cheapest way into a big-screen smartphone.",
    highlights: {
      display: '6.6" HD+',
      chip: "Entry octa-core",
      battery: "5,000 mAh",
      camera: "13MP AI"
    },
    specs: {
      "Display": [
        ["Size & type", '6.6" LCD'],
        ["Resolution", "HD+"]
      ],
      "Performance": [
        ["RAM", "3GB / 4GB"],
        ["Storage", "64GB / 128GB"],
        ["Expandable storage", "microSD"]
      ],
      "Battery & Charging": [
        ["Capacity", "5,000 mAh"],
        ["Wired", "18W"]
      ],
      "Software & Design": [
        ["OS", "Android (XOS)"],
        ["Colours", "Cloudline Blue, Polaris Titanium"]
      ],
      "Connectivity": [["Network", "4G LTE, Dual SIM"]]
    }
  }
];

/* Brand accent colours used for fallback artwork */
const BRAND_COLORS = {
  Apple:    ["#4b5563", "#111827"],
  Samsung:  ["#3b82f6", "#1428a0"],
  Google:   ["#60a5fa", "#1a73e8"],
  Xiaomi:   ["#fb923c", "#ea580c"],
  Poco:     ["#fbbf24", "#b45309"],
  Redmi:    ["#f87171", "#dc2626"],
  Tecno:    ["#38bdf8", "#0369a1"],
  Infinix:  ["#34d399", "#047857"]
};
