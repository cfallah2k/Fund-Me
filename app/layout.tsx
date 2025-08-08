import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fund-Me - Africa\'s Leading Crowdfunding Platform',
  description: 'Revolutionize fundraising in Africa with Fund-Me. Crowdfunding, venture funding, equity offerings, and networking all in one platform. Empower individuals, startups, and NGOs to access funding easily and efficiently.',
  keywords: 'crowdfunding, venture funding, equity, Africa, fundraising, startups, NGOs, investment, networking',
  authors: [{ name: 'Fund-Me Team' }],
  openGraph: {
    title: 'Fund-Me - Africa\'s Leading Crowdfunding Platform',
    description: 'Revolutionize fundraising in Africa with Fund-Me. Crowdfunding, venture funding, equity offerings, and networking all in one platform.',
    url: 'https://fund-me.com',
    siteName: 'Fund-Me',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fund-Me Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fund-Me - Africa\'s Leading Crowdfunding Platform',
    description: 'Revolutionize fundraising in Africa with Fund-Me. Crowdfunding, venture funding, equity offerings, and networking all in one platform.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#22c55e',
                secondary: '#fff',
              },
            },
            error: {
              duration: 5000,
              iconTheme: {
                primary: '#ef4444',
                secondary: '#fff',
              },
            },
          }}
        />
      </body>
    </html>
  )
}
