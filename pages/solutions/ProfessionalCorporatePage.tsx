// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";
import { Check, ArrowRight, Star, Users, Zap, Shield, Globe, BarChart3, Smartphone, Headphones, Award, CheckCircle, Database, Settings, FileText, Phone } from "lucide-react";

// TYPE OVERRIDE - Fix ProfessionalCorporatePage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { navigateTo } from "../../router/Router";
import { useContactCallbackForm } from "../../components/ContactCallbackForm";
import React from "react";

const features = [
  {
    icon: Globe,
    title: "Çok Dilli Destek",
    description: "Türkçe, İngilizce ve diğer dillerde web sitesi"
  },
  {
    icon: Database,
    title: "Gelişmiş CRM",
    description: "Müşteri yönetimi ve takip sistemi"
  },
  {
    icon: BarChart3,
    title: "Detaylı Analitik",
    description: "Google Analytics ve gelişmiş raporlama"
  },
  {
    icon: FileText,
    title: "Blog ve İçerik Sistemi",
    description: "SEO dostu blog ve haber yönetim sistemi"
  },
  {
    icon: Settings,
    title: "API Entegrasyonları",
    description: "Üçüncü parti sistem entegrasyonları"
  },
  {
    icon: Shield,
    title: "Gelişmiş Güvenlik",
    description: "WAF ve gelişmiş güvenlik özellikleri"
  }
];

const includedFeatures = [
  "50 sayfa kapasiteli",
  "25 GB depolama alanı",
  "Gelişmiş kurumsal web özellikleri",
  "Çok dilli site desteği",
  "Gelişmiş SEO araçları",
  "Blog ve haber sistemi",
  "Müşteri yönetim sistemi (CRM)",
  "Google Analytics entegrasyonu",
  "Sosyal medya yönetimi",
  "E-newsletter sistemi",
  "Gelişmiş form builder",
  "API entegrasyonları",
  "7/24 canlı destek",
  "Gelişmiş güvenlik özellikleri",
  "Özel alan adı yönetimi",
  "SSL sertifikası ve güvenlik"
];

const testimonials = [
  {
    name: "Dr. Ayşe Demir",
    business: "Özel Hastane",
    rating: 5,
    comment: "Hastane web sitemiz çok profesyonel görünüyor. Randevu sistemi mükemmel çalışıyor.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=64&h=64&fit=crop&crop=face"
  },
  {
    name: "İbrahim Kılıç",
    business: "İnşaat Firması",
    rating: 5,
    comment: "Projelerimizi harika şekilde sergileyebiliyoruz. Müşteri geri bildirimleri çok olumlu.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
  },
  {
    name: "Zeynep Özdemir",
    business: "Eğitim Kurumu",
    rating: 5,
    comment: "Öğrencilerimiz ve velilerimiz sitemizi çok beğeniyor. Online kayıt sistemi harika.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face"
  }
];

const faqs = [
  {
    question: "Profesyonel pakette kaç dil desteği var?",
    answer: "İstediğiniz kadar dil ekleyebilirsiniz. Türkçe, İngilizce varsayılan olarak gelir, diğer diller için ek ücret alınmaz."
  },
  {
    question: "CRM sistemi nasıl çalışıyor?",
    answer: "Müşteri bilgilerini toplama, takip etme ve yönetme imkanı sunar. Email pazarlama entegrasyonu da dahildir."
  },
  {
    question: "API entegrasyonları neler dahil?",
    answer: "Google servisleri, sosyal medya API'ları, muhasebe yazılımları ve özel API geliştirme desteği dahildir."
  },
  {
    question: "Blog sistemi SEO açısından nasıl?",
    answer: "Google'a uygun meta etiketler, otomatik sitemap oluşturma ve SEO analizleri dahildir."
  }
];

const comparisonFeatures = [
  { feature: "Sayfa Kapasitesi", basic: "10 sayfa", professional: "50 sayfa", highlight: true },
  { feature: "Depolama Alanı", basic: "5 GB", professional: "25 GB", highlight: true },
  { feature: "Dil Desteği", basic: "Sadece Türkçe", professional: "Çoklu dil", highlight: true },
  { feature: "Blog Sistemi", basic: "❌", professional: "✅", highlight: true },
  { feature: "CRM Sistemi", basic: "❌", professional: "✅", highlight: true },
  { feature: "API Entegrasyonları", basic: "❌", professional: "✅", highlight: true },
  { feature: "Destek", basic: "Email", professional: "7/24 Canlı", highlight: false },
  { feature: "Güvenlik", basic: "Temel SSL", professional: "Gelişmiş", highlight: false }
];

export function ProfessionalCorporatePage() {
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
            className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full mb-8 border border-blue-500/20"
          >
            <Award className="w-4 h-4" />
            <span className="font-medium">Büyüyen İşletmeler İçin</span>
          </MotionDiv>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Profesyonel
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Kurumsal Web</span>
            <br />Çözümü
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Gelişmiş özellikleri ve güçlü araçlarıyla büyüyen işletmenizin dijital ihtiyaçlarını karşılayan 
            kapsamlı kurumsal web sitesi çözümü.
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
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Ücretsiz danışmanlık</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>Gelişmiş Güvenlik</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span>500+ Memnun Müşteri</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-indigo-500" />
              <span>7/24 Canlı Destek</span>
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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Gelişmiş Özellikler</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Profesyonel kurumsal web siteniz için güçlü araçlar ve gelişmiş özellikler
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
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-blue-200/50">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Comparison Table */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Temel vs Profesyonel</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Hangi paketin sizin için uygun olduğunu görmek için karşılaştırın</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-200/50 overflow-hidden">
            <div className="grid grid-cols-3 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 text-center">
              <div className="font-semibold text-gray-900">Özellik</div>
              <div className="font-semibold text-gray-900">Temel Paket</div>
              <div className="font-semibold text-blue-600">Profesyonel Paket</div>
            </div>
            
            {comparisonFeatures.map((item, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
                className={`grid grid-cols-3 p-4 text-center border-b border-blue-100 ${
                  item.highlight ? 'bg-blue-50/50' : 'bg-white/50'
                }`}
              >
                <div className="text-gray-900 font-medium">{item.feature}</div>
                <div className="text-gray-600">{item.basic}</div>
                <div className="text-blue-600 font-semibold">{item.professional}</div>
              </MotionDiv>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button 
              onClick={openForm}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Profesyonel Paketi Öğren</span>
            </Button>
          </div>
        </MotionDiv>

        {/* Included Features */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-32"
        >
          <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 rounded-3xl p-8 border border-blue-200/50 backdrop-blur-sm">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Paket Detayları</h2>
              <p className="text-xl text-gray-600 leading-relaxed">Profesyonel Kurumsal Web paketi dahil olan tüm özellikler</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {includedFeatures.map((feature, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + index * 0.05, duration: 0.4 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/60 transition-colors"
                >
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </MotionDiv>
              ))}
            </div>
          </div>
        </MotionDiv>

        {/* Testimonials */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Müşterilerimiz Ne Diyor?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Profesyonel paketimizle büyüyen işletmelerden geri bildirimler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-blue-200/50 hover:shadow-xl transition-shadow">
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
          transition={{ delay: 2, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Profesyonel kurumsal web paketi ile ilgili merak edilenler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1 + index * 0.1, duration: 0.4 }}
              >
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-blue-200/50">
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
          transition={{ delay: 2.4, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            İşletmenizi Bir Sonraki Seviyeye Taşıyın
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Profesyonel kurumsal web çözümünüzle dijital dönüşümünüzü tamamlayın.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={openForm}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-medium flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Sizi Arayalım</span>
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
            <span>💬 7/24 canlı destek</span>
          </div>
        </MotionDiv>
      </div>
      
      <CallbackFormComponent />
    </div>
  );
}