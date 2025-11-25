import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import FacebookPixel from '@/components/FacebookPixel'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CO2 Laser Treatment London - Expert Skin Resurfacing | Rachael Katie Cosmetics',
  description: 'Transform your skin with CO2 laser treatment at Rachael Katie Cosmetics London. Gold standard treatment for acne scars, wrinkles & skin texture. 70-80% scar reduction. Award-winning aesthetics practitioner with 1,257+ 5-star Google reviews.',
  keywords: 'CO2 laser London, acne scar treatment London, laser skin resurfacing, CO2 laser treatment, pigmentation treatment, wrinkle treatment, Rachael Katie Cosmetics, Rachael Katie, London aesthetics, laser resurfacing UK, CO2 laser acne scars, fractional laser London',
  authors: [{ name: 'Rachael Katie Cosmetics' }],
  creator: 'Rachael Katie Cosmetics',
  publisher: 'Rachael Katie Cosmetics',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://co2london.com'),
  alternates: {
    canonical: 'https://co2london.com',
  },
  openGraph: {
    title: 'CO2 Laser Treatment London - Expert Skin Resurfacing | Rachael Katie Cosmetics',
    description: 'Transform your skin with CO2 laser treatment at Rachael Katie Cosmetics London. Gold standard treatment for acne scars, wrinkles & skin texture. 70-80% scar reduction.',
    url: 'https://co2london.com',
    siteName: 'Rachael Katie Cosmetics CO2 Laser London',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/images/co2laser-skin-rejeuvenation.jpeg',
        width: 1200,
        height: 675,
        alt: 'CO2 Laser Skin Resurfacing Before and After Results - Rachael Katie Cosmetics London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CO2 Laser Treatment London | Rachael Katie Cosmetics',
    description: 'Transform your skin with CO2 laser treatment. Gold standard treatment for acne scars, wrinkles & skin texture. 70-80% scar reduction. 1,257+ 5-star reviews.',
    images: ['/images/co2laser-skin-rejeuvenation.jpeg'],
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
        <StructuredData />
        {children}
      </body>
    </html>
  )
}