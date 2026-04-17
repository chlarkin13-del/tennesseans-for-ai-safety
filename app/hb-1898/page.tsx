import type { Metadata } from 'next'
import HB1898Content from '../components/HB1898Content'

export const metadata: Metadata = {
  title: 'HB 1898 — Tennesseans for AI Safety',
  description: 'HB 1898 / SB 2171 — The Artificial Intelligence Public Safety and Child Protection Transparency Act. A landmark effort for AI safety in Tennessee.',
  openGraph: {
    title: 'HB 1898 — Tennesseans for AI Safety',
    description: 'The Artificial Intelligence Public Safety and Child Protection Transparency Act — a landmark effort for AI safety in Tennessee.',
    url: 'https://tennesseans-for-ai-safety.org/hb-1898',
    siteName: 'Tennesseans for AI Safety',
    locale: 'en_US',
    type: 'website',
  },
}

export default function HB1898Page() {
  return <HB1898Content />
}
