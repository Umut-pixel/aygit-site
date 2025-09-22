import React from 'react';
// AYGIT TECHNOLOGIES - MODERN MOTION IMPLEMENTATION
import { MotionDiv, useRef } from "./MotionWrapper";
import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Building, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  Users, 
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Lightbulb
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { navigateTo } from "../router/Router";

const services = [
  {
    icon: Building,
    title: "Hızlı Yayına Alma",
    description: "Dakikalar içinde yayında olun! Tema seç, metinleri güncelle ve yayına al. Kod bilgisi gerekmez.",
    features: ["Hazır Kurumsal Temalar", "Tek Panelden Tüm Yönetim", "SEO ve Mobil Uyumlu", "Sürükle - Bırak Kolaylığı"],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: TrendingUp,
    title: "Modern Tasarım Seçenekleri", 
    description: "Sektöre özel, premium görünüme sahip modern temalar arasından dilediğini seç.",
    features: ["Tam Özelleştirilebilir", "Sınırsız Sayfa Desteği", "Hızlı Yüklenen Sayfalar", "Marka Kimliğine Uyumlu"],
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: Shield,
    title: "Performans ve Entegrasyon",
    description: "Web siteniz yalnızca güzel değil, hızlı ve entegre çalışan bir sistemdir.",
    features: ["Hız & SEO Optimizasyonu", "SMTP, Form, WhatsApp Entegrasyonu", "Çok Dilli Altyapı", "JSON/HTML İçerik Girişi"],
    color: "from-blue-700 to-blue-800"
  },
  {
    icon: Zap,
    title: "Güçlü Yönetim Paneli",
    description: "Tüm site içeriğinizi tek panelden kolayca yönetin. Sayfa oluşturun, görselleri değiştirin, yazıları güncelleyin.",
    features: ["Kod Bilgisi Gerektirmez", "Gerçek Zamanlı Önizleme", "JSON/HTML İçerik Girişi", "Tema Ayarlarını Panelden Yönetin"],
    color: "from-blue-500 to-blue-700"
  }
];

const achievements = [
  { icon: BarChart3, metric: "98%", label: "Müşteri Memnuniyeti", description: "İstisnai hizmet sunumu" },
  { icon: Globe, metric: "25+", label: "Şehir", description: "Küresel erişim ve varlık" },
  { icon: Users, metric: "100+", label: "Kurumsal Web Altyapısı", description: "Başarıyla tamamlandı" },
  { icon: Lightbulb, metric: "5+", label: "Sektör", description: "Çeşitli alan uzmanlığı" }
];

export function CorporateSection() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsInView(true);
  }, []);

  return (
    <section id="corporate" ref={ref} className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18-18-8.059-18-18 8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated background elements */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full blur-3xl"
      />
      <MotionDiv
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.1, scale: 1 } : {}}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 bg-blue-800/50 text-blue-200 border-blue-600">
            Kurumsal Mükemmellik
          </Badge>
          <h2 className="text-5xl font-bold mb-6">
            İşletmenizin{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
              Potansiyelini Yükseltin
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Günümüzün rekabet ortamında inovasyon, verimlilik ve sürdürülebilir büyümeyi 
            desteklemek üzere tasarlanmış kapsamlı kurumsal çözümlerimizle organizasyonunuzu dönüştürün.
          </p>
        </MotionDiv>

        {/* Services Grid */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 group-hover:shadow-2xl">
                <CardContent className="p-6">
                  <MotionDiv
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </MotionDiv>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-blue-100 mb-4 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <MotionDiv
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 + featureIndex * 0.05 }}
                        className="flex items-center text-blue-200 text-sm"
                        as="li"
                      >
                        <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </MotionDiv>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* Main content with image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              İnovasyon Yoluyla Kurumsal Mükemmelliği Yönlendirme
            </h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Deneyimli profesyonellerden oluşan ekibimiz, kurumsal strateji, operasyonel mükemmellik 
              ve dijital dönüşüm alanlarında 5 yıllık deneyim getirerek organizasyonunuzun 
              sürekli gelişen iş ortamında başarıya ulaşmasına yardımcı oluyor.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Stratejik planlama ve uygulama",
                "Gelişmiş analitik ve içgörüler",
                "Değişim yönetimi ve eğitim",
                "Sürekli iyileştirme programları"
              ].map((item, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-blue-100">{item}</span>
                </MotionDiv>
              ))}
            </div>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                onClick={() => navigateTo('/services/kurumsal-web-sitesi')}
                className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl group transition-all duration-300 hover:scale-105"
              >
                Hizmetlerimizi Keşfedin
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MotionDiv>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Card className="overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBzZXJ2aWNlcyUyMGJ1c2luZXNzJTIwY29uc3VsdGluZ3xlbnwxfHx8fDE3NTYwNDEyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Corporate consulting"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Card>
              </MotionDiv>
              
              <MotionDiv
                initial={{ opacity: 0, y: -30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="mt-8"
              >
                <Card className="overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmd8ZW58MXx8fHwxNzU1OTQ4MDg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Business strategy"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Card>
              </MotionDiv>
            </div>

            {/* Floating badge */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl shadow-xl"
            >
              <div className="text-lg font-bold">99.8%</div>
              <div className="text-xs text-blue-100">Başarı Oranı</div>
            </MotionDiv>
          </MotionDiv>
        </div>

        {/* Achievements */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-3xl font-bold text-center text-white mb-12">Başarılarımız</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <MotionDiv
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <achievement.icon className="w-8 h-8 text-white" />
                </MotionDiv>
                <div className="text-4xl font-bold text-white mb-2">{achievement.metric}</div>
                <div className="text-lg font-semibold text-blue-200 mb-1">{achievement.label}</div>
                <div className="text-sm text-blue-300">{achievement.description}</div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}