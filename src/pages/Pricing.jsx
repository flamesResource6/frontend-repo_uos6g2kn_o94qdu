import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import * as Switch from '@radix-ui/react-switch'
import { useState } from 'react'

const tiers = [
  {
    name: 'Free',
    priceMonthly: 0,
    priceYearly: 0,
    features: ['Basic analytics', 'Community support', 'Up to 1,000 transactions'],
    cta: 'Start for free',
  },
  {
    name: 'Pro',
    priceMonthly: 29,
    priceYearly: 24,
    features: ['Advanced analytics', 'Priority support', 'Up to 50,000 transactions'],
    cta: 'Upgrade to Pro',
    featured: true,
  },
  {
    name: 'Enterprise',
    priceMonthly: 99,
    priceYearly: 79,
    features: ['Custom limits', 'Dedicated manager', 'SAML SSO'],
    cta: 'Contact sales',
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-cyan-50">
      <Navbar />
      <section className="pt-28 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">Simple, transparent pricing</h1>
          <p className="mt-3 text-slate-600">Save with annual billing.</p>

          <div className="mt-6 inline-flex items-center gap-3 bg-white border border-slate-200 rounded-full px-4 py-2">
            <span className={`text-sm ${annual ? 'text-slate-500' : 'text-slate-900 font-semibold'}`}>Monthly</span>
            <Switch.Root className="w-10 h-6 bg-slate-200 rounded-full relative data-[state=checked]:bg-indigo-600" checked={annual} onCheckedChange={setAnnual}>
              <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow absolute top-0.5 left-0.5 data-[state=checked]:left-[22px] transition-all" />
            </Switch.Root>
            <span className={`text-sm ${annual ? 'text-slate-900 font-semibold' : 'text-slate-500'}`}>Annual</span>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border shadow-sm ${t.featured ? 'border-indigo-300 bg-white' : 'border-slate-200 bg-white/80'}`}>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-slate-900">${annual ? t.priceYearly : t.priceMonthly}</span>
                  <span className="text-slate-500">/mo</span>
                  {annual && t.priceMonthly !== t.priceYearly && (
                    <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600">Save {(100 - Math.round((t.priceYearly / (t.priceMonthly || 1)) * 100))}%</span>
                  )}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span>•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full px-4 py-2 rounded-md font-semibold ${t.featured ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300'}`}>{t.cta}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
