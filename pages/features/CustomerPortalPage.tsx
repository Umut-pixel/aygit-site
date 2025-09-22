// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";

// TYPE OVERRIDE - Fix CustomerPortalPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  User,
  Settings,
  Shield,
  LayoutDashboard,
  CheckCircle,
  ArrowRight,
  FileText,
  CreditCard,
  Package,
  MessageSquare,
  Bell,
  Eye,
  BarChart3,
  Globe,
  Smartphone,
  Clock,
  Users,
  AlertCircle,
  Archive,
  Star,
  TrendingUp,
  Zap,
  Database,
  Lock,
  Layers,
  Target,
  Search,
  Calendar,
  Tag,
  Download,
  Upload,
  Copy,
  Edit,
  Trash2,
  Reply,
  Forward,
  RefreshCw,
  UserCheck,
  MapPin,
  Phone,
  Link,
  Image,
  Paperclip,
  CheckSquare,
  Home,
  ShoppingCart,
  Receipt,
  Headphones,
  Activity,
  PieChart,
  Filter,
  SortAsc,
  ExternalLink,
  QrCode,
  Bookmark,
  History,
  Wallet,
  Gift,
  Award,
  Percent,
  Mail,
  Send
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import React from "react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Kişisel Dashboard",
    description: "Müşterileriniz hesap özeti, son aktiviteler, hizmet durumu ve önemli bilgileri tek ekranda görüntüleyebilir."
  },
  {
    icon: Package,
    title: "Sipariş & Hizmet Takibi",
    description: "Verilen siparişler, hizmet talepleri ve proje durumları real-time olarak takip edilebilir."
  },
  {
    icon: Receipt,
    title: "Fatura Yönetimi",
    description: "Faturalar görüntülenebilir, indirebilir ve ödeme geçmişi detaylı olarak incelenebilir."
  },
  {
    icon: Headphones,
    title: "Destek Talebi",
    description: "Müşteriler kolayca destek talebi oluşturabilir, mevcut taleplerini takip edebilir ve yanıtları görebilir."
  },
  {
    icon: User,
    title: "Hesap Yönetimi",
    description: "Profil bilgileri, şifre değişikliği, bildirim ayarları ve güvenlik seçenekleri yönetilebilir."
  },
  {
    icon: Bell,
    title: "Akıllı Bildirimler",
    description: "Önemli güncellemeler, fatura hatırlatmaları ve sistem bildirimleri anında iletilir."
  }
];

const stats = [
  { label: "Müşteri Memnuniyeti", value: "%94", icon: Star },
  { label: "Self-Servis Çözüm", value: "%78", icon: CheckSquare },
  { label: "Ortalama Yanıt Süresi", value: "1.2 saat", icon: Clock },
  { label: "Portal Kullanım Oranı", value: "%89", icon: Activity }
];

const portalModules = [
  {
    title: "Hesap Özeti",
    description: "Genel hesap durumu ve özetler",
    features: ["Hizmet durumu özeti", "Son faturalar", "Yeni bildirimler", "Hızlı işlemler"],
    icon: Home,
    color: "blue"
  },
  {
    title: "Sipariş Yönetimi", 
    description: "Sipariş ve hizmet takibi",
    features: ["Aktif siparişler", "Teslim durumu", "Sipariş geçmişi", "İade talepleri"],
    icon: ShoppingCart,
    color: "green"
  },
  {
    title: "Fatura & Ödeme",
    description: "Mali işlemler ve ödemeler",
    features: ["Ödenmemiş faturalar", "Ödeme geçmişi", "Otomatik ödeme", "Vergi belgeleri"],
    icon: CreditCard,
    color: "purple"
  },
  {
    title: "Destek Merkezi",
    description: "Yardım ve destek talepleri",
    features: ["Yeni talep oluştur", "Mevcut talepler", "SSS bölümü", "Canlı destek"],
    icon: MessageSquare,
    color: "orange"
  }
];

const advancedFeatures = [
  {
    category: "Güvenlik & Erişim",
    items: [
      "İki faktörlü doğrulama (2FA)",
      "Oturum yönetimi ve güvenlik logları",
      "IP bazlı erişim kısıtlamaları",
      "Şifre politikaları ve zorla değiştirme",
      "Güvenlik soruları ve kurtarma seçenekleri"
    ]
  },
  {
    category: "Kişiselleştirme",
    items: [
      "Özelleştirilebilir dashboard widget'ları",
      "Kişisel tema ve renk seçenekleri",
      "Bildirim tercihleri yönetimi",
      "Dil ve bölge ayarları",
      "Hızlı erişim menü özelleştirme"
    ]
  },
  {
    category: "Raporlama & Analitik",
    items: [
      "Detaylı kullanım raporları",
      "Harcama analizi ve grafikler",
      "Performans metrikleri",
      "Karşılaştırmalı dönem analizi",
      "PDF/Excel formatında rapor export"
    ]
  }
];

const integrations = [
  { name: "E-ticaret Platformları", icon: ShoppingCart, description: "WooCommerce, Shopify, Magento" },
  { name: "Muhasebe Sistemleri", icon: Receipt, description: "Logo, Mikro, SAP entegrasyonu" },
  { name: "CRM Platformları", icon: Database, description: "Salesforce, HubSpot, Pipedrive" },
  { name: "Ödeme Sistemleri", icon: CreditCard, description: "İyzico, PayTR, Stripe" },
  { name: "E-mail Servisleri", icon: Mail, description: "Mailchimp, SendGrid, Amazon SES" },
  { name: "SMS & Bildirim", icon: Send, description: "Twilio, Firebase, OneSignal" }
];

const selfServiceOptions = [
  "Fatura indirme ve görüntüleme",
  "Ödeme planı değişikliği",
  "İletişim bilgileri güncelleme",
  "Hizmet upgrade/downgrade talepleri",
  "Kullanım raporları ve istatistikler",
  "Şifre sıfırlama ve güvenlik ayarları",
  "Bildirim ve tercih yönetimi",
  "Dosya paylaşımı ve arşivleme"
];

const customerJourney = [
  {
    step: "Giriş & Onboarding",
    description: "Kolay kayıt ve ilk kurulum süreci",
    icon: UserCheck,
    details: ["Hızlı kayıt formu", "E-mail doğrulama", "İlk giriş rehberi", "Profil tamamlama"]
  },
  {
    step: "Dashboard Keşfi",
    description: "Ana ekran ve özellikleri keşfetme",
    icon: Eye,
    details: ["Guided tour", "Widget açıklamaları", "Hızlı başlangıç ipuçları", "Video rehberler"]
  },
  {
    step: "Günlük Kullanım",
    description: "Rutin işlemler ve self-servis",
    icon: Activity,
    details: ["Hızlı işlemler", "Favori özellikler", "Bildirim yönetimi", "Kısayol menüleri"]
  },
  {
    step: "Gelişmiş Özellikler",
    description: "İleri seviye araçlar ve raporlar",
    icon: TrendingUp,
    details: ["Detaylı raporlar", "API erişimi", "Webhook yapılandırması", "Bulk işlemler"]
  }
];

export function CustomerPortalPage() {
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
                <User className="w-4 h-4" />
                <span className="font-medium">Müşteri Portali Sistemi</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Güçlü Müşteri
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Self-Servis Portali</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Müşterilerinize 7/24 erişilebilir kişisel portal sunun. Hesap yönetimi, 
                sipariş takibi, fatura işlemleri ve destek talepleri tek noktada.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Portal Kurmaya Başla
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Demo Portali Gör
                </Button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Mobil uyumlu tasarım</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Güvenli veri şifreleme</span>
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
                    src="https://images.unsplash.com/photo-1677617587258-685aaf1b1e1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHBvcnRhbCUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTYyOTk2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Müşteri Portali Dashboard"
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
                    <Star className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">%94</div>
                    <div className="text-sm text-gray-500">Memnuniyet</div>
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
                    <Activity className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">%89</div>
                    <div className="text-sm text-gray-500">Kullanım</div>
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
              Müşteri Portali ile
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Etkileyici Sonuçlar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Self-servis portal kullanan işletmelerin elde ettiği ortalama performans
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
              Kapsamlı Portal
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşteri deneyimini geliştiren modern portal araçları
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

      {/* Portal Modules Section */}
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
              Portal Ana
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Modülleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşterilerinizin ihtiyaç duyduğu tüm işlevler tek çatı altında
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {portalModules.map((module, index) => (
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
                      <div className={`w-16 h-16 bg-gradient-to-r from-${module.color}-600 to-${module.color}-700 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <module.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h3>
                        <p className="text-gray-600 mb-4">{module.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {module.features.map((feature, featureIndex) => (
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

      {/* Customer Journey Section */}
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
              Müşteri Deneyimi
              <span className="text-cyan-300"> Yolculuğu</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Portal kullanımında müşterilerinizi adım adım başarıya götüren süreç
            </p>
          </motion.div>

          <div className="grid gap-8">
            {customerJourney.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                            Adım {index + 1}
                          </Badge>
                          <h3 className="text-xl font-semibold text-white">{step.step}</h3>
                        </div>
                        <p className="text-blue-200 mb-4">{step.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {step.details.map((detail, detailIndex) => (
                            <div key={detailIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span className="text-blue-100 text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">
                Gelişmiş Portal
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Özellikleri</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Enterprise seviyesinde güvenlik, kişiselleştirme ve analitik özellikler 
                ile müşteri portalınızı güçlendirin.
              </p>

              <div className="space-y-8">
                {advancedFeatures.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Zap className="w-5 h-5 text-blue-600 mr-2" />
                      {category.category}
                    </h3>
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-1 shadow-2xl">
                <div className="bg-white rounded-xl p-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1642888621621-ff7d83f3fdcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwYWNjb3VudCUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzU2Mjk5NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="User Account Management"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Self-Service Options */}
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
              Self-Servis
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Seçenekleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşterilerinizin kendi kendilerine halledebileceği işlemler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selfServiceOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <p className="text-gray-700 text-sm">{option}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
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
              Güçlü Sistem
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Entegrasyonları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mevcut sistemlerinizle sorunsuz çalışan portal entegrasyonları
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <integration.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
                    <p className="text-gray-600 text-sm">{integration.description}</p>
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
              Müşteri Portalınızı Kurmaya Hazır mısınız?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Müşterilerinize modern, güvenli ve kullanıcı dostu self-servis portalı sunun. 
              Destek maliyetlerini azaltın, müşteri memnuniyetini artırın!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 shadow-lg">
                Portal Kur
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                Demo Talep Et
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}