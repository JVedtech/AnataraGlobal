import { Link } from 'wouter'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  FileText,
  Globe,
  GraduationCap,
  Handshake,
  Landmark,
  Lightbulb,
  LineChart,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Scale,
  FileCheck,
  UserPlus,
  Layers,
} from 'lucide-react'

const ecosystemFlow = ['Incorporation', 'Strategy & Legal', 'Valuation & Readiness', 'Capital & Mandates', 'Scale']

const serviceCards = [
  {
    icon: Target,
    title: 'Strategic Business Advisory & Growth Planning',
    eyebrow: 'Strategy & Foundation',
    desc: 'Helping organizations build institutional-grade foundations, validate economic moats, and execute scalable market penetration strategies.',
    items: [
      'Business Model Canvas & Validation',
      'Go-To-Market (GTM) Strategy',
      'Market Positioning & Competitive Moats',
      'Operational Excellence & Scale Frameworks',
      'Business Transformation Advisory',
      'Expansion & International Scaling',
    ],
    accent: 'emerald',
    highlight: 'Foundation for sustainable scaling.',
  },
  {
    icon: Building2,
    title: 'Company Registration & Corporate Structuring',
    eyebrow: 'Incorporation & Compliance',
    desc: 'End-to-end entity incorporation, regulatory licensing, and corporate governance architectures tailored for venture-backed companies.',
    items: [
      'Private Limited (Pvt Ltd) & LLP Registration',
      'Delaware (US) C-Corp Flipping & Cross-Border Setup',
      'DPIIT Startup India Recognition & Tax Exemptions',
      'Secretarial & Statutory Corporate Setup',
      'Regulatory Licensing & Banking Architecture',
      'Founder Board & Governance Charters',
    ],
    accent: 'gold',
    highlight: 'Clean, venture-ready corporate structure.',
  },
  {
    icon: Scale,
    title: 'Legal & Equity Advisory',
    eyebrow: 'Equity & Contracts',
    desc: 'Engineering equitable capitalization tables, founder vesting frameworks, and protecting governance rights across every financing round.',
    items: [
      'Cap Table Structuring & Dilution Simulation',
      'Founder Vesting & Reverse Vesting Agreements',
      'ESOP Pool Formulation & Plan Administration',
      'Term Sheet, SHA, SSA & SAFE Note Advisory',
      'IP Assignment & Non-Disclosure Frameworks',
      'Minority Protection & Voting Rights Advisory',
    ],
    accent: 'emerald',
    highlight: 'Zero cap table conflict guarantee.',
  },
  {
    icon: LineChart,
    title: 'Startup Valuation & Financial Modeling',
    eyebrow: 'Valuation & Modeling',
    desc: 'Institutional valuation defensibility combining early-stage heuristics with growth-stage discounted cash flow (DCF) and market multiples.',
    items: [
      'Pre-Revenue & Seed Valuation (Berkus, Scorecard, VC Method)',
      'Growth-Stage DCF & Precedent Transaction Multiples',
      'Dynamic 3-to-5 Year Integrated Financial Projections',
      'Unit Economics, CAC/LTV & Payback Period Modeling',
      'Burn Multiple, Runway & Cash Flow Sensitivity Analysis',
      'Audit-Ready Valuation Certificates & Reports',
    ],
    accent: 'gold',
    highlight: 'Institutional valuation defensibility.',
  },
  {
    icon: FileCheck,
    title: 'Due Diligence & Audit Preparedness',
    eyebrow: 'Audit Readiness',
    desc: 'Preparing founders for ruthless institutional investor scrutinies through rigorous pre-due diligence audits and organized data rooms.',
    items: [
      'Virtual Data Room (VDR) Architecture & Management',
      'Comprehensive Financial, Legal, Tax & IP Diligence',
      'Cap Table, Employment & Contract Pre-Audit',
      'Pre-Investment Red Flag Identification & Remediation',
      'Compliance & Statutory Regulatory Audit Readiness',
      'Fast-Track 48-Hour Diligence Query Resolution Support',
    ],
    accent: 'emerald',
    highlight: '10x faster investor due diligence closing.',
  },
  {
    icon: UserPlus,
    title: 'Co-Founder Search & Executive Leadership Matching',
    eyebrow: 'Talent & Team Alignment',
    desc: 'Pairing visionary founders with complementary co-founders and strategic C-suite executives to build unstoppable leadership squads.',
    items: [
      'Technical, Commercial & Operational Co-Founder Search',
      'Founder Personality & Complementary Skill Assessment',
      'Founder-to-Founder Equity Split & Vesting Frameworks',
      'Advisory Board Formulation & Expert Matching',
      'Fractional C-Suite Leadership (CFO, CTO, CMO)',
      'Leadership Retention & Incentive Structuring',
    ],
    accent: 'gold',
    highlight: 'Complementary talent for exponential execution.',
  },
  {
    icon: CircleDollarSign,
    title: 'Fundraising Support & Funding Mandate Services',
    eyebrow: 'Capital Sourcing',
    desc: 'Dedicated fundraising representation from pitch narrative formulation to exclusive round syndication and term sheet closing.',
    items: [
      'Institutional Pitch Deck & One-Page Teaser Crafting',
      'Exclusive Funding Mandate Advisory & Round Leadership',
      'Targeted Investor Syndicate Roadshow Coordination',
      'Live Pitch Coaching & Mock Partner Diligence',
      'Term Sheet Negotiation & Valuation Defense',
      'Transaction Closing Coordination & Escrow Facilitation',
    ],
    accent: 'emerald',
    highlight: 'End-to-end deal mandate execution.',
  },
  {
    icon: Handshake,
    title: 'Venture Partner Opportunities & Capital Ecosystem',
    eyebrow: 'Venture Network',
    desc: 'Unlocking deep capital networks, venture partner scout alliances, and multi-tier institutional relationships across the globe.',
    items: [
      'Venture Partner Scout Alliances & Co-Investment Deals',
      'Direct Introductions to 150+ VCs & Family Offices',
      'Angel Syndicate & High-Net-Worth Network Access',
      'Venture Debt, NBFC & Non-Dilutive Capital Access',
      'Cross-Border Capital Pathways & Strategic Corporate LP Funds',
      'Post-Funding Governance & Follow-on Round Support',
    ],
    accent: 'gold',
    highlight: '$80M+ capital connectivity network.',
  },
]

const capitalNetwork = [
  { icon: Users, label: 'Individual Investors' },
  { icon: Users, label: 'Angel Investors' },
  { icon: Network, label: 'Angel Networks' },
  { icon: LineChart, label: 'Venture Capital Firms' },
  { icon: Building2, label: 'Family Offices' },
  { icon: Target, label: 'Strategic Investors' },
  { icon: ShieldCheck, label: 'Corporate Investors' },
  { icon: Landmark, label: 'Institutional Investors' },
  { icon: Briefcase, label: 'NBFCs & Debt Funds' },
  { icon: Building2, label: 'Lending Institutions' },
  { icon: Globe, label: 'Alternative Funding Platforms' },
  { icon: Layers, label: 'Venture Scouts & Partners' },
]

const msmeServices = [
  'Growth Strategy & Financial Preparedness',
  'Company Incorporation & Entity Restructuring',
  'Startup Valuation & Financial Modeling',
  'Legal & Equity Advisory (Cap Table & ESOPs)',
  'Due Diligence & Data Room Organization',
  'Co-Founder & Executive Search',
  'Funding Mandate Services & Roadshow Prep',
  'Venture Partner & Institutional Capital Sourcing',
]

const knowledgePrograms = [
  { icon: Lightbulb, label: 'Founder Growth Bootcamps' },
  { icon: BookOpen, label: 'Fundraising Playbook Masterclasses' },
  { icon: Users, label: 'Co-Founder Matching Mixers' },
  { icon: Globe, label: 'Startup Valuation Webinars' },
  { icon: GraduationCap, label: 'Legal & Equity Advisory Clinics' },
  { icon: FileText, label: 'Due Diligence VDR Frameworks' },
  { icon: Sparkles, label: 'Venture Partner Pitch Days' },
]

const partnerCategories = [
  {
    icon: FileText,
    title: 'Financial & Valuation Experts',
    items: ['Chartered Accountants', 'Certified Valuation Analysts', 'Financial Modelers'],
  },
  {
    icon: ShieldCheck,
    title: 'Legal, Incorporation & Equity',
    items: ['Venture Attorneys', 'Company Secretaries', 'Cap Table Specialists'],
  },
  {
    icon: TrendingUp,
    title: 'Growth & Talent Partners',
    items: ['Co-Founder Matchmakers', 'Fractional C-Suite', 'Industry Mentors'],
  },
  {
    icon: Handshake,
    title: 'Venture & Capital Partners',
    items: ['Venture Capital Funds', 'Family Offices', 'Angel Syndicates', 'Debt Funds'],
  },
]

export default function Services() {
  return (
    <>
      <section className="relative min-h-[82vh] overflow-hidden pt-28 pb-16" style={{ backgroundColor: '#FFF8F2' }}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold border text-white" style={{ backgroundColor: '#000000', borderColor: '#000000' }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Comprehensive Founder Services
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: '#31274F' }}
            >
              <span>Strategic Advisory.</span><br />
              <span>Capital Readiness.</span><br />
              <span className="text-[#FD7C06]">Exponential Scale.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
              style={{ color: 'rgba(0,0,0,0.65)' }}
            >
              Capvanta empowers high-growth founders and businesses from company registration and startup valuation to equity structuring, co-founder search, due diligence, and exclusive funding mandates.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold border-2 border-black shadow-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#FFFFFF', color: '#000000' }}
              >
                Book Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/knowledge"
                className="inline-flex items-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#31274F' }}
              >
                Explore Knowledge Hub
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="lg:col-span-6"
          >
            <div className="relative mx-auto max-w-xl rounded-3xl p-5 sm:p-7 shadow-2xl overflow-hidden border" style={{ backgroundColor: '#FFF8F2', borderColor: 'rgba(0,0,0,0.15)' }}>
              <div className="relative rounded-2xl p-5 border" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.15)' }}>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: 'rgba(0,0,0,0.5)' }}>Ecosystem Flow</p>
                    <h2 className="mt-1 text-xl font-extrabold" style={{ color: '#31274F' }}>From foundation to funding</h2>
                  </div>
                  <Network className="h-8 w-8" style={{ color: '#31274F' }} />
                </div>
                <div className="space-y-3">
                  {ecosystemFlow.map((item, index) => (
                    <div key={item} className="grid grid-cols-[2.5rem_1fr] items-center gap-3">
                      <div className="relative flex justify-center">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xs font-black border z-10" style={{ color: '#31274F', borderColor: 'rgba(0,0,0,0.15)' }}>
                          0{index + 1}
                        </div>
                        {index < ecosystemFlow.length - 1 && (
                          <div className="absolute top-10 h-6 w-0.5 bg-black/10" />
                        )}
                      </div>
                      <div className="rounded-xl border p-3 font-semibold text-sm" style={{ backgroundColor: '#FFF8F2', borderColor: 'rgba(0,0,0,0.08)', color: '#000000' }}>
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: '#FFF8F2' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold border text-white" style={{ backgroundColor: '#000000', borderColor: '#000000' }}>Full Service Directory</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: '#31274F' }}>
              Integrated Advisory For The Entire Founder Lifecycle
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(0,0,0,0.6)' }}>
              We eliminate execution friction across legal incorporation, startup valuation, equity advisory, co-founder recruitment, due diligence readiness, and funding mandates.
            </p>
          </motion.div>

          <div className="space-y-6">
            {serviceCards.map((card, index) => {
              const Icon = card.icon

              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative overflow-hidden rounded-3xl border shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.1)' }}
                >
                  <div className="absolute left-0 top-0 h-full w-1.5" style={{ backgroundColor: '#31274F' }} />
                  <div className="grid gap-0 lg:grid-cols-[0.9fr_1.35fr]">
                    <div className="relative border-b p-7 lg:border-b-0 lg:border-r lg:p-9" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.1)' }}>
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border" style={{ backgroundColor: '#31274F', borderColor: '#31274F' }}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-[#FD7C06]">
                        {card.eyebrow}
                      </span>
                      <h3 className="mt-3 text-2xl font-extrabold tracking-tight" style={{ color: '#31274F' }}>
                        {card.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-black/65">
                        {card.desc}
                      </p>
                      {card.highlight && (
                        <div className="mt-6 rounded-2xl border px-4 py-3 text-xs font-bold" style={{ backgroundColor: 'rgba(49,39,79,0.06)', borderColor: 'rgba(49,39,79,0.15)', color: '#31274F' }}>
                          ✓ {card.highlight}
                        </div>
                      )}
                    </div>

                    <div className="p-7 lg:p-9 flex flex-col justify-center">
                      <div className="grid gap-3 sm:grid-cols-2">
                        {card.items.map((item) => (
                          <div key={item} className="flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold" style={{ backgroundColor: '#FFF8F2', borderColor: 'rgba(0,0,0,0.08)', color: '#000000' }}>
                            <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: '#31274F' }} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capital Connectivity Section */}
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: '#FFF8F2' }}>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold border text-white" style={{ backgroundColor: '#000000', borderColor: '#000000' }}>Capital Ecosystem Access</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: '#31274F' }}>
                Connecting High-Potential Ventures With Global Capital
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(0,0,0,0.65)' }}>
                Through exclusive funding mandates and venture partner alliances, Capvanta connects investment-ready startups with top-tier venture capital, family offices, and strategic angel networks.
              </p>
              <div className="mt-8 rounded-2xl border p-5" style={{ backgroundColor: 'rgba(49,39,79,0.05)', borderColor: 'rgba(49,39,79,0.15)' }}>
                <p className="text-xs leading-relaxed text-black/70">
                  <strong className="text-black">Regulatory Transparency:</strong> Capvanta acts as a strategic venture advisory and readiness accelerator. We support founders in becoming audit-proof, investment-ready, and directly introduced to appropriate ecosystem participants.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative mx-auto max-w-2xl rounded-3xl border-2 p-5 shadow-xl sm:p-8 lg:flex lg:min-h-[560px] lg:items-center lg:justify-center" style={{ backgroundColor: '#FFFFFF', borderColor: '#000000' }}>
                <div className="absolute inset-8 hidden rounded-full border border-dashed lg:block" style={{ borderColor: '#31274F', opacity: 0.3 }} />
                <div className="absolute inset-20 hidden rounded-full border border-dashed lg:block" style={{ borderColor: '#FD7C06', opacity: 0.2 }} />
                <div className="relative z-10 mx-auto flex h-40 w-40 flex-col items-center justify-center rounded-full border-2 text-center shadow-2xl" style={{ backgroundColor: '#31274F', borderColor: '#31274F' }}>
                  <img src="/logo-white.png" alt="Capvanta" className="h-14 w-auto object-contain" />
                </div>

                <div className="relative z-10 mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:absolute lg:inset-8 lg:mt-0 lg:content-between">
                  {capitalNetwork.map((item, index) => {
                    const Icon = item.icon
                    const alignRight = index % 2 === 1

                    return (
                      <div key={item.label} className={`flex ${alignRight ? 'lg:justify-end' : 'lg:justify-start'}`}>
                        <div className="flex max-w-[11.5rem] items-center gap-2 rounded-2xl border px-3 py-2 text-xs font-semibold shadow-md" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.1)', color: '#000000' }}>
                          <Icon className="h-3.5 w-3.5 shrink-0" style={{ color: '#31274F' }} />
                          <span>{item.label}</span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MSME & Knowledge Section */}
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: '#FFF8F2' }}>
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border p-7 shadow-xl sm:p-9" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.12)' }}
          >
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: '#000000' }}>Tailored Solutions</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight flex items-center gap-3" style={{ color: '#000000' }}>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border" style={{ backgroundColor: '#31274F', borderColor: '#31274F' }}>
                <Building2 className="h-5 w-5 text-white" />
              </div>
              MSME & Growth Advisory
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-black/60">
              Assisting traditional businesses and growth enterprises to achieve venture readiness, debt optimization, and governance excellence.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {msmeServices.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.1)', color: '#000000' }}>
                  <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: '#31274F' }} />
                  {item}
                </div>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl border p-7 shadow-xl sm:p-9" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.12)' }}
          >
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ backgroundColor: '#000000' }}>Knowledge & Awareness</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight flex items-center gap-3" style={{ color: '#000000' }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border" style={{ backgroundColor: '#31274F', borderColor: '#31274F' }}>
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                Knowledge Hub & Masterclasses
              </h2>
              <p className="mt-2 text-sm font-semibold text-[#FD7C06]">By a founder, for founders</p>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-black/60">
                Capvanta democratizes startup finance, valuation methods, and deal mechanics through interactive blogs, founder bootcamps, and executive roundtables.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {knowledgePrograms.map((program) => {
                  const ProgramIcon = program.icon

                  return (
                    <div key={program.label} className="flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.1)', color: '#000000' }}>
                      <ProgramIcon className="h-4 w-4 shrink-0" style={{ color: '#31274F' }} />
                      {program.label}
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Strategic Partners Network */}
      <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: '#FFF8F2' }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-white" style={{ backgroundColor: '#000000' }}>Strategic Partnership Network</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ color: '#31274F' }}>
              Uniting Top Legal, Financial & Venture Experts
            </h2>
            <p className="mt-4 text-base leading-relaxed text-black/60">
              Capvanta collaborates with premier specialists to deliver comprehensive support across every critical growth pillar.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partnerCategories.map((category, index) => {
              const CategoryIcon = category.icon

              return (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative overflow-hidden rounded-3xl border p-7 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.12)' }}
                >
                  <div className="absolute left-0 top-0 h-1 w-full" style={{ backgroundColor: '#31274F' }} />
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(0,0,0,0.12)', color: '#31274F' }}>
                    <CategoryIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-extrabold" style={{ color: '#000000' }}>{category.title}</h3>
                  <ul className="mt-5 space-y-3 border-t pt-5" style={{ borderColor: 'rgba(0,0,0,0.1)' }}>
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm font-medium" style={{ color: 'rgba(0,0,0,0.6)' }}>
                        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: '#31274F' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
