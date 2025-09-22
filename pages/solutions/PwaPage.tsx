// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";

// TYPE OVERRIDE - Fix PwaPage motion.div issues
const MotionDiv = motion.div as any;
import { HeaderWithMegaMenuDark } from "../../components/HeaderWithMegaMenuDark";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { 
  Smartphone, 
  Zap, 
  Shield, 
  Wifi, 
  Download, 
  Bell, 
  Battery, 
  MonitorSpeaker,
  CheckCircle,
  ArrowRight,
  Play,
  FileText,
  Users,
  Star,
  Globe,
  RefreshCw
} from "lucide-react";
import { useState } from "react";
import React from "react";

export function PwaPage() {
  const [selectedDemo, setSelectedDemo] = useState("ecommerce");

  const pwaFeatures = [
    {
      icon: Smartphone,
      title: "App-Like Deneyim",
      description: "Native mobil uygulama hissi veren kullanıcı deneyimi"
    },
    {
      icon: Wifi,
      title: "Offline Çalışma",
      description: "İnternet bağlantısı olmadan da kullanılabilir"
    },
    {
      icon: Download,
      title: "Ana Ekrana Ekleme",
      description: "App Store'a gerek kalmadan cihaza yüklenebilir"
    },
    {
      icon: Bell,
      title: "Push Bildirimler",
      description: "Kullanıcılarınızla anlık iletişim kurun"
    },
    {
      icon: Zap,
      title: "Hızlı Yükleme",
      description: "Service Worker teknolojisi ile çok hızlı açılış"
    },
    {
      icon: Shield,
      title: "Güvenli Bağlantı",
      description: "HTTPS üzerinden güvenli veri transferi"
    }
  ];

  const comparisonData = [
    {
      feature: "Geliştirme Maliyeti",
      native: "Yüksek (iOS + Android ayrı)",
      pwa: "Düşük (Tek kod tabanı)",
      pwaAdvantage: true
    },
    {
      feature: "App Store Onayı",
      native: "Gerekli (1-2 hafta)",
      pwa: "Gereksiz (Anında)",
      pwaAdvantage: true
    },
    {
      feature: "Güncelleme Süreci",
      native: "Kullanıcı indirmeli",
      pwa: "Otomatik güncelleme",
      pwaAdvantage: true
    },
    {
      feature: "Cihaz Özellikleri",
      native: "Tam erişim",
      pwa: "Sınırlı erişim",
      pwaAdvantage: false
    },
    {
      feature: "Performans",
      native: "Çok yüksek",
      pwa: "Yüksek",
      pwaAdvantage: false
    },
    {
      feature: "SEO Desteği",
      native: "Yok",
      pwa: "Tam destek",
      pwaAdvantage: true
    }
  ];

  const demoApps = [
    {
      id: "ecommerce",
      name: "E-ticaret PWA",
      description: "Online mağaza deneyimi",
      image: "🛍️",
      features: ["Çevrimdışı sepet", "Push bildirimler", "Hızlı ödeme"]
    },
    {
      id: "news",
      name: "Haber Portalı PWA",
      description: "Mobil haber uygulaması",
      image: "📰",
      features: ["Offline okuma", "Push haberler", "Kaydetme"]
    },
    {
      id: "social",
      name: "Sosyal Platform PWA",
      description: "Sosyal medya deneyimi",
      image: "👥",
      features: ["Anlık mesaj", "Fotoğraf yükleme", "Stories"]
    }
  ];

  const packages = [
    {
      id: "basic",
      name: "Temel PWA",
      price: "₺8,999",
      period: "/proje",
      description: "Küçük projeler için",
      features: [
        "Temel PWA kurulumu",
        "Offline çalışma",
        "Ana ekrana ekleme",
        "Responsive tasarım",
        "Temel önbellek stratejisi",
        "SSL sertifikası",
        "3 ay destek"
      ],
      highlighted: false
    },
    {
      id: "professional",
      name: "Profesyonel PWA",
      price: "₺19,999",
      period: "/proje",
      description: "İş uygulamaları için",
      features: [
        "Gelişmiş PWA özellikleri",
        "Push bildirim sistemi",
        "Gelişmiş offline modu",
        "App shell mimarisi",
        "Background sync",
        "Custom service worker",
        "Analytics entegrasyonu",
        "6 ay destek"
      ],
      highlighted: true
    },
    {
      id: "enterprise",
      name: "Kurumsal PWA",
      price: "₺39,999",
      period: "/proje",
      description: "Büyük kuruluşlar için",
      features: [
        "Özel PWA geliştirme",
        "Gelişmiş bildirim sistemi",
        "Çoklu cihaz senkronizasyonu",
        "API entegrasyonları",
        "Güvenlik optimizasyonu",
        "Performans izleme",
        "Custom domain",
        "12 ay öncelikli destek"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <HeaderWithMegaMenuDark />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
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
                <Smartphone className="w-4 h-4 mr-2" />
                Progressive Web App
              </Badge>
              <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Web Teknolojisi,
                <br />Mobil Deneyim
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Progressive Web App (PWA) teknolojisi ile web sitenizi native mobil uygulama 
                deneyimi sunan güçlü bir platforma dönüştürün.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3">
                  <Play className="w-5 h-5 mr-2" />
                  PWA Demo İzle
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                  <FileText className="w-5 h-5 mr-2" />
                  Teknik Detaylar
                </Button>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* PWA Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              PWA'nın Güçlü Özellikleri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern web teknolojileri ile native uygulama deneyimini birleştiren özellikler
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pwaFeatures.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4">
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

      {/* Demo Apps */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              PWA Demo Uygulamaları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı sektörler için geliştirdiğimiz PWA örneklerini inceleyin
            </p>
          </MotionDiv>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {demoApps.map((app) => (
              <Button
                key={app.id}
                variant={selectedDemo === app.id ? "default" : "outline"}
                onClick={() => setSelectedDemo(app.id)}
                className="px-6 py-3"
              >
                <span className="mr-2 text-lg">{app.image}</span>
                {app.name}
              </Button>
            ))}
          </div>

          <MotionDiv
            key={selectedDemo}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {demoApps.map((app) => (
              selectedDemo === app.id && (
                <Card key={app.id} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                    <div className="flex items-center space-x-4">
                      <span className="text-4xl">{app.image}</span>
                      <div>
                        <CardTitle className="text-2xl text-white">{app.name}</CardTitle>
                        <CardDescription className="text-purple-100">{app.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Özellikler</h4>
                        <ul className="space-y-2">
                          {app.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-6 text-center">
                        <MonitorSpeaker className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-4">
                          {app.name} demo uygulamasını cihazınızda deneyin
                        </p>
                        <Button className="bg-purple-600 hover:bg-purple-700">
                          <Play className="w-4 h-4 mr-2" />
                          Demo Başlat
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* PWA vs Native Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              PWA vs Native Mobil Uygulama
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Progressive Web App teknolojisinin avantajlarını keşfedin
            </p>
          </MotionDiv>

          <Card className="overflow-hidden max-w-4xl mx-auto">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
              <CardTitle className="text-2xl text-center">Detaylı Karşılaştırma</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-medium">Özellik</th>
                      <th className="text-center p-4 font-medium">Native App</th>
                      <th className="text-center p-4 font-medium">PWA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((item, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-4 font-medium">{item.feature}</td>
                        <td className="p-4 text-center text-gray-600">{item.native}</td>
                        <td className={`p-4 text-center ${item.pwaAdvantage ? 'text-green-600 font-medium' : 'text-gray-600'}`}>
                          {item.pwa}
                          {item.pwaAdvantage && <CheckCircle className="w-4 h-4 inline ml-2" />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              PWA Geliştirme Paketleri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Projenizin ihtiyaçlarına uygun PWA çözümünü seçin
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <MotionDiv
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full relative ${pkg.highlighted ? 'ring-2 ring-purple-500 shadow-xl scale-105' : ''}`}>
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-purple-500 text-white px-3 py-1">
                        <Star className="w-4 h-4 mr-1" />
                        Önerilen
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                    <CardDescription className="text-gray-600">{pkg.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                      <span className="text-gray-600">{pkg.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${pkg.highlighted ? 'bg-purple-600 hover:bg-purple-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                    >
                      {pkg.highlighted ? 'Hemen Başla' : 'Paketi Seç'}
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
      <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              PWA Projenize Başlamaya Hazır mısınız?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Uzman ekibimiz projenizi analiz ederek en uygun PWA çözümünü geliştirir.
              Ücretsiz teknik danışmanlık için iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3">
                <Users className="w-5 h-5 mr-2" />
                Ücretsiz Danışmanlık
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                <RefreshCw className="w-5 h-5 mr-2" />
                PWA Audit Talebi
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}