# Aygıt Technologies - Kurumsal Web Sitesi Altyapısı

## 🚀 Production-Ready Corporate Website Infrastructure

Modern, profesyonel ve kurumsal standartlarda geliştirilmiş web sitesi altyapısı.

### ✅ Sistem Özellikleri

- **Kurumsal Tasarım**: Aygıt marka kimliğine uygun sofistike mavi-beyaz renk şeması
- **4 Farklı Header Sistemi**: Her sayfa tipine özel header implementasyonu
- **Responsive Tasarım**: Mobil-first yaklaşım ile tüm cihazlarda mükemmel görüntü
- **Modern Animasyonlar**: Framer Motion ile profesyonel geçiş efektleri
- **SEO Optimize**: Arama motoru optimizasyonu ile yüksek performans
- **TypeScript**: Type-safe development için tam TypeScript desteği

### 🎨 Tasarım Sistemi

#### Marka Renkleri
- **Primary Blue**: `#0365F4` (Aygıt ana rengi)
- **Secondary Blue**: `#0091BB` (Aygıt ikincil rengi)
- **Brand Gradient**: Linear gradient (Primary → Secondary)

#### Tipografi
- **Font**: Inter (Google Fonts)
- **Ağırlıklar**: 300, 400, 500, 600, 700
- **Temel Boyut**: 14px

#### Header Sistemleri
- **HeaderTransparent**: Ana sayfa için (şeffaf, beyaz logo/metin)
- **HeaderWithMegaMenu**: Enterprise Portal için (özel gradient)
- **HeaderWithMegaMenuDark**: İç sayfalar için (koyu tema)
- **HeaderWithMegaMenuLight**: Beyaz sayfa için (siyah logo/metin)

### 🛠️ Geliştirme Komutları

```bash
# Bağımlılıkları yükle
npm install

# Development server başlat
npm run dev

# Production build oluştur
npm run build

# Production build'i önizle
npm run preview

# TypeScript kontrol
npm run type-check

# Cache temizle
npm run clean-cache

# Production temizlik + build
npm run deploy

# Sistem optimizasyonu
npm run optimize
```

### 🏗️ Teknoloji Stack

- **Frontend**: React 18.2 + TypeScript 5.0
- **Styling**: Tailwind CSS V4.1.12
- **Animations**: Framer Motion 11.11.17
- **Build Tool**: Vite 5.0
- **Icons**: Lucide React
- **UI Components**: ShadCN/UI
- **Forms**: React Hook Form
- **Charts**: Recharts

### 📁 Proje Yapısı

```
├── components/          # React componentleri
│   ├── ui/             # ShadCN UI componentleri
│   └── ...             # Özel componentler
├── pages/              # Sayfa componentleri
│   ├── features/       # Özellik sayfaları
│   ├── integrations/   # Entegrasyon sayfaları
│   ├── services/       # Hizmet sayfaları
│   ├── solutions/      # Çözüm sayfaları
│   └── support/        # Destek sayfaları
├── assets/             # Statik dosyalar
│   ├── logos/          # Logo dosyaları
│   ├── images/         # Görseller
│   └── icons/          # İkonlar
├── router/             # Routing yapısı
├── utils/              # Yardımcı fonksiyonlar
├── hooks/              # Custom hooks
├── constants/          # Sabitler
├── styles/             # CSS dosyaları
└── types/              # TypeScript tip tanımları
```

### 🔧 Yapılandırma

#### Environment Variables
Development/Production ortamları için environment değişkenleri:
```
NODE_ENV=development|production
VITE_APP_URL=your-domain.com
```

#### Build Optimizasyonu
- **Code Splitting**: Route bazlı
- **Bundle Chunking**: Vendor, Motion, UI ayrı chunk'lar
- **Tree Shaking**: Kullanılmayan kodların temizlenmesi
- **Minification**: Production build'de aktif

### 🚀 Deployment

#### Netlify/Vercel için
```bash
# Build komutu
npm run build

# Output dizini
dist/
```

#### Apache/Nginx için
`.htaccess` ve `robots.txt` dosyaları hazır durumda.

### 🛡️ Güvenlik & Performans

- **CSP Headers**: Content Security Policy
- **HTTPS Redirect**: Güvenli bağlantı zorunluluğu
- **Asset Optimization**: Görsel ve font optimizasyonu
- **Lazy Loading**: Komponet ve görsel lazy loading
- **Error Boundaries**: Hata yakalama ve fallback

### 🎯 SEO & Analytics

- **Meta Tags**: Her sayfa için optimize edilmiş
- **Structured Data**: Schema.org desteği
- **Sitemap**: Otomatik sitemap oluşturma
- **Analytics Ready**: Google Analytics entegrasyonu hazır

### 📱 Responsive Design

- **Mobile First**: Mobil öncelikli responsive tasarım
- **Breakpoints**: sm, md, lg, xl, 2xl
- **Touch Friendly**: Dokunmatik cihaz optimizasyonu

### 🎨 Animasyon Sistemi

- **Page Transitions**: Sayfa geçiş animasyonları
- **Hover Effects**: Interactive hover efektleri
- **Loading States**: Yükleme durumu animasyonları
- **Scroll Animations**: Scroll-triggered animasyonlar

### 📧 İletişim & Destek

**Aygıt Technologies**
- Web: [aygittechnologies.com](https://aygittechnologies.com)
- Email: info@aygittechnologies.com
- Telefon: +90 XXX XXX XX XX

---

### 🏆 Production Ready Features

✅ TypeScript strict mode aktif
✅ ESLint kuralları yapılandırılmış
✅ Framer Motion optimize implementasyon
✅ Tailwind CSS V4 uyumluluğu
✅ Production build optimizasyonu
✅ SEO meta tags tamamlandı
✅ Responsive design test edildi
✅ Cross-browser uyumluluk
✅ Performance optimization
✅ Security headers
✅ Error handling

**Sistem tamamen production-ready durumda ve deployment için hazır.**