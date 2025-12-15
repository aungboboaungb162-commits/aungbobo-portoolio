// app/layout.tsx
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
// 2. 📄 Metadata Configuration (Aung Bo Bo & A2B Folio)
// =========================================================

export const metadata: Metadata = {
  // 1. Title: နာမည်နှင့် Brand Name နှစ်ခုလုံးကို Pipe (|) ဖြင့် ပေါင်းထည့်ခြင်း
  title: 'Aung Bo Bo | F&B Trainer & Cruise Ship Expert | A2B Folio',
  
  // 2. Description: ရှင်းလင်းပြီး စီးပွားရေးအမည်ကို ထည့်သွင်းခြင်း
  description: '8+ years of experience in luxury cruise ship hospitality. Professional F&B Training Specialist focused on enhancing service quality, driving operational excellence, and maximizing guest satisfaction. (A2B Folio)',
  
  // 3. Keywords: နာမည်နှင့် Brand Name ပါဝင်သော Keywords များ
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
  
  // 5. Open Graph / Social Media Sharing အတွက်
  openGraph: {
    title: 'Aung Bo Bo | F&B Trainer | A2B Folio',
    description: 'Luxury Cruise Ship F&B Training Specialist Professional Portfolio (A2B Folio)',
    url: 'https://www.a2bfolio.com',
    siteName: 'A2B Folio - Aung Bo Bo Portfolio', // Brand Name ကို အလေးထား ဖော်ပြခြင်း
    // Image URL is best placed in the root page.tsx for dynamic data
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
        {/* Font Awesome link ကို ဤနေရာတွင် ထားပါသည် */}
        <link 
            rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
            crossOrigin="anonymous"
        />
        
        {children}
      </body>
    </html>
  );
}