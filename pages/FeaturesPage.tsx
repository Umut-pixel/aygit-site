
import React from 'react';
import { motion } from "framer-motion";

// TypeScript compatibility fix for motion components
const MotionDiv = motion.div as any;
import { Button } from "../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { navigateTo } from "../router/Router";
import { useContactCallbackForm } from "../components/ContactCallbackForm";
import { 
  BarChart3,
  Users,
  Shield,
  ArrowRight,
  CheckCircle,
  Phone,
  Search,
  Share2,
  Mail,
  PieChart,
  MessageCircle,
  FileText,
  User,
  Lock,
  Database,
  Zap,
  Server
} from "lucide-react";

const featuresData = {
  hero: {
    title: "Güçlü Web Özellikleri",
    subtitle: "Modern web sitenizin ihtiyaç duyduğu tüm özellikler tek platformda",
    description: "SEO optimizasyonundan güvenlik özelliklerine kadar, başarılı bir web sitesi için gereken tüm araçlar ve yetenekler."
  },
  categories: [
    {
      title: "Dijital Pazarlama",
      icon: BarChart3,
      color: "from-blue-500 to-indigo-500",
      description: "Web sitenizin görünürlüğünü artıran pazarlama araçları",
      features: [
        {
          name: "SEO Optimizasyonu",
          href: "/features/seo",
          description: "Google'da üst sıralarda yer alın",
          icon: Search,
          highlights: ["Meta Tag Yönetimi", "Sitemap Otomasyonu", "Schema Markup", "Site Hızı Optimizasyonu"]
        },
        {
          name: "Sosyal Medya Entegrasyonu",
          href: "/features/social-media",
          description: "Tüm sosyal platformlarla entegrasyon",
          icon: Share2,
          highlights: ["Otomatik Paylaşım", "Social Media Feeds", "Share Butonları", "Analitik Takip"]
        },
        {
          name: "E-mail Pazarlama",
          href: "/features/email-marketing",
          description: "Otomatik email kampanyaları",
          icon: Mail,
          highlights: ["Newsletter Yönetimi", "Automated Campaigns", "A/B Testing", "Analytics"]
        },
        {
          name: "Analitik Raporlar",
          href: "/features/analytics",
          description: "Detaylı web sitesi ve ziyaretçi raporları",
          icon: PieChart,
          highlights: ["Google Analytics", "Heatmap", "Conversion Tracking", "Custom Reports"]
        }
      ]
    },
    {
      title: "Müşteri Yönetimi",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
      description: "Müşteri ilişkilerinizi güçlendiren araçlar",
      features: [
        {
          name: "CRM Sistemi",
          href: "/features/crm",
          description: "Müşteri ilişkileri yönetimi",
          icon: Users,
          highlights: ["Lead Yönetimi", "Müşteri Geçmişi", "Satış Pipeline", "Task Yönetimi"]
        },
        {
          name: "Canlı Destek",
          href: "/features/live-support",
          description: "7/24 müşteri desteği sistemi",
          icon: MessageCircle,
          highlights: ["Live Chat", "Ticket System", "FAQ Bot", "Multilingual Support"]
        },
        {
          name: "İletişim Formu",
          href: "/features/contact-form",
          description: "Gelişmiş iletişim form yönetimi",
          icon: FileText,
          highlights: ["Form Builder", "Conditional Logic", "File Upload", "Email Notifications"]
        },
        {
          name: "Müşteri Portali",
          href: "/features/customer-portal",
          description: "Müşteri özel alanları",
          icon: User,
          highlights: ["Personal Dashboard", "Order History", "Document Access", "Support Tickets"]
        }
      ]
    },
    {
      title: "Güvenlik ve Altyapı",
      icon: Shield,
      color: "from-indigo-500 to-blue-600",
      description: "Web sitenizin güvenliğini ve performansını garanti eden altyapı",
      features: [
        {
          name: "SSL Sertifikası",
          href: "/features/ssl",
          description: "Güvenli web sitesi altyapısı",
          icon: Lock,
          highlights: ["256-bit Encryption", "Auto-Renewal", "Mixed Content Fix", "SEO Boost"]
        },
        {
          name: "Yedekleme Sistemi",
          href: "/features/backup",
          description: "Otomatik veri yedekleme",
          icon: Database,
          highlights: ["Daily Backups", "One-click Restore", "Cloud Storage", "Version Control"]
        },
        {
          name: "Hız Optimizasyonu",
          href: "/features/speed",
          description: "Yüksek performans ve hız",
          icon: Zap,
          highlights: ["CDN Integration", "Image Optimization", "Caching", "Lazy Loading"]
        },
        {
          name: "Sunucu Yönetimi",
          href: "/features/hosting",
          description: "Güvenilir hosting çözümleri",
          icon: Server,
          highlights: ["99.9% Uptime", "SSD Storage", "Auto-scaling", "24/7 Monitoring"]
        }
      ]
    }
  ],
  stats: [
    { label: "Aktif Özellik", value: "50+", icon: CheckCircle },
    { label: "Uptime Garantisi", value: "%99.9", icon: Shield },
    { label: "SEO Skoru Artışı", value: "+85%", icon: BarChart3 },
    { label: "Müşteri Memnuniyeti", value: "4.9/5", icon: Users }
  ],
  benefits: [
    "Tek platformda tüm özellikler",
    "Kolay kullanım ve yönetim",
    "Sürekli güncellenen teknoloji",
    "7/24 teknik destek",
    "Ölçeklenebilir altyapı",
    "Güvenlik öncelikli yaklaşım"
  ]
};

export function FeaturesPage() {
  const { openForm, CallbackFormComponent } = useContactCallbackForm();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <MotionDiv
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {featuresData.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {featuresData.hero.subtitle}
              </p>
              <p className="text-lg text-gray-500 max-w-4xl mx-auto">
                {featuresData.hero.description}
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Özellikleri Keşfet</span>
              </Button>
              <Button 
                onClick={() => navigateTo('/solutions/enterprise-portal')}
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Demo Dene
              </Button>
            </MotionDiv>
          </MotionDiv>

          {/* Stats */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {featuresData.stats.map((stat, index) => (
              <MotionDiv
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + (index * 0.1), duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Features Categories */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {featuresData.categories.map((category, categoryIndex) => (
            <MotionDiv
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="mb-24 last:mb-0"
            >
              {/* Category Header */}
              <div className="text-center mb-16">
                <MotionDiv
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: categoryIndex * 0.2 + 0.3, duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl mb-6 shadow-lg`}
                >
                  <category.icon className="w-10 h-10 text-white" />
                </MotionDiv>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {category.features.map((feature, featureIndex) => (
                  <MotionDiv
                    key={feature.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.2 + featureIndex * 0.1 + 0.5, 
                      duration: 0.6 
                    }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl shadow-md`}>
                            <feature.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-xl font-bold text-gray-900">
                              {feature.name}
                            </CardTitle>
                            <CardDescription className="text-gray-600 mt-1">
                              {feature.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-0">
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {feature.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{highlight}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          onClick={() => navigateTo(feature.href)}
                          className={`w-full bg-gradient-to-r ${category.color} hover:shadow-lg text-white border-0 transition-all duration-300 flex items-center justify-center space-x-2`}
                        >
                          <span>Detayları İncele</span>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-4xl">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Neden Bu Özellikler Önemli?
            </h2>
            <p className="text-xl text-gray-300">
              Modern web sitelerinin başarılı olması için gerekli olan temel bileşenler
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {featuresData.benefits.map((benefit, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + (index * 0.1), duration: 0.5 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto max-w-4xl text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Bu Özelliklerin Tamamına Sahip Olmaya Hazır mısınız?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Modern web sitenizin ihtiyaç duyduğu tüm özellikler tek platformda. 
              Hemen başlayın ve farkı görün.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Hemen Başla</span>
              </Button>
              <Button 
                onClick={() => navigateTo('/pricing')}
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Fiyatları Görüntüle
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      <CallbackFormComponent />
    </div>
  );
}