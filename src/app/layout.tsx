import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DataCHAIN',
  description: 'Essential software tools for analytics, visualization, automatization and monitoring.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.ico" type="image/x-icon"/>
      </head>
      <body className={inter.className} style = {{
      backgroundImage: 'url("/media/images/background.png")',
      backgroundSize:"cover",
      backgroundRepeat: 'no-repeat'
      }}>
        {children}
      </body>
    </html>
  )
}
