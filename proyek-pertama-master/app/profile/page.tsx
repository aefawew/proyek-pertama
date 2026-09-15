import Link from 'next/link';

export default function Profile() {
  return (
    <main className="w-full pt-28" style={{ background: '#faf8f0', color: '#3d3dcc' }}>

      {/* ─── PROFILE SECTION ─── */}
      <section id="profile" className="w-full py-12 px-8 md:px-16 max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex items-center justify-between mb-16 pb-4" style={{ borderBottom: '1px solid rgba(61,61,204,0.15)' }}>
          <h1 className="font-serif text-5xl md:text-6xl font-bold" style={{ color: '#3d3dcc' }}>
            Profile <span style={{ color: '#f0c030' }}>✦</span>
          </h1>
          <span className="text-[10px] tracking-[0.4em] uppercase font-mono hidden md:block" style={{ color: '#3d3dcc', opacity: 0.2 }}>02 / PROFILE</span>
        </div>

        <div className="flex flex-col gap-6">

          {/* CARD 1: Fatimah Azzahrah */}
          <div className="group w-full rounded-3xl overflow-hidden transition-all duration-500 flex flex-col md:flex-row min-h-[400px] scanline"
            style={{ background: '#ffffff', border: '1px solid rgba(61,61,204,0.12)', boxShadow: '4px 4px 0 rgba(61,61,204,1)' }}>

            {/* Text side */}
            <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-between relative">
              {/* Index */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.4em] font-mono uppercase" style={{ color: '#3d3dcc', opacity: 0.3 }}>Project — 01</span>
                <span className="w-2 h-2 rounded-full transition-all" style={{ background: '#f0c030' }} />
              </div>

              <div>
                <span className="font-serif text-lg font-black mb-4 block" style={{ color: '#f0c030' }}>gd.</span>
                <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tighter mb-5" style={{ color: '#3d3dcc' }}>
                  Fatimah<br />Az zahrah<span style={{ color: '#f0c030' }}>.</span>
                </h2>
                <p className="text-sm leading-relaxed max-w-sm" style={{ color: '#3d3dcc', opacity: 0.5 }}>
                  Digital branding, web layout, and UI/UX design explorations. Bold visuals with purpose.
                </p>
              </div>

              <Link href="/protfolio"
                className="mt-8 self-start flex items-center gap-3 group/btn">
                <span className="px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300"
                  style={{ border: '1px solid #3d3dcc', color: '#3d3dcc' }}>
                  View Work
                </span>
                <span className="group-hover/btn:translate-x-2 transition-transform duration-300" style={{ color: '#f0c030' }}>→</span>
              </Link>
            </div>

            {/* Image side */}
            <div className="w-full md:w-1/2 relative min-h-[280px] overflow-hidden">
              <img
                src="/woi.png"
                alt="Fatimah Azzahrah"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #ffffff, transparent)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.4), transparent)' }} />
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(61,61,204,0.1)' }}>
                <span className="text-[10px] tracking-widest font-mono uppercase" style={{ color: '#3d3dcc', opacity: 0.5 }}>Figma / Canva</span>
              </div>
            </div>
          </div>

          {/* CARD 2: Syazia Kamilah Putri */}
          <div className="group w-full rounded-3xl overflow-hidden transition-all duration-500 flex flex-col md:flex-row-reverse min-h-[400px] scanline"
            style={{ background: '#ffffff', border: '1px solid rgba(61,61,204,0.12)', boxShadow: '4px 4px 0 rgba(61,61,204,1)' }}>

            {/* Text side */}
            <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-between relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] tracking-[0.4em] font-mono uppercase" style={{ color: '#3d3dcc', opacity: 0.3 }}>Project — 02</span>
                <span className="w-2 h-2 rounded-full transition-all" style={{ background: '#f0c030' }} />
              </div>

              <div>
                <span className="font-serif text-lg font-black mb-4 block" style={{ color: '#f0c030' }}>ia.</span>
                <h2 className="text-5xl md:text-6xl font-black leading-none tracking-tighter mb-5" style={{ color: '#3d3dcc' }}>
                  Syazia<br />Kamilah Putri<span style={{ color: '#f0c030' }}>.</span>
                </h2>
                <p className="text-sm leading-relaxed max-w-sm" style={{ color: '#3d3dcc', opacity: 0.5 }}>
                  Digital illustration works, game cards &amp; creative drawings. An imaginative world of arts.
                </p>
              </div>

              <Link href="/protfolio"
                className="mt-8 self-start flex items-center gap-3 group/btn">
                <span className="px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300"
                  style={{ border: '1px solid #3d3dcc', color: '#3d3dcc' }}>
                  View Work
                </span>
                <span className="group-hover/btn:translate-x-2 transition-transform duration-300" style={{ color: '#f0c030' }}>→</span>
              </Link>
            </div>

            {/* Image side */}
            <div className="w-full md:w-1/2 relative min-h-[280px] overflow-hidden">
              <img
                src="/soyrnice.jpg"
                alt="Syazia's Cat"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to left, #ffffff, transparent)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.4), transparent)' }} />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full backdrop-blur-sm" style={{ background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(61,61,204,0.1)' }}>
                <span className="text-[10px] tracking-widest font-mono uppercase" style={{ color: '#3d3dcc', opacity: 0.5 }}>Ibis / Procreate</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─── FOOTER STRIP ─── */}
      <footer className="w-full px-8 md:px-16 py-8 mt-16 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(61,61,204,0.12)' }}>
        <span className="text-[10px] tracking-[0.4em] uppercase font-mono" style={{ color: '#3d3dcc', opacity: 0.3 }}>© 2026 Fatimah Azzahrah</span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#f0c030' }} />
          <span className="text-[10px] tracking-widest font-mono uppercase" style={{ color: '#3d3dcc', opacity: 0.3 }}>Available for work</span>
        </div>
      </footer>

    </main>
  );
}
