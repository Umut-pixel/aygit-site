// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Users, Zap, Shield, Globe, BarChart3, Smartphone, Headphones, Award, CheckCircle, Phone } from "lucide-react";

// TYPE OVERRIDE - Fix BasicCorporatePage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { navigateTo } from "../../router/Router";
import { useContactCallbackForm } from "../../components/ContactCallbackForm";
import React from "react";

const features = [
  {
    icon: Smartphone,
    title: "Mobil Uyumlu Tasarım",
    description: "Tüm cihazlarda mükemmel görünüm ve kullanılabilirlik"
  },
  {
    icon: Shield,
    title: "SSL Sertifikası", 
    description: "256-bit SSL şifrelemesi ile güvenli web sitesi"
  },
  {
    icon: Zap,
    title: "Hızlı Yükleme",
    description: "Optimize edilmiş kod yapısı ile saniyeler içinde yüklenme"
  },
  {
    icon: Globe,
    title: "SEO Dostu",
    description: "Google'da üst sıralarda yer almanız için optimize edilmiş"
  },
  {
    icon: BarChart3,
    title: "Temel Analitik",
    description: "Ziyaretçi ve etkileşim istatistiklerinizi takip edin"
  },
  {
    icon: Headphones,
    title: "Email Desteği",
    description: "7 gün 24 saat email ile teknik destek"
  }
];

const includedFeatures = [
  "10 sayfa kapasiteli",
  "5 GB depolama alanı", 
  "Temel kurumsal web özellikleri",
  "Mobil uyumlu responsive tasarım",
  "SSL sertifikası dahil",
  "Temel SEO araçları",
  "Email ile destek",
  "Sosyal medya entegrasyonu",
  "İletişim formu sistemi",
  "Google Maps entegrasyonu",
  "Temel içerik yönetimi",
  "Temel raporlama"
];

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    business: "Hukuk Bürosu",
    rating: 5,
    comment: "Küçük ofisim için mükemmel bir web sitesi. Kolay yönetim ve profesyonel görünüm.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
  },
  {
    name: "Elif Kaya",
    business: "Mimarlık Atölyesi",
    rating: 5,
    comment: "İhtiyacım olan tüm özellikleri içeriyor. Portföyümü harika şekilde sergiliyor.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
  },
  {
    name: "Mehmet Özkan",
    business: "Danışmanlık Firması",
    rating: 5,
    comment: "İlk kurumsal web sitesi deneyimim harika geçiyor. Destek ekibi çok yardımcı.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
  }
];

const faqs = [
  {
    question: "Temel kurumsal pakete ek sayfalar ekleyebilir miyim?",
    answer: "Evet, ihtiyaçlarınız doğrultusunda ek sayfalar eklenebilir ve özelleştirmeler yapılabilir."
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer: "Kurumsal web siteniz kayıt işleminden sonra 2-3 iş günü içinde hazır hale gelir."
  },
  {
    question: "İçerik yönetimi nasıl çalışır?",
    answer: "Kolay kullanımlı admin paneli ile metinlerinizi, resimlerinizi ve içeriklerinizi kolayca güncelleyebilirsiniz."
  },
  {
    question: "Domain ve hosting dahil mi?",
    answer: "Temel pakette hosting dahildir. Domain almak isterseniz size yardımcı oluruz veya mevcut domainizi yönlendirebilirsiniz."
  }
];

const advantages = [
  {
    title: "Hızlı Kurulum",
    description: "2-3 iş günü içinde hazır, profesyonel web sitesi",
    icon: Zap,
    stats: "< 3 gün"
  },
  {
    title: "Kolay Yönetim",
    description: "Teknik bilgi gerektirmeyen kullanıcı dostu admin paneli",
    icon: CheckCircle,
    stats: "Basit"
  },
  {
    title: "Güvenlik",
    description: "SSL sertifikası ve düzenli güvenlik güncellemeleri",
    icon: Shield,
    stats: "256-bit SSL"
  },
  {
    title: "Destek",
    description: "Email ile 7/24 teknik destek hizmeti",
    icon: Headphones,
    stats: "7/24"
  }
];

export function BasicCorporatePage() {
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
            <Star className="w-4 h-4" />
            <span className="font-medium">Küçük İşletmeler İçin İdeal</span>
          </MotionDiv>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Temel
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Kurumsal Web</span>
            <br />Sitesi
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Kurumsal kimliğinizi dijital dünyada yansıtmak için ihtiyacınız olan her şey. 
            Kolay yönetilebilir ve profesyonel web sitesi çözümü.
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
                <span>Sizi Arayalım</span>
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
              <Shield className="w-4 h-4 text-green-500" />
              <span>SSL Sertifikalı</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span>200+ Memnun Müşteri</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-purple-500" />
              <span>7/24 Destek</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Temel Pakette Neler Var?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Kurumsal web sitenizi oluşturmak için gereken tüm temel özellikleri içeren kapsamlı çözüm
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

        {/* Included Features */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-32"
        >
          <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Paket Detayları</h2>
              <p className="text-xl text-gray-600 leading-relaxed">Temel Kurumsal Web paketi dahil olan tüm özellikler</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {includedFeatures.map((feature, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/80 transition-colors"
                >
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </MotionDiv>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button 
                onClick={openForm}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 flex items-center space-x-2 mx-auto"
              >
                <Phone className="w-4 h-4" />
                <span>Detayları Konuşalım</span>
              </Button>
            </div>
          </div>
        </MotionDiv>

        {/* Advantages Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Neden Temel Kurumsal?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Küçük işletmeler için özel tasarlanmış avantajlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
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

        {/* Testimonials */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Müşterilerimiz Ne Diyor?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Temel paketimizle dijital kimliklerini güçlendiren işletmelerden geri bildirimler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-blue-200/50 hover:shadow-xl transition-shadow h-full">
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
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Temel kurumsal web paketi ile ilgili merak edilenler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 + index * 0.1, duration: 0.4 }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-blue-200/50 h-full">
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
          transition={{ delay: 2.2, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kurumsal Dijital Kimliğinizi Bugün Oluşturun
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Uzman ekibimizle görüşerek size özel çözümümüzü keşfedin.
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
              onClick={() => navigateTo('/support')}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
              Demo İsteyin
            </Button>
          </div>
          
          <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-blue-100">
            <span>✨ Ücretsiz danışmanlık</span>
            <span>🚀 Hızlı kurulum</span>
            <span>💬 7/24 destek</span>
          </div>
        </MotionDiv>
      </div>
      
      <CallbackFormComponent />
    </div>
  );
}