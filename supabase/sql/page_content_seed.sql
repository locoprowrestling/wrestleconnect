-- Seed content for WrestleConnect pages
-- Run this in the Supabase SQL editor after creating the page_content table.

insert into page_content (slug, data)
values
(
  'home',
  $${
    "hero": {
      "badge": "Trusted Bookings",
      "title": "The home base for independent wrestling talent, promotions, and schools.",
      "description": "WrestleConnect brings verified profiles, past match history, and upcoming opportunities together so you can book confidently and grow your career.",
      "primaryCta": { "label": "Explore Wrestlers", "href": "/wrestlers" },
      "secondaryCta": { "label": "List Your Promotion", "href": "/promotions", "variant": "outline" }
    },
    "spotlight": {
      "eyebrow": "Spotlight · Alumni Verified",
      "name": "\"Thunder Lynx\" Rivera",
      "subtitle": "Hybrid striker · 6 years experience",
      "tags": ["Punctual", "Crowd Favorite", "Technical"],
      "testimonial": "\"Lynx brought championship energy to Crimson City Pro. We booked them in two main events and the locker room chemistry was electric.\"",
      "testimonialSource": "Crimson City Pro · Rated 4.9 / 5",
      "upcoming": [
        { "id": "summer-slamfest", "label": "Upcoming", "title": "Summer Slamfest", "meta": "Jun 22 · Highline Arena · New Jersey", "description": "Main event championship bout announced." },
        { "id": "open-availability", "label": "Availability", "title": "Open July 12–14 · Northeast tour", "description": "Available for double shots within 150 miles." }
      ]
    },
    "features": [
      { "id": "promotion-hubs", "title": "Promotion Hubs", "description": "Manage rosters, track event cards, and embed media recaps to grow your audience." },
      { "id": "recommendation-engine", "title": "Recommendation Engine", "description": "Verify bookings, rate experiences, and help the community hire responsibly." },
      { "id": "school-spotlights", "title": "School Spotlights", "description": "Publish seminar schedules, coach bios, and alumni success stories to attract future trainees." },
      { "id": "discovery-search", "title": "Discovery & Search", "description": "Filter by style, location, and availability to match talent with the right opportunities." }
    ]
  }$$::jsonb
),
(
  'wrestlers',
  $${
    "hero": {
      "badge": "For Independent Wrestlers",
      "title": "Own your booking story and get verified references that travel with you.",
      "description": "WrestleConnect is your digital presence, combining media, event history, and promotion testimonials so you can step into any locker room with confidence.",
      "primaryCta": { "label": "Create Your Profile", "href": "/onboarding/wrestlers" },
      "secondaryCta": { "label": "Preview Demo Profile", "href": "#profile-showcase", "variant": "outline" }
    },
    "stats": [
      { "id": "recommendations", "value": "120+", "label": "Promotion recommendations issued last quarter." },
      { "id": "events-synced", "value": "2,400", "label": "Events synced automatically from promotion cards." },
      { "id": "response-time", "value": "3 hrs", "label": "Median promotion response time after booking requests." }
    ],
    "spotlight": {
      "eyebrow": "Spotlight · Alumni Verified",
      "name": "\"Thunder Lynx\" Rivera",
      "subtitle": "Hybrid striker · 6 years experience",
      "tags": ["Verified", "Fan Favorite", "Technical"],
      "testimonial": "\"Professional from day one. Brings the crowd to life and keeps communication clear backstage.\"",
      "testimonialSource": "Coastline Championship · Rated 4.9 / 5",
      "upcoming": [
        { "id": "upcoming", "label": "Upcoming", "title": "Summer Slamfest", "meta": "Jun 22 · Highline Arena · New Jersey", "description": "Main event championship bout announced." },
        { "id": "availability", "label": "Availability", "title": "Open July 12–14 · Northeast tour", "description": "Available for double shots within 150 miles." }
      ]
    },
    "timeline": [
      { "id": "fury-road-6", "date": "May 4, 2024", "title": "Fury Road 6", "subtitle": "Crimson City Pro", "description": "Main event triple-threat · Match of the Night." },
      { "id": "breakthrough", "date": "Apr 12, 2024", "title": "Breakthrough", "subtitle": "Steel River Wrestling", "description": "Title defense streamed to 1.2K live viewers." },
      { "id": "rising-tide", "date": "Mar 30, 2024", "title": "Rising Tide", "subtitle": "Coastline Championship", "description": "Tag team showcase · Featured on IWTV." }
    ],
    "testimonials": [
      { "id": "crimson-city-pro", "quote": "\"WrestleConnect makes it simple to verify who we’ve booked and highlight talent worth bringing back.\"", "promotion": "Crimson City Pro", "role": "Head Booker · 52 events synced" },
      { "id": "steel-river", "quote": "\"Profiles give us the footage, availability, and references we need in one place.\"", "promotion": "Steel River Wrestling", "role": "Operations Director · 38 events synced" },
      { "id": "coastline", "quote": "\"Recommendations build trust fast. Our talent knows they’re walking into professional locker rooms.\"", "promotion": "Coastline Championship", "role": "General Manager · 44 events synced" }
    ],
    "features": [
      { "id": "media", "title": "Media Hub", "description": "Upload high-res photography, embed YouTube or Vimeo matches, and curate your highlight reel." },
      { "id": "availability", "title": "Availability Planner", "description": "Show when you’re open for bookings with calendar syncs and custom travel notes." },
      { "id": "brand-kit", "title": "Brand Kit", "description": "Share entrance music, gear colors, and press-ready bios for quick promotion marketing." },
      { "id": "metrics", "title": "Metrics & Insights", "description": "Track profile views, recommendation trends, and event exposure with pro analytics (coming soon)." }
    ],
    "finalCta": {
      "badge": "Get Started",
      "title": "Ready to stand out to every independent promotion?",
      "description": "Create your WrestleConnect profile in minutes. Upload media, request recommendations, and keep your event history verified.",
      "bullets": [
        "Free core profile with media uploads and basic analytics.",
        "Verified badge once a promotion confirms your booking.",
        "Optional premium add-ons for advanced insights."
      ],
      "primaryCta": { "label": "Claim Your Profile", "href": "/auth/register?role=wrestler" },
      "secondaryCta": { "label": "Talk With Our Team", "href": "/contact", "variant": "outline" }
    }
  }$$::jsonb
),
(
  'promotions',
  $${
    "hero": {
      "badge": "For Promotions",
      "title": "Organize rosters, cards, and talent relationships in one hub.",
      "description": "WrestleConnect gives your promotion a verified presence with tools to manage events, highlight talent, and share recommendations that attract the right wrestlers.",
      "primaryCta": { "label": "Create Promotion Hub", "href": "/onboarding/promotions" },
      "secondaryCta": { "label": "Invite Your Roster", "href": "/promotions", "variant": "outline" }
    },
    "stats": [
      { "id": "active-roster", "value": "650+", "label": "Active independent wrestlers connected to promotions." },
      { "id": "cards-built", "value": "4.2K", "label": "Match cards created with WrestleConnect scheduling tools." },
      { "id": "recommendations", "value": "1,800", "label": "Recommendations issued that help book trusted talent." }
    ],
    "spotlight": {
      "eyebrow": "Featured Promotion",
      "name": "Crimson City Pro",
      "subtitle": "Regional powerhouse · 52 events synced",
      "tags": ["Roster Hub", "Verified", "Livestream Ready"],
      "testimonial": "\"“Our roster, media, and upcoming cards stay organized and visible. WrestleConnect removes the manual chase when assembling a show.”\"",
      "testimonialSource": "Owner · Alicia Rivera",
      "upcoming": [
        { "id": "next-card", "label": "Next Card", "title": "Fuel the Fire", "meta": "Aug 3 · Riverfront Pavilion", "description": "Main event ladder match · Tickets via SeatGeek." },
        { "id": "talent-need", "label": "Talent Need", "title": "Seeking Cruiserweights", "description": "Looking for agile high-flyers for September tapings." }
      ]
    },
    "timeline": [
      { "id": "event-planning", "date": "Step 1", "title": "Plan", "description": "Draft cards, set venues, and invite talent with roster tagging." },
      { "id": "event-night", "date": "Step 2", "title": "Promote", "description": "Publish match graphics, embed video teasers, and boost on socials." },
      { "id": "post-show", "date": "Step 3", "title": "Recap", "description": "Upload media, confirm results, and issue recommendations effortlessly." }
    ],
    "testimonials": [
      { "id": "midwest", "quote": "\"We replaced three spreadsheets with WrestleConnect. Cards build faster and our brand looks polished.\"", "promotion": "Steel River Wrestling", "role": "Operations Director" },
      { "id": "coastline", "quote": "\"The recommendation workflow keeps talent accountable and helps us hire with confidence.\"", "promotion": "Coastline Championship", "role": "General Manager" }
    ],
    "features": [
      { "id": "card-builder", "title": "Match Card Builder", "description": "Design complete show lineups, assign refs, and output printable running orders." },
      { "id": "media-room", "title": "Media Room", "description": "Store photos, video clips, and promo packages tied to each event." },
      { "id": "roster-management", "title": "Roster Management", "description": "Track availability, contracts, and history with each performer." },
      { "id": "recommendation-tools", "title": "Recommendation Tools", "description": "Issue and manage testimonials that help wrestlers book new promotions." }
    ],
    "finalCta": {
      "badge": "Get Started",
      "title": "Showcase your promotion with WrestleConnect",
      "description": "Create your hub, invite roster members, and publish the story of your promotion in minutes.",
      "bullets": [
        "Free tier includes roster hub, media gallery, and upcoming event listings.",
        "Verified badge available after identity confirmation by platform admins.",
        "Premium analytics coming soon for attendance, merch, and engagement insights."
      ],
      "primaryCta": { "label": "Launch Promotion Hub", "href": "/onboarding/promotions" },
      "secondaryCta": { "label": "Request Demo", "href": "/contact", "variant": "outline" }
    }
  }$$::jsonb
),
(
  'schools',
  $${
    "hero": {
      "badge": "For Training Schools",
      "title": "Grow the next generation of independent wrestling talent.",
      "description": "Manage seminars, showcase coaches, and highlight alumni success stories so aspiring wrestlers know where to train and promotions know who you develop.",
      "primaryCta": { "label": "Register Your School", "href": "/onboarding/schools" },
      "secondaryCta": { "label": "Publish Seminar", "href": "/schools", "variant": "outline" }
    },
    "stats": [
      { "id": "seminars", "value": "320", "label": "Seminars hosted through WrestleConnect schools last year." },
      { "id": "graduates", "value": "1.5K", "label": "Graduates with verified alumni badges on the platform." },
      { "id": "placements", "value": "760", "label": "Promotion bookings sourced from school recommendations." }
    ],
    "spotlight": {
      "eyebrow": "Spotlight School",
      "name": "Elevation Wrestling Academy",
      "subtitle": "Head Coach: Marcus Vega · Est. 2013",
      "tags": ["In-Ring", "Promo", "Conditioning"],
      "testimonial": "\"“WrestleConnect lets prospective students preview our training style and keeps alumni connected to promotions.”\"",
      "testimonialSource": "Lead Trainer · Dana Cruz",
      "upcoming": [
        { "id": "camp", "label": "Camp", "title": "Summer Intensive", "meta": "Jul 8–12 · 5 day camp", "description": "Advanced ring psychology and promo lab with guest coaches." },
        { "id": "tryout", "label": "Tryout", "title": "Open Ring Night", "description": "Monthly tryout for new students · Limited slots available." }
      ]
    },
    "testimonials": [
      { "id": "academy", "quote": "\"We scout many of our next talents directly from schools on WrestleConnect—alumni badges make vetting easy.\"", "promotion": "Crimson City Pro", "role": "Talent Relations" },
      { "id": "graduate", "quote": "\"After listing my school and alumni credentials, promotions started reaching out for seminars and bookings.\"", "promotion": "Alumni Spotlight", "role": "Head Coach" }
    ],
    "features": [
      { "id": "seminar-manager", "title": "Seminar Manager", "description": "Schedule seminars, manage registrations, and automate reminder emails." },
      { "id": "coach-bios", "title": "Coach Bios", "description": "Showcase coaching staff credentials with bio pages and media content." },
      { "id": "alumni-showcase", "title": "Alumni Showcase", "description": "Highlight graduates with links to their WrestleConnect profiles and achievements." },
      { "id": "facility-tour", "title": "Facility Tour", "description": "Upload video walkthroughs and equipment lists to sell the experience." }
    ],
    "finalCta": {
      "badge": "Start Teaching",
      "title": "Empower your students with WrestleConnect",
      "description": "Enroll your school, publish training calendars, and connect alumni to promotions that need fresh talent.",
      "bullets": [
        "List recurring classes, special seminars, and guest trainers with ease.",
        "Offer verified alumni badges that signal readiness to promotions.",
        "Promote your facility with media galleries and testimonials."
      ],
      "primaryCta": { "label": "Register School", "href": "/onboarding/schools" },
      "secondaryCta": { "label": "Talk to Onboarding", "href": "/contact", "variant": "outline" }
    }
  }$$::jsonb
)
on conflict (slug) do update set data = excluded.data, updated_at = now();
