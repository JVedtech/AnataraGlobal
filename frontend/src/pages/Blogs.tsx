import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, BookOpen, Clock, Calendar, ArrowRight, X, 
  Sparkles, CheckCircle2, Share2, ArrowLeft, Tag
} from 'lucide-react'
import { blogsData, type BlogPost } from '../data/blogsData'

const categories = [
  'All',
  'Startup Growth',
  'Fundraising',
  'Valuation',
  'Business Strategy',
  'Entrepreneurship',
] as const

type CategoryType = typeof categories[number]

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null)
  const [copied, setCopied] = useState(false)

  const filteredPosts = useMemo(() => {
    return blogsData.filter((post) => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      const query = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.summary.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.takeaways.some((t) => t.toLowerCase().includes(query))
      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const handleShare = (_post: BlogPost) => {
    navigator.clipboard?.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen pt-28 pb-24 overflow-hidden" style={{ backgroundColor: '#FFF8F2' }}>
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#31274F' }} />
        <div className="absolute bottom-40 left-10 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#FD7C06' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold border mb-4"
            style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(49,39,79,0.15)', color: '#31274F' }}
          >
            <Sparkles className="h-3.5 w-3.5 text-[#FD7C06]" />
            Capvanta Knowledge Hub & Insights
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black tracking-tight"
            style={{ color: '#31274F' }}
          >
            Founder Insights & Strategic Playbooks
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-black/65 leading-relaxed"
          >
            Rigorous, actionable guidance on startup growth, early-stage fundraising, business valuation, unit economics, and cap table governance. Written by founders and venture advisors.
          </motion.p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-black/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles on valuation, term sheets, ESOPs, unit economics, growth..."
              className="w-full rounded-2xl border pl-12 pr-4 py-3.5 text-sm font-medium bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#31274F] transition-all"
              style={{ borderColor: 'rgba(0,0,0,0.1)' }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-black/40 hover:text-black"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border ${
                    isSelected
                      ? 'bg-[#31274F] text-white border-[#31274F] shadow-md scale-105'
                      : 'bg-white text-black/70 border-black/10 hover:border-black/20 hover:text-black'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-black/10 p-8 max-w-xl mx-auto">
            <BookOpen className="h-10 w-10 mx-auto text-black/30 mb-3" />
            <h3 className="text-lg font-bold text-black">No articles found</h3>
            <p className="text-sm text-black/60 mt-1">Try adjusting your search terms or selecting another category.</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery('') }}
              className="mt-4 px-4 py-2 bg-[#31274F] text-white rounded-xl text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="group flex flex-col justify-between rounded-3xl border bg-white p-7 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
                style={{ borderColor: 'rgba(49,39,79,0.1)' }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[11px] font-black uppercase tracking-wider bg-black/5 text-[#31274F]">
                      <Tag className="h-3 w-3 text-[#FD7C06]" />
                      {post.category}
                    </span>
                    <span className="text-xs font-semibold text-black/50 flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-black group-hover:text-[#31274F] transition-colors leading-snug">
                    {post.title}
                  </h3>

                  <p className="mt-3 text-sm text-black/65 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>

                  <div className="mt-4 pt-4 border-t border-black/5 space-y-1.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-black/40">Core Takeaway</p>
                    <p className="text-xs text-black/80 font-medium line-clamp-2">
                      • {post.takeaways[0]}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-black/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-[#31274F] text-white flex items-center justify-center text-xs font-bold">
                      {post.author.avatarInitials}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-black">{post.author.name}</p>
                      <p className="text-[10px] text-black/50">{post.author.role}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveArticle(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#31274F] hover:text-[#FD7C06] transition-colors group-hover:translate-x-0.5"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      {/* Full Article Reader Modal */}
      <AnimatePresence>
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArticle(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Reader Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 bg-[#FFF8F2]">
                <button
                  onClick={() => setActiveArticle(null)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-black/70 hover:text-black"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to all blogs</span>
                </button>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleShare(activeArticle)}
                    className="p-2 rounded-xl border border-black/10 hover:bg-black/5 text-black/60 hover:text-black transition-all text-xs flex items-center gap-1.5"
                    title="Share link"
                  >
                    <Share2 className="h-4 w-4" />
                    <span>{copied ? 'Copied!' : 'Share'}</span>
                  </button>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="p-2 rounded-xl hover:bg-black/5 text-black/60 hover:text-black transition-all"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Reader Body (Scrollable) */}
              <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-black/60 mb-3">
                    <span className="px-3 py-1 rounded-md bg-[#31274F] text-white text-[11px] font-bold uppercase tracking-wider">
                      {activeArticle.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {activeArticle.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {activeArticle.publishedAt}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-black leading-tight">
                    {activeArticle.title}
                  </h2>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-black/[0.02] border border-black/5">
                  <div className="h-11 w-11 rounded-full bg-[#31274F] text-white flex items-center justify-center font-bold text-sm">
                    {activeArticle.author.avatarInitials}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black">{activeArticle.author.name}</h4>
                    <p className="text-xs text-black/60">{activeArticle.author.role} • Capvanta Advisory</p>
                  </div>
                </div>

                {/* Executive Takeaways Box */}
                <div className="p-6 rounded-2xl border" style={{ backgroundColor: '#FFF8F2', borderColor: 'rgba(49,39,79,0.15)' }}>
                  <h4 className="text-xs font-black uppercase tracking-wider flex items-center gap-2 mb-3" style={{ color: '#31274F' }}>
                    <Sparkles className="h-4 w-4 text-[#FD7C06]" />
                    Executive Key Takeaways
                  </h4>
                  <ul className="space-y-2.5">
                    {activeArticle.takeaways.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-black/85">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#31274F] mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Full Article Content Paragraphs */}
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-black/80 font-normal border-t border-black/10 pt-6">
                  {activeArticle.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>

                {/* Bottom Call to Action */}
                <div className="p-6 rounded-2xl bg-[#31274F] text-white flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                  <div>
                    <h4 className="text-base font-bold">Have questions regarding this topic?</h4>
                    <p className="text-xs text-white/70 mt-0.5">Schedule a one-on-one session with our senior advisory team.</p>
                  </div>
                  <a
                    href="/contact"
                    className="px-5 py-2.5 bg-white text-black font-bold text-xs rounded-xl shrink-0 hover:bg-white/90 transition-all hover:scale-105"
                  >
                    Book Consultation
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
