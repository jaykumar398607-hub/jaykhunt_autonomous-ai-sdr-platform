export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_40%),radial-gradient(circle_at_bottom,rgba(139,92,246,0.15),transparent_40%)] pointer-events-none"></div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-black/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Jaykumar Khunt
            </h1>
            <p className="text-gray-400 mt-1">AI GTM Engineer • RevOps Automation • Clay Expert</p>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="mailto:jaykhunt398607@gmail.com"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/10 transition"
            >
              📧 Email
            </a>

            <a
              href="https://linkedin.com/in/jk-398607"
              target="_blank"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/10 transition"
            >
              🔗 LinkedIn
            </a>

            <a
              href="tel:+916354337032"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-xl border border-white/10 transition"
            >
              📞 Call
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 text-cyan-300 mb-6">
              ⚡ Production Grade GTM Infrastructure Engineer
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Building
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                {' '}AI-Powered
              </span>
              <br />Outbound Systems
            </h2>

            <p className="text-xl text-gray-400 mt-8 leading-relaxed">
              I design autonomous GTM systems using Clay, Claude AI, n8n, Apollo, and HubSpot to automate prospecting, enrichment, personalization, and outbound workflows at scale.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#project"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl font-semibold hover:scale-105 transition"
              >
                View Project
              </a>

              <a
                href="mailto:jaykhunt398607@gmail.com"
                className="px-8 py-4 border border-white/20 rounded-2xl hover:bg-white/5 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full"></div>

            <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">AI SDR Dashboard</h3>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              <div className="space-y-6">
                <div className="bg-black/40 rounded-2xl p-5 border border-white/10">
                  <div className="flex justify-between mb-2">
                    <span>Leads Generated</span>
                    <span className="text-cyan-400 font-bold">5,000+</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[90%] h-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/40 rounded-2xl p-5 border border-white/10">
                    <p className="text-gray-400 text-sm">Reply Rate</p>
                    <h4 className="text-3xl font-bold text-cyan-400 mt-2">18%</h4>
                  </div>

                  <div className="bg-black/40 rounded-2xl p-5 border border-white/10">
                    <p className="text-gray-400 text-sm">Meetings Booked</p>
                    <h4 className="text-3xl font-bold text-purple-400 mt-2">45/mo</h4>
                  </div>
                </div>

                <div className="bg-black/40 rounded-2xl p-5 border border-white/10">
                  <p className="text-gray-400 mb-4">Automation Stack</p>
                  <div className="flex flex-wrap gap-3">
                    {['Clay', 'Claude AI', 'n8n', 'Apollo', 'HubSpot', 'Instantly'].map((tool) => (
                      <span
                        key={tool}
                        className="px-4 py-2 bg-white/10 rounded-xl text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section id="project" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Autonomous AI SDR Platform</h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              A production-grade GTM automation infrastructure designed to automate the complete outbound sales lifecycle using AI agents, enrichment pipelines, workflow orchestration, and CRM automation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Lead Sourcing',
                icon: '🎯',
                desc: 'Automatically sources ICP companies from Apollo and enriches them using Clay workflows.'
              },
              {
                title: 'AI Personalization',
                icon: '🤖',
                desc: 'Claude AI generates personalized outreach using LinkedIn activity, hiring signals, and company data.'
              },
              {
                title: 'Workflow Automation',
                icon: '⚙️',
                desc: 'n8n automates CRM sync, outreach sequences, notifications, and lead lifecycle management.'
              }
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 transition duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">System Architecture</h2>

          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-10 overflow-x-auto">
            <div className="flex flex-wrap items-center justify-center gap-4 text-center min-w-[1000px]">
              {[
                'Apollo Search',
                'Clay Enrichment',
                'LinkedIn + Website Scraping',
                'AI Qualification',
                'Lead Scoring',
                'Claude Personalization',
                'AI Email Generation',
                'HubSpot CRM Sync',
                'Instantly Campaign Launch',
                'Slack Alerts',
                'Meeting Booking'
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="bg-black/50 border border-white/10 rounded-2xl px-6 py-5 min-w-[180px] hover:border-cyan-500/50 transition">
                    <div className="text-cyan-400 text-sm mb-2">STEP {index + 1}</div>
                    <div className="font-semibold">{step}</div>
                  </div>
                  {index !== 10 && (
                    <div className="text-3xl text-cyan-400">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            {[
              {
                title: 'Clay Enrichment Engine',
                items: [
                  'Employee count enrichment',
                  'Funding data extraction',
                  'Tech stack detection',
                  'LinkedIn profile scraping',
                  'Job opening tracking',
                  'Founder information extraction'
                ]
              },
              {
                title: 'AI Qualification System',
                items: [
                  'AI lead scoring',
                  'Growth signal analysis',
                  'Outbound readiness detection',
                  'CRM maturity evaluation',
                  'Priority segmentation',
                  'Revenue potential scoring'
                ]
              },
              {
                title: 'Outbound Automation',
                items: [
                  'AI cold email generation',
                  'Personalized openers',
                  'Follow-up automation',
                  'CRM synchronization',
                  'Slack notifications',
                  'Sequence management'
                ]
              },
              {
                title: 'Advanced GTM Features',
                items: [
                  'Intent signal tracking',
                  'Competitor analysis',
                  'LinkedIn engagement analysis',
                  'Multi-channel outreach',
                  'AI workflow orchestration',
                  'Real-time automation triggers'
                ]
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  {feature.title}
                </h3>

                <div className="space-y-4">
                  {feature.items.map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-20">Performance Metrics</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ['5,000+', 'Leads Generated / Month'],
              ['18%', 'Reply Rate'],
              ['45+', 'Meetings Booked'],
              ['90%', 'Manual Work Reduced']
            ].map(([value, label]) => (
              <div
                key={label}
                className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-10"
              >
                <h3 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                  {value}
                </h3>
                <p className="text-gray-400 text-lg">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-20">Technical Stack</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: 'GTM Infrastructure',
                tools: ['Clay', 'Apollo', 'HubSpot', 'Instantly', 'Smartlead']
              },
              {
                title: 'Automation',
                tools: ['n8n', 'Zapier', 'Webhooks', 'API Integrations', 'Workflow Logic']
              },
              {
                title: 'AI Systems',
                tools: ['Claude AI', 'OpenAI APIs', 'Prompt Engineering', 'AI Agents', 'Lead Scoring Models']
              }
            ].map((category) => (
              <div
                key={category.title}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold mb-8">{category.title}</h3>

                <div className="flex flex-wrap gap-3">
                  {category.tools.map((tool) => (
                    <div
                      key={tool}
                      className="px-4 py-3 bg-black/40 border border-white/10 rounded-xl"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Resume Ready Project</h2>

          <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-white/10 rounded-3xl p-10 text-left">
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">
              Autonomous AI SDR Platform | Clay + Claude + n8n
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Built an AI-powered outbound infrastructure automating lead sourcing, enrichment, qualification, personalization, CRM sync, and outbound campaign management using Clay, Claude AI, and n8n.
            </p>

            <div className="space-y-4 text-gray-300">
              <div>• Built AI-driven outbound prospecting workflows using Clay and Apollo</div>
              <div>• Automated lead enrichment, qualification, and scoring using Claude AI</div>
              <div>• Designed personalized cold email generation systems using AI prompts</div>
              <div>• Integrated HubSpot CRM and Instantly for automated outbound execution</div>
              <div>• Developed n8n automations reducing manual prospecting work by 90%</div>
              <div>• Improved outbound efficiency using intent signal tracking systems</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Let’s Build AI-Powered GTM Systems
          </h2>

          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-10">
            I help startups and SaaS companies automate prospecting, enrichment, personalization, and outbound workflows using AI infrastructure and modern GTM systems.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:jaykhunt398607@gmail.com"
              className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition"
            >
              📧 jaykhunt398607@gmail.com
            </a>

            <a
              href="https://linkedin.com/in/jk-398607"
              target="_blank"
              className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition"
            >
              🔗 linkedin.com/in/jk-398607
            </a>

            <a
              href="tel:+916354337032"
              className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition"
            >
              📞 +91 6354337032
            </a>
          </div>

          <div className="mt-12 text-gray-500">
            © 2026 Jaykumar Khunt • AI GTM Engineer Portfolio
          </div>
        </div>
      </footer>
    </div>
  )
}
