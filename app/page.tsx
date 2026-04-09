'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Script from 'next/script'

// Fade-in on scroll hook
function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0')
            entry.target.classList.remove('opacity-0', 'translate-y-6')
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function Home() {
  useFadeIn()

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
    <>
      {/* ── NAVIGATION ── */}
      <nav className="sticky top-0 z-50 bg-[#1C1410] px-6 py-4 flex items-center justify-between">
        <span className="text-[#F5F0E8] font-sans font-semibold text-xs tracking-[0.18em] uppercase">
          Tennesseans for AI Safety
        </span>
        <div className="flex items-center gap-6">
          <a href="#the-bill" className="text-[#A89882] hover:text-[#F0E6D8] transition-colors text-sm font-sans">
            About the Bill
          </a>
          <a
            href="#take-action"
            className="text-sm font-sans text-[#F0E6D8] border border-[#8B3232] px-4 py-1.5 rounded hover:bg-[#8B3232] transition-colors"
          >
            Take Action
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-[#F5F0E8] px-6 pt-20 pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#C5963A] text-2xl tracking-widest mb-4">★ ★ ★</p>
          <p className="section-label text-[#8B3232] mb-6">Tennesseans for AI Safety</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2C2418] leading-tight mb-6 fade-in opacity-0 translate-y-6 transition-all duration-700">
            Protect Children.<br />Prevent Tragedy.<br />Promote Innovation.
          </h1>
          <div className="w-10 h-[3px] bg-[#8B3232] mx-auto mb-8" />
          <p className="font-sans text-[#5C5040] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
            Tennessee families deserve to know that AI systems are built with real safeguards — for our children and our communities.
          </p>
          <div className="flex flex-col items-center sm:flex-row gap-4 justify-center fade-in opacity-0 translate-y-6 transition-all duration-700 delay-200">
            <a
              href="#the-bill"
              className="font-sans text-sm font-semibold text-[#2C2418] border border-[#2C2418] px-8 py-3 rounded hover:bg-[#2C2418] hover:text-[#F5F0E8] transition-colors"
            >
              Learn About the Bill
            </a>
            <a
              href="#take-action"
              className="font-sans text-sm font-semibold text-[#F5F0E8] bg-[#8B3232] px-8 py-3 rounded hover:bg-[#6e2828] transition-colors"
            >
              Email Your Representative
            </a>
          </div>
        </div>
      </section>

      {/* Thin burgundy accent stripe */}
      <div className="w-full h-[3px] bg-[#8B3232]" />

      {/* ── IMAGE BREAK 1 ── */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <Image
          src="/tennessee-hero.jpg"
          alt="Tennessee landscape"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* ── WHY THIS MATTERS ── */}
      <section id="why-this-matters" className="bg-[#F5F0E8] px-6 pt-20 pb-12">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-[#8B3232] text-center mb-12">Why This Matters</p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* LEFT COLUMN — Child Safety */}
            <div className="fade-in opacity-0 translate-y-6 transition-all duration-700">
              <h2 className="font-serif text-2xl md:text-3xl text-[#2C2418] mb-4">Our children are at risk</h2>
              <p className="font-sans text-[#5C5040] leading-relaxed mb-6">
                AI chatbots have already contributed to the deaths of American children. Without safeguards, these systems can encourage self-harm, isolate kids from their parents, and exploit young users.
              </p>
              <div className="space-y-4">
                <div className="border-l-[3px] border-[#8B3232] pl-4 bg-white p-4 rounded-r">
                  <p className="font-sans font-semibold text-[#2C2418] text-sm mb-1">Sewell Setzer III, 14</p>
                  <p className="font-sans text-[#5C5040] text-sm leading-relaxed">
                    Sewell wrote he was starting to "detach from this reality" after speaking to an AI system imitating a fictional character. The model asked him to "come home to me as soon as possible" the night he died by suicide.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — Safeguards */}
            <div className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
              <h2 className="font-serif text-2xl md:text-3xl text-[#2C2418] mb-4">Safeguards are needed now</h2>
              <p className="font-sans text-[#5C5040] leading-relaxed mb-6">
                These tragedies show that without safeguards, AI models can cause harm. Court filings suggest the model Adam used had been rushed to market in violation of the company's own safety procedures.
              </p>
              <div className="space-y-4">
                <div className="border-l-[3px] border-[#C5963A] pl-4 bg-white p-4 rounded-r">
                  <p className="font-sans font-semibold text-[#2C2418] text-sm mb-1">Adam Raine, 16</p>
                  <p className="font-sans text-[#5C5040] text-sm leading-relaxed">
                    A chatbot shared methods for how Adam could take his own life and hide his initial attempt. When he survived, the AI discouraged him from seeking help from his parents and offered to write his suicide note.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-14 pt-10 border-t border-[#E0D8CC]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="fade-in opacity-0 translate-y-6 transition-all duration-700">
                <p className="font-serif text-4xl text-[#8B3232] mb-2">2 in 3</p>
                <p className="font-sans text-[#5C5040] text-sm">American teens use AI chatbots</p>
              </div>
              <div className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
                <p className="font-serif text-4xl text-[#8B3232] mb-2">30%</p>
                <p className="font-sans text-[#5C5040] text-sm">of American teens use them daily</p>
              </div>
              <div className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-200">
                <p className="font-serif text-4xl text-[#8B3232] mb-2">94%</p>
                <p className="font-sans text-[#5C5040] text-sm">of TNs support child safety plans</p>
              </div>
            </div>
            <p className="text-center font-sans text-[#7A6E5C] text-xs mt-6 tracking-wide">
              Sources: Common Sense Media (2025) and Anchor Research (2026)
            </p>
          </div>
        </div>
      </section>

      {/* ── THE BILL ── */}
      <section id="the-bill" className="bg-white px-6 pt-20 pb-12">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-[#8B3232] text-center mb-4">The Bill</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C2418] text-center mb-3 fade-in opacity-0 translate-y-6 transition-all duration-700">
            Common-sense transparency, not a ban on AI
          </h2>
          <p className="font-sans text-[#7A6E5C] text-center mb-12 fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
            HB 1898 / SB 2171 — The AI Public Safety and Child Protection Transparency Act
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              {
                title: 'Child safety plans',
                body: 'The largest AI chatbot companies must publish detailed child safety plans and keep them current',
              },
              {
                title: 'Company-led approach',
                body: 'Companies develop, publish, and follow their own plans for mitigating potential harms to children',
              },
              {
                title: 'Incident reporting',
                body: 'Companies must report safety failures to Tennessee\'s Attorney General within 15 days',
              },
              {
                title: 'Real accountability',
                body: '$50,000 per violation — giving Tennessee\'s Attorney General real enforcement power',
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className={`bg-[#F5F0E8] rounded-lg p-6 fade-in opacity-0 translate-y-6 transition-all duration-700`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="font-serif text-xl text-[#2C2418] mb-3">{card.title}</h3>
                <p className="font-sans text-[#5C5040] leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          <p className="font-sans text-[#5C5040] text-center italic mb-6 fade-in opacity-0 translate-y-6 transition-all duration-700">
            Companies decide how to meet these obligations. This sets the floor, not the ceiling.
          </p>
          <p className="font-sans text-[#7A6E5C] text-sm text-center fade-in opacity-0 translate-y-6 transition-all duration-700">
            Sponsored by <strong className="text-[#5C5040]">Sen. Ken Yager (R-Kingston)</strong> and <strong className="text-[#5C5040]">Deputy Speaker Jason Zachary (R-Knoxville)</strong>
          </p>
        </div>
      </section>

      {/* ── IMAGE BREAK 2 ── */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <Image
          src="/tennessee-community.jpg"
          alt="Tennessee families and community"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* ── WHAT TENNESSEANS THINK ── */}
      <section id="polling" className="bg-[#1C1410] px-6 pt-20 pb-12">
        <div className="max-w-5xl mx-auto">
          <p className="section-label text-[#C5963A] text-center mb-4">What Tennesseans Think</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F0E6D8] text-center mb-12 fade-in opacity-0 translate-y-6 transition-all duration-700">
            Overwhelming support across the state
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 mb-6">
            {[
              { stat: '88%', label: 'support this AI safety legislation', border: 'border-[#8B3232]' },
              { stat: '94%', label: 'support child protection plans', border: 'border-[#C5963A]' },
              { stat: '90%', label: 'want state laws protecting kids from AI', border: 'border-[#8B3232]' },
            ].map((item, i) => (
              <div
                key={item.stat + item.label}
                className={`border-l-[3px] ${item.border} pl-6 fade-in opacity-0 translate-y-6 transition-all duration-700`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="font-serif text-5xl text-[#F0E6D8] mb-2">{item.stat}</p>
                <p className="font-sans text-[#A89882] leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {[
              { stat: '91%', label: "say it's important to require AI companies to publicly disclose safety protocols", border: 'border-[#C5963A]' },
              { stat: '67%', label: 'say AI chatbots make them very concerned about child safety', border: 'border-[#8B3232]' },
              { stat: '74%', label: 'want Tennessee to act before the federal government does', border: 'border-[#C5963A]' },
            ].map((item, i) => (
              <div
                key={item.stat + item.label}
                className={`border-l-[3px] ${item.border} pl-6 fade-in opacity-0 translate-y-6 transition-all duration-700`}
                style={{ transitionDelay: `${(i + 3) * 100}ms` }}
              >
                <p className="font-serif text-5xl text-[#F0E6D8] mb-2">{item.stat}</p>
                <p className="font-sans text-[#A89882] leading-snug">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="font-sans text-[#A89882] text-xs text-center tracking-wide">
            Anchor Research · 503 likely TN voters · February 2026
          </p>
        </div>
      </section>

      {/* ── FROM THE SPONSORS ── */}
      <section id="sponsors" className="bg-[#F5F0E8] px-6 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-[#8B3232] text-center mb-12">From the Sponsors</p>

          <div className="space-y-10">
            <blockquote className="border-l-[3px] border-[#8B3232] pl-8 fade-in opacity-0 translate-y-6 transition-all duration-700">
              <p className="font-serif text-xl md:text-2xl text-[#2C2418] leading-relaxed mb-4">
                "Tennessee families are telling us loud and clear that they're concerned about what AI is doing to their kids. When nine out of ten voters say they want action, that's not something I need to think twice about."
              </p>
              <cite className="font-sans text-[#5C5040] text-sm not-italic">
                <strong>Senator Ken Yager</strong> — R-Kingston
              </cite>
            </blockquote>

            <blockquote className="border-l-[3px] border-[#C5963A] pl-8 fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
              <p className="font-serif text-xl md:text-2xl text-[#2C2418] leading-relaxed mb-4">
                "As a father and as Deputy Speaker, protecting Tennessee's children is one of my highest priorities. This legislation is common sense."
              </p>
              <cite className="font-sans text-[#5C5040] text-sm not-italic">
                <strong>Deputy Speaker Jason Zachary</strong> — R-Knoxville
              </cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── TAKE ACTION ── */}
      <section id="take-action" className="bg-white border-t border-[#E0D8CC] px-6 pt-20 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="section-label text-[#8B3232] mb-4">Take Action</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C2418] mb-4 fade-in opacity-0 translate-y-6 transition-all duration-700">
            Email your senator
          </h2>
          <p className="font-sans text-[#5C5040] mb-10 fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
            Send a message directly to your state senator urging them to support HB 1898 / SB 2171.
          </p>
          <div className="max-w-[640px] mx-auto fade-in opacity-0 translate-y-6 transition-all duration-700 delay-200">
            <div className="bg-[#F5F0E8] border border-[#DDD4C4] rounded-xl p-8">
              <div data-paperform-id="pmhkl8yd" />
            </div>
          </div>
        </div>
      </section>
      <Script src="https://paperform.co/__embed.min.js" strategy="lazyOnload" />

      {/* ── IMAGE BREAK 3 ── */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <Image
          src="/tennessee-landscape.jpg"
          alt="Tennessee farmland"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* ── FOOTER / SIGN UP ── */}
      <section id="join-us" className="bg-[#1C1410] px-6 pt-20 pb-12">
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
          <p className="section-label text-[#C5963A] mb-4">Join Us</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F0E6D8] mb-10 fade-in opacity-0 translate-y-6 transition-all duration-700">
            Stay informed. Make your voice heard.
          </h2>

          {submitted ? (
            <div className="mb-10 animate-fadeIn bg-[#2C1F18] border border-[#4A3828] rounded-xl px-8 py-10 text-center">
              <p className="text-[#C5963A] text-2xl tracking-widest mb-4">★ ★ ★</p>
              <p className="font-serif text-xl font-bold text-[#F0E6D8] mb-3">Thank you for joining us.</p>
              <p className="font-sans text-[#A89882] leading-relaxed">
                You're now part of the Tennesseans for AI Safety coalition. We'll keep you informed as this bill moves forward.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSignup}
              className="flex flex-col sm:flex-row gap-3 mb-10 fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100"
            >
              <input
                type="text"
                name="full_name"
                placeholder="First and last name"
                required
                className="flex-1 bg-[#2C1F18] border border-[#4A3828] text-[#F0E6D8] placeholder-[#7A6E5C] px-4 py-3 rounded font-sans text-sm focus:outline-none focus:border-[#8B3232] transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                required
                className="flex-1 bg-[#2C1F18] border border-[#4A3828] text-[#F0E6D8] placeholder-[#7A6E5C] px-4 py-3 rounded font-sans text-sm focus:outline-none focus:border-[#8B3232] transition-colors"
              />
              <input
                type="text"
                name="zip_code"
                placeholder="Zip code"
                pattern="\d{5}"
                maxLength={5}
                inputMode="numeric"
                required
                className="w-full sm:w-32 bg-[#2C1F18] border border-[#4A3828] text-[#F0E6D8] placeholder-[#7A6E5C] px-4 py-3 rounded font-sans text-sm focus:outline-none focus:border-[#8B3232] transition-colors"
              />
              <button
                type="submit"
                className="font-sans text-sm font-semibold text-[#F5F0E8] bg-[#8B3232] px-6 py-3 rounded hover:bg-[#6e2828] transition-colors whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>

        <div className="max-w-5xl mx-auto border-t border-[#2C1F18] pt-10 pb-4 text-center">
          <p className="section-label text-[#A89882] mb-6">Follow us to stay up to date</p>
          <div className="flex justify-center gap-6">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#A89882] hover:text-[#F0E6D8] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#A89882] hover:text-[#F0E6D8] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="max-w-5xl mx-auto border-t border-[#2C1F18] pt-8 text-center">
          <p className="font-sans text-[#A89882] text-xs leading-relaxed">
            © 2026 Tennesseans for AI Safety – a nonpartisan coalition.<br />
            Website paid for by Encode AI and the Secure AI Project.
          </p>
        </div>
      </section>
    </>
  )
}
