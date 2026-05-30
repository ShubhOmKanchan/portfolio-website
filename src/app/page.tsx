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
} from "lucide-react";
export default function Home() {

  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [selectedApp, setSelectedApp] = useState<any | null>(null);
  const [snapshotIndex, setSnapshotIndex] = useState(0);
  const [selectedSystem, setSelectedSystem] = useState<any>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showResume, setShowResume] = useState(false);
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
        "Automated personality evaluation and personalized report generation system.",

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
        "Automated CAT performance evaluation and comparative reporting engine.",

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

      modalDescription:"Enterprise-style volunteer coordination and event operations platform designed for attendance tracking, venue workflow management, operational reporting and real-time event execution support systems.",


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
      { name: "MS Excel | VBA", icon: "/icons/excel.png" },
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
      { name: "Excel", icon: "/icons/excel.png" },
      { name: "Tableau", icon: "/icons/tableau.png" },
      { name: "SPSS", icon: "/icons/spss.png" },
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
      "AI-assisted workflow design, prompt architecture, image generation systems and structured automation planning.",

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

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F19]/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-6xl flex-col md:flex-row md:items-center md:justify-between px-6 py-4">
          <div>
            <div>
              <div>
              <h1 className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-3xl font-black tracking-tight text-transparent">
                Shubh Om Kanchan | Portfolio
              </h1>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs text-gray-300 md:mt-0 md:text-sm">
            <a href="#systems" className="hover:text-cyan-400">
              Systems
            </a>
            <a href="#apps" className="hover:text-cyan-400">
              Apps
            </a>
            <a href="#services" className="hover:text-cyan-400">
              Services
            </a>
            <a href="#videos" className="hover:text-cyan-400">
              Showcase
            </a>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 blur-3xl" />

        <div className="absolute left-1/3 top-1/4 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-violet-500/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-16 overflow-hidden md:grid-cols-2 md:items-center">
          <div className="min-w-0 overflow-hidden">
            <div className="mb-6 overflow-hidden rounded-full border border-cyan-400/20 bg-cyan-500/5 py-3">

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
                      "text-cyan-300",
                      "text-blue-300",
                      "text-violet-300",
                      "text-slate-200",
                    ][index % 4]
                  }`}
                >
                  {item}
                </div>
              ))}

            </div>
          </div>

            <h1 className="mb-6 max-w-3xl break-words bg-gradient-to-br from-white via-slate-100 to-cyan-200 bg-clip-text text-lg sm:text-3xl md:text-7xl font-black leading-[0.95] tracking-[-0.04em] text-transparent">
              Building Systems That Optimize Operations & Generate Insights
            </h1>

            <p className="mb-8 max-w-xl text-base md:text-lg leading-relaxed text-gray-300">
              Building automation systems, operational workflows and analytics
              solutions to reduce manual effort, improve reporting accuracy
              and provide actionable insights for better decision-making.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="rounded-2xl bg-cyan-500 px-6 py-3 font-medium text-black transition hover:scale-105">
                <a
                  href="https://www.linkedin.com/in/shubh-om-kanchan-baa778212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="..."
                >
                  LinkedIn
                </a>
              </button>

              <button
                onClick={() => setShowResume(true)}
                className="rounded-2xl border border-white/20 px-8 py-4 text-lg font-medium transition hover:border-cyan-400/40"
              >
                Resume
              </button>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative grid gap-4">

            {/* Background Glow */}
            <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

            <div className="relative w-full min-w-0 overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-cyan-500/5 p-4 md:p-8 backdrop-blur-xl">

              {/* Header */}
              <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">
                    Workflow Intelligence
                  </h3>

                  <p className="mt-2 text-sm text-gray-400">
                    Operational systems & automation analytics
                  </p>
                </div>

                <div className="rounded-full border border-cyan-400/30 px-3 py-1 text-sm text-cyan-300">
                  Automation • Analytics • AI
                </div>
              </div>

              {/* Operational Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">

                {/* CARD 1 */}
              <a href="#systems">
                <div className="group rounded-2xl border border-white/5 bg-[#101827] p-4 md:p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-[#132033]">

                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-gray-400">
                      Automation Systems
                    </p>

                    <div className="rounded-lg bg-cyan-500/10 px-2 py-1 text-xs text-cyan-300">
                      Workflows
                    </div>
                  </div>

                  <h3 className="text-4xl font-black text-white">
                    12+
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    Operational automation and reporting infrastructures
                  </p>
                </div>
              </a>

                {/* CARD 2 */}
              <a href="#apps">
                <div className="group rounded-2xl border border-white/5 bg-[#101827] p-4 md:p-5 transition duration-300 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-[#132033]">

                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-gray-400">
                      Operational Apps
                    </p>

                    <div className="rounded-lg bg-blue-500/10 px-2 py-1 text-xs text-blue-300">
                      AppSheet
                    </div>
                  </div>

                  <h3 className="text-4xl font-black text-white">
                    4
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    Workflow systems for operations, tracking and management
                  </p>
                </div>
              </a>
                {/* CARD 3 */}
              <a href="#services">
                <div className="group rounded-2xl border border-white/5 bg-[#101827] p-4 md:p-5 transition duration-300 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-[#132033]">

                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-gray-400">
                      Tool Stack
                    </p>

                    <div className="rounded-lg bg-violet-500/10 px-2 py-1 text-xs text-violet-300">
                      Capabilites
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-white">
                    Core Skills
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-gray-500">
                    What tools are used to build pipelines and set up organisational ecosystems
                  </p>
                </div>
              </a>

                {/* CARD 4 */}
              <a href="#videos">
                <div className="group rounded-2xl border border-white/5 bg-[#101827] p-4 md:p-5 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-[#132033]">

                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm text-gray-400">
                      Showcase
                    </p>

                    <div className="rounded-lg bg-cyan-500/10 px-2 py-1 text-xs text-cyan-300">
                      Projects
                    </div>
                  </div>

                  <h3 className="text-3xl font-black text-white">
                    Display
                  </h3>

                  <p className="mt-4 text-xs leading-relaxed text-gray-500">
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
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
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
                className="relative overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-[#0a1020]/80 px-8 py-12 backdrop-blur-xl"
              >
                <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
                <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 transition duration-500 group-hover:opacity-100 group-hover:from-cyan-500/5 group-hover:to-blue-500/5" />
                <div className="relative grid gap-6 lg:grid-cols-[0.9fr_1.3fr] items-center">

                  {/* LEFT CONTENT */}
                  <div>

                    <h3 className="mb-4 text-3xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mb-5 max-w-xl text-lg leading-relaxed text-slate-300">
                      {project.description}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">

                      <button
                        onClick={() => setSelectedSystem(project)}
                        className="rounded-xl border border-cyan-500 px-6 py-3 text-cyan-300 hover:bg-cyan-500/10"
                      >
                        View Case Study
                      </button>

                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative rounded-xl border border-cyan-500/40 px-6 py-3 text-cyan-300 transition-all duration-300 hover:scale-105 hover:bg-cyan-500/10"
                        >
                          ▶ Use System

                          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                            ↗
                          </span>

                          <span className="absolute -top-2 -right-2 rounded-full bg-green-500 px-2 py-0.5 text-[10px] font-semibold text-black">
                            LIVE
                          </span>
                        </a>
                      )}

                    </div>
            
                    <div className="mt-8 flex flex-wrap gap-3">

                      {project.metrics.map((metric, metricIndex) => (

                      <div
                        key={metricIndex}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-xl"
                      >
                        {metric}
                      </div>

                    ))}

                    </div>

                  </div>

                  {/* RIGHT IMAGE COLUMN */}
                  <div className="relative">

                    <div className="absolute -inset-6 rounded-[2rem] bg-cyan-500/10 blur-3xl" />

                    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 shadow-2xl">

                      <img
                        src={project.cardImage}
                        alt="Market Risk Dashboard"
                        className="w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#020817]/80 via-transparent to-transparent" />

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
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
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
                className="group cursor-pointer rounded-[2rem] border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:border-cyan-400/40"
              >
                <div className="relative mb-4 h-52 overflow-hidden rounded-2xl border border-white/10">

                  <img
                    src={app.cardImage}
                    alt={app.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />

                </div>

                <h3 className="text-2xl font-semibold">
                  {app.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">

                </div>

                <p className="mt-3 text-gray-400">
                  {app.longDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                {app.tags.map((tool: string, index: number) => (

                  <span
                    key={index}
                    className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300"
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



      {/* SERVICES */}
      <section id="services" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Services
            </p>
            <h2 className="text-4xl font-bold">What I Build & Optimize</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-cyan-400/40"
            >
            <div className="mb-5 flex items-start gap-4">

            <div className="mb-6 flex items-start gap-6">

              <div className="flex h-12 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                <service.icon size={26} strokeWidth={2.2} />
              </div>

              <div className="flex flex-wrap gap-2 flex-1">
                {service.tools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="group relative"
                  >
                    <span className="inline-flex items-center rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 whitespace-nowrap">
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

          <h3 className="text-xl font-semibold">
            {service.title}
          </h3>

          <p className="mt-3 text-sm text-gray-400">
            {service.description}
          </p>

            </div>
          ))}
          </div>
        </div>
      </section>

      <section id="videos" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
              Project Showcase
            </p>

            <h2 className="text-4xl font-bold">
              Systems Built & Demonstrated
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">

            {/* DEMO VIDEOS */}
            <div className="lg:col-span-6 rounded-3xl border border-white/10 bg-white/5 p-2">

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
            <div className="lg:col-span-3 rounded-3xl border border-white/10 bg-white/5 p-2">

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
            <div className="lg:col-span-3 rounded-3xl border border-white/10 bg-white/5 p-2">

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
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-12 text-center backdrop-blur-lg">

          <h2 className="mb-6 text-4xl font-bold">
            Let’s Build Intelligent Systems
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
            Open to automation projects, workflow optimization systems,
            analytics dashboards and operational tooling collaborations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button 
            onClick={() => setShowContactModal(true)}
            className="rounded-2xl bg-cyan-500 px-6 py-3 font-medium text-black transition hover:scale-105">
              Contact
            </button>

          </div>
        </div>
            </section>

      {/* MODAL */}
      {selectedProject && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-md">

          <div className="relative max-h-[90vh] w-full max-w-7xl overflow-y-auto rounded-3xl border border-cyan-400/20 bg-[#07111f] p-5 md:p-10 shadow-2xl">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 z-[999] flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/80 text-3xl font-light text-white backdrop-blur-xl transition hover:scale-110 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              ×
            </button>

            {/* HEADER */}
            <div className="mb-8">

              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg font-medium text-cyan-300 backdrop-blur-xl">

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

              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-400">
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

          <div className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-cyan-400/20 bg-[#07111f] p-5 md:p-10">

            {/* CLOSE */}
            <button
              onClick={() => setSelectedApp(null)}
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/80 text-3xl text-white"
            >
              ×
            </button>

            <h2 className="pr-12 text-3xl md:text-6xl font-extrabold tracking-tight text-white">
              {selectedApp.title}
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-400">
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

          <div className="relative max-h-[90vh] overflow-y-auto w-[95vw] max-w-6xl rounded-[2.5rem] border border-cyan-500/20 bg-[#07111f] p-5 md:p-14">

            {/* CLOSE */}
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute right-6 top-6 text-6xl font-bold text-slate-400 transition hover:scale-110 hover:text-white"
            >
              ×
            </button>

            <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight">
            Let's Connect
            </h2>

            <p className="mt-5 text-base md:text-2xl text-slate-400">
              Open to automation, analytics, operational systems and AI workflow collaborations.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2">

              {/* EMAIL */}
              <a
                href="mailto:shubhkanchan21@gmail.com"
                className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 md:p-8 min-h-[120px] md:min-h-[180px]"
              >
                <p className="mb-6 text-3xl font-bold text-cyan-400">
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
                className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 md:p-8 min-h-[120px] md:min-h-[180px]"
              >
                <p className="text-2xl md:text-2xl md:text-4xl font-black text-white">
                  <span className="inline-block animate-bounce">
                    💼
                  </span>{" "}
                  LinkedIn
                </p>

                <p className="text-4xl font-black text-white">
                  Connect Professionally
                </p>
              </a>

              {/* PHONE */}
              <a
                href="tel:+919004566888"
                className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 md:p-8 min-h-[120px] md:min-h-[180px]"
              >
                <p className="mb-6 text-3xl font-bold text-cyan-400">
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
                className="rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-5 md:p-8 min-h-[120px] md:min-h-[180px]"
              >
                <p className="mb-6 text-3xl font-bold text-cyan-400">
                  <span className="inline-block animate-pulse">
                    📑
                  </span>{" "}
                  Resume
                </p>

                <p className="text-4xl font-black text-white">
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