"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const pathname = usePathname();

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const saved = localStorage.getItem('theme');
    const shouldDark = saved ? saved === 'dark' : true;
    
    setIsDark(shouldDark);
    setIsHydrated(true);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newIsDark = !isDark;

    root.classList.remove('dark', 'light');

    if (newIsDark) {
      root.classList.add('dark');
    } else {
      root.classList.add('light');
    }

    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
    setIsDark(newIsDark);
  };

  return (
    <header className="w-full backdrop-blur-sm">
      <div className="max-w-3xl mx-auto px-6 pt-4 lg:pt-8 sm:px-0 border-b-2">
        <div className="flex h-24 items-center justify-between w-full">
          {/* Left: avatar + name + nav */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Avatar (Original dimensions & shape preserved) */}
            {isHydrated && (
              <img
                src="/avatar.jpeg"
                alt="Avatar"
                width={70}
                height={70}
                title={isDark ? 'Switch to light' : 'Switch to dark'}
                onClick={toggleTheme}
                className="border h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 object-cover cursor-pointer select-none transition-opacity hover:opacity-90 focus:opacity-90 outline-none"
              />
            )}

            <div className="flex flex-col justify-between h-12 sm:h-14">
              {/* Name */}
              <div className="-mb-1 text-2xl sm:text-3xl lg:text-4xl font-semibold leading-none font-headings">
                <Link href="/">Srikaran Rao</Link>
              </div>

              {/* Navigation under name */}
              <nav className="flex items-center gap-2 sm:gap-3 text-xs leading-none font-bold">
                <Link href="https://github.com/srikaranrao" target="_blank" rel="noopener noreferrer">GitHub</Link>
                <Link href="https://www.linkedin.com/in/chinthalapallysrikaranrao/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                <Link href="mailto:srikaran6560@gmail.com">Email</Link>
                <Link href="YOUR_GOOGLE_DRIVE_FOLDER_LINK" target="_blank" rel="noopener noreferrer">Resume</Link>
              </nav>
            </div>
          </div>

          {/* Right: Links */}
          <nav className="flex flex-col gap-1 text-xs sm:text-sm leading-none">
            <Link href="/" className={`nav-effect ${pathname === "/" ? "font-bold " : ""}`}>[About]</Link>
            <Link href="/projects" className={`nav-effect ${pathname === "/projects" ? "font-bold " : ""}`}>[Projects]</Link>
            <Link href="/articles" className={`nav-effect ${pathname.startsWith("/articles") ? "font-bold " : ""}`}>[Skills]</Link>
            <Link href="/poems" className={`nav-effect ${pathname === "/poems" ? "font-bold " : ""}`}>[Strategies]</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}