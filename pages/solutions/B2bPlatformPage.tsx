// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";
import { Check, ArrowRight, Building, Users, Zap, Shield, Globe, BarChart3, Smartphone, Headphones, Award, CheckCircle, Star, TrendingUp, Settings, Mail, FileText, CreditCard, Package, Truck, Calculator, Target, Phone } from "lucide-react";

// TYPE OVERRIDE - Fix B2bPlatformPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { navigateTo } from "../../router/Router";
import { useContactCallbackForm } from "../../components/ContactCallbackForm";
import React from "react";

const features = [
  {
    icon: Building,
    title: "Bayi Portali", 
    description: "Bayileriniz için özel portal ile sipariş yönetimi ve raporlama"
  },
  {
    icon: Calculator,
    title: "Dinamik Fiyatlandırma",
    description: "Bayi seviyesi, miktar ve bölge bazlı otomatik fiyat hesaplama"
  },
  {
    icon: CreditCard,
    title: "Kredi Limit Yönetimi",
    description: "Bayiler için kredi limiti belirleme ve takip sistemi"
  },
  {
    icon: FileText,
    title: "Otomatik Belge Yönetimi",
    description: "Fatura, irsaliye ve fiyat listeleri otomatik oluşturma"
  },
  {
    icon: Package,
    title: "Tedarik Zinciri Yönetimi",
    description: "Stok, sipariş ve tedarikçi süreç yönetimi"
  },
  {
    icon: Truck,
    title: "Lojistik Entegrasyonu",
    description: "Kargo ve lojistik firmaları ile otomatik entegrasyon"
  }
];

const b2bFeatures = [
  {
    title: "Hiyerarşik Bayi Sistemi",
    description: "Çok seviyeli bayi yapısı ile distribütör, bayi ve alt bayi yönetimi",
    icon: Target,
    benefits: [
      "Çok seviyeli komisyon yapısı",
      "Bayi kategorisi bazlı özel fiyatlar",
      "Bölgesel bayi yönetimi",
      "Performance bazlı bonus sistemi"
    ]
  },
  {
    title: "Gelişmiş Stok & Sipariş Yönetimi",
    description: "Real-time stok takibi, otomatik sipariş oluşturma ve tedarik zinciri optimizasyonu",
    icon: Package,
    benefits: [
      "Real-time stok senkronizasyonu",
      "Otomatik yeniden sipariş",
      "Minimum stok uyarıları",
      "Lot ve seri no takibi"
    ]
  },
  {
    title: "ERP & CRM Entegrasyonu",
    description: "Mevcut ERP sistemlerinizle seamless entegrasyon ve müşteri ilişkileri yönetimi",
    icon: Settings,
    benefits: [
      "SAP, Oracle, Microsoft entegrasyonu", 
      "İki yönlü veri senkronizasyonu",
      "Müşteri lifecycle yönetimi",
      "Automated workflow'lar"
    ]
  },
  {
    title: "İleri Seviye Raporlama",
    description: "Business intelligence destekli detaylı raporlar ve analytics dashboard",
    icon: BarChart3,
    benefits: [
      "Bayi bazlı performans raporları",
      "Satış trend analizi",
      "Karlılık analizi",
      "Custom dashboard'lar"
    ]
  }
];

const testimonials = [
  {
    name: "Ahmet Karaca",
    business: "Karaca Endüstri",
    role: "Genel Müdür",
    rating: 5,
    comment: "300+ bayimizi tek platformdan yönetiyoruz. Sipariş süremiz %70 azaldı, verimliliğimiz katlandı.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    stats: { dealers: "300+ Bayi", efficiency: "%70 Verimlilik", orders: "5K+/ay" }
  },
  {
    name: "Zeynep Aydın",
    business: "Aydın Otomotiv",
    role: "IT Direktörü",
    rating: 5,
    comment: "ERP entegrasyonu sayesinde tüm süreçlerimiz otomatik. Manuel işler ortadan kalktı.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    stats: { automation: "%95 Otomasyon", integration: "Real-time", growth: "+180% Büyüme" }
  }
];

const useCases = [
  {
    title: "Üretici & Distribütör Şirketleri",
    description: "Üreten ve distribütör ağı ile satış yapan şirketler için ideal çözüm",
    benefits: ["Bayi ağı yönetimi", "Fiyat politikası kontrolü", "Stok optimizasyonu"]
  },
  {
    title: "Toptan Ticaret",
    description: "Toptan satış yapan işletmeler için özel geliştirilmiş özellikler",
    benefits: ["Bulk sipariş yönetimi", "Quantity-based pricing", "Kargo optimizasyonu"]
  },
  {
    title: "Franchise Sistemleri", 
    description: "Franchise veren markalar için merkezi yönetim çözümü",
    benefits: ["Franchise yönetimi", "Standardizasyon", "Performance tracking"]
  }
];

const advantages = [
  {
    title: "Kolay Kurulum",
    description: "Hızlı setup ve mevcut sistemlerinizle uyumlu entegrasyon",
    icon: Zap,
    stats: "< 48 saat"
  },
  {
    title: "7/24 Destek",
    description: "Türkçe teknik destek ve özel hesap yöneticisi hizmeti",
    icon: Headphones,
    stats: "Kesintisiz"
  },
  {
    title: "Güvenlik",
    description: "SSL sertifikası, veri şifreleme ve güvenli ödeme sistemi",
    icon: Shield,
    stats: "256-bit SSL"
  },
  {
    title: "Performans",
    description: "Yüksek performans ve %99.9 uptime garantisi",
    icon: TrendingUp,
    stats: "%99.9 Uptime"
  }
];

export function B2bPlatformPage() {
  const { openForm, CallbackFormComponent } = useContactCallbackForm();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-600 px-4 py-2 rounded-full mb-8 border border-blue-500/20"
          >
            <Building className="w-4 h-4" />
            <span className="font-medium">B2B Çözümleri</span>
          </MotionDiv>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            B2B E-ticaret
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Platformu</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Şirketler arası ticareti dijitalleştiren gelişmiş B2B e-ticaret çözümü. 
            Bayi yönetimi, dinamik fiyatlandırma ve ERP entegrasyonu ile işlerinizi büyütün.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Button 
                onClick={openForm}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Demo İsteyin</span>
              </Button>
            </MotionDiv>
            
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              <span>Ücretsiz danışmanlık</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Building className="w-4 h-4 text-blue-500" />
              <span>B2B Uzmanı</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span>1000+ Bayi Ağı</span>
            </div>
            <div className="flex items-center space-x-2">
              <Settings className="w-4 h-4 text-blue-500" />
              <span>ERP Entegrasyonu</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-blue-500" />
              <span>Özel Geliştirme</span>
            </div>
          </div>
        </MotionDiv>

        {/* Features Grid */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">B2B Platform Özellikleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Şirketler arası ticaret için özel geliştirilmiş güçlü özellikler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-sm border-blue-200/50">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* B2B Solutions */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Gelişmiş B2B Çözümleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Karmaşık B2B süreçlerinizi basitleştiren akıllı çözümler
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {b2bFeatures.map((solution, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-8 h-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg flex-shrink-0">
                      <solution.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span className="text-sm text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Advantages Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Neden Aygıt B2B?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              B2B e-ticaret platformunuzda size sunduğumuz avantajlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 text-center h-full bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-sm border-blue-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg mb-4">
                    <advantage.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 mb-4">{advantage.description}</p>
                  <div className="text-2xl font-bold text-blue-600">{advantage.stats}</div>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Use Cases */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kimler İçin Uygun?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              B2B platformumuzun ideal kullanım alanları
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-8 text-center h-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                  <p className="text-gray-600 mb-6">{useCase.description}</p>
                  
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-700">{benefit}</span>
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
          transition={{ delay: 2, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">B2B Başarı Hikayeleri</h2>
            <p className="text-xl text-gray-600 leading-relaxed">B2B platformumuzla büyük kazanımlar elde eden şirketler</p>
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
                        <div className="text-lg font-bold text-blue-600">{value}</div>
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
          className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            B2B Dönüşümünüzü Başlatın
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            B2B uzmanlarımızla görüşerek işletmenize özel B2B e-ticaret çözümünüzü keşfedin.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={openForm}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-medium flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Ücretsiz Danışmanlık</span>
            </Button>
            <Button 
              onClick={() => navigateTo('/pricing')}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
              Demo Talep Et
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-blue-100">
            <span>🏢 Bayi Yönetimi</span>
            <span>💰 Dinamik Fiyatlar</span>
            <span>⚙️ ERP Entegrasyonu</span>
            <span>📊 Detaylı Raporlar</span>
          </div>
        </MotionDiv>
      </div>
      
      <CallbackFormComponent />
    </div>
  );
}