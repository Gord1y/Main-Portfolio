import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import { Rubik } from 'next/font/google'

import PageLayout from '@/components/layout'
import { ThemeProvider } from '@/components/layout/providers/theme-provider'

import './globals.css'

const rubik = Rubik({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true
}

export const metadata: Metadata = {
  title: `Danylo 'Gord1y' Hordiienko`,
  description: 'Danylo Hordiienko personal portfolio',
  applicationName: 'Gord1y.dev',
  appleWebApp: {
    capable: true,
    title: 'Gord1y.dev',
    statusBarStyle: 'black-translucent'
  },
  creator: 'Danylo Hordiienko',
  authors: [{ name: 'gord1y', url: 'https://gord1y.dev' }],
  keywords:
    'gord1y, danylo hordiienko, portfolio, personal, website, blog, projects, contact, about, skills, experience, education, work, history, cv, resume,     web, developer, software, engineer, frontend, backend, fullstack, javascript, typescript, react, next, node, express, mongodb, postgresql, graphql',
  other: {
    'mobile-web-app-capable': 'yes',
    'msapplication-tap-highlight': 'no'
  },
  metadataBase: new URL('https://gord1y.dev/'),
  openGraph: {
    type: 'website',
    siteName: 'gord1y.dev',
    emails: ['gordiyvl@gmail.com'],
    locale: 'en_US',
    url: 'https://gord1y.dev',
    title: 'Gord1y.dev - Danylo Hordiienko personal portfolio'
  },
  robots: 'index, follow'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={rubik.className}>
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <PageLayout>{children}</PageLayout>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
