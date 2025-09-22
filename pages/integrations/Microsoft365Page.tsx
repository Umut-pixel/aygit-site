import { motion } from "framer-motion";

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  Mail,
  Calendar,
  FileText,
  Video,
  Users,
  Cloud,
  TrendingUp,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Shield,
  Bot,
  FolderOpen,
  Clock,
  Smartphone,
  Heart,
  GraduationCap,
  Calculator,
  FileCheck,
  Eye,
  AlertCircle,
  Lock,
  Monitor,
  Zap
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import React from "react";

const features = [
  {
    icon: Mail,
    title: "Outlook Entegrasyonu",
    description: "E-posta, takvim ve kişiler sisteminizle senkronize edilir ve otomatik işlenir."
  },
  {
    icon: FileText,
    title: "Office Uygulamaları",
    description: "Word, Excel, PowerPoint belgeleriniz web sitenizde düzenlenebilir ve paylaşılabilir."
  },
  {
    icon: Video,
    title: "Teams Entegrasyonu",
    description: "Video konferans, anlık mesajlaşma ve ekip işbirliği özellikleri entegre edilir."
  },
  {
    icon: Cloud,
    title: "OneDrive & SharePoint",
    description: "Bulut depolama ve belge yönetimi sisteminizle sorunsuz çalışır."
  },
  {
    icon: Users,
    title: "Azure AD Entegrasyonu",
    description: "Kullanıcı kimlik doğrulama ve yetkilendirme sistemleri entegre edilir."
  },
  {
    icon: Bot,
    title: "Power Platform",
    description: "Power BI, Power Apps ve Power Automate ile iş süreçleri otomatikleştirilir."
  }
];

const stats = [
  { label: "Verimlilik Artışı", value: "%85", icon: TrendingUp },
  { label: "İşbirliği Gelişimi", value: "%92", icon: Users },
  { label: "Süreç Otomasyonu", value: "%78", icon: Zap },
  { label: "Güvenlik Skoru", value: "%96", icon: Shield }
];

const office365Apps = [
  {
    name: "Microsoft Outlook",
    description: "Professional e-posta ve takvim yönetimi",
    features: ["E-posta entegrasyonu", "Takvim senkronizasyonu", "Kişi yönetimi", "Görev takibi"],
    color: "blue",
    icon: Mail
  },
  {
    name: "Microsoft Teams",
    description: "Ekip işbirliği ve iletişim platformu",
    features: ["Video konferans", "Chat entegrasyonu", "Dosya paylaşımı", "Kanal yönetimi"],
    color: "purple",
    icon: Video
  },
  {
    name: "OneDrive & SharePoint",
    description: "Bulut depolama ve belge yönetimi",
    features: ["Dosya senkronizasyonu", "Belge işbirliği", "Versiyon kontrolü", "Yetki yönetimi"],
    color: "green",
    icon: Cloud
  },
  {
    name: "Power Platform",
    description: "İş zekası ve otomasyon araçları",
    features: ["Power BI raporları", "Power Apps entegrasyonu", "Power Automate akışları", "Custom connectors"],
    color: "orange",
    icon: Bot
  }
];

const integrationModules = [
  {
    title: "E-posta & Takvim",
    description: "Outlook entegrasyonu ve takvim yönetimi",
    features: ["E-posta gönderimi", "Takvim etkinlikleri", "Toplantı planlama", "Otomatik yanıtlar", "E-posta şablonları"],
    icon: Mail,
    color: "blue"
  },
  {
    title: "Dosya Yönetimi",
    description: "OneDrive ve SharePoint entegrasyonu",
    features: ["Dosya upload/download", "Belge işbirliği", "Versiyon kontrolü", "Klasör yapısı", "Erişim kontrolleri"],
    icon: FolderOpen,
    color: "green"
  },
  {
    title: "İletişim & İşbirliği",
    description: "Teams ve Yammer entegrasyonu",
    features: ["Video konferans API", "Chat entegrasyonu", "Kanal bildirimleri", "Ekip yönetimi", "Sosyal özellikler"],
    icon: Users,
    color: "purple"
  },
  {
    title: "İş Zekası & Otomasyon",
    description: "Power Platform entegrasyonu",
    features: ["Power BI dashboards", "Otomatik workflows", "Custom apps", "Data connectors", "AI entegrasyonu"],
    icon: BarChart3,
    color: "orange"
  }
];

const securityFeatures = [
  { name: "Azure AD", icon: Shield, description: "Merkezi kimlik doğrulama ve güvenlik" },
  { name: "Multi-Factor Authentication", icon: Lock, description: "Çok faktörlü kimlik doğrulama" },
  { name: "Conditional Access", icon: CheckCircle, description: "Koşullu erişim politikaları" },
  { name: "Data Loss Prevention", icon: Eye, description: "Veri kaybı önleme sistemleri" },
  { name: "Advanced Threat Protection", icon: AlertCircle, description: "Gelişmiş tehdit koruması" },
  { name: "Compliance Center", icon: FileCheck, description: "Uyumluluk ve denetim merkezi" }
];

const technicalSpecs = [
  {
    title: "API Protokolü",
    value: "Microsoft Graph",
    description: "Unified API ile tüm Microsoft 365 hizmetleri"
  },
  {
    title: "Kimlik Doğrulama",
    value: "OAuth 2.0",
    description: "Modern güvenlik standartları"
  },
  {
    title: "Veri Formatı",
    value: "JSON/OData",
    description: "RESTful API ile veri alışverişi"
  },
  {
    title: "Kurulum Süresi",
    value: "1-2 hafta",
    description: "Hızlı kurulum ve yapılandırma"
  }
];

const productivityBenefits = [
  {
    title: "Zaman Tasarrufu",
    description: "Otomatik süreçler ile verimlilik artışı",
    value: "25 saat/hafta",
    icon: Clock,
    color: "blue"
  },
  {
    title: "İşbirliği Artışı",
    description: "Ekip içi iletişim ve koordinasyon",
    value: "%85 gelişim",
    icon: Users,
    color: "green"
  },
  {
    title: "Mobilite",
    description: "Her yerden erişim ve çalışma",
    value: "%100 erişim",
    icon: Smartphone,
    color: "purple"
  },
  {
    title: "Güvenlik",
    description: "Enterprise düzeyde güvenlik özellikleri",
    value: "%99.9 uptime",
    icon: Shield,
    color: "orange"
  }
];

const useCaseScenarios = [
  {
    category: "Satış Ekipleri",
    scenarios: [
      "CRM ile Outlook entegrasyonu",
      "Satış sunumları Teams üzerinden",
      "Müşteri dosyaları SharePoint'te",
      "Satış raporları Power BI ile",
      "Mobil satış uygulamaları"
    ]
  },
  {
    category: "İK Departmanı",
    scenarios: [
      "Bordro e-postaları otomatik",
      "İK belgeleri OneDrive'da",
      "Çalışan eğitimleri Teams ile",
      "İK analitiği Power BI'da",
      "Self-service portal entegrasyonu"
    ]
  },
  {
    category: "Proje Yönetimi",
    scenarios: [
      "Proje dosyaları SharePoint'te",
      "Ekip toplantıları Teams ile",
      "Gantt şemaları Project ile",
      "Proje raporları Excel'de",
      "Milestone bildirimleri Outlook'ta"
    ]
  }
];

const industryUseCases = [
  {
    industry: "Finans",
    description: "Mali süreçler ve raporlama entegrasyonu",
    benefits: ["Excel ile mali modelleme", "Power BI finansal dashboards", "Outlook ile müşteri iletişimi", "Teams ile uzaktan toplantı"],
    icon: Calculator,
    stats: { efficiency: "+67%", accuracy: "+89%", compliance: "+94%" }
  },
  {
    industry: "Eğitim",
    description: "Öğretim ve öğrenim süreçleri yönetimi",
    benefits: ["Teams ile uzaktan eğitim", "OneNote ile ders notları", "SharePoint ile materyaller", "Power BI ile öğrenci analitiği"],
    icon: GraduationCap,
    stats: { engagement: "+78%", collaboration: "+85%", efficiency: "+62%" }
  },
  {
    industry: "Sağlık",
    description: "Hasta yönetimi ve sağlık hizmetleri",
    benefits: ["Güvenli hasta dosyaları", "Telemedicine Teams ile", "Raporlama Power BI ile", "Randevu yönetimi Outlook'ta"],
    icon: Heart,
    stats: { security: "+95%", efficiency: "+71%", satisfaction: "+88%" }
  }
];

const workflowAutomation = [
  {
    title: "E-posta Otomasyonu",
    description: "Otomatik e-posta gönderimi ve yanıtlama",
    steps: ["Trigger events", "Template selection", "Personalization", "Delivery tracking", "Response handling"],
    icon: Mail
  },
  {
    title: "Belge İş Akışı",
    description: "Belge onay ve paylaşım süreçleri",
    steps: ["Document upload", "Approval routing", "Version control", "Notification system", "Archive management"],
    icon: FileText
  },
  {
    title: "Toplantı Koordinasyonu",
    description: "Otomatik toplantı planlama ve yönetimi",
    steps: ["Calendar check", "Room booking", "Invitation sending", "Reminder notifications", "Meeting recording"],
    icon: Calendar
  }
];

const advancedFeatures = [
  {
    title: "AI ve Machine Learning",
    description: "Yapay zeka destekli iş süreçleri",
    capabilities: ["MyAnalytics insights", "Cortana voice assistant", "Editor suggestions", "Translator services", "Forms recognizer"],
    icon: Bot
  },
  {
    title: "Business Intelligence",
    description: "Gelişmiş veri analizi ve raporlama",
    capabilities: ["Real-time dashboards", "Predictive analytics", "Custom visualizations", "Data modeling", "Automated reports"],
    icon: BarChart3
  },
  {
    title: "Developer Platform",
    description: "Özelleştirme ve geliştirme araçları",
    capabilities: ["Custom add-ins", "SharePoint framework", "Teams apps", "Graph API", "Power Platform"],
    icon: Monitor
  }
];

export function Microsoft365Page() {
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
                <Cloud className="w-4 h-4" />
                <span className="font-medium">Microsoft 365 Entegrasyonu</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Microsoft 365
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Entegrasyonu</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Web sitenizi Microsoft 365 ekosistemi ile entegre edin. Office uygulamaları, 
                Teams, OneDrive ve daha fazlasıyla güçlü iş süreçleri oluşturun.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Microsoft 365 Entegrasyonu Başlat
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Demo Talep Et
                </Button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Azure AD güvenlik</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Enterprise uyumluluk</span>
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
                    src="https://images.unsplash.com/photo-1588560205109-71567fd30186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NvZnQlMjBvZmZpY2UlMjAzNjUlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU2MzAxMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Microsoft 365 Workspace"
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
                    <div className="font-semibold text-gray-900">%85</div>
                    <div className="text-sm text-gray-500">Verimlilik</div>
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
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">%92</div>
                    <div className="text-sm text-gray-500">İşbirliği</div>
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
              Microsoft 365 Entegrasyonu ile
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Güçlü Sonuçlar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Microsoft 365 entegrasyonu kullanan firmaların elde ettiği ortalama performans artışı
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
              Kapsamlı Microsoft 365
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Entegrasyon Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Office uygulamalarından Teams'e kadar tüm Microsoft 365 hizmetleriyle entegrasyon
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

      {/* Office 365 Apps Section */}
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
              Desteklenen Microsoft 365
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Uygulamaları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Popüler Microsoft 365 uygulamaları ile hazır entegrasyon çözümleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {office365Apps.map((app, index) => (
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
                        <app.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{app.name}</h3>
                        <p className="text-gray-600 mb-4">{app.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {app.features.map((feature, featureIndex) => (
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
              Microsoft 365 Entegrasyon
              <span className="text-cyan-300"> Modülleri</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              İş süreçlerinizin tamamı için özelleştirilmiş Microsoft 365 entegrasyon çözümleri
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
              Microsoft 365 entegrasyonu ile işletmenizin elde edeceği somut faydalar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productivityBenefits.map((benefit, index) => (
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
              Enterprise seviyesinde Microsoft 365 entegrasyon teknolojisi
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
              Farklı sektörlere özel Microsoft 365 entegrasyon senaryoları
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
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
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
              Microsoft 365 Entegrasyonunuzu Başlatmaya Hazır mısınız?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Office uygulamalarını, Teams'i ve bulut hizmetlerini web sitenizle 
              entegre edin. Verimliliği artırın!
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