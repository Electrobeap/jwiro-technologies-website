import {
  Activity,
  Banknote,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  ClipboardList,
  Cloud,
  Database,
  FileBarChart,
  Gauge,
  Landmark,
  Layers,
  LineChart,
  LockKeyhole,
  MapPinned,
  Network,
  Plug,
  Radar,
  ScrollText,
  Server,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  Workflow,
  Zap
} from "lucide-react";

const whatsappMessage =
  "Hello Jirow Technologies, I would like to speak with your team about energy intelligence for our organisation.";

export const whatsappNumber = "2348137832844";

export const seoKeywords = [
  "Energy Intelligence",
  "Africa Energy Data",
  "Nigeria Electricity Data",
  "NigeriaPowerData",
  "Power Sector Analytics",
  "Grid Analytics",
  "Electricity Market Intelligence",
  "Energy Data Infrastructure",
  "Energy Technology Company",
  "Infrastructure Intelligence",
  "DisCo Allocation Data",
  "GenCo Generation Data",
  "State Electricity Regulation Nigeria",
  "Electricity Act 2023",
  "Energy Analytics Platform",
  "AI Energy Assistant",
  "Energy Management Software",
  "Energy Forecasting",
  "Energy Benchmarking",
  "Data Methodology",
  "Regulatory Energy Reporting"
];

export const siteConfig = {
  name: "Jirow Technologies Limited",
  shortName: "Jirow",
  email: "info@jirowtechnologies.com",
  phone: "+234 813 783 2844",
  phoneHref: "tel:+2348137832844",
  addressLines: [
    "3rd Floor, The Octagon, 32A Commercial Avenue",
    "Sabo, Yaba, Lagos, Nigeria"
  ],
  location: "Lagos, Nigeria",
  country: "Nigeria",
  founder: "Paul Atakere",
  founderTitle: "Founder & Infrastructure Systems Lead",
  website: "jirowtechnologies.com",
  websiteHref: "https://jirowtechnologies.com",
  platformName: "NigeriaPowerData",
  platformDomain: "nigeriapowerdata.com",
  platformHref: "https://nigeriapowerdata.com",
  logoMaster: "/brand/jirow-logo-master.png",
  logo: "/brand/jirow-logo-display.png",
  logoMark: "/brand/jirow-logo-mark.png",
  brochureHref: "/brochure/jirow-technologies-profile.pdf",
  brochureFilename: "Jirow-Corporate-Profile-2026.pdf",
  positioning: "The Intelligence Layer for Africa's Power Systems",
  tagline: "Measured. Attributed. Actionable.",
  whatsappMessage,
  whatsappBase: `https://wa.me/${whatsappNumber}`,
  whatsappHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`
};

/*
 * TODO (corporate profile 2026 — internal): publish year of incorporation and
 * RC number here. Institutional readers, particularly DFIs and government
 * procurement, look for this on the company page.
 * Full checklist: docs/internal/corporate-profile-open-items.md
 */

export const companyPositioning =
  "Jirow Technologies Limited is a Lagos-headquartered energy technology company. We build the software, data infrastructure and AI systems that make the performance of power infrastructure measurable, comparable and continuously visible. Our flagship platform, NigeriaPowerData, is live.";

export const shortPositioning =
  "Energy technology company building the software, data infrastructure and AI systems behind Africa's power intelligence.";

export const thesis =
  "Africa's power sector does not lack data. It lacks a trustworthy, continuously available layer that turns that data into decisions.";

export const mission =
  "To build digital technology that turns energy and infrastructure data into decisions.";

export const vision =
  "To become Africa's leading energy intelligence company — the trusted software layer between the continent's power infrastructure and the people who plan, finance, regulate and operate it.";

export const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Platform", href: "/platform" },
  { label: "Methodology", href: "/methodology" },
  { label: "Markets", href: "/markets" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export const footerNav = [
  {
    title: "Products",
    links: [
      { label: "Product portfolio", href: "/products" },
      { label: "NigeriaPowerData", href: "/products/nigeriapowerdata" },
      { label: "Jirow Energy Analytics", href: "/products/jirow-energy-analytics" },
      {
        label: "Jirow AI Energy Assistant",
        href: "/products/jirow-ai-energy-assistant"
      }
    ]
  },
  {
    title: "Platform",
    links: [
      { label: "Platform architecture", href: "/platform" },
      { label: "Data methodology", href: "/methodology" },
      { label: "Security & compliance", href: "/platform#security" },
      { label: "Roadmap", href: "/roadmap" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Jirow", href: "/about" },
      { label: "Markets & customers", href: "/markets" },
      { label: "Business model", href: "/markets#business-model" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Contact", href: "/contact" }
    ]
  }
];

export const heroStats = [
  {
    value: "National",
    label:
      "NigeriaPowerData tracks generation, allocation and entity performance across the Nigerian electricity market"
  },
  {
    value: "Governed",
    label:
      "Every figure carries its source, its retrieval timestamp and a measured-or-modeled label"
  },
  {
    value: "Continuous",
    label:
      "A live reference point, not a quarterly report — history preserved beside every reading"
  }
];

export type ProductStatus = "live" | "in-development";

export const products = [
  {
    slug: "nigeriapowerdata",
    name: "NigeriaPowerData",
    href: "/products/nigeriapowerdata",
    status: "live" as ProductStatus,
    statusLabel: "Live",
    altitude: "National",
    tagline: "National electricity intelligence",
    function:
      "National electricity intelligence — grid, GenCo, DisCo and state-level analytics",
    observes:
      "Generation, allocation, entity performance, geographic distribution",
    buyer: "Regulators, investors, utilities",
    availability: "In operation",
    description:
      "A live energy intelligence platform for the Nigerian electricity market. It consolidates national grid generation, distribution-company allocation and entity-level performance into a single continuously updated system of record.",
    icon: Zap
  },
  {
    slug: "jirow-energy-analytics",
    name: "Jirow Energy Analytics",
    href: "/products/jirow-energy-analytics",
    status: "in-development" as ProductStatus,
    statusLabel: "In development",
    altitude: "Facility",
    tagline: "Energy management for facilities and portfolios",
    function:
      "Energy management and analytics for individual facilities, estates and industrial sites",
    observes:
      "Metering, assets, consumption, cost — read against national context",
    buyer: "Enterprise, estates, industry",
    availability: "Not yet available",
    description:
      "An energy management and analytics platform for commercial facilities, residential estates, industrial operations and enterprise portfolios — applying the measurement discipline established in NigeriaPowerData at site level.",
    icon: Building2
  },
  {
    slug: "jirow-ai-energy-assistant",
    name: "Jirow AI Energy Assistant",
    href: "/products/jirow-ai-energy-assistant",
    status: "in-development" as ProductStatus,
    statusLabel: "In development",
    altitude: "Decision",
    tagline: "Natural-language access to platform intelligence",
    function:
      "Natural-language interface turning platform data into prioritised guidance",
    observes: "Both platforms, translated into prioritised guidance",
    buyer: "All platform users",
    availability: "Not yet available",
    description:
      "A natural-language interface to everything Jirow's platforms observe. Users ask in plain language and receive prioritised, sourced answers drawn from live and historical platform data.",
    icon: BrainCircuit
  }
];

export const architectureLayers = [
  {
    layer: "Layer 3",
    name: "Decision",
    product: "Jirow AI Energy Assistant",
    description:
      "Turns what the platforms observe into prioritised, sourced guidance",
    status: "in-development" as ProductStatus,
    href: "/products/jirow-ai-energy-assistant"
  },
  {
    layer: "Layer 2",
    name: "Facility",
    product: "Jirow Energy Analytics",
    description: "Observes a single site: metering, assets, consumption, cost",
    status: "in-development" as ProductStatus,
    href: "/products/jirow-energy-analytics"
  },
  {
    layer: "Layer 1",
    name: "National",
    product: "NigeriaPowerData",
    description: "Observes the electricity system at country level",
    status: "live" as ProductStatus,
    href: "/products/nigeriapowerdata"
  }
];

export const sharedFoundation = [
  {
    title: "Shared AI & analytics layer",
    description:
      "Forecasting · anomaly detection · benchmarking · recommendation models",
    icon: BrainCircuit
  },
  {
    title: "Governed data pipeline",
    description: "Ingestion · validation · entity reconciliation · lineage · retention",
    icon: Database
  },
  {
    title: "Cloud infrastructure & security",
    description: "Encryption · access control · audit logging · tenant segregation",
    icon: Cloud
  }
];

export const sequenceRationale =
  "Building the national layer first forced us to solve the harder problems — heterogeneous public sources, gaps in upstream reporting, entity reconciliation and defensible treatment of uncertainty — before applying the same architecture to the comparatively controlled environment of a single site.";

/* ---------------------------------------------------------------- problem */

export const problemConsequences = [
  "Investors price assets without reliable operating histories",
  "Regulators intervene on quarterly filings",
  "Industrial operators size capacity against supply they cannot forecast",
  "Researchers and media describe the sector in anecdote, because no defensible timestamped reference exists"
];

export const problemStats = [
  {
    value: "2023",
    label: "Electricity Act decentralises regulation"
  },
  {
    value: "16",
    label: "States with transferred oversight, mid-2026"
  },
  {
    value: "36+1",
    label: "States and FCT in scope over time"
  },
  {
    value: "12",
    label: "Distribution companies in the market"
  }
];

export const regulatoryTimeline = [
  { year: "2005", title: "EPSR Act", note: "Centralised" },
  { year: "2013", title: "Privatisation", note: "11 DisCos created" },
  { year: "2023", title: "Electricity Act", note: "States empowered" },
  { year: "2026", title: "16 states transferred", note: "Live demand" }
];

/* ---------------------------------------------------------------- company */

export const operatingPrinciples = [
  {
    title: "Measurement before interpretation",
    description:
      "We publish what we measure and label what we model. The distinction is enforced in the product, not in a disclaimer.",
    icon: Gauge
  },
  {
    title: "Engineering foundations",
    description:
      "Analytics built on power-systems engineering, not generic data science applied to an unfamiliar domain.",
    icon: Network
  },
  {
    title: "Designed for African operating conditions",
    description:
      "Intermittent connectivity, uneven data availability and heterogeneous infrastructure are design constraints, not exceptions.",
    icon: Radar
  },
  {
    title: "Products over projects",
    description:
      "Durable platforms that compound in value, rather than bespoke engagements that end.",
    icon: Layers
  }
];

export const whatWeAreNot =
  "We are not an engineering consultancy, a metering hardware vendor, or a systems integrator. We do not sell installation, and we do not resell third-party platforms. Where those capabilities are needed alongside our software, we work with specialist partners.";

export const valueChain = [
  {
    title: "Metering & sensor hardware vendors",
    role: "Upstream",
    isJirow: false
  },
  {
    title: "Utilities, GenCos, DisCos, operators",
    role: "Operators",
    isJirow: false
  },
  {
    title: "Jirow",
    role: "Intelligence layer · software · data · AI",
    isJirow: true
  },
  {
    title: "Regulators, investors, enterprise buyers",
    role: "Decision makers",
    isJirow: false
  },
  {
    title: "Integrators & EPC partners",
    role: "Delivery partners",
    isJirow: false
  }
];

/* -------------------------------------------------------- NigeriaPowerData */

export const npdSourceNote =
  "Installed capacity: NERC Operational Factsheet, Feb 2026 · Available and dispatched: NISO, May 2026 · Peak delivered 5,801.84 MW, 4 March 2025 · Wheeling: TCN 2026 · Availability and load factor: NERC Q1 2026 · Frequency band: NERC. Fixed snapshot — figures update continuously on the platform.";

export const npdHeadlineMetrics = [
  { label: "Installed capacity", value: "13,625", unit: "MW", basis: "measured" },
  { label: "Available capacity", value: "7,311", unit: "MW", basis: "measured" },
  { label: "Avg dispatched", value: "4,222", unit: "MW", basis: "measured" },
  { label: "Stranded capacity", value: "3,162", unit: "MW", basis: "derived" }
];

export const capacityCascade = [
  { label: "Installed capacity", value: 13625, kind: "measured" as const },
  { label: "Transmission wheeling", value: 8700, kind: "measured" as const },
  { label: "Available capacity", value: 7311, kind: "measured" as const },
  { label: "Peak ever delivered", value: 5801.84, kind: "delivered" as const },
  { label: "Average dispatched", value: 4222, kind: "delivered" as const }
];

export const npdMarketStats = [
  { value: "12", label: "DisCos licensed" },
  { value: "28", label: "Grid-connected plants" },
  { value: "9", label: "Grid collapses in 2024" },
  { value: "7.05%", label: "Transmission loss factor" }
];

export const npdIndicators = [
  {
    title: "Plant availability factor",
    value: "32.72%",
    note: "of installed fleet, Q1 2026",
    detail: "Load factor on declared capacity 92.26%"
  },
  {
    title: "System frequency",
    value: "49.75 – 50.25 Hz",
    note: "prescribed band",
    detail: "Observed range 49.46 – 50.69 Hz · excursions outside band are flagged"
  }
];

export const npdModules = [
  {
    title: "Live generation dashboard",
    description:
      "National output, frequency, system stability and restoration signals, each timestamped.",
    icon: Activity
  },
  {
    title: "Market data panel",
    description:
      "Settlement, cost-recovery and liquidity indicators read against operating data.",
    icon: Banknote
  },
  {
    title: "Distribution intelligence",
    description:
      "DisCo allocation, transformer utilisation, capacity margin and risk classification.",
    icon: Plug
  },
  {
    title: "State intelligence",
    description:
      "Franchise data as geographic demand and infrastructure-stress estimates.",
    icon: MapPinned
  },
  {
    title: "Methodology",
    description:
      "How trend, ranking, risk and forecast indicators are calculated.",
    icon: ScrollText
  },
  {
    title: "Data sources",
    description: "The upstream publications each figure is drawn from.",
    icon: Database
  }
];

export const npdEntityAnalysis = [
  {
    title: "GenCo pages",
    description:
      "Latest output against average — a large gap signals unusual movement. Then volatility, moving averages, forecasts and ranking."
  },
  {
    title: "DisCo pages",
    description:
      "Allocation, transformer utilisation, projected 12-month utilisation. High settlement growth on a thin capacity margin indicates rising risk."
  },
  {
    title: "Concentration",
    description:
      "Top GenCos and Top DisCos expose load concentration — a stress signal where loading outpaces upgrades."
  }
];

export const npdReadingOrder = [
  "Open the national dashboard",
  "Confirm the reading is fresh",
  "Compare the latest value against the 24-hour and 7-day trend",
  "Drill into the relevant entity or state page"
];

/* ------------------------------------------------------------ methodology */

export const methodologyComparison = [
  {
    dimension: "What it covers",
    measured:
      "Total generation, published DisCo allocation, frequency, restoration signals, source timestamps",
    estimate:
      "Transformer utilisation, projected 12-month utilisation, capacity margin, settlement expansion pressure, distribution risk classification, state-level demand and stress estimates"
  },
  {
    dimension: "Provenance",
    measured:
      "Direct public-data signals, attributed to originating source with retrieval time",
    estimate: "Derived from measured inputs using stated assumptions"
  },
  {
    dimension: "Intended use",
    measured: "Reference, citation, reporting, decision input",
    estimate: "Screening, research, journalism, planning conversations"
  },
  {
    dimension: "When unavailable",
    measured:
      "Platform states the source is stale or missing — it does not interpolate silently",
    estimate:
      "Estimate is withheld rather than extended beyond its supporting data"
  }
];

export const methodologyPipeline = [
  { step: "Public source", note: "retrieved + timestamped" },
  { step: "Validation", note: "reconcile, flag gaps" },
  { step: "Classification", note: "measured or modeled" },
  { step: "Lineage stored", note: "traceable to input" },
  { step: "Published", note: "labelled at point of use" }
];

export const methodologyLimits = [
  "A public data platform does not replace official market settlement systems — its value is interpretation, not adjudication.",
  "Coverage and freshness are constrained by upstream publication behaviour; the platform surfaces those constraints rather than concealing them.",
  "Estimates are screening tools, labelled as such wherever they appear.",
  "Public data can show stress patterns but cannot reliably predict every collapse without full operational telemetry."
];

/* ------------------------------------------------------ energy analytics */

export const analyticsCapabilities = [
  {
    title: "Consolidated monitoring",
    description:
      "Grid supply, generation assets and distributed energy resources in one view, with true blended cost per source.",
    icon: Layers
  },
  {
    title: "Asset performance",
    description:
      "Equipment health and downtime risk analytics across a site or portfolio.",
    icon: Gauge
  },
  {
    title: "Consumption analysis",
    description:
      "Breakdown by location, category and time of use, benchmarked across sites.",
    icon: ChartNoAxesCombined
  },
  {
    title: "Automated reporting",
    description:
      "Internal management and external compliance reporting generated from platform data.",
    icon: FileBarChart
  },
  {
    title: "Forecasting",
    description:
      "Load forecasting and anomaly detection as the data foundation matures.",
    icon: LineChart
  },
  {
    title: "Grid context",
    description:
      "Site performance read against the franchise area it depends on — the capability only Jirow has.",
    icon: Network
  }
];

export const analyticsSupplyMix = ["Grid", "Generator", "Solar + storage"];

export const analyticsSequenceRationale =
  "Facility-level energy platforms are a well-populated category globally. What is scarce is one that understands the specific behaviour of the Nigerian grid — allocation patterns, reliability by franchise area, and the true blended cost of mixed supply. That context is what NigeriaPowerData already produces, and it is the reason this product is being built second rather than first.";

/* ---------------------------------------------------------- AI assistant */

export const assistantPrinciples = [
  {
    title: "Grounded in platform data",
    description:
      "Responses drawn from Jirow's own measured and modeled data, with the distinction preserved in every answer.",
    icon: Database
  },
  {
    title: "Cited by default",
    description:
      "Every response identifies the underlying data and its timestamp.",
    icon: ScrollText
  },
  {
    title: "Prioritised, not exhaustive",
    description:
      "Built to surface the two or three things that warrant attention, not to summarise everything.",
    icon: Target
  },
  {
    title: "A common layer",
    description:
      "One assistant serving both platforms, rather than a separate interface per product.",
    icon: Sparkles
  }
];

export const assistantExample = {
  question: "Has supply to my franchise area weakened this month?",
  answer:
    "Allocation to this DisCo is below its trailing 30-day average. Two of the three contributing factors are measured; one is estimated.",
  badges: [
    { kind: "measured" as const, label: "Measured · allocation" },
    { kind: "measured" as const, label: "Measured · generation" },
    { kind: "estimate" as const, label: "Estimate · transformer stress" }
  ],
  source: "Source: NISO public feed · retrieved 00:00"
};

export const assistantBoundary =
  "The assistant is a decision-support interface. It does not issue control instructions to physical infrastructure, and Jirow has no near-term plans to build autonomous control capability. Operational authority remains with the operator.";

/* ------------------------------------------------------------- platform */

export const platformInputs = [
  "Public grid data",
  "Metering / IoT",
  "SCADA / BMS",
  "Third-party feeds"
];

export const platformStages = [
  {
    number: "01",
    title: "Ingestion",
    summary: "Source + retrieval timestamp attached at entry",
    description:
      "Automated collection from public grid data sources, metering and IoT devices, SCADA and building management systems, third-party feeds, and structured manual inputs. Every record carries its source and retrieval timestamp from the moment it enters the system.",
    icon: Database
  },
  {
    number: "02",
    title: "Storage",
    summary: "Governed data lake, raw + processed, full lineage",
    description:
      "A governed data lake retains raw and processed data with full lineage, so any published figure can be traced back to the input that produced it.",
    icon: Server
  },
  {
    number: "03",
    title: "Processing",
    summary: "Validation, reconciliation, entity resolution",
    description:
      "Automated pipelines validate, reconcile and enrich incoming data — including entity reconciliation across sources that name the same asset differently, a recurring problem in this market.",
    icon: SlidersHorizontal
  },
  {
    number: "04",
    title: "Analysis",
    summary: "Trend, volatility, anomaly, forecast — tagged as estimate",
    description:
      "Statistical and machine-learning models produce trend analysis, volatility measures, anomaly detection and forecasting. Model outputs are tagged as estimates throughout.",
    icon: BrainCircuit
  },
  {
    number: "05",
    title: "Delivery",
    summary: "Dashboards, reports, API, assistant",
    description:
      "Dashboards, structured reports and API access, with the assistant layer providing natural-language access to the same underlying data.",
    icon: Workflow
  }
];

export const platformPrinciples = [
  "Cloud-native and horizontally scalable, sized to actual workload rather than provisioned for peak",
  "Encryption in transit and at rest, role-based access control, audit logging at every layer",
  "Source attribution and data lineage retained end to end",
  "Designed for degraded conditions — the platform reports missing or stale upstream data rather than failing silently or filling gaps invisibly"
];

/*
 * NOTE (corporate profile 2026 — internal): vendor-specific infrastructure
 * detail (cloud provider, managed services, model providers) is deliberately
 * omitted from public pages and supplied in a technical annex for due
 * diligence, partner programmes or procurement.
 */

/* ---------------------------------------------------- security & compliance */

export const securityPosture = [
  {
    title: "Encryption",
    description:
      "Data encrypted in transit and at rest across all platform services.",
    icon: LockKeyhole
  },
  {
    title: "Access control",
    description: "Role-based access control with least-privilege defaults.",
    icon: ShieldCheck
  },
  {
    title: "Audit logging",
    description: "Logging across data access and administrative actions.",
    icon: ClipboardList
  },
  {
    title: "Tenant segregation",
    description: "Client data segregated in multi-tenant deployments.",
    icon: Layers
  }
];

export const dataProtectionStatement =
  "Jirow operates under the Nigeria Data Protection Act 2023 and the regulatory framework administered by the Nigeria Data Protection Commission. Personal data handling, retention and subject rights are governed accordingly.";

/*
 * TODO (corporate profile 2026 — internal): the three "in progress" rows below
 * are gating items for government, utility and enterprise procurement —
 * NDPC registration & DPO, availability & support SLA, and ISO/IEC 27001 or
 * SOC 2. Replace the status once each is confirmed.
 * Full checklist: docs/internal/corporate-profile-open-items.md
 */
export const procurementReadiness = [
  {
    requirement: "NDPA 2023 compliance framework",
    status: "Operating" as const,
    note: "Personal data handling governed under the Act"
  },
  {
    requirement: "NDPC registration & DPO",
    status: "In progress" as const,
    note: "Documented on request during procurement"
  },
  {
    requirement: "Availability & support SLA",
    status: "In progress" as const,
    note: "Issued with enterprise and institutional agreements"
  },
  {
    requirement: "ISO/IEC 27001 or SOC 2",
    status: "Planned" as const,
    note: "Compensating controls documented in the meantime"
  }
];

export const companionDocuments = [
  {
    title: "Technical annex",
    description:
      "Architecture and infrastructure detail for partner programmes and technical diligence.",
    icon: Server
  },
  {
    title: "Investor data room",
    description: "Commercial, financial and governance material for investors.",
    icon: ChartNoAxesCombined
  },
  {
    title: "Procurement pack",
    description:
      "Registration, insurance and security questionnaire responses for buyers.",
    icon: ClipboardList
  }
];

export const compliancePosition =
  "Jirow states what it currently operates and what it is working toward. We do not claim certifications we do not hold.";

/* --------------------------------------------------- markets & customers */

export const buyerGroups = [
  {
    title: "Public sector & regulators",
    highlight: "Fastest growing",
    description:
      "Federal and state electricity regulators, ministries and public agencies requiring independent visibility into infrastructure performance within their jurisdictions. Decentralisation under the Electricity Act 2023 has made this the fastest-emerging segment.",
    entry: "NigeriaPowerData",
    entryHref: "/products/nigeriapowerdata",
    icon: Landmark
  },
  {
    title: "Capital & analysis",
    description:
      "Investors, development finance institutions, analysts and researchers assessing power-sector assets and market conditions — where an independent, timestamped reference is required to support a position.",
    entry: "NigeriaPowerData",
    entryHref: "/products/nigeriapowerdata",
    icon: ChartNoAxesCombined
  },
  {
    title: "Utilities & network operators",
    description:
      "Generation and distribution companies benchmarking their own performance against the wider system, and evaluating supply and demand conditions across franchise areas.",
    entry: "NigeriaPowerData → Energy Analytics",
    entryHref: "/products/nigeriapowerdata",
    icon: Zap
  },
  {
    title: "Enterprise & facilities",
    description:
      "Commercial buildings, residential estates, industrial operations, hospitals and educational campuses managing mixed grid, generator and distributed energy supply.",
    entry: "Jirow Energy Analytics, on availability",
    entryHref: "/products/jirow-energy-analytics",
    icon: Building2
  }
];

export const customerProblems = [
  "No consolidated, current view of infrastructure or consumption performance",
  "Capital and operational decisions made on stale or non-comparable data",
  "Reactive maintenance driven by absence of early warning",
  "Reporting obligations met through manual assembly of fragmented records"
];

export const outcomeClaimsPosition =
  "Unverifiable performance percentages are the fastest way to lose credibility with a development finance institution or utility evaluator. Client-outcome figures will be published only when they are audited or client-attested.";

/* --------------------------------------------------------- business model */

export const revenueLines = [
  {
    line: "Line 01",
    title: "Platform subscriptions",
    summary: "Tiered recurring access",
    description:
      "Tiered recurring access to NigeriaPowerData, differentiated by data depth, historical range, export capability and seats. Institutional tiers for regulators, utilities and investment firms sit above individual professional access.",
    icon: Layers
  },
  {
    line: "Line 02",
    title: "Data & API licensing",
    summary: "Programmatic access",
    description:
      "Programmatic access to structured platform data for organisations integrating Jirow data into their own systems, models or products.",
    icon: Network
  },
  {
    line: "Line 03",
    title: "Enterprise deployments",
    summary: "Per-site / per-portfolio",
    description:
      "Per-site or per-portfolio subscriptions to Jirow Energy Analytics on availability, priced on the scale of infrastructure monitored.",
    icon: Building2
  },
  {
    line: "Line 04",
    title: "Research & reporting",
    summary: "Constrained by design",
    description:
      "Commissioned analysis and recurring sector reporting built on platform data, serving investors, development finance institutions and public institutions.",
    icon: FileBarChart
  }
];

export const businessModelRationale =
  "Each line draws on the same underlying data infrastructure, so the marginal cost of serving an additional customer is low relative to the cost of building and maintaining the platform. This is the economic difference between a product company and a services firm, and it is the reason the portfolio is sequenced as it is.";

export const advisoryConstraint =
  "Advisory work is a deliberately constrained fourth line. It supports adoption and generates sector insight — but it is not permitted to displace product development as the company's centre of gravity.";

/* ---------------------------------------------------------------- roadmap */

/*
 * TODO (corporate profile 2026 — internal): attach target timeframes to stages
 * two through five. An undated roadmap reads as a wish list; a dated roadmap
 * that is subsequently revised reads as a company that plans.
 * Full checklist: docs/internal/corporate-profile-open-items.md
 */
export const roadmapStages = [
  {
    number: "01",
    status: "Delivered",
    title: "Establish the national reference layer",
    short: "National layer",
    anchor: "NigeriaPowerData in operation",
    description:
      "Deliver and operate NigeriaPowerData as a reliable, continuously updated view of the Nigerian electricity market, with defensible methodology and clear source attribution. Delivered and in operation; coverage and depth expanding."
  },
  {
    number: "02",
    status: "In progress",
    title: "Deepen analytical capability",
    short: "Deepen analytics",
    anchor: "Forecasting, benchmarking, state coverage, API",
    description:
      "Extend forecasting, volatility analysis and entity benchmarking; broaden state-level coverage in step with the ongoing transfer of regulatory oversight to state commissions; formalise API and data-licensing access."
  },
  {
    number: "03",
    status: "Next",
    title: "Extend to the facility",
    short: "Extend to facility",
    anchor: "Release Jirow Energy Analytics",
    description:
      "Release Jirow Energy Analytics, applying the platform's data model and measurement discipline to site-level monitoring for enterprise, estate and industrial customers."
  },
  {
    number: "04",
    status: "Planned",
    title: "Make intelligence accessible",
    short: "Accessible intelligence",
    anchor: "Release AI Energy Assistant across both platforms",
    description:
      "Release the Jirow AI Energy Assistant as a common natural-language layer across both platforms, with sourced, timestamped responses."
  },
  {
    number: "05",
    status: "Horizon",
    title: "Extend beyond Nigeria",
    short: "Beyond Nigeria",
    anchor: "Additional African markets",
    description:
      "Apply the platform architecture to additional African electricity markets where comparable public data exists — prioritised by data availability and regulatory demand rather than market size alone."
  }
];

export const roadmapBoundary =
  "Jirow does not currently pursue autonomous infrastructure control or digital-twin simulation. Both are plausible long-horizon extensions of this architecture, and neither is a commitment we are prepared to make in this document.";

/* ------------------------------------------------------------- leadership */

export const leadership = [
  {
    name: siteConfig.founder,
    title: siteConfig.founderTitle,
    bio: "Leads product and infrastructure systems. Background spans electrical and electronics engineering, energy and infrastructure operations, data analytics and automation, and cloud and AI platform development."
  }
];

/*
 * TODO (corporate profile 2026 — internal): expand the leadership grid with
 * name, title, photograph and a two-line biography for each member once the
 * team has grown beyond the founder. Also expand founder biography with years
 * of experience, named prior roles, qualifications and memberships.
 * Full checklist: docs/internal/corporate-profile-open-items.md
 */

export const leadershipDisciplines = [
  {
    title: "Electrical engineering",
    description: "Power systems and infrastructure operations.",
    icon: Zap
  },
  {
    title: "Data & analytics",
    description: "Pipeline design, modelling and automation.",
    icon: ChartNoAxesCombined
  },
  {
    title: "Cloud platform",
    description: "Architecture, scaling and security.",
    icon: Cloud
  },
  {
    title: "Product strategy",
    description: "Roadmap, positioning and AI direction.",
    icon: Target
  }
];

export const governance = [
  {
    element: "Corporate registration",
    status: "In place" as const,
    note: "Private limited company registered in Nigeria"
  },
  {
    element: "Audited accounts",
    status: "On request" as const,
    note: "Available to counterparties under confidentiality"
  }
];

/* -------------------------------------------------------- differentiation */

export const differentiators = [
  {
    title: "We operate at national scale already",
    description:
      "NigeriaPowerData is live and covers an entire national electricity market — a materially harder data engineering problem than a single-site deployment, and solved infrastructure every subsequent product inherits.",
    icon: Zap
  },
  {
    title: "Our methodology is auditable",
    description:
      "The separation between measured and modeled data is enforced in the product and stated publicly — the difference between a platform that can support a defensible decision and one that cannot.",
    icon: ScrollText
  },
  {
    title: "We build products, not engagements",
    description:
      "Recurring software revenue, not billable hours. Clients acquire a capability that persists and improves, rather than a report that ages from the day it is delivered.",
    icon: Layers
  },
  {
    title: "Domain before analytics",
    description:
      "In a market where grid behaviour is highly specific, generic analytics capability applied without domain understanding produces confident and incorrect answers.",
    icon: Network
  },
  {
    title: "Built for this market, from this market",
    description:
      "A Nigerian company building for Nigerian and African infrastructure conditions. Our design constraints are the conditions our customers actually operate in.",
    icon: MapPinned
  }
];

export const trustTest =
  "A platform is only as valuable as the decisions it can be trusted to support. Everything we build exists to make that trust defensible.";

export const conservativeClaimsNote =
  "Jirow makes no quantified client-outcome claims. Figures cited on this site are drawn from public regulatory and market sources and are attributed at the point of use.";
