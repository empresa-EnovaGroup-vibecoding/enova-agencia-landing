import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Enova Group - Soluciones Digitales para tu Negocio',
  description: 'Desarrollo web, apps, agentes IA y automatizaciones a la medida de tu operacion. Consulta gratuita.',
  keywords: ['desarrollo web', 'agentes IA', 'automatizacion', 'transformacion digital', 'apps a medida', 'Enova Group'],
  authors: [{ name: 'Enova Group' }],
  openGraph: {
    title: 'Enova Group - Soluciones Digitales a tu Medida',
    description: 'Desarrollo web, agentes IA y automatizaciones. Llevamos tu negocio al siguiente nivel. Consulta gratuita.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'Enova Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enova Group - Soluciones Digitales a tu Medida',
    description: 'Desarrollo web, agentes IA y automatizaciones. Llevamos tu negocio al siguiente nivel.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/icon-192x192.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
