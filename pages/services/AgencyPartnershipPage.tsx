// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion, useInView } from "../../components/FramerMotionSafe";

// TYPE OVERRIDE - Fix AgencyPartnershipPage motion.div issues
const MotionDiv = motion.div as any;
import { useRef } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { 
  CheckCircle, 
  ArrowRight,
  Users,
  DollarSign,
  Briefcase,
  Award,
  TrendingUp,
  Settings,
  Shield,
  Zap,
  Star,
  Building,
  Heart,
  Target,
  BarChart3,
  Globe,
  Headphones,
  Phone
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { useContactCallbackForm } from "../../components/ContactCallbackForm";
import React from "react";

const partnershipBenefits = [
  {
    icon: DollarSign,
    title: "%30'a Varan Gelir Paylaşımı",
    description: "Her başarılı projeden sürekli gelir elde edin",
    details: ["Aylık düzenli ödemeler", "Şeffaf gelir raporları", "Performans bonusları"]
  },
  {
    icon: Settings,
    title: "Ajansa Özel Yönetim Paneli",
    description: "Tüm müşterilerinizi tek panelden yönetin",
    details: ["Çoklu müşteri yönetimi", "Toplu işlem yapabilme", "Detaylı raporlama"]
  },
  {
    icon: Briefcase,
    title: "Müşteri Bazlı Tema & İçerik Düzenleme",
    description: "Her müşteri için özel özelleştirmeler yapın",
    details: ["Sınırsız özelleştirme", "Marka kimliği uygulaması", "İçerik yönetimi"]
  },
  {
    icon: Globe,
    title: "Alan Adı & Hosting Kontrolü",
    description: "Teknik altyapıyı tamamen kontrol edin",
    details: ["Domain yönetimi", "Hosting ayarları", "SSL sertifika yönetimi"]
  },
  {
    icon: TrendingUp,
    title: "Otomatik Faturalama",
    description: "Müşteri ödemelerini otomatik olarak takip edin",
    details: ["Aylık otomatik faturalar", "Ödeme takibi", "Gecikme bildirimleri"]
  },
  {
    icon: Headphones,
    title: "Öncelikli Teknik Destek",
    description: "7/24 partner desteği ve eğitim imkanı",
    details: ["Öncelikli destek hattı", "Ücretsiz eğitimler", "Partner webinarları"]
  }
];

const partnershipTiers = [
  {
    name: "Başlangıç Partner",
    minProjects: "5-20",
    commission: "20%",
    features: [
      "Temel partner paneli",
      "Email destek",
      "Standart temalar",
      "Aylık ödemeler",
      "Temel raporlama"
    ],
    requirements: [
      "En az 5 müşteri portfolyosu",
      "Web tasarım deneyimi",
      "Müşteri hizmetleri"
    ],
    color: "blue"
  },
  {
    name: "Profesyonel Partner",
    minProjects: "21-50",
    commission: "25%",
    features: [
      "Gelişmiş partner paneli",
      "Öncelikli email + chat destek",
      "Premium temalar",
      "2 haftada bir ödeme",
      "Detaylı raporlama",
      "Özel marka uygulaması"
    ],
    requirements: [
      "En az 20 müşteri portfolyosu",
      "Profesyonel referanslar",
      "Dijital pazarlama bilgisi"
    ],
    color: "indigo",
    popular: true
  },
  {
    name: "Kurumsal Partner",
    minProjects: "50+",
    commission: "30%",
    features: [
      "Tam kontrol paneli",
      "7/24 telefon + chat destek",
      "Özel tema geliştirme",
      "Haftalık ödemeler",
      "Gerçek zamanlı raporlama",
      "White-label çözümler",
      "API erişimi"
    ],
    requirements: [
      "En az 50 müşteri portfolyosu",
      "Yazılım geliştirme ekibi",
      "Kurumsal referanslar"
    ],
    color: "blue"
  }
];

const successStories = [
  {
    name: "Digital Pro Ajans",
    location: "İstanbul",
    partnerSince: "2023",
    monthlyRevenue: "₺45,000",
    projectCount: 78,
    growth: "+320%",
    testimonial: "Aygıt Technologies ile ortaklığımız sayesinde müşteri portföyümüz ve aylık gelirimiz 3 katına çıktı.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Creative Design Studio",
    location: "Ankara",
    partnerSince: "2022",
    monthlyRevenue: "₺32,000",
    projectCount: 64,
    growth: "+280%",
    testimonial: "Partner paneli sayesinde müşterilerimizi çok daha etkili yönetebiliyoruz. Pasif gelir akışımız sürekli artıyor.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Web Solutions Group",
    location: "İzmir",
    partnerSince: "2023",
    monthlyRevenue: "₺28,000",
    projectCount: 45,
    growth: "+250%",
    testimonial: "Gelir paylaşımı modeliyle müşterilerimizden sürekli gelir elde ediyoruz. Bu harika bir iş modeli!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Başvuru Yapın",
    description: "Online form ile partner başvurunuzu gönderin",
    icon: Briefcase
  },
  {
    step: 2,
    title: "Değerlendirme",
    description: "Portföyünüz ve deneyiminiz değerlendirilir",
    icon: Target
  },
  {
    step: 3,
    title: "Onay & Eğitim",
    description: "Onay sonrası platformu kullanım eğitimi alın",
    icon: Award
  },
  {
    step: 4,
    title: "Kazanmaya Başlayın",
    description: "İlk müşterinizle birlikte gelir elde etmeye başlayın",
    icon: TrendingUp
  }
];

export function AgencyPartnershipPage() {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const tiersRef = useRef(null);
  const successRef = useRef(null);
  const processRef = useRef(null);
  
  const heroInView = useInView(heroRef);
  const benefitsInView = useInView(benefitsRef);
  const tiersInView = useInView(tiersRef);
  const successInView = useInView(successRef);
  const processInView = useInView(processRef);

  const { openForm, CallbackFormComponent } = useContactCallbackForm();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Header Spacer */}
        <div className="h-32"></div>

        {/* Hero Section */}
        <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <MotionDiv
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30">
                  <Heart className="w-4 h-4 mr-2" />
                  Partner Programı
                </Badge>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Ajanslar için
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
                    {" "}Partnerlik
                  </span>
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Müşterilerinize profesyonel web çözümleri sunarken %30'a varan 
                  gelir paylaşımı ile sürekli kazanç elde edin. Markanıza özel panel, 
                  full kontrol ve öncelikli destek.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button 
                    size="lg" 
                    onClick={openForm}
                    className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 flex items-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Partner Ol</span>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
                  >
                    Detaylı Bilgi Al
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">₺35K</div>
                    <div className="text-sm text-blue-200">Ortalama Aylık Gelir</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">%30</div>
                    <div className="text-sm text-blue-200">Maksimum Komisyon</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">200+</div>
                    <div className="text-sm text-blue-200">Aktif Partner</div>
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, x: 50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-500/20 rounded-xl p-4 text-center">
                      <DollarSign className="w-8 h-8 text-blue-200 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">%30</div>
                      <div className="text-sm text-blue-200">Komisyon</div>
                    </div>
                    <div className="bg-indigo-500/20 rounded-xl p-4 text-center">
                      <Users className="w-8 h-8 text-indigo-200 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-white">∞</div>
                      <div className="text-sm text-indigo-200">Müşteri</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-xl p-4">
                    <h3 className="text-white font-bold mb-2">Partner Dashboard</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Bu Ay Gelir:</span>
                        <span className="text-blue-200 font-medium">₺28,450</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Aktif Projeler:</span>
                        <span className="text-indigo-200 font-medium">47</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Yeni Müşteriler:</span>
                        <span className="text-white font-medium">12</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">Sürekli Büyüme</span>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section ref={benefitsRef} className="py-20 bg-gradient-to-br from-blue-50/50 to-white">
          <div className="container mx-auto px-6">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
                Partner Avantajları
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Partnerlere Özel
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {" "}Avantajlar
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Müşterilerinize en iyi hizmeti sunarken siz de maksimum gelir elde edin. 
                Teknik altyapıdan pazarlama desteğine kadar her şey dahil.
              </p>
            </MotionDiv>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnershipBenefits.map((benefit, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group border-blue-200/50 bg-gradient-to-br from-white/90 to-blue-50/30 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <MotionDiv
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg"
                      >
                        <benefit.icon className="w-8 h-8 text-white" />
                      </MotionDiv>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
                      
                      <ul className="space-y-2">
                        {benefit.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section ref={tiersRef} className="py-20 bg-gradient-to-br from-blue-50/30 to-indigo-50/20">
          <div className="container mx-auto px-6">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={tiersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
                Partner Seviyeleri
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Size Uygun
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {" "}Partner Seviyesi
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deneyiminize ve müşteri portföyünüze göre farklı partner seviyeleri. 
                Büyüdükçe daha fazla avantaj ve komisyon.
              </p>
            </MotionDiv>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {partnershipTiers.map((tier, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={tiersInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative ${tier.popular ? 'scale-105' : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2">
                        En Popüler
                      </Badge>
                    </div>
                  )}
                  
                  <Card className={`h-full ${tier.popular ? 'border-blue-200 shadow-xl' : 'border-gray-200'} bg-white/80 backdrop-blur-sm`}>
                    <CardContent className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                        <div className="flex items-center justify-center mb-4">
                          <span className="text-4xl font-bold text-blue-600">{tier.commission}</span>
                          <span className="text-gray-600 ml-2">komisyon</span>
                        </div>
                        <p className="text-gray-600">{tier.minProjects} proje seviyesi</p>
                      </div>

                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-900 mb-4">Özellikler:</h4>
                        <ul className="space-y-3">
                          {tier.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-900 mb-4">Gereksinimler:</h4>
                        <ul className="space-y-2">
                          {tier.requirements.map((requirement, reqIndex) => (
                            <li key={reqIndex} className="flex items-start space-x-3">
                              <Shield className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 text-sm">{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        onClick={openForm}
                        className={`w-full ${
                          tier.popular 
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600' 
                            : 'bg-gray-900 hover:bg-gray-800'
                        }`}
                        size="lg"
                      >
                        Bu Seviye İçin Başvur
                      </Button>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section ref={successRef} className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={successInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
                Başarı Hikayeleri
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Partnerlerimizin
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {" "}Başarıları
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bizimle çalışan ajansların gerçek hikayelerini ve gelir artışlarını öğrenin.
              </p>
            </MotionDiv>

            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={successInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm border-blue-200/50">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <ImageWithFallback
                          src={story.avatar}
                          alt={story.name}
                          className="w-16 h-16 rounded-full mr-4"
                        />
                        <div>
                          <h3 className="font-bold text-gray-900">{story.name}</h3>
                          <p className="text-sm text-gray-600">{story.location}</p>
                          <p className="text-xs text-blue-600">Partner since {story.partnerSince}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center bg-blue-50 rounded-lg p-3">
                          <div className="text-2xl font-bold text-blue-600">{story.monthlyRevenue}</div>
                          <div className="text-xs text-gray-600">Aylık Gelir</div>
                        </div>
                        <div className="text-center bg-indigo-50 rounded-lg p-3">
                          <div className="text-2xl font-bold text-indigo-600">{story.projectCount}</div>
                          <div className="text-xs text-gray-600">Toplam Proje</div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mb-6">
                        <Badge className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          {story.growth} Büyüme
                        </Badge>
                      </div>
                      
                      <p className="text-gray-700 italic text-center leading-relaxed">
                        "{story.testimonial}"
                      </p>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Process */}
        <section ref={processRef} className="py-20 bg-gradient-to-br from-blue-50/50 to-indigo-50/30">
          <div className="container mx-auto px-6">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
                Nasıl Başlarım?
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Partnerlik
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  {" "}Süreci
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                4 basit adımda partner olun ve kazanmaya başlayın.
              </p>
            </MotionDiv>

            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center relative"
                >
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-full border-t-2 border-dashed border-blue-300 transform -translate-x-1/2" />
                  )}
                  
                  <MotionDiv
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                  >
                    <step.icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-sm shadow-lg border-2 border-blue-200">
                      {step.step}
                    </div>
                  </MotionDiv>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Application Form */}
        <section className="py-20 bg-gradient-to-br from-blue-50/30 to-indigo-50/20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <MotionDiv
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 bg-blue-50 text-blue-700 border-blue-200">
                  Partner Başvurusu
                </Badge>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Partner Olmaya
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    {" "}Başlayın
                  </span>
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Ajansınızın başvurusunu yapın ve %30'a varan komisyon ile 
                  kazanmaya başlayın. Başvuru süreciniz 2-3 iş günü içinde tamamlanır.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Hızlı onay süreci (2-3 gün)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Komisyon garantisi</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700">Ücretsiz eğitim ve destek</span>
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-blue-200/50 shadow-xl"
              >
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Partner Başvurusu</h3>
                  <p className="text-gray-600">Ajansınız için partnerlik başvurusu yapın</p>
                </div>

                <Button 
                  onClick={openForm}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white text-lg py-6 mb-6"
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Partner Başvurusu Yap
                </Button>

                <div className="text-center text-sm text-gray-500">
                  <p>Başvuru sonrası 2-3 iş günü içinde size dönüş yapılır</p>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>
      </div>
      
      <CallbackFormComponent />
    </>
  );
}