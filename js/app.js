/* ============================================================
   SpecHub KE — app logic: rendering, filters, search, sort,
   device detail modal and compare view.
   ============================================================ */

const state = {
  query: "",
  brand: "All",
  tier: "all",
  sort: "newest",
  compare: []
};

const grid = document.getElementById("device-grid");
const countLabel = document.getElementById("result-count");
const emptyState = document.getElementById("empty-state");
const searchInput = document.getElementById("search-input");

const fmt = (n) => "KSh " + n.toLocaleString("en-KE");
const fmtShort = (n) =>
  n >= 1000 ? "KSh " + Math.round(n / 1000).toLocaleString("en-KE") + "K" : fmt(n);

/* ---------- helpers ---------- */

function matchesTier(d) {
  if (state.tier === "all") return true;
  if (state.tier === "under30") return d.price < 30000;
  if (state.tier === "30to60") return d.price >= 30000 && d.price < 60000;
  if (state.tier === "60to100") return d.price >= 60000 && d.price < 100000;
  if (state.tier === "over100") return d.price >= 100000;
  return true;
}

function matchesQuery(d) {
  if (!state.query) return true;
  const q = state.query.toLowerCase();
  const hay = [
    d.name, d.brand, d.category, d.tagline,
    d.highlights.chip, d.highlights.camera,
    (d.tags || []).join(" ")
  ].join(" ").toLowerCase();
  return hay.includes(q);
}

function filteredDevices() {
  let list = DEVICES.filter(
    (d) =>
      (state.brand === "All" || d.brand === state.brand) &&
      matchesTier(d) &&
      matchesQuery(d)
  );
  const sorters = {
    newest: (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate),
    priceAsc: (a, b) => a.price - b.price,
    priceDesc: (a, b) => b.price - a.price,
    name: (a, b) => a.name.localeCompare(b.name)
  };
  return list.sort(sorters[state.sort]);
}

/* ---------- brand pills ---------- */

function renderBrandPills() {
  const brands = ["All", ...new Set(DEVICES.map((d) => d.brand))];
  const wrap = document.getElementById("brand-pills");
  wrap.innerHTML = brands
    .map(
      (b) => `
      <button class="pill ${state.brand === b ? "active" : ""}" data-brand="${b}">
        ${b}
        <span class="pill-count">${b === "All" ? DEVICES.length : DEVICES.filter((d) => d.brand === b).length}</span>
      </button>`
    )
    .join("");
  wrap.querySelectorAll(".pill").forEach((p) =>
    p.addEventListener("click", () => {
      state.brand = p.dataset.brand;
      renderBrandPills();
      renderGrid();
    })
  );
}

/* ---------- cards ---------- */

function phoneArt(d, size = "card") {
  const [c1, c2] = BRAND_COLORS[d.brand] || ["#64748b", "#1e293b"];
  const initial = d.brand.charAt(0);
  return `
    <div class="phone-art ${size}" style="--c1:${c1};--c2:${c2}">
      <div class="phone-body">
        <span class="phone-notch"></span>
        <span class="phone-initial">${initial}</span>
        <span class="phone-brand">${d.brand}</span>
      </div>
    </div>`;
}

function cardTemplate(d) {
  const checked = state.compare.includes(d.id) ? "checked" : "";
  const newBadge =
    new Date(d.releaseDate) > new Date("2026-06-01") ? '<span class="badge badge-new">NEW</span>' : "";
  return `
  <article class="device-card" data-id="${d.id}">
    <div class="card-top">
      ${phoneArt(d)}
      <label class="compare-check" title="Select to compare">
        <input type="checkbox" ${checked} data-compare="${d.id}">
        <span>Compare</span>
      </label>
    </div>
    <div class="card-body">
      <div class="card-meta">
        <span class="badge badge-brand">${d.brand}</span>
        <span class="badge badge-cat">${d.category}</span>
        ${newBadge}
      </div>
      <h3 class="card-title">${d.name}</h3>
      <p class="card-tagline">${d.tagline}</p>
      <ul class="key-specs">
        <li><span class="k">Display</span><span class="v">${d.highlights.display}</span></li>
        <li><span class="k">Chip</span><span class="v">${d.highlights.chip}</span></li>
        <li><span class="k">Battery</span><span class="v">${d.highlights.battery}</span></li>
        <li><span class="k">Camera</span><span class="v">${d.highlights.camera}</span></li>
      </ul>
      <div class="card-footer">
        <div class="price-block">
          <span class="price">${fmt(d.price)}</span>
          <span class="price-sub">Released ${d.released}</span>
        </div>
        <button class="btn btn-details" data-open="${d.id}">Full specs →</button>
      </div>
    </div>
  </article>`;
}

function renderGrid() {
  const list = filteredDevices();
  grid.innerHTML = list.map(cardTemplate).join("");
  countLabel.textContent = `Showing ${list.length} of ${DEVICES.length} devices`;
  emptyState.style.display = list.length ? "none" : "block";

  grid.querySelectorAll("[data-open]").forEach((b) =>
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      openDetails(b.dataset.open);
    })
  );
  grid.querySelectorAll(".device-card").forEach((c) =>
    c.addEventListener("click", (e) => {
      if (e.target.closest(".compare-check")) return;
      openDetails(c.dataset.id);
    })
  );
  grid.querySelectorAll("[data-compare]").forEach((cb) =>
    cb.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleCompare(cb.dataset.compare);
    })
  );
}

/* ---------- filters & controls ---------- */

document.querySelectorAll("[data-tier]").forEach((b) =>
  b.addEventListener("click", () => {
    state.tier = b.dataset.tier;
    document.querySelectorAll("[data-tier]").forEach((x) => x.classList.toggle("active", x === b));
    renderGrid();
  })
);

document.getElementById("sort-select").addEventListener("change", (e) => {
  state.sort = e.target.value;
  renderGrid();
});

let searchTimer;
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimer);
  searchTimer = setTimeout(() => {
    state.query = searchInput.value.trim();
    renderGrid();
  }, 150);
});

/* ---------- details modal ---------- */

const detailsModal = document.getElementById("details-modal");

function openDetails(id) {
  const d = DEVICES.find((x) => x.id === id);
  if (!d) return;
  const [c1, c2] = BRAND_COLORS[d.brand] || ["#64748b", "#1e293b"];

  const specSections = Object.entries(d.specs)
    .map(
      ([group, rows]) => `
      <div class="spec-group">
        <h4>${group}</h4>
        <table>
          ${rows.map(([k, v]) => `<tr><td class="spec-key">${k}</td><td>${v}</td></tr>`).join("")}
        </table>
      </div>`
    )
    .join("");

  document.getElementById("details-body").innerHTML = `
    <div class="details-hero" style="--c1:${c1};--c2:${c2}">
      ${phoneArt(d, "big")}
      <div class="details-hero-info">
        <div class="card-meta">
          <span class="badge badge-brand">${d.brand}</span>
          <span class="badge badge-cat">${d.category}</span>
          ${(d.tags || []).map((t) => `<span class="badge badge-tag">${t}</span>`).join("")}
        </div>
        <h2>${d.name}</h2>
        <p>${d.tagline}</p>
        <div class="price-block big">
          <span class="price">${fmt(d.price)}</span>
          <span class="price-sub">${d.priceNote}</span>
        </div>
        <p class="released-line">Released ${d.released} · Prices in Kenyan Shillings (KSh)</p>
      </div>
    </div>
    <div class="details-specs">${specSections}</div>
    <p class="modal-note">Prices are approximate starting prices compiled from Kenyan retailers and may vary by shop, colour and storage variant. Last updated October 2026.</p>
  `;
  detailsModal.classList.add("open");
  document.body.classList.add("no-scroll");
}

function closeModals() {
  detailsModal.classList.remove("open");
  document.getElementById("compare-modal").classList.remove("open");
  document.body.classList.remove("no-scroll");
}

detailsModal.addEventListener("click", (e) => {
  if (e.target === detailsModal) closeModals();
});
document.querySelectorAll("[data-close]").forEach((b) =>
  b.addEventListener("click", closeModals)
);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModals();
});

/* ---------- compare ---------- */

const compareBar = document.getElementById("compare-bar");
const compareCount = document.getElementById("compare-count");

function toggleCompare(id) {
  const i = state.compare.indexOf(id);
  if (i >= 0) state.compare.splice(i, 1);
  else {
    if (state.compare.length >= 3) {
      flashCompareBar("You can compare up to 3 devices");
      return;
    }
    state.compare.push(id);
  }
  updateCompareUI();
}

function flashCompareBar(msg) {
  compareBar.classList.add("shake");
  compareBar.querySelector(".bar-note").textContent = msg;
  setTimeout(() => compareBar.classList.remove("shake"), 500);
}

function updateCompareUI() {
  renderGrid();
  compareCount.textContent = state.compare.length;
  compareBar.classList.toggle("visible", state.compare.length > 0);
  if (state.compare.length === 0) compareBar.querySelector(".bar-note").textContent = "";
  document.getElementById("compare-btn").disabled = state.compare.length < 2;
}

document.getElementById("clear-compare").addEventListener("click", () => {
  state.compare = [];
  updateCompareUI();
});

document.getElementById("compare-btn").addEventListener("click", openCompare);

function openCompare() {
  const items = state.compare.map((id) => DEVICES.find((d) => d.id === id));
  const rows = [
    ["Price in Kenya", (d) => `<strong>${fmt(d.price)}</strong>`],
    ["Released", (d) => d.released],
    ["Display", (d) => d.highlights.display],
    ["Chipset", (d) => d.highlights.chip],
    ["Battery", (d) => d.highlights.battery],
    ["Camera", (d) => d.highlights.camera],
    ["Category", (d) => d.category],
    ["Key specs", (d) => (d.tags || []).join(" · ")]
  ];
  // add common spec rows pulled from first matching spec group entry
  const extraRows = [
    ["RAM", /RAM/],
    ["Storage", /Storage/],
    ["OS", /\bOS\b|Software/]
  ];

  function findSpec(d, re) {
    for (const rows of Object.values(d.specs)) {
      for (const [k, v] of rows) {
        if (re.test(k)) return v;
      }
    }
    return "—";
  }

  document.getElementById("compare-body").innerHTML = `
    <h2>Compare devices</h2>
    <div class="compare-scroll">
      <table class="compare-table">
        <thead>
          <tr>
            <th class="rowhead"></th>
            ${items.map((d) => `<th>${phoneArt(d, "mini")}<span>${d.name}</span></th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              ([label, fn]) => `
            <tr><td class="rowhead">${label}</td>${items.map((d) => `<td>${fn(d)}</td>`).join("")}</tr>`
            )
            .join("")}
          ${extraRows
            .map(
              ([label, re]) => `
            <tr><td class="rowhead">${label}</td>${items
                .map((d) => `<td>${findSpec(d, re)}</td>`)
                .join("")}</tr>`
            )
            .join("")}
        </tbody>
      </table>
    </div>
    <p class="modal-note">Prices are approximate starting prices in KSh compiled from Kenyan retailers (Oct 2026) and may vary.</p>
  `;
  document.getElementById("compare-modal").classList.add("open");
  document.body.classList.add("no-scroll");
}

document.getElementById("compare-modal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("compare-modal")) closeModals();
});

/* ---------- hero stats ---------- */

function renderStats() {
  const brands = new Set(DEVICES.map((d) => d.brand)).size;
  const prices = DEVICES.map((d) => d.price);
  document.getElementById("stat-devices").textContent = DEVICES.length;
  document.getElementById("stat-brands").textContent = brands;
  document.getElementById("stat-low").textContent = fmtShort(Math.min(...prices));
  document.getElementById("stat-high").textContent = fmtShort(Math.max(...prices));
}

/* ---------- init ---------- */
renderStats();
renderBrandPills();
renderGrid();
