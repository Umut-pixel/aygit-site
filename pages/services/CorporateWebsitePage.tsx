// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion, useInView } from "../../components/FramerMotionSafe";

// TYPE OVERRIDE - Fix CorporateWebsitePage motion.div issues
const MotionDiv = motion.div as any;
import { useRef, useEffect } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { 
  CheckCircle, 
  ArrowRight,
  Globe,
  Smartphone,
  Search,
  Shield,
  Zap,
  Users,
  BarChart3,
  Settings,
  Palette,
  Code,
  HeadphonesIcon,
  Star,
  Clock,
  Award
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import React from "react";

const features = [
  {
    icon: Globe,
    title: "Modern Responsive Tasarım",
    description: "Tüm cihazlarda mükemmel görünen, mobil öncelikli tasarım yaklaşımı",
    details: ["Masaüstü, tablet ve mobil uyumlu", "Retina ekran desteği", "Hızlı yüklenme süreleri"]
  },
  {
    icon: Search,
    title: "SEO Optimizasyonu",
    description: "Arama motorlarında üst sıralarda yer almanızı sağlayan teknik altyapı",
    details: ["Google Analytics entegrasyonu", "Meta tag optimizasyonu", "Site haritası oluşturma"]
  },
  {
    icon: Settings,
    title: "İçerik Yönetim Sistemi",
    description: "Kullanıcı dostu admin paneli ile kolay içerik yönetimi",
    details: ["Sürükle-bırak editör", "Medya kütüphanesi", "Çoklu kullanıcı desteği"]
  },
  {
    icon: Shield,
    title: "SSL Güvenlik Sertifikası",
    description: "Ücretsiz SSL sertifikası ile güvenli veri aktarımı",
    details: ["256-bit şifreleme", "Güvenlik güncellemeleri", "DDoS koruması"]
  },
  {
    icon: Zap,
    title: "Hızlı Performans",
    description: "CDN teknolojisi ile dünyanın her yerinden hızlı erişim",
    details: ["Küresel CDN ağı", "Önbellek optimizasyonu", "Sıkıştırma teknolojileri"]
  },
  {
    icon: HeadphonesIcon,
    title: "7/24 Teknik Destek",
    description: "Uzman ekibimizden kesintisiz destek hizmeti",
    details: ["Canlı chat desteği", "E-posta destek", "Telefon desteği"]
  }
];

const plans = [
  {
    name: "Başlangıç",
    price: "₺299",
    period: "/ay",
    description: "Küçük işletmeler için ideal başlangıç paketi",
    features: [
      "5 sayfa web sitesi",
      "Temel SEO optimizasyonu",
      "SSL sertifikası",
      "Email desteği",
      "Mobil uyumlu tasarım"
    ],
    popular: false,
    cta: "Başlangıç Planını Seç"
  },
  {
    name: "Profesyonel",
    price: "₺599",
    period: "/ay",
    description: "Büyüyen işletmeler için kapsamlı çözüm",
    features: [
      "Sınırsız sayfa",
      "Gelişmiş SEO araçları",
      "Google Analytics",
      "Canlı chat desteği",
      "E-ticaret entegrasyonu",
      "Sosyal medya entegrasyonu"
    ],
    popular: true,
    cta: "Profesyonel Planını Seç"
  },
  {
    name: "Kurumsal",
    price: "₺999",
    period: "/ay",
    description: "Büyük organizasyonlar için özel çözümler",
    features: [
      "Özel tasarım",
      "Çoklu dil desteği",
      "API entegrasyonları",
      "Öncelikli destek",
      "Güvenlik taraması",
      "Performans optimizasyonu"
    ],
    popular: false,
    cta: "Özel Teklif Al"
  }
];

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    company: "ABC Teknoloji",
    role: "Genel Müdür",
    content: "Aygıt Technologies ile çalışmaya başladığımızdan beri web sitemiz üzerinden gelen müşteri sayısı %200 arttı.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Zeynep Demir",
    company: "Demir Hukuk",
    role: "Kurucu Ortak",
    content: "Profesyonel web sitemiz sayesinde daha güvenilir görünüyoruz ve müvekkil sayımız sürekli artıyor.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Mehmet Kaya",
    company: "Kaya İnşaat",
    role: "İş Geliştirme Müdürü",
    content: "Mobil uyumlu tasarım ve hızlı yükleme süreleri ile potansiyel müşterilerimiz sitede daha fazla zaman geçiriyor.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];

const stats = [
  { icon: Users, value: "500+", label: "Mutlu Müşteri" },
  { icon: Globe, value: "99.9%", label: "Uptime Garantisi" },
  { icon: Clock, value: "<2s", label: "Yükleme Süresi" },
  { icon: Award, value: "24/7", label: "Destek Hizmeti" }
];

// Simple analytics tracking
const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  console.log(`📊 Analytics Event: ${eventName}`, properties);
  // In real implementation, this would send to analytics service
  // Example: gtag('event', eventName, properties);
};

export function CorporateWebsitePage() {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const heroInView = useInView(heroRef);
  const featuresInView = useInView(featuresRef);
  const pricingInView = useInView(pricingRef);
  const testimonialsInView = useInView(testimonialsRef);

  // Track page view
  useEffect(() => {
    trackEvent('page_view', {
      page: 'corporate_website_service',
      title: 'Kurumsal Web Sitesi',
      category: 'services'
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30">
                <Globe className="w-4 h-4 mr-2" />
                Kurumsal Web Çözümleri
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Kurumsal Web
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                  {" "}Siteniz
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Profesyonel tasarım, güçlü altyapı ve kapsamlı özelliklerle 
                dijital kimliğinizi güçlendirin. Modern, güvenli ve SEO uyumlu 
                kurumsal web sitesi çözümleri.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4"
                  onClick={() => trackEvent('button_click', { 
                    button: 'demo_request',
                    location: 'hero_section',
                    service: 'corporate_website'
                  })}
                >
                  <span>Ücretsiz Demo</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
                  onClick={() => trackEvent('button_click', { 
                    button: 'view_examples',
                    location: 'hero_section',
                    service: 'corporate_website'
                  })}
                >
                  Örnekleri İncele
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NjA0MTI0NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Kurumsal Web Sitesi Örneği"
                  className="w-full rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Canlı</span>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
              Özellikler
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Kurumsal Web Sitenizin
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {" "}Güçlü Özellikleri
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern teknolojiler ve kullanıcı dostu çözümlerle donatılmış 
              kurumsal web sitesi özelliklerimizi keşfedin.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <MotionDiv
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg"
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </MotionDiv>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                    
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
              Fiyatlandırma
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Size Uygun
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {" "}Planı Seçin
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İhtiyacınıza göre tasarlanmış esnek fiyatlandırma seçenekleri. 
              Tüm planlarda 30 gün ücretsiz deneme süresi.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={pricingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2">
                      En Popüler
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full ${plan.popular ? 'border-blue-200 shadow-xl' : 'border-gray-200'} bg-white`}>
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="flex items-center justify-center mb-4">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-600 ml-2">{plan.period}</span>
                      </div>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' 
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                      size="lg"
                      onClick={() => trackEvent('pricing_plan_selected', {
                        plan: plan.name,
                        price: plan.price,
                        popular: plan.popular,
                        service: 'corporate_website'
                      })}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
              Müşteri Yorumları
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Müşterilerimiz
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {" "}Ne Diyor?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Binlerce memnun müşterimizin deneyimlerini okuyun ve 
              neden bizi tercih ettiklerini öğrenin.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="flex items-center">
                      <ImageWithFallback
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-blue-600">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
                İletişim
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Projenizi
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  {" "}Konuşalım
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Kurumsal web sitesi ihtiyaçlarınızı değerlendirmek ve size özel 
                çözüm önerisi sunmak için uzman ekibimizle görüşün.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Ücretsiz proje danışmanlığı</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">24 saat içinde geri dönüş</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Size özel fiyat teklifi</span>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-white shadow-xl border-0">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adınız Soyadınız *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Şirket Adı
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Şirket adınız"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta Adresi *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="ornek@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon Numarası
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+90 5XX XXX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Proje Detayları *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Projeniz hakkında detayları paylaşın..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bütçe Aralığı
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                      <option value="">Bütçe aralığınızı seçin</option>
                      <option value="5000-15000">₺5.000 - ₺15.000</option>
                      <option value="15000-30000">₺15.000 - ₺30.000</option>
                      <option value="30000-50000">₺30.000 - ₺50.000</option>
                      <option value="50000+">₺50.000+</option>
                    </select>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 text-lg font-medium"
                    onClick={() => trackEvent('contact_form_submit', {
                      form_type: 'project_inquiry',
                      service: 'corporate_website',
                      location: 'contact_section'
                    })}
                  >
                    Ücretsiz Teklif Alın
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Form göndererek{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      Gizlilik Politikamızı
                    </a>{" "}
                    kabul etmiş olursunuz.
                  </p>
                </form>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Kurumsal Web Sitenizi Bugün Başlatın
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Profesyonel ekibimizle çalışarak markanızı dijital dünyada öne çıkarın. 
              Ücretsiz konsültasyon için hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4"
                onClick={() => trackEvent('cta_button_click', {
                  button: 'start_project',
                  location: 'cta_section',
                  service: 'corporate_website'
                })}
              >
                Projeyi Başlat
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
                onClick={() => trackEvent('cta_button_click', {
                  button: 'get_consultation',
                  location: 'cta_section',
                  service: 'corporate_website'
                })}
              >
                Ücretsiz Danışmanlık
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}