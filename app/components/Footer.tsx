'use client'
import { useState } from 'react'
import Image from 'next/image'

interface FooterProps {
  headline: string
  subtext?: string
}

export default function Footer({ headline, subtext }: FooterProps) {
  const [submitted, setSubmitted] = useState(false)

  async function handleSignup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      full_name: (form.elements.namedItem('full_name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      zip_code: (form.elements.namedItem('zip_code') as HTMLInputElement).value,
    }
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch {
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="join-us" className="bg-[#1C1410] px-6 pt-7 pb-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/logo.png"
            alt="Tennesseans for AI Safety"
            width={338}
            height={338}
            className="w-[338px] h-auto mix-blend-lighten"
          />
        </div>
        <p className="section-label text-[#C5963A] mb-4">Join the Coalition</p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#F0E6D8] mb-4">
          {headline}
        </h2>
        {subtext && (
          <p className="font-sans text-[#A89882] mb-6">{subtext}</p>
        )}

        <div className="mb-10">
          {submitted ? (
            <div className="animate-fadeIn bg-[#2C1F18] border border-[#4A3828] rounded-xl px-8 py-10 text-center">
              <p className="text-[#C5963A] text-2xl tracking-widest mb-4">★ ★ ★</p>
              <p className="font-serif text-xl font-bold text-[#F0E6D8] mb-3">Thank you for joining us.</p>
              <p className="font-sans text-[#A89882] leading-relaxed">
                You&apos;re now part of the Tennesseans for AI Safety coalition. We&apos;ll keep you informed as this moves forward.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSignup}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input type="text" name="full_name" placeholder="First and last name" required className="flex-1 bg-[#2C1F18] border border-[#4A3828] text-[#F0E6D8] placeholder-[#7A6E5C] px-4 py-3 rounded font-sans text-sm focus:outline-none focus:border-[#8B3232] transition-colors" />
              <input type="email" name="email" placeholder="Email address" required className="flex-1 bg-[#2C1F18] border border-[#4A3828] text-[#F0E6D8] placeholder-[#7A6E5C] px-4 py-3 rounded font-sans text-sm focus:outline-none focus:border-[#8B3232] transition-colors" />
              <input type="text" name="zip_code" placeholder="Zip code" pattern="\d{5}" maxLength={5} inputMode="numeric" required className="w-full sm:w-32 bg-[#2C1F18] border border-[#4A3828] text-[#F0E6D8] placeholder-[#7A6E5C] px-4 py-3 rounded font-sans text-sm focus:outline-none focus:border-[#8B3232] transition-colors" />
              <button type="submit" className="font-sans text-sm font-semibold text-[#F5F0E8] bg-[#8B3232] px-6 py-3 rounded hover:bg-[#6e2828] transition-colors whitespace-nowrap">
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto border-t border-[#2C1F18] pt-10 pb-4 text-center">
        <p className="section-label text-[#A89882] mb-6">Follow us to stay up to date</p>
        <div className="flex justify-center gap-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#A89882] hover:text-[#F0E6D8] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[#A89882] hover:text-[#F0E6D8] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto border-t border-[#2C1F18] pt-8 text-center">
        <p className="font-sans text-[#A89882] text-xs leading-relaxed">
          © 2026 Tennesseans for AI Safety · A nonpartisan coalition.<br />
          Website maintained by Encode AI and the Secure AI Project.
        </p>
      </div>
    </section>
  )
}
