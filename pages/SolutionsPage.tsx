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
  Building2, 
  ShoppingCart, 
  Settings, 
  Globe, 
  Smartphone, 
  Palette, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Phone
} from "lucide-react";

const solutionsData = {
  hero: {
    title: "Kurumsal Web Çözümleri",
    subtitle: "İşletmenizin büyüklüğüne ve ihtiyaçlarına göre özelleştirilmiş web altyapısı çözümleri",
    description: "Temel kurumsal sitelerden büyük ölçekli enterprise portallarına kadar, her türlü iş ihtiyacınıza uygun modern ve güvenilir web çözümleri sunuyoruz."
  },
  categories: [
    {
      title: "Kurumsal Çözümler",
      icon: Building2,
      description: "Profesyonel kurumsal web altyapısı için tasarlanmış çözümler",
      color: "from-blue-500 to-indigo-500",
      solutions: [
        {
          name: "Temel Kurumsal",
          href: "/solutions/basic-corporate",
          description: "Küçük işletmeler için temel web altyapısı",
          features: ["5 Sayfa", "Responsive Tasarım", "SEO Optimizasyonu", "SSL Sertifikası"],
          price: "Başlangıç",
          popular: false
        },
        {
          name: "Profesyonel Kurumsal",
          href: "/solutions/professional-corporate",
          description: "Orta ölçekli işletmeler için gelişmiş çözümler",
          features: ["15 Sayfa", "CRM Entegrasyonu", "Gelişmiş Analitik", "Canlı Destek"],
          price: "Popüler",
          popular: true
        },
        {
          name: "Kurumsal Portal",
          href: "/solutions/enterprise-portal",
          description: "Büyük kurumlar için kapsamlı portal çözümleri",
          features: ["Sınırsız Sayfa", "API Entegrasyonları", "Özel Geliştirme", "7/24 Destek"],
          price: "Premium",
          popular: false
        },
        {
          name: "B2B Platform",
          href: "/solutions/b2b-platform",
          description: "İş ortakları için B2B platformu",
          features: ["Partner Yönetimi", "Sipariş Sistemi", "Raporlama", "Multi-dil Desteği"],
          price: "Kurumsal",
          popular: false
        }
      ]
    },
    {
      title: "E-Ticaret Çözümleri",
      icon: ShoppingCart,
      description: "Online satış için optimize edilmiş e-ticaret platformları",
      color: "from-blue-500 to-cyan-500",
      solutions: [
        {
          name: "Temel E-Ticaret",
          href: "/solutions/basic-ecommerce",
          description: "Başlangıç seviyesi online mağaza",
          features: ["50 Ürün", "Ödeme Entegrasyonu", "Stok Yönetimi", "Mobil Uyumlu"],
          price: "Başlangıç",
          popular: false
        },
        {
          name: "Profesyonel E-Ticaret",
          href: "/solutions/professional-ecommerce",
          description: "Gelişmiş e-ticaret özellikleri",
          features: ["500 Ürün", "Çoklu Mağaza", "Kampanya Yönetimi", "Analitik Raporlar"],
          price: "Popüler",
          popular: true
        },
        {
          name: "Kurumsal E-Ticaret",
          href: "/solutions/enterprise-ecommerce",
          description: "Büyük hacimli e-ticaret platformu",
          features: ["Sınırsız Ürün", "ERP Entegrasyonu", "B2B/B2C Destek", "Özel API"],
          price: "Premium",
          popular: false
        },
        {
          name: "Mobil Uygulama",
          href: "/solutions/mobile-app",
          description: "iOS ve Android mobil uygulamalar",
          features: ["Native Uygulama", "Push Bildirim", "Offline Destek", "App Store Yayını"],
          price: "Özel",
          popular: false
        }
      ]
    },
    {
      title: "Özel Geliştirme",
      icon: Settings,
      description: "Markanıza özel tasarım ve geliştirme hizmetleri",
      color: "from-indigo-500 to-blue-600",
      solutions: [
        {
          name: "Özel Tasarım",
          href: "/solutions/custom-design",
          description: "Markanıza özel web tasarım çözümleri",
          features: ["Özgün Tasarım", "Marka Uyumu", "UX/UI Optimizasyonu", "A/B Test"],
          price: "Özel",
          popular: false
        },
        {
          name: "API Entegrasyonları",
          href: "/solutions/api-integrations",
          description: "Üçüncü parti sistem entegrasyonları",
          features: ["REST API", "Webhook Desteği", "Veri Senkronizasyonu", "Güvenli Bağlantı"],
          price: "Modüler",
          popular: false
        },
        {
          name: "PWA Çözümleri",
          href: "/solutions/pwa",
          description: "Progressive Web App geliştirme",
          features: ["App-like Deneyim", "Offline Çalışma", "Push Bildirim", "Hızlı Yükleme"],
          price: "Modern",
          popular: true
        }
      ]
    }
  ],
  stats: [
    { label: "Tamamlanan Proje", value: "500+", icon: CheckCircle },
    { label: "Mutlu Müşteri", value: "300+", icon: Star },
    { label: "Yıllık Deneyim", value: "10+", icon: Building2 },
    { label: "Uptime Garantisi", value: "%99.9", icon: Globe }
  ]
};

export function SolutionsPage() {
  const { openForm, CallbackFormComponent } = useContactCallbackForm();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
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
                {solutionsData.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {solutionsData.hero.subtitle}
              </p>
              <p className="text-lg text-gray-500 max-w-4xl mx-auto">
                {solutionsData.hero.description}
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
                <span>Ücretsiz Konsültasyon</span>
              </Button>
              <Button 
                onClick={() => navigateTo('/solutions/enterprise-portal')}
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Demo İzle
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
            {solutionsData.stats.map((stat, index) => (
              <MotionDiv
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + (index * 0.1), duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Solutions Categories */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          {solutionsData.categories.map((category, categoryIndex) => (
            <MotionDiv
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              className="mb-20 last:mb-0"
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

              {/* Solutions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.solutions.map((solution, solutionIndex) => (
                  <MotionDiv
                    key={solution.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: categoryIndex * 0.2 + solutionIndex * 0.1 + 0.5, 
                      duration: 0.6 
                    }}
                  >
                    <Card className={`h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${solution.popular ? 'ring-2 ring-blue-500 ring-offset-2' : ''} bg-white/80 backdrop-blur-sm`}>
                      {solution.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <Badge className="bg-blue-600 text-white px-3 py-1">
                            En Popüler
                          </Badge>
                        </div>
                      )}
                      
                      <CardHeader className="text-center pb-4">
                        <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                          {solution.name}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {solution.description}
                        </CardDescription>
                        <div className="mt-4">
                          <Badge variant="outline" className="text-blue-600 border-blue-600">
                            {solution.price}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="flex-1 flex flex-col">
                        <div className="space-y-3 mb-6 flex-1">
                          {solution.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          onClick={() => navigateTo(solution.href)}
                          className={`w-full ${solution.popular 
                            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                          } transition-all duration-300 flex items-center justify-center space-x-2`}
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto max-w-4xl text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Hangi Çözümün Size Uygun Olduğundan Emin Değil misiniz?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Uzman ekibimiz size en uygun çözümü bulmanızda yardımcı olacak. 
              Ücretsiz konsültasyon için hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Ücretsiz Danışmanlık</span>
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