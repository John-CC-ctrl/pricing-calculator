export default function Header() {
  return (
    <header className="bg-navy shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="text-white font-black text-sm tracking-tight">CC</span>
        </div>
        <div>
          <h1 className="text-white font-bold text-lg leading-tight">Cobalt Clean</h1>
          <p className="text-white/55 text-xs">Pricing Calculator · Las Vegas, NV</p>
        </div>
        <div className="ml-auto">
          <span className="bg-white/10 text-white/70 text-xs font-semibold px-3 py-1 rounded-full">
            Internal Tool
          </span>
        </div>
      </div>
    </header>
  )
}
