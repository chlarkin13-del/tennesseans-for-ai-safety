import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tennesseans for AI Safety — Protect Children. Prevent Tragedy. Promote Innovation.',
  description: 'A nonpartisan coalition supporting Tennessee HB 1898 / SB 2171 — common-sense child safety protections for AI chatbots.',
  openGraph: {
    title: 'Tennesseans for AI Safety — Protect Children. Prevent Tragedy. Promote Innovation.',
    description: 'Tennessee families deserve to know that AI systems are built with real safeguards — for our children and our communities.',
    url: 'https://tennesseans-for-ai-safety.org',
    siteName: 'Tennesseans for AI Safety',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>★</text></svg>",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
