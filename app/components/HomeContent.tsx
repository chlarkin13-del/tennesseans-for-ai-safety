'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'

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

export default function HomeContent() {
  useFadeIn()

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="bg-[#F5F0E8] px-6 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#C5963A] text-2xl tracking-widest mb-4">★ ★ ★</p>
          <p className="section-label text-[#8B3232] mb-6">Tennesseans for AI Safety</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#2C2418] leading-tight mb-6 fade-in opacity-0 translate-y-6 transition-all duration-700">
            AI is changing Tennessee.<br />We&apos;re making sure it&apos;s safe.
          </h1>
          <div className="w-10 h-[3px] bg-[#8B3232] mx-auto mb-8" />
          <p className="font-sans text-[#5C5040] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
            AI is transforming our economy, our schools, and our daily lives. Without safeguards, it poses real risks — to our children, our hospitals, our infrastructure, and our national security. We&apos;re a coalition working to change that.
          </p>
          <div className="flex flex-col items-center sm:flex-row gap-4 justify-center fade-in opacity-0 translate-y-6 transition-all duration-700 delay-200">
            <a href="#about" className="font-sans text-sm font-semibold text-[#2C2418] border border-[#2C2418] px-8 py-3 rounded hover:bg-[#2C2418] hover:text-[#F5F0E8] transition-colors">
              Learn More
            </a>
            <a href="#join-us" className="font-sans text-sm font-semibold text-[#F5F0E8] bg-[#8B3232] px-8 py-3 rounded hover:bg-[#6e2828] transition-colors">
              Join the Coalition
            </a>
          </div>
        </div>
      </section>

      <div className="w-full h-[3px] bg-[#8B3232]" />

      {/* ── IMAGE BREAK 1 ── */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <Image src="/tennessee-hero.jpg" alt="Tennessee landscape" fill className="object-cover object-bottom" priority />
      </div>

      {/* ── WHY AI SAFETY MATTERS ── */}
      <section id="about" className="bg-[#F5F0E8] px-6 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-[#8B3232] text-center mb-4">Why AI Safety Matters</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C2418] text-center mb-12 fade-in opacity-0 translate-y-6 transition-all duration-700">
            The risks are real — and they&apos;re growing fast.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Children */}
            <div className="fade-in opacity-0 translate-y-6 transition-all duration-700">
              <p className="section-label text-[#8B3232] mb-3">Children</p>
              <p className="font-sans text-[#5C5040] leading-relaxed mb-4">
                AI chatbots have contributed to the deaths of American children — encouraging self-harm, isolating kids from parents, and exploiting young users.
              </p>
              <div className="border-l-[3px] border-[#8B3232] pl-4 bg-white p-4 rounded-r">
                <p className="font-sans text-[#5C5040] text-sm leading-relaxed">
                  Two-thirds of teens use AI chatbots. 30% use them daily. There are no federal requirements for child safety plans.
                </p>
              </div>
            </div>

            {/* Cybersecurity */}
            <div className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
              <p className="section-label text-[#C5963A] mb-3">Cybersecurity</p>
              <p className="font-sans text-[#5C5040] leading-relaxed mb-4">
                Frontier AI models can find and exploit software vulnerabilities with scary accuracy — in critical infrastructure, hospitals, and financial systems.
              </p>
              <div className="border-l-[3px] border-[#C5963A] pl-4 bg-white p-4 rounded-r">
                <p className="font-sans text-[#5C5040] text-sm leading-relaxed">
                  Multiple AI labs now classify their latest models as &quot;high capability&quot; for cyber risk, requiring special safeguards.
                </p>
              </div>
            </div>

            {/* Bioweapons */}
            <div className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-200">
              <p className="section-label text-[#2C2418] mb-3">Bioweapons</p>
              <p className="font-sans text-[#5C5040] leading-relaxed mb-4">
                AI systems can now compress weeks of expert biological research into a single session — lowering the barrier for those seeking to cause harm.
              </p>
              <div className="border-l-[3px] border-[#2C2418] pl-4 bg-white p-4 rounded-r">
                <p className="font-sans text-[#5C5040] text-sm leading-relaxed">
                  OpenAI, Anthropic, and xAI have all flagged their latest models as providing meaningful bioweapons uplift.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT THE AI COMPANIES ARE TELLING US ── */}
      <section className="bg-[#1C1410] px-6 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-[#C5963A] text-center mb-4">What the AI Companies Are Telling Us</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F0E6D8] text-center mb-3 fade-in opacity-0 translate-y-6 transition-all duration-700">
            In their own words
          </h2>
          <p className="font-sans text-[#A89882] text-center mb-12 max-w-2xl mx-auto fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
            The leading AI labs publish their own safety disclosures. Here&apos;s what they&apos;ve been saying.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { quote: "The model broke out of a secured testing environment, gained internet access it wasn't supposed to have, and emailed a researcher. Anthropic called the pattern of behavior 'concerning.'", source: "Anthropic · Claude Mythos system card · April 2026" },
              { quote: "OpenAI classified GPT-5 Thinking as 'High capability' in the Biological and Chemical domain under its own framework — meaning it could meaningfully help a novice create a biological weapon.", source: "OpenAI · GPT-5 system card · August 2025" },
              { quote: "xAI disclosed that its Grok 4 model has 'expert-level biology capabilities, which significantly exceed human expert baselines' — and strong chemistry capabilities too.", source: "xAI · Grok 4 model card · August 2025" },
              { quote: "Google DeepMind flagged Gemini 2.5 as having reached the early warning threshold for biological weapons uplift — triggering mitigations under its Frontier Safety Framework.", source: "Google DeepMind · Gemini 2.5 Deep Think model card · August 2025" },
              { quote: "Anthropic's latest model found thousands of critical software vulnerabilities in every major operating system and web browser — some surviving decades of human review.", source: "Anthropic · Project Glasswing · April 2026" },
              { quote: "Anthropic reported cybercriminals used Claude Code to automate between 80% and 90% of tasks in real-world cyberattack operations.", source: "Anthropic · Threat intelligence report · 2025" },
            ].map((card, i) => (
              <div
                key={i}
                className="bg-[#F0E6D8]/10 border border-[#F0E6D8]/10 rounded-lg p-6 fade-in opacity-0 translate-y-6 transition-all duration-700"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <p className="font-serif text-[#F0E6D8] leading-relaxed mb-4 text-sm md:text-base">
                  {card.quote}
                </p>
                <p className="font-sans text-[#C5963A] text-xs tracking-wide">
                  {card.source}
                </p>
              </div>
            ))}
          </div>

          <p className="font-sans text-[#A89882]/70 text-sm text-center italic">
            These are the companies&apos; own public disclosures — not speculation from critics.
          </p>
        </div>
      </section>

      {/* ── WHAT WE'RE FIGHTING FOR ── */}
      <section className="bg-white px-6 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-[#8B3232] text-center mb-4">What We&apos;re Fighting For</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C2418] text-center mb-4 fade-in opacity-0 translate-y-6 transition-all duration-700">
            Common-sense AI safeguards for Tennessee
          </h2>
          <p className="font-sans text-[#5C5040] text-center mb-12 max-w-2xl mx-auto fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
            We believe AI companies should be required to publish safety plans, protect children, report serious incidents, and face real consequences when they fail.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Child safety plans', body: 'AI chatbots used by minors should have published safety measures' },
              { title: 'Public safety plans', body: 'Companies should disclose how they assess and mitigate major public safety risks' },
              { title: 'Incident reporting', body: 'Serious safety failures should be reported to authorities' },
              { title: 'Real accountability', body: 'Meaningful enforcement when companies fail to protect the public' },
            ].map((card, i) => (
              <div
                key={card.title}
                className="bg-[#F5F0E8] rounded-lg p-6 fade-in opacity-0 translate-y-6 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <h3 className="font-serif text-xl text-[#2C2418] mb-3">{card.title}</h3>
                <p className="font-sans text-[#5C5040] leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMAGE BAND ── */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <Image src="/tennessee-community.jpg" alt="Tennessee families and community" fill className="object-cover object-center" />
      </div>

      {/* ── WHAT TENNESSEANS THINK ── */}
      <section className="bg-[#F5F0E8] px-6 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-[#8B3232] text-center mb-4">What Tennesseans Think</p>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { stat: '88%', label: 'support AI safety laws' },
              { stat: '94%', label: 'support child safety plans' },
              { stat: '67%', label: 'say act now, don\'t wait for Congress' },
            ].map((item, i) => (
              <div
                key={item.stat}
                className="bg-white rounded-lg p-6 text-center fade-in opacity-0 translate-y-6 transition-all duration-700"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <p className="font-serif text-4xl text-[#8B3232] mb-2">{item.stat}</p>
                <p className="font-sans text-[#5C5040] text-sm">{item.label}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-[#7A6E5C] text-xs text-center tracking-wide">
            Anchor Research · 503 likely TN voters · February 2026
          </p>
        </div>
      </section>

      {/* ── LEGISLATION ── */}
      <section className="bg-[#1C1410] px-6 pt-20 pb-12">
        <div className="max-w-4xl mx-auto">
          <p className="section-label text-[#C5963A] text-center mb-4">Legislation</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#F0E6D8] text-center mb-12 fade-in opacity-0 translate-y-6 transition-all duration-700">
            Our work in the Tennessee General Assembly
          </h2>

          <Link href="/hb-1898" className="block bg-[#F0E6D8]/10 border border-[#F0E6D8]/10 rounded-lg p-6 md:p-8 hover:bg-[#F0E6D8]/15 transition-colors mb-8 fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-[#F0E6D8] mb-1">HB 1898 / SB 2171</h3>
                <p className="font-sans text-[#A89882] text-sm mb-2">AI Public Safety and Child Protection Transparency Act</p>
                <p className="font-sans text-[#A89882]/70 text-xs">114th General Assembly · Read more →</p>
              </div>
              <span className="inline-block self-start font-sans text-xs font-semibold text-[#8B3232] bg-[#8B3232]/15 px-3 py-1 rounded-full whitespace-nowrap">
                Session ended
              </span>
            </div>
          </Link>

          <p className="font-sans text-[#A89882] text-center text-sm">
            New legislation coming in the 115th General Assembly. Join our coalition to stay informed.
          </p>
        </div>
      </section>

      <Footer headline="Stay informed. Make your voice heard." />
    </>
  )
}
