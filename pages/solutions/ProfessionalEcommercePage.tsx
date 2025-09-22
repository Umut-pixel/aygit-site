// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";
import { Check, ArrowRight, Crown, Users, Zap, Shield, Globe, BarChart3, Smartphone, Headphones, Award, CheckCircle, Star, TrendingUp, Settings, Mail } from "lucide-react";

// TYPE OVERRIDE - Fix ProfessionalEcommercePage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { navigateTo } from "../../router/Router";
import React from "react";

const features = [
  {
    icon: BarChart3,
    title: "Gelişmiş Analitik", 
    description: "Detaylı satış raporları, müşteri analizi ve performans metrikleri"
  },
  {
    icon: Mail,
    title: "Email Pazarlama",
    description: "Otomatik email kampanyaları ve müşteri segmentasyonu"
  },
  {
    icon: Settings,
    title: "API Entegrasyonu",
    description: "Üçüncü parti servislerle entegrasyon ve özel geliştirmeler"
  },
  {
    icon: TrendingUp,
    title: "SEO Pro",
    description: "Gelişmiş SEO araçları ve Google Analytics entegrasyonu"
  },
  {
    icon: Smartphone,
    title: "Mobil Uygulama",
    description: "iOS ve Android için özel mobil uygulama"
  },
  {
    icon: Headphones,
    title: "Öncelikli Destek",
    description: "Canlı chat ile 7/24 öncelikli teknik destek"
  }
];

const comparisonFeatures = [
  {
    category: "Kapasite",
    basic: "100 ürün",
    professional: "1.000 ürün",
    highlight: true
  },
  {
    category: "Depolama",
    basic: "5 GB",
    professional: "25 GB",
    highlight: true
  },
  {
    category: "Mobil Uygulama",
    basic: "❌",
    professional: "✅ iOS + Android",
    highlight: true
  },
  {
    category: "Email Pazarlama",
    basic: "❌",
    professional: "✅ Gelişmiş kampanyalar",
    highlight: true
  },
  {
    category: "API Erişimi",
    basic: "❌",
    professional: "✅ Tam erişim",
    highlight: false
  },
  {
    category: "Destek",
    basic: "Email",
    professional: "Canlı Chat + Telefon",
    highlight: false
  }
];

const useCases = [
  {
    title: "Büyüyen E-ticaret Mağazaları",
    description: "Ürün çeşitliliği artan ve daha fazla müşteriye ulaşmak isteyen işletmeler için",
    icon: TrendingUp,
    benefits: ["1000'e kadar ürün", "Gelişmiş analitik", "Email pazarlama"]
  },
  {
    title: "Çoklu Kanal Satış",
    description: "Web sitesi, mobil uygulama ve sosyal medya üzerinden satış yapan işletmeler",
    icon: Globe,
    benefits: ["Mobil uygulama", "API entegrasyonları", "Sosyal medya bağlantıları"]
  },
  {
    title: "Marka Odaklı İşletmeler",
    description: "Güçlü marka kimliği oluşturmak ve müşteri sadakati kazanmak isteyenler",
    icon: Crown,
    benefits: ["Özel tasarım", "Marka özelleştirmeleri", "Profesyonel görünüm"]
  }
];

const testimonials = [
  {
    name: "Zeynep Akcan",
    business: "Fashion Boutique",
    rating: 5,
    comment: "Profesyonel paket sayesinde satışlarımız %300 arttı. Mobil uygulama müthiş!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    stats: { sales: "+300%", orders: "150+/gün" }
  },
  {
    name: "Can Demir",
    business: "Tech Store",
    rating: 5,
    comment: "API entegrasyonları sayesinde tüm süreçlerimizi otomatikleştirdik.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
    stats: { efficiency: "+200%", automation: "85%" }
  }
];

export function ProfessionalEcommercePage() {
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 px-4 py-2 rounded-full mb-8 border border-purple-500/20"
          >
            <Crown className="w-4 h-4" />
            <span className="font-medium">Büyüyen İşletmeler İçin</span>
          </MotionDiv>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Profesyonel
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> E-ticaret</span>
            <br />Çözümü
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            İşletmenizi bir üst seviyeye taşıyacak gelişmiş özellikler. 
            Profesyonel analitikler, mobil uygulama ve API entegrasyonları ile büyümenizi hızlandırın.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Button 
                onClick={() => navigateTo('/pricing')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
              >
                Hemen Başla - ₺599/ay
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </MotionDiv>
            
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>30 gün ücretsiz deneme</span>
            </div>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Crown className="w-4 h-4 text-purple-500" />
              <span>Profesyonel Seviye</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span>200+ Başarılı Proje</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-green-500" />
              <span>Öncelikli Destek</span>
            </div>
            <div className="flex items-center space-x-2">
              <Smartphone className="w-4 h-4 text-orange-500" />
              <span>Mobil Uygulama Dahil</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Temel vs Profesyonel Karşılaştırması</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Profesyonel paket ile neler kazanacağınızı görün
            </p>
          </div>

          <Card className="overflow-hidden bg-white/80 backdrop-blur-sm">
            <div className="grid grid-cols-3 bg-gradient-to-r from-gray-50 to-blue-50 p-4 border-b">
              <div className="font-semibold text-gray-700">Özellik</div>
              <div className="text-center font-semibold text-gray-700">Temel Paket</div>
              <div className="text-center font-semibold text-purple-700">Profesyonel Paket</div>
            </div>
            
            {comparisonFeatures.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`grid grid-cols-3 p-4 border-b border-gray-100 ${
                  feature.highlight ? 'bg-purple-50/50' : ''
                }`}
              >
                <div className="font-medium text-gray-900">{feature.category}</div>
                <div className="text-center text-gray-600">{feature.basic}</div>
                <div className="text-center font-medium text-purple-600">{feature.professional}</div>
              </MotionDiv>
            ))}
          </Card>
        </MotionDiv>

        {/* Advanced Features */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Profesyonel Özellikler</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              İşletmenizi büyütecek gelişmiş araçlar ve özellikler
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
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white/90 to-purple-50/50 backdrop-blur-sm border-purple-200/50">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Use Cases */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kimler İçin Uygun?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Profesyonel paketimizin ideal kullanım senaryoları
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-8 h-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-6">
                    <useCase.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
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

        {/* Success Stories */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Başarı Hikayeleri</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Profesyonel paketimizle büyüyen işletmeler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.business}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 italic mb-4">"{testimonial.comment}"</p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    {Object.entries(testimonial.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-purple-600">{value}</div>
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
          transition={{ delay: 2, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            İşletmenizi Profesyonel Seviyeye Taşıyın
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Gelişmiş özellikler ve profesyonel destek ile e-ticaret potansiyelinizi tam olarak ortaya çıkarın.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={() => navigateTo('/pricing')}
              className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-medium"
            >
              30 Gün Ücretsiz Dene
            </Button>
            <Button 
              onClick={() => navigateTo('/support')}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg"
            >
              Uzman Görüşmesi
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-purple-100">
            <span>✨ Mobil Uygulama</span>
            <span>📊 Gelişmiş Analitik</span>
            <span>🔗 API Entegrasyonu</span>
            <span>💬 Öncelikli Destek</span>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}