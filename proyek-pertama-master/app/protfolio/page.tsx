interface KartuProyekProps {
  imageSrc: string;
  title: string;
  category: string;
  index: string;
  accentColor: string;
}

function KartuProyek({ imageSrc, title, category, index, accentColor }: KartuProyekProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer scanline"
      style={{ background: '#0a0a0a' }}>

      {/* Image */}
      <div className="relative overflow-hidden h-72">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

        {/* Index badge */}
        <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-sm border border-white/10 rounded-lg">
          <span className="text-[10px] font-mono tracking-widest text-white/40">{index}</span>
        </div>

        {/* Category tag */}
        <div className="absolute top-3 right-3 px-2 py-1 rounded-lg"
          style={{ background: accentColor + '22', border: `1px solid ${accentColor}50` }}>
          <span className="text-[10px] font-bold tracking-widest uppercase" style={{ color: accentColor }}>{category}</span>
        </div>
      </div>

      {/* Card footer */}
      <div className="p-5 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-base text-white group-hover:text-white transition-colors">{title}</h3>
          <p className="text-xs text-white/30 mt-0.5 font-mono">{category}</p>
        </div>
        <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-white/30 flex items-center justify-center transition-all group-hover:bg-white/5">
          <span className="text-white/30 group-hover:text-white text-xs transition-colors">→</span>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500"
        style={{ background: accentColor, boxShadow: `0 0 10px ${accentColor}` }} />
    </div>
  );
}

export default function PortfolioPage() {
  return (
    <main className="w-full min-h-screen bg-black text-white pt-24">

      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ─── HEADER ─── */}
      <section className="relative z-10 w-full py-16 px-8 md:px-16 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 pb-6 border-b border-white/10">

          <div>
            <span className="text-[10px] tracking-[0.4em] text-white/20 font-mono uppercase block mb-4">03 / Selected Works</span>
            <h2 className="font-serif text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
              MY<br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>PROJECTS</span>
              <span className="text-[#00aaff]" style={{ textShadow: '0 0 30px #00aaff' }}>✦</span>
            </h2>
          </div>

          <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end gap-2">
            <p className="text-white/30 text-sm max-w-xs text-right leading-relaxed">
              A curated selection of recent design explorations.
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-2 h-2 rounded-full bg-[#00aaff] animate-pulse" />
              <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">4 Works</span>
            </div>
          </div>

        </div>

        {/* ─── GRID ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          <KartuProyek
            imageSrc="/Fatimah Azzahrah (1).png"
            title="Clove — Game Card"
            category="Figma"
            index="01"
            accentColor="#00aaff"
          />
          <KartuProyek
            imageSrc="/Screenshot 2026-07-27 093523.png"
            title="Design Web"
            category="Figma"
            index="02"
            accentColor="#2463ff"
          />
          <KartuProyek
            imageSrc="/Home Page (1).png"
            title="Design Mobile"
            category="Figma"
            index="03"
            accentColor="#ff2d78"
          />
          <KartuProyek
            imageSrc="/jadwal piket (1).png"
            title="Jadwal Piket"
            category="Canva"
            index="04"
            accentColor="#00aaff"
          />
        </div>

        {/* ─── BOTTOM STRIP ─── */}
        <div className="mt-16 pt-6 border-t border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/20">Fatimah Azzahrah — 2026</span>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono tracking-widest text-white/20 uppercase">SMK Telkom Makassar</span>
            <span className="text-[#00aaff] text-sm spark" style={{ textShadow: '0 0 10px #00aaff' }}>✦</span>
          </div>
        </div>

      </section>
    </main>
  );
}