// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Users, Zap, Shield, Globe, BarChart3, Smartphone, Headphones, Award, CheckCircle, Database, Settings, FileText, Cloud, Lock, Cpu } from "lucide-react";

// TYPE OVERRIDE - Fix EnterprisePortalPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { navigateTo } from "../../router/Router";
import React from "react";

const features = [
  {
    icon: Cloud,
    title: "Bulut Altyapısı",
    description: "Ölçeklenebilir bulut sunucu mimarisi ve yüksek erişilebilirlik"
  },
  {
    icon: Database,
    title: "Kurumsal Veritabanı",
    description: "Büyük veri işleme kapasitesi ve gelişmiş veri yönetimi"
  },
  {
    icon: Users,
    title: "Çoklu Kullanıcı Yönetimi",
    description: "Rol tabanlı erişim kontrolü ve kullanıcı hiyerarşisi"
  },
  {
    icon: Lock,
    title: "Kurumsal Güvenlik",
    description: "İki faktörlü kimlik doğrulama ve gelişmiş güvenlik protokolleri"
  },
  {
    icon: Cpu,
    title: "Yüksek Performans",
    description: "CDN entegrasyonu ve optimize edilmiş performans"
  },
  {
    icon: Settings,
    title: "Özel Geliştirmeler",
    description: "İhtiyaçlarınıza özel modül ve entegrasyon geliştirme"
  }
];

const includedFeatures = [
  "Sınırsız sayfa kapasitesi",
  "500 GB depolama alanı",
  "Kurumsal portal özellikleri",
  "Çoklu kullanıcı yönetimi",
  "Rol tabanlı erişim kontrolü",
  "Gelişmiş veritabanı yönetimi",
  "API gateway ve entegrasyonlar",
  "İki faktörlü kimlik doğrulama",
  "Kurumsal SSO entegrasyonu",
  "Bulut yedekleme sistemi",
  "CDN ve performans optimizasyonu",
  "Özel domain ve alt domain'ler",
  "7/24 öncelikli destek",
  "Özel geliştirme desteği",
  "SLA garantisi",
  "Güvenlik denetimleri"
];

const testimonials = [
  {
    name: "Murat Başkan",
    business: "Holding CEO",
    rating: 5,
    comment: "Grup şirketlerimizi tek çatı altında yönetmek hiç bu kadar kolay olmamıştı. Mükemmel çözüm.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
  },
  {
    name: "Fatma Öz",
    business: "Kamu Kurumu",
    rating: 5,
    comment: "Güvenlik ve performans açısından hiçbir sıkıntı yaşamıyoruz. Tam ihtiyacımız olan çözüm.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
  },
  {
    name: "Emre Yılmaz",
    business: "Teknoloji Şirketi",
    rating: 5,
    comment: "Ölçeklenebilirlik ve özelleştirme imkanları sayesinde büyümeye ayak uydurabiliyoruz.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
  }
];

const faqs = [
  {
    question: "Kurumsal portal ne kadar büyük verileri işleyebilir?",
    answer: "500 GB depolama ve sınırsız işlem kapasitesi ile büyük kurumların ihtiyaçlarını karşılar. Daha büyük kapasiteler için özel çözümler sunabiliriz."
  },
  {
    question: "Mevcut sistemlerimizle entegrasyon mümkün mü?",
    answer: "Evet, API gateway üzerinden ERP, CRM, HR sistemleri ve diğer kurumsal uygulamalarla entegrasyon sağlanabilir."
  },
  {
    question: "Güvenlik sertifikaları neler?",
    answer: "ISO 27001, SOC 2 uyumlu altyapı, penetrasyon testleri ve düzenli güvenlik denetimleri dahildir."
  },
  {
    question: "SLA garantisi nedir?",
    answer: "%99.9 uptime garantisi, 24/7 monitöring ve hızlı müdahale süresi SLA kapsamındadır."
  }
];

const enterpriseStats = [
  {
    number: "99.9%",
    label: "Uptime Garantisi",
    description: "Kesintisiz hizmet"
  },
  {
    number: "500GB",
    label: "Depolama Kapasitesi",
    description: "Büyük veri işleme"
  },
  {
    number: "24/7",
    label: "Öncelikli Destek",
    description: "Acil müdahale"
  },
  {
    number: "∞",
    label: "Sınırsız Kullanıcı",
    description: "Büyük organizasyonlar"
  }
];

export function EnterprisePortalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Dark Gradient Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#0365F4] via-[#0091BB] to-[#0365F4] pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <MotionDiv
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)"
            }}
          />
          
          <MotionDiv
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 border border-white/10 rounded-full"
          />
          <MotionDiv
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-white/5 rounded-full"
          />
        </div>

        <div className="container mx-auto px-6 py-32 relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <MotionDiv
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-8"
            >
              <Award className="w-4 h-4" />
              <span className="font-medium">Dijital Dönüşüm</span>
            </MotionDiv>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              Kurumsal Portal
              <br />Çözümleri
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Çalışanlarınız, müşterileriniz ve iş ortaklarınız için güçlü web portalları. 
              Kullanıcı yönetimi, dokümentasyon sistemi ve iş akışı entegrasyonları 
              ile verimliliği artırın.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
              <MotionDiv
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2"
              >
                <Button 
                  onClick={() => navigateTo('/support')}
                  className="bg-white text-[#0365F4] hover:bg-blue-50 px-8 py-4 text-lg font-medium"
                >
                  Portal Çözümlerini Keşfedin
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </MotionDiv>
              
              <div className="flex items-center space-x-2 text-blue-100">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Örnekleri İnceleyin</span>
              </div>
            </div>

            {/* Enterprise Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {enterpriseStats.map((stat, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="font-semibold text-blue-200 mb-1">{stat.label}</div>
                  <div className="text-sm text-blue-300">{stat.description}</div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-32">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kurumsal Düzeyde Özellikler</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Büyük organizasyonların ihtiyaç duyduğu güç, güvenlik ve esneklik
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
                  <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg mb-4">
                      <feature.icon className="w-6 h-6 text-[#0365F4]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          {/* Included Features */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-32"
          >
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kurumsal Portal Özellikleri</h2>
                <p className="text-xl text-gray-600 leading-relaxed">Büyük organizasyonlar için tasarlanan kapsamlı özellik seti</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {includedFeatures.map((feature, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors"
                  >
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </MotionDiv>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Button 
                  onClick={() => navigateTo('/support')}
                  className="bg-[#0365F4] hover:bg-blue-700 text-white px-8 py-3"
                >
                  Detaylı Bilgi Al
                </Button>
              </div>
            </div>
          </MotionDiv>

          {/* Testimonials */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Büyük Kurumlar Bizim Yanımızda</h2>
              <p className="text-xl text-gray-600 leading-relaxed">Kurumsal portal çözümümüzle dijital dönüşümlerini tamamlayan organizasyonlar</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                >
                  <Card className="p-6 bg-white border border-gray-100 hover:shadow-xl transition-shadow">
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
                    
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-yellow-500" />
                      ))}
                    </div>
                    
                    <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          {/* FAQ Section */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular</h2>
              <p className="text-xl text-gray-600 leading-relaxed">Kurumsal portal çözümümüz ile ilgili merak edilenler</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.4 }}
                >
                  <Card className="p-6 bg-white border border-gray-100">
                    <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                    <p className="text-gray-600">{faq.answer}</p>
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
            className="text-center bg-gradient-to-r from-[#0365F4] to-[#0091BB] rounded-3xl p-12 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Kurumsal Dijital Dönüşümünüze Başlayın
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Büyük organizasyonunuzun ihtiyaçlarına özel çözüm geliştirelim. 
              Uzman ekibimizle ihtiyaç analizi yapalım.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                onClick={() => navigateTo('/support')}
                className="bg-white text-[#0365F4] hover:bg-blue-50 px-8 py-4 text-lg font-medium"
              >
                Ücretsiz Analiz Talep Et
              </Button>
              <Button 
                onClick={() => navigateTo('/support')}
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-[#0365F4] px-8 py-4 text-lg"
              >
                Demo Görüşmesi
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-blue-200">
              <span>🔒 Güvenli altyapı</span>
              <span>⚡ Yüksek performans</span>
              <span>📞 Öncelikli destek</span>
            </div>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
}