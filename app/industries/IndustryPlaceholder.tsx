import Link from "next/link";

interface IndustryPlaceholderProps {
  title: string;
  description: string;
}

export default function IndustryPlaceholder({ title, description }: IndustryPlaceholderProps) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans selection:bg-white/20">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-[100] h-[90px] border-b border-white/10 flex items-center justify-between px-6 lg:px-16 bg-black/60 backdrop-blur-md">
        <div className="flex items-center gap-3 lg:gap-5">
          <Link href="/">
            <img
              alt="Mega Move India"
              width={90}
              height={45}
              className="cursor-pointer invert"
              src="/mega-move-logo.svg"
            />
          </Link>
          <div className="ml-1 lg:ml-2">
            <p className="text-[10px] md:text-xs lg:text-sm font-semibold tracking-wide text-zinc-400">
              Moving The Immovable
            </p>
            <p className="text-[10px] md:text-xs lg:text-sm font-semibold tracking-wide text-zinc-400">
              Delivering The Impossible
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-[120px] pb-[100px] relative overflow-hidden">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-zinc-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-2xl text-center z-10 relative">
          {/* Subtle Coming Soon Badge */}
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400 font-mono tracking-widest uppercase mb-8 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            Coming Soon
          </span>

          <h1 className="text-4xl md:text-6xl font-light tracking-wide uppercase mb-6 bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            {title}
          </h1>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 font-light">
            {description}
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white text-black font-semibold tracking-wide text-sm hover:bg-zinc-200 transition-all duration-300 transform hover:scale-[1.02]"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-black px-6 lg:px-16 py-6 text-xs text-zinc-500 flex flex-col lg:flex-row items-center justify-between gap-3">
        <div className="text-center lg:text-left">
          © Copyright 2026, Mega Move India Private Limited. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center lg:justify-end items-center gap-2 lg:gap-4 text-center">
          <Link href="#" className="hover:text-white transition-colors">
            Site Map
          </Link>
          <span className="hidden lg:inline text-zinc-700">|</span>
          <a
            href="/documents/MegaMoveIndia%20Terms%20and%20Conditions.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Terms &amp; Conditions
          </a>
          <span className="hidden lg:inline text-zinc-700">|</span>
          <Link href="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  );
}
