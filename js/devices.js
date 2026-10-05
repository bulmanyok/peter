/* ============================================================
   SpecHub KE — Device catalog data
   Prices are approximate STARTING prices in Kenyan Shillings
   compiled from Kenyan retailers (Oct 2026).
   ============================================================ */

const DEVICES = [
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
    tagline: "Apple's most powerful iPhone — A19 Pro chip, triple 48MP Pro cameras and up to 33 hours of video playback.",
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
      "Connectivity": [
        ["Network", "5G"],
        ["SIM", "Nano-SIM + eSIM"],
        ["Bluetooth", "6.0"],
        ["Port", "USB-C 3.2"]
      ]
    }
  },

  {
    id: "galaxy-s26-ultra",
    name: "Samsung Galaxy S26 Ultra",
    brand: "Samsung",
    category: "Flagship",
    tags: ["5G", "S Pen"],
    released: "February 2026",
    releaseDate: "2026-02-25",
    price: 174500,
    priceNote: "From KSh 174,500 (12/256GB) • up to ~KSh 314,000 (1TB)",
    tagline: "Samsung's 2026 Ultra flagship — 200MP quad camera, Snapdragon 8 Elite Gen 5 and a new Privacy Display.",
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
        ["Storage", "256GB / 512GB / 1TB UFS 4.0"],
        ["Expandable storage", "No"]
      ],
      "Cameras": [
        ["Main", "200MP f/1.4, OIS, 1/1.3\" sensor"],
        ["Ultrawide", "50MP f/1.9"],
        ["Telephoto", "10MP 3× + 50MP 5× periscope (both OIS)"],
        ["Front", "12MP"],
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
        ["Updates", "7 OS upgrades + 7 years security"],
        ["Build", "214 g, 7.9 mm — slimmest Ultra yet"],
        ["Water resistance", "IP68"],
        ["Extras", "S Pen included, DeX"]
      ],
      "Connectivity": [
        ["Network", "5G"],
        ["SIM", "Nano-SIM + eSIM"],
        ["Wi-Fi", "Wi-Fi 7"],
        ["Port", "USB-C 3.2"]
      ]
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
    price: 162000,
    priceNote: "From KSh 162,000 (12/256GB) • KSh 185,000 (12/512GB)",
    tagline: "The lightest, thinnest Galaxy Fold ever — with a 200MP camera and tablet-sized inner display.",
    highlights: {
      display: '8.0" foldable AMOLED 120Hz',
      chip: "Snapdragon 8 Elite",
      battery: "4,400 mAh",
      camera: "200MP main"
    },
    specs: {
      "Display": [
        ["Main (inner)", '8.0" Foldable Dynamic LTPO AMOLED 2X, 120Hz'],
        ["Cover", '6.5" Dynamic LTPO AMOLED 2X, 120Hz'],
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
        ["Build", "Advanced Armour Aluminum frame, ~215 g"],
        ["Water resistance", "IP48"],
        ["Colours", "Blue Shadow, Jet Black, Silver Shadow"]
      ],
      "Connectivity": [
        ["Network", "5G"],
        ["SIM", "Nano-SIM + eSIM"],
        ["Port", "USB-C 3.2"]
      ]
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
        ["Extras", "Leica imaging styles, Photography Kit accessory support"]
      ],
      "Connectivity": [
        ["Network", "5G"],
        ["SIM", "Dual Nano-SIM + eSIM"],
        ["Port", "USB-C 3.2"]
      ]
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
    priceNote: "From KSh 79,000 (128GB) • KSh 95,000–101,000 at some stores",
    tagline: "Google's AI-first flagship with Tensor G5, a 5× telephoto and 7 years of updates.",
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
      "Connectivity": [
        ["Network", "5G"],
        ["SIM", "Nano-SIM + eSIM"],
        ["Wi-Fi", "Wi-Fi 7"],
        ["Security", "Ultrasonic fingerprint, face unlock"]
      ]
    }
  },

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
    highlights: {
      display: '6.67" 2K AMOLED 120Hz',
      chip: "Snapdragon 8 Elite",
      battery: "5,300 mAh • 120W",
      camera: "50MP OIS triple"
    },
    specs: {
      "Display": [
        ["Size & type", '6.73" AMOLED'],
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
      "Connectivity": [
        ["Network", "5G"],
        ["SIM", "Dual Nano-SIM"],
        ["Port", "USB-C"]
      ]
    }
  },

  {
    id: "camon-50-ultra",
    name: "Tecno Camon 50 Ultra 5G",
    brand: "Tecno",
    category: "Mid-range",
    tags: ["5G", "Rugged"],
    released: "March 2026",
    releaseDate: "2026-03-15",
    price: 57500,
    priceNote: "KSh 57,500 – 58,600 depending on retailer",
    tagline: "MIL-STD-810H rugged build, 3× optical zoom and a huge 6,500 mAh battery — the Camon series goes flagship-killer.",
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
      "Connectivity": [
        ["Network", "5G, Dual SIM"],
        ["Extras", "NFC, IR blaster"],
        ["Port", "USB-C"]
      ]
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
      "Connectivity": [
        ["Network", "5G, Dual SIM"],
        ["Extras", "NFC, IR blaster, stereo speakers"],
        ["Port", "USB-C"]
      ]
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
    tagline: "200MP camera, 6,500 mAh silicon-carbon battery and 100W charging — the new mid-range benchmark.",
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
      "Connectivity": [
        ["Network", "5G"],
        ["SIM", "Nano-SIM"],
        ["Wi-Fi", "Wi-Fi 6, Bluetooth 5.4"],
        ["Port", "USB-C 2.0, OTG"]
      ]
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
    priceNote: "From KSh 40,500 (8/128GB) • ~KSh 46,500 (8/256GB)",
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
      "Connectivity": [
        ["Network", "5G"],
        ["SIM", "Nano-SIM + eSIM"],
        ["Extras", "NFC, stereo speakers"],
        ["Port", "USB-C"]
      ]
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
      "Connectivity": [
        ["Network", "4G LTE, Dual SIM"],
        ["Extras", "NFC, IR blaster"],
        ["Port", "USB-C"]
      ]
    }
  },

  {
    id: "redmi-note-17",
    name: "Redmi Note 17 4G",
    brand: "Redmi",
    category: "Mid-range",
    tags: ["New", "Big battery"],
    released: "August 2026",
    releaseDate: "2026-08-10",
    price: 33000,
    priceNote: "KSh 33,000 (8/256GB)",
    tagline: "A monster 7,700 mAh silicon-carbon battery rated at 1,000 charge cycles — nearly three days per charge.",
    highlights: {
      display: '6.99" FHD+ AMOLED 120Hz',
      chip: "Snapdragon 6s 4G Gen 2",
      battery: "7,700 mAh • 45W",
      camera: "50MP AI camera"
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
      "Connectivity": [
        ["Network", "4G LTE, Dual SIM"],
        ["Port", "USB-C"]
      ]
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
      "Connectivity": [
        ["Network", "5G"],
        ["SIM", "Nano-SIM"],
        ["Extras", "NFC"],
        ["Port", "USB-C"]
      ]
    }
  },

  {
    id: "infinix-hot-70",
    name: "Infinix Hot 70",
    brand: "Infinix",
    category: "Budget",
    tags: ["Budget king", "AI button"],
    released: "May 2026",
    releaseDate: "2026-05-20",
    price: 19000,
    priceNote: "KSh 17,999 – 25,000 depending on variant",
    tagline: "Kenya's best-selling budget phone — 6,000 mAh battery, 45W charging and a dedicated AI button under KSh 20K.",
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
      "Connectivity": [
        ["Network", "4G LTE, Dual SIM"],
        ["Bluetooth", "5.4"],
        ["Extras", "NFC"],
        ["Port", "USB-C"]
      ]
    }
  }
];

/* Brand accent colours used for card artwork */
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
