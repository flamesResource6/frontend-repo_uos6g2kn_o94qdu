export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/70 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} SoftBanking. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <a href="#" className="hover:text-indigo-600">Privacy</a>
          <a href="#" className="hover:text-indigo-600">Terms</a>
          <a href="#" className="hover:text-indigo-600">Support</a>
        </div>
      </div>
    </footer>
  )
}
