import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  // Seed admin user
  const hashedPassword = await bcrypt.hash('johndoe123', 12);
  await prisma.user.upsert({
    where: { email: 'john@doe.com' },
    update: {},
    create: {
      email: 'john@doe.com',
      name: 'Shane Turon',
      password: hashedPassword,
      role: 'admin',
    },
  });

  // Seed Systems
  const systems = [
    {
      slug: 'psynova',
      name: 'PsyNova',
      tagline: 'Modular operational infrastructure for professional capacity',
      description: 'A 3-layer modular architecture for professional services: CoreSpine (headless administrative engine), Compliance Wrapper (sector-specific regulatory shields), and Operator Interface (role-based dashboards). Designed to recover the ~6 hours per week professionals lose to administrative fragmentation.',
      status: 'ACTIVE',
      category: 'Operational Platform',
      features: JSON.stringify([
        'CoreSpine: Headless administrative engine — intake, scheduling, billing, CRM/memory, orchestration',
        'Compliance Wrapper: Sector-specific regulatory shields — Law 25/PIPEDA healthcare, accounting, wellness',
        'Operator Interface: Role-based dashboards — Admin, Professional, Patient, Supervisor',
        'Ghost Mode & Brand Mode: Infrastructure service or managed platform deployment',
        'SoloSpine → ClinicSpine → BureauForge: Scales from solo professional to institutional PMO',
        'Multilingual: EN/FR/ES language modules across all surfaces',
      ]),
      architecture: 'Spine → Wrapper → Interface. Three distinct architectural layers enabling modular deployment across professional verticals. CoreSpine provides the headless engine; Compliance Wrappers add sector-specific regulatory logic; Operator Interfaces present role-appropriate views.',
      sortOrder: 1,
      isPublished: true,
    },
    {
      slug: 'control-tower',
      name: 'Control Tower',
      tagline: '10-subsystem execution orchestration framework',
      description: 'A formal execution orchestration framework coordinating humans, local AIs, and cloud AIs through 10 numbered subsystems. Implements agent pipeline architecture (Architect → TechnicalSpecialist → Closer → TacticalTranslator) with bounded scopes, phase-appropriate permissions, and mandatory dry-run gates.',
      status: 'ACTIVE',
      category: 'Orchestration Framework',
      features: JSON.stringify([
        '00_AGENT_REGISTRY: AI agent definitions, GPT registry, operational rules',
        '01_TOOL_INVENTORY: Hardware, software, and AI tool profiles',
        '02_ESCALETA_TEMPLATES: Execution plan templates with phase gates',
        '03_ACTIVE_ESCALETAS: Running execution plans with real-time state',
        '04_GLOBAL_RULES: System-wide operational protocols and governance',
        '05_HANDOFFS: Context transfer protocols and project initialization',
        '06_PROJECT_INDEX: Project registry with domain boundaries',
        '07_LOGS: Execution accountability logs',
        '08_BACKUPS: System reliability and recovery',
        '09_SYNCHRONIZATION: Cross-system sync manifests',
      ]),
      architecture: 'Agent Pipeline: Architect → TechnicalSpecialist → Closer → TacticalTranslator. Each agent receives bounded scope, explicit folder targets, architecture rules, naming conventions, and phase-appropriate permissions. Mandatory dry-run before any execution.',
      sortOrder: 2,
      isPublished: true,
    },
    {
      slug: 'sugarcube-doctrine',
      name: 'Knowledge Systems',
      tagline: 'Semantic compression and knowledge architecture',
      description: 'A formal methodology for extracting, validating, and compressing knowledge from raw AI sessions into reusable, citable units. Implements an 11-subsystem architecture with versioned doctrine snapshots, lineage tracking, evidence-gated promotion, and AI-readable orchestration planes.',
      status: 'ACTIVE',
      category: 'Knowledge Architecture',
      features: JSON.stringify([
        'Canonical Pipeline: Raw Sessions → Candidate Units → Grains → Cubes → Promoted Doctrine',
        'Never-Destructive: New versions and delta entries, never overwrites',
        'Evidence-Gated: Missing evidence explicitly marked, never assumed',
        'AI-Readable: Structured orchestration planes with agent assignments',
        'Versioned Source of Truth: Ancestry tracking and amendment protocols',
        'Local-First: Doctrine lives on disk, cloud is sync/backup',
      ]),
      architecture: '11-subsystem map: CANON → SOURCE_OF_TRUTH → RAW_SESSIONS → GRAINS → SUGARCUBES → MEDIA_CORPUS → ESCALATA → AI_RULESETS → PORTFOLIO → SYNCHRONIZATION → AUTOMATIONS',
      sortOrder: 3,
      isPublished: false,
    },
    {
      slug: 'ai-orchestration',
      name: 'AI Orchestration Stack',
      tagline: 'Multi-AI coordination with formal governance',
      description: 'Custom-built coordination protocols for orchestrating work across multiple AI platforms simultaneously. Implements explicit handshake/continuity sheets, role-specific rulesets, and a 6-level institutional hierarchy with formal authority delegation and scope boundaries.',
      status: 'ACTIVE',
      category: 'AI Governance',
      features: JSON.stringify([
        '14+ GPT distributed taskforce with role sequencing',
        'Tesseract State-Sync for cross-platform continuity',
        'AI Handshake protocols for context transfer',
        '6-level institutional authority hierarchy',
        'Non-root rule: No project treats itself as the root of all projects',
        'Operational realism: NOW/PILOT/FUTURE tagging on every claim',
      ]),
      architecture: 'Shane → SuperNova → Control Tower → Shipyard → PsyNova → SugarCube/Institute. Each level has explicit authority delegation, non-root rules, and scope boundaries.',
      sortOrder: 4,
      isPublished: false,
    },
  ];

  for (const sys of systems) {
    await prisma.system.upsert({
      where: { slug: sys.slug },
      update: sys,
      create: sys,
    });
  }

  // Seed Case Files
  await prisma.caseFile.upsert({
    where: { slug: 'qpc-virtual-clinic' },
    update: {},
    create: {
      title: 'QPC Virtual Clinic',
      slug: 'qpc-virtual-clinic',
      subtitle: 'Healthcare digital transformation under regulatory complexity',
      problem: 'A Quebec-based healthcare practice needed a virtual clinic platform that could handle patient intake, scheduling, and professional workflows while maintaining strict compliance with Quebec Law 25 and PIPEDA privacy regulations. Existing tools were fragmented — creating a 6+ hour weekly administrative burden.',
      constraints: 'Regulated healthcare environment (Quebec Law 25, PIPEDA). Bilingual requirements (EN/FR). Must integrate with existing professional workflows without disruption. Budget constraints of a small clinical operation. Zero tolerance for patient data exposure.',
      analysis: 'Mapped the clinic\'s operational workflows and identified three critical fragmentation points: intake-to-scheduling handoff, documentation-to-billing pipeline, and cross-provider communication. Analyzed compliance requirements against available infrastructure options. Identified that the administrative fragmentation tax was consuming approximately 30% of available professional capacity.',
      design: 'Applied the PsyNova CoreSpine architecture as the operational backbone. Implemented a Thick Compliance Wrapper for healthcare-specific regulatory shields. Designed role-based interfaces for administrators, healthcare professionals, and patients. Built bilingual (EN/FR) surfaces throughout. Used progressive disclosure to keep the patient-facing layer simple while maintaining operational depth for practitioners.',
      results: 'Delivered a functional virtual clinic platform with integrated intake, scheduling, and professional dashboards. Estimated administrative time recovery of 4-6 hours per week per provider. Full Law 25 and PIPEDA compliance architecture. Bilingual patient-facing interface. Currently in active pilot with iterative refinement based on operational feedback.',
      lessons: 'Regulatory complexity is not a bolt-on concern — it must be architectural. The 3-layer approach (Spine → Wrapper → Interface) proved essential for maintaining clean separation between operational logic and compliance requirements. Healthcare professionals value operational clarity over feature density. Bilingual systems require thinking in both languages from the architecture level, not just the UI layer.',
      status: 'PUBLISHED',
      category: 'Healthcare',
      tags: 'healthcare,compliance,law-25,pipeda,bilingual,virtual-clinic',
      isPublished: true,
      sortOrder: 1,
    },
  });

  await prisma.caseFile.upsert({
    where: { slug: 'control-tower-design' },
    update: {},
    create: {
      title: 'Control Tower Architecture',
      slug: 'control-tower-design',
      subtitle: 'Building a 10-subsystem execution orchestration framework',
      problem: 'Complex multi-project execution environments collapse under coordination load, not lack of talent. Needed a formal system to coordinate humans, local AIs, and cloud AIs across multiple simultaneous projects with explicit governance, accountability, and context continuity.',
      constraints: 'Must work across multiple AI platforms (ChatGPT, Gemini, NotebookLM, Grok, Cursor). Must maintain coherence across machine switches and session interruptions. Cannot rely on any single AI\'s memory. Must enforce operational discipline without creating bureaucratic overhead.',
      analysis: 'Studied execution failures across previous projects and identified four recurring collapse patterns: context loss during handoffs, scope creep without governance gates, agent role confusion leading to conflicting outputs, and synchronization drift between local and cloud state.',
      design: 'Created a 10-subsystem numbered architecture (00-09) with explicit separation of concerns. Implemented agent pipeline sequencing (Architect → TechnicalSpecialist → Closer → TacticalTranslator). Each subsystem owns a specific operational domain. All agents receive bounded scope documents with folder targets, naming conventions, and phase-appropriate permissions. Mandatory dry-run gate before any execution phase.',
      results: 'Operational framework actively coordinating multiple simultaneous projects. Eliminated context loss through formal handoff protocols. Reduced coordination overhead through explicit agent role sequencing. Enabled reliable multi-AI workflows where each platform operates within defined boundaries. Framework itself serves as portfolio-quality systems architecture evidence.',
      lessons: 'Governance is not overhead — it is infrastructure. The numbered subsystem approach (00-09) creates natural mnemonic structure that reduces cognitive load. Agent sequencing must be explicit, not emergent. The dry-run gate catches approximately 40% of potential execution errors before they propagate. The system that manages the work IS the proof of work.',
      status: 'PUBLISHED',
      category: 'Systems Architecture',
      tags: 'orchestration,ai-governance,pmo,execution,systems-architecture',
      isPublished: false,
      sortOrder: 2,
    },
  });

  // Seed Now Items
  const nowItems = [
    { content: 'Operational AI systems — multi-agent orchestration and governance protocols', category: 'Engineering', sortOrder: 1 },
    { content: 'PsyNova CoreSpine development — healthcare compliance wrapper refinement', category: 'Product', sortOrder: 2 },
    { content: 'Workflow intelligence systems — execution architecture for complex organizations', category: 'Architecture', sortOrder: 3 },
    { content: 'Deployment hardening — infrastructure stabilization and operational transparency', category: 'Operations', sortOrder: 4 },
    { content: 'Multilingual operational tooling — EN/FR/ES surface development', category: 'Engineering', sortOrder: 5 },
    { content: 'PM architecture — Control Tower subsystem refinement and documentation', category: 'Documentation', sortOrder: 6 },
  ];

  for (const item of nowItems) {
    const existing = await prisma.nowItem.findFirst({ where: { content: item.content } });
    if (!existing) {
      await prisma.nowItem.create({ data: { ...item, isActive: true } });
    }
  }

  // Seed Lab Projects
  const labProjects = [
    {
      slug: 'shipyard-runtime',
      title: 'ShipYard Runtime',
      description: 'Experimental runtime environment for operational prototypes. Python-based development toolkit with CLI scripts, virtual environment management, and machine-agnostic bootstrap. Serves as the build zone for testing new system components before promotion to production infrastructure.',
      status: 'ACTIVE',
      techStack: 'Python, Cloudflare Workers, CLI tooling',
      isPublished: true,
      sortOrder: 1,
    },
    {
      slug: 'tesseract-state-sync',
      title: 'Tesseract State-Sync',
      description: 'Cross-platform AI state synchronization protocol. Maintains continuity across ChatGPT, Gemini, NotebookLM, and Cursor sessions. Implements handshake verification, context checksums, and role-aware state transfer.',
      status: 'EXPERIMENTAL',
      techStack: 'Protocol design, Multi-AI coordination',
      isPublished: false,
      sortOrder: 2,
    },
    {
      slug: 'estafeta-framework',
      title: 'Estafeta Framework',
      description: 'Zero-alternation machine environment abstraction. Enables seamless project execution across multiple development machines without configuration drift. Implements .machine_env detection, symlink management, and rclone mount synchronization.',
      status: 'EXPERIMENTAL',
      techStack: 'Shell scripting, rclone, symlinks',
      isPublished: false,
      sortOrder: 3,
    },
  ];

  for (const project of labProjects) {
    await prisma.labProject.upsert({
      where: { slug: project.slug },
      update: project,
      create: project,
    });
  }

  console.log('Seed completed successfully.');
}

main()
  .catch((e: any) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });