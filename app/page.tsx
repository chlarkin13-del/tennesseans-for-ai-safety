import type { Metadata } from 'next'
import HomeContent from './components/HomeContent'

export const metadata: Metadata = {
  title: 'Tennesseans for AI Safety — Protecting Tennessee families from AI risks',
  description: 'A nonpartisan coalition working for common-sense AI safeguards in Tennessee.',
  openGraph: {
    title: 'Tennesseans for AI Safety — Protecting Tennessee families from AI risks',
    description: 'A nonpartisan coalition working for common-sense AI safeguards in Tennessee.',
    url: 'https://tennesseans-for-ai-safety.org',
    siteName: 'Tennesseans for AI Safety',
    locale: 'en_US',
    type: 'website',
  },
}

export default function HomePage() {
  return <HomeContent />
}
