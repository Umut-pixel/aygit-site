// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";

// TYPE OVERRIDE - Fix SeoPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  Search,
  TrendingUp,
  Globe,
  Target,
  BarChart3,
  Eye,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Settings,
  Link,
  Edit,
  FileText,
  Smartphone,
  Gauge,
  MapPin,
  Calendar,
  Tag,
  BookOpen,
  Bot,
  Globe2,
  Mic,
  Building,
  Briefcase
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import React from "react";

const features = [
  {
    icon: Search,
    title: "Keyword Optimization",
    description: "Anahtar kelime araştırması ve web sitenizin içeriklerini hedef kelimeler için optimize etme."
  },
  {
    icon: FileText,
    title: "Content SEO",
    description: "SEO uyumlu içerik oluşturma, meta descriptions ve title tags optimizasyonu."
  },
  {
    icon: Link,
    title: "Link Building",
    description: "Kaliteli backlink stratejileri ve internal link yapısı optimizasyonu."
  },
  {
    icon: Gauge,
    title: "Site Speed Optimization",
    description: "Web sitesi hızı artırma, Core Web Vitals optimizasyonu ve performans iyileştirme."
  },
  {
    icon: Smartphone,
    title: "Mobile SEO",
    description: "Mobil uyumlu tasarım ve mobil arama sonuçları için optimizasyon."
  },
  {
    icon: BarChart3,
    title: "SEO Analytics",
    description: "Detaylı SEO raporları, ranking takibi ve performans analizi."
  }
];

const stats = [
  { label: "Organik Trafik Artışı", value: "%285", icon: TrendingUp },
  { label: "Keyword Rankings", value: "1500+", icon: Target },
  { label: "Page Speed Score", value: "95/100", icon: Gauge },
  { label: "SERP Görünürlük", value: "%78", icon: Eye }
];

const seoModules = [
  {
    title: "Technical SEO",
    description: "Web sitesinin teknik altyapı optimizasyonu",
    features: ["Site structure optimization", "XML sitemap generation", "Robots.txt configuration", "Schema markup implementation", "Core Web Vitals optimization"],
    icon: Settings,
    color: "blue"
  },
  {
    title: "On-Page SEO",
    description: "Sayfa içi SEO optimizasyonu",
    features: ["Title tag optimization", "Meta description writing", "Header tags structure", "Content optimization", "Image alt text optimization"],
    icon: Edit,
    color: "green"
  },
  {
    title: "Content Strategy",
    description: "SEO odaklı içerik stratejisi",
    features: ["Keyword research", "Content planning", "Blog optimization", "FAQ content creation", "Long-tail keyword targeting"],
    icon: BookOpen,
    color: "purple"
  },
  {
    title: "Local SEO",
    description: "Yerel arama optimizasyonu",
    features: ["Google My Business optimization", "Local citations", "Location-based keywords", "Review management", "Local link building"],
    icon: MapPin,
    color: "orange"
  }
];

const keywordCategories = [
  {
    category: "Short-tail Keywords",
    description: "Yüksek arama hacimli genel kelimeler",
    examples: ["web tasarım", "e-ticaret", "SEO", "dijital pazarlama", "mobil uygulama"],
    volume: "10K-100K",
    difficulty: "Yüksek"
  },
  {
    category: "Long-tail Keywords",
    description: "Daha spesifik ve dönüşüm odaklı kelimeler",
    examples: ["istanbul web tasarım ajansı", "e-ticaret sitesi nasıl yapılır", "SEO hizmetleri fiyatları"],
    volume: "100-10K",
    difficulty: "Orta"
  },
  {
    category: "Local Keywords",
    description: "Coğrafi konum bazlı arama terimleri",
    examples: ["ankara web tasarım", "izmir dijital ajans", "bursa e-ticaret çözümleri"],
    volume: "50-5K",
    difficulty: "Düşük"
  }
];

const technicalSpecs = [
  {
    title: "Page Speed",
    value: "<3sn",
    description: "Optimal sayfa yükleme hızı"
  },
  {
    title: "Mobile Score",
    value: "95+",
    description: "Google Mobile-Friendly test skoru"
  },
  {
    title: "SEO Score",
    value: "90+",
    description: "Genel SEO performans skoru"
  },
  {
    title: "Index Rate",
    value: "%98",
    description: "Sayfa indexlenme oranı"
  }
];

const seoBenefits = [
  {
    title: "Organik Trafik",
    description: "Arama motorlarından gelen ziyaretçi artışı",
    value: "%285 artış",
    icon: Users,
    color: "blue"
  },
  {
    title: "Conversion Rate",
    description: "Organik trafikten dönüşüm oranı",
    value: "%67 artış",
    icon: Target,
    color: "green"
  },
  {
    title: "Brand Visibility",
    description: "Marka görünürlüğü ve bilinirlik",
    value: "%156 artış",
    icon: Eye,
    color: "purple"
  },
  {
    title: "ROI",
    description: "SEO yatırımından geri dönüş",
    value: "450%",
    icon: TrendingUp,
    color: "orange"
  }
];

const contentTypes = [
  {
    type: "Blog Articles",
    description: "SEO uyumlu blog yazıları",
    benefits: ["Keyword targeting", "Long-form content", "Regular publishing", "Topic clusters", "Internal linking"],
    icon: BookOpen
  },
  {
    type: "Landing Pages",
    description: "Dönüşüm odaklı iniş sayfaları",
    benefits: ["Conversion optimization", "A/B testing", "Clear CTAs", "Fast loading", "Mobile responsive"],
    icon: Target
  },
  {
    type: "Product Pages",
    description: "E-ticaret ürün sayfası optimizasyonu",
    benefits: ["Product schema", "Rich snippets", "User reviews", "High-quality images", "Detailed descriptions"],
    icon: Tag
  }
];

const industryUseCases = [
  {
    industry: "E-ticaret",
    description: "Online mağaza SEO optimizasyonu",
    benefits: ["Product page optimization", "Category page SEO", "Shopping ads optimization", "Local inventory ads"],
    icon: Globe,
    stats: { traffic: "+340%", sales: "+180%", rankings: "#1-3" }
  },
  {
    industry: "Hizmet Sektörü",
    description: "Yerel hizmet işletmeleri SEO'su",
    benefits: ["Local SEO optimization", "Google My Business", "Service page optimization", "Customer reviews"],
    icon: Briefcase,
    stats: { local_rankings: "+250%", calls: "+120%", leads: "+95%" }
  },
  {
    industry: "Kurumsal",
    description: "Kurumsal web siteleri SEO stratejisi",
    benefits: ["Enterprise SEO", "Technical optimization", "Content marketing", "Link building campaigns"],
    icon: Building,
    stats: { organic_traffic: "+200%", keywords: "2000+", domains: "+85%" }
  }
];

const seoTools = [
  {
    name: "Google Search Console",
    description: "Google'ın resmi SEO analiz aracı",
    features: ["Search performance", "Index coverage", "Mobile usability", "Core Web Vitals"],
    icon: Search
  },
  {
    name: "Google Analytics",
    description: "Web sitesi trafiği ve kullanıcı analizi",
    features: ["Organic traffic analysis", "User behavior", "Conversion tracking", "Audience insights"],
    icon: BarChart3
  },
  {
    name: "Technical SEO Tools",
    description: "Teknik SEO analiz ve optimizasyon araçları",
    features: ["Site auditing", "Speed testing", "Schema validation", "Crawl analysis"],
    icon: Settings
  }
];

const rankingFactors = [
  {
    factor: "Content Quality",
    importance: "Critical",
    description: "Yüksek kaliteli, orijinal ve kullanıcı odaklı içerik",
    impact: "90%"
  },
  {
    factor: "Page Experience",
    importance: "High",
    description: "Core Web Vitals, mobile-friendly, HTTPS güvenliği",
    impact: "85%"
  },
  {
    factor: "Backlink Profile",
    importance: "High",
    description: "Kaliteli ve doğal backlink profili",
    impact: "80%"
  },
  {
    factor: "Technical SEO",
    importance: "Medium",
    description: "Site yapısı, crawlability, indexability",
    impact: "70%"
  }
];

const advancedStrategies = [
  {
    title: "AI-Powered SEO",
    description: "Yapay zeka destekli SEO optimizasyonu",
    capabilities: ["Content optimization", "Keyword research", "Competitor analysis", "Trend prediction", "Automated reporting"],
    icon: Bot
  },
  {
    title: "Voice Search Optimization",
    description: "Sesli arama için optimizasyon",
    capabilities: ["Featured snippets", "FAQ optimization", "Conversational keywords", "Local voice search", "Question-based content"],
    icon: Mic
  },
  {
    title: "International SEO",
    description: "Çok dilli ve çok bölgeli SEO",
    capabilities: ["Hreflang implementation", "Country targeting", "Cultural localization", "International keyword research", "Regional content strategy"],
    icon: Globe2
  }
];

export function SeoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full mb-6 border border-blue-500/20"
              >
                <Search className="w-4 h-4" />
                <span className="font-medium">SEO Optimizasyon</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                SEO
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Optimizasyon</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Web sitenizi arama motorları için optimize edin. Organik trafiğinizi artırın 
                ve Google'da üst sıralarda yer alın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  SEO Analizi Başlat
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Demo Talep Et
                </Button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Google uyumlu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">%285 trafik artışı</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
                <div className="bg-white rounded-xl p-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1637606346315-d23ed32a6cfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBvcHRpbWl6YXRpb24lMjBzZWFyY2glMjBlbmdpbmV8ZW58MXx8fHwxNzU2MzAyMTE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="SEO Optimization"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">1500+</div>
                    <div className="text-sm text-gray-500">Keywords</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Gauge className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">95/100</div>
                    <div className="text-sm text-gray-500">Speed Score</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              SEO Optimizasyonu ile
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Güçlü Sonuçlar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SEO optimizasyonu uygulayan web sitelerinin elde ettiği ortalama performans artışı
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Kapsamlı SEO
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Optimizasyon Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Arama motoru optimizasyonunun tüm yönlerini kapsayan profesyonel SEO çözümleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Modules Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              SEO Optimizasyon
              <span className="text-cyan-300"> Modülleri</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Arama motoru optimizasyonunun tüm alanları için özelleştirilmiş SEO çözümleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {seoModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                        <module.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{module.title}</h3>
                        <p className="text-blue-200 mb-4">{module.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {module.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-blue-100 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              SEO
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Avantajları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SEO optimizasyonu ile işletmenizin elde edeceği somut faydalar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seoBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                    <div className="text-2xl font-bold text-blue-600">{benefit.value}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              SEO <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Performans Metrikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesyonel SEO optimizasyonu ile ulaşılabilir performans hedefleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{spec.value}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{spec.title}</h3>
                  <p className="text-gray-600 text-sm">{spec.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Sektörel
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> SEO Çözümleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı sektörlere özel SEO stratejileri ve başarı hikayleri
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryUseCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.industry}</h3>
                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                      {Object.entries(useCase.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              SEO Optimizasyonunuzu Başlatmaya Hazır mısınız?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Web sitenizi Google'da üst sıralara taşıyın. Organik trafiğinizi artırın 
              ve potansiyel müşterilerinize ulaşın!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 shadow-lg">
                SEO Analizi Başlat
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                Uzman Görüşmesi
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}