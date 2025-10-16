/**
 * ESTRUCTURA VISUAL DEL PORTFOLIO REDISEÑADO
 * ==========================================
 *
 * Este archivo documenta la estructura completa de tabs y componentes
 */

/*
┌───────────────────────────────────────────────────────────────────────┐
│                          MY PORTFOLIO                                  │
│                     (Título Principal)                                 │
└───────────────────────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────────────────────────┐
│  TAB NAVIGATION (React-Bootstrap Nav.Tabs)                            │
│  ┌─────────────┬──────────────────┬─────────────┬──────────────────┐│
│  │ Technical   │ Security         │ CTF & Labs  │ Bug Bounty &     ││
│  │ Projects    │ Research         │             │ CVEs             ││
│  └─────────────┴──────────────────┴─────────────┴──────────────────┘│
└───────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════
TAB 1: TECHNICAL PROJECTS (Existing GitHub Integration)
═══════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│  Project Card 1 (Row Layout - Desktop)                          │
│  ┌──────────────────────────┬───────────────────────────────┐  │
│  │  TEXT CONTENT            │  IMAGE CONTENT                │  │
│  │  • Title                 │  ┌─────────────────────────┐ │  │
│  │  • Description           │  │                         │ │  │
│  │  • Features List         │  │    Project Image        │ │  │
│  │  • Technologies Badges   │  │                         │ │  │
│  │  • [View Project Button] │  └─────────────────────────┘ │  │
│  └──────────────────────────┴───────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Project Card 2 (Reversed Layout)                               │
│  ┌──────────────────────────┬───────────────────────────────┐  │
│  │  IMAGE CONTENT           │  TEXT CONTENT                 │  │
│  │  ┌─────────────────────┐ │  • Title                      │  │
│  │  │                     │ │  • Description                │  │
│  │  │   Project Image     │ │  • Features List              │  │
│  │  │                     │ │  • Technologies Badges        │  │
│  │  └─────────────────────┘ │  • [View Project Button]      │  │
│  └──────────────────────────┴───────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════
TAB 2: SECURITY RESEARCH
═══════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│  Section Intro                                                  │
│  "Security Research & Analysis"                                 │
│  "In-depth cybersecurity research, framework implementations"   │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Research Card                                                  │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  NIST CSF 2.0 Implementation for ISP Infrastructure  2024-01│ │
│  │  [NIST] [Compliance] [Risk Management]                     │ │
│  │                                                             │ │
│  │  Comprehensive security analysis applying NIST...          │ │
│  │                                                             │ │
│  │  Frameworks Applied:                                        │ │
│  │  [NIST CSF 2.0] [MITRE ATT&CK] [ISO 27001]                │ │
│  │                                                             │ │
│  │  [Read Full Analysis →]                                     │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Research Card 2 (MITRE ATT&CK Mapping)                         │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Research Card 3 (OWASP Top 10 Analysis)                        │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════
TAB 3: CTF & LABS
═══════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│  Section Intro                                                  │
│  "CTF Achievements & Lab Progress"                              │
│  "Platforms where I practice and sharpen my skills"             │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  CTF Platform Card - Hack The Box                               │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  Hack The Box                      [View Profile →]        │ │
│  │  ───────────────────────────────────────────────────────  │ │
│  │                                                             │ │
│  │  ┌───────────┬──────────┬──────────────┬────────────────┐ │ │
│  │  │ Rank      │ Points   │ Machines     │ Challenges     │ │ │
│  │  │ Hacker    │ 145      │ 32           │ 18             │ │ │
│  │  └───────────┴──────────┴──────────────┴────────────────┘ │ │
│  │                                                             │ │
│  │  Achievements                                               │ │
│  │  ┌──────────────────┬──────────────────┬───────────────┐  │ │
│  │  │ 🏆 Active Member │ 🏆 Machine Hunter│ 🔒 Challenge  │  │ │
│  │  │    2024-02       │    2023-12       │    Solver     │  │ │
│  │  └──────────────────┴──────────────────┴───────────────┘  │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  CTF Platform Card - PortSwigger Academy                        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  CTF Platform Card - TryHackMe                                  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  CTF Competitions                                               │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  PicoCTF 2024                              [Top 100]       │ │
│  │  2024-03                          [Read Writeup]           │ │
│  └───────────────────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  CyberDefenders Blue Team CTF              [Top 50]        │ │
│  │  2023-12                          [Read Writeup]           │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════
TAB 4: BUG BOUNTY & CVEs
═══════════════════════════════════════════════════════════════════════

┌─────────────────────────────────────────────────────────────────┐
│  Section Intro                                                  │
│  "Bug Bounty & CVE Contributions"                               │
│  "Security vulnerabilities discovered and responsible..."       │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Bug Bounty Statistics Dashboard                                │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │         Bug Bounty Statistics                              │ │
│  │                                                             │ │
│  │  ┌───────────────┬─────────────────┬──────────────────┐   │ │
│  │  │ Total Bounties│ Total Earned ⭐ │ Valid Findings   │   │ │
│  │  │      5        │    $2,500       │       12         │   │ │
│  │  └───────────────┴─────────────────┴──────────────────┘   │ │
│  │                                                             │ │
│  │  Severity Breakdown                                         │ │
│  │  ● Critical  ──────────────────────────────────────── 1    │ │
│  │  ● High      ──────────────────────────────────────── 4    │ │
│  │  ● Medium    ──────────────────────────────────────── 7    │ │
│  │                                                             │ │
│  │  Active Platforms                                           │ │
│  │  [HackerOne] [Bugcrowd] [Intigriti]                        │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Security Findings & Recognitions                               │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Bug Bounty Recognition Card                                    │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  Example Corp                                   [High]     │ │
│  │  $500                                          2024-01     │ │
│  │                                                             │ │
│  │  SQL Injection in payment processing endpoint leading      │ │
│  │  to unauthorized data access.                              │ │
│  │                                                             │ │
│  │  via HackerOne    [CVE-2024-XXXXX]          [Resolved]    │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Bug Bounty Recognition Card 2 (XSS Vulnerability)              │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Articles & Publications                                        │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Article Card                                                   │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │  From XSS to Account Takeover: A Case Study               │ │
│  │  Medium  •  8 min read  •  2023-11                         │ │
│  │                                    [Read Article →]        │ │
│  └───────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Article Card 2 (Bug Bounty Tips)                               │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  Article Card 3 (IDOR Vulnerabilities)                          │
└─────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════

RESPONSIVE BEHAVIOR:
═══════════════════════════════════════════════════════════════════════

Desktop (> 992px):
- Tabs horizontal
- Projects: Side-by-side layout (text + image)
- Stats: Multi-column grid

Tablet (768px - 992px):
- Tabs horizontal (wrapped if needed)
- Projects: Stacked layout
- Stats: 2-column grid

Mobile (< 768px):
- Tabs: Vertical stacked
- All cards: Full width
- Stats: Single column

═══════════════════════════════════════════════════════════════════════
COLOR SCHEME:
═══════════════════════════════════════════════════════════════════════

Primary Green:    #00FF00  (Active tabs, CTAs, highlights)
Cyan Accent:      #64ffda  (Secondary highlights, links)
Cyan Tech:        #7DF9FF  (Technology badges)
Dark Blue BG:     #0a192f  (Card backgrounds)
Medium Blue BG:   #112240  (Alternate backgrounds)
Border:           #233554  (Card borders)
Text Primary:     #ccd6f6  (Headings)
Text Secondary:   #8892b0  (Body text)

Severity Colors:
- Critical: #ef4444 (Red)
- High:     #f97316 (Orange)
- Medium:   #eab308 (Yellow)
- Low:      #22c55e (Green)

═══════════════════════════════════════════════════════════════════════
*/

export const STRUCTURE_DOCUMENTATION = {
  tabs: [
    {
      id: "projects",
      title: "Technical Projects",
      component: "ProjectsSection",
      dataSource: "GitHub API + projectData",
      features: ["GitHub integration", "Alternating layout", "Tech badges"],
    },
    {
      id: "research",
      title: "Security Research",
      component: "ResearchSection",
      dataSource: "securityResearch array",
      features: ["Framework badges", "Tags", "Date stamps", "External links"],
    },
    {
      id: "ctf",
      title: "CTF & Labs",
      component: "CTFSection",
      dataSource: "ctfAchievements object",
      features: ["Platform stats", "Achievement badges", "Competition history"],
    },
    {
      id: "bugbounty",
      title: "Bug Bounty & CVEs",
      component: "BugBountySection",
      dataSource: "bugBountyData object",
      features: [
        "Stats dashboard",
        "Severity indicators",
        "CVE tracking",
        "Articles list",
      ],
    },
  ],
};
