import { motion } from "framer-motion";

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  BarChart3,
  PieChart,
  LineChart,
  TrendingUp,
  Eye,
  Users,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  CheckCircle,
  ArrowRight,
  Shield,
  Database,
  Settings,
  Target,
  Zap,
  Lock,
  Calendar,
  Download,
  Bot,
  ShoppingCart,
  Newspaper,
  FileCheck,
  Bell,
  BarChart4,
  GitBranch,
  Layout
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import React from "react";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Web sitenizin performansını gerçek zamanlı olarak izleyin ve anında aksiyon alın."
  },
  {
    icon: Users,
    title: "Kullanıcı Davranış Analizi",
    description: "Ziyaretçi davranışların�� detaylı analiz edin ve kullanıcı deneyimini optimize edin."
  },
  {
    icon: Target,
    title: "Conversion Tracking",
    description: "Satış, kayıt ve diğer hedefleri takip ederek ROI'nizi maksimize edin."
  },
  {
    icon: Eye,
    title: "Sayfa Görüntüleme Analizi",
    description: "En çok ziyaret edilen sayfaları belirleyin ve içerik stratejinizi geliştirin."
  },
  {
    icon: Smartphone,
    title: "Multi-Platform Tracking",
    description: "Web, mobil ve uygulama verilerini tek bir panelde birleştirin."
  },
  {
    icon: Clock,
    title: "Özel Raporlama",
    description: "İşletmenize özel analitik raporları oluşturun ve zamanlanmış gönderim yapın."
  }
];

const stats = [
  { label: "Veri Doğruluğu", value: "%98", icon: CheckCircle },
  { label: "Real-time Processing", value: "<1sn", icon: Zap },
  { label: "ROI Artışı", value: "%67", icon: TrendingUp },
  { label: "Karar Hızı", value: "%85", icon: Clock }
];

const analyticsTools = [
  {
    name: "Google Analytics",
    description: "Dünyanın en popüler web analytics platformu",
    features: ["Universal Analytics", "GA4 entegrasyonu", "E-commerce tracking", "Custom events"],
    color: "blue",
    icon: BarChart3
  },
  {
    name: "Adobe Analytics",
    description: "Enterprise seviyesinde gelişmiş analitik çözümü",
    features: ["Real-time segmentation", "Predictive analytics", "Journey analytics", "Attribution modeling"],
    color: "red",
    icon: LineChart
  },
  {
    name: "Mixpanel",
    description: "Event-based analytics ve user journey tracking",
    features: ["Funnel analysis", "Cohort analysis", "A/B testing", "Push notifications"],
    color: "purple",
    icon: PieChart
  },
  {
    name: "Hotjar",
    description: "Kullanıcı davranış analizi ve heatmap araçları",
    features: ["Heatmaps", "Session recordings", "User surveys", "Feedback widgets"],
    color: "orange",
    icon: Eye
  }
];

const integrationModules = [
  {
    title: "Web Analytics",
    description: "Website performans ve kullanıcı analizi",
    features: ["Page views tracking", "User session analysis", "Bounce rate optimization", "Site speed monitoring", "SEO performance metrics"],
    icon: Globe,
    color: "blue"
  },
  {
    title: "E-commerce Analytics",
    description: "Online satış ve müşteri analizi",
    features: ["Sales funnel tracking", "Product performance", "Cart abandonment analysis", "Customer lifetime value", "Revenue attribution"],
    icon: ShoppingCart,
    color: "green"
  },
  {
    title: "Marketing Analytics",
    description: "Pazarlama kampanyası performans analizi",
    features: ["Campaign tracking", "Channel attribution", "ROI measurement", "Lead scoring", "Customer acquisition cost"],
    icon: Target,
    color: "purple"
  },
  {
    title: "Custom Analytics",
    description: "Özelleştirilmiş analitik çözümler",
    features: ["Custom events", "Goal tracking", "Advanced segmentation", "Custom dashboards", "API integrations"],
    icon: Settings,
    color: "orange"
  }
];

const metricCategories = [
  {
    category: "Traffic Metrics",
    metrics: [
      "Unique visitors",
      "Page views",
      "Session duration",
      "Bounce rate",
      "Traffic sources"
    ]
  },
  {
    category: "Engagement Metrics",
    metrics: [
      "Time on page",
      "Scroll depth",
      "Click-through rates",
      "Social shares",
      "Comment rates"
    ]
  },
  {
    category: "Conversion Metrics",
    metrics: [
      "Conversion rate",
      "Goal completions",
      "Revenue tracking",
      "Lead generation",
      "Form submissions"
    ]
  }
];

const dataVisualization = [
  { name: "Real-time Dashboards", icon: Monitor, description: "Anlık veri görselleştirme ve monitoring" },
  { name: "Custom Reports", icon: FileCheck, description: "Özelleştirilmiş raporlama sistemleri" },
  { name: "Data Export", icon: Download, description: "Çoklu format veri dışa aktarım" },
  { name: "Automated Alerts", icon: Bell, description: "Otomatik uyarı ve bildirim sistemi" },
  { name: "Trend Analysis", icon: TrendingUp, description: "Eğilim analizi ve tahminleme" },
  { name: "Comparative Analytics", icon: BarChart4, description: "Karşılaştırmalı performans analizi" }
];

const technicalSpecs = [
  {
    title: "Data Processing",
    value: "Real-time",
    description: "Anlık veri işleme ve güncelleme"
  },
  {
    title: "API Calls",
    value: "Unlimited",
    description: "Sınırsız API çağrısı ve veri transferi"
  },
  {
    title: "Data Retention",
    value: "25 months",
    description: "Uzun süreli veri saklama ve arşivleme"
  },
  {
    title: "Setup Time",
    value: "24 hours",
    description: "Hızlı kurulum ve yapılandırma"
  }
];

const analyticsBenefits = [
  {
    title: "Veri Odaklı Kararlar",
    description: "Somut verilerle desteklenmiş iş kararları",
    value: "%73 artış",
    icon: BarChart3,
    color: "blue"
  },
  {
    title: "Kullanıcı Deneyimi",
    description: "Optimize edilmiş kullanıcı yolculuğu",
    value: "%58 gelişim",
    icon: Users,
    color: "green"
  },
  {
    title: "Conversion Rate",
    description: "Artan dönüşüm oranları ve satışlar",
    value: "%42 artış",
    icon: Target,
    color: "purple"
  },
  {
    title: "Operasyonel Verimlilik",
    description: "Otomatik raporlama ve analiz süreçleri",
    value: "15 saat/hafta",
    icon: Clock,
    color: "orange"
  }
];

const advancedFeatures = [
  {
    title: "Machine Learning",
    description: "AI destekli veri analizi ve tahminleme",
    capabilities: ["Predictive analytics", "Anomaly detection", "Customer segmentation", "Churn prediction", "Recommendation engines"],
    icon: Bot
  },
  {
    title: "Advanced Segmentation",
    description: "Gelişmiş kullanıcı ve müşteri segmentasyonu",
    capabilities: ["Behavioral segments", "Demographic analysis", "Psychographic profiling", "Custom audiences", "Lookalike modeling"],
    icon: Users
  },
  {
    title: "Attribution Modeling",
    description: "Multi-touch attribution ve customer journey",
    capabilities: ["First-touch attribution", "Last-touch attribution", "Linear attribution", "Time-decay models", "Data-driven attribution"],
    icon: GitBranch
  }
];

const industryUseCases = [
  {
    industry: "E-ticaret",
    description: "Online satış performansı ve müşteri analizi",
    benefits: ["Sales funnel optimization", "Product performance tracking", "Customer behavior analysis", "Inventory insights"],
    icon: ShoppingCart,
    stats: { conversion: "+38%", revenue: "+52%", retention: "+67%" }
  },
  {
    industry: "SaaS",
    description: "Kullanıcı onboarding ve engagement analizi",
    benefits: ["User activation tracking", "Feature adoption analysis", "Churn prediction", "Subscription metrics"],
    icon: Monitor,
    stats: { activation: "+45%", retention: "+71%", ltv: "+83%" }
  },
  {
    industry: "Medya & İçerik",
    description: "İçerik performansı ve audience analytics",
    benefits: ["Content engagement metrics", "Audience insights", "Social media analytics", "Publishing optimization"],
    icon: Newspaper,
    stats: { engagement: "+62%", reach: "+89%", retention: "+34%" }
  }
];

const complianceFeatures = [
  {
    title: "GDPR Compliance",
    description: "Avrupa veri koruma düzenlemelerine uyumluluk",
    features: ["Data anonymization", "Consent management", "Right to deletion", "Data portability", "Privacy by design"],
    icon: Shield
  },
  {
    title: "CCPA Compliance",
    description: "California tüketici gizliliği yasalarına uyum",
    features: ["Opt-out mechanisms", "Data transparency", "Consumer rights", "Third-party disclosures", "Non-discrimination"],
    icon: Lock
  },
  {
    title: "Enterprise Security",
    description: "Kurumsal düzeyde güvenlik standartları",
    features: ["Data encryption", "Access controls", "Audit logs", "IP whitelisting", "SSO integration"],
    icon: Database
  }
];

const reportingOptions = [
  {
    type: "Automated Reports",
    description: "Zamanlanmış otomatik raporlama",
    schedule: ["Daily summaries", "Weekly insights", "Monthly reviews", "Quarterly analysis", "Annual reports"],
    icon: Calendar
  },
  {
    type: "Custom Dashboards",
    description: "Özelleştirilmiş analitik panelleri",
    features: ["Drag-drop builder", "Widget library", "Real-time updates", "Mobile responsive", "Team sharing"],
    icon: Layout
  },
  {
    type: "Data Export",
    description: "Çoklu format veri dışa aktarım",
    formats: ["CSV export", "Excel reports", "PDF documents", "JSON API", "Database sync"],
    icon: Download
  }
];

export function AnalyticsToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <MotionDiv
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full mb-6 border border-blue-500/20"
              >
                <BarChart3 className="w-4 h-4" />
                <span className="font-medium">Analytics Tools Entegrasyonu</span>
              </MotionDiv>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Analytics Tools
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Entegrasyonu</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Web sitenizi güçlü analitik araçlarıyla entegre edin. Google Analytics, 
                Adobe Analytics ve daha fazlasıyla veri odaklı kararlar alın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Analytics Entegrasyonu Başlat
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Demo Talep Et
                </Button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Real-time tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">GDPR uyumlu</span>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
                <div className="bg-white rounded-xl p-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTYzMDE2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Analytics Dashboard"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Floating Stats */}
              <MotionDiv
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
                    <div className="font-semibold text-gray-900">%67</div>
                    <div className="text-sm text-gray-500">ROI Artışı</div>
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">%98</div>
                    <div className="text-sm text-gray-500">Doğruluk</div>
                  </div>
                </div>
              </MotionDiv>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Analytics Entegrasyonu ile
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Güçlü Sonuçlar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Analytics tools entegrasyonu kullanan firmaların elde ettiği ortalama performans artışı
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <MotionDiv
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
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Kapsamlı Analytics
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Entegrasyon Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Popüler analitik araçlarıyla güçlü veri analizi ve raporlama çözümleri
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <MotionDiv
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
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Tools Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Desteklenen Analytics
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Platformları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Popüler analitik araçları ile hazır entegrasyon çözümleri
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-8">
            {analyticsTools.map((tool, index) => (
              <MotionDiv
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
                        <tool.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{tool.name}</h3>
                        <p className="text-gray-600 mb-4">{tool.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {tool.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Modules Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Analytics Entegrasyon
              <span className="text-cyan-300"> Modülleri</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Veri analizi stratejinizin tamamı için özelleştirilmiş analytics entegrasyon çözümleri
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-8">
            {integrationModules.map((module, index) => (
              <MotionDiv
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
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <MotionDiv
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
              Analytics tools entegrasyonu ile işletmenizin elde edeceği somut faydalar
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsBenefits.map((benefit, index) => (
              <MotionDiv
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
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <MotionDiv
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
              Enterprise seviyesinde analytics entegrasyon teknolojisi
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <MotionDiv
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
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Gelişmiş
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Analytics Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI destekli veri analizi ve ileri düzey analytics çözümleri
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {feature.capabilities.map((capability, capabilityIndex) => (
                        <div key={capabilityIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Uyumluluk ve
              <span className="text-cyan-300"> Güvenlik</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Uluslararası standartlarda veri güvenliği ve gizlilik uyumluluğu
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {complianceFeatures.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                        <p className="text-blue-200 text-sm">{feature.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-blue-100 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Sektörel
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Kullanım Örnekleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı sektörlerde analytics entegrasyonu ile elde edilen başarı hikayeleri
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {industryUseCases.map((useCase, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                        <useCase.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{useCase.industry}</h3>
                        <p className="text-gray-600 text-sm">{useCase.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(useCase.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Data Visualization */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Veri Görselleştirme
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Araçları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Verilerinizi anlamlı grafikler ve raporlarla görselleştirin
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataVisualization.map((tool, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              Analytics Entegrasyonuna Bugün Başlayın
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Veri odaklı kararlar alın, kullanıcı deneyimini optimize edin ve 
              işletmenizin büyümesini hızlandırın. Uzmanlarımızla iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                Ücretsiz Danışmanlık
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                Demo İzle
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}