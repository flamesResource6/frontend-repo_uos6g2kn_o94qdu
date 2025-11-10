import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setSuccess('')
    const res = await fetch(`${API}/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, message }) })
    const data = await res.json()
    if (data.ok) setSuccess('Thanks! We will be in touch shortly.')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-indigo-50 to-cyan-50">
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-slate-900">Contact us</h1>
          <p className="mt-2 text-slate-600">We'd love to hear from you. Send a message and our team will respond.</p>
          <form className="mt-6 bg-white rounded-2xl border border-slate-200 p-6 space-y-4" onSubmit={submit}>
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
            <textarea className="w-full rounded-md border border-slate-300 px-3 py-2" rows={5} placeholder="Message" value={message} onChange={e=>setMessage(e.target.value)} />
            <button className="w-full px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold">Send</button>
            {success && <p className="text-sm text-emerald-600">{success}</p>}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}
