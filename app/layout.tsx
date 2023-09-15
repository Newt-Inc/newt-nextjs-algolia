import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newt・Algolia・Next.js Example',
  description: 'Newt・Algolia・Next.js Example',
  openGraph: {
    title: 'Newt・Algolia・Next.js Example',
    description: 'Newt・Algolia・Next.js Example',
    images: '/og.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
