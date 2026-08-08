/**
 * Every string rendered on the site lives here.
 *
 * `source` on each record names the file and section it traces to. The only two
 * permitted sources are SOURCE-LINKEDIN.md and INTERVIEW.md; where they disagree,
 * INTERVIEW.md wins. Nothing may be added here that does not appear in one of them.
 */

export const identity = {
  name: 'Huseyn Aslanli',
  role: 'Founder, Syncretos',
  descriptor: 'Evidence-first multi-LLM AI research',
  location: 'Greater Phoenix Area',
  availability: 'Open to software engineering and AI/ML roles',
  degree: 'B.S. Computer Science, Arizona State University',
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
  'Building Syncretos, an engine where multiple language models debate against parsed ' +
  'source data and return verifiable citations, or an honest blank page, instead of ' +
  'invented answers. Before that: TLS and MQTT hardening for connected water systems, ' +
  'custom in-ear monitors tuned to the Harman curve, a first-person shooter, and a ' +
  'Python trading bot.';

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
    dates: 'May 2026 – Present',
    meta: 'San Francisco Bay Area · Remote',
    body: [
      'Syncretos exists to make AI research accountable. Multiple language models debate ' +
        'against parsed source data, and what comes out either carries a verifiable citation ' +
        'or is an honest blank page. Never an invented answer.',
    ],
    terms: [
      {
        term: 'Upfront fact parsing',
        def: 'Source material is pre-structured into a dedicated database before drafting starts, so evidence is not lost to context limits.',
      },
      {
        term: 'Adversarial cross-critique',
        def: 'Blind model panels evaluate opposing claims against hard facts, then revise on the evidence.',
      },
      {
        term: 'Fusion judge reconciliation',
        def: "A dedicated judge layer surfaces trade-offs, caveats and dissenting views rather than forcing a consensus that isn't there.",
      },
    ],
    links: [
      { href: 'https://syncretos.com', label: 'syncretos.com' },
      { href: 'https://github.com/syncretos-ai', label: 'github.com/syncretos-ai' },
    ],
    source: 'SOURCE-LINKEDIN.md §Experience 1 + Resolved #2; INTERVIEW.md §Syncretos',
  },
  {
    org: 'Claude Builder Club at ASU',
    role: 'Board Member',
    dates: 'Jan 2026 – Present',
    meta: 'Hybrid',
    body: [
      'Leads workshops where students build web and OS-native apps with Claude Code. Each ' +
        'app is deliberately small and built around a single concrete concept, so the ' +
        'technique carries into whatever the student builds next.',
    ],
    source: 'INTERVIEW.md §Claude Builder Club (replaces the LinkedIn wording entirely)',
  },
  {
    org: 'Extern @ Hydroficient',
    role: 'Security Engineer',
    dates: 'Feb 2026 – May 2026',
    meta: 'Contract',
    body: [
      'An attacker who reaches the operator dashboard of a connected water system can move ' +
        'physical controls: raise voltage, tamper with sewer equipment. The scenario was ' +
        "competitive sabotage, one operator breaking into a rival's dashboard to damage " +
        'their infrastructure. The work was to close that path.',
      'Built and secured an MQTT pipeline in Python with TLS and device certificates, so the ' +
        'control channel could not be hijacked or replayed. Ran replay-attack simulations and ' +
        'TLS performance benchmarking, identifying weaknesses and tuning the defenses. Built ' +
        'a Streamlit dashboard to track pipeline health and system status.',
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
        'bringing them onto campus for talks and workshops. Ran the chapter’s corporate ' +
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
          '5K DAC/amps, then equalized them in software to match the Harman curve. The ' +
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
    meta: 'Full-time · Dubai, United Arab Emirates · Remote',
    body: [
      'A Python trading bot running against MetaTrader 5, pulling market data through ' +
        'yfinance and doing the analysis in pandas and numpy, with signals built on RSI and ' +
        'momentum thresholds.',
    ],
    source: 'SOURCE-LINKEDIN.md §Experience 6; INTERVIEW.md §Trading bot',
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'C++', 'Java', 'SQL'] },
  {
    group: 'AI',
    items: [
      'Large language models',
      'Natural language processing',
      'Artificial neural networks',
      'APIs',
    ],
  },
  {
    group: 'Security',
    items: ['Threat modeling', 'Enterprise network security', 'Information assurance'],
  },
  {
    group: 'Systems',
    items: ['System architecture', 'MQTT', 'Internet of Things', 'Digital signal processing'],
  },
  { group: 'Tools', items: ['Git', 'Streamlit'] },
];

export const skillsSource = 'SOURCE-LINKEDIN.md §Skills to actually display (the curated 17)';

export const education = {
  degree: 'Bachelor of Science, Computer Science',
  school: 'Arizona State University',
  dates: 'Aug 2024 – May 2028',
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
