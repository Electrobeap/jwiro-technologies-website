import {
  Activity,
  BatteryCharging,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  CircuitBoard,
  ClipboardCheck,
  Factory,
  Gauge,
  HardHat,
  Landmark,
  Leaf,
  LineChart,
  PlugZap,
  Radar,
  Settings2,
  ShieldCheck,
  SolarPanel,
  TimerReset,
  Workflow
} from "lucide-react";

const whatsappMessage =
  "Hello Jirow Technologies, I would like to discuss embedded energy infrastructure solutions.";

export const whatsappNumber = "2348137832844";

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
  whatsappHref:
    "https://wa.me/2348137832844?text=Hello%20Jirow%20Technologies,%20I%20would%20like%20to%20discuss%20embedded%20energy%20infrastructure%20solutions."
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#embedded-power" },
  { label: "Approach", href: "#approach" },
  { label: "Monitoring", href: "#monitoring" },
  { label: "Profile", href: "#brochure" },
  { label: "Contact", href: "#contact" }
];

export const heroStats = [
  { value: "Estate", label: "Embedded power infrastructure for communities" },
  { value: "Hybrid", label: "Grid, generation, solar and battery ready" },
  { value: "Visible", label: "Smart monitoring infrastructure for operators" }
];

export const embeddedSolutions = [
  {
    title: "Embedded Power Infrastructure",
    description:
      "Dedicated embedded energy infrastructure in Nigeria for estates, commercial clusters and managed communities.",
    icon: Building2
  },
  {
    title: "Estate Power Solutions",
    description:
      "Reliable estate power systems structured around uptime, load visibility and resident-facing accountability.",
    icon: Landmark
  },
  {
    title: "Hybrid Power Systems",
    description:
      "Hybrid energy infrastructure combining grid, generation, solar and battery pathways for resilient operations.",
    icon: PlugZap
  },
  {
    title: "Smart Monitoring Systems",
    description:
      "Smart estate energy monitoring for runtime, alarms, demand behavior and operating performance.",
    icon: Gauge
  },
  {
    title: "Renewable Energy Integration",
    description:
      "Solar and storage integration designed into infrastructure plans without compromising reliability.",
    icon: SolarPanel
  },
  {
    title: "Energy Infrastructure Consulting",
    description:
      "Energy infrastructure consulting in Nigeria for developers, estates and commercial facility owners.",
    icon: ClipboardCheck
  },
  {
    title: "Power System Design",
    description:
      "Technical power distribution, source orchestration and load segmentation for modern estates.",
    icon: CircuitBoard
  },
  {
    title: "Commercial Energy Solutions",
    description:
      "Commercial energy infrastructure for retail, hospitality, healthcare and industrial clusters.",
    icon: Factory
  },
  {
    title: "Managed Operations",
    description:
      "Service governance, fuel strategy, response workflows and reporting under one accountable operator model.",
    icon: HardHat
  },
  {
    title: "Sustainable Energy Systems",
    description:
      "Sustainable energy systems Nigeria can scale from conventional assets toward cleaner hybrid economics.",
    icon: Leaf
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
    title: "Monitoring & Analytics",
    description:
      "Board-ready analytics for uptime, cost, asset health, smart monitoring infrastructure and capital decisions.",
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
      "Renewable energy integration designed around uptime first, then cleaner long-term economics.",
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
    title: "Assess Demand",
    description:
      "Map estate demand, existing assets, growth plans, metering gaps and uptime expectations."
  },
  {
    step: "02",
    title: "Engineer Architecture",
    description:
      "Define the embedded power architecture, source mix, controls, monitoring and commercial model."
  },
  {
    step: "03",
    title: "Deploy Infrastructure",
    description:
      "Install, integrate and commission infrastructure with documentation, testing and stakeholder sign-off."
  },
  {
    step: "04",
    title: "Operate & Scale",
    description:
      "Run managed operations with monitoring, runtime maintenance, performance reporting and expansion planning."
  }
];

export const whyChoose = [
  {
    title: "Investor-Grade Delivery",
    description:
      "Clear operating assumptions, documented infrastructure decisions and reporting that developers and partners can govern.",
    icon: Landmark
  },
  {
    title: "Infrastructure Systems Depth",
    description:
      "Practical understanding of estate embedded power, distribution, smart metering, monitoring and runtime-led asset care.",
    icon: CircuitBoard
  },
  {
    title: "Operational Accountability",
    description:
      "One partner for design, deployment, service response, optimization and long-term system stewardship.",
    icon: ShieldCheck
  },
  {
    title: "Scalable Platform Roadmap",
    description:
      "Built for expansion into dashboards, solar analytics, resident portals and portfolio-scale energy intelligence.",
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
    icon: Settings2
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
