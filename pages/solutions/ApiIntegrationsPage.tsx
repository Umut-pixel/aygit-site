// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";
import { HeaderWithMegaMenuDark } from "../../components/HeaderWithMegaMenuDark";

// TYPE OVERRIDE - Fix ApiIntegrationsPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { 
  Settings, 
  Zap, 
  Shield, 
  Clock, 
  Users, 
  BarChart3, 
  Database, 
  Cloud,
  CheckCircle,
  ArrowRight,
  Play,
  FileText,
  Headphones,
  Star
} from "lucide-react";
import { useState } from "react";
import React from "react";

export function ApiIntegrationsPage() {
  const [selectedPlan, setSelectedPlan] = useState("professional");

  const integrationCategories = [
    {
      title: "CRM & Satış Sistemleri",
      icon: Users,
      color: "from-blue-600 to-blue-700",
      integrations: [
        { name: "Salesforce", description: "Dünya lideri CRM çözümü", complexity: "Orta" },
        { name: "HubSpot", description: "All-in-one pazarlama platformu", complexity: "Kolay" },
        { name: "Pipedrive", description: "Satış odaklı CRM sistemi", complexity: "Kolay" },
        { name: "Zoho CRM", description: "Kapsamlı müşteri yönetimi", complexity: "Orta" }
      ]
    },
    {
      title: "E-ticaret Platformları",
      icon: BarChart3,
      color: "from-cyan-600 to-cyan-700",
      integrations: [
        { name: "Shopify", description: "Global e-ticaret platformu", complexity: "Kolay" },
        { name: "WooCommerce", description: "WordPress tabanlı mağaza", complexity: "Orta" },
        { name: "Magento", description: "Kurumsal e-ticaret çözümü", complexity: "Zor" },
        { name: "OpenCart", description: "Açık kaynak mağaza sistemi", complexity: "Orta" }
      ]
    },
    {
      title: "Muhasebe & ERP",
      icon: Database,
      color: "from-indigo-600 to-indigo-700",
      integrations: [
        { name: "SAP", description: "Kurumsal kaynak planlaması", complexity: "Zor" },
        { name: "Oracle NetSuite", description: "Bulut tabanlı ERP sistemi", complexity: "Zor" },
        { name: "QuickBooks", description: "Küçük işletme muhasebesi", complexity: "Kolay" },
        { name: "Logo Go", description: "Türkiye'nin ERP çözümü", complexity: "Orta" }
      ]
    },
    {
      title: "İletişim & İş Akışı",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      integrations: [
        { name: "Slack", description: "Takım iletişim platformu", complexity: "Kolay" },
        { name: "Microsoft Teams", description: "İş birliği ve toplantı", complexity: "Kolay" },
        { name: "Asana", description: "Proje yönetim sistemi", complexity: "Orta" },
        { name: "Trello", description: "Görsel proje takibi", complexity: "Kolay" }
      ]
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Hızlı Entegrasyon",
      description: "Önceden hazırlanmış API bağlantıları ile hızlı kurulum"
    },
    {
      icon: Shield,
      title: "Güvenli Bağlantı",
      description: "SSL şifreleme ve OAuth 2.0 ile güvenli veri transferi"
    },
    {
      icon: Clock,
      title: "Gerçek Zamanlı Senkronizasyon",
      description: "Verileriniz anlık olarak tüm sistemlerde güncel"
    },
    {
      icon: Settings,
      title: "Özelleştirilebilir",
      description: "İş süreçlerinize özel API entegrasyon çözümleri"
    }
  ];

  const pricingPlans = [
    {
      id: "basic",
      name: "Temel",
      price: "₺2,999",
      period: "/ay",
      description: "Küçük işletmeler için ideal",
      features: [
        "5 API entegrasyonu",
        "Temel veri senkronizasyonu",
        "Email destek",
        "Standart güvenlik",
        "Aylık raporlar"
      ],
      highlighted: false
    },
    {
      id: "professional",
      name: "Profesyonel",
      price: "₺5,999",
      period: "/ay",
      description: "Büyüyen işletmeler için",
      features: [
        "15 API entegrasyonu",
        "Gelişmiş veri senkronizasyonu",
        "Öncelikli destek",
        "Gelişmiş güvenlik",
        "Gerçek zamanlı raporlar",
        "Özel webhook'lar",
        "API izleme dashboard'u"
      ],
      highlighted: true
    },
    {
      id: "enterprise",
      name: "Kurumsal",
      price: "₺12,999",
      period: "/ay",
      description: "Büyük kuruluşlar için",
      features: [
        "Sınırsız API entegrasyonu",
        "Özel entegrasyon geliştirme",
        "7/24 öncelikli destek",
        "Kurumsal güvenlik",
        "Detaylı analitik raporlar",
        "Özel SLA anlaşması",
        "Dedicated hesap yöneticisi",
        "Özel sunucu seçeneği"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeaderWithMegaMenuDark />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Settings className="w-4 h-4 mr-2" />
                API Entegrasyonları
              </Badge>
              <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Sistemlerinizi Birbirine Bağlayın
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Mevcut iş sistemlerinizi web sitenizle entegre ederek 
                verimliliği artırın ve iş süreçlerinizi otomatikleştirin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3">
                  <Play className="w-5 h-5 mr-2" />
                  Demo İzleyin
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                  <FileText className="w-5 h-5 mr-2" />
                  Teknik Dökümanlar
                </Button>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Güçlü API Entegrasyon Özellikleri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mevcut sistemlerinizi sorunsuz bir şekilde web sitenizle entegre edin
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Desteklenen Entegrasyon Kategorileri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              200+ popüler platform ve servisle hazır entegrasyon çözümleri
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-8">
            {integrationCategories.map((category, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.integrations.map((integration, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                          <div>
                            <h4 className="font-medium text-gray-900">{integration.name}</h4>
                            <p className="text-sm text-gray-600">{integration.description}</p>
                          </div>
                          <Badge 
                            variant={integration.complexity === "Kolay" ? "default" : integration.complexity === "Orta" ? "secondary" : "destructive"}
                            className="ml-2"
                          >
                            {integration.complexity}
                          </Badge>
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

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              API Entegrasyon Paketleri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İhtiyaçlarınıza uygun entegrasyon çözümünü seçin
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <MotionDiv
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full relative ${plan.highlighted ? 'ring-2 ring-blue-500 shadow-xl scale-105' : ''}`}>
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white px-3 py-1">
                        <Star className="w-4 h-4 mr-1" />
                        En Popüler
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-gray-600">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.highlighted ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      {plan.highlighted ? 'Hemen Başla' : 'Planı Seç'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              API Entegrasyonunuz Hazır!
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Teknik ekibimiz sisteminizi analiz ederek en uygun entegrasyon çözümünü sunar.
              Ücretsiz danışmanlık için iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3">
                <Headphones className="w-5 h-5 mr-2" />
                Ücretsiz Danışmanlık
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                <FileText className="w-5 h-5 mr-2" />
                API Dokümantasyonu
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}