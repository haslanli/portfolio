/** Site copy follows the current resume facts in PROFILE-SYNC.md and retained interview details. */

export const identity = {
  name: 'Huseyn Aslanli',
  role: 'Founder, Syncretos',
  descriptor: 'Python applications, C++ firmware, and AI research',
  location: 'Greater Phoenix Area',
  availability: 'Software engineering internships, including teams building AI applications',
  degree: 'B.S. Computer Science, cybersecurity concentration, Arizona State University',
  graduation: 'May 2028',
  // Split so the address is never a single literal in the served markup.
  emailUser: 'aslanlihuseyn87',
  emailDomain: 'gmail.com',
  linkedin: 'https://www.linkedin.com/in/haslanli/',
  linkedinLabel: 'linkedin.com/in/haslanli',
  instagram: 'https://www.instagram.com/iamhaslanli/',
  instagramLabel: 'instagram.com/iamhaslanli',
  github: 'https://github.com/haslanli/',
  githubLabel: 'github.com/haslanli',
  source:
    'SOURCE-LINKEDIN.md §Identity, §Education, Resolved #4; ' +
    'INTERVIEW.md §Audience, §Public artifacts (2026-08-02 addition)',
};

/** Named blocks in the head. Entries without a URL are dropped, never stubbed. */
export const profileButtons: Link[] = [
  { href: identity.linkedin, label: 'LinkedIn' },
  { href: identity.github, label: 'GitHub' },
].filter((l) => l.href !== '');

/** Plain links in the footer, shown as their addresses. */
export const footerLinks: Link[] = [
  { href: identity.linkedin, label: identity.linkedinLabel },
  { href: identity.github, label: identity.githubLabel },
  { href: identity.instagram, label: identity.instagramLabel },
].filter((l) => l.href !== '');

export const lede =
  "I'm a Computer Science student at ASU, graduating in May 2028. I build Python applications " +
  'with persistent job queues and API integrations, and modify C++ firmware for ESP32. ' +
  "I'm also the founder of Syncretos, where I'm designing a research system that combines " +
  'independent searches by three LLM agents into a shared evidence base.';

export const description =
  'Huseyn Aslanli: Computer Science at ASU, graduating May 2028. Python applications, ' +
  'C++ firmware, SQL, and Syncretos research architecture. Open to software engineering internships.';

export type Link = { href: string; label: string };

export type Subrole = { role: string; dates: string; body: string };

export type Entry = {
  org: string;
  role: string;
  dates: string;
  meta?: string;
  body: string[];
  terms?: { term: string; def: string }[];
  subroles?: Subrole[];
  links?: Link[];
  source: string;
};

export const work: Entry[] = [
  {
    org: 'Syncretos',
    role: 'Founder',
    dates: 'May 2026 - Present',
    meta: 'Research system design',
    body: [
      'Designing a Python research system with three independent LLM agents, each responsible ' +
        'for its own search and source collection. Their source material feeds a shared evidence ' +
        'store for cited answers and follow-up questions.',
      'The design preserves original documents, measurements, source references, and conflicting ' +
        'results. Retrieval-augmented generation (RAG), source provenance, and deduplication are ' +
        'part of the architecture. The research engine is still in development.',
    ],
    links: [
      { href: 'https://syncretos.com', label: 'syncretos.com' },
      { href: 'https://github.com/syncretos-ai', label: 'github.com/syncretos-ai' },
    ],
    source: 'PROFILE-SYNC.md §Syncretos',
  },
  {
    org: 'Rendexis',
    role: 'Personal project',
    dates: '2026',
    meta: 'Python · SQLite · SQLAlchemy · Alembic · pytest',
    body: [
      'Built an asynchronous Telegram application for image and video generation with OpenAI ' +
        'and Google APIs. Jobs, provider attempts, and artifacts are stored in SQLite through ' +
        'SQLAlchemy, with schema changes managed by Alembic.',
      'Transactional queue admission and idempotent confirmation prevent concurrent requests ' +
        'from creating duplicate jobs or exceeding queue capacity. Restart recovery resumes ' +
        'accepted video operations and avoids resubmitting requests with uncertain outcomes.',
      'Regression tests cover concurrent confirmation, queue limits, timeouts, restart recovery, ' +
        'and database migrations. The current application runs locally, with mocked providers ' +
        'and temporary databases used for these tests.',
    ],
    source: 'PROFILE-SYNC.md §Rendexis',
  },
  {
    org: 'WLED firmware extensions',
    role: 'Personal project',
    dates: '2026',
    meta: 'C++ · ESP32 · DDP · Python',
    body: [
      'Patched existing WLED firmware for ESP32, replacing a fixed DDP frame delay with checks ' +
        'for bus readiness and correcting RGBWW output while preserving other protocol timing.',
      'Validated color-channel behavior across 2.58 million input combinations in a host test ' +
        'harness using the actual C++ functions. Separate checks cover timing boundaries, a busy ' +
        'bus, and clock wraparound. Deployed the patched firmware through OTA updates.',
    ],
    source: 'PROFILE-SYNC.md §WLED',
  },
  {
    org: 'Claude Builder Club at ASU',
    role: 'Board Member',
    dates: 'Jan 2026 - Aug 2026',
    meta: 'Hybrid',
    body: [
      'Led workshops where students built web and OS-native apps with Claude Code. Each ' +
        'app focused on a single concrete concept, so the ' +
        'technique could carry into larger projects. Organized development teams and taught Claude API integration and agent workflows.',
    ],
    source: 'INTERVIEW.md §Claude Builder Club (replaces the LinkedIn wording entirely)',
  },
  {
    org: 'Hydroficient, via Extern',
    role: 'Security Engineer Extern',
    dates: 'Feb 2026 – May 2026',
    body: [
      'Built a Python MQTT pipeline for simulated water monitoring, securing device communications ' +
        'with TLS and device certificates. Ran replay-attack simulations and TLS benchmarks to ' +
        'identify vulnerabilities and tune defenses.',
      'Built a Streamlit dashboard for pipeline monitoring, threat detection, and system status. ' +
        'The work examined the control path from an operator dashboard to connected equipment, ' +
        'using simulated attacks rather than a real intrusion.',
    ],
    source: 'SOURCE-LINKEDIN.md §Experience 3 + Resolved #1, #3; INTERVIEW.md §Hydroficient',
  },
  {
    org: 'ACM at ASU',
    role: 'Vice President, Corporate Relations',
    dates: 'Jan 2026 – May 2026',
    meta: 'Tempe, Arizona · Hybrid',
    body: [
      'Cold outreach to senior engineers at companies including Apple, Nvidia and Google, ' +
        'bringing them onto campus for talks and workshops. Ran the chapter\'s corporate ' +
        'relations as the link between the student body and industry, and hosted technical ' +
        'deep-dive sessions pairing CS students with mentors and recruiters.',
    ],
    source: 'SOURCE-LINKEDIN.md §Experience 4, status language cut per PROMPT.md Rule 4',
  },
  {
    org: 'Independent Developer',
    role: 'Self-employed',
    dates: 'Sep 2023 – Apr 2024',
    meta: 'Baku, Azerbaijan · On-site',
    body: [],
    subroles: [
      {
        role: 'Hardware Technician',
        dates: 'Jan 2024 – Apr 2024',
        body:
          'Designed and built custom high-fidelity in-ear monitors around integrated Qudelix ' +
          '5K DAC/amps, then equalized them in software toward the Harman target curve. The ' +
          'prototype was validated and sold to a private client for $5,880.',
      },
      {
        role: 'Game Developer',
        dates: 'Sep 2023 – Dec 2023',
        body:
          "A first-person shooter built in Unity, mostly in Bolt, Unity's visual scripting " +
          'system, mixing custom logic with existing assets. Escape from Tarkov and the ' +
          'Metro series were the reference points. Sold for $800.',
      },
    ],
    source: 'SOURCE-LINKEDIN.md §Experience 5a, 5b; INTERVIEW.md §Game project',
  },
  {
    org: 'SG&Richardson Trading DMCC',
    role: 'Technical Analyst',
    dates: 'May 2023 – Aug 2023',
    meta: 'Internship · Remote',
    body: [
      'A Python trading bot running against MetaTrader 5, pulling market data through ' +
        'yfinance and doing the analysis in pandas and NumPy, with signals built on RSI and ' +
        'momentum thresholds.',
    ],
    source: 'SOURCE-LINKEDIN.md §Experience 6; INTERVIEW.md §Trading bot',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'C++', 'SQL'] },
  { group: 'Tools and libraries', items: ['Git', 'Linux/Bash', 'pytest', 'SQLite', 'SQLAlchemy', 'Alembic', 'pandas', 'NumPy', 'Streamlit'] },
  { group: 'Additional', items: ['REST API integration', 'MQTT', 'TLS', 'LLM integration', 'Autodesk Fusion'] },
];

export const skillsSource = 'PROFILE-SYNC.md §Skills';

export const education = {
  degree: 'B.S. Computer Science, cybersecurity concentration',
  school: 'Arizona State University',
  dates: 'Aug 2024 – May 2028',
  completedCoursework: 'Introduction to Programming Languages (CSE 240)',
  currentCoursework: 'Data Structures and Algorithms (CSE 310), Software Engineering (CSE 360)',
  activities: [
    'Association of Computing Machinery',
    'Claude Builders Club',
    'Hacker Devils',
    'Software Developers Association',
    'Calisthenics',
    'Boxing',
  ],
  source: 'SOURCE-LINKEDIN.md §Education',
};
