import { motion } from "framer-motion";

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  Share2,
  MessageSquare,
  Heart,
  Eye,
  Users,
  TrendingUp,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Shield,
  Target,
  AlertCircle,
  Bell,
  Zap,
  Building,
  GraduationCap,
  Briefcase,
  Heart as HeartIcon,
  Calendar,
  Filter,
  Utensils,
  Clock,
  MessageCircle,
  Camera,
  Hash,
  Megaphone
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import React from "react";

const features = [
  {
    icon: Share2,
    title: "Otomatik İçerik Paylaşımı",
    description: "Web sitenizdeki içerikleri sosyal medya platformlarında otomatik olarak paylaşın."
  },
  {
    icon: MessageSquare,
    title: "Sosyal Medya Yorumları",
    description: "Tüm platformlardan gelen yorumları merkezi bir panelde yönetin ve yanıtlayın."
  },
  {
    icon: BarChart3,
    title: "Sosyal Medya Analitiği",
    description: "Engagement, reach ve diğer sosyal medya metriklerini real-time takip edin."
  },
  {
    icon: Users,
    title: "Takipçi Yönetimi",
    description: "Takipçi artışı, demografik analiz ve audience insights özelliklerini kullanın."
  },
  {
    icon: Calendar,
    title: "İçerik Planlama",
    description: "Sosyal medya içeriklerinizi önceden planlayın ve zamanlanmış paylaşım yapın."
  },
  {
    icon: Bell,
    title: "Sosyal Dinleme",
    description: "Marka bahsetmelerini ve sosyal medya trendlerini real-time takip edin."
  }
];

const stats = [
  { label: "Engagement Artışı", value: "%74", icon: TrendingUp },
  { label: "İçerik Üretkenliği", value: "%89", icon: Share2 },
  { label: "Yanıt Hızı", value: "%65", icon: MessageSquare },
  { label: "Marka Görünürlüğü", value: "%92", icon: Eye }
];

const socialPlatforms = [
  {
    name: "Facebook API",
    description: "Facebook Pages ve Instagram Business entegrasyonu",
    features: ["Post paylaşımı", "Yorum yönetimi", "Analytics", "Messenger entegrasyonu"],
    color: "blue",
    icon: MessageSquare
  },
  {
    name: "Twitter API",
    description: "Twitter/X platformu tam entegrasyonu",
    features: ["Tweet gönderimi", "Mention tracking", "Hashtag analizi", "DM yönetimi"],
    color: "cyan",
    icon: MessageCircle
  },
  {
    name: "Instagram API",
    description: "Instagram Business ve Creator hesapları",
    features: ["Fotoğraf/video paylaşımı", "Story yönetimi", "IGTV entegrasyonu", "Shopping tags"],
    color: "purple",
    icon: Camera
  },
  {
    name: "LinkedIn API",
    description: "LinkedIn Business ve kişisel profil entegrasyonu",
    features: ["İş ağı paylaşımları", "Company page yönetimi", "Professional analytics", "Lead generation"],
    color: "indigo",
    icon: Briefcase
  }
];

const integrationModules = [
  {
    title: "İçerik Yayınlama",
    description: "Çoklu platform içerik paylaşımı",
    features: ["Cross-platform posting", "Otomatik format uyarlama", "Zamanlama sistemi", "Bulk upload", "Content templates"],
    icon: Share2,
    color: "blue"
  },
  {
    title: "Community Yönetimi",
    description: "Sosyal medya etkileşim yönetimi",
    features: ["Unified inbox", "Auto-reply sistemi", "Sentiment analizi", "Moderasyon araçları", "Influencer tracking"],
    icon: Users,
    color: "green"
  },
  {
    title: "Analytics & Reporting",
    description: "Sosyal medya performans analizi",
    features: ["Real-time analytics", "Custom dashboards", "ROI hesaplama", "Competitor analysis", "Trend insights"],
    icon: BarChart3,
    color: "purple"
  },
  {
    title: "Reklam Yönetimi",
    description: "Sosyal medya reklam kampanyaları",
    features: ["Campaign management", "Audience targeting", "Budget optimization", "A/B testing", "Performance tracking"],
    icon: Target,
    color: "orange"
  }
];

const contentTypes = [
  {
    category: "Görsel İçerik",
    types: [
      "Fotoğraf paylaşımı",
      "Video upload",
      "GIF animasyonları",
      "Infografik tasarımları",
      "Carousel galerileri"
    ]
  },
  {
    category: "Video İçerik",
    types: [
      "YouTube video paylaşımı",
      "Instagram Reels",
      "TikTok entegrasyonu",
      "Live streaming",
      "Story videoları"
    ]
  },
  {
    category: "Etkileşimli İçerik",
    types: [
      "Poll ve anketler",
      "Quiz uygulamaları",
      "Contest kampanyaları",
      "User generated content",
      "Hashtag challenges"
    ]
  }
];

const automationFeatures = [
  { name: "Auto-Posting", icon: Zap, description: "Otomatik içerik paylaşımı ve zamanlama" },
  { name: "Smart Hashtags", icon: Hash, description: "AI destekli hashtag önerileri" },
  { name: "Response Templates", icon: MessageSquare, description: "Otomatik yanıt şablonları" },
  { name: "Content Curation", icon: Filter, description: "Otomatik içerik keşfi ve filtreleme" },
  { name: "Trend Detection", icon: TrendingUp, description: "Trend analizi ve fırsat tespiti" },
  { name: "Crisis Management", icon: AlertCircle, description: "Otomatik kriz yönetimi sistemi" }
];

const technicalSpecs = [
  {
    title: "API Entegrasyonu",
    value: "REST/GraphQL",
    description: "Modern API standartları ile güvenli bağlantı"
  },
  {
    title: "Real-time Sync",
    value: "WebSocket",
    description: "Anlık veri senkronizasyonu"
  },
  {
    title: "Rate Limiting",
    value: "Smart Throttling",
    description: "Platform limitlerini otomatik yönetim"
  },
  {
    title: "Kurulum Süresi",
    value: "1-3 gün",
    description: "Hızlı kurulum ve test süreçleri"
  }
];

const socialMediaBenefits = [
  {
    title: "Zaman Verimliliği",
    description: "Tek panelden çoklu platform yönetimi",
    value: "18 saat/hafta",
    icon: Clock,
    color: "blue"
  },
  {
    title: "Engagement Artışı",
    description: "Optimize edilmiş içerik ve zamanlama",
    value: "%85 artış",
    icon: TrendingUp,
    color: "green"
  },
  {
    title: "Marka Bilinirliği",
    description: "Tutarlı ve profesyonel sosyal medya varlığı",
    value: "%67 artış",
    icon: Eye,
    color: "purple"
  },
  {
    title: "Müşteri Memnuniyeti",
    description: "Hızlı yanıt ve proaktif müşteri hizmetleri",
    value: "%91 memnuniyet",
    icon: HeartIcon,
    color: "orange"
  }
];

const analyticsMetrics = [
  {
    title: "Engagement Metrikleri",
    description: "Etkileşim ve katılım ölçümleri",
    metrics: ["Like/reaction rates", "Comment engagement", "Share/repost rates", "Click-through rates", "Story completion"],
    icon: HeartIcon
  },
  {
    title: "Reach & Impressions",
    description: "Erişim ve görüntülenme analitiği",
    metrics: ["Organic reach", "Paid impressions", "Unique users", "Frequency analysis", "Geographic distribution"],
    icon: Eye
  },
  {
    title: "Audience Insights",
    description: "Takipçi ve audience analizi",
    metrics: ["Demographic breakdown", "Interest categories", "Peak activity times", "Follower growth", "Audience overlap"],
    icon: Users
  }
];

const industryUseCases = [
  {
    industry: "E-ticaret",
    description: "Ürün tanıtımı ve sosyal commerce",
    benefits: ["Ürün katalog entegrasyonu", "Social shopping", "Influencer kampanyaları", "User reviews showcase"],
    icon: Building,
    stats: { conversion: "+45%", traffic: "+78%", engagement: "+63%" }
  },
  {
    industry: "Restoran & Yemek",
    description: "Menü tanıtımı ve rezervasyon sistemi",
    benefits: ["Menü paylaşımı", "Rezervasyon entegrasyonu", "Food photography", "Customer reviews"],
    icon: Utensils,
    stats: { bookings: "+52%", brand_awareness: "+71%", reviews: "+84%" }
  },
  {
    industry: "Eğitim",
    description: "Kurs tanıtımı ve öğrenci etkileşimi",
    benefits: ["Kurs içerikleri", "Öğrenci hikayeleri", "Webinar duyuruları", "Alumni network"],
    icon: GraduationCap,
    stats: { enrollment: "+38%", engagement: "+65%", retention: "+29%" }
  }
];

const campaignTypes = [
  {
    title: "Brand Awareness",
    description: "Marka bilinirliği artırma kampanyaları",
    tactics: ["Sponsored content", "Influencer partnerships", "Hashtag campaigns", "Video storytelling", "Cross-platform promotion"],
    icon: Megaphone
  },
  {
    title: "Lead Generation",
    description: "Potansiyel müşteri kazanma kampanyaları",
    tactics: ["Lead forms", "Contest campaigns", "Webinar promotion", "Free trial offers", "Newsletter signups"],
    icon: Target
  },
  {
    title: "Customer Retention",
    description: "Müşteri sadakati artırma kampanyaları",
    tactics: ["Loyalty programs", "Exclusive content", "Behind-the-scenes", "Customer spotlights", "Community building"],
    icon: Users
  }
];

export function SocialMediaApisPage() {
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
                <Share2 className="w-4 h-4" />
                <span className="font-medium">Sosyal Medya API Entegrasyonu</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Sosyal Medya
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> API Entegrasyonu</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Web sitenizi tüm sosyal medya platformlarıyla entegre edin. 
                İçerik paylaşımından analytics'e kadar her şeyi tek yerden yönetin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Sosyal Medya Entegrasyonu Başlat
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Demo Talep Et
                </Button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Real-time sync</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">API güvenliği</span>
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
                    src="https://images.unsplash.com/photo-1657974361095-4d5f3fb381fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwaSUyMGludGVncmF0aW9ufGVufDF8fHx8MTc1NjMwMTQwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Social Media API Integration"
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
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">%74</div>
                    <div className="text-sm text-gray-500">Engagement</div>
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
                    <Share2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">%89</div>
                    <div className="text-sm text-gray-500">Verimlilik</div>
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
              Sosyal Medya Entegrasyonu ile
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Güçlü Sonuçlar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sosyal medya API entegrasyonu kullanan firmaların elde ettiği ortalama performans artışı
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
              Kapsamlı Sosyal Medya
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> API Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tüm sosyal medya platformları için tek çatı altında entegrasyon çözümleri
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

      {/* Social Platforms Section */}
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
              Desteklenen Sosyal Medya
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Platformları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Popüler sosyal medya platformları ile hazır API entegrasyon çözümleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 group h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <platform.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{platform.name}</h3>
                        <p className="text-gray-600 mb-4">{platform.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {platform.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
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

      {/* Integration Modules Section */}
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
              Sosyal Medya Entegrasyon
              <span className="text-cyan-300"> Modülleri</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Sosyal medya stratejinizin tamamı için özelleştirilmiş entegrasyon çözümleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {integrationModules.map((module, index) => (
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
              Entegrasyon
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Avantajları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sosyal medya API entegrasyonu ile işletmenizin elde edeceği somut faydalar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialMediaBenefits.map((benefit, index) => (
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
              Teknik <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Özellikler</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise seviyesinde sosyal medya API entegrasyon teknolojisi
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
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Çözümler</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı sektörlere özel sosyal medya entegrasyon senaryoları
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
              Sosyal Medya Entegrasyonunuzu Başlatmaya Hazır mısınız?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Tüm sosyal medya platformlarınızı tek çatı altında toplayın. 
              İçerik paylaşımını ve etkileşim yönetimini otomatikleştirin!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 shadow-lg">
                Entegrasyon Başlat
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