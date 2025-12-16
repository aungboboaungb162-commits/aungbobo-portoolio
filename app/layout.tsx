// app/layout.tsx - FINAL FIXED VERSION (Canonical, Font Awesome Security, and Favicon)
import { Inter, Merriweather } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

// =========================================================
// 1. ⚙️ Fonts Configuration (Performance Best Practice)
// =========================================================

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['400', '700'],
  display: 'swap',
});

// =========================================================
// 2. 📄 Metadata Configuration (Icons FIX)
// =========================================================

export const metadata: Metadata = {
  // 1. Title: 
  title: 'Aung Bo Bo | F&B Trainer & Cruise Ship Expert | A2B Folio',
  
  // 2. Description: 
  description: '8+ years of experience in luxury cruise ship hospitality. Professional F&B Training Specialist focused on enhancing service quality, driving operational excellence, and maximizing guest satisfaction. (A2B Folio)',
  
  // 3. Keywords: 
  keywords: [
    'Aung Bo Bo', 
    'A2B Folio', 
    'F&B Trainer', 
    'Cruise Ship Hospitality', 
    'Seaman Trainer', 
    'Fine Dining Specialist', 
    'Myanmar F&B Trainer'
  ],
  
  // 4. Canonical URL:
  alternates: {
    canonical: 'https://www.a2bfolio.com',
  },
  
  // 🔴 FIX: ICON CONFIGURATION - a2bfolio.jpeg ကို Favicon အဖြစ် သတ်မှတ်
  icons: {
    icon: '/a2bfolio.png', // Browser Tab Icon
    apple: '/a2bfolio.png', // iOS Home Screen Icon
  },
  
  // 5. Open Graph / Social Media Sharing အတွက်
  openGraph: {
    title: 'Aung Bo Bo | F&B Trainer | A2B Folio',
    description: 'Luxury Cruise Ship F&B Training Specialist Professional Portfolio (A2B Folio)',
    url: 'https://www.a2bfolio.com',
    siteName: 'A2B Folio - Aung Bo Bo Portfolio', 
  },
  
  // 6. Robots
  robots: 'index, follow',
};


// =========================================================
// 3. 📦 RootLayout Component
// =========================================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body>
        {/* Font Awesome link တွင် Integrity Hash ထည့်သွင်းထားသည် */}
        <link 
            rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
            integrity="sha512-iecdLmaskl7CV7pI5XhU8T9Q1F/p/gA7p760hQ0x2x0r1jV5Z6M4S04QJ94o6RzE8Z90bTj2sT7A2D2v0u6oQ=="
            crossOrigin="anonymous"
        />
        
        {children}
      </body>
    </html>
  );
}