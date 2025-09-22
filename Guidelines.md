# Aygıt Technologies - Web Sitesi Geliştirme Kılavuzu

## Genel Kurallar

* **Modern Inter Fontu**: Tüm tipografi Inter font ailesi kullanılarak oluşturulacak
* **Responsive Tasarım**: Mobil-first yaklaşım ile responsive tasarım uygulanacak
* **Component Odaklı**: Kod yeniden kullanılabilir React componentleri olarak organize edilecek
* **TypeScript Kullanımı**: Tüm kod TypeScript ile yazılacak
* **SEO Optimizasyonu**: Tüm sayfalarda uygun meta tagları ve yapısal data yer alacak

## Tasarım Sistemi Kuralları

### Marka Renkleri
* **Primary Blue**: `#0365F4` (--aygit-primary)
* **Secondary Blue**: `#0091BB` (--aygit-secondary)
* **Gradient**: Linear gradient (#0365F4 to #0091BB)
* **Beyaz**: `#ffffff` (arka plan ve kontrast için)
* **Siyah/Koyu**: `#0f172a` (metin ve detaylar için)

### Tipografi
* **Ana Font**: Inter (300, 400, 500, 600, 700 ağırlıklarda)
* **Temel Font Boyutu**: 14px
* **Heading Boyutları**: H1 (text-2xl), H2 (text-xl), H3 (text-lg), H4 (text-base)
* **Satır Aralığı**: Headingler için 1.4, paragraflar için 1.6

### Header Sistemi
* **HeaderTransparent**: Ana sayfa için (transparent, beyaz logo/metin)
* **HeaderWithMegaMenu**: Enterprise Portal için (özel gradient header)
* **HeaderWithMegaMenuDark**: İç sayfalar için (koyu header)
* **HeaderWithMegaMenuLight**: Beyaz arka planlı sayfalar için (siyah logo/metin)

### Sayfa Kategorileri
* **Ana Sayfa**: Gradient arka plan, transparent header
* **Enterprise Portal**: Özel gradient arka plan, mega menülü header
* **İç Sayfalar**: Beyaz arka plan, uygun header tipi
* **Canlı Destek**: Header/footer olmadan tam ekran deneyim

## Animasyon Kuralları

* **Framer Motion Kullanımı**: Animasyonlar için framer-motion kütüphanesi kullanılacak
* **Yumuşak Geçişler**: 0.3s ease transition değerleri tercih edilecek
* **Hover Efektleri**: Buttonlarda hafif yukarı hareket (-2px translateY)
* **Fade-in Animasyonları**: Sayfa yüklemelerinde fadeIn ve slideUp animasyonları

## Component Kuralları

### Button
* **Primary Button**: Aygıt gradient arka plan, beyaz metin
* **Secondary Button**: Şeffaf arka plan, primary renk kenarlık
* **Hover Efektleri**: Transform ve shadow değişimleri

### Navigation
* **Mega Menu**: Kategorik içerik organizasyonu
* **Breadcrumb**: İç sayfalarda lokasyon gösterimi
* **Mobile Menu**: Responsive hamburger menü sistemi

### Logo Kullanımı
* **Beyaz Logo**: Koyu arka planlar için (logo-white class)
* **Siyah Logo**: Açık arka planlar için (logo-black class)
* **Primary Logo**: Marka renkli logo (logo-primary class)

## Performans Kuralları

* **Lazy Loading**: Görseller ve componentler için lazy loading
* **Code Splitting**: Route bazlı kod ayrımı
* **Asset Optimizasyonu**: Görsel ve dosya boyutları optimize edilecek
* **Bundle Chunking**: Vendor, motion ve UI kütüphaneleri ayrı chunk'larda

## SEO ve Erişilebilirlik

* **Meta Tags**: Her sayfa için uygun title, description ve keywords
* **Alt Attributes**: Tüm görsellerde uygun alt metinleri
* **Semantic HTML**: Anlamsal HTML elementleri kullanımı
* **Focus States**: Klavye navigasyonu için odak durumları

## Dosya Organizasyonu

* **Components**: `/components` dizininde kategoric organizasyon
* **Pages**: `/pages` dizininde route yapısına uygun organizasyon
* **Assets**: `/assets` dizininde tipi bazlı organizasyon (logos, images, icons)
* **Utils**: `/utils` dizininde yardımcı fonksiyonlar
* **Constants**: `/constants` dizininde sabit değerler

## Kod Kalitesi

* **TypeScript**: Strict mode kullanımı
* **ESLint**: Kod kalitesi kontrolü
* **Console Logs**: Development amaçlı detaylı loglama
* **Error Handling**: Hata durumları için fallback componentleri