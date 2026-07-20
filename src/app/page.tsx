"use client";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Workflow,
  FileSpreadsheet,
  BarChart3,
  BookOpen,
  Sparkles,
  X,
  Mail,
  MessageSquare,
  CalendarDays,
  Video,
  FolderOpen,
  Settings,
  Cpu,
  Network,
} from "lucide-react";
export default function Home() {
  const [activeCard, setActiveCard] = useState(0);
  const [selectedWorkspaceTool, setSelectedWorkspaceTool] = useState<any>(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [selectedApp, setSelectedApp] = useState<any | null>(null);
  const [snapshotIndex, setSnapshotIndex] = useState(0);
  const [selectedSystem, setSelectedSystem] = useState<any>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showResume, setShowResume] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  const featuredSystems = [

    {
      title: "Market Risk Analytics System",

      description:
        "Risk classification and analytics workflow using volatility, downside deviation and maximum drawdown.",

      metrics: [
        "7200+ Market Observations Feasible",
        "Multi-Asset Risk Evaluation",
        "Automated Analytics Workflow",
      ],

      skills: [
        "Apps Script",
        "Excel",
        "Quantitative Analytics",
        "Automation Logic",
      ],

      cardImage: "/projects/Instruction.png",

      modalImages: [
        "/projects/dashboard.png",
        "/projects/system.png",
      ],

      icon: "/projects/sf-removebg-preview.png",
      iconScale: "scale-[1.4]",

      tags: [
        "Risk Detection",
        "Portfolio Analytics",
        "Comparative Evaluation",
      ],

      liveLink:
        "https://docs.google.com/spreadsheets/d/1S_uM_iKKVwF-riSpYfjM8DafVCDw5ompn_YBjjd0EFY/edit?usp=sharing",

      longDescription:
        "Designed a scalable market risk analytics engine capable of portfolio comparison, volatility analysis, downside deviation detection and automated reporting workflows using historical market datasets.",

    },

    {
      title: "MBTI Evaluation Engine",

      description:
        "Automated personality evaluation and personalized report generation system. [Built in collaboration with the Tech Tank committee at Center for Academic and Professional Support, CAPS]",

      metrics: [
        "16 Personality Profiles",
        "Automated PDF Reports",
        "Career Expectation Mapping",
      ],

      skills: [
        "Apps Script",
        "Workflow Automation",
        "Report Generation",
        "Logic Systems",
      ],

      icon: "/projects/mbti-icon-removebg-preview.png",
      iconScale: "scale-[2.2]",

      cardImage: "/projects/mbti-assessment.png",

      modalImages: [
        "/projects/mbti-personality.png",
        "/projects/career-expectation.png",
      ],

      tags: [
        "Personality Mapping",
        "Report Automation",
        "Evaluation Engine",
      ],

      longDescription:
        "Built an automated MBTI personality evaluation engine capable of generating personalized career expectation reports and behavioral insights using workflow-driven assessment logic.",

    },

    {
      title: "Mock CAT Analytics Engine",

      description:
        "Automated CAT performance evaluation and comparative reporting engine. [Built in collaboration with the Tech Tank committee at Center for Academic and Professional Support, CAPS]",

      metrics: [
        "Section-wise Analysis",
        "Percentile Benchmarking",
        "Performance Evaluation",
      ],

      skills: [
        "Analytics",
        "Data Evaluation",
        "Excel Logic",
        "Automation",
      ],

      cardImage: "/projects/cat-report.png",

      icon: "/projects/analytics-icon.png",
      iconScale: "scale-[1.7]",

      modalImages: [
        "/projects/personalised-report.png",
      ],


      tags: [
        "Performance Analytics",
        "Benchmark Evaluation",
        "Diagnostic Insights",
      ],

      longDescription:
        "Designed a CAT mock test analytics engine capable of automated score analysis, sectional benchmarking and diagnostic performance reporting workflows.",

    },

  ];

  const apps = [
    {
      title: "AcadmeLink",

      description:
        "Department management and attendance workflow system.",

      cardImage: "/projects/dom-app-logo.png",

      modalDescription: "Centralized academic operations and attendance management platform built for department-level workflow automation, faculty coordination, event tracking and real-time student activity management systems.",

      images: [
        "/projects/dom-layout.png",
        "/projects/dom-event.png",
        "/projects/dom-qa.png",
      ],

      modalImages: [
        "/projects/dom-layout.png",
        "/projects/dom-event.png",
        "/projects/dom-qa.png",
      ],

      tags: [
        "Attendance Workflow",
        "Department Operations",
        "Event Coordination",
      ],

      longDescription:
        "Built a department operations and attendance management platform capable of handling workflow tracking, event coordination, attendance logging and centralized management operations.",
    },

    {
      title: "Confluence",

      description:
        "Volunteer attendance and venue operations management app.",

      cardImage: "/projects/confluence-app.png",

      modalDescription:"Enterprise-style volunteer coordination and event operations platform designed for attendance tracking, venue workflow management, operational reporting and real-time event execution support systems. [Built in collaboration with the Tech Tank committee at Center for Academic and Professional Support, CAPS]",


      images: [
        "/projects/confluence-system.png",
        "/projects/confluence-events.png",
      ],

      modalImages: [
        "/projects/confluence-system.png",
        "/projects/confluence-events.png",
      ],

      tags: [
        "Volunteer Tracking",
        "Venue Operations",
        "Attendance System",
      ],

      longDescription:
        "Designed a volunteer and venue operations management system focused on attendance workflows, event coordination and operational tracking.",
    },

    {
      title: "Expense Tracker",

      description:
        "Personal finance and net-worth tracking system.",

      cardImage: "/projects/expensetracker-logo.png",

      modalImages: [
        "/projects/expense-tracking.png",
      ],
      modalDescription: "Personal finance analytics and expense management application focused on budgeting workflows, transaction categorization, spending insights, savings visualization and net-worth monitoring systems.",


      images: [
        "/projects/expense-tracking.png",
        "/projects/expense-tracker.png",
      ],

      tags: [
        "Finance Tracking",
        "Expense Analytics",
        "Net Worth Monitoring",
      ],

      longDescription:
        "Built a personal finance tracking application for expense management, budgeting insights and net-worth visualization workflows.",
    },

    {
      title: "FRM Study App",

      description:
        "Gamified learning and revision reinforcement system.",

      cardImage: "/projects/FRM-app-logo.png",

      modalImages: [
        "/projects/frm-app1.png",
        "/projects/frm-app-game.png",
      ],

      images: [
        "/projects/frm-app1.png",
        "/projects/frm-app-game.png",
      ],

      modalDescription: "Gamified FRM preparation and revision reinforcement platform designed for concept retention, progress tracking, performance analytics and interactive finance learning workflows.",


      tags: [
        "Gamified Learning",
        "Revision Reinforcement",
        "Study Analytics",
      ],

      longDescription:
        "Developed a gamified FRM preparation system focused on reinforcement learning, revision tracking and performance-based study workflows.",
    },
  ];
  const workspaceTools = [
    {
      title: "Gmail",
      icon: Mail,
      short: "Professional communication",
      description:
        "Designed professional email signatures, implemented inbox labels and categorization strategies, and established structured communication workflows for committees and operational teams.",
    },

    {
      title: "Google Chat",
      icon: MessageSquare,
      short: "Team collaboration",
      description:
        "Built organized communication spaces for committees and project teams, enabling structured discussions, announcements and day-to-day operational collaboration.",
    },

    {
      title: "Google Calendar",
      icon: CalendarDays,
      short: "Scheduling & planning",
      description:
        "Managed formal meeting schedules, project discussions, deadlines and collaborative planning through shared calendars and event management.",
    },

    {
      title: "Google Meet",
      icon: Video,
      short: "Virtual collaboration",
      description:
        "Conducted professional meetings, project reviews and collaborative sessions while integrating AI-assisted meeting documentation.",
    },

    {
      title: "Google Drive & Docs",
      icon: FolderOpen,
      short: "Knowledge management",
      description:
        "Maintained centralized documentation, shared resources, SOPs and collaborative documents that supported operational consistency.",
    },

    {
      title: "Google Sheets",
      icon: FileSpreadsheet,
      short: "Operational data",
      description:
        "Built structured operational trackers, dashboards and datasets that served as the foundation for workflow automation and reporting.",
    },

    {
      title: "Google Apps Script",
      icon: Workflow,
      short: "Workflow automation",
      description:
        "Automated Google Sheets and Google Docs processes, reduced manual work, standardized workflows and improved operational efficiency through scripting.",
    },

    {
      title: "Looker Studio",
      icon: BarChart3,
      short: "Executive reporting",
      description:
        "Developed interactive dashboards and business reports that transformed operational datasets into actionable management insights.",
    },

    {
      title: "Gemini AI",
      icon: Sparkles,
      short: "AI productivity",
      description:
        "Created dedicated Gemini Gems for workflow assistance, content refinement, knowledge organization and operational decision support across business processes.",
    },
  ];
  
  const services = [
  {
    title: "No-Code App Development",
    icon: LayoutDashboard,
    description:
      "Custom operational systems and workflow apps built using low-code and no-code ecosystems.",
    tools: [
      { name: "AppSheet", icon: "/icons/appsheet-icon.png" },
      { name: "Google Sheets", icon: "/icons/googlesheets.png" },
      { name: "Apps Script", icon: "/icons/appscript.png" },
      { name: "Replit", icon: "/icons/replit.png" },
    ],
  },

  {
    title: "Workflow Automation",
    icon: Workflow,
    description:
      "Automation pipelines for repetitive workflows, approvals, reporting and operational tasks.",
    tools: [
      { name: "MS Excel", icon: "/icons/excel.png" },
      { name: "Google Docs", icon: "/icons/googledocs.png" },
      { name: "Mergo", icon: "/icons/mergo.png" },
      { name: "Apps Script", icon: "/icons/appscript.png" },
    ],
  },

  {
    title: "Automation Reporting Systems",
    icon: FileSpreadsheet,
    description:
      "Automated reporting engines for analytics, summaries, KPI tracking and operational monitoring.",
    tools: [
      { name: "MS Excel | VBA", icon: "/icons/vba.svg" },
      { name: "PDF Automation", icon: "/icons/pdf.png" },
      { name: "Reporting", icon: "/icons/reporting.png" },
    ],
  },

  {
    title: "Analytics Dashboards",
    icon: BarChart3,
    description:
      "Interactive dashboards for analytics, performance tracking and business intelligence workflows.",
    tools: [
      { name: "MS Excel", icon: "/icons/excel.png" },
      { name: "Tableau", icon: "/icons/tableau.png" },
      { name: "SPSS", icon: "/icons/spss.png" },
      { name: "Looker Studio", icon: "/icons/ls.png" },
    ],
  },

  {
    title: "Research & Documentation Support",
    icon: BookOpen,
    description:
      "Structured research systems, documentation workflows and knowledge management support.",
    tools: [
      { name: "MS Word", icon: "/icons/msword.png" },
      { name: "TradeMap", icon: "/icons/trademap.png" },
      { name: "SMART Analysis by WITS", icon: "/icons/trademap.png" },
    ]
  },

  {
    title: "AI Systems & Prompt Engineering",
    icon: Sparkles,
    description:
      "Workflow design, prompt architecture, image generation and structured automation planning.",

    tools: [
      { name: "Architecture", icon: "/icons/ar.png" },
      { name: "Coding", icon: "/icons/pc.png" },
      { name: "Image Generation", icon: "/icons/cg.png" },
    ],
  },
];
  const snapshots = [
    "/images/Appsheet TT Logo.png",
    "/images/App Manager.png",
    "/images/Website Developer and Manager.png",
    "/images/Technical Trainer.png",
    "/images/Level Up With Tech Tank.png",
    "/images/f.png",
    "/images/e.png",
    "/images/i.png",
    "/images/frm-app1.png",
    "/images/frm-app-game.png",
    "/images/expense-tracking.png",
    "/images/confluence-system.png",
    "/images/confluence-events.png",
    "/images/cat-report.png",
    "/images/career-expectation.png",
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setSnapshotIndex((prev) => (prev + 1) % snapshots.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const showcaseVideos = [
    "/videos/display.mp4",
    "/videos/Project_Setup.mp4",
  ];

  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const reelsVideos = [
    "/videos/frmstudy.mp4",
    "/videos/domdisplay.mp4",
    "/videos/confluenecedispaly.mp4",
  ];

  const [reelsIndex, setReelsIndex] = useState(0);

  const skills = [
    "Automation",
    "Apps Script",
    "Google Workspace",
    "Workflow Automation",
    "PDF Automation",
    "MS Excel",
    "Visual Basics for Applications",
    "Risk Analytics",
    "Data Visualization",
    "Reporting Systems",
  ];
  const websiteImages = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
  ];

  const [currentWebsiteImage, setCurrentWebsiteImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWebsiteImage(
        (prev) => (prev + 1) % websiteImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % websiteImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFF0] text-[#228B22]">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-[#9dae11]/30 bg-[#FFFFF0]/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl flex-col md:flex-row md:items-center md:justify-between px-4 lg:px-2 py-3 lg:py-4">
          <div>
            <div>
              <div>
              <h1 className="bg-gradient-to-r from-[#228B22] via-[#9dae11] to-[#228B22] bg-clip-text text-3xl font-black tracking-tight text-transparent">
                Shubh Om Kanchan | Portfolio
              </h1>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2 lg:gap-16 text-xs text-[#228B22] md:mt-0 md:text-sm">
            <a href="#systems" className="hover:text-[#9dae11]">
              Systems
            </a>
            <a href="#apps" className="hover:text-[#9dae11]">
              Apps
            </a>
            <a href="#services" className="hover:text-[#9dae11]">
              Services
            </a>
            <a href="#videos" className="hover:text-[#9dae11]">
              Showcase
            </a>
            <a href="#contact" className="hover:text-[#9dae11]">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-5 lg:py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#228B22]/10 via-[#9dae11]/5 to-[#228B22]/10 blur-3xl" />

        <div className="pointer-events-none absolute left-1/3 top-1/4 h-[28rem] w-[28rem] rounded-full bg-[#228B22]/10 blur-[120px]" />

        <div className="pointer-events-none absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-[#9dae11]/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 overflow-hidden md:grid-cols-2 md:items-center">
          <div className="min-w-0 overflow-hidden">
            <div className="mb-6 overflow-hidden rounded-full border border-[#9dae11]/20 bg-[#228B22]/5 py-3">

            <div className="flex min-w-max whitespace-nowrap animate-scroll pl-8 md:pl-0">

              {[
                "Apps Script",
                "Workflow Automation",
                "Operational Intelligence",
                "Analytics Systems",
                "AppSheet",
                "Reporting Engines",
                "Excel Automation",
                "Dashboard Systems",
                "Process Optimization",
                "Automation Infrastructure",

                // DUPLICATED FOR LOOPING
                "Apps Script",
                "Workflow Automation",
                "Operational Intelligence",
                "Analytics Systems",
                "AppSheet",
                "Reporting Engines",
                "Excel Automation",
                "Dashboard Systems",
                "Process Optimization",
                "Automation Infrastructure",
              ].map((item, index) => (
                <div
                  key={index}
                  className={`mx-3 md:mx-6 text-xs md:text-sm font-medium tracking-wide ${
                    [
                      "text-[#228B22]",
                      "text-[#9dae11]",
                      "text-[#228B22]",
                      "text-[#228B22]/80",
                    ][index % 4]
                  }`}
                >
                  {item}
                </div>
              ))}

            </div>
          </div>

            <h1 className="mb-6 max-w-3xl break-words bg-gradient-to-br from-[#228B22] via-[#9dae11] to-[#228B22] bg-clip-text text-lg sm:text-3xl md:text-7xl font-black leading-[0.95] tracking-[-0.04em] text-transparent">
              Building Systems That Optimize Operations & Generate Insights
            </h1>

            <p className="mb-8 max-w-xl text-base md:text-lg leading-relaxed text-[#228B22]/80">
              Building automation systems, operational workflows and analytics
              solutions to reduce manual effort, improve reporting accuracy
              and provide actionable insights for better decision-making.
            </p>

            <div className="flex flex-wrap gap-4" style={{paddingLeft:"10px", paddingBottom:"10px"}}>
              <a
                href="https://www.linkedin.com/in/shubh-om-kanchan-baa778212/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-[#228B22] px-6 py-3 font-medium text-[#FFFFF0] transition hover:scale-105 inline-flex items-center"
              >
                LinkedIn
              </a>

              <button
                onClick={() => setShowResume(true)}
                className="rounded-2xl border border-[#9dae11]/30 border-white/20 px-8 py-4 text-lg font-medium transition hover:border-[#9dae11]/60"
              >
                Resume
              </button>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative grid gap-4">

            {/* Background Glow */}
            <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-[#228B22]/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#9dae11]/20 blur-3xl" />

            <div className="relative w-full min-w-0 overflow-hidden rounded-[2rem] border border-[#9dae11]/20 bg-[#228B22]/5 p-4 md:p-8 backdrop-blur-xl">

              {/* Header */}
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">
                    Workflow Intelligence
                  </h3>

                  <p className="mt-2 text-sm text-[#228B22]/70">
                    Operational systems & automation analytics
                  </p>
                </div>

                <div className="mx-auto md:mx-0 w-fit md:w-auto rounded-full border border-[#9dae11]/30 px-4 py-2 text-sm text-[#228B22]">
                  Automation • Analytics • AI
                </div>
              </div>

              {/* Operational Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

                {/* CARD 1 */}
              <a href="#systems">
                <div
                  className={`group relative rounded-2xl border bg-[#228B22] p-4 md:p-5 transition-all duration-700
                  ${
                    activeCard === 0
                      ? "scale-105 border-[#9dae11]/40 shadow-[0_0_30px_rgba(157,174,17,0.18)]"
                      : "border-[#9dae11]/15"
                  }`}
                >

                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-white">
                      Automation Systems
                    </p>
                    {activeCard === 0 && (
                      <div className="absolute -top-2 right-1 rounded-full border border-[#9dae11]/30 bg-[#fffff0] px-2 py-1 text-[8px] font-semibold text-[#228B22] animate-pulse">
            
                        VIEW ↗
                      </div>
                    )}

                    <div className="rounded-lg bg-[#fffff0]/45 px-2 py-1 text-xs text-[#228B22]">
                      Workflows
                    </div>
                  </div>

                  <h3 className="text-4xl font-black text-white">
                    12+
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-white">
                    Operational automation and reporting infrastructures
                  </p>
                </div>
              </a>

                {/* CARD 2 */}
              <a href="#apps">
                <div
                  className={`group relative rounded-2xl border bg-[#228B22] p-4 md:p-5 transition-all duration-700
                  ${
                    activeCard === 1
                      ? "scale-105 border-[#9dae11]/40 shadow-[0_0_30px_rgba(157,174,17,0.18)]"
                      : "border-[#9dae11]/15"
                  }`}
                >

                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-white">
                      Operational Apps
                    </p>
                    {activeCard === 1 && (
                      <div className="absolute -top-2 right-1 rounded-full border border-[#9dae11]/30 bg-[#fffff0] px-2 py-1 text-[8px] font-semibold text-[#228B22] animate-pulse">
                        
                        VIEW ↗
                      </div>
                    )}

                    <div className="rounded-lg bg-[#fffff0]/45 px-2 py-1 text-xs text-[#228B22]">
                      AppSheet
                    </div>
                  </div>

                  <h3 className="text-4xl font-black text-white">
                    4
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-white">
                    Workflow systems for operations, tracking and management
                  </p>
                </div>
              </a>
                {/* CARD 3 */}
              <a href="#services">
                <div
                  className={`group relative rounded-2xl border bg-[#228B22] p-4 md:p-5 transition-all duration-700
                  ${
                    activeCard === 2
                      ? "scale-105 border-[#9dae11]/40 shadow-[0_0_30px_rgba(157,174,17,0.18)]"
                      : "border-[#9dae11]/15"
                  }`}
                >

                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-white">
                      Tool Stack
                    </p>

                    {activeCard === 2 && (
                      <div className="absolute -top-2 right-1 rounded-full border border-[#9dae11]/30 bg-[#fffff0] px-2 py-1 text-[8px] font-semibold text-[#228B22] animate-pulse">
                        
                        VIEW ↗
                      </div>
                    )}

                    <div className="rounded-lg bg-[#fffff0]/45 px-2 py-1 text-xs text-[#228B22]">
                      Capabilites
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-white">
                    Core Skills
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-white">
                    What tools are used to build pipelines and set up organisational ecosystems
                  </p>
                </div>
              </a>

                {/* CARD 4 */}
              <a href="#videos">
                <div
                  className={`group relative rounded-2xl border bg-[#228B22] p-4 md:p-5 transition-all duration-700
                  ${
                    activeCard === 3
                      ? "scale-105 border-[#9dae11]/40 shadow-[0_0_30px_rgba(157,174,17,0.18)]"
                      : "border-[#9dae11]/15"
                  }`}
                >

                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-white">
                      Showcase
                    </p>

                    {activeCard === 3 && (
                      <div className="absolute -top-2 right-1 rounded-full border border-[#9dae11]/30 bg-[#fffff0] px-2 py-1 text-[8px] font-semibold text-[#228B22] animate-pulse">
          
                        VIEW ↗
                      </div>
                    )}

                    <div className="rounded-lg bg-[#fffff0]/45 px-2 py-1 text-xs text-[#228B22]">
                      Projects
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-white">
                    Display
                  </h3>

                  <p className="mt-4 text-xs leading-relaxed text-white">
                    Automation, workflow and analytics infrastructure stack
                  </p>
                </div>
              </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SYSTEMS */}
      <section id="systems" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9dae11]">
              Featured Systems
            </p>
            <h2 className="text-4xl font-bold">
              Flagship Automation & Analytics Projects
            </h2>
          </div>

          <div className="grid gap-6">
            {featuredSystems.map((project, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-[2.5rem] border border-[#9dae11]/25 bg-[#228B22]/90 px-8 py-12 backdrop-blur-xl"
              >
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#9dae11]/10 blur-[140px]" />
                  <div className="absolute -right-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#228B22]/10 blur-[140px]" />
                </div>
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#9dae11]/10 blur-[120px]" />
                  <div className="absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#228B22]/10 blur-[120px]" />
                </div>
                <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#9dae11]/10 blur-[120px]" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#9dae11]/10 blur-[120px]" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#228B22]/0 via-[#228B22]/0 to-[#9dae11]/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-[#228B22]/5 group-hover:to-[#9dae11]/5" />
                <div className="relative z-10 grid gap-6 lg:grid-cols-[0.9fr_1.3fr] items-center">

                  {/* LEFT CONTENT */}
                  <div>

                    <h3 className="mb-4 text-3xl font-bold text-[#FFFFF0]">
                      {project.title}
                    </h3>

                    <p className="mb-5 max-w-xl text-lg leading-relaxed text-[#FFFFF0]">
                      {project.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">

                      <button
                        onClick={() => {
                          setSelectedProject(project);
                        }}
                        className="rounded-xl border border-[#9dae11] px-6 py-3 text-[#FFFFF0] hover:bg-[#9dae11]/10"
                      >
                        View Case Study
                      </button>

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative rounded-xl border border-[#9dae11]/40 px-6 py-3 text-[#FFFFF0] transition-all duration-300 hover:scale-105 hover:bg-[#9dae11]/20"
                        >
                          ▶ Use System

                          <span className="absolute -top-2 -right-2 rounded-full bg-[#9dae11] px-2 py-0.5 text-[10px] font-semibold text-[#FFFFF0]">
                            LIVE
                          </span>
                        </a>
                      )}

                    </div>
            
                    <div className="mt-8 flex flex-wrap gap-3">

                      {project.metrics.map((metric, metricIndex) => (

                      <div
                        key={metricIndex}
                        className="rounded-xl border border-[#9dae11]/25 bg-[#FFFFF0]/10 px-4 py-2 text-sm text-[#FFFFF0] backdrop-blur-xl"
                      >
                        {metric}
                      </div>

                    ))}

                    </div>

                  </div>

                  {/* RIGHT IMAGE COLUMN */}
                  <div className="relative">

                    <div className="absolute -inset-6 rounded-[2rem] bg-[#9dae11]/10 blur-3xl" />

                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#1d5d1d]/30 shadow-2xl">

                      <img
                        src={project.cardImage}
                        alt="Market Risk Dashboard"
                        className="w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#228B22]/85 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">

                        {project.tags.map((tag, tagIndex) => (
                          <div
                            key={tagIndex}
                            className="rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white backdrop-blur-md"
                          >
                            {tag}
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPS SECTION */}
      <section id="apps" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9dae11]">
              Operational Apps
            </p>
            <h2 className="text-4xl font-bold">
              No-Code Workflow Systems
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {apps.map((app, index) => (
              <div
                key={app.title}
                onClick={() => setSelectedApp(app)}
                className="group cursor-pointer rounded-[2rem] border border-[#9dae11]/25 bg-[#228B22] p-4 backdrop-blur-xl transition hover:border-[#9dae11]/90 text-white"
              >
                <div className="relative mb-4 h-52 overflow-hidden rounded-2xl border border-[#9dae11]/20">

                  <img
                    src={app.cardImage}
                    alt={app.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#228B22]/35 via-transparent to-transparent" />

                </div>

                <h3 className="text-2xl font-semibold">
                  {app.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">

                </div>

                <p className="mt-3 text-white">
                  {app.longDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                {app.tags.map((tool: string, index: number) => (

                  <span
                    key={index}
                    className="rounded-full border border-[#9dae11]/30 bg-[#FFFFF0]/10 px-3 py-1 text-xs text-[#FFFFF0]"
                  >
                    {tool}
                  </span>

                ))}

              </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GOOGLE WORKSPACE ECOSYSTEM ================= */}

      <section className="relative py-28">

        <div className="mx-auto max-w-7xl px-6">

          {/* Heading */}

          <div className="mb-16 text-left">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[#9dae11]">
              Enterprise Collaboration
            </p>

            <h2 className="text-4xl font-black text-[#228B22] md:text-6xl">
              Google Workspace Ecosystem
            </h2>

          </div>

          {/* Desktop */}

          <div className="relative hidden h-[720px] rounded-[40px] border border-[#9dae11]/20 bg-[#228B22] lg:block">

          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <Cpu
              className="absolute right-[2%] top-[14%] h-38 w-38 text-[#FFFFF0]/25 animate-cpuGlow"
              strokeWidth={1.2}
            />

            <Network
              className="absolute right-[3%] bottom-[0%] h-40 w-40 text-[#FFFFF0]/5"
              strokeWidth={1.2}
            />

            <Settings
              className="absolute left-[11%] top-[8%] h-36 w-36 text-[#FFFFF0]/20 animate-gearSlow"
              strokeWidth={1.2}
            />

            <Settings
              className="absolute left-[4%] top-[4%] h-28 w-28 text-[#FFFFF0]/20 animate-gearReverse"
              strokeWidth={1.2}
            />

            <Settings
              className="absolute right-[10%] top-[30%] h-36 w-36 text-[#FFFFF0]/5 animate-gearMedium"
              strokeWidth={1.2}
            />

            <Settings
              className="absolute left-[1%] bottom-[0%] h-43 w-43 text-[#FFFFF0]/35 animate-gearReverse"
              strokeWidth={1.2}
            />
          </div>


            {/* CENTER */}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

              <div className="rounded-3xl px-10 py-8 text-center">

                <h2 className="bg-gradient-to-r from-[#FFFFF0] to-[#9dae11] bg-clip-text text-7xl font-black leading-none text-transparent">
                  Google
                </h2>

                <h2 className="mt-2 bg-gradient-to-r from-[#FFFFF0] to-[#9dae11] bg-clip-text text-7xl font-black leading-none text-transparent">
                  Workspace
                </h2>

              </div>

            </div>

            {/* TOP */}

            {workspaceTools.slice(0,4).map((tool,index)=>{

              const positions = [
                "left-[13%] top-[28%]",   // Gmail (≈10 o'clock)
                "left-[32%] top-[10%]",   // Chat (≈11:30)
                "right-[29%] top-[10%]",  // Calendar (≈1:30)
                "right-[10%] top-[30%]",  // Meet (≈2 o'clock)
              ];

              const Icon=tool.icon;

              return(

              <button

              key={tool.title}

              onClick={()=>setSelectedWorkspaceTool(tool)}

              className={`absolute ${positions[index]} w-52 rounded-3xl border border-[#9dae11]/25 bg-[#FFFFF0]/10 p-5 backdrop-blur transition hover:scale-105 hover:border-[#9dae11]`}

              >

                <Icon className="mx-auto mb-4 h-10 w-10 text-[#9dae11]"/>

                <h3 className="font-bold text-[#FFFFF0]">
                  {tool.title}
                </h3>

                <p className="mt-2 text-sm text-[#FFFFF0]/70">
                  {tool.short}
                </p>

              </button>

              )

            })}

            {/* BOTTOM */}

            {workspaceTools.slice(4).map((tool,index)=>{

              const positions = [
                "left-[6%] bottom-[25%]",                  // Drive
                "left-[24%] bottom-[8%]",                   // Sheets ← move left
                "left-[42%] bottom-[2%]",    // Apps Script ← lower
                "right-[23%] bottom-[8%]",                  // Looker ← move right
                "right-[5%] bottom-[25%]",                 // Gemini
              ];
              const Icon=tool.icon;

              return(

              <button

              key={tool.title}

              onClick={()=>setSelectedWorkspaceTool(tool)}

              className={`absolute ${positions[index]} w-52 rounded-3xl border border-[#9dae11]/25 bg-[#FFFFF0]/10 p-5 backdrop-blur transition hover:scale-105 hover:border-[#9dae11]`}

              >

                <Icon className="mx-auto mb-4 h-10 w-10 text-[#9dae11]"/>

                <h3 className="font-bold text-[#FFFFF0]">
                  {tool.title}
                </h3>

                <p className="mt-2 text-sm text-[#FFFFF0]/70">
                  {tool.short}
                </p>

              </button>

              )

            })}

          </div>

          {/* MOBILE */}

          <div className="space-y-5 rounded-[32px] border border-[#9dae11]/20 bg-[#228B22] p-6 lg:hidden">

            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-4 border-[#9dae11] bg-[#FFFFF0]">

              <div className="text-center">

                <h3 className="text-lg font-black text-[#228B22]">
                  Google
                </h3>

                <p className="text-xs font-bold text-[#228B22]/70">
                  Workspace
                </p>

              </div>

            </div>

            <div className="grid grid-cols-2 gap-4">

              {workspaceTools.map((tool)=>{

                const Icon=tool.icon;

                return(

                <button

                key={tool.title}

                onClick={()=>setSelectedWorkspaceTool(tool)}

                className="rounded-2xl border border-[#9dae11]/25 bg-[#FFFFF0]/10 p-4 text-left transition hover:border-[#9dae11]"

                >

                  <Icon className="mb-3 h-8 w-8 text-[#9dae11]"/>

                  <h3 className="font-bold text-[#FFFFF0]">
                    {tool.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#FFFFF0]/70">
                    {tool.short}
                  </p>

                </button>

                )

              })}

            </div>

          </div>

        </div>

      </section>



      {/* SERVICES */}
      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9dae11]">
              Services
            </p>
            <h2 className="text-4xl font-bold">What I Build & Optimize</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl border border-[#9dae11]/25 bg-[#228B22] p-8 transition hover:border-[#9dae11]/50"
            >
              <div className="service-beam" />
            <div className="mb-5 flex items-start gap-4">

            <div className="mb-6 flex items-start gap-6">

              <div className="flex h-12 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#FFFFF0]/10 text-[#FFFFF0]">
                <service.icon size={26} strokeWidth={2.2} />
              </div>

              <div className="flex flex-wrap gap-2 flex-1">
                {service.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="group relative"
                  >
                    <span className="inline-flex items-center rounded-xl border border-[#9dae11]/40 bg-[#FFFFF0]/10 px-4 py-2 text-sm font-semibold text-[#FFFFF0] whitespace-nowrap">
                      {tool.name}
                    </span>

                    <div className="absolute left-1/2 top-full z-20 mt-2 hidden -translate-x-1/2 rounded-xl bg-white p-2 shadow-xl group-hover:block">
                      <img
                        src={tool.icon}
                        alt={tool.name}
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

          <h3 className="text-xl font-semibold text-[#FFFFF0]">
            {service.title}
          </h3>

          <p className="mt-3 text-sm text-white">
            {service.description}
          </p>

            </div>
          ))}
          </div>
        </div>
      </section>

      <section id="digital-platform" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9dae11]">
            Featured Project
          </p>

          <h2 className="text-4xl font-bold">
            Digital Customer Engagement Platform
          </h2>
        </div>

        <div className="grid items-center gap-8 rounded-3xl border border-[#9dae11]/25 bg-[#228B22]/10 p-6 lg:grid-cols-10">

          {/* WEBSITE PREVIEW */}

          <div className="lg:col-span-7 overflow-hidden rounded-2xl border border-[#9dae11]/25">

            <img
              src={websiteImages[currentWebsiteImage]}
              alt="Tulsi Guidance"
              className="w-full rounded-2xl object-contain transition-all duration-700"
            />

          </div>

          {/* DETAILS */}

          <div className="lg:col-span-3">

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#9dae11]">
              Business Solution
            </p>

            <div className="mt-2 flex items-center justify-between gap-3">
              <h3 className="text-3xl font-bold text-[#228B22]">
                Tulsi Guidance
              </h3>

              <a
                href="https://www.tulsiguidance.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl lg:text-[10px] border border-[#9dae11] bg-[#228B22] px-4 py-2 text-sm font-medium text-[#FFFFF0] transition hover:bg-[#1d771d]"
              >
                Visit Website ↗
              </a>
            </div>

            <p className="mt-5 text-sm leading-7 text-gray-700">
              Designed and developed a production ready digital customer engagement
              platform featuring a unique UI tailored to the client's brand and
              customer journey. Implemented an intelligent{" "}
              <span className="font-semibold text-[#228B22]">
                Request Callback
              </span>{" "}
              workflow to increase customer engagement, capture qualified enquiries,
              and help scale business interactions. Built using a modular Next.js
              architecture, reusable components, AI-assisted development and an
              optimized deployment pipeline.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">

              {[
                "VS Code",
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Git",
                "GitHub",
                "Vercel",
                "Hostinger DNS",
                "Prompt Engineering",
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-[#9dae11]/30 bg-[#9dae11]/10 px-3 py-1 text-xs font-medium text-[#228B22]"
                >
                  {tool}
                </span>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>

      

      <section id="videos" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#9dae11]">
              Project Showcase
            </p>

            <h2 className="text-4xl font-bold">
              Systems Built & Demonstrated
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">

            {/* DEMO VIDEOS */}
            <div className="lg:col-span-6 rounded-3xl border border-[#9dae11]/25 bg-[#228B22]/20 p-2">

              <video
                key={showcaseIndex}
                autoPlay
                muted
                playsInline
                className="h-full w-full rounded-2xl object-cover"
                onEnded={() =>
                  setShowcaseIndex(
                    (prev) => (prev + 1) % showcaseVideos.length
                  )
                }
              >
                <source
                  src={showcaseVideos[showcaseIndex]}
                  type="video/mp4"
                />
              </video>

            </div>

            {/* REELS */}
            <div className="lg:col-span-3 rounded-3xl border border-[#9dae11]/25 bg-[#228B22]/20 p-2">

              <video
                key={reelsIndex}
                autoPlay
                muted
                playsInline
                controls
                className="h-full w-full rounded-2xl object-cover"
                onEnded={() =>
                  setReelsIndex(
                    (prev) => (prev + 1) % reelsVideos.length
                  )
                }
              >
                <source
                  src={reelsVideos[reelsIndex]}
                  type="video/mp4"
                />
              </video>

            </div>

            {/* SNAPSHOTS */}
            <div className="lg:col-span-3 rounded-3xl border border-[#9dae11]/25 bg-[#228B22]/20 p-2">

              <div className="h-[420px] overflow-hidden rounded-2xl">
                <img
                  src={snapshots[snapshotIndex]}
                  alt="snapshot"
                  className="h-full w-full object-cover"
                />
              </div>

            </div>

          </div>

        </div>
      </section>
      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-[#9dae11]/25 bg-gradient-to-br from-[#228B22] via-[#1d5d1d] to-[#9dae11] shadow-[0_0_120px_rgba(157,174,17,0.15)] p-12 relative z-10 text-center backdrop-blur-lg">
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Let's Build Intelligent Systems
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-[#FFFFF0]">
            Open to automation projects, workflow optimization systems,
            analytics dashboards and operational tooling collaborations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button 
            onClick={() => setShowContactModal(true)}
            className="rounded-xl bg-[#9dae11] px-8 py-4 font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(157,174,17,0.35)] text-[#FFFFF0]">
              Contact
            </button>

          </div>
        </div>
            </section>

      {/* MODAL */}
      {selectedProject && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-md">

          <div className="relative max-h-[90vh] w-full max-w-7xl overflow-y-auto rounded-3xl border border-[#9dae11]/25 bg-[#228B22] p-5 md:p-10 shadow-2xl">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 z-[999] flex h-12 w-12 items-center justify-center rounded-full border border-[#9dae11]/25 bg-[#1d5d1d]/90 text-3xl font-light text-white backdrop-blur-xl transition hover:scale-110 hover:border-[#9dae11]/50 hover:text-[#9dae11]"
            >
              ×
            </button>

            {/* HEADER */}
            <div className="mb-8">

              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#9dae11]/30 bg-[#FFFFF0]/10 px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg font-medium text-[#FFFFF0] backdrop-blur-xl">

                <img
                  src={selectedProject.icon}
                  alt="Project Icon"
                  className={`h-8 w-8 object-contain ${selectedProject.iconScale}`}
                />

                {selectedProject.tags[0]}

              </div>

              <h2 className="text-3xl md:text-5xl font-black leading-tight text-white">
                {selectedProject.title}
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#fffff0]">
                {selectedProject.longDescription}
              </p>

            </div>

            {/* HERO IMAGE */}
            <div className="space-y-6">
              {selectedProject.modalImages.map(
                (image: string, index: number) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Project Image ${index + 1}`}
                    className="w-full rounded-[2rem] object-cover"
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}
      {/* APP MODAL */}
      {selectedApp && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-md">

          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-[#9dae11]/25 bg-[#228B22]/50 p-5 md:p-10">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedApp(null)}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#9dae11]/25 bg-[#1d5d1d]/90 text-3xl text-white"
            >
              ×
            </button>

            <h2 className="pr-12 text-3xl md:text-6xl font-extrabold tracking-tight text-white">
              {selectedApp.title}
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#fffff0]">
              {selectedApp.modalDescription}
            </p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedApp.images.map((image: string, index: number) => (
                <img
                  key={index}
                  src={image}
                  alt={`App Image ${index + 1}`}
                  className="w-full rounded-2xl object-cover"
                />
              ))}
            </div>
          </div>

        </div>

      )}
      {showResume && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setShowResume(false)}
        >
          <div
            className="relative h-[90vh] w-[85vw] overflow-hidden rounded-3xl border border-white/10 bg-[#020817]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowResume(false)}
              className="absolute right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-red-500 text-white"
            >
              <X size={20} />
            </button>

            <iframe
              src="/resume/Shubh_Om_Kanchan_Resume.pdf"
              className="h-full w-full"
            />
          </div>
        </div>
      )}
      {showContactModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md">

          <div className="relative max-h-[90vh] overflow-y-auto w-[95vw] max-w-6xl rounded-[2.5rem] border border-[#9dae11]/25 bg-[#228B22] p-5 md:p-14">

            {/* CLOSE */}
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute right-6 top-6 text-6xl font-bold text-[#FFFFF0]/70 transition hover:scale-110 hover:text-[#9dae11]"
            >
              ×
            </button>

            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight">
            Let's Connect
            </h2>

            <p className="mt-5 text-base md:text-2xl text-[#fffff0]">
              Open to automation, analytics, operational systems and AI workflow collaborations.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">

              {/* EMAIL */}
              <a
                href="mailto:shubhkanchan21@gmail.com"
                className="rounded-2xl border border-[#9dae11]/30 bg-[#FFFFF0]/10 p-5 md:p-8 min-h-[120px] md:min-h-[180px]"
              >
                <p className="mb-6 text-3xl font-bold text-[#FFFFF0]">
                  <span className="inline-block animate-bounce">
                    📩
                  </span>{" "}
                  Email
                </p>

                <p className="break-all text-base md:text-3xl font-bold text-white">
                  shubhkanchan21@gmail.com
                </p>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/shubh-om-kanchan-baa778212/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-[#9dae11]/30 bg-[#FFFFF0]/10 p-5 md:p-8 min-h-[120px] md:min-h-[180px]"
              >
                <p className="text-2xl md:text-2xl md:text-4xl font-black text-white">
                  <span className="inline-block animate-bounce">
                    💼
                  </span>{" "}
                  LinkedIn
                </p>

                <div className="flex h-full items-center">
                  <h3 className="break-all text-base md:text-3xl font-bold text-white" style={{paddingBottom:"35px"}}>
                    Connect Professionally
                  </h3>
                </div>
              </a>

              {/* PHONE */}
              <a
                href="tel:+919004566888"
                className="rounded-2xl border border-[#9dae11]/30 bg-[#FFFFF0]/10 p-5 md:p-8 min-h-[120px] md:min-h-[180px]"
              >
                <p className="mb-6 text-3xl font-bold text-[#FFFFF0]">
                  <span className="inline-block animate-ring">
                    📞
                  </span>{" "}
                  Phone
                </p>

                <p className="text-xl md:text-4xl font-black text-white">
                  +91 90045 66888
                </p>
              </a>

              {/* RESUME */}
              <button
                onClick={() => {
                  setShowContactModal(false);
                  setShowResume(true);
                }}
                className="rounded-2xl border border-[#9dae11]/30 bg-[#FFFFF0]/10 p-5 md:p-8 min-h-[120px] md:min-h-[180px]"
              >
                <p className="text-left mb-6 text-3xl font-bold text-[#FFFFF0]">
                  <span className="inline-block animate-pulse">
                    📑
                  </span>{" "}
                  Resume
                </p>

                <p className="text-left text-4xl font-black text-white">
                  View Resume
                </p>

              </button>

            </div>

          </div>

        </div>
      )}
      
    </div>
  );
}