# Huseyn Aslanli

Founder, Syncretos · Python applications, C++ firmware, and AI research

I'm a Computer Science student at ASU, graduating in May 2028. I have built Python applications with persistent job queues and API integrations and modified C++ firmware for ESP32. I'm also the founder of Syncretos, where I'm designing a research system that combines independent searches by three LLM agents into a shared evidence base.

- Education: B.S. Computer Science, cybersecurity concentration, Arizona State University. Graduating May 2028.
- Based in: Greater Phoenix Area.

[Email](mailto:aslanlihuseyn87@gmail.com) · [LinkedIn](https://www.linkedin.com/in/haslanli/) · [GitHub](https://github.com/haslanli/)

## Featured

### Syncretos

Founder · May 2026 - Present

Python · Agent workflows · RAG · Document processing

Designing a Python system where three autonomous LLM agents independently research a question, collect documents and observations, and merge their collections into a shared evidence base for cited answers and follow-up questions.

The evidence model preserves original documents, table values, measurement conditions, and exact source references. It retains conflicting observations, separates source claims from derived conclusions, and deduplicates documents without losing provenance. Follow-up answers can retrieve supporting passages from the original sources.

Compared PydanticAI, LangGraph, and SGR Agent Core for tool use, agent state, and interruption recovery. Research covers lightweight working memory, SQLite/FTS5 retrieval, and DSPy for evaluating extraction accuracy and whether citations support answers.

Evaluated Tavily and OpenAlex for source discovery, Trafilatura and Firecrawl for web extraction, and Docling, LangExtract, and Mistral OCR for preserving text, tables, and source locations during document processing.

[syncretos.com](https://syncretos.com)

### Android Security Research

Personal project · 2026

Python · PostgreSQL · SQLite · APK reverse engineering

Built a Python pipeline for Android APK analysis and a central database of APIs with functional validation results. Investigated exposed API credentials, validated affected APIs, and reported confirmed exposures to application developers.

Separated APK processing from result ingestion using SQLite checkpoints, an encrypted disk-backed outbox, and authenticated delivery into PostgreSQL. Retried interrupted submissions under stable IDs and retained durable receipts to prevent duplicate ingestion after connection loss or restarts. Tested recovery across process restarts, lost acknowledgments, and database outages.

### Rendexis

Personal project · 2026

Python · SQLite · SQLAlchemy · Alembic · pytest

Built an asynchronous Telegram application for image and video generation with OpenAI and Google APIs. Jobs, provider attempts, and artifacts are stored in SQLite through SQLAlchemy, with schema changes managed by Alembic.

Transactional queue admission and idempotent confirmation prevent concurrent requests from creating duplicate jobs or exceeding queue capacity. Restart recovery resumes accepted video operations and avoids resubmitting requests with uncertain outcomes.

Regression tests cover concurrent confirmation, queue limits, timeouts, restart recovery, and database migrations. The current application runs locally, with mocked providers and temporary databases used for these tests.

### WLED firmware extensions

Personal project · 2026

C++ · ESP32 · DDP · Python

Patched existing WLED firmware for ESP32, replacing a fixed DDP frame delay with checks for bus readiness and correcting RGBWW output while preserving other protocol timing.

Validated color-channel behavior across 2.58 million input combinations in a host test harness using the actual C++ functions. Separate checks cover timing boundaries, a busy bus, and clock wraparound. Deployed the patched firmware through OTA updates.

## Projects

### Independent Developer

Self-employed · Sep 2023 – Apr 2024

Baku, Azerbaijan · On-site

#### Custom in-ear monitors

Hardware Technician · Jan 2024 – Apr 2024

Developed custom in-ear monitors through extensive modifications to an OEM platform, integrating a Qudelix 5K DAC/amp into the earphones' signal path.

Wrote a custom algorithm that generated personalized EQ profiles from acoustic measurements taken inside the user's ear with a small microphone near the eardrum. Used the Harman target as a tuning reference and sold the completed prototype to a private client for $5,880.

#### First-person shooter

Game Developer · Sep 2023 – Dec 2023

Built a complete, story-driven single-player FPS in Unity, inspired by Escape from Tarkov and the Metro series. Used C# and Bolt visual scripting for gameplay logic, Animator for animation state transitions, and NavMesh for enemy navigation.

Created the HUD and menus with Unity UI and TextMeshPro, shaped level geometry with ProBuilder, and combined Cinemachine camera control with Timeline sequences. Integrated custom logic with existing assets and sold the completed game for $800.

## Experience

### Hydroficient, via Extern

Security Engineer Extern · Feb 2026 – May 2026

Built a Python MQTT pipeline for simulated water monitoring, securing device communications with TLS and device certificates. Ran replay-attack simulations and TLS benchmarks to identify vulnerabilities and tune defenses.

Built a Streamlit dashboard for pipeline monitoring, threat detection, and system status. The work examined the control path from an operator dashboard to connected equipment, using simulated attacks rather than a real intrusion.

### SG&Richardson Trading DMCC

Technical Analyst · May 2023 – Aug 2023

Internship · Remote

Built a Python trading bot for MetaTrader 5 that pulled market data through yfinance and analyzed it with pandas and NumPy, using signals based on RSI and momentum thresholds.

## Leadership

### Claude Builder Club at ASU

Board Member · Jan 2026 - Aug 2026

Hybrid

Led workshops where students built web and OS-native apps with Claude Code. Each app focused on a single concrete concept, so the technique could carry into larger projects. Organized development teams and taught Claude API integration and agent workflows.

### ACM at ASU

Vice President, Corporate Relations · Jan 2026 – May 2026

Tempe, Arizona · Hybrid

Conducted cold outreach to senior engineers at companies including Apple, Nvidia and Google and brought them onto campus for talks and workshops. Ran the chapter's corporate relations as the link between the student body and industry, and hosted technical deep-dive sessions pairing CS students with mentors and recruiters.

## Skills

Programming languages: Python, C++, C#, SQL.

Backend and databases: REST APIs, Asynchronous programming, PostgreSQL, Redis, SQLite, SQLAlchemy.

AI and data: NumPy, pandas, LLM API integration, LiteLLM, Retrieval-augmented generation (RAG).

Systems and tooling: Git, Linux, Bash, Docker Compose.

Security: APK reverse engineering, API validation, TLS, Device certificates.

Testing: pytest, Concurrency testing.

<details>
<summary>Additional skills</summary>

Backend and reliability: Alembic, Transactional job queues, Regression testing, Idempotency, Restart recovery.

AI system design: Multi-agent system design, Tool calling, Structured extraction, Source provenance.

Framework research: PydanticAI, LangGraph, SGR Agent Core, DSPy.

Infrastructure and IoT: systemd, SSH, MQTT.

Data tools: Streamlit, Power BI.

Game development: Unity, Unity Visual Scripting (Bolt), Animator, NavMesh, Cinemachine.

Hardware and audio: ESP32 firmware, Autodesk Fusion, Audio system integration, Audio equalization, In-ear acoustic measurement.

Spoken languages: English, Russian, Azerbaijani, Turkish (comprehension), German (basic).

</details>

## Education

B.S. Computer Science, cybersecurity concentration, Arizona State University. Aug 2024 – May 2028.

Completed coursework: Introduction to Programming Languages (CSE 240).

In progress: Data Structures and Algorithms (CSE 310), Software Engineering (CSE 360).

## Contact

[Email](mailto:aslanlihuseyn87@gmail.com) · [LinkedIn](https://www.linkedin.com/in/haslanli/) · [GitHub](https://github.com/haslanli/) · [Instagram](https://www.instagram.com/iamhaslanli/)
