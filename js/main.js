/* ============================================================
   SLC Tow Trucks — Main JS
   ============================================================ */

/* ---- Smooth scroll for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

/* ---- Hero search redirect ---- */
(function () {
  const form = document.getElementById('hero-search-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const q = document.getElementById('hero-search-input').value.trim();
    window.location.href = q
      ? `listings.html?q=${encodeURIComponent(q)}`
      : 'listings.html';
  });
})();

/* ---- Listings page filter/search ---- */
(function () {
  const grid = document.getElementById('listings-grid');
  if (!grid || typeof COMPANIES === 'undefined') return;

  // Render all cards (featured first)
  const sorted = [...COMPANIES].sort((a, b) => (b.featured - a.featured) || (b.rating - a.rating));
  grid.innerHTML = sorted.map(renderCard).join('');

  const searchInput  = document.getElementById('filter-search');
  const areaSelect   = document.getElementById('filter-area');
  const serviceSelect= document.getElementById('filter-service');
  const hoursSelect  = document.getElementById('filter-hours');
  const countEl      = document.getElementById('results-count');

  function applyFilters() {
    const q       = (searchInput?.value || '').toLowerCase().trim();
    const area    = (areaSelect?.value || '').toLowerCase();
    const service = (serviceSelect?.value || '').toLowerCase();
    const hours   = (hoursSelect?.value || '');

    let visible = 0;
    grid.querySelectorAll('.listing-card').forEach(card => {
      const name     = card.querySelector('.card-name')?.textContent.toLowerCase() || '';
      const areas    = card.dataset.areas || '';
      const services = card.dataset.services || '';
      const is247    = card.dataset['247'] === 'true';

      const matchQ = !q || name.includes(q) || areas.includes(q) || services.includes(q);
      const matchArea = !area || areas.includes(area);
      const matchService = !service || services.includes(service);
      const matchHours = !hours || (hours === '247' && is247);

      const show = matchQ && matchArea && matchService && matchHours;
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });

    if (countEl) countEl.textContent = `${visible} compan${visible === 1 ? 'y' : 'ies'} found`;
  }

  searchInput?.addEventListener('input', applyFilters);
  areaSelect?.addEventListener('change', applyFilters);
  serviceSelect?.addEventListener('change', applyFilters);
  hoursSelect?.addEventListener('change', applyFilters);

  // Handle URL query param ?q=
  const urlParams = new URLSearchParams(window.location.search);
  const urlQ = urlParams.get('q');
  if (urlQ && searchInput) { searchInput.value = urlQ; applyFilters(); }

  // Initial count
  applyFilters();
})();

/* ---- Profile page: load company by ?id= ---- */
(function () {
  const profileEl = document.getElementById('profile-container');
  if (!profileEl || typeof COMPANIES === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const company = COMPANIES.find(c => c.id === id) || COMPANIES[0];

  // Update page title
  document.title = `${company.name} — SLC Tow Trucks`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = `${company.name} in ${company.areas[0]}. ${company.rating}★ rating from ${company.reviews} reviews. Call ${company.phone}. Services: ${company.services.join(', ')}.`;

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = `${company.name} — SLC Tow Trucks`;

  // Sample reviews
  const sampleReviews = [
    { name: "James T.", rating: 5, date: "Feb 2026", text: "Incredible service — showed up in under 20 minutes and had me back on the road quickly. Highly recommended!" },
    { name: "Maria S.", rating: 5, date: "Jan 2026", text: "Very professional and friendly. The driver was courteous and the price was exactly what they quoted. Will use again." },
    { name: "Derek L.", rating: 4, date: "Dec 2025", text: "Good service overall, arrived within the estimated window. Pricing was fair and the tow was smooth." },
    { name: "Alyssa M.", rating: 5, date: "Nov 2025", text: "Locked my keys in the car late at night — they were there in 18 minutes. Lifesavers!" }
  ];

  // Build profile HTML
  profileEl.innerHTML = `
    <section class="profile-hero">
      <div class="container">
        <nav class="breadcrumb">
          <a href="index.html">Home</a><span class="sep">›</span>
          <a href="listings.html">Listings</a><span class="sep">›</span>
          <span>${company.name}</span>
        </nav>
        <div class="profile-header">
          <div class="profile-logo">🚛</div>
          <div class="profile-info">
            <h1>${company.name}</h1>
            <div class="card-rating" style="gap:8px;font-size:1rem;">
              <span class="stars" style="font-size:1.1rem;">${renderStars(company.rating)}</span>
              <strong>${company.rating}</strong>
              <span class="review-count">(${company.reviews} reviews)</span>
            </div>
            <div class="profile-meta" style="margin-top:10px;">
              ${renderBadges(company)}
              ${company.featured ? '<span class="badge" style="border-color:rgba(249,115,22,.5);color:var(--accent);">⚡ Featured</span>' : ''}
            </div>
            <div class="profile-actions">
              <a href="tel:${company.phoneRaw}" class="btn btn-primary">📞 Call ${company.phone}</a>
              <a href="#reviews" class="btn btn-ghost">Read Reviews</a>
              ${!company.featured ? '<a href="pricing.html" class="btn btn-outline btn-sm">Upgrade Listing</a>' : ''}
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="profile-grid">
        <div>
          <div class="info-card">
            <h3>About ${company.name}</h3>
            <p style="color:var(--text-dim);line-height:1.7;">${company.description}</p>
          </div>

          <div class="info-card">
            <h3>Services Offered</h3>
            <div class="card-services" style="gap:8px;">
              ${company.services.map(s => `<span class="service-tag" style="font-size:.85rem;padding:5px 12px;">${s}</span>`).join('')}
            </div>
          </div>

          <div class="info-card" id="reviews">
            <h3>Customer Reviews</h3>
            ${sampleReviews.map(r => `
              <div class="review-item">
                <div class="review-header">
                  <div>
                    <span class="reviewer">${r.name}</span>
                    <span class="stars" style="margin-left:8px;font-size:.9rem;">${'★'.repeat(r.rating)}</span>
                  </div>
                  <span class="review-date">${r.date}</span>
                </div>
                <p class="review-text">${r.text}</p>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <div class="info-card">
            <h3>Contact & Details</h3>
            <div class="detail-row"><span class="detail-label">📞 Phone</span><span class="detail-value"><a href="tel:${company.phoneRaw}" style="color:var(--accent);font-weight:700;">${company.phone}</a></span></div>
            <div class="detail-row"><span class="detail-label">📍 Address</span><span class="detail-value">${company.address}</span></div>
            <div class="detail-row"><span class="detail-label">⏱ Response</span><span class="detail-value">${company.responseTime}</span></div>
            <div class="detail-row"><span class="detail-label">📅 Est.</span><span class="detail-value">${company.yearEstablished}</span></div>
            <div class="detail-row"><span class="detail-label">🕐 Hours</span><span class="detail-value">${company.open247 ? '24/7 — Always Open' : 'Call for hours'}</span></div>
          </div>

          <div class="info-card">
            <h3>Service Areas</h3>
            <div class="card-services" style="gap:7px;">
              ${company.areas.map(a => `<span class="service-tag" style="font-size:.82rem;padding:4px 10px;">📍 ${a}</span>`).join('')}
            </div>
          </div>

          <div class="info-card" style="background:linear-gradient(135deg,var(--bg2),#1f2d45);border-color:rgba(249,115,22,.3);">
            <h3 style="color:var(--accent);">Need a Tow Now?</h3>
            <p style="color:var(--text-dim);font-size:.9rem;margin:8px 0 16px;">Available ${company.open247 ? '24/7' : 'daily'} — avg. response ${company.responseTime}</p>
            <a href="tel:${company.phoneRaw}" class="btn btn-primary btn-block">Call ${company.phone}</a>
          </div>
        </div>
      </div>
    </div>
  `;
})();

/* ---- Submit form ---- */
(function () {
  const form = document.getElementById('submit-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    btn.textContent = '✓ Submitted! We'll be in touch within 24 hours.';
    btn.disabled = true;
    btn.style.background = 'var(--success)';
  });
})();
