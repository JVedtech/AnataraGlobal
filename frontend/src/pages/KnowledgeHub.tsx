import { motion } from 'framer-motion'
import { Link } from 'wouter'
import {
  ArrowRight, Sparkles, BookOpen, FileText, Monitor,
  Users, Globe, GraduationCap, Lightbulb, Clock
} from 'lucide-react'
import ResourcesSection from '../components/about/ResourcesSection'
import BrandClosingCTA from '../components/about/BrandClosingCTA'
import ContactSection from '../components/about/ContactSection'
import { blogsData } from '../data/blogsData'

const knowledgeCategories = [
  {
    icon: BookOpen,
    title: 'Resources & Insights',
    items: [
      { label: 'Published Blogs & Playbooks', href: '/blogs' },
      { label: 'Valuation & Modeling Guides', href: '/blogs' },
      { label: 'Fundraising Pitch Deck Templates', href: '/blogs' },
      { label: 'Cap Table & ESOP Blueprints', href: '/blogs' },
      { label: 'Due Diligence VDR Checklists', href: '/blogs' },
    ],
  },
  {
    icon: Lightbulb,
    title: 'Events & Masterclasses',
    items: [
      { label: 'Founder Bootcamps', href: '/contact' },
      { label: 'Valuation Masterclasses', href: '/contact' },
      { label: 'Investor Roadshow Clinics', href: '/contact' },
      { label: 'Due Diligence Workshops', href: '/contact' },
      { label: 'Venture Partner Roundtables', href: '/contact' },
    ],
  },
]

export default function KnowledgeHub() {
  const featuredBlogs = blogsData.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden pt-28 pb-16" style={{ backgroundColor: '#FFF8F2' }}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#31274F' }} />
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#FD7C06' }} />
        </div>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#31274F] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold border mb-6"
              style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(49,39,79,0.2)', color: '#31274F' }}
            >
              <Sparkles className="h-3.5 w-3.5 text-[#FD7C06]" />
              Capvanta Knowledge Hub
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
              style={{ color: '#31274F' }}
            >
              Strategic Insights<br />
              <span className="text-[#FD7C06]">
                By a founder, for founders
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-black/60 font-medium"
            >
              Democratizing startup finance, early-stage valuation, and deal execution
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-2 text-sm sm:text-base text-black/75 leading-relaxed max-w-xl"
            >
              Capvanta empowers high-growth founders and executives with actionable research, valuation frameworks, fundraising playbooks, and equity advisory insights.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white shadow-lg transition-all duration-300 hover:scale-105"
                style={{ backgroundColor: '#31274F' }}
              >
                <span>Read Published Blogs</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white border border-black/15 text-black shadow-md transition-all duration-300 hover:scale-105"
              >
                Schedule an Advisory Session
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="relative py-20 bg-white overflow-hidden border-y border-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FD7C06]">Curated Playbooks</span>
              <h2 className="text-3xl font-black text-black mt-1">Featured Articles & Guides</h2>
              <p className="text-sm text-black/60 mt-1">Deep dives into fundraising mechanics, startup valuation, and company scale.</p>
            </div>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#31274F] hover:text-[#FD7C06] transition-colors"
            >
              <span>Explore all articles</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="flex flex-col justify-between rounded-3xl border bg-[#FFF8F2] p-7 shadow-md hover:shadow-xl transition-all duration-300"
                style={{ borderColor: 'rgba(49,39,79,0.1)' }}
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-black/50 mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-white border border-black/10 text-[10px] font-black uppercase text-[#31274F]">
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {blog.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-black leading-snug line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-xs text-black/65 mt-2 line-clamp-3 leading-relaxed">
                    {blog.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-black/70">{blog.author.name}</span>
                  <Link
                    href="/blogs"
                    className="text-xs font-black text-[#31274F] hover:text-[#FD7C06] inline-flex items-center gap-1"
                  >
                    Read <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Knowledge Categories */}
      <section className="relative py-24 lg:py-32 bg-[#FFF8F2] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {knowledgeCategories.map((cat, idx) => {
              const CatIcon = cat.icon
              return (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  className="rounded-3xl border border-black/10 bg-white p-8 shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#31274F] text-white">
                      <CatIcon className="h-7 w-7" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-black">{cat.title}</h2>
                  </div>
                  <ul className="space-y-3">
                    {cat.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="group flex items-center justify-between rounded-xl border border-black/10 bg-[#FFF8F2] px-5 py-3.5 hover:border-[#31274F] hover:shadow-md transition-all duration-200"
                        >
                          <span className="text-sm font-semibold text-black group-hover:text-[#31274F] transition-colors">
                            {item.label}
                          </span>
                          <ArrowRight className="h-4 w-4 text-black/30 group-hover:text-[#31274F] group-hover:translate-x-0.5 transition-all duration-200" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-[#FD7C06]">Masterclasses & Clinics</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
              Learn. Structure. Accelerate.
            </h2>
            <p className="mt-4 text-black/60 text-base leading-relaxed">
              Executive learning sessions designed specifically for tech founders, CFOs, and growth entrepreneurs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Monitor, label: 'Valuation Modeling Clinics', desc: 'Hands-on quantitative workshops on early-stage valuation heuristics and DCF models.' },
              { icon: Globe, label: 'Fundraising Roadshows', desc: 'Mastering investor psychological pacing, pipeline management, and lead partner dynamics.' },
              { icon: Users, label: 'Founder & Co-Founder Roundtables', desc: 'Navigating equity splits, founder agreements, and board governance structures.' },
              { icon: GraduationCap, label: 'Due Diligence VDR Academies', desc: 'Setting up audit-proof data rooms and eliminating diligence red flags before term sheets.' },
              { icon: Users, label: 'Venture Partner Panels', desc: 'Direct dialogue with top angel syndicates, micro-VCs, and family office principals.' },
              { icon: FileText, label: 'ESOP & Equity Workshops', desc: 'Designing talent-magnetic stock option pools without setting up cap table debt.' },
            ].map((prog, idx) => {
              const ProgIcon = prog.icon
              return (
                <motion.div
                  key={prog.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-[#FFF8F2] border border-black/10 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#31274F] text-white mb-4">
                    <ProgIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-extrabold text-black">{prog.label}</h3>
                  <p className="text-xs text-black/60 mt-2 leading-relaxed">{prog.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <ResourcesSection />
      <BrandClosingCTA />
      <ContactSection />
    </>
  )
}
