# Huseyn Aslanli

Founder, Syncretos · Python applications, C++ firmware, and AI research

I'm a Computer Science student at ASU, graduating in May 2028. I build Python applications with persistent job queues and API integrations, and modify C++ firmware for ESP32. I'm also the founder of Syncretos, where I'm designing a research system that combines independent searches by three LLM agents into a shared evidence base.

- Education: B.S. Computer Science, cybersecurity concentration, Arizona State University. Graduating May 2028.
- Open to: Software engineering internships, including teams building AI applications.
- Based in: Greater Phoenix Area.

[Email](mailto:aslanlihuseyn87@gmail.com) · [LinkedIn](https://www.linkedin.com/in/haslanli/) · [GitHub](https://github.com/haslanli/)

## Work

### Syncretos

Founder · May 2026 - Present

Research system design

Designing a Python research system with three independent LLM agents, each responsible for its own search and source collection. Their source material feeds a shared evidence store for cited answers and follow-up questions.

The design preserves original documents, measurements, source references, and conflicting results. Retrieval-augmented generation (RAG), source provenance, and deduplication are part of the architecture. The research engine is still in development.

[syncretos.com](https://syncretos.com) · [github.com/syncretos-ai](https://github.com/syncretos-ai)

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

### Claude Builder Club at ASU

Board Member · Jan 2026 - Aug 2026

Hybrid

Led workshops where students built web and OS-native apps with Claude Code. Each app focused on a single concrete concept, so the technique could carry into larger projects. Organized development teams and taught Claude API integration and agent workflows.

### Hydroficient, via Extern

Security Engineer Extern · Feb 2026 – May 2026

Built a Python MQTT pipeline for simulated water monitoring, securing device communications with TLS and device certificates. Ran replay-attack simulations and TLS benchmarks to identify vulnerabilities and tune defenses.

Built a Streamlit dashboard for pipeline monitoring, threat detection, and system status. The work examined the control path from an operator dashboard to connected equipment, using simulated attacks rather than a real intrusion.

### ACM at ASU

Vice President, Corporate Relations · Jan 2026 – May 2026

Tempe, Arizona · Hybrid

Cold outreach to senior engineers at companies including Apple, Nvidia and Google, bringing them onto campus for talks and workshops. Ran the chapter's corporate relations as the link between the student body and industry, and hosted technical deep-dive sessions pairing CS students with mentors and recruiters.

### Independent Developer

Self-employed · Sep 2023 – Apr 2024

Baku, Azerbaijan · On-site



#### Hardware Technician

Jan 2024 – Apr 2024

Designed and built custom high-fidelity in-ear monitors around integrated Qudelix 5K DAC/amps, then equalized them in software toward the Harman target curve. The prototype was validated and sold to a private client for $5,880.

#### Game Developer

Sep 2023 – Dec 2023

A first-person shooter built in Unity, mostly in Bolt, Unity's visual scripting system, mixing custom logic with existing assets. Escape from Tarkov and the Metro series were the reference points. Sold for $800.

### SG&Richardson Trading DMCC

Technical Analyst · May 2023 – Aug 2023

Internship · Remote

A Python trading bot running against MetaTrader 5, pulling market data through yfinance and doing the analysis in pandas and NumPy, with signals built on RSI and momentum thresholds.

## Skills

Languages: Python, C++, SQL.

Tools and libraries: Git, Linux/Bash, pytest, SQLite, SQLAlchemy, Alembic, pandas, NumPy, Streamlit.

Additional: REST API integration, MQTT, TLS, LLM integration, Autodesk Fusion.

## Education

B.S. Computer Science, cybersecurity concentration, Arizona State University. Aug 2024 – May 2028.

Completed coursework: Introduction to Programming Languages (CSE 240).

In progress: Data Structures and Algorithms (CSE 310), Software Engineering (CSE 360).

## Contact

[Email](mailto:aslanlihuseyn87@gmail.com) · [LinkedIn](https://www.linkedin.com/in/haslanli/) · [GitHub](https://github.com/haslanli/) · [Instagram](https://www.instagram.com/iamhaslanli/)
