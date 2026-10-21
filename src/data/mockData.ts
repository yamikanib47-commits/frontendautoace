export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  badge: string;
  badgeType: 'daily' | 'suv' | 'executive' | 'crossover' | 'pickup' | 'commercial';
  location: string;
  city: 'Lusaka' | 'Kitwe' | 'Ndola' | 'Livingstone' | 'Kabwe';
  matchType: string;
  guideBudget: number; // in Zambian Kwacha (ZMW)
  displayPrice: string;
  image: string;
  category: 'lusaka-verified' | 'fuel-savers' | 'under-250k' | 'under-500k' | 'under-1m' | 'executive';
  bodyType: 'SUV' | 'Hatchback' | 'Sedan' | 'Twin Cab' | 'Station Wagon' | 'Minibus' | 'Executive' | 'Commercial';
  fuelType: 'Petrol' | 'Hybrid' | 'Diesel' | 'Electric';
  year: number;
  engine: string;
  transmission: 'Automatic' | 'Manual';
  mileage: string;
  description: string;
  features: string[];
  rtsaVerified: boolean;
  zraDutyPaid: boolean;
  agentName: string;
  agentPhone: string;
}

export interface SourcingMatch {
  id: string;
  carName: string;
  score: number;
  matchTypeTitle: string;
  matchSubtitle: string;
  image: string;
  location: string;
  coordination: string;
  verificationBadge: string;
  verificationColor: string;
  targetBudget: string;
  minPrice: number;
  maxPrice: number;
  dateMatched: string;
  buyerDemandNotes: string;
}

export interface EditorialArticle {
  id: string;
  title: string;
  score: string;
  summary: string;
  category: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  content: string[];
  tips: string[];
}

export interface NewsArticle {
  id: string;
  tag: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  details: string[];
}

export interface VideoGuide {
  id: string;
  title: string;
  image: string;
  duration: string;
  channel: string;
  views: string;
  description: string;
  steps: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const POPULAR_VEHICLES: Vehicle[] = [
  {
    id: 'car-1',
    name: 'Toyota Axio / Renault City',
    brand: 'Toyota',
    badge: 'Daily Runner',
    badgeType: 'daily',
    location: 'Lusaka Central',
    city: 'Lusaka',
    matchType: 'Direct Seller Match',
    guideBudget: 525000,
    displayPrice: 'Guide Budget: K525,000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2M_l9JDvSzzycpXIdzThDcxjAYQyWRHbHGc7n5iiFpBtYmfyGl7CPBb8mi4vv81Br3ufuNHSziGQu4UQyE-MpWeR6-fbULCUY8FWW5lWXhFg4Ut73dwocShMxL84bJt_TWNFomcET3WCsTzEjzmdymqaM1TcK9z3hmUEMfX2I-JKHLTw8YnuMWAMGIpkEuDcZpahBvexuAflkm1L5PkkZuMXnK4-3oWaa4W7Dh2KM_FCBjZa_80Y5bw',
    category: 'fuel-savers',
    bodyType: 'Hatchback',
    fuelType: 'Petrol',
    year: 2021,
    engine: '1.5L 4-Cylinder DOHC Dual VVT-i',
    transmission: 'Automatic',
    mileage: '42,000 km',
    description: 'The definitive Lusaka urban workhorse. Ultra-reliable 1.5L engine with outstanding fuel efficiency for heavy peak-hour traffic along Great East Road and Kafue Road. Low maintenance costs and ubiquitous spare parts.',
    features: ['Keyless Entry & Push Start', 'Eco Mode Driving', 'Reverse Camera with Guidelines', 'Touchscreen Infotainment', 'RTSA Whitebook ready for immediate transfer'],
    rtsaVerified: true,
    zraDutyPaid: true,
    agentName: 'Mweembe Automotive Sourcing',
    agentPhone: '+260 97 123 4567'
  },
  {
    id: 'car-2',
    name: 'Jaecoo E5 SUV',
    brand: 'Jaecoo',
    badge: 'In-Demand SUV',
    badgeType: 'suv',
    location: 'Woodlands, Lusaka',
    city: 'Lusaka',
    matchType: 'Direct Agent Match',
    guideBudget: 650000,
    displayPrice: 'Guide Budget: K650,000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqxlaZM8tDlddhGJs3hmdJubydHrFYoYR2CivXF47f25Bzqx18wzrINchelxY3FP1LOVJn9MVQiTmXjET3d4R5Gc13idvICncWPoojnJdI18HgpNo7xgHGq1QlkltDJcBBx-Eyuewr0xhaxkeCkBXo1U8zAa3zroHMtQzmWwIFEVIdKbJsFehVfDFiDW2H9b9sragMRVYqLMUjGY7NIJHcvPUAOtjSQP2CDuFoHDgiKrsE_jlTo4-0jg',
    category: 'under-1m',
    bodyType: 'SUV',
    fuelType: 'Petrol',
    year: 2024,
    engine: '1.6T Turbocharged GDI (194 hp)',
    transmission: 'Automatic',
    mileage: '11,500 km',
    description: 'Modern luxury design with elevated ground clearance ideal for Lusaka potholes and rainy season dirt detours. Premium leatherette cabin and state-of-the-art Sony audio system.',
    features: ['360° Panoramic Camera', 'Wireless Apple CarPlay & Android Auto', 'All-Wheel Drive Modes', 'Panoramic Sunroof', 'Full Dealer Service History'],
    rtsaVerified: true,
    zraDutyPaid: true,
    agentName: 'Apex Motor Brokers Lusaka',
    agentPhone: '+260 96 889 1234'
  },
  {
    id: 'car-3',
    name: 'Volvo EX30 Compact',
    brand: 'Volvo',
    badge: 'Executive SUV',
    badgeType: 'executive',
    location: 'Kabulonga, Lusaka',
    city: 'Lusaka',
    matchType: 'Direct Agent Match',
    guideBudget: 775000,
    displayPrice: 'Guide Budget: K775,000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC01TaZGYtywm7YdEpTEiS5jpFRbSO9oX59GmNrcCAaXDqP4IFXm0PpLPmfFcrxc2EpDuHlAhvTEByOZt94Iyh2c01d103AK9WBNjq9LMnsjuvSa9uFli3hZcu1cl1F4ZFLq8RJt_gc1tdG-wFoipc9-gamDxBJLW4ypjxi21psjRdciY_kTvC_VOh1yxprtkGRi2EVenef1xDeroRfUk4Gg-NUglN-196QTd5kHVS-mz0dD8RkVWEsjA',
    category: 'executive',
    bodyType: 'SUV',
    fuelType: 'Electric',
    year: 2024,
    engine: 'Twin Motor AWD (428 hp)',
    transmission: 'Automatic',
    mileage: '8,200 km',
    description: 'Scandinavian minimalist luxury with zero emissions. Charge at home using standard Zambian 220V grid or solar installation. Rapid acceleration with flagship Volvo safety suite.',
    features: ['Pilot Assist Adaptive Cruise Control', 'Harman Kardon Premium Soundbar', 'Google Built-in Navigation', 'Heat Pump & Fast DC Charging', 'Duty Cleared & ZRA Documented'],
    rtsaVerified: true,
    zraDutyPaid: true,
    agentName: 'Capital Prestige Motors',
    agentPhone: '+260 97 990 0112'
  },
  {
    id: 'car-4',
    name: 'Kia EV3 Crossover',
    brand: 'Kia',
    badge: 'Family Crossover',
    badgeType: 'crossover',
    location: 'Rhodes Park, Lusaka',
    city: 'Lusaka',
    matchType: 'Direct Agent Match',
    guideBudget: 732000,
    displayPrice: 'Guide Budget: K732,000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJR7Z5zl2CWSIO1Ae7s86VGqSKRlDMFU0zFSGCuNh32ihuQhcnmGH-GhLSEPuysNdwcGOIsns3lDLn885rIFh5LvXWuLyz2l6uum0O0A57_q9KdIVqceQTEnl7dEBmlXJzl4I7IdmveFRsvAG065uQ_13lreU8i6wmoMd9HjwGHjPmPGFOSlrEnInPQBiNnloTKMNZxJPEYPj1gqA1kdBKp056ELUv04jsoNgNOWywquTkIJ0tWMGPpQ',
    category: 'under-1m',
    bodyType: 'SUV',
    fuelType: 'Electric',
    year: 2024,
    engine: 'Single Motor Long Range (201 hp)',
    transmission: 'Automatic',
    mileage: '6,400 km',
    description: 'Next-generation family crossover featuring sliding center console desk, ultra-spacious rear legroom, and vehicle-to-load power capabilities to power laptops or home appliances.',
    features: ['Up to 600 km Driving Range', 'Dual 12.3-inch Panoramic Displays', 'Smart Power Tailgate', 'Heated & Ventilated Front Seats', 'RTSA Clearance In-Progress with Verified Agent'],
    rtsaVerified: true,
    zraDutyPaid: true,
    agentName: 'Zed Auto Concierge Ltd',
    agentPhone: '+260 95 554 3210'
  },
  // Additional Zambian popular market cars
  {
    id: 'car-5',
    name: 'Toyota Prado TX 3.0D',
    brand: 'Toyota',
    badge: 'Heavy Duty 4x4',
    badgeType: 'suv',
    location: 'Kitwe, Copperbelt',
    city: 'Kitwe',
    matchType: 'Verified Dealer Match',
    guideBudget: 850000,
    displayPrice: 'Guide Budget: K850,000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWwsvjWkv6fofvclHcJgWl6y6bCv3Upeyd0wE0BhmkF75-SSLfkA-x2drNenZ2P6DT_CAmiuVMZBaSOiIUdkiNBRofocAatzzF6-jwmd2PbGRDq4x756ouPQGSM0cKlnOiMcIqP53piF8n8pGxAZo0IW4_HajmDEifMGrnsOZaSXElKS8wb-HMATMU2q4dBaKUXNt9Cr9SIAyBiCiLvm3HrgArcIooPx-m0cJ_RbsSXvYF6yXhsNk1OA',
    category: 'under-1m',
    bodyType: 'SUV',
    fuelType: 'Diesel',
    year: 2018,
    engine: '3.0L 1KD-FTV Turbo Diesel',
    transmission: 'Automatic',
    mileage: '88,000 km',
    description: 'The king of Zambian roads. Built for the Copperbelt mining runs and cross-country expeditions down to Livingstone and South Luangwa. Bulletproof 1KD diesel powertrain.',
    features: ['7-Seater Configuration', 'Dual Fuel Tank (150L Capacity)', 'Center Differential Lock', 'Snorkel & Heavy-Duty Bullbar', 'Original Whitebook, First Zambian Owner'],
    rtsaVerified: true,
    zraDutyPaid: true,
    agentName: 'Copperbelt Prime Motors',
    agentPhone: '+260 97 765 4321'
  },
  {
    id: 'car-6',
    name: 'Toyota Hilux GD-6 2.8 Double Cab',
    brand: 'Toyota',
    badge: 'Twin Cab Utility',
    badgeType: 'pickup',
    location: 'Ndola, Copperbelt',
    city: 'Ndola',
    matchType: 'Agent Network Sourced',
    guideBudget: 920000,
    displayPrice: 'Guide Budget: K920,000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmUeqejRehisJg8pby3srl0exUebHZzX0UVABBrCLjEoU4vKqMQt0fntDI_4r6Z8F8EnhEAcalFHFYOnzFHKIF-_7pKBH-Rd3w3ML2AfGMOH9EmSYIYbU4KJZ0E-ltfHdUq-uyCxd3zpPIwVKcA5vdyfHroHjnsAuVjOxnJjSNVCoPd5rep0JGc-kzWh9dJQAVIV14m-uZd50N1TDUC3k7LMOXF7WDA5gUMCP7UYjaa7gBWFSmeI3wNA',
    category: 'under-1m',
    bodyType: 'Twin Cab',
    fuelType: 'Diesel',
    year: 2021,
    engine: '2.8L GD-6 Turbo Diesel (201 hp / 500 Nm)',
    transmission: 'Automatic',
    mileage: '65,000 km',
    description: 'Rugged twin cab utility pickup with heavy towing capacity and commercial payload. Perfect for farm logistics, mining contractors, or executive dual-purpose daily driving.',
    features: ['4x4 High/Low Range Selector', 'Canopy & Rubberised Bedliner', 'Tow Bar with Wiring Harness', 'Apple CarPlay / Android Auto', 'Fully Serviced at Toyota Zambia'],
    rtsaVerified: true,
    zraDutyPaid: true,
    agentName: 'North-West Auto Sourcing',
    agentPhone: '+260 96 333 9988'
  },
  {
    id: 'car-7',
    name: 'Honda Fit Shuttle Hybrid',
    brand: 'Honda',
    badge: 'Fuel Saver',
    badgeType: 'daily',
    location: 'Matero / Central Lusaka',
    city: 'Lusaka',
    matchType: 'Direct Seller Match',
    guideBudget: 195000,
    displayPrice: 'Guide Budget: K195,000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6ruvyl5zUJPBLFnogHeGCB1776nifZOjIooawELFkFVdq143PK3hk-_W3t2yzln-IZ-RPQRQfFyGoGshvIcKD8CRvpGvMR_3iK1_Tr8st0ELpCGdmBXpaKxqWJYi8Guvt2o8La3v8ynGv3HvfcC_V0bYiNpq5h18XM9Jpf_CWh7PhnFokVei0SY7SdpKNwJJ89K0XgxujKNeZCRxbCVX1TaQ2FFo9h6QEh86RjF92zupee4aI5Uzqfw',
    category: 'under-250k',
    bodyType: 'Station Wagon',
    fuelType: 'Hybrid',
    year: 2016,
    engine: '1.5L i-VTEC Hybrid IMA',
    transmission: 'Automatic',
    mileage: '78,000 km',
    description: 'Sensational fuel economy of ~22 km/L, saving thousands in monthly fuel costs. Massive flat-folding boot capacity popular for school runs and small Lusaka trading businesses.',
    features: ['Hybrid Battery Health Checked: 94%', 'Cruise Control', 'Half Leather Seats', 'Alloy Wheels & Brand New Tyres', 'Registered Zambian Plate (BAC series)'],
    rtsaVerified: true,
    zraDutyPaid: true,
    agentName: 'Lusaka Express Auto Agents',
    agentPhone: '+260 97 444 8877'
  },
  {
    id: 'car-8',
    name: 'Mazda CX-5 SkyActiv-D',
    brand: 'Mazda',
    badge: 'Crossover Sport',
    badgeType: 'suv',
    location: 'Roma Park, Lusaka',
    city: 'Lusaka',
    matchType: 'Direct Agent Match',
    guideBudget: 420000,
    displayPrice: 'Guide Budget: K420,000',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUoCxShm0PwdMEw3HQvCIZLSlYgH1OwTvdXBpMJTH1rlhOoJZgPOd22iRt0o1em3Y8LM37zCK1xTrvvZ3rzT3rzbbHEh0nQ8cGqYqx2eIvG1Qc28WseWU1kKYmKBndKDn5Np8Stb4bEyBR3Blyh-2izzpxWPCUrdFVcIbUw3lKuGuqEqf1zn0F9VIZbONpv0oIlbBm0EPcDUr-rCXx7oOYYB8Eb2B78d7SMWj4Nk_Mb5UVMtEMBfyq1w',
    category: 'under-500k',
    bodyType: 'SUV',
    fuelType: 'Diesel',
    year: 2019,
    engine: '2.2L SkyActiv Twin Turbo Diesel',
    transmission: 'Automatic',
    mileage: '54,000 km',
    description: 'Soul Red Crystal metallic finish. Responsive dynamics, plush Bose acoustics, and generous rear legroom. Perfect balance of prestige, punchy diesel torque, and manageable consumption.',
    features: ['Bose 10-Speaker Audio', 'Head-Up Display', 'Blind Spot Monitoring', 'Dual-Zone Climate Control', 'All RTSA Whitebook Papers Cleared'],
    rtsaVerified: true,
    zraDutyPaid: true,
    agentName: 'Metro Auto Connect',
    agentPhone: '+260 96 112 3344'
  }
];

export const RECENT_MATCHES: SourcingMatch[] = [
  {
    id: 'match-1',
    carName: 'Geely EX5 Ultra',
    score: 9.6,
    matchTypeTitle: 'MATCHED',
    matchSubtitle: 'Qualified request',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDitZLNDVNihMNhc3aABcRJIbNt21zbGVRR5BdYRfNDismlQrCaIX1XbtVROydfKh8FHbs6WTqIWOYsBbz8kXqFbdf4qr9wtQK6xlaEa1QBZpTW9q2WwXmfg7wRmLdh7MFer7F-Z87AaIfI_e2HCznh7TE2Qco9BCTjrAyXY6KyH_8Uc5SLuBNndkIyWrmdC4mfg2qrGM5w8x05pm2tc6YWFRoEtHH2z5x5_k8k2srmtuqf6jqai4z3Vw',
    location: 'Woodlands, Lusaka',
    coordination: 'Agent Network Sourced',
    verificationBadge: 'RTSA Whitebook Verified',
    verificationColor: 'text-text-primary',
    targetBudget: 'K450,000 - K520,000',
    minPrice: 450000,
    maxPrice: 520000,
    dateMatched: '2 hours ago',
    buyerDemandNotes: 'Buyer requested low mileage modern electric SUV with local Lusaka charging support. Sourced through registered agent with full import clearance.'
  },
  {
    id: 'match-2',
    carName: 'Skoda Enyaq Edition',
    score: 9.6,
    matchTypeTitle: 'MATCHED',
    matchSubtitle: 'Private seller match',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5vw_z_Y5CPzhvOGO920ranA7caknKsRz8eG21CRovkHHNQiBec0pArCeKsxCmp5UhrerITdCLX7JTvQNxc89y0p_ujO9leY5Jte-gzb5VeY8KIkd8KWZ9i2S_4MpLbuw9SwirXz4hivK8X-Xc3f0k4UONF2ClCCC2IzsawLtrJAaZSE7ZN6jYUqU99VGOCj6MRmnvbn3VcE2M2pSMqkEVRMce_lUGO2PGq6xirp4rr95_bUd3lQ-exQ',
    location: 'Kitwe, Copperbelt',
    coordination: 'Direct Seller Connected',
    verificationBadge: 'Physical Inspection Passed',
    verificationColor: 'text-electric-green',
    targetBudget: 'K580,000 - K650,000',
    minPrice: 580000,
    maxPrice: 650000,
    dateMatched: '5 hours ago',
    buyerDemandNotes: 'Executive family SUV needed for Kitwe commutes. Direct introduction completed with private owner, zero brokerage markups.'
  },
  {
    id: 'match-3',
    carName: 'VW ID.7 GTX Plus',
    score: 10.0,
    matchTypeTitle: 'MATCHED',
    matchSubtitle: 'Deal verified',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8Rakc3xgLNbKCKZJNeGjWXhodUu9yd5QNb2Q_lnqFS62_kSuvw6wptNL3MOe2z9erVBtAXMKKTIO8h7XMrs4J1nHWbhvyAWXkm8vAJqnnuW_5inhrowBKjsMZOcBreURIulDTi7wsIp_XVRXHdGf-hNeXQJWvj59CnQxhmpYWBE3wvnEWACoJyuEHzJcpilo6YLBtkE_RdqQB4vX7q0g-dj7RTcI-ZF3XXSbZxsK9ETKQqr20QuSvRw',
    location: 'Roma, Lusaka',
    coordination: 'Vetted Agent Sourced',
    verificationBadge: 'Duty Paid / ZRA Cleared',
    verificationColor: 'text-electric-green',
    targetBudget: 'K680,000 - K760,000',
    minPrice: 680000,
    maxPrice: 760000,
    dateMatched: 'Yesterday',
    buyerDemandNotes: 'Diplomatic corps buyer requirement. Verified ZRA customs duty clearance slip, zero debt encumbrance confirmed with RTSA.'
  },
  {
    id: 'match-4',
    carName: 'Nissan Qashqai N-Connecta',
    score: 9.7,
    matchTypeTitle: 'MATCHED',
    matchSubtitle: 'Fast match',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9S_31YyTrHw-snSFOpONqS9F6iAMd5UDsA0DWpqv56T85xr3m7kb9ye5eyQm451GnY8-5bpczCxu99Ko8D9sfmH50drbT4uZPgkewlWG6lkaPJI-tgsEV2kiPJRrPXqe5GZQHrD41CCgCU80ZJ53KjKmpnO1FScRXJ_Gd0cJiKnllItotfn_qsM9XKjTFm9AVJ1X3fAxibWbzxce04xmJQql90yPElrrTrxgPL9OLeZ0b9AZb58hrPg',
    location: 'Ndola, Copperbelt',
    coordination: 'Verified Dealer Match',
    verificationBadge: 'RTSA Whitebook Verified',
    verificationColor: 'text-text-primary',
    targetBudget: 'K320,000 - K400,000',
    minPrice: 320000,
    maxPrice: 400000,
    dateMatched: 'Yesterday',
    buyerDemandNotes: 'Popular commuter matched within 24 hours of buyer submission. Sourced from vetted Ndola dealership with 30-day powertrain warranty.'
  }
];

export const EDITORIAL_ARTICLES: EditorialArticle[] = [
  {
    id: 'art-1',
    title: 'What to Check When Buying a Used Vehicle in Lusaka: RTSA & Paperwork Guide',
    score: '8/10',
    category: 'Paperwork & Verification',
    summary: 'Practical steps to verify chassis numbers, clearance letters, and transfer procedures.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgsECRrwMX7oImocHSmTzH-YSUAHKnYsTf2W_Z8CsuTZ6oFpUb0AKuHh3wlT0Fy42MA9hpukhyP9GJj6jyL8u6jspjPdEeP0DCD3L6ynCDiSs23j6E4p2XTAg90XBjVka-mesbhqZ4x_PHzMHftMK1Qj2v0fnYhjIOOro6AujLpIBx7E_ipURggQcShrwRZDPvN5oGB87jaDapkUC6qdSHpbSlNyzOHS3Ncbdt2sgL9dtITxzqObGc_Q',
    author: 'Chanda Bwalya, Senior Automotive Inspector',
    date: 'Updated October 2026',
    readTime: '6 min read',
    content: [
      'Purchasing a vehicle in Lusaka or across Zambia requires strict diligence before any Kwacha exchanges hands. Many unsuspecting buyers fall prey to cloned whitebooks, unpaid ZRA customs liabilities, or duplicate chassis stampings.',
      'Always request an original physical RTSA Whitebook rather than photocopies or mobile phone screenshots. Check the watermark against sunlight and inspect page 2 for official endorsements.',
      'Verify the Chassis Number (VIN) physically on the vehicle firewall or under the driver’s seat. Ensure every stamped character matches the whitebook exactly without signs of grinding or re-welding.',
      'Obtain a ZRA Customs Clearance certificate. If a vehicle was imported under special concession or diplomatic rebate, standard duties must be settled before private ownership transfer.',
      'Schedule inspection at designated RTSA centres such as Lumumba or Lusaka Showgrounds prior to final payment settlement.'
    ],
    tips: [
      'Never transfer funds based purely on an agreement on WhatsApp.',
      'Verify that the seller’s NRC (National Registration Card) matches the name on the Whitebook.',
      'Perform a police clearance check at Lusaka Division headquarters to ensure the vehicle has not been flagged for theft or litigation.'
    ]
  },
  {
    id: 'art-2',
    title: 'Best Fuel-Efficient Cars for Daily Commutes in Zambia (Axio, Fit, Vitz)',
    score: '8/10',
    category: 'Commuter Fuel Economy',
    summary: 'Cost-per-kilometre comparisons for the most popular commuter models across Lusaka roads.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOOfVmzZZ0oLd0qT32WAj5M1h0X6_faHswJmN6hw9A9j-9QjfsPnQYla4jvo868N05Qjxz2b3gj2P4ZlCJIq03N2luxKNx8mml0VF1N66D6fRgWi0OlXXXfh9DoT9sw8TfjEz0CEtXnmzAOzaaJop-HhcmXyrwSIEd0irZ4t-64FWMiACPQQt2ox53gYA_J984tnB3bf1Sjkt0DCU9ejk9EY71EbMgf5v77DGYIeGHvBLOO7vlWv3kYA',
    author: 'Kelvin Tembo, Transport Economist',
    date: 'Updated October 2026',
    readTime: '5 min read',
    content: [
      'With fuel prices fluctuating at Zambian pump stations, choosing a car with frugal consumption can save you upwards of K3,500 every single month.',
      '1. Toyota Corolla Axio (1.5L): A benchmark for durability. Delivers 16-18 km/L in stop-and-go morning traffic along Addis Ababa Drive and Great East Road.',
      '2. Honda Fit Hybrid (1.5L IMA): Achieves 20-22 km/L in suburban runs. The regenerative braking system recharges during crawl speeds, making it the most cost-effective choice for daily Lusaka city workers.',
      '3. Toyota Vitz / Yaris (1.0L / 1.3L): Tiny turning circle, light curb weight, and unbeatable ease of parking around Cairo Road and Kamwala trading areas.'
    ],
    tips: [
      'Replace spark plugs and oxygen sensors every 30,000 km to preserve peak mileage.',
      'Use the recommended 0W-20 or 5W-30 synthetic oil rather than thick generic 20W-50 oil which drastically increases engine drag.',
      'Check tyre pressures weekly; low tyre pressures account for an estimated 8% increase in Kwacha fuel consumption.'
    ]
  },
  {
    id: 'art-3',
    title: 'Imported vs Local Registered: Pros, Cons, and Cost Breakdown in Kwacha',
    score: '8/10',
    category: 'Buying Strategies',
    summary: 'Understand port clearing, duty charges, and registration timelines before deciding.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0StjdbXuB_W84RlhcB1UdjAoTyYFjev4HW9eUPmVCptXhXoL62H5IqToNI2rjcJfWlrxdRYljtr1SQ49iPJC_HyHUWWt5WDaBcEcensunwiLAzSVdkUNAiGmdbXx9-cAC2-j89B1phynZt2traEbaBxK_YVidSLQFXGKgHabCSo66H6cytoOcoVElOh8HfuH7XyWAyUUtolA42FaPGtRCJzgP8IjguPxg1IEBRETyWuoTRzoSC2aSqw',
    author: 'Lombe Mwape, Customs Broker',
    date: 'Updated October 2026',
    readTime: '7 min read',
    content: [
      'Should you buy a car that is already registered with Zambian plates (e.g. BAF / BAG series) or import directly from Japan, the UK, or South Africa?',
      'Pros of Local Registered: Immediate driving, physical test drive possible before payment, known local road handling, zero wait time at Dar es Salaam or Walvis Bay ports.',
      'Pros of Direct Import: First Zambian owner, uncompromised suspension condition from foreign tarmac roads, guaranteed authentic Japanese auction sheet grade (4.0+).',
      'The Cost Equation: Remember to factor in CIF price + ZRA Customs Duty (25-30%) + Excise Duty (20-30%) + Value Added Tax (16%) + Carbon Tax + Port handling fees + Transit insurance to Lusaka.'
    ],
    tips: [
      'Always request the Japanese auction sheet when buying locally advertised "fresh imports".',
      'Budget at least K15,000 for unexpected clearance demurrage fees if importing through Dar es Salaam.',
      'Use AutoAce Zed to match with local pre-cleared vehicles if you require delivery within 48 hours.'
    ]
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'news-1',
    tag: 'Buyer Safety',
    title: 'How to avoid common pitfalls when buying vehicles through informal brokers',
    description: 'Key precautions when navigating informal street brokerages and private yard sales.',
    date: 'Oct 19, 2026',
    readTime: '4 min',
    details: [
      'Informal street agents ("bakachema") often operate without registered office premises, making post-purchase recourse impossible.',
      'Always insist on conducting physical viewings inside recognized commercial yards or well-lit banking areas.',
      'Verify that payments are directed to the actual registered vehicle owner or through an escrowed automotive sourcing platform like AutoAce Zed.'
    ]
  },
  {
    id: 'news-2',
    tag: 'Maintenance',
    title: 'Top 10 reliable vehicles with accessible spare parts across Zambia',
    description: 'Availability of genuine spare parts and qualified technicians along major provincial corridors.',
    date: 'Oct 15, 2026',
    readTime: '5 min',
    details: [
      'Toyota Hilux, Axio, Corolla, and Prado lead the country in parts availability from Lusaka to Solwezi.',
      'Nissan X-Trail and Mazda CX-5 now boast well-established aftermarket parts distributors in Downtown Lusaka and Kitwe Mart.',
      'German vehicles (Mercedes-Benz, BMW) require specialized scan tools and ordering lead times of 3-7 days for suspension bushes and control modules.'
    ]
  },
  {
    id: 'news-3',
    tag: 'Market Pricing',
    title: 'Understanding vehicle valuation and pricing trends in Lusaka',
    description: 'A quarterly analysis of resale values, exchange rate impacts, and demand patterns.',
    date: 'Oct 10, 2026',
    readTime: '6 min',
    details: [
      'USD/ZMW exchange rate shifts directly influence port clearing costs, creating seasonal pricing shifts.',
      'Compact SUVs between K300,000 and K500,000 remain the fastest-selling category in Zambia, with average time-to-sale under 8 days.',
      'High mileage twin cabs retain up to 68% of their value over 4 years due to ongoing agricultural and mining demand.'
    ]
  }
];

export const VIDEO_GUIDES: VideoGuide[] = [
  {
    id: 'vid-1',
    title: 'Physical Inspection Checklist: How agents verify chassis, engine, and whitebooks',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQbOkU-iNn0b5S7tAmULGzq08Q-K22p2BkOgfH6YhzKOn24dGSj7MG_EmFy-2KlDhE6NdHxU22oV7Rk_v7EytTZd_wD5HIddUPkgrHRjlHS3T1ChT-pS5OpbMfM3CX_4DMkHa1WIC4SHbH1LaaZT6SU0CQQxwuC50rZ-pOU0jEz0Qqd6LAUoiH5h_SM1-y8zXJ6I2GB9fbAuIjt3xMBoe3D7INPfeD9XLeikO21nnwTy7pYb8CbPb31Q',
    duration: '12:45',
    channel: 'AutoAce Zed Tech Team',
    views: '24K views',
    description: 'Join our certified inspector on a full 48-point physical verification at a Lusaka car yard. Learn where to look for hidden flood damage, engine blow-by, and chassis welding.',
    steps: [
      'Engine oil filler cap check for milky emulsion (head gasket leakage)',
      'Cold engine start listen for timing chain rattle',
      'Chassis frame rail inspection for prior structural accidents',
      'RTSA Whitebook security holograms and serial verification'
    ]
  },
  {
    id: 'vid-2',
    title: "Comparing Zambia's Top 3 Hatchbacks: Toyota Axio vs Honda Fit vs Demio",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5UnL35qg0ek6pj_t3O0RFxXLLWnW7D9-qHY_8ss8AFx31Ao6hxMfQ0slC7EJU7VxYo--LHTI5r9KHKEsAsiw5k9pd3PB-LBj56AcrLeWzi1Gs2l6bVDALTJvnI-jisGh8UG3kHts3I_vVF92omw5QlQsx33mFfwsxTlNlUPoI0XyZRWKFn55s96mRGis5tdtgH1hvATGfqGMiRhuKmRxHXgx9VIvnfAPaupAaSMOaaK38peDCKRXvpw',
    duration: '18:20',
    channel: 'Mat Watson / Zed Motors Review',
    views: '45K views',
    description: 'We pit Zambia’s favourite runabouts against each other on real Lusaka tarmac and rough feeder roads. Which offers the best value per Kwacha?',
    steps: [
      'Ground clearance and speed bump test',
      'Fuel economy real-world test along Kafue Road',
      'Rear boot space practicality test with luggage',
      'Long-term maintenance cost projection'
    ]
  },
  {
    id: 'vid-3',
    title: 'From Request to Handover: How AutoAce matches buyer demand with real vehicles',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNl6Sa8aSFHf-OCKfzN83wo3xqoPzix3HkbqdnBlw0EwU15T4436vD1RpXI95n9JB7j9W6m5mbWaImSkOFhN2qfHHDBwwFmfB7I1hJ_9FYPKhquS22jQCBXHNwgTo1xzogjDDReWslzj2ikglgB5jCiQi_yjFYnw330BeybICGZvekfgbzRkUo14dgzX5vrL9R_LROFD9Kcldxpd3JDI_jrbKAApmSi1EDbBpC--EIh8EYdC9JrYxS2Q',
    duration: '09:15',
    channel: 'AutoAce Stories Zambia',
    views: '19K views',
    description: 'Follow Chilufya from Lusaka as she submits her requirements for a family crossover and receives 3 verified matches from vetted agents within 24 hours.',
    steps: [
      'Submitting custom Kwacha budget & preference',
      'Vetted agent dispatch and background vehicle verification',
      'Joint yard inspection and paperwork handover'
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is AutoAce Zed?',
    answer: 'AutoAce Zed is a vehicle discovery and demand-matching platform in Zambia. Instead of browsing hundreds of stale listings, you tell us the car you need and your budget, and we connect you with vetted automotive agents and sellers who can assist you.'
  },
  {
    id: 'faq-2',
    question: 'Does AutoAce own the vehicles listed on the site?',
    answer: 'No. AutoAce Zed is not a conventional car yard or stockholding dealer. We coordinate introductions between active vehicle buyers, reputable vehicle sellers, and vetted automotive agents across Lusaka and throughout Zambia. Vehicle details, pricing, condition, and documentation are confirmed directly before any transaction proceeds.'
  },
  {
    id: 'faq-3',
    question: 'Does it cost me anything to submit a car request?',
    answer: 'No, submitting a vehicle request through AutoAce Zed is free. We help connect you with relevant options and agents to facilitate your search with total transparency.'
  },
  {
    id: 'faq-4',
    question: 'Can I sell my car or join as an automotive agent?',
    answer: 'Yes! If you have a vehicle to sell, you can submit its details to connect with genuine qualified buyers. If you are a vehicle agent or sourcing specialist in Zambia, you can join the AutoAce network to receive relevant buyer enquiries matching your inventory and sourcing capabilities.'
  }
];

export const CAR_MANUFACTURERS = [
  'Abarth', 'Alfa Romeo', 'Alpine', 'Aston Martin', 'Audi', 'Bentley',
  'BMW', 'BYD', 'Citroen', 'Cupra', 'Dacia', 'Ferrari',
  'Fiat', 'Ford', 'Geely', 'Genesis', 'Honda', 'Hyundai',
  'Jaecoo', 'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus',
  'Lotus', 'Maserati', 'Mazda', 'Mercedes-Benz', 'MG', 'MINI',
  'Nissan', 'OMODA', 'Peugeot', 'Polestar', 'Porsche', 'Renault',
  'SEAT', 'Skoda', 'Smart', 'Tesla', 'Toyota', 'Vauxhall',
  'Volkswagen', 'Volvo'
];

export const POPULAR_MODELS_ZAMBIA = [
  'Toyota Hilux', 'Toyota Axio', 'Honda Fit', 'Toyota Prado TX', 'Toyota Corolla',
  'Nissan X-Trail', 'Mazda CX-5', 'Mitsubishi Pajero', 'Toyota Land Cruiser', 'Toyota Harrier',
  'Mercedes-Benz C-Class', 'Ford Ranger', 'Toyota RAV4', 'Honda Vezel', 'Toyota IST',
  'Toyota Premio', 'Subaru Forester', 'Suzuki Swift', 'Toyota Noah / Voxy', 'Volkswagen Golf'
];

export const INSPECTION_YARDS = [
  {
    id: 'yard-1',
    name: 'Lusaka Showgrounds Auto Pavilion',
    area: 'Great East Road, Lusaka',
    features: ['RTSA On-site Desk', 'Hydraulic Lift', 'Computerised OBD-II Diagnostics'],
    hours: 'Mon - Sat: 08:00 - 17:00',
    contact: '+260 97 100 2001'
  },
  {
    id: 'yard-2',
    name: 'Lumumba Road Vehicle Verification Hub',
    area: 'Lumumba Commercial Zone, Lusaka',
    features: ['Physical Chassis Stamping Check', 'ZRA Duty Document Verification', 'Wheel Alignment Rig'],
    hours: 'Mon - Fri: 08:00 - 16:30',
    contact: '+260 96 200 3002'
  },
  {
    id: 'yard-3',
    name: 'Kitwe Parklands Auto Inspection Center',
    area: 'Independence Avenue, Kitwe',
    features: ['4x4 Undercarriage Inspection', 'Engine Compression Testing', 'Transfer Paperwork Attestation'],
    hours: 'Mon - Sat: 08:30 - 17:00',
    contact: '+260 95 300 4003'
  },
  {
    id: 'yard-4',
    name: 'Ndola Broadway Automotive Yard',
    area: 'Broadway Rd, Ndola',
    features: ['Commercial Fleet Diagnostics', 'Paint Depth Gauge Inspection', 'Buyer-Seller Secure Settlement Room'],
    hours: 'Mon - Fri: 08:00 - 17:00',
    contact: '+260 97 400 5004'
  }
];

export const WHITEBOOK_CHECKLIST_ITEMS = [
  { id: 'c1', text: 'Original physical Whitebook present (No laminated or photocopy versions)', mandatory: true },
  { id: 'c2', text: 'Chassis Number (VIN) on firewall matches Page 1 exactly character-for-character', mandatory: true },
  { id: 'c3', text: 'Engine number stamped on block matches RTSA registration certificate', mandatory: true },
  { id: 'c4', text: 'Seller’s NRC matches the name registered as Current Owner', mandatory: true },
  { id: 'c5', text: 'No existing bank encumbrance, hire purchase pledge, or court caveat', mandatory: true },
  { id: 'c6', text: 'Valid Road Tax disk, Fitness Certificate, and Third-Party Insurance', mandatory: false },
  { id: 'c7', text: 'ZRA Customs Duty receipt and Clearance Letter (especially for imported vehicles)', mandatory: true },
  { id: 'c8', text: 'Signed RTSA Change of Ownership Form (Form 14) and verified deed of sale', mandatory: true }
];
