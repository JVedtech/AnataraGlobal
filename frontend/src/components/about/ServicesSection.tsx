import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building2, LineChart, Briefcase, CheckCircle2, 
  ArrowRight, Sparkles, Scale
} from 'lucide-react'

const services = [
  {
    id: 'advisory',
    icon: Building2,
    title: 'Advisory & Incorporation',
    subtitle: 'Company Registration & Strategy',
    description: 'From company registration and DPIIT recognition to business model refinement and co-founder search, we build unshakeable foundations for ambitious founders.',
    benefits: [
      'Company Registration (Pvt Ltd, LLP, Delaware/C-Corp)',
      'Co-Founder Search & Executive Matching',
      'Go-To-Market (GTM) & Market Positioning',
      'Corporate Governance & Operational Strategy',
    ],
    metric: '100%',
    metricLabel: 'Statutory Compliance',
    primaryColor: 'var(--color-accent)',
    primaryFaded: 'rgba(0,128,129,0.15)',
  },
  {
    id: 'valuation',
    icon: LineChart,
    title: 'Valuation & Readiness',
    subtitle: 'Startup Valuation & Modeling',
    description: 'We calculate precise startup valuations (DCF, VC Method, Scorecard) and build institutional-grade 3-to-5 year financial models that withstand investor scrutiny.',
    benefits: [
      'Startup Valuation (Pre & Post-Money Methodologies)',
      'Dynamic 3-to-5 Year Integrated Financial Projections',
      'Professional Pitch Deck & Investor Teaser',
      'Unit Economics, CAC/LTV & Runway Optimization',
    ],
    metric: '10x',
    metricLabel: 'Faster Investor Review',
    primaryColor: 'var(--color-accent-light)',
    primaryFaded: 'rgba(51,181,181,0.15)',
  },
  {
    id: 'legal',
    icon: Scale,
    title: 'Legal & Due Diligence',
    subtitle: 'Equity, ESOPs & Audit Prep',
    description: 'We structure clean cap tables, design motivating ESOP pools, review shareholder agreements (SHA/SSA), and execute comprehensive investor due diligence readiness.',
    benefits: [
      'Legal & Equity Advisory (Cap Table & Vesting)',
      'ESOP Pool Formulation & Allocation Policies',
      'Virtual Data Room (VDR) & Diligence Prep',
      'Term Sheet, SAFE & SHA/SSA Contract Advisory',
    ],
    metric: '0',
    metricLabel: 'Diligence Red Flags',
    primaryColor: 'var(--color-accent)',
    primaryFaded: 'rgba(0,128,129,0.15)',
  },
  {
    id: 'fundraising',
    icon: Briefcase,
    title: 'Fundraising & Mandates',
    subtitle: 'Mandate Services & Venture Partners',
    description: 'We support businesses across their entire fundraising journey with exclusive funding mandates, venture partner alliances, and direct access to institutional capital.',
    benefits: [
      'Full-Lifecycle Fundraising Support & Roadshows',
      'Exclusive Funding Mandate Services',
      'Venture Partner Opportunities & Sourcing',
      'Warm Introductions to VC, Angels & Family Offices',
    ],
    metric: '$80M+',
    metricLabel: 'Capital Network Access',
    primaryColor: 'var(--color-accent-light)',
    primaryFaded: 'rgba(51,181,181,0.15)',
  },
]

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState('advisory')

  const currentService = services.find((s) => s.id === activeTab) || services[0]
  const IconComponent = currentService.icon

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Decorative Gradients */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-[0.04] blur-3xl" style={{ backgroundColor: 'var(--color-accent)' }} />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full opacity-[0.04] blur-3xl" style={{ backgroundColor: 'var(--color-accent-light)' }} />
      </div>

      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold border mb-4"
            style={{ backgroundColor: 'rgba(51,181,181,0.08)', borderColor: 'rgba(51,181,181,0.2)', color: 'var(--color-accent-light)' }}
          >
            <Sparkles className="h-3.5 w-3.5" />
            Comprehensive Advisory Suite
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
            style={{ color: '#FFFFFF' }}
          >
            Empowering Growth at Every Stage
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            From company registration and startup valuation to legal advisory, diligence readiness, and exclusive fundraising mandates.
          </motion.p>
        </div>

        {/* Tab Selection buttons */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          <div className="lg:w-1/3 flex flex-col gap-4 justify-center">
            {services.map((service) => {
              const ServiceIcon = service.icon
              const isActive = activeTab === service.id
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`group relative text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-white/[0.07] border-white/20'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10'
                  }`}
                >
                  {isActive && (
                    <motion.div 
                      layoutId="activeBorder" 
                      className="absolute inset-0 rounded-2xl border-2 pointer-events-none"
                      style={{ borderColor: service.primaryColor }}
                    />
                  )}
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                    isActive 
                      ? 'scale-105' 
                      : 'bg-white/5 border-white/10 text-white/50 group-hover:text-white/80 group-hover:border-white/20'
                  }`}
                    style={isActive ? { backgroundColor: service.primaryFaded, borderColor: service.primaryColor, color: service.primaryColor } : undefined}>
                    <ServiceIcon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold text-base transition-colors ${
                      isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                    }`}>
                      {service.title}
                    </h3>
                    <p className="text-xs mt-1 leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{service.subtitle}</p>
                  </div>
                  <ArrowRight className={`h-4 w-4 shrink-0 transition-transform duration-300 mt-1 ${
                    isActive ? 'translate-x-1' : 'text-white/20 group-hover:text-white/40'
                  }`} style={{ color: isActive ? service.primaryColor : undefined }} />
                </button>
              )
            })}
          </div>

          {/* Active Tab Details */}
          <div className="flex-1 lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full rounded-3xl border bg-white/[0.03] backdrop-blur-md p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden"
                style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              >
                {/* Background glow specific to card */}
                <div 
                  className="absolute -right-20 -top-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: currentService.primaryColor }}
                />

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div 
                      className="p-3 rounded-xl border flex items-center justify-center"
                      style={{ 
                        backgroundColor: currentService.primaryFaded,
                        borderColor: currentService.primaryColor,
                        color: currentService.primaryColor 
                      }}
                    >
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-widest uppercase" style={{ color: currentService.primaryColor }}>
                        {currentService.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                        {currentService.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg leading-relaxed text-white/70 mb-8 max-w-xl">
                    {currentService.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {currentService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                        <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: currentService.primaryColor }} />
                        <span className="text-sm font-medium text-white/90">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl sm:text-4xl font-black text-white">{currentService.metric}</span>
                    <span className="text-xs uppercase tracking-wider font-semibold text-white/50">{currentService.metricLabel}</span>
                  </div>

                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-white text-black transition-all duration-300 hover:scale-105 hover:bg-white/90"
                  >
                    <span>Request Service Consultation</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
