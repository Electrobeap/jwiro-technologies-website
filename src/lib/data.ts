import {
  Activity,
  BarChart3,
  BatteryCharging,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  CircuitBoard,
  ClipboardCheck,
  Cloud,
  Database,
  Factory,
  FileSearch,
  Fuel,
  Gauge,
  Landmark,
  Leaf,
  LineChart,
  PlugZap,
  SearchCheck,
  Settings2,
  ShieldCheck,
  SolarPanel,
  TimerReset,
  TrendingDown,
  Workflow,
  Wrench,
  Zap
} from "lucide-react";

const whatsappMessage =
  "Hello Jirow Technologies, I would like to request an Energy Intelligence Assessment.";

export const whatsappNumber = "2348137832844";

export const seoKeywords = [
  "Energy Intelligence",
  "Energy Monitoring",
  "Energy Analytics",
  "Industrial Energy Management",
  "Infrastructure Monitoring",
  "Energy Optimization",
  "Generator Monitoring",
  "Energy Efficiency",
  "Operational Analytics",
  "Predictive Maintenance",
  "Smart Energy Systems",
  "Infrastructure Intelligence",
  "Energy Technology",
  "Industrial Decarbonization",
  "Energy Management Platform"
];

export const siteConfig = {
  name: "Jirow Technologies Limited",
  shortName: "Jirow",
  email: "info@jirowtechnologies.com",
  phone: "+234 813 783 2844",
  phoneHref: "tel:+2348137832844",
  location: "Lagos, Nigeria",
  country: "Nigeria",
  founderTitle: "Founder & Infrastructure Systems Lead",
  website: "jirowtechnologies.com",
  websiteHref: "https://jirowtechnologies.com",
  logoMaster: "/brand/jirow-logo-master.png",
  logo: "/brand/jirow-logo-display.png",
  logoMark: "/brand/jirow-logo-mark.png",
  brochureHref: "/brochure/jirow-technologies-profile.pdf",
  brochureFilename: "Jirow-Technologies-Company-Profile.pdf",
  whatsappMessage,
  whatsappBase: `https://wa.me/${whatsappNumber}`,
  whatsappHref: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`
};

export const companyPositioning =
  "Jirow Technologies helps estates, commercial facilities, and industrial operations monitor, optimize, and improve energy infrastructure through analytics, intelligent monitoring, automation, and operational visibility.";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Assessment", href: "/energy-intelligence-assessment" },
  { label: "Roadmap", href: "/technology-roadmap" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" }
];

export const heroStats = [
  {
    value: "Visibility",
    label: "Real-time insight into energy performance and infrastructure health"
  },
  {
    value: "Reliability",
    label: "Proactive monitoring and optimization to reduce downtime exposure"
  },
  {
    value: "Intelligence",
    label: "Energy data translated into stronger operational decisions"
  }
];

export const serviceDetails = [
  {
    title: "Energy Intelligence Assessment",
    summary:
      "A professional assessment for estates, hotels, industrial sites, commercial facilities and infrastructure operators.",
    outcome:
      "Understand where energy is consumed, where money is lost and how performance can be improved.",
    deliverables: [
      "Energy infrastructure review",
      "Generator performance assessment",
      "Fuel consumption analysis",
      "Grid reliability assessment",
      "Operational risk analysis",
      "Energy cost evaluation",
      "Optimization recommendations",
      "Renewable integration opportunities"
    ],
    icon: FileSearch
  },
  {
    title: "Energy Monitoring & Analytics",
    summary:
      "Operational visibility across critical energy assets, generators, meters, source availability and site-level performance.",
    outcome:
      "Move from manual reporting and assumptions to measured operating evidence.",
    deliverables: [
      "Energy monitoring",
      "Generator monitoring",
      "Runtime analytics",
      "Fuel usage analytics",
      "Operational reporting",
      "Performance dashboards",
      "Infrastructure visibility"
    ],
    icon: BarChart3
  },
  {
    title: "Infrastructure Optimization",
    summary:
      "Performance improvement work that reduces energy-related inefficiencies and strengthens site reliability.",
    outcome:
      "Improve uptime, reduce waste and create a stronger basis for long-term capital planning.",
    deliverables: [
      "Reliability improvement",
      "Asset performance tracking",
      "Downtime reduction",
      "Operational optimization",
      "Energy efficiency improvement"
    ],
    icon: ChartNoAxesCombined
  },
  {
    title: "Energy Transition Advisory",
    summary:
      "Structured guidance for cleaner, more efficient and more resilient energy systems.",
    outcome:
      "Identify practical renewable integration, sustainability and decarbonization pathways without compromising reliability.",
    deliverables: [
      "Renewable integration studies",
      "Solar feasibility assessments",
      "Sustainability planning",
      "Decarbonization advisory",
      "Carbon strategy support"
    ],
    icon: Leaf
  }
];

export const embeddedSolutions = [
  {
    title: "Energy Intelligence Assessment",
    description:
      "Structured site reviews that benchmark infrastructure health, operating cost, reliability and improvement opportunities.",
    icon: FileSearch
  },
  {
    title: "Energy Monitoring",
    description:
      "Visibility across generators, grid supply, metering points, critical loads and site-level energy behavior.",
    icon: Activity
  },
  {
    title: "Energy Analytics",
    description:
      "Operational analytics that translate runtime, load, fuel and cost data into decisions leaders can act on.",
    icon: BarChart3
  },
  {
    title: "Generator Monitoring",
    description:
      "Runtime, fuel, status and performance monitoring for generator systems already serving facilities and estates.",
    icon: Gauge
  },
  {
    title: "Infrastructure Monitoring",
    description:
      "Asset and infrastructure visibility for power rooms, distribution equipment, metering layers and site operations.",
    icon: CircuitBoard
  },
  {
    title: "Infrastructure Optimization",
    description:
      "Reliability, efficiency and cost optimization based on measured site conditions and operating evidence.",
    icon: TrendingDown
  },
  {
    title: "Renewable Integration Advisory",
    description:
      "Solar, storage and hybrid feasibility studies for organizations planning cleaner energy transition pathways.",
    icon: SolarPanel
  },
  {
    title: "Industrial Energy Management",
    description:
      "Energy performance reviews and reporting for industrial operations, commercial clusters and high-demand facilities.",
    icon: Factory
  },
  {
    title: "Cloud Platform Roadmap",
    description:
      "A future-ready foundation for dashboards, IoT monitoring, connected assets and scalable energy management tools.",
    icon: Cloud
  },
  {
    title: "Predictive Maintenance Readiness",
    description:
      "Data structures and monitoring practices that prepare sites for automated fault detection and predictive maintenance.",
    icon: Database
  }
];

export const monitoringFeatures = [
  {
    title: "Real-Time Energy Visibility",
    description:
      "Track energy performance, demand behavior, runtime events and source availability across connected infrastructure.",
    icon: Activity
  },
  {
    title: "Generator & Fuel Analytics",
    description:
      "Measure runtime, consumption patterns, abnormal fuel variance and utilization against operational requirements.",
    icon: Fuel
  },
  {
    title: "Operational Reporting",
    description:
      "Convert site activity, incidents and performance patterns into board-ready operational reports.",
    icon: ClipboardCheck
  },
  {
    title: "Performance Dashboards",
    description:
      "Create executive and facility-level dashboards for uptime, cost, energy usage, asset health and improvement plans.",
    icon: LineChart
  }
];

export const hybridSystems = [
  {
    title: "Renewable Integration Studies",
    description:
      "Assess where solar, storage and hybrid architectures can improve cost, resilience and sustainability.",
    icon: SolarPanel
  },
  {
    title: "Energy Transition Planning",
    description:
      "Build practical roadmaps from existing infrastructure toward cleaner and more intelligent energy systems.",
    icon: Leaf
  },
  {
    title: "Load & Storage Feasibility",
    description:
      "Review load profiles, critical demand, battery assumptions and operational constraints before capital decisions.",
    icon: BatteryCharging
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Assess Infrastructure",
    description:
      "Review energy sources, generator performance, metering gaps, cost structure, reliability history and operational risk."
  },
  {
    step: "02",
    title: "Instrument & Measure",
    description:
      "Define the monitoring approach, data points, reporting cadence and infrastructure visibility required for decisions."
  },
  {
    step: "03",
    title: "Analyze Performance",
    description:
      "Turn runtime, fuel, grid, maintenance and load data into insight on cost, reliability and improvement potential."
  },
  {
    step: "04",
    title: "Optimize & Roadmap",
    description:
      "Recommend operating improvements, monitoring upgrades, renewable pathways and future platform integration steps."
  }
];

export const whyChoose = [
  {
    title: "Visibility",
    description:
      "Gain real-time insight into energy performance, infrastructure health and operational efficiency.",
    icon: Gauge
  },
  {
    title: "Reliability",
    description:
      "Reduce downtime exposure and improve energy system reliability through proactive monitoring and optimization.",
    icon: ShieldCheck
  },
  {
    title: "Intelligence",
    description:
      "Transform energy data into actionable business decisions using analytics and future AI-driven insights.",
    icon: ChartNoAxesCombined
  }
];

export const maintenanceStrategy = [
  {
    title: "Runtime Signals",
    description:
      "Use actual generator runtime and energy behavior to understand stress, utilization and service requirements.",
    icon: TimerReset
  },
  {
    title: "Condition Indicators",
    description:
      "Track operating hours, load stress, recurring faults and abnormal consumption patterns before issues escalate.",
    icon: Settings2
  },
  {
    title: "Evidence Reports",
    description:
      "Give facility teams, estate boards and executives clear proof of performance, cost and improvement actions.",
    icon: CheckCircle2
  },
  {
    title: "Optimization Loop",
    description:
      "Use measured trends to refine energy efficiency, reliability planning, renewable integration and capital decisions.",
    icon: Workflow
  }
];

export const assessmentAreas = [
  {
    title: "Energy Sources",
    description: "Grid supply, generator systems and renewable systems.",
    icon: PlugZap
  },
  {
    title: "Operational Performance",
    description: "Runtime analysis, availability assessment and reliability review.",
    icon: Activity
  },
  {
    title: "Cost Analysis",
    description: "Fuel costs, energy costs and maintenance costs.",
    icon: Fuel
  },
  {
    title: "Risk Assessment",
    description: "Infrastructure vulnerabilities, operational risks and downtime exposure.",
    icon: ShieldCheck
  },
  {
    title: "Improvement Opportunities",
    description:
      "Cost reduction, reliability improvement, renewable integration and digital monitoring opportunities.",
    icon: TrendingDown
  }
];

export const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Energy Intelligence",
    status: "Current Focus",
    description:
      "Consulting-led energy intelligence services that create visibility before platform scale.",
    items: [
      "Energy Assessments",
      "Infrastructure Reviews",
      "Operational Analytics",
      "Energy Reporting"
    ],
    icon: SearchCheck
  },
  {
    phase: "Phase 2",
    title: "Connected Infrastructure",
    status: "Upcoming",
    description:
      "Remote monitoring and cloud-connected tools for facility teams and infrastructure operators.",
    items: [
      "Remote Monitoring Platform",
      "Client Dashboards",
      "IoT-enabled Monitoring",
      "Operational Visibility Tools"
    ],
    icon: Cloud
  },
  {
    phase: "Phase 3",
    title: "Intelligent Infrastructure",
    status: "Future Vision",
    description:
      "AI-enabled infrastructure management built on measured site data and engineering context.",
    items: [
      "Predictive Maintenance",
      "Automated Fault Detection",
      "Energy Demand Forecasting",
      "Load Forecasting",
      "AI-driven Infrastructure Optimization",
      "Intelligent Asset Management"
    ],
    icon: CircuitBoard
  }
];

export const clientSegments = [
  {
    title: "Estates",
    description: "Private communities, managed estates and developer-led communities.",
    icon: Landmark
  },
  {
    title: "Commercial Facilities",
    description: "Hotels, retail centers, healthcare facilities and office portfolios.",
    icon: Building2
  },
  {
    title: "Industrial Operations",
    description: "Industrial sites, commercial clusters and high-demand operations.",
    icon: Factory
  },
  {
    title: "Infrastructure Operators",
    description: "Facility managers and operators responsible for reliability and cost control.",
    icon: Wrench
  },
  {
    title: "Smart Energy Programs",
    description: "Organizations planning dashboards, IoT monitoring and energy platforms.",
    icon: Zap
  }
];
