# SpecHub KE 📱🇰🇪

A website showcasing the latest phones and devices in Kenya — with **complete specifications** and **prices in Kenyan Shillings (KSh)**.

## Features

- 🔎 **Live search** — search by name, brand, chipset or feature
- 🏷️ **Filters** — by brand (Apple, Samsung, Google, Xiaomi, Redmi, Poco, Tecno, Infinix) and by price tier (Under KSh 30K → Above KSh 100K)
- ↕️ **Sorting** — newest first, price low/high, name
- 📋 **Full spec sheets** — every device opens a detailed modal with grouped specs: display, performance, cameras, battery & charging, software & design, connectivity
- ⚖️ **Compare** — select up to 3 devices and compare them side by side
- 💰 **KSh pricing** — all prices are starting prices compiled from Kenyan retailers (Oct 2026)

## Devices included (Oct 2026)

iPhone 17 Pro Max, Samsung Galaxy S26 Ultra, Galaxy Z Fold7, Xiaomi 15 Ultra, Google Pixel 10, Poco F7 Ultra, Poco X7 Pro, Tecno Camon 50 Ultra 5G, Tecno Camon 40 Pro, Redmi Note 15 Pro+ 5G, Redmi Note 17 4G, Samsung Galaxy A56 5G, Samsung Galaxy A26 5G, Infinix Hot 70.

## Running locally

Pure static site — no build step. Either open `index.html` directly, or serve it:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Structure

```
index.html        Page markup
css/styles.css    Styling (dark theme, responsive)
js/devices.js     Device catalog data (specs + KSh prices)
js/app.js         Rendering, filters, search, modals, compare
```

## Adding a device

Add an object to the `DEVICES` array in `js/devices.js` following the existing schema (`id`, `name`, `brand`, `category`, `released`, `releaseDate`, `price`, `highlights`, grouped `specs`). The grid, filters, stats and compare view update automatically.

---

*Prices are approximate starting prices from Kenyan retailers and may vary.*
