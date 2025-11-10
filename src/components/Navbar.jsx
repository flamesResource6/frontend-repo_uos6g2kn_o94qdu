import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = (to, label) => (
    <NavLink
      to={to}
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          isActive ? 'text-indigo-700' : 'text-slate-600 hover:text-indigo-600'
        }`
      }
    >
      {label}
    </NavLink>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-lg border-b border-slate-200/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 font-bold">SB</span>
            <span className="font-semibold text-slate-800">SoftBanking</span>
          </Link>
          <div className="hidden md:flex items-center gap-1">
            {navLink('/', 'Home')}
            {navLink('/pricing', 'Pricing')}
            {navLink('/blog', 'Blog')}
            {navLink('/contact', 'Contact')}
          </div>
          <div className="hidden md:flex items-center gap-2">
            <Link to="/login" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-indigo-700">Login</Link>
            <Link to="/signup" className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-700">Sign Up</Link>
          </div>
          <button className="md:hidden p-2 text-slate-600" onClick={() => setOpen(!open)} aria-label="Menu">
            <Menu />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <div className="flex flex-col">
              {navLink('/', 'Home')}
              {navLink('/pricing', 'Pricing')}
              {navLink('/blog', 'Blog')}
              {navLink('/contact', 'Contact')}
            </div>
            <div className="flex gap-2">
              <Link to="/login" onClick={() => setOpen(false)} className="flex-1 px-3 py-2 text-sm font-medium text-slate-700 bg-white rounded-md border">Login</Link>
              <Link to="/signup" onClick={() => setOpen(false)} className="flex-1 px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md">Sign Up</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
