import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || ''

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setMsg('')
    const res = await fetch(`${API}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
    const data = await res.json()
    if (data.ok) setMsg('Logged in!'); else setMsg(data.detail || 'Login failed')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-indigo-50 to-cyan-50">
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h1 className="text-2xl font-bold text-slate-900">Login</h1>
          <form className="mt-4 space-y-4" onSubmit={submit}>
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
            <input type="password" className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
            <div className="flex items-center justify-between">
              <a href="/reset" className="text-sm text-indigo-600 hover:underline">Forgot Password?</a>
            </div>
            <button className="w-full px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold">Login</button>
            {msg && <p className="text-sm text-center text-slate-600">{msg}</p>}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [confirm, setConfirm] = useState('')
  const [msg, setMsg] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setMsg('')
    if (password !== confirm) { setMsg('Passwords do not match'); return }
    const res = await fetch(`${API}/auth/signup`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password, name }) })
    const data = await res.json()
    if (data.ok) setMsg('Account created!'); else setMsg(data.detail || 'Signup failed')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-indigo-50 to-cyan-50">
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <h1 className="text-2xl font-bold text-slate-900">Create your account</h1>
          <form className="mt-4 space-y-4" onSubmit={submit}>
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
            <input type="password" className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
            <input type="password" className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Confirm Password" value={confirm} onChange={e=>setConfirm(e.target.value)} />
            <button className="w-full px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold">Sign Up</button>
            {msg && <p className="text-sm text-center text-slate-600">{msg}</p>}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export function Reset() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [token, setToken] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const request = async (e) => {
    e.preventDefault()
    const res = await fetch(`${API}/auth/forgot`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) })
    const data = await res.json()
    setMsg(data.message + (data.preview_token ? ` (token: ${data.preview_token})` : ''))
  }
  const confirm = async (e) => {
    e.preventDefault()
    const res = await fetch(`${API}/auth/reset`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ token, new_password: newPassword }) })
    const data = await res.json()
    setMsg(data.message || data.detail)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-indigo-50 to-cyan-50">
      <Navbar />
      <section className="pt-28 pb-16">
        <div className="max-w-xl mx-auto grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Request reset</h2>
            <form className="mt-4 space-y-3" onSubmit={request}>
              <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
              <button className="w-full px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold">Send Email</button>
            </form>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900">Confirm reset</h2>
            <form className="mt-4 space-y-3" onSubmit={confirm}>
              <input className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="Token" value={token} onChange={e=>setToken(e.target.value)} />
              <input type="password" className="w-full rounded-md border border-slate-300 px-3 py-2" placeholder="New Password" value={newPassword} onChange={e=>setNewPassword(e.target.value)} />
              <button className="w-full px-4 py-2 rounded-md bg-indigo-600 text-white font-semibold">Reset Password</button>
            </form>
          </div>
        </div>
        {msg && <p className="mt-6 text-center text-slate-600">{msg}</p>}
      </section>
      <Footer />
    </div>
  )
}
