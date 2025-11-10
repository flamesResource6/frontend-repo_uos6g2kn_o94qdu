import Spline from '@splinetool/react-spline'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  { title: 'Instant Onboarding', desc: 'Start accepting payments in minutes with a frictionless setup.', icon: CheckCircle2 },
  { title: 'Bank‑grade Security', desc: 'Your data is protected with modern encryption and best practices.', icon: CheckCircle2 },
  { title: 'Smart Analytics', desc: 'Understand your business with clean, real‑time dashboards.', icon: CheckCircle2 },
  { title: 'Global Scale', desc: 'Built to handle growth from day one with robust infrastructure.', icon: CheckCircle2 },
]

const testimonials = [
  { quote: 'SoftBanking streamlined our checkout and boosted conversions by 22%.', author: 'Ava Martinez' },
  { quote: 'We launched in a weekend. The UI is gorgeous and our team loves it.', author: 'Noah Johnson' },
  { quote: 'The analytics alone pay for the product. Highly recommend.', author: 'Mia Chen' },
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-indigo-50 to-cyan-50">
      <Navbar />
      {/* Hero */}
      <section className="relative pt-24 lg:pt-28">
        <div className="absolute inset-0 h-[560px]">
          <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl pt-20 pb-16">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
              Modern digital banking for ambitious teams
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-600">
              Manage payments, payouts, and financial ops in one pastel‑clean platform.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/signup" className="px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700">
                Get Started
              </Link>
              <a href="#features" className="px-6 py-3 rounded-md bg-white text-slate-700 font-semibold border border-slate-200 hover:border-slate-300">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <f.icon className="text-indigo-600" />
                <h3 className="mt-3 font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
                <p className="text-slate-700">“{t.quote}”</p>
                <p className="mt-4 text-sm font-medium text-slate-500">— {t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900">Ready to move money smarter?</h2>
          <p className="mt-2 text-slate-600">Join thousands of teams streamlining finance with SoftBanking.</p>
          <Link to="/signup" className="inline-flex mt-6 px-6 py-3 rounded-md bg-indigo-600 text-white font-semibold hover:bg-indigo-700">Get Started</Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
