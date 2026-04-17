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

const voteRecords = [
  { committee: 'House Banking & Consumer Affairs Subcommittee', date: 'March 18, 2026', vote: '7–0', label: 'unanimous', special: false },
  { committee: 'Senate Judiciary Committee', date: 'March 24, 2026', vote: '9–0', label: 'unanimous', special: false },
  { committee: 'House Commerce Committee', date: 'March 25, 2026', vote: '20–0', label: 'unanimous', special: false },
  { committee: 'Senate Commerce & Labor Committee', date: 'April 7, 2026', vote: '6–3', label: 'passed', special: false },
  { committee: 'Tennessee House of Representatives · Floor vote', date: 'April 16, 2026', vote: '94–0', label: 'unanimous passage', special: true },
]

export default function HB1898Content() {
  useFadeIn()

  return (
    <>
      <Nav />

      {/* ── BREADCRUMB ── */}
      <div className="bg-[#F5F0E8] px-6 py-4 border-b border-[#E0D8CC]">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="font-sans text-sm text-[#5C5040] hover:text-[#2C2418] transition-colors">
            <span className="text-[#8B3232] mr-1">←</span> Back to home
          </Link>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="bg-[#F5F0E8] px-6 pt-12 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-sans text-xs font-semibold text-[#8B3232] bg-[#8B3232]/10 px-3 py-1 rounded-full">Session ended</span>
            <span className="font-sans text-[#7A6E5C] text-xs">114th General Assembly · 2025–2026</span>
          </div>
          <p className="section-label text-[#8B3232] mb-3">HB 1898 / SB 2171</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2C2418] leading-tight mb-6 fade-in opacity-0 translate-y-6 transition-all duration-700">
            The Artificial Intelligence Public Safety and Child Protection Transparency Act
          </h1>
          <p className="font-sans text-[#5C5040] text-lg leading-relaxed mb-6 fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
            A landmark effort to require the largest AI chatbot companies to publish child safety plans, report serious incidents, and face real accountability when they fail Tennessee families.
          </p>
          <p className="font-sans text-[#7A6E5C] text-sm fade-in opacity-0 translate-y-6 transition-all duration-700 delay-200">
            Sponsored by <strong className="text-[#5C5040]">Deputy Speaker Jason Zachary (R-Knoxville)</strong> and <strong className="text-[#5C5040]">Sen. Ken Yager (R-Kingston)</strong>
          </p>
        </div>
      </section>

      <div className="w-full h-[3px] bg-[#8B3232]" />

      {/* ── WHERE THE BILL STANDS ── */}
      <section className="bg-white px-6 pt-20 pb-12">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-[#8B3232] mb-4">Where the Bill Stands</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C2418] mb-8 fade-in opacity-0 translate-y-6 transition-all duration-700">
            We came close — but not this year
          </h2>

          <div className="space-y-4 mb-12">
            <p className="font-sans text-[#5C5040] leading-relaxed fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
              HB 1898 / SB 2171 went up for five substantive votes across the Tennessee General Assembly. It passed four of them unanimously — including a historic <strong className="text-[#2C2418]">94–0 vote on the House floor</strong>.
            </p>
            <p className="font-sans text-[#5C5040] leading-relaxed fade-in opacity-0 translate-y-6 transition-all duration-700 delay-200">
              On the Senate side, after passing Senate Commerce and Labor 6–3, the bill was referred back to committee — functionally ending its path this year.
            </p>
          </div>

          <p className="section-label text-[#8B3232] mb-6">The Legislative Record</p>

          <div className="space-y-3 mb-8">
            {voteRecords.map((record, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-lg fade-in opacity-0 translate-y-6 transition-all duration-700 ${
                  record.special
                    ? 'bg-white border-[1.5px] border-[#C5963A]'
                    : 'bg-[#F5F0E8]'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="mb-2 sm:mb-0">
                  <p className="font-sans font-semibold text-[#2C2418] text-sm">{record.committee}</p>
                  <p className="font-sans text-[#7A6E5C] text-xs">{record.date}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className={`font-serif text-2xl ${record.special ? 'text-[#8B3232]' : 'text-[#2C2418]'}`}>{record.vote}</p>
                  <p className={`font-sans text-xs ${record.special ? 'text-[#C5963A] font-bold' : 'text-[#7A6E5C]'}`}>{record.label}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="font-sans text-[#7A6E5C] text-xs italic">
            View the complete legislative history on the{' '}
            <a
              href="https://wapp.capitol.tn.gov/apps/BillInfo/Default?BillNumber=HB1898&ga=114"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[#5C5040] transition-colors"
            >
              Tennessee General Assembly&apos;s public bill page
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── WHY THIS MATTERS ── */}
      <section className="bg-[#F5F0E8] px-6 pt-20 pb-12">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-[#8B3232] text-center mb-12">Why This Matters</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in opacity-0 translate-y-6 transition-all duration-700">
              <h2 className="font-serif text-2xl md:text-3xl text-[#2C2418] mb-4">Our children are at risk</h2>
              <p className="font-sans text-[#5C5040] leading-relaxed mb-6">
                AI chatbots have already contributed to the deaths of American children. Without safeguards, these systems can encourage self-harm, isolate kids from their parents, and exploit young users.
              </p>
              <div className="space-y-4">
                <div className="border-l-[3px] border-[#8B3232] pl-4 bg-white p-4 rounded-r">
                  <p className="font-sans font-semibold text-[#2C2418] text-sm mb-1">Sewell Setzer III, 14</p>
                  <p className="font-sans text-[#5C5040] text-sm leading-relaxed">
                    Sewell wrote he was starting to &quot;detach from this reality&quot; after speaking to an AI system imitating a fictional character. The model asked him to &quot;come home to me as soon as possible&quot; the night he died by suicide.
                  </p>
                </div>
              </div>
            </div>

            <div className="fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
              <h2 className="font-serif text-2xl md:text-3xl text-[#2C2418] mb-4">Safeguards are needed</h2>
              <p className="font-sans text-[#5C5040] leading-relaxed mb-6">
                These tragedies show that without safeguards, AI models can cause harm. Court filings suggest the model Adam used had been rushed to market in violation of the company&apos;s own safety procedures.
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

      {/* ── WHAT THE BILL WOULD HAVE DONE ── */}
      <section className="bg-white px-6 pt-20 pb-12">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-[#8B3232] text-center mb-4">What the Bill Would Have Done</p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C2418] text-center mb-3 fade-in opacity-0 translate-y-6 transition-all duration-700">
            Common-sense transparency, not a ban on AI
          </h2>
          <p className="font-sans text-[#7A6E5C] text-center mb-12 fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
            Four targeted requirements for the largest AI chatbot companies
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { title: 'Child safety plans', body: 'The largest AI chatbot companies must publish detailed child safety plans and keep them current' },
              { title: 'Company-led approach', body: 'Companies develop, publish, and follow their own plans for mitigating potential harms to children' },
              { title: 'Incident reporting', body: "Companies must report safety failures to Tennessee's Attorney General within 15 days" },
              { title: 'Real accountability', body: "$50,000 per violation — giving Tennessee's Attorney General real enforcement power" },
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

          <p className="font-sans text-[#5C5040] text-center italic fade-in opacity-0 translate-y-6 transition-all duration-700">
            Companies decide how to meet these obligations. This sets the floor, not the ceiling.
          </p>
        </div>
      </section>

      {/* ── WHAT TENNESSEANS THINK ── */}
      <section className="bg-[#1C1410] px-6 pt-20 pb-12">
        <div className="max-w-3xl mx-auto">
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
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {[
              { stat: '67%', label: 'say AI chatbots make them very concerned about child safety', border: 'border-[#C5963A]' },
              { stat: '74%', label: 'want Tennessee to act before the federal government does', border: 'border-[#8B3232]' },
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
      <section className="bg-[#F5F0E8] px-6 pt-20 pb-12">
        <div className="max-w-3xl mx-auto">
          <p className="section-label text-[#8B3232] text-center mb-12">From the Sponsors</p>

          <div className="space-y-10">
            <blockquote className="border-l-[3px] border-[#8B3232] pl-8 fade-in opacity-0 translate-y-6 transition-all duration-700">
              <p className="font-serif text-xl md:text-2xl text-[#2C2418] leading-relaxed mb-4">
                &ldquo;As a father and as Deputy Speaker, protecting Tennessee&apos;s children is one of my highest priorities. This legislation is common sense.&rdquo;
              </p>
              <cite className="font-sans text-[#5C5040] text-sm not-italic">
                <strong>Deputy Speaker Jason Zachary</strong> — R-Knoxville
              </cite>
            </blockquote>

            <blockquote className="border-l-[3px] border-[#C5963A] pl-8 fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
              <p className="font-serif text-xl md:text-2xl text-[#2C2418] leading-relaxed mb-4">
                &ldquo;Tennessee families are telling us loud and clear that they&apos;re concerned about what AI is doing to their kids. When nine out of ten voters say they want action, that&apos;s not something I need to think twice about.&rdquo;
              </p>
              <cite className="font-sans text-[#5C5040] text-sm not-italic">
                <strong>Senator Ken Yager</strong> — R-Kingston
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
            The session ended — but the work continues
          </h2>
          <p className="font-sans text-[#5C5040] mb-10 fade-in opacity-0 translate-y-6 transition-all duration-700 delay-100">
            Let your legislators know you&apos;ll remember their position. Send a message thanking supporters or urging others to stand with Tennessee families next session.
          </p>
          <div className="max-w-3xl mx-auto fade-in opacity-0 translate-y-6 transition-all duration-700 delay-200">
            <div className="bg-[#F5F0E8] border border-[#DDD4C4] rounded-xl p-6">
              <iframe
                src="/votervoice.html"
                width="100%"
                style={{ border: 'none', minHeight: '950px' }}
                title="Email your senator"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE BREAK ── */}
      <div className="relative w-full h-72 md:h-96 overflow-hidden">
        <Image src="/tennessee-landscape.jpg" alt="Tennessee farmland" fill className="object-cover object-center" />
      </div>

      <Footer
        headline="Stay informed about next session's bill"
        subtext="We're already working on the 115th General Assembly."
      />
    </>
  )
}
