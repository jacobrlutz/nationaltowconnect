/* ============================================================
   SLC Tow Trucks — Company Data
   18 seed listings for SLC metro area
   ============================================================ */

const COMPANIES = [
  {
    id: "wasatch-towing",
    name: "Wasatch Towing",
    phone: "(801) 555-0142",
    phoneRaw: "8015550142",
    rating: 4.9,
    reviews: 312,
    featured: true,
    verified: true,
    topRated: true,
    open247: true,
    areas: ["Downtown SLC", "Capitol Hill", "Avenues", "Sugar House"],
    services: ["Emergency Towing", "Roadside Assistance", "Lockout", "Flat Tire", "Jump Start", "Winching"],
    description: "Salt Lake City's most trusted towing company since 2003. Fast response times, certified drivers, and upfront pricing. We serve the greater SLC metro 24 hours a day, 7 days a week.",
    address: "320 S 700 W, Salt Lake City, UT 84104",
    responseTime: "15–25 min",
    yearEstablished: 2003,
    slug: "wasatch-towing"
  },
  {
    id: "salt-lake-recovery",
    name: "Salt Lake Recovery",
    phone: "(801) 555-0287",
    phoneRaw: "8015550287",
    rating: 4.8,
    reviews: 278,
    featured: true,
    verified: true,
    topRated: true,
    open247: true,
    areas: ["Murray", "Millcreek", "Holladay", "Cottonwood Heights"],
    services: ["Emergency Towing", "Roadside Assistance", "Winching", "Heavy Duty Towing", "Lockout"],
    description: "Specializing in heavy-duty and emergency recovery across the SLC valley. Our fully equipped fleet handles everything from passenger vehicles to commercial trucks.",
    address: "4780 Murray-Holladay Rd, Murray, UT 84107",
    responseTime: "20–30 min",
    yearEstablished: 2009,
    slug: "salt-lake-recovery"
  },
  {
    id: "utah-fast-tow",
    name: "Utah Fast Tow",
    phone: "(385) 555-0193",
    phoneRaw: "3855550193",
    rating: 4.7,
    reviews: 195,
    featured: true,
    verified: true,
    topRated: false,
    open247: true,
    areas: ["West Valley City", "Kearns", "Taylorsville", "West Jordan"],
    services: ["Emergency Towing", "Flat Tire", "Jump Start", "Roadside Assistance", "Lockout"],
    description: "West Valley's fastest towing service. We pride ourselves on 20-minute average response times and transparent, no-surprise pricing for all roadside emergencies.",
    address: "2100 W 3500 S, West Valley City, UT 84119",
    responseTime: "15–20 min",
    yearEstablished: 2015,
    slug: "utah-fast-tow"
  },
  {
    id: "pioneer-towing-slc",
    name: "Pioneer Towing SLC",
    phone: "(801) 555-0361",
    phoneRaw: "8015550361",
    rating: 4.8,
    reviews: 224,
    featured: true,
    verified: true,
    topRated: true,
    open247: true,
    areas: ["Sandy", "Draper", "South Jordan", "Riverton"],
    services: ["Emergency Towing", "Roadside Assistance", "Lockout", "Flat Tire", "Jump Start", "Winching", "Long Distance Towing"],
    description: "Serving Sandy and the south valley for over 15 years. Pioneer Towing is a family-owned business committed to honest service and fair rates.",
    address: "9260 S 700 E, Sandy, UT 84070",
    responseTime: "20–35 min",
    yearEstablished: 2008,
    slug: "pioneer-towing-slc"
  },
  {
    id: "beehive-roadside",
    name: "Beehive Roadside Services",
    phone: "(801) 555-0478",
    phoneRaw: "8015550478",
    rating: 4.5,
    reviews: 143,
    featured: false,
    verified: true,
    topRated: false,
    open247: true,
    areas: ["Downtown SLC", "Rose Park", "Glendale", "Jordan Meadows"],
    services: ["Roadside Assistance", "Flat Tire", "Jump Start", "Lockout", "Fuel Delivery"],
    description: "Affordable roadside assistance across Salt Lake City proper. No membership required — just call and we'll come to you.",
    address: "740 N Redwood Rd, Salt Lake City, UT 84116",
    responseTime: "25–40 min",
    yearEstablished: 2017,
    slug: "beehive-roadside"
  },
  {
    id: "granite-tow-and-recover",
    name: "Granite Tow & Recover",
    phone: "(385) 555-0254",
    phoneRaw: "3855550254",
    rating: 4.6,
    reviews: 167,
    featured: false,
    verified: true,
    topRated: false,
    open247: true,
    areas: ["Millcreek", "Sugar House", "East Bench", "Cottonwood Heights"],
    services: ["Emergency Towing", "Winching", "Off-Road Recovery", "Roadside Assistance", "Flat Tire"],
    description: "Specialists in off-road recovery and difficult terrain towing. From canyon roads to city streets, Granite has the equipment and experience to get you unstuck.",
    address: "3380 S 900 E, Millcreek, UT 84106",
    responseTime: "20–30 min",
    yearEstablished: 2012,
    slug: "granite-tow-and-recover"
  },
  {
    id: "valley-wide-towing",
    name: "Valley Wide Towing",
    phone: "(801) 555-0519",
    phoneRaw: "8015550519",
    rating: 4.3,
    reviews: 98,
    featured: false,
    verified: false,
    topRated: false,
    open247: true,
    areas: ["Taylorsville", "Murray", "West Jordan", "South Salt Lake"],
    services: ["Emergency Towing", "Roadside Assistance", "Flat Tire", "Jump Start"],
    description: "Budget-friendly towing across the south Salt Lake valley. Honest pricing and reliable service every time you call.",
    address: "5800 S Redwood Rd, Taylorsville, UT 84123",
    responseTime: "30–45 min",
    yearEstablished: 2019,
    slug: "valley-wide-towing"
  },
  {
    id: "express-tow-utah",
    name: "Express Tow Utah",
    phone: "(385) 555-0332",
    phoneRaw: "3855550332",
    rating: 4.4,
    reviews: 112,
    featured: false,
    verified: true,
    topRated: false,
    open247: false,
    areas: ["Draper", "Sandy", "South Jordan", "Herriman"],
    services: ["Emergency Towing", "Lockout", "Flat Tire", "Jump Start", "Roadside Assistance"],
    description: "Fast and affordable towing in Draper and surrounding communities. Open 7 days a week with competitive rates and honest estimates.",
    address: "11400 S State St, Draper, UT 84020",
    responseTime: "25–35 min",
    yearEstablished: 2016,
    slug: "express-tow-utah"
  },
  {
    id: "mountain-west-towing",
    name: "Mountain West Towing",
    phone: "(801) 555-0647",
    phoneRaw: "8015550647",
    rating: 4.7,
    reviews: 189,
    featured: false,
    verified: true,
    topRated: true,
    open247: true,
    areas: ["Ogden Area", "North SLC", "Bountiful", "Woods Cross"],
    services: ["Emergency Towing", "Long Distance Towing", "Winching", "Roadside Assistance", "Heavy Duty Towing"],
    description: "Long-haul and local towing for the I-15 corridor between Ogden and Salt Lake City. Fully licensed for interstate transport.",
    address: "155 W Center St, Bountiful, UT 84010",
    responseTime: "25–40 min",
    yearEstablished: 2007,
    slug: "mountain-west-towing"
  },
  {
    id: "redrock-towing",
    name: "Red Rock Towing",
    phone: "(801) 555-0728",
    phoneRaw: "8015550728",
    rating: 4.2,
    reviews: 77,
    featured: false,
    verified: false,
    topRated: false,
    open247: true,
    areas: ["South Salt Lake", "Sugar House", "East Millcreek"],
    services: ["Emergency Towing", "Flat Tire", "Jump Start", "Roadside Assistance"],
    description: "No-frills towing at affordable rates. Serving South Salt Lake and Sugar House neighborhoods around the clock.",
    address: "2280 S Main St, South Salt Lake, UT 84115",
    responseTime: "30–45 min",
    yearEstablished: 2020,
    slug: "redrock-towing"
  },
  {
    id: "slc-auto-rescue",
    name: "SLC Auto Rescue",
    phone: "(385) 555-0415",
    phoneRaw: "3855550415",
    rating: 4.6,
    reviews: 134,
    featured: false,
    verified: true,
    topRated: false,
    open247: true,
    areas: ["Downtown SLC", "The Gateway", "Liberty Wells", "Ballpark"],
    services: ["Emergency Towing", "Roadside Assistance", "Lockout", "Jump Start", "Fuel Delivery", "Flat Tire"],
    description: "Downtown SLC's go-to towing and roadside rescue. We specialize in urban recovery — tight parking structures, alley extractions, and quick city response.",
    address: "855 W 200 S, Salt Lake City, UT 84101",
    responseTime: "15–25 min",
    yearEstablished: 2014,
    slug: "slc-auto-rescue"
  },
  {
    id: "high-desert-towing",
    name: "High Desert Towing",
    phone: "(801) 555-0863",
    phoneRaw: "8015550863",
    rating: 4.0,
    reviews: 55,
    featured: false,
    verified: false,
    topRated: false,
    open247: false,
    areas: ["Magna", "Herriman", "West Valley City", "Kearns"],
    services: ["Emergency Towing", "Flat Tire", "Winching", "Roadside Assistance"],
    description: "Serving western Salt Lake County. Straightforward towing service with upfront quotes and no hidden fees.",
    address: "8400 W 2700 S, Magna, UT 84044",
    responseTime: "35–50 min",
    yearEstablished: 2018,
    slug: "high-desert-towing"
  },
  {
    id: "jordan-river-tow",
    name: "Jordan River Tow",
    phone: "(801) 555-0934",
    phoneRaw: "8015550934",
    rating: 4.5,
    reviews: 108,
    featured: false,
    verified: true,
    topRated: false,
    open247: true,
    areas: ["West Jordan", "South Jordan", "Riverton", "Bluffdale"],
    services: ["Emergency Towing", "Roadside Assistance", "Jump Start", "Lockout", "Flat Tire"],
    description: "Family-owned towing covering the Jordan River corridor in the south valley. Licensed, insured, and ready when you need us most.",
    address: "1650 W 9000 S, West Jordan, UT 84088",
    responseTime: "20–35 min",
    yearEstablished: 2013,
    slug: "jordan-river-tow"
  },
  {
    id: "oquirrh-towing",
    name: "Oquirrh Towing Co.",
    phone: "(385) 555-0571",
    phoneRaw: "3855550571",
    rating: 3.9,
    reviews: 43,
    featured: false,
    verified: false,
    topRated: false,
    open247: true,
    areas: ["Tooele County", "Grantsville", "West Valley City"],
    services: ["Emergency Towing", "Winching", "Roadside Assistance", "Flat Tire"],
    description: "Towing services for the Tooele County and western valley region. If you've broken down on I-80 west of the city, we're your fastest option.",
    address: "152 N Main St, Tooele, UT 84074",
    responseTime: "35–55 min",
    yearEstablished: 2021,
    slug: "oquirrh-towing"
  },
  {
    id: "sugarhouse-tow",
    name: "Sugar House Tow",
    phone: "(801) 555-1026",
    phoneRaw: "8015551026",
    rating: 4.4,
    reviews: 91,
    featured: false,
    verified: true,
    topRated: false,
    open247: false,
    areas: ["Sugar House", "Millcreek", "East Bench", "9th and 9th"],
    services: ["Emergency Towing", "Lockout", "Jump Start", "Flat Tire", "Roadside Assistance"],
    description: "Neighborhood towing you can trust. Sugar House Tow has been part of this community for 10 years — fast, friendly, and fair.",
    address: "2150 S 1100 E, Salt Lake City, UT 84106",
    responseTime: "20–30 min",
    yearEstablished: 2014,
    slug: "sugarhouse-tow"
  },
  {
    id: "salt-flats-towing",
    name: "Salt Flats Towing",
    phone: "(385) 555-0682",
    phoneRaw: "3855550682",
    rating: 4.1,
    reviews: 62,
    featured: false,
    verified: false,
    topRated: false,
    open247: true,
    areas: ["Airport Area", "Rose Park", "Northwest SLC", "Saltair"],
    services: ["Emergency Towing", "Roadside Assistance", "Flat Tire", "Jump Start", "Airport Towing"],
    description: "Covering SLC International Airport and northwest Salt Lake City. Ideal for travelers who've broken down near the airport — quick, discreet, and reliable.",
    address: "2380 N 2200 W, Salt Lake City, UT 84116",
    responseTime: "20–30 min",
    yearEstablished: 2016,
    slug: "salt-flats-towing"
  },
  {
    id: "trax-corridor-tow",
    name: "TRAX Corridor Tow",
    phone: "(801) 555-1147",
    phoneRaw: "8015551147",
    rating: 3.8,
    reviews: 39,
    featured: false,
    verified: false,
    topRated: false,
    open247: false,
    areas: ["Murray", "Midvale", "South Salt Lake", "Sandy"],
    services: ["Emergency Towing", "Flat Tire", "Jump Start", "Roadside Assistance"],
    description: "Local towing along the TRAX corridor from Sandy to downtown SLC. Economical rates for everyday breakdowns and roadside needs.",
    address: "6500 S State St, Midvale, UT 84047",
    responseTime: "30–45 min",
    yearEstablished: 2022,
    slug: "trax-corridor-tow"
  },
  {
    id: "uinta-auto-towing",
    name: "Uinta Auto Towing",
    phone: "(801) 555-1289",
    phoneRaw: "8015551289",
    rating: 4.6,
    reviews: 157,
    featured: false,
    verified: true,
    topRated: true,
    open247: true,
    areas: ["Park City Area", "Parleys Canyon", "East SLC", "Holladay"],
    services: ["Emergency Towing", "Long Distance Towing", "Winching", "Off-Road Recovery", "Roadside Assistance", "Jump Start"],
    description: "Mountain and canyon towing specialists. Uinta Auto Towing handles I-80 mountain corridor rescues and Park City breakdowns — year-round, any weather.",
    address: "4540 S Holladay Blvd, Holladay, UT 84117",
    responseTime: "25–40 min",
    yearEstablished: 2010,
    slug: "uinta-auto-towing"
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
