import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Portfolio & Resume',
  description: 'Fatimah Azzahrah - Graphic Designer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen w-full overflow-x-hidden" style={{ background: '#faf8f0', color: '#3d3dcc' }}>

        {/* NAVBAR GLOBAL */}
        <nav className="fixed w-full top-0 z-50 backdrop-blur-sm py-4 px-8 md:px-16 transition-all" style={{ background: 'rgba(250, 248, 240, 0.85)', borderBottom: '1px solid rgba(61, 61, 204, 0.1)' }}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">

            {/* Logo */}
            <Link href="/#welcome" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300" style={{ border: '1px solid #3d3dcc' }}>
                <span className="text-xs font-black transition-colors" style={{ color: '#3d3dcc' }}>✦</span>
              </div>
              <span className="text-xs font-bold tracking-[0.3em] uppercase transition-colors" style={{ color: '#3d3dcc', opacity: 0.6 }}>FA</span>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex gap-10 items-center text-xs font-bold tracking-[0.2em] uppercase" style={{ color: '#3d3dcc', opacity: 0.5 }}>
              <Link href="/#welcome" className="transition-colors relative group" style={{ color: '#3d3dcc' }}>
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ background: '#f0c030' }} />
              </Link>
              <Link href="/profile" className="transition-colors relative group" style={{ color: '#3d3dcc' }}>
                Profile
                <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300" style={{ background: '#f0c030' }} />
              </Link>
              <Link href="/protfolio" className="px-5 py-2 rounded-full transition-all duration-300 text-xs font-bold" style={{ border: '1px solid #3d3dcc', color: '#3d3dcc' }}>
                Portfolio ✦
              </Link>
            </div>

          </div>
        </nav>

        {children}

      </body>
    </html>
  );
}