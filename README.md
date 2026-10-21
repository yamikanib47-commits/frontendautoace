# AutoAce Zed 🚗🇿🇲

> **Zambia's automotive sourcing and demand-matching platform connecting car buyers with vetted agents, genuine sellers, and verified RTSA documentation.**

---

## 📌 Overview

**AutoAce Zed** is an automotive marketplace designed specifically for the Zambian vehicle ecosystem (Lusaka, Copperbelt, Livingstone, and nationwide). Rather than displaying static listings and unverified broker ads, AutoAce Zed operates on a **demand-led matching model**:

1. **Buyers** state their vehicle requirements and budget in Zambian Kwacha (ZMW).
2. **Vetted Local Agents & Sellers** receive coordinated dispatch requests.
3. Every transaction is backed by **RTSA Whitebook verification**, **ZRA customs duty clearance**, and physical inspection center checks.

The entire UI is built with an **executive Navy Blue palette** and responsive mobile architecture that prevents layout jitter and input zoom.

---

## ✨ Key Features & Screens

### 1. 🔍 Demand-Matching Hero & Search Hub
- **Multi-Tab Search**:
  - **Find a Car**: Search by model (*Axio, Fit Hybrid, Prado TX, Hilux, CX-5*) with instant suggestions.
  - **Sell My Car**: Submit Zambian registration plates (*e.g., BAF 1234*) with asking prices in Kwacha.
  - **Become an Agent**: Quick mobile onboarding for local automotive brokers.
- **Quick Budget & Category Pills**: Touch-friendly horizontal swipe for budget brackets (*Under K150k*, *K150k–K300k*, *K300k–K500k*, *Over K500k*, *SUVs*, *Twin Cabs*, *Fuel Savers*).

### 2. 🗂️ Explore Vehicles by Need
- Segmented visual categories tailored to Zambian driving requirements:
  - **Verified in Lusaka** (Local Showgrounds & Great East hubs)
  - **Fuel Savers** (Economical hybrid & 1.3L–1.5L daily runners)
  - **Under K250k** (First-time car buyers & budget commuters)
  - **Under K500k** (Family crossovers & compact SUVs)
  - **Under K1M** (4x4 double cabs & premium SUVs)
  - **Open Budget & Executive** (Diplomatic & executive fleet)

### 3. ⚡ Popular Sourcing Section (Real-Time Zambian Market)
- Interactive carousel displaying popular requested models (*Toyota Axio, Prado TX, Honda Fit Hybrid, Mazda CX-5*).
- Complete vehicle spec breakdown: engine size, transmission, fuel type, mileage, and assigned local agent.
- Direct **WhatsApp Agent** button for instant viewing and inspection inquiries.

### 4. 🧮 Practical Zambia Automotive Tools
- **Vehicle Sourcing & Kwacha Budget Calculator**:
  - Computes landed costs from CIF USD into Zambian Kwacha (ZMW).
  - Calculates **ZRA Customs Duty**, **Excise Duty**, **VAT (16%)**, **RTSA Carbon Tax**, and **Registration Fees**.
- **RTSA Whitebook & Documentation Checklist**:
  - Interactive 8-point physical verification tool covering chassis VIN matching, encumbrance checks, and owner NRC verification.
  - Dynamic safety readiness score with advisory alerts.
- **Certified Yard & Inspection Guide**:
  - Directory of physical inspection centers in Lusaka (Showgrounds, Lumumba Road), Kitwe (Martindale), and Ndola (Broadway).

### 5. 🧑‍💼 Vetted Agent Portal & Console
- **Live Buyer Demand Board**: Real-time queue of genuine buyer requests with vehicle specs, Kwacha budget, and location.
- **Claim Lead Flow**: One-click unlocking of buyer WhatsApp contacts for vetted agents.
- **Agent Accreditation Form**: PACRA registration, operating hub selection, and background validation.
- **Code of Conduct**: Strict transparency guidelines against hidden broker markups and unverified chassis stampings.

### 6. 📰 Editorial Advice, Market Guidance & Video Walkthroughs
- **Advice Guides**: Written by Zambian automotive specialists covering common pitfalls (e.g., *Buying a Used Toyota Axio in Lusaka*).
- **Automotive News**: Real-time updates on import regulations, EV rebates, and local fuel price updates.
- **Video Walkthroughs**: Simulated showroom videos covering mechanical inspection steps, battery health, and test drive checks.

### 7. 📖 Directory & FAQs
- **Vehicle Types**: SUVs, Hatchbacks, Sedans, Twin Cabs, Station Wagons, Minibuses, Executive, and Commercial Vans.
- **Brand Filter**: Instant search filter for over 44 car manufacturers (*Toyota, Nissan, Honda, Mercedes-Benz, Mazda, Jaecoo, etc.*).
- **Popular Models**: Quick filter for the top 20 most demanded models in Zambia.
- **Collapsible FAQ Accordion**: Clear answers on title transfers, commissions, and vehicle ownership.

---

## 🎨 Theme & Design System

The application uses an **executive, professional navy blue** visual system:

| Token | Color Code | Purpose |
|---|---|---|
| `--color-primary` | `#1B365D` | Executive Navy (Buttons, active states, badges) |
| `--color-primary-hover` | `#10243E` | Deep Midnight Navy (Button hover, accents) |
| `--color-primary-light` | `#2A4D7E` | Slate Navy |
| `--color-primary-subtle`| `#F0F4F8` | Light Ice-Navy tint for badges and cards |
| `--color-dark-section-bg` | `#0B192C`| Deep Midnight Navy section canvas |
| `--color-inverse-surface` | `#10243E`| Elevated Navy card containers |

### 📱 Responsive UX Enhancements
- **iOS Non-Zoom Inputs**: Enforced `font-size: 16px` on mobile inputs to eliminate awkward iOS Safari layout jumps.
- **Slide-Over Mobile Drawer**: Full-featured mobile navigation with quick action buttons, tool launchers, and category browsing.
- **Touch Snap Strips**: Horizontal swipe pills with smooth momentum and hidden scrollbars.
- **Sticky / Adaptive Offsets**: Header dynamically transitions across mobile (`124px`), tablet (`132px`), and desktop (`136px`).

---

## 🛠️ Tech Stack

- **Framework**: React 19 SPA
- **Build Tool**: Vite 8
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Google Material Symbols Outlined
- **Typography**: Plus Jakarta Sans
- **State Management**: React Hooks (`useState`, `useMemo`)

---

## 📁 Directory Structure

```text
├── index.html                    # Entry HTML with meta tags and Plus Jakarta Sans font
├── metadata.json                 # AI Studio application metadata
├── package.json                  # Dependencies & npm scripts
├── vite.config.ts                # Vite configuration with Tailwind CSS v4
├── src/
│   ├── main.tsx                  # React DOM mounting
│   ├── index.css                 # Global styles, Tailwind v4 theme tokens, and typography
│   ├── App.tsx                   # Main orchestrator, global filter state, and modal wiring
│   ├── data/
│   │   └── mockData.ts           # Curated Zambian vehicle models, matches, articles, and yards
│   └── components/
│       ├── Header.tsx            # Multi-tier responsive nav & slide-over drawer
│       ├── HeroSection.tsx       # Search hub, quick pills, and tab forms
│       ├── ExploreByNeed.tsx     # 6-card lifestyle & budget category grid
│       ├── PopularSourcingSection.tsx # Vehicle showcase with live agent contacts
│       ├── TrustSection.tsx      # Partner guarantees & transparency badges
│       ├── RecentMatchesSection.tsx  # Coordinated sourcing requests
│       ├── EditorialAdviceSection.tsx# Advice guides, news, and video walkthroughs
│       ├── PracticalToolsSection.tsx # Calculator, checklist, and yard guide triggers
│       ├── DirectorySection.tsx  # Types, searchable 44+ brands, and popular models
│       ├── FaqSection.tsx        # Collapsible accordions
│       ├── Footer.tsx            # 6-column comprehensive Zambia automotive footer
│       └── modals/
│           ├── VehicleDetailModal.tsx     # Specs, verification badges & WhatsApp agent
│           ├── SourcingRequestModal.tsx   # Custom vehicle demand broadcast form
│           ├── SellVehicleModal.tsx       # Registration plate & vehicle submission
│           ├── AgentPortalModal.tsx       # Live demand board & agent accreditation
│           ├── KwachaCalculatorModal.tsx  # CIF, ZRA duty, excise, and VAT calculator
│           ├── ArticleReaderModal.tsx     # Editorial reviews & automotive news reader
│           ├── VideoPlayerModal.tsx       # Simulated inspection video walkthroughs
│           ├── InspectionYardsModal.tsx   # Certified physical yards directory
│           └── WhitebookChecklistModal.tsx# 8-point RTSA verification checklist
```

---

## 🚀 Getting Started

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```
