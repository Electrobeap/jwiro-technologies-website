import {
  Activity,
  BatteryCharging,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  CircuitBoard,
  Gauge,
  HardHat,
  Landmark,
  LineChart,
  PlugZap,
  Radar,
  ShieldCheck,
  SolarPanel,
  TimerReset,
  Workflow,
  Zap
} from "lucide-react";

const whatsappMessage =
  "Hello Jirow Technologies Limited, I would like to discuss embedded power infrastructure for my estate or facility.";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /[^\d]/g,
  ""
);

export const siteConfig = {
  name: "Jirow Technologies Limited",
  shortName: "Jirow",
  email: "info@jirowtechnologies.com",
  website: "jirowtechnologies.com",
  websiteHref: "https://jirowtechnologies.com",
  logo: "/brand/jirow-logo-transparent.png",
  brochureHref: "/brochure/jirow-technologies-profile.pdf",
  brochureFilename: "Jirow-Technologies-Company-Profile.pdf",
  whatsappHref: whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#embedded-power" },
  { label: "Monitoring", href: "#monitoring" },
  { label: "Hybrid", href: "#hybrid" },
  { label: "Operations", href: "#maintenance" },
  { label: "Profile", href: "#brochure" }
];

export const heroStats = [
  { value: "24/7", label: "Managed energy operations" },
  { value: "Runtime", label: "Maintenance intelligence" },
  { value: "Hybrid", label: "Grid, generator, solar and battery ready" }
];

export const embeddedSolutions = [
  {
    title: "Embedded Power Infrastructure",
    description:
      "Dedicated embedded infrastructure for residential estates, gated communities and commercial clusters.",
    icon: Building2
  },
  {
    title: "Smart Metering",
    description:
      "Metered visibility, usage accountability and clearer energy recovery across connected communities.",
    icon: Gauge
  },
  {
    title: "Remote Monitoring",
    description:
      "Operational intelligence for runtime, source health, alarms and critical demand patterns.",
    icon: Radar
  },
  {
    title: "Managed Operations",
    description:
      "Operational oversight, fuel strategy, service response and performance reporting under one accountable model.",
    icon: HardHat
  },
  {
    title: "Hybrid Energy Systems",
    description:
      "Grid, generation and solar integration structured around uptime, resilience and cleaner economics.",
    icon: SolarPanel
  }
];

export const monitoringFeatures = [
  {
    title: "Real-Time Load Visibility",
    description:
      "Track power demand, phase balance, runtime events and abnormal consumption across connected assets.",
    icon: Activity
  },
  {
    title: "Meter Intelligence",
    description:
      "Support transparent billing, usage profiling and community-level energy behavior analysis.",
    icon: Gauge
  },
  {
    title: "Incident Workflow",
    description:
      "Turn faults, alarms and service events into clear operator actions with evidence-backed logs.",
    icon: Radar
  },
  {
    title: "Performance Reporting",
    description:
      "Board-ready summaries for uptime, cost, asset health and operational decisions.",
    icon: LineChart
  }
];

export const hybridSystems = [
  {
    title: "Source Orchestration",
    description:
      "Coordinate grid supply, gas or diesel generation, solar PV and battery storage around uptime goals.",
    icon: PlugZap
  },
  {
    title: "Solar Integration Pathway",
    description:
      "Design today with tomorrow's solar and battery economics in mind, without locking communities into one source.",
    icon: SolarPanel
  },
  {
    title: "Priority Load Control",
    description:
      "Keep critical services online by separating essential, comfort and discretionary loads.",
    icon: BatteryCharging
  }
];

export const processSteps = [
  {
    step: "01",
    title: "Assess",
    description:
      "Map demand, asset conditions, estate growth plans, metering needs and uptime expectations."
  },
  {
    step: "02",
    title: "Engineer",
    description:
      "Define the embedded power architecture, source mix, controls, monitoring and operations model."
  },
  {
    step: "03",
    title: "Deploy",
    description:
      "Install, integrate and commission infrastructure with documentation and stakeholder sign-off."
  },
  {
    step: "04",
    title: "Operate",
    description:
      "Run energy operations with monitoring, maintenance cadence, reporting and response accountability."
  }
];

export const whyChoose = [
  {
    title: "Investor-Grade Delivery",
    description:
      "Clear operating assumptions, documented infrastructure decisions and reporting that communities can govern.",
    icon: Landmark
  },
  {
    title: "Energy Systems Depth",
    description:
      "Practical understanding of embedded generation, monitoring, metering and runtime-led asset care.",
    icon: CircuitBoard
  },
  {
    title: "Operational Accountability",
    description:
      "One partner for design, deployment, service response, optimization and long-term system stewardship.",
    icon: ShieldCheck
  },
  {
    title: "Platform-Ready Roadmap",
    description:
      "Built for expansion into dashboards, solar analytics, resident portals and portfolio-scale insights.",
    icon: ChartNoAxesCombined
  }
];

export const maintenanceStrategy = [
  {
    title: "Runtime Capture",
    description:
      "Maintenance intervals are anchored to actual generator and equipment runtime, not calendar guesswork.",
    icon: TimerReset
  },
  {
    title: "Threshold Triggers",
    description:
      "Service actions are triggered by load stress, operating hours, fault patterns and health indicators.",
    icon: Zap
  },
  {
    title: "Evidence Reports",
    description:
      "Operators, estate boards and facility managers receive clear proof of service, uptime and asset condition.",
    icon: CheckCircle2
  },
  {
    title: "Continuous Optimization",
    description:
      "Runtime trends feed better dispatch, fueling, solar sizing, battery planning and capital decisions.",
    icon: Workflow
  }
];
