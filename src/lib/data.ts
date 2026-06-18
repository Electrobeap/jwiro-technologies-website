import {
  Activity,
  BarChart3,
  BrainCircuit,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  CircuitBoard,
  ClipboardCheck,
  Cloud,
  Database,
  Eye,
  Factory,
  FileSearch,
  Fuel,
  Gauge,
  Landmark,
  Leaf,
  LineChart,
  LockKeyhole,
  PlugZap,
  Radio,
  SearchCheck,
  Server,
  Settings2,
  ShieldCheck,
  SolarPanel,
  Target,
  TimerReset,
  TrendingDown,
  Waypoints,
  Workflow,
  Wrench
} from "lucide-react";

const whatsappMessage =
  "Hello Jirow Technologies, I would like to request an Energy Intelligence Assessment.";

export const whatsappNumber = "2348137832844";

export const seoKeywords = [
  "Energy Intelligence",
  "Infrastructure Analytics",
  "Energy Monitoring",
  "Smart Infrastructure",
  "Smart Infrastructure Visibility",
  "AI-Powered Energy Optimization",
  "AI-Powered Optimization",
  "Energy Intelligence Assessment",
  "Energy Monitoring and Reporting",
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
  "Jirow Technologies Limited is an Energy Intelligence and Infrastructure Analytics company helping estates, commercial facilities and industrial operations improve energy performance, infrastructure reliability and operational efficiency through monitoring, analytics and intelligent digital solutions.";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Assessment", href: "/energy-intelligence-assessment" },
  { label: "Platform", href: "/technology-roadmap" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" }
];

export const heroStats = [
  {
    value: "Monitor",
    label: "Energy monitoring and smart infrastructure visibility"
  },
  {
    value: "Analyze",
    label: "Infrastructure analytics for performance, risk and efficiency"
  },
  {
    value: "Optimize",
    label: "AI-powered energy optimization and actionable decisions"
  }
];

export const serviceDetails = [
  {
    title: "Energy Intelligence Assessments",
    summary:
      "Comprehensive assessment of energy assets, consumption patterns, efficiency gaps and operational risks with clear improvement recommendations.",
    outcome:
      "Understand your infrastructure, quantify hidden losses and identify the highest-impact improvement opportunities.",
    deliverables: [
      "Energy source review",
      "Infrastructure asset assessment",
      "Utility consumption review",
      "Operational process review",
      "Energy performance analysis",
      "Infrastructure health review",
      "Operational efficiency findings",
      "Optimization recommendations"
    ],
    icon: FileSearch
  },
  {
    title: "Energy Monitoring & Reporting",
    summary:
      "Real-time monitoring of energy systems with automated reports and dashboards for better visibility, performance tracking and compliance.",
    outcome:
      "Move from delayed manual reporting to current, decision-ready energy intelligence.",
    deliverables: [
      "Energy monitoring",
      "Generator monitoring",
      "Runtime analytics",
      "Fuel usage analytics",
      "Operational reporting",
      "Performance dashboards",
      "Compliance visibility",
      "Automated stakeholder reports"
    ],
    icon: BarChart3
  },
  {
    title: "Infrastructure Analytics",
    summary:
      "Analysis of infrastructure performance, equipment health and operational data to identify issues, reduce downtime and improve efficiency.",
    outcome:
      "See how assets perform, where reliability risk is building and which changes can improve operational outcomes.",
    deliverables: [
      "Asset performance analysis",
      "Equipment health review",
      "Reliability risk analysis",
      "Downtime reduction roadmap",
      "Infrastructure maturity scoring",
      "Operational risk scoring",
      "Performance benchmarking",
      "Capital planning insights"
    ],
    icon: ChartNoAxesCombined
  },
  {
    title: "Smart Infrastructure Visibility",
    summary:
      "Centralized dashboards that provide a single view of energy assets, equipment status, infrastructure performance and improvement priorities.",
    outcome:
      "Create one operating picture for executives, facility teams and infrastructure partners.",
    deliverables: [
      "Facility visibility dashboards",
      "Asset status tracking",
      "Infrastructure performance views",
      "Energy scorecards",
      "Alert and event views",
      "Action tracking",
      "Site comparison views",
      "Operational intelligence reports"
    ],
    icon: Eye
  },
  {
    title: "AI-Powered Energy Optimization",
    summary:
      "Future-ready AI capabilities for forecasting, anomaly detection, predictive maintenance and energy optimization.",
    outcome:
      "Prepare infrastructure data for intelligent recommendations, automated workflows and lower long-term operating cost.",
    deliverables: [
      "Energy forecasting",
      "Anomaly detection",
      "Predictive maintenance readiness",
      "Load optimization",
      "Asset performance insights",
      "Intelligent reporting",
      "AI recommendation roadmap",
      "Automated workflow planning"
    ],
    icon: BrainCircuit
  }
];

export const solutionServices = [
  {
    title: "Energy Intelligence Assessments",
    description:
      "Structured reviews that transform infrastructure data into actionable insights and improvement roadmaps.",
    icon: FileSearch
  },
  {
    title: "Energy Monitoring & Reporting",
    description:
      "Automated visibility into energy performance, runtime, alerts, reports and operational outcomes.",
    icon: Activity
  },
  {
    title: "Infrastructure Analytics",
    description:
      "Analyze equipment health, infrastructure maturity, reliability risk and efficiency opportunities.",
    icon: BarChart3
  },
  {
    title: "Smart Metering & Data Acquisition",
    description:
      "Smart meters, IoT devices and data pipelines for accurate, high-resolution infrastructure data.",
    icon: Radio
  },
  {
    title: "Smart Infrastructure Visibility",
    description:
      "Central dashboards that create a single source of truth for energy assets and facility performance.",
    icon: Eye
  },
  {
    title: "Predictive Maintenance",
    description:
      "Predict equipment issues before they happen and reduce unplanned downtime.",
    icon: Wrench
  },
  {
    title: "Fault Detection",
    description:
      "AI-assisted detection of anomalies, faults and abnormal behavior in energy systems.",
    icon: ShieldCheck
  },
  {
    title: "Load Forecasting",
    description:
      "Forecast demand and consumption patterns to improve planning, cost control and reliability.",
    icon: LineChart
  },
  {
    title: "AI-Powered Optimization",
    description:
      "Optimization models that improve energy use, reduce cost and support better infrastructure decisions.",
    icon: BrainCircuit
  },
  {
    title: "Intelligent Reporting",
    description:
      "Automated insights, compliance reports and stakeholder dashboards for executive decision-making.",
    icon: ClipboardCheck
  }
];

export const monitoringFeatures = [
  {
    title: "Energy Score",
    description:
      "Measure overall energy efficiency and operational performance across sites, sources and critical assets.",
    icon: Gauge
  },
  {
    title: "Infrastructure Maturity",
    description:
      "Evaluate infrastructure readiness, reliability, resilience and future monitoring requirements.",
    icon: Building2
  },
  {
    title: "Reliability Index",
    description:
      "Track downtime exposure, recurring risks, asset condition and reliability improvement progress.",
    icon: ShieldCheck
  },
  {
    title: "Optimization Potential",
    description:
      "Identify hidden cost, energy waste, performance gaps and AI-powered optimization opportunities.",
    icon: TrendingDown
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
    icon: PlugZap
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Review energy sources, infrastructure assets, utility consumption and operational processes."
  },
  {
    step: "02",
    title: "Analyze",
    description:
      "Measure energy performance, consumption trends, infrastructure health and operational efficiency."
  },
  {
    step: "03",
    title: "Identify",
    description:
      "Surface hidden costs, reliability risks, asset issues and optimization opportunities."
  },
  {
    step: "04",
    title: "Recommend",
    description:
      "Deliver improvement roadmaps, technology recommendations, cost reduction strategies and operational improvements."
  }
];

export const assessmentWorkflow = [
  {
    step: "01",
    title: "Discover",
    description:
      "Review energy sources, infrastructure assets, utility consumption and operational processes.",
    icon: SearchCheck
  },
  {
    step: "02",
    title: "Analyze",
    description:
      "Analyze energy performance, consumption trends, infrastructure health and operational efficiency.",
    icon: BarChart3
  },
  {
    step: "03",
    title: "Identify",
    description:
      "Determine hidden costs, reliability risks, asset issues and optimization opportunities.",
    icon: ShieldCheck
  },
  {
    step: "04",
    title: "Recommend",
    description:
      "Deliver improvement roadmaps, technology recommendations, cost reduction strategies and operational improvements.",
    icon: Target
  },
  {
    step: "05",
    title: "Monitor",
    description:
      "Track performance KPIs, improvement progress, operational outcomes and infrastructure reliability.",
    icon: LineChart
  }
];

export const assessmentOutputs = [
  {
    title: "Energy Performance Score",
    description: "Measures overall energy efficiency and performance.",
    icon: Gauge
  },
  {
    title: "Infrastructure Maturity Score",
    description: "Evaluates readiness, reliability and resilience.",
    icon: Building2
  },
  {
    title: "Operational Risk Score",
    description: "Identifies reliability vulnerabilities and operating risk.",
    icon: ShieldCheck
  },
  {
    title: "Optimization Roadmap",
    description:
      "Prioritized actions to improve efficiency, reduce cost and enhance performance.",
    icon: Waypoints
  }
];

export const whyChoose = [
  {
    title: "Focused Expertise",
    description:
      "Specialized in energy intelligence and infrastructure optimization for critical facilities and operations.",
    icon: Target
  },
  {
    title: "Data-Driven Intelligence",
    description:
      "Turn complex infrastructure data into clear insights that drive better decisions and real results.",
    icon: BrainCircuit
  },
  {
    title: "Measurable Impact",
    description:
      "Solutions are designed for measurable outcomes: lower costs, higher reliability and improved efficiency.",
    icon: ChartNoAxesCombined
  },
  {
    title: "Reliability & Risk Focus",
    description:
      "Build resilient systems, reduce operational risks and support business continuity.",
    icon: ShieldCheck
  },
  {
    title: "Client-Centric Partnership",
    description:
      "Work as an extension of your team with a long-term partnership mindset.",
    icon: Landmark
  },
  {
    title: "Technology Agnostic",
    description:
      "Recommend the right technology for your needs, not the technology we want to sell.",
    icon: Settings2
  }
];

export const differentiators = [
  "Holistic approach across energy, infrastructure, operations and people",
  "Proprietary Energy Intelligence Assessment framework",
  "Experienced technical and operational team",
  "End-to-end capability from assessment to continuous optimization",
  "Enterprise-grade standards for security, compliance and governance"
];

export const maintenanceStrategy = [
  {
    title: "Predictive Maintenance",
    description:
      "Predict equipment failures before they happen and reduce unplanned downtime.",
    icon: TimerReset
  },
  {
    title: "Anomaly Detection",
    description:
      "Detect abnormal energy use and equipment behavior in real time.",
    icon: Activity
  },
  {
    title: "Asset Performance",
    description:
      "Monitor asset health and performance for extended lifecycle and stronger reliability.",
    icon: CheckCircle2
  },
  {
    title: "Automated Workflows",
    description:
      "Prepare energy operations for alerts, recommendations and automated action tracking.",
    icon: Workflow
  }
];

export const assessmentAreas = [
  {
    title: "Energy Sources",
    description: "Grid supply, generator systems, renewable sources and third-party data.",
    icon: PlugZap
  },
  {
    title: "Operational Performance",
    description: "Runtime, availability, energy performance and consumption trends.",
    icon: Activity
  },
  {
    title: "Cost Analysis",
    description: "Fuel costs, energy costs, hidden losses and operational waste.",
    icon: Fuel
  },
  {
    title: "Risk Assessment",
    description: "Infrastructure vulnerabilities, reliability risks and downtime exposure.",
    icon: ShieldCheck
  },
  {
    title: "Improvement Opportunities",
    description:
      "Cost reduction, reliability improvement, smart monitoring and AI optimization opportunities.",
    icon: TrendingDown
  }
];

export const roadmapPhases = [
  {
    phase: "Phase 01",
    title: "Visibility",
    status: "Current",
    description:
      "Create measurable energy and infrastructure visibility through assessments, reporting and analytics.",
    items: [
      "Energy Assessments",
      "Infrastructure Monitoring",
      "Performance Reporting",
      "Infrastructure Analytics"
    ],
    icon: Eye
  },
  {
    phase: "Phase 02",
    title: "Intelligence",
    status: "Upcoming",
    description:
      "Deploy automated dashboards, real-time monitoring and asset performance tracking.",
    items: [
      "Automated Dashboards",
      "Real-Time Monitoring",
      "Asset Performance Tracking",
      "Infrastructure Insights"
    ],
    icon: BrainCircuit
  },
  {
    phase: "Phase 03",
    title: "Predictive Operations",
    status: "Future",
    description:
      "Use predictive maintenance, fault detection and load forecasting to reduce downtime and risk.",
    items: [
      "Predictive Maintenance",
      "Fault Detection",
      "Load Forecasting",
      "Asset Health Monitoring"
    ],
    icon: Activity
  },
  {
    phase: "Phase 04",
    title: "Autonomous Intelligence",
    status: "Vision",
    description:
      "Advance toward AI recommendations, automated optimization, digital twins and decision support.",
    items: [
      "AI Recommendations",
      "Automated Optimization",
      "Infrastructure Digital Twins",
      "Intelligent Decision Support"
    ],
    icon: CircuitBoard
  }
];

export const clientSegments = [
  {
    title: "Commercial Facilities",
    description: "Office towers, mixed-use developments, business parks and shopping centres.",
    icon: Building2
  },
  {
    title: "Residential Estates",
    description: "Gated communities, apartments, smart estates and property developers.",
    icon: Landmark
  },
  {
    title: "Industrial Operations",
    description: "Manufacturing plants, processing facilities, industrial clusters and logistics hubs.",
    icon: Factory
  },
  {
    title: "Public Infrastructure",
    description: "Hospitals, universities, government facilities and utility environments.",
    icon: ShieldCheck
  },
  {
    title: "Hospitality & Hotels",
    description: "Comfort, efficiency and reliability for guest-facing operations.",
    icon: Building2
  },
  {
    title: "Retail & Shopping Centres",
    description: "Optimized energy visibility for retail operations and tenant-heavy facilities.",
    icon: ClipboardCheck
  }
];

export const industryChallenges = [
  "Rising energy costs",
  "Lack of visibility",
  "Equipment failures",
  "Poor energy performance",
  "Reactive maintenance",
  "Compliance reporting"
];

export const industryOutcomes = [
  "10-30% energy cost reduction",
  "20-40% reduction in downtime",
  "15-25% operational efficiency gains",
  "100% real-time visibility"
];

export const platformInputs = [
  "IoT Devices",
  "SCADA / EMS",
  "Third Party Data",
  "Manual Inputs"
];

export const platformPipeline = [
  "Ingest",
  "Store",
  "Process",
  "Analyze",
  "Visualize"
];

export const platformBenefits = [
  {
    title: "Scalable & Elastic",
    description: "AWS cloud scales with infrastructure and data growth.",
    icon: Cloud
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security, high availability and disaster recovery.",
    icon: LockKeyhole
  },
  {
    title: "AI-Powered Insights",
    description: "AI models uncover patterns, predict issues and optimize performance.",
    icon: BrainCircuit
  },
  {
    title: "Real-Time Intelligence",
    description: "Process and analyze data in real time for faster decisions.",
    icon: TimerReset
  },
  {
    title: "Cost Optimized",
    description: "Use cloud cost optimization best practices as the platform scales.",
    icon: TrendingDown
  }
];

export const platformUseCases = [
  {
    title: "Energy Forecasting",
    description: "Forecast consumption and demand for better planning.",
    icon: LineChart
  },
  {
    title: "Anomaly Detection",
    description: "Detect abnormal usage and equipment behavior in real time.",
    icon: ShieldCheck
  },
  {
    title: "Predictive Maintenance",
    description: "Predict equipment failures before they happen.",
    icon: Wrench
  },
  {
    title: "Load Optimization",
    description: "Optimize load distribution and reduce energy wastage.",
    icon: Gauge
  },
  {
    title: "Asset Performance",
    description: "Monitor asset health and performance for extended lifecycle.",
    icon: Factory
  },
  {
    title: "Intelligent Reporting",
    description: "Automated reports and insights for stakeholders.",
    icon: ClipboardCheck
  }
];

export const awsServices = [
  "Amazon S3",
  "AWS IoT Core",
  "Amazon Kinesis",
  "AWS Lambda",
  "Amazon Redshift",
  "Amazon QuickSight",
  "Amazon SageMaker",
  "Amazon Bedrock"
];

export const platformArchitecture = [
  {
    title: "AWS Cloud Foundation",
    description: "VPC, IAM, security, monitoring and cloud governance.",
    icon: Cloud
  },
  {
    title: "Data Ingestion",
    description: "IoT, meters, sensors, BMS, PLCs, APIs and manual operating inputs.",
    icon: Database
  },
  {
    title: "Analytics Layer",
    description: "Data lake, processing, infrastructure analytics and performance modeling.",
    icon: Server
  },
  {
    title: "AI / ML Layer",
    description: "Forecasting, anomaly detection, recommendations and generative AI workflows.",
    icon: BrainCircuit
  },
  {
    title: "Actionable Intelligence",
    description: "Alerts, reports, recommendations, dashboards and automated workflows.",
    icon: Workflow
  }
];
