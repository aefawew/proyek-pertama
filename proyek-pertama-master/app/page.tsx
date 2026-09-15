import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full" style={{ background: '#faf8f0', color: '#3d3dcc' }}>

      {/* ─── HERO SECTION ─── */}
      <section id="welcome" className="relative w-full h-screen flex flex-col justify-end pb-16 px-8 md:px-16 overflow-hidden">

        {/* Grid overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(61,61,204,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(61,61,204,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Floating sparkles */}
        <div className="absolute top-1/3 left-12 text-4xl spark" style={{ color: '#f0c030', textShadow: '0 0 20px #f0c030' }}>✦</div>

        {/* Main hero text */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="flex items-end gap-6 mb-2">
            <span className="text-[10px] tracking-[0.4em] uppercase font-mono mb-2" style={{ color: '#f0c030' }}>— welcome</span>
          </div>

          <h1 className="font-serif text-[14vw] md:text-[11vw] font-black leading-[0.85] tracking-tighter mb-8" style={{ color: '#3d3dcc' }}>
            WELCOME<span style={{ color: '#f0c030' }}>.</span>
          </h1>

          {/* Bottom row */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pt-6" style={{ borderTop: '1px solid rgba(61,61,204,0.15)' }}>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: '#3d3dcc', opacity: 0.5 }}>
              Digital designer crafting bold visuals — UI/UX, illustration &amp; creative design.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/profile"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105"
                style={{ background: '#3d3dcc', color: '#faf8f0' }}>
                Lihat Profil ✦
              </Link>
              <Link href="https://portfolio-pakfakih.vercel.app"
                className="flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105"
                style={{ border: '2px solid #f0c030', color: '#f0c030', background: 'transparent' }}>
                Portfolio →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE TICKER ─── */}
      <div className="w-full py-3 overflow-hidden" style={{ background: '#f0c030', borderTop: '1px solid rgba(61,61,204,0.2)', borderBottom: '1px solid rgba(61,61,204,0.2)' }}>
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="flex items-center gap-6 font-black text-xs tracking-[0.3em] uppercase shrink-0" style={{ color: '#3d3dcc' }}>
              <span>Graphic Design</span>
              <span style={{ opacity: 0.5 }}>✦</span>
              <span>Illustration</span>
              <span style={{ opacity: 0.5 }}>✦</span>
              <span>UI/UX</span>
              <span style={{ opacity: 0.5 }}>✦</span>
              <span>Figma</span>
              <span style={{ opacity: 0.5 }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─── FOOTER STRIP ─── */}
      <footer className="w-full px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(61,61,204,0.12)' }}>
        <span className="text-[10px] tracking-[0.4em] uppercase font-mono" style={{ color: '#3d3dcc', opacity: 0.3 }}>© 2026 Fatimah Azzahrah</span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#f0c030' }} />
          <span className="text-[10px] tracking-widest font-mono uppercase" style={{ color: '#3d3dcc', opacity: 0.3 }}>Available for work</span>
        </div>
      </footer>

    </main>
  );
}