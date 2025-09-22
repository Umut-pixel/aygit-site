
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
  Globe, 
  Palette, 
  Users, 
  Zap, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Phone,
  Headphones,
  BookOpen,
  MessageCircle,
  Award
} from "lucide-react";

const servicesData = {
  hero: {
    title: "Premium Web Hizmetlerimiz",
    subtitle: "Kurumsal web altyapınızı güçlendiren profesyonel hizmetler",
    description: "Modern web teknolojileri ile işletmenizin dijital dönüşümünü tamamlayın. Premium tema seçeneklerinden ajans partnerliklerine kadar geniş hizmet yelpazesi."
  },
  mainServices: [
    {
      title: "Kurumsal Web Sitesi",
      href: "/services/kurumsal-web-sitesi",
      icon: Globe,
      description: "Profesyonel kurumsal web altyapısı geliştirme hizmetleri",
      color: "from-blue-500 to-cyan-500",
      features: ["Özel Tasarım", "SEO Optimizasyonu", "Mobil Uyumlu", "CMS Yönetimi"],
      highlight: "En Popüler"
    },
    {
      title: "Modern Tema Seçenekleri",
      href: "/services/modern-temalar",
      icon: Palette,
      description: "150+ premium tema koleksiyonu ile hızlı başlangıç",
      color: "from-blue-500 to-indigo-500",
      features: ["150+ Premium Tema", "Kolay Özelleştirme", "Düzenli Güncellemeler", "Demo İçeriği"],
      highlight: "Yeni"
    },
    {
      title: "Ajanslar için Partnerlik",
      href: "/services/ajans-partnerligi",
      icon: Users,
      description: "%30 komisyon ile partner programımıza katılın",
      color: "from-green-500 to-emerald-500",
      features: ["%30 Komisyon", "Beyaz Etiket", "Teknik Destek", "Pazarlama Materyalleri"],
      highlight: "Kazançlı"
    },
    {
      title: "Builder Teknolojisi",
      href: "/services/builder-teknolojisi",
      icon: Zap,
      description: "Kod yazmadan profesyonel sayfalar oluşturun",
      color: "from-indigo-500 to-blue-600",
      features: ["Sürükle-Bırak", "Canlı Önizleme", "Responsive Design", "Hızlı Yayınlama"],
      highlight: "Teknoloji"
    }
  ],
  supportServices: [
    {
      title: "7/24 Teknik Destek",
      href: "/support",
      icon: Headphones,
      description: "Kesintisiz destek hizmeti",
      features: ["Canlı Destek", "Email Destek", "Telefon Destek", "Uzaktan Erişim"]
    },
    {
      title: "Video Eğitimler",
      href: "/support/training",
      icon: BookOpen,
      description: "Adım adım eğitim videoları",
      features: ["100+ Video", "Türkçe Anlatım", "İnteraktif İçerik", "Sertifika"]
    },
    {
      title: "Dokümantasyon",
      href: "/support/docs",
      icon: MessageCircle,
      description: "Detaylı kullanım kılavuzları",
      features: ["Kapsamlı Kılavuz", "Kod Örnekleri", "API Dokümantasyonu", "FAQ"]
    },
    {
      title: "Canlı Destek",
      href: "/support/live-chat",
      icon: MessageCircle,
      description: "Anlık canlı destek sistemi",
      features: ["Anlık Yanıt", "Uzman Ekip", "Ekran Paylaşımı", "Problem Çözme"]
    }
  ],
  stats: [
    { label: "Aktif Müşteri", value: "1000+", icon: Users },
    { label: "Tamamlanan Proje", value: "500+", icon: CheckCircle },
    { label: "Premium Tema", value: "150+", icon: Palette },
    { label: "Destek Puanı", value: "4.9/5", icon: Star }
  ],
  benefits: [
    {
      title: "Hızlı Teslimat",
      description: "Projelerinizi zamanında ve kaliteli şekilde teslim ediyoruz",
      icon: Zap
    },
    {
      title: "Uzman Ekip",
      description: "Alanında uzman developers ve designers ile çalışıyoruz",
      icon: Award
    },
    {
      title: "7/24 Destek",
      description: "Her zaman yanınızda olan teknik destek ekibimiz",
      icon: Headphones
    },
    {
      title: "Güncel Teknolojiler",
      description: "En son web teknolojilerini projelerinizde kullanıyoruz",
      icon: Globe
    }
  ]
};

export function ServicesPage() {
  const { openForm, CallbackFormComponent } = useContactCallbackForm();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
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
                {servicesData.hero.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                {servicesData.hero.subtitle}
              </p>
              <p className="text-lg text-gray-500 max-w-4xl mx-auto">
                {servicesData.hero.description}
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
                <span>Hizmet Al</span>
              </Button>
              <Button 
                onClick={() => navigateTo('/pricing')}
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Fiyatları Görüntüle
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
            {servicesData.stats.map((stat, index) => (
              <MotionDiv
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + (index * 0.1), duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ana Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İşletmenizin dijital varlığını güçlendiren premium web hizmetleri
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {servicesData.mainServices.map((service, index) => (
              <MotionDiv
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm overflow-hidden group">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  
                  {service.highlight && (
                    <div className="absolute top-6 right-6">
                      <Badge className={`bg-gradient-to-r ${service.color} text-white border-0`}>
                        {service.highlight}
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-lg">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-3 mb-6 flex-1">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      onClick={() => navigateTo(service.href)}
                      className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg text-white border-0 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105`}
                    >
                      <span>Detayları İncele</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto max-w-7xl">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Destek & Eğitim Hizmetlerimiz</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Size en iyi hizmeti sunabilmek için kapsamlı destek ve eğitim seçenekleri sunuyoruz
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.supportServices.map((service, index) => (
              <MotionDiv
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 text-white">
                  <CardHeader className="text-center pb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 mx-auto">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 flex flex-col">
                    <div className="space-y-2 mb-6 flex-1">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      onClick={() => navigateTo(service.href)}
                      variant="outline"
                      className="w-full border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>Keşfet</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Size en kaliteli hizmeti sunabilmek için sahip olduğumuz avantajlar
            </p>
          </MotionDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.benefits.map((benefit, index) => (
              <MotionDiv
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </MotionDiv>
            ))}
          </div>
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
              Projenizi Hayata Geçirmeye Hazır mısınız?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Uzman ekibimiz ile birlikte işletmenizin dijital dönüşümünü tamamlayın. 
              Size özel çözümler için hemen iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={openForm}
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Proje Başlat</span>
              </Button>
              <Button 
                onClick={() => navigateTo('/solutions')}
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Çözümleri İncele
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      <CallbackFormComponent />
    </div>
  );
}