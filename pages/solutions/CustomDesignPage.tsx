// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";
import { Check, ArrowRight, Palette, Users, Zap, Shield, Globe, BarChart3, Smartphone, Headphones, Award, CheckCircle, Star, TrendingUp, Settings, Mail, Brush, Layout, Eye, Layers, Figma, Monitor, Tablet, Phone } from "lucide-react";

// TYPE OVERRIDE - Fix CustomDesignPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { navigateTo } from "../../router/Router";
import { useContactCallbackForm } from "../../components/ContactCallbackForm";
import React from "react";

const designServices = [
  {
    icon: Brush,
    title: "Özel Tasarım Konsepti", 
    description: "Markanıza özgü unique tasarım dili ve görsel kimlik oluşturma"
  },
  {
    icon: Layout,
    title: "UX/UI Tasarımı",
    description: "Kullanıcı deneyimi odaklı arayüz tasarımı ve kullanılabilirlik optimizasyonu"
  },
  {
    icon: Eye,
    title: "Görsel Kimlik",
    description: "Logo, renk paleti, tipografi ve görsel standartların belirlenmesi"
  },
  {
    icon: Layers,
    title: "Responsive Tasarım",
    description: "Tüm cihazlarda mükemmel görünüm sağlayan uyarlanabilir tasarım"
  },
  {
    icon: Figma,
    title: "Prototipleme",
    description: "İnteraktif prototipler ile tasarımın canlı önizlemesi"
  },
  {
    icon: Monitor,
    title: "Frontend Geliştirme",
    description: "Tasarımın pixel-perfect kodlama ile hayata geçirilmesi"
  }
];

const designProcess = [
  {
    step: "01",
    title: "Keşif & Analiz",
    description: "Marka analizi, hedef kitle araştırması ve rekabet analizi",
    duration: "1-2 Hafta",
    deliverables: ["Brand Audit Report", "User Research", "Competitor Analysis"]
  },
  {
    step: "02", 
    title: "Konsept Geliştirme",
    description: "Yaratıcı konsept geliştirme ve görsel kimlik tasarımı",
    duration: "2-3 Hafta",
    deliverables: ["Concept Mockups", "Style Guide", "Color Palette"]
  },
  {
    step: "03",
    title: "Tasarım & Prototipleme", 
    description: "Detaylı tasarım çalışması ve interaktif prototip oluşturma",
    duration: "3-4 Hafta",
    deliverables: ["High-fidelity Designs", "Interactive Prototype", "Asset Library"]
  },
  {
    step: "04",
    title: "Geliştirme & Test",
    description: "Frontend geliştirme ve kullanılabilirlik testleri",
    duration: "4-6 Hafta", 
    deliverables: ["Responsive Code", "Cross-browser Testing", "Performance Optimization"]
  }
];

const portfolioItems = [
  {
    title: "Premium Teknoloji Platformu",
    category: "Technology & Innovation",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    description: "Teknoloji şirketi için geliştirilmiş premium kurumsal platform tasarımı",
    results: ["+300% User Engagement", "%45 Bounce Rate Azalması", "+180% Lead Generation"]
  },
  {
    title: "Kurumsal B2B Çözümü", 
    category: "Business & Corporate",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "Kurumsal şirket için B2B platform tasarımı ve kullanıcı deneyimi",
    results: ["+250% Platform Usage", "%60 User Satisfaction", "+400% Business Growth"]
  },
  {
    title: "Professional Services Portal",
    category: "Professional Services", 
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&h=400&fit=crop",
    description: "Profesyonel hizmet sağlayıcıları için modern web portal tasarımı",
    results: ["+200% Client Acquisition", "%35 Process Efficiency", "+150% Service Quality"]
  }
];

const testimonials = [
  {
    name: "Aylin Kaya",
    business: "TechInnovate Solutions",
    role: "Marka Direktörü",
    rating: 5,
    comment: "Tasarım ekibi şirketimizin vizyonunu mükemmel şekilde yakaladı. Kurumsal kimliğimiz tasarım değişikliği sonrası güçlendi.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    stats: { engagement: "+300% Engagement", design: "Premium Design", satisfaction: "%98 Memnuniyet" }
  },
  {
    name: "Murat Özdemir",
    business: "Corporate Solutions",
    role: "CEO",
    rating: 5,
    comment: "Kurumsal platformumuz için geliştirilen tasarım müşteri deneyimini tamamen dönüştürdü. Profesyonel yaklaşımları etkileyici.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    stats: { leads: "+250% Leads", growth: "%60 Growth", innovation: "+180% Innovation" }
  }
];

export function CustomDesignPage() {
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
            <Palette className="w-4 h-4" />
            <span className="font-medium">Özel Tasarım</span>
          </MotionDiv>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Markanıza Özel
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Tasarım</span>
            <br />Çözümleri
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Markanızın kimliğini yansıtan, kullanıcı deneyimini optimize eden ve başarıyı artıran 
            özel tasarım çözümleri ile rakiplerinizden öne geçin.
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
                <span>Tasarım Talebi</span>
              </Button>
            </MotionDiv>
            
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-blue-500" />
              <span>Ücretsiz konsültasyon</span>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Palette className="w-4 h-4 text-blue-500" />
              <span>Award-Winning Design</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span>200+ Başarılı Proje</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-blue-500" />
              <span>Certified Designers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4 text-blue-500" />
              <span>User-Centric Approach</span>
            </div>
          </div>
        </MotionDiv>

        {/* Design Services */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tasarım Hizmetlerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Markanızı dijital dünyada öne çıkaracak kapsamlı tasarım hizmetleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-sm border-blue-200/50">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Design Process */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Tasarım Sürecimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Projelerinizi adım adım profesyonel süreçlerle hayata geçiriyoruz
            </p>
          </div>

          <div className="space-y-8">
            {designProcess.map((step, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
              >
                <Card className="p-8 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow border-blue-200/50">
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <Badge variant="outline" className="text-blue-600 border-blue-600">
                          {step.duration}
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                      
                      <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                        {step.deliverables.map((item, itemIndex) => (
                          <Badge key={itemIndex} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Portfolio */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Başarılı Projelerimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Farklı sektörlerden markalar için gerçekleştirdiğimiz tasarım projeleri
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full bg-white/80 backdrop-blur-sm border-blue-200/50">
                  <div className="relative h-64">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-500 text-white">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="space-y-2">
                      {item.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-blue-500" />
                          <span className="text-sm font-medium text-gray-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Testimonials */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Müşteri Deneyimleri</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Tasarım projelerimizle başarıya ulaşan markalar</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-8 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow h-full border-blue-200/50">
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
            Markanızı Öne Çıkaracak Tasarım
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Uzman tasarım ekibimizle görüşerek markanıza özel tasarım çözümünüzü keşfedin.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={openForm}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-medium flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Ücretsiz Konsültasyon</span>
            </Button>
            <Button 
              onClick={() => navigateTo('/support')}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
              Portfolio İncele
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-blue-100">
            <span>🎨 Özel Tasarım</span>
            <span>👥 Expert Ekip</span>
            <span>⚡ Hızlı Teslimat</span>
            <span>🏆 Award Winner</span>
          </div>
        </MotionDiv>
      </div>
      
      <CallbackFormComponent />
    </div>
  );
}