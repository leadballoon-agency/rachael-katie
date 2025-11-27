import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import FacebookPixel from '@/components/FacebookPixel'
import ConvertBox from '@/components/ConvertBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CO2 Laser Treatment Southampton - Expert Skin Resurfacing | Rachael Katie Cosmetics',
  description: 'Transform your skin with CO2 laser treatment at Rachael Katie Cosmetics Southampton. Gold standard treatment for acne scars, wrinkles & skin texture. 70-80% scar reduction. Award-winning aesthetics practitioner with 1,257+ 5-star Google reviews.',
  keywords: 'CO2 laser Southampton, acne scar treatment Southampton, laser skin resurfacing, CO2 laser treatment, pigmentation treatment, wrinkle treatment, Rachael Katie Cosmetics, Rachael Katie, Southampton aesthetics, laser resurfacing UK, CO2 laser acne scars, fractional laser Southampton',
  authors: [{ name: 'Rachael Katie Cosmetics' }],
  creator: 'Rachael Katie Cosmetics',
  publisher: 'Rachael Katie Cosmetics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://co2lasersouthampton.co.uk'),
  alternates: {
    canonical: 'https://co2lasersouthampton.co.uk',
  },
  openGraph: {
    title: 'CO2 Laser Treatment Southampton - Expert Skin Resurfacing | Rachael Katie Cosmetics',
    description: 'Transform your skin with CO2 laser treatment at Rachael Katie Cosmetics Southampton. Gold standard treatment for acne scars, wrinkles & skin texture. 70-80% scar reduction.',
    url: 'https://co2lasersouthampton.co.uk',
    siteName: 'Rachael Katie Cosmetics CO2 Laser Southampton',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/Rachael-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Rachael Katie - Expert CO2 Laser Practitioner in Southampton',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CO2 Laser Treatment Southampton | Rachael Katie Cosmetics',
    description: 'Transform your skin with CO2 laser treatment. Gold standard treatment for acne scars, wrinkles & skin texture. 70-80% scar reduction. Expert practitioner in Southampton.',
    images: ['/images/Rachael-1.jpg'],
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
  other: {
    'geo.region': 'GB-HAM',
    'geo.placename': 'Southampton',
    'geo.position': '50.9097;-1.4044',
    'ICBM': '50.9097, -1.4044',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        <FacebookPixel />
        <ConvertBox />
        <StructuredData />
        {children}
      </body>
    </html>
  )
}