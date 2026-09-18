/** Site copy follows the current resume facts in PROFILE-SYNC.md and retained interview details. */

export const identity = {
  name: 'Huseyn Aslanli',
  role: 'Founder, Syncretos',
  descriptor: 'Python applications, C++ firmware, and AI research',
  location: 'Greater Phoenix Area',
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
  "I'm a Computer Science student at ASU, graduating in May 2028. I have built Python applications " +
  'with persistent job queues and API integrations and modified C++ firmware for ESP32. ' +
  "I'm also the founder of Syncretos, where I'm designing a research system that combines " +
  'independent searches by three LLM agents into a shared evidence base.';

export const description =
  'Huseyn Aslanli: Computer Science at ASU, graduating May 2028. Python applications, ' +
  'C++ firmware, SQL, and Syncretos research architecture.';

export type Link = { href: string; label: string };

export type Subrole = { title?: string; role: string; dates: string; body: string[] };

export type Entry = {
  id: string;
  category: 'project' | 'experience' | 'leadership';
  featured?: boolean;
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
    id: 'syncretos',
    category: 'experience',
    featured: true,
    org: 'Syncretos',
    role: 'Founder',
    dates: 'May 2026 - Present',
    meta: 'Python · Agent workflows · RAG · Document processing',
    body: [
      'Designing a Python system where three autonomous LLM agents independently research a ' +
        'question, collect documents and observations, and merge their collections into a ' +
        'shared evidence base for cited answers and follow-up questions.',
      'The evidence model preserves original documents, table values, measurement conditions, ' +
        'and exact source references. It retains conflicting observations, separates source ' +
        'claims from derived conclusions, and deduplicates documents without losing provenance. ' +
        'Follow-up answers can retrieve supporting passages from the original sources.',
      'Compared PydanticAI, LangGraph, and SGR Agent Core for tool use, agent state, and ' +
        'interruption recovery. Research covers lightweight working memory, SQLite/FTS5 ' +
        'retrieval, and DSPy for evaluating extraction accuracy and whether citations support answers.',
      'Evaluated Tavily and OpenAlex for source discovery, Trafilatura and Firecrawl for web ' +
        'extraction, and Docling, LangExtract, and Mistral OCR for preserving text, tables, and ' +
        'source locations during document processing.',
    ],
    links: [
      { href: 'https://syncretos.com', label: 'syncretos.com' },
    ],
    source: 'PROFILE-SYNC.md §Syncretos',
  },
  {
    id: 'android-security',
    category: 'project',
    featured: true,
    org: 'Android Security Research',
    role: 'Personal project',
    dates: '2026',
    meta: 'Python · PostgreSQL · SQLite · APK reverse engineering',
    body: [
      'Built a Python pipeline for Android APK analysis and a central database of APIs with ' +
        'functional validation results. Investigated exposed API credentials, validated ' +
        'affected APIs, and reported confirmed exposures to application developers.',
      'Separated APK processing from result ingestion using SQLite checkpoints, an encrypted ' +
        'disk-backed outbox, and authenticated delivery into PostgreSQL. Retried interrupted ' +
        'submissions under stable IDs and retained durable receipts to prevent duplicate ' +
        'ingestion after connection loss or restarts. Tested recovery across process restarts, ' +
        'lost acknowledgments, and database outages.',
    ],
    source: 'PROFILE-SYNC.md §Android Security Research',
  },
  {
    id: 'rendexis',
    category: 'project',
    featured: true,
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
    id: 'wled',
    category: 'project',
    featured: true,
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
    id: 'claude-builder-club',
    category: 'leadership',
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
    id: 'hydroficient',
    category: 'experience',
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
    id: 'acm',
    category: 'leadership',
    org: 'ACM at ASU',
    role: 'Vice President, Corporate Relations',
    dates: 'Jan 2026 – May 2026',
    meta: 'Tempe, Arizona · Hybrid',
    body: [
      'Conducted cold outreach to senior engineers at companies including Apple, Nvidia and Google ' +
        'and brought them onto campus for talks and workshops. Ran the chapter\'s corporate ' +
        'relations as the link between the student body and industry, and hosted technical ' +
        'deep-dive sessions pairing CS students with mentors and recruiters.',
    ],
    source: 'SOURCE-LINKEDIN.md §Experience 4, status language cut per PROMPT.md Rule 4',
  },
  {
    id: 'independent-developer',
    category: 'project',
    org: 'Independent Developer',
    role: 'Self-employed',
    dates: 'Sep 2023 – Apr 2024',
    meta: 'Baku, Azerbaijan · On-site',
    body: [],
    subroles: [
      {
        title: 'Custom in-ear monitors',
        role: 'Hardware Technician',
        dates: 'Jan 2024 – Apr 2024',
        body: [
          'Developed custom in-ear monitors through extensive modifications to an OEM ' +
            "platform, integrating a Qudelix 5K DAC/amp into the earphones' signal path.",
          'Wrote a custom algorithm that generated personalized EQ profiles from acoustic ' +
            "measurements taken inside the user's ear with a small microphone near the " +
            'eardrum. Used the Harman target as a tuning reference and sold the completed ' +
            'prototype to a private client for $5,880.',
        ],
      },
      {
        title: 'First-person shooter',
        role: 'Game Developer',
        dates: 'Sep 2023 – Dec 2023',
        body: [
          'Built a complete, story-driven single-player FPS in Unity, inspired by Escape from ' +
            'Tarkov and the Metro series. Used C# and Bolt visual scripting for gameplay logic, ' +
            'Animator for animation state transitions, and NavMesh for enemy navigation.',
          'Created the HUD and menus with Unity UI and TextMeshPro, shaped level geometry with ' +
            'ProBuilder, and combined Cinemachine camera control with Timeline sequences. ' +
            'Integrated custom logic with existing assets and sold the completed game for $800.',
        ],
      },
    ],
    source: 'PROFILE-SYNC.md §Legacy projects; SOURCE-LINKEDIN.md §Experience 5a, 5b; INTERVIEW.md §Game project',
  },
  {
    id: 'trading',
    category: 'experience',
    org: 'SG&Richardson Trading DMCC',
    role: 'Technical Analyst',
    dates: 'May 2023 – Aug 2023',
    meta: 'Internship · Remote',
    body: [
      'Built a Python trading bot for MetaTrader 5 that pulled market data through yfinance ' +
        'and analyzed it with pandas and NumPy, using signals based on RSI and momentum thresholds.',
    ],
    source: 'SOURCE-LINKEDIN.md §Experience 6; INTERVIEW.md §Trading bot',
  },
];

export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  { group: 'Programming languages', items: ['Python', 'C++', 'C#', 'SQL'] },
  { group: 'Backend and databases', items: ['REST APIs', 'Asynchronous programming', 'PostgreSQL', 'Redis', 'SQLite', 'SQLAlchemy'] },
  { group: 'AI and data', items: ['NumPy', 'pandas', 'LLM API integration', 'LiteLLM', 'Retrieval-augmented generation (RAG)'] },
  { group: 'Systems and tooling', items: ['Git', 'Linux', 'Bash', 'Docker Compose'] },
  { group: 'Security', items: ['APK reverse engineering', 'API validation', 'TLS', 'Device certificates'] },
  { group: 'Testing', items: ['pytest', 'Concurrency testing'] },
];

export const additionalSkills: SkillGroup[] = [
  { group: 'Backend and reliability', items: ['Alembic', 'Transactional job queues', 'Regression testing', 'Idempotency', 'Restart recovery'] },
  { group: 'AI system design', items: ['Multi-agent system design', 'Tool calling', 'Structured extraction', 'Source provenance'] },
  { group: 'Framework research', items: ['PydanticAI', 'LangGraph', 'SGR Agent Core', 'DSPy'] },
  { group: 'Infrastructure and IoT', items: ['systemd', 'SSH', 'MQTT'] },
  { group: 'Data tools', items: ['Streamlit', 'Power BI'] },
  { group: 'Game development', items: ['Unity', 'Unity Visual Scripting (Bolt)', 'Animator', 'NavMesh', 'Cinemachine'] },
  { group: 'Hardware and audio', items: ['ESP32 firmware', 'Autodesk Fusion', 'Audio system integration', 'Audio equalization', 'In-ear acoustic measurement'] },
  { group: 'Spoken languages', items: ['English', 'Russian', 'Azerbaijani', 'Turkish (comprehension)', 'German (basic)'] },
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
