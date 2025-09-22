// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";
import { Check, ArrowRight, Smartphone, Users, Zap, Shield, Globe, BarChart3, Download, Headphones, Award, CheckCircle, Star, TrendingUp, Settings, Mail, Bell, Camera, CreditCard, MapPin, Share2, Heart } from "lucide-react";

// TYPE OVERRIDE - Fix MobileAppPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { navigateTo } from "../../router/Router";
import React from "react";

const mobileFeatures = [
  {
    icon: Smartphone,
    title: "Native iOS & Android", 
    description: "Native performans ile hızlı ve smooth kullanıcı deneyimi"
  },
  {
    icon: Bell,
    title: "Push Notifications",
    description: "Akıllı bildirimler ile müşteri geri dönüşünü artırın"
  },
  {
    icon: Camera,
    title: "AR Shopping",
    description: "Augmented Reality ile ürünleri sanal ortamda deneyin"
  },
  {
    icon: CreditCard,
    title: "Mobile Payments",
    description: "Apple Pay, Google Pay ve diğer mobil ödeme çözümleri"
  },
  {
    icon: MapPin,
    title: "Location-Based",
    description: "Konum bazlı öneriler ve mağaza yönlendirme"
  },
  {
    icon: Share2,
    title: "Social Sharing",
    description: "Kolay sosyal medya paylaşımı ve viral büyüme"
  }
];

const appTypes = [
  {
    type: "E-ticaret Uygulaması",
    description: "Online mağazanız için native mobil uygulama",
    features: ["Ürün Katalogu", "Sepet & Ödeme", "Kullanıcı Hesabı", "Push Notifications", "Arama & Filtreleme", "Wishlist"],
    price: "15.000",
    timeline: "6-8 Hafta",
    color: "from-blue-500 to-blue-600"
  },
  {
    type: "Marketplace Uygulaması", 
    description: "Çok satıcılı marketplace platformu",
    features: ["Satıcı Yönetimi", "Çoklu Ödeme", "Komisyon Sistemi", "Değerlendirme Sistemi", "Canlı Chat", "Advanced Analytics"],
    price: "25.000",
    timeline: "10-12 Hafta", 
    color: "from-purple-500 to-purple-600"
  },
  {
    type: "Hybrid PWA",
    description: "Progressive Web App çözümü",
    features: ["Cross-Platform", "Offline Çalışma", "App Store Distribution", "Fast Loading", "Push Notifications", "Native Features"],
    price: "8.000",
    timeline: "4-6 Hafta",
    color: "from-green-500 to-green-600"
  }
];

const developmentProcess = [
  {
    phase: "Discovery & Planning",
    duration: "1-2 Hafta",
    description: "İhtiyaç analizi, kullanıcı journey mapping ve teknik planlama",
    deliverables: ["Requirements Document", "User Flow Diagrams", "Technical Architecture", "Project Timeline"]
  },
  {
    phase: "UI/UX Design",
    duration: "2-3 Hafta", 
    description: "Kullanıcı deneyimi odaklı mobil arayüz tasarımı",
    deliverables: ["Wireframes", "High-fidelity Mockups", "Interactive Prototypes", "Design System"]
  },
  {
    phase: "Development",
    duration: "4-8 Hafta",
    description: "Native iOS ve Android uygulama geliştirme",
    deliverables: ["iOS App", "Android App", "Backend API", "Admin Panel"]
  },
  {
    phase: "Testing & Launch",
    duration: "1-2 Hafta",
    description: "QA testing, store submission ve launch desteği",
    deliverables: ["QA Report", "App Store Submission", "Launch Support", "Documentation"]
  }
];

const mobileStats = [
  {
    metric: "Mobile Commerce Büyüme",
    value: "+156%",
    description: "Mobil uygulama ile e-ticaret büyümesi",
    icon: TrendingUp,
    color: "text-blue-600 bg-blue-50"
  },
  {
    metric: "User Retention", 
    value: "+240%",
    description: "Web'e kıyasla uygulama kullanıcı retention",
    icon: Users,
    color: "text-green-600 bg-green-50"
  },
  {
    metric: "Conversion Rate",
    value: "+180%",
    description: "Mobil uygulamada dönüşüm oranı artışı",
    icon: BarChart3,
    color: "text-purple-600 bg-purple-50"
  },
  {
    metric: "App Store Rating",
    value: "4.8/5",
    description: "Ortalama müşteri memnuniyet puanı",
    icon: Star,
    color: "text-yellow-600 bg-yellow-50"
  }
];

const technologies = [
  {
    name: "React Native",
    description: "Cross-platform development",
    logo: "⚛️"
  },
  {
    name: "Flutter",
    description: "Google's UI toolkit",
    logo: "🔷"
  },
  {
    name: "Swift/Kotlin",
    description: "Native development",
    logo: "📱"
  },
  {
    name: "Firebase",
    description: "Backend & Analytics",
    logo: "🔥"
  },
  {
    name: "AWS/Azure",
    description: "Cloud infrastructure",
    logo: "☁️"
  },
  {
    name: "AI/ML",
    description: "Recommendation engine",
    logo: "🤖"
  }
];

const caseStudies = [
  {
    company: "FashionForward",
    industry: "Fashion Retail",
    challenge: "Mobil kullanıcı deneyimi iyileştirme",
    solution: "Native iOS/Android e-ticaret uygulaması",
    results: [
      "+320% Mobil conversion rate",
      "+180% User session duration", 
      "+250% Push notification CTR",
      "4.9/5 App Store rating"
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
  },
  {
    company: "TechMart",
    industry: "Electronics", 
    challenge: "Karmaşık ürün kataloğunu mobilde basitleştirme",
    solution: "AR özellikli marketplace uygulaması",
    results: [
      "+280% Product page engagement",
      "+150% Average order value",
      "+200% Customer satisfaction",
      "1M+ App downloads"
    ],
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
  }
];

const testimonials = [
  {
    name: "Selin Kaya",
    business: "FashionForward",
    role: "CEO",
    rating: 5,
    comment: "Mobil uygulamamız sayesinde müşteri deneyimi tam anlamıyla dönüştü. Conversion oranlarımız %300 arttı!",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
    stats: { conversion: "+320% Conversion", rating: "4.9/5 Rating", downloads: "500K+ Download" }
  },
  {
    name: "Burak Özkan",
    business: "TechMart",
    role: "CTO",
    rating: 5,
    comment: "AR özellikli uygulamamız müşterilere benzersiz bir shopping deneyimi sunuyor. Teknik ekip çok profesyonel.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    stats: { engagement: "+280% Engagement", aov: "+150% AOV", downloads: "1M+ Downloads" }
  }
];

export function MobileAppPage() {
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
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 px-4 py-2 rounded-full mb-8 border border-blue-500/20"
          >
            <Smartphone className="w-4 h-4" />
            <span className="font-medium">Mobil Uygulama Geliştirme</span>
          </MotionDiv>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Native
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Mobil</span>
            <br />Uygulamanız
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            iOS ve Android için native mobil uygulamalarla müşterilerinize üstün deneyim sunun. 
            Push notifications, offline çalışma ve modern özelliklerle satışlarınızı artırın.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Button 
                onClick={() => navigateTo('/support')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                Uygulama Geliştir
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </MotionDiv>
            
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Ücretsiz prototip görüşmesi</span>
            </div>
          </div>

          {/* Mobile Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {mobileStats.map((stat, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-700 mb-1">{stat.metric}</div>
                <div className="text-xs text-gray-500">{stat.description}</div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* App Types */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Mobil Uygulama Türleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              İhtiyacınıza uygun mobil uygulama çözümü seçin
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {appTypes.map((type, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${type.color}`}></div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{type.type}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    
                    <div className="flex items-baseline justify-center space-x-2 mb-2">
                      <span className="text-3xl font-bold text-gray-900">₺{type.price}</span>
                      <span className="text-gray-500">başlangıç</span>
                    </div>
                    
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      {type.timeline}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {type.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                    Teklif Al
                  </Button>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Mobile Features */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Modern Mobil Özellikler</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Gelişmiş mobil özelliklerle kullanıcı deneyimini bir üst seviyeye taşıyın
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileFeatures.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-sm border-blue-200/50">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Technologies */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kullandığımız Teknolojiler</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              En güncel ve güvenilir teknolojilerle uygulamanızı geliştiriyoruz
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.4 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white">
                  <div className="text-4xl mb-3">{tech.logo}</div>
                  <h4 className="font-bold text-gray-900 mb-1">{tech.name}</h4>
                  <p className="text-xs text-gray-600">{tech.description}</p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Development Process */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Geliştirme Sürecimiz</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Profesyonel mobil uygulama geliştirme sürecimiz
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {developmentProcess.map((phase, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 text-center h-full bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto">
                    {index + 1}
                  </div>
                  
                  <Badge variant="secondary" className="mb-4 bg-blue-50 text-blue-700">
                    {phase.duration}
                  </Badge>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.phase}</h3>
                  <p className="text-gray-600 mb-6">{phase.description}</p>
                  
                  <div className="space-y-2">
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Case Studies */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Mobil Uygulama Başarı Hikayeleri</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Geliştirdiğimiz mobil uygulamalarla başarıya ulaşan markalar</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.3 + index * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <div className="relative h-48">
                    <img 
                      src={study.image} 
                      alt={study.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-500 text-white">
                        {study.industry}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
                    
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-700 mb-1">Challenge:</div>
                      <p className="text-sm text-gray-600">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-sm font-medium text-gray-700 mb-1">Solution:</div>
                      <p className="text-sm text-gray-600">{study.solution}</p>
                    </div>
                    
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-3">Results:</div>
                      <div className="grid grid-cols-1 gap-2">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4 text-green-500" />
                            <span className="text-sm font-medium text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
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
          transition={{ delay: 2.6, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Müşteri Deneyimleri</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Mobil uygulama projelerimizle başarıya ulaşan müşteriler</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.7 + index * 0.1, duration: 0.5 }}
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
          transition={{ delay: 3, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mobil Uygulamanızı Hayata Geçirin
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Modern mobil uygulama çözümlerimizle müşterilerinize üstün deneyim sunun ve satışlarınızı artırın.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={() => navigateTo('/support')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-medium"
            >
              Prototip Görüşmesi
            </Button>
            <Button 
              onClick={() => navigateTo('/pricing')}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
              Fiyat Bilgisi Al
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-blue-100">
            <span>📱 Native Apps</span>
            <span>🔔 Push Notifications</span>
            <span>📊 Analytics</span>
            <span>🏪 App Store Ready</span>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}