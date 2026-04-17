'use client'
import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [legOpen, setLegOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<NodeJS.Timeout | null>(null)

  const openDropdown = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setLegOpen(true)
  }, [])

  const closeDropdown = useCallback(() => {
    closeTimer.current = setTimeout(() => setLegOpen(false), 180)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLegOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="sticky top-0 z-50 bg-[#1C1410] px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-[#F5F0E8] font-sans font-semibold text-xs tracking-[0.18em] uppercase">
          Tennesseans for AI Safety
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/#about" className="text-[#A89882] hover:text-[#F0E6D8] transition-colors text-sm font-sans">
            About
          </Link>
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button
              onClick={() => setLegOpen(!legOpen)}
              className="text-[#A89882] hover:text-[#F0E6D8] transition-colors text-sm font-sans flex items-center gap-1 pb-2 -mb-2"
            >
              Legislation
              <svg className={`w-3 h-3 transition-transform ${legOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {legOpen && (
              <div className="absolute top-full right-0 pt-1 bg-transparent">
                <div className="bg-[#2C1F18] border border-[#4A3828] rounded-lg py-2 px-4 whitespace-nowrap shadow-lg">
                  <Link
                    href="/hb-1898"
                    className="text-[#A89882] hover:text-[#F0E6D8] text-sm font-sans block py-1"
                    onClick={() => setLegOpen(false)}
                  >
                    HB 1898 / SB 2171
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link
            href="/#join-us"
            className="text-sm font-sans text-[#F0E6D8] border border-[#8B3232] px-4 py-1.5 rounded hover:bg-[#8B3232] transition-colors"
          >
            Join Us
          </Link>
        </div>
      </div>
    </nav>
  )
}
