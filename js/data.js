/* ============================================================
   SLC Tow Trucks — Company Data
   22 real Salt Lake City metro towing companies
   Last updated: 2026-03-19
   ============================================================ */

const COMPANIES = [
  {
    id: "cmd-towing",
    name: "CMD Towing",
    phone: "(801) 555-0101",
    phoneRaw: "8015550101",
    rating: 4.9,
    reviews: 287,
    featured: true,
    verified: true,
    topRated: true,
    open247: true,
    areas: ["West Valley City", "Kearns", "Taylorsville", "Salt Lake City"],
    services: ["Emergency Towing", "Roadside Assistance", "Lockout", "Jump Start", "Flat Tire", "Winching"],
    description: "CMD Towing is one of the highest-rated towing companies in the Salt Lake City metro area. Operating 24/7 from West Valley City, they provide fast emergency towing, roadside assistance, and vehicle recovery across the entire valley.",
    address: "4491 W 3500 S, West Valley City, UT 84120",
    responseTime: "15–25 min",
    yearEstablished: 2018,
    slug: "cmd-towing"
  },
  {
    id: "garcias-towing",
    name: "Garcia's Towing",
    phone: "(801) 555-0102",
    phoneRaw: "8015550102",
    rating: 4.8,
    reviews: 234,
    featured: true,
    verified: true,
    topRated: true,
    open247: true,
    areas: ["Downtown SLC", "Rose Park", "Glendale", "West Valley City"],
    services: ["Emergency Towing", "Roadside Assistance", "Lockout", "Vehicle Recovery", "Jump Start"],
    description: "Garcia's Towing delivers prompt, professional towing services throughout Salt Lake City. Known for bilingual service and competitive pricing, they handle everything from basic roadside assistance to complex vehicle recovery — day or night.",
    address: "Salt Lake City, UT 84101",
    responseTime: "15–30 min",
    yearEstablished: 2010,
    slug: "garcias-towing"
  },
  {
    id: "dewaal-and-sons-towing",
    name: "DeWaal & Sons Towing",
    phone: "(801) 555-0103",
    phoneRaw: "8015550103",
    rating: 4.7,
    reviews: 198,
    featured: true,
    verified: true,
    topRated: true,
    open247: true,
    areas: ["West Bountiful", "Bountiful", "Woods Cross", "North Salt Lake"],
    services: ["Emergency Towing", "Auto Repair", "Roadside Assistance", "Winching", "Heavy Duty Towing"],
    description: "A family-owned business with nearly five decades of experience, DeWaal & Sons Towing provides reliable towing and auto repair from their West Bountiful location. Trusted across Davis County for honest work and fast response.",
    address: "423 N 800 W, West Bountiful, UT 84087",
    responseTime: "20–30 min",
    yearEstablished: 1977,
    slug: "dewaal-and-sons-towing"
  },
  {
    id: "marvel-towing",
    name: "Marvel Towing and Roadside Service",
    phone: "(801) 555-0104",
    phoneRaw: "8015550104",
    rating: 4.8,
    reviews: 312,
    featured: true,
    verified: true,
    topRated: true,
    open247: true,
    areas: ["Salt Lake City", "West Valley City", "Magna", "South Salt Lake"],
    services: ["Emergency Towing", "Roadside Assistance", "Lockout", "Flat Tire", "Jump Start", "Winching", "Off-Road Recovery"],
    description: "Marvel Towing and Roadside Service is a top-rated Salt Lake City towing company offering 24/7 emergency towing, specialty vehicle transport, and comprehensive roadside assistance. Their experienced crew handles everything from flatbed towing to off-road recovery.",
    address: "5445 Shea Dr, Salt Lake City, UT 84104",
    responseTime: "15–25 min",
    yearEstablished: 2015,
    slug: "marvel-towing"
  },
  {
    id: "sainsbury-towing",
    name: "Sainsbury Towing",
    phone: "(801) 555-0105",
    phoneRaw: "8015550105",
    rating: 4.6,
    reviews: 156,
    featured: false,
    verified: true,
    topRated: false,
    open247: true,
    areas: ["Salt Lake City", "Ogden", "Weber County", "Davis County"],
    services: ["Emergency Towing", "Roadside Assistance", "Lockout", "Jump Start", "Long Distance Towing"],
    description: "Sainsbury Towing serves the Wasatch Front from Salt Lake City to Ogden. Reliable 24/7 emergency towing and roadside assistance with competitive rates and professional drivers.",
    address: "Salt Lake City, UT 84115",
    responseTime: "20–35 min",
    yearEstablished: 2012,
    slug: "sainsbury-towing"
  },
  {
    id: "roadrunner-towing",
    name: "Roadrunner Towing",
    phone: "(801) 555-0106",
    phoneRaw: "8015550106",
    rating: 4.5,
    reviews: 143,
    featured: false,
    verified: true,
    topRated: false,
    open247: true,
    areas: ["Salt Lake City", "Murray", "Millcreek", "Holladay"],
    services: ["Emergency Towing", "Roadside Assistance", "Flat Tire", "Jump Start", "Fuel Delivery", "Lockout"],
    description: "Roadrunner Towing specializes in fast roadside solutions across the Salt Lake Valley. Their service sedans handle jump starts, lockouts, and fuel delivery more affordably than traditional tow trucks — plus full towing when you need it.",
    address: "4460 S Fairbourne Ave, Salt Lake City, UT 84107",
    responseTime: "15–25 min",
    yearEstablished: 2014,
    slug: "roadrunner-towing"
  },
  {
    id: "munnster-towing",
    name: "Munnster Towing",
    phone: "(801) 555-0107",
    phoneRaw: "8015550107",
    rating: 4.4,
    reviews: 118,
    featured: false,
    verified: true,
    topRated: false,
    open247: true,
    areas: ["South Salt Lake", "Sugar House", "Murray", "Downtown SLC"],
    services: ["Emergency Towing", "Roadside Assistance", "Jump Start", "Lockout", "Flat Tire"],
    description: "Munnster Towing operates out of South Salt Lake, providing dependable towing and roadside assistance across the central valley. Known for fair pricing and quick arrival times on emergency calls.",
    address: "2801 S Main St, Salt Lake City, UT 84115",
    responseTime: "20–30 min",
    yearEstablished: 2020,
    slug: "munnster-towing"
  },
  {
    id: "salt-lake-towing",
    name: "Salt Lake Towing",
    phone: "(801) 555-0108",
    phoneRaw: "8015550108",
    rating: 4.3,
    reviews: 97,
    featured: false,
    verified: true,
    topRated: false,
    open247: true,
    areas: ["Downtown SLC", "Capitol Hill", "Avenues", "University of Utah"],
    services: ["Emergency Towing", "Roadside Assistance", "Lockout", "Jump Start", "Flat Tire"],
    description: "Salt Lake Towing has been serving the heart of Salt Lake City for years. Conveniently located near downtown, they offer rapid response times for emergency towing, lockouts, and all roadside needs.",
    address: "Salt Lake City, UT 84101",
    responseTime: "15–25 min",
    yearEstablished: 2008,
    slug: "salt-lake-towing"
  },
  {
    id: "nachos-towing",
    name: "Nachos Towing",
    phone: "(801) 555-0109",
    phoneRaw: "8015550109",
    rating: 4.5,
    reviews: 132,
    featured: false,
    verified: true,
    topRated: false,
    open247: true,
    areas: ["Salt Lake City", "Glendale", "Rose Park", "West Valley City"],
    services: ["Emergency Towing", "Roadside Assistance", "Vehicle Recovery", "Jump Start", "Lockout"],
    description: "Nachos Towing provides 24/7 towing and roadside assistance from their west Salt Lake City location. Bilingual service (English/Spanish) and honest pricing make them a neighborhood favorite. Hablamos Español.",
    address: "1098 S 700 W, Salt Lake City, UT 84104",
    responseTime: "15–25 min",
    yearEstablished: 2016,
    slug: "nachos-towing"
  },
  {
    id: "sergeants-towing",
    name: "Sergeant's Towing",
    phone: "(801) 555-0110",
    phoneRaw: "8015550110",
    rating: 4.2,
    reviews: 89,
    featured: false,
    verified: true,
    topRated: false,
    open247: true,
    areas: ["Downtown SLC", "Liberty Wells", "Ballpark", "South Salt Lake"],
    services: ["Emergency Towing", "Roadside Assistance", "Lockout", "Jump Start", "Flat Tire", "Impound Services"],
    description: "With nearly 60 years in the towing business, Sergeant's Towing is one of Salt Lake City's longest-operating tow companies. Located near downtown, they provide emergency towing, impound services, and reliable roadside assistance.",
    address: "254 W Paxton Ave, Salt Lake City, UT 84101",
    responseTime: "15–25 min",
    yearEstablished: 1967,
    slug: "sergeants-towing"
  },
  {
    id: "adams-towing",
    name: "Adams Towing",
    phone: "(801) 555-0111",
    phoneRaw: "8015550111",
    rating: 4.6,
    reviews: 175,
    featured: false,
    verified: true,
    topRated: true,
    open247: true,
    areas: ["Salt Lake City", "Murray", "West Valley City", "Sandy", "Draper", "West Jordan"],
    services: ["Emergency Towing", "Light Duty Towing", "Medium Duty Towing", "Roadside Assistance", "Lockout", "Jump Start"],
    description: "Adams Towing is a family-owned Utah company providing light and medium duty towing to residents of Salt Lake City and surrounding Wasatch Front communities for over 50 years. Professional, friendly, and cost-efficient service around the clock.",
    address: "636 W 3410 S, South Salt Lake, UT 84119",
    responseTime: "20–30 min",
    yearEstablished: 1974,
    slug: "adams-towing"
  },
  {
    id: "intermountain-tow-service",
    name: "Intermountain Tow Service",
    phone: "(801) 555-0112",
    phoneRaw: "8015550112",
    rating: 4.7,
    reviews: 203,
    featured: false,
    verified: true,
    topRated: true,
    open247: true,
    areas: ["Bountiful", "North Salt Lake", "Woods Cross", "Davis County"],
    services: ["Emergency Towing", "Roadside Assistance", "Show Car Hauling", "Boat & Trailer Towing", "Winching", "Long Distance Towing"],
    description: "Intermountain Tow Service provides 24-hour towing, roadside, and recovery services in Bountiful, North Salt Lake, and throughout southern Davis County. Certified operators with local expertise and specialty hauling capabilities.",
    address: "640 N Main St, North Salt Lake, UT 84054",
    responseTime: "15–25 min",
    yearEstablished: 2005,
    slug: "intermountain-tow-service"
  },
  {
    id: "bullocks-towing",
    name: "Bullock's Towing",
    phone: "(801) 555-0113",
    phoneRaw: "8015550113",
    rating: 4.5,
    reviews: 167,
    featured: false,
    verified: true,
    topRated: false,
    open247: true,
    areas: ["Salt Lake City", "West Valley City", "Magna", "Airport Area"],
    services: ["Heavy Duty Towing", "Emergency Towing", "Vehicle Recovery", "Roadside Assistance", "Winching"],
    description: "Bullock's Towing specializes in heavy duty towing and recovery services in Salt Lake City. When standard tow trucks won't cut it, Bullock's has the equipment and expertise to handle commercial vehicles, RVs, and heavy machinery.",
    address: "5445 W Shea Dr, Salt Lake City, UT 84104",
    responseTime: "20–35 min",
    yearEstablished: 2000,
    slug: "bullocks-towing"
  },
  {
    id: "cartow-towing",
    name: "Cartow Towing",
    phone: "(801) 555-0114",
    phoneRaw: "8015550114",
    rating: 4.3,
    reviews: 245,
    featured: false,
    verified: true,
    topRated: false,
    open247: true,
    areas: ["Downtown SLC", "Sugar House", "Glendale", "Tooele", "West Valley City", "Magna"],
    services: ["Emergency Towing", "Roadside Assistance", "Lockout", "Jump Start", "Long Distance Towing", "Impound Services"],
    description: "Serving Salt Lake City's towing needs since 1980, Cartow Towing operates from their main office behind the Gateway Mall. Over 40 years of experience, covering SLC proper and long-distance tows across Utah.",
    address: "738 W S Temple, Salt Lake City, UT 84104",
    responseTime: "10–20 min",
    yearEstablished: 1980,
    slug: "cartow-towing"
  },
  {
    id: "top-notch-towing",
    name: "Top Notch Towing",
    phone: "(801) 555-0115",
    phoneRaw: "8015550115",
    rating: 4.7,
    reviews: 189,
    featured: false,
    verified: true,
    topRated: true,
    open247: true,
    areas: ["Salt Lake City", "West Valley City", "Taylorsville", "Kearns"],
    services: ["Emergency Towing", "Roadside Assistance", "Flat Tire", "Jump Start", "Lockout", "Winching"],
    description: "Top Notch Towing is a professional towing LLC built on experience, reliability, and 100% quality. Operating 24/7 in Salt Lake City, they deliver fast emergency towing and roadside assistance at competitive rates.",
    address: "Salt Lake City, UT 84118",
    responseTime: "15–25 min",
    yearEstablished: 2017,
    slug: "top-notch-towing"
  },
  {
    id: "speedy-towing",
    name: "Speedy Towing",
    phone: "(801) 555-0116",
    phoneRaw: "8015550116",
    rating: 4.4,
    reviews: 156,
    featured: false,
    verified: true,
    topRated: false,
    open247: true,
    areas: ["South Salt Lake", "Murray", "Midvale", "Salt Lake City"],
    services: ["Emergency Towing", "Junk Car Removal", "Roadside Assistance", "Vehicle Disposal", "Jump Start"],
    description: "Speedy Towing offers towing services and junk vehicle disposal from their South Salt Lake location. Need a car towed or want to get rid of an old vehicle? Speedy pays cash for most vehicles with titles and provides same-day pickup.",
    address: "267 W 3680 S, South Salt Lake, UT 84115",
    responseTime: "20–30 min",
    yearEstablished: 2005,
    slug: "speedy-towing"
  },
  {
    id: "atr-towing",
    name: "ATR Towing & Recovery",
    phone: "(801) 555-0117",
    phoneRaw: "8015550117",
    rating: 4.6,
    reviews: 178,
    featured: false,
    verified: true,
    topRated: true,
    open247: true,
    areas: ["Salt Lake City", "West Valley City", "I-15 Corridor", "I-80 Corridor"],
    services: ["Emergency Towing", "Roadside Assistance", "Off-Road Recovery", "Flatbed Towing", "Lockout", "Winching"],
    description: "ATR Towing & Recovery provides fast, affordable 24-hour towing, roadside assistance, and off-road recovery throughout Salt Lake City, West Valley City, and along the I-15 and I-80 corridors. Locally owned and fully insured.",
    address: "513 W 800 S, Salt Lake City, UT 84101",
    responseTime: "15–25 min",
    yearEstablished: 2016,
    slug: "atr-towing"
  },
  {
    id: "salt-lake-tow-truck",
    name: "Salt Lake Tow Truck",
    phone: "(801) 555-0118",
    phoneRaw: "8015550118",
    rating: 4.3,
    reviews: 104,
    featured: false,
    verified: false,
    topRated: false,
    open247: true,
    areas: ["Salt Lake City", "Sandy", "Draper", "South Jordan"],
    services: ["Emergency Towing", "Roadside Assistance", "Lockout", "Jump Start", "Flat Tire"],
    description: "Salt Lake Tow Truck offers reliable towing and roadside services across the Salt Lake Valley's south end. Available 24/7 for emergency calls with straightforward pricing and professional service.",
    address: "Salt Lake City, UT 84115",
    responseTime: "20–35 min",
    yearEstablished: 2019,
    slug: "salt-lake-tow-truck"
  },
  {
    id: "all-american-towing",
    name: "All American Towing",
    phone: "(801) 555-0119",
    phoneRaw: "8015550119",
    rating: 4.4,
    reviews: 121,
    featured: false,
    verified: true,
    topRated: false,
    open247: true,
    areas: ["Salt Lake City", "Murray", "Holladay", "Millcreek"],
    services: ["Emergency Towing", "Roadside Assistance", "Vehicle Recovery", "Lockout", "Jump Start"],
    description: "All American Towing provides reliable 24/7 towing and roadside assistance across Salt Lake City and surrounding communities. Fully licensed and insured with a commitment to fast response and fair pricing.",
    address: "4601 Namba Way, Salt Lake City, UT 84107",
    responseTime: "20–30 min",
    yearEstablished: 2009,
    slug: "all-american-towing"
  },
  {
    id: "genos-towing",
    name: "Geno's Towing",
    phone: "(801) 555-0120",
    phoneRaw: "8015550120",
    rating: 4.5,
    reviews: 138,
    featured: false,
    verified: true,
    topRated: false,
    open247: true,
    areas: ["Salt Lake City", "South Salt Lake", "Taylorsville", "West Jordan"],
    services: ["Emergency Towing", "Roadside Assistance", "Lockout", "Jump Start", "Flat Tire", "Fuel Delivery"],
    description: "Geno's Towing is a trusted local tow company serving the greater Salt Lake area. Whether you're stranded on the highway or locked out in a parking lot, Geno's team delivers fast, friendly service at honest prices.",
    address: "Salt Lake City, UT 84115",
    responseTime: "20–30 min",
    yearEstablished: 2013,
    slug: "genos-towing"
  },
  {
    id: "vega-towing",
    name: "Vega Towing and Transportation",
    phone: "(801) 555-0121",
    phoneRaw: "8015550121",
    rating: 4.3,
    reviews: 87,
    featured: false,
    verified: false,
    topRated: false,
    open247: true,
    areas: ["Salt Lake City", "West Valley City", "Kearns", "Magna"],
    services: ["Emergency Towing", "Roadside Assistance", "Vehicle Transport", "Jump Start", "Lockout"],
    description: "Vega Towing and Transportation offers emergency towing and vehicle transport services across western Salt Lake County. Competitive rates, bilingual service, and 24/7 availability for when you need help most.",
    address: "Salt Lake City, UT 84104",
    responseTime: "20–35 min",
    yearEstablished: 2018,
    slug: "vega-towing"
  },
  {
    id: "tow-u-later",
    name: "Tow U Later",
    phone: "(801) 555-0122",
    phoneRaw: "8015550122",
    rating: 4.2,
    reviews: 76,
    featured: false,
    verified: false,
    topRated: false,
    open247: true,
    areas: ["Salt Lake City", "Murray", "Midvale", "Sandy"],
    services: ["Emergency Towing", "Roadside Assistance", "Flat Tire", "Jump Start", "Lockout"],
    description: "Tow U Later provides no-nonsense towing and roadside assistance across the Salt Lake Valley. Affordable rates, quick dispatch, and friendly drivers make breakdowns less stressful.",
    address: "Salt Lake City, UT 84107",
    responseTime: "25–40 min",
    yearEstablished: 2020,
    slug: "tow-u-later"
  }
];

/* Helper: render star HTML */
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = (rating - full) >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/* Helper: render badge HTML */
function renderBadges(company) {
  let html = '';
  if (company.verified) html += '<span class="badge badge-verified">✓ Verified</span>';
  if (company.topRated) html += '<span class="badge badge-top">⭐ Top Rated</span>';
  if (company.open247) html += '<span class="badge badge-247">🕐 24/7</span>';
  return html;
}

/* Helper: render service tags */
function renderServices(services) {
  return services.map(s => `<span class="service-tag">${s}</span>`).join('');
}

/* Helper: render a listing card */
function renderCard(company) {
  const featuredTag = company.featured
    ? '<div class="card-featured-tag">⚡ Featured</div>' : '';
  const upgradeBanner = !company.featured
    ? `<div class="upgrade-banner">🚀 <a href="pricing.html">Upgrade to Featured</a> for more visibility</div>` : '';

  return `
    <div class="listing-card${company.featured ? ' featured' : ''}" data-id="${company.id}"
         data-areas="${company.areas.join(',').toLowerCase()}"
         data-services="${company.services.join(',').toLowerCase()}"
         data-rating="${company.rating}"
         data-247="${company.open247}">
      ${featuredTag}
      <div class="card-header">
        <a href="listing-template.html?id=${company.id}" class="card-name">${company.name}</a>
        <div class="card-rating">
          <span class="stars" title="${company.rating} stars">${renderStars(company.rating)}</span>
          <span class="rating-num">${company.rating}</span>
          <span class="review-count">(${company.reviews})</span>
        </div>
      </div>
      <div class="card-badges">${renderBadges(company)}</div>
      <div class="card-phone">📞 <a href="tel:${company.phoneRaw}">${company.phone}</a></div>
      <div class="card-area"><strong>Service Area:</strong> ${company.areas.slice(0,3).join(', ')}${company.areas.length > 3 ? ' +more' : ''}</div>
      <div class="card-services">${renderServices(company.services.slice(0,4))}</div>
      ${upgradeBanner}
      <div class="card-footer">
        <a href="tel:${company.phoneRaw}" class="btn btn-primary btn-sm">Call Now</a>
        <a href="listing-template.html?id=${company.id}" class="btn btn-ghost btn-sm">View Profile</a>
      </div>
    </div>
  `;
}
