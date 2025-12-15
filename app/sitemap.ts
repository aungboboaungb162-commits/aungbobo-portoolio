// app/sitemap.ts
import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  // Website ၏ Base URL ကို သတ်မှတ်ခြင်း
  const baseUrl = 'https://www.a2bfolio.com';
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(), // နောက်ဆုံး ပြင်ဆင်သည့် ရက်စွဲ
      changeFrequency: 'yearly', // ပြောင်းလဲမှုနှုန်း
      priority: 1, // အရေးကြီးဆုံး Page ဖြစ်သောကြောင့် Priority 1.0 ပေးခြင်း
    },
    // အကယ်၍ အခြား Page များ (ဥပမာ: /blog, /gallery) ရှိပါက ဤနေရာတွင် ထပ်ထည့်နိုင်ပါသည်။
    // {
    //   url: `${baseUrl}/gallery`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}