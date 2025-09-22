// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";
import { Check, ArrowRight, Crown, Users, Zap, Shield, Globe, BarChart3, Smartphone, Headphones, Award, CheckCircle, Star, TrendingUp, Settings, Mail, Database, Lock, Layers, GitBranch, Clock, Building, Target } from "lucide-react";

// TYPE OVERRIDE - Fix EnterpriseEcommercePage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { navigateTo } from "../../router/Router";
import React from "react";

const features = [
  {
    icon: Database,
    title: "Sınırsız Kapasite", 
    description: "Sınırsız ürün, kategori ve müşteri kapasitesi ile ölçeklenebilir altyapı"
  },
  {
    icon: Lock,
    title: "Kurumsal Güvenlik",
    description: "SOC 2, ISO 27001 uyumlu güvenlik, KVKK ve GDPR desteği"
  },
  {
    icon: Layers,
    title: "Mikro Servis Mimarisi",
    description: "Modüler yapı ile yüksek performans ve güvenilirlik"
  },
  {
    icon: GitBranch,
    title: "API Gateway",
    description: "RESTful API'ler ve GraphQL ile tam entegrasyon desteği"
  },
  {
    icon: Clock,
    title: "SLA Garantisi",
    description: "%99.9 uptime garantisi ve 24/7 proaktif izleme"
  },
  {
    icon: Building,
    title: "Özel Geliştirme",
    description: "İhtiyaçlarınıza özel modüller ve fonksiyonlar"
  }
];

const comparisonFeatures = [
  {
    category: "Kapasite",
    basic: "100 ürün",
    professional: "1.000 ürün", 
    enterprise: "Sınırsız",
    highlight: true
  },
  {
    category: "Depolama",
    basic: "5 GB",
    professional: "25 GB",
    enterprise: "1 TB+",
    highlight: true
  },
  {
    category: "Kullanıcı",
    basic: "1 Admin",
    professional: "5 Admin",
    enterprise: "Sınırsız",
    highlight: true
  },
  {
    category: "API Calls/Ay",
    basic: "1,000",
    professional: "10,000",
    enterprise: "Sınırsız",
    highlight: true
  },
  {
    category: "Özel Geliştirme",
    basic: "❌",
    professional: "❌",
    enterprise: "✅ Full Support",
    highlight: false
  },
  {
    category: "SLA Garantisi",
    basic: "❌",
    professional: "%99.5",
    enterprise: "%99.9",
    highlight: false
  },
  {
    category: "Destek",
    basic: "Email",
    professional: "Canlı Chat",
    enterprise: "Özel Hesap Yöneticisi",
    highlight: false
  }
];

const enterpriseFeatures = [
  {
    title: "Çoklu Mağaza Yönetimi",
    description: "Tek panelden birden fazla mağaza ve marka yönetimi",
    icon: Building,
    benefits: ["Merkezi yönetim", "Marka bazlı raporlama", "Çoklu dil desteği"]
  },
  {
    title: "Gelişmiş B2B Özellikleri",
    description: "Bayilik sistemi, toptan satış ve kurumsal müşteri yönetimi",
    icon: Users,
    benefits: ["Bayi portali", "Özel fiyat listeleri", "Kredi limit kontrolü"]
  },
  {
    title: "ERP Entegrasyonu",
    description: "SAP, Oracle, Microsoft Dynamics ile seamless entegrasyon",
    icon: GitBranch,
    benefits: ["Real-time senkronizasyon", "Otomatik veri akışı", "İki yönlü entegrasyon"]
  },
  {
    title: "Özel Raporlama",
    description: "Business Intelligence ve özel dashboard çözümleri",
    icon: BarChart3,
    benefits: ["Custom dashboard", "Drill-down raporlar", "Otomatik email raporları"]
  }
];

const testimonials = [
  {
    name: "Dr. Mehmet Özkan",
    business: "Özkan Holding",
    role: "CTO",
    rating: 5,
    comment: "Kurumsal altyapımızı tamamen dönüştürdü. 50+ mağazamızı tek platformdan yönetiyoruz.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    stats: { stores: "50+ Mağaza", performance: "+400% ROI", uptime: "%99.98 Uptime" }
  },
  {
    name: "Ayşe Demir",
    business: "TechCorp Global",
    role: "E-ticaret Direktörü", 
    rating: 5,
    comment: "Uluslararası operasyonlarımızı destekleyen tek platform. Mükemmel performans!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    stats: { countries: "15 Ülke", orders: "100K+/ay", growth: "+250% Büyüme" }
  }
];

const securityFeatures = [
  "SOC 2 Type II Sertifikası",
  "ISO 27001 Uyumluluk",
  "KVKV & GDPR Desteği",
  "PCI DSS Level 1 Sertifikası",
  "End-to-end Şifreleme",
  "Multi-factor Authentication",
  "IP Whitelist & Blacklist",
  "Advanced DDoS Protection",
  "Düzenli Penetrasyon Testleri",
  "24/7 Güvenlik Monitoring"
];

export function EnterpriseEcommercePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Spacer */}
      <div className="h-32"></div>
      
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <MotionDiv
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-600 px-4 py-2 rounded-full mb-8 border border-amber-500/20"
          >
            <Crown className="w-4 h-4" />
            <span className="font-medium">Kurumsal Çözümler</span>
          </MotionDiv>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Kurumsal
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"> E-ticaret</span>
            <br />Platformu
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Büyük ölçekli işletmeler için özel geliştirilmiş kurumsal e-ticaret çözümü. 
            Sınırsız kapasite, kurumsal güvenlik ve özel geliştirme desteği.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Button 
                onClick={() => navigateTo('/pricing')}
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg"
              >
                Teklif Alın - ₺1.299/ay
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </MotionDiv>
            
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Özel demo ve danışmanlık</span>
            </div>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Crown className="w-4 h-4 text-amber-500" />
              <span>Kurumsal Seviye</span>
            </div>
            <div className="flex items-center space-x-2">
              <Building className="w-4 h-4 text-blue-500" />
              <span>500+ Kurumsal Müşteri</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>%99.9 SLA Garantisi</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="w-4 h-4 text-purple-500" />
              <span>Özel Hesap Yöneticisi</span>
            </div>
          </div>
        </MotionDiv>

        {/* Comparison Table */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Paket Karşılaştırması</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Kurumsal paket ile neler kazanacağınızı görün
            </p>
          </div>

          <Card className="overflow-hidden bg-white/80 backdrop-blur-sm">
            <div className="grid grid-cols-4 bg-gradient-to-r from-gray-50 to-orange-50 p-4 border-b">
              <div className="font-semibold text-gray-700">Özellik</div>
              <div className="text-center font-semibold text-gray-700">Temel Paket</div>
              <div className="text-center font-semibold text-purple-700">Profesyonel Paket</div>
              <div className="text-center font-semibold text-amber-700">Kurumsal Paket</div>
            </div>
            
            {comparisonFeatures.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`grid grid-cols-4 p-4 border-b border-gray-100 ${
                  feature.highlight ? 'bg-amber-50/50' : ''
                }`}
              >
                <div className="font-medium text-gray-900">{feature.category}</div>
                <div className="text-center text-gray-600">{feature.basic}</div>
                <div className="text-center font-medium text-purple-600">{feature.professional}</div>
                <div className="text-center font-medium text-amber-600">{feature.enterprise}</div>
              </MotionDiv>
            ))}
          </Card>
        </MotionDiv>

        {/* Enterprise Features */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kurumsal Özellikler</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Büyük ölçekli operasyonlar için özel geliştirilmiş özellikler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white/90 to-amber-50/50 backdrop-blur-sm border-amber-200/50">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Enterprise Solutions */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kurumsal Çözümler</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              İşletmenizin özel ihtiyaçları için geliştirilmiş çözümler
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {enterpriseFeatures.map((solution, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-8 h-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg flex-shrink-0">
                      <solution.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Security Features */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mb-32"
        >
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 border border-amber-500/20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl mb-6">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kurumsal Güvenlik</h2>
              <p className="text-xl text-gray-600 leading-relaxed">En üst seviye güvenlik standartları ile verilerinizi koruyoruz</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {securityFeatures.map((feature, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 + index * 0.05, duration: 0.4 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-red-50 transition-colors"
                >
                  <Shield className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionDiv>

        {/* Success Stories */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kurumsal Başarı Hikayeleri</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Kurumsal paketimizle büyük dönüşümler yaşayan şirketler</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-8 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow h-full">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.business}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-6">"{testimonial.comment}"</p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                    {Object.entries(testimonial.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-amber-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* CTA Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-12 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kurumsal Dönüşümünüzü Başlatın
          </h2>
          <p className="text-xl text-amber-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Özel hesap yöneticinizle görüşerek işletmenize özel kurumsal e-ticaret çözümünüzü keşfedin.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={() => navigateTo('/support')}
              className="bg-white text-amber-600 hover:bg-amber-50 px-8 py-4 text-lg font-medium"
            >
              Özel Demo Talep Edin
            </Button>
            <Button 
              onClick={() => navigateTo('/pricing')}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 text-lg"
            >
              Teklif Alın
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-amber-100">
            <span>🏢 Sınırsız Kapasite</span>
            <span>🛡️ Kurumsal Güvenlik</span>
            <span>⚡ %99.9 SLA</span>
            <span>👨‍💼 Özel Hesap Yöneticisi</span>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}