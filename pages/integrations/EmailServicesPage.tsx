import { motion } from "framer-motion";

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  Mail,
  Send,
  Users,
  TrendingUp,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight,
  Shield,
  Target,
  Calendar,
  Workflow,
  Palette,
  MailOpen,
  MousePointer,
  Newspaper,
  Megaphone,
  Tag,
  Heart as HeartIcon,
  ShoppingCart,
  Monitor,
  GraduationCap,
  Receipt,
  MailCheck,
  Contact,
  Lock,
  ShieldCheck,
  Bot,
  Filter,
  Network,
  Repeat
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import React from "react";

const features = [
  {
    icon: Send,
    title: "Otomatik E-posta Gönderimi",
    description: "Web sitenizdeki işlemler için otomatik e-posta tetikleyicileri ve bildirim sistemi kurun."
  },
  {
    icon: Users,
    title: "E-posta Liste Yönetimi",
    description: "Müşteri listelerinizi segmentlere ayırın ve kişiselleştirilmiş e-posta kampanyaları oluşturun."
  },
  {
    icon: BarChart3,
    title: "E-posta Analytics",
    description: "Açılma oranları, tıklama oranları ve conversion metriklerini detaylı olarak takip edin."
  },
  {
    icon: Workflow,
    title: "E-posta Otomasyonu",
    description: "Drip campaigns, welcome serileri ve davranış tabanlı e-posta akışları oluşturun."
  },
  {
    icon: Palette,
    title: "Template Editörü",
    description: "Drag-drop editor ile profesyonel e-posta şablonları tasarlayın ve markanıza uyarlayın."
  },
  {
    icon: Shield,
    title: "Deliverability Optimizasyonu",
    description: "Yüksek teslimat oranları için SPF, DKIM ve DMARC konfigürasyonu yapın."
  }
];

const stats = [
  { label: "Açılma Oranı", value: "%89", icon: MailOpen },
  { label: "Tıklama Oranı", value: "%34", icon: MousePointer },
  { label: "Teslimat Oranı", value: "%98", icon: CheckCircle },
  { label: "ROI Artışı", value: "%156", icon: TrendingUp }
];

const emailServices = [
  {
    name: "Mailchimp",
    description: "En popüler e-posta pazarlama platformu",
    features: ["Audience segmentation", "Automation workflows", "A/B testing", "Landing pages"],
    color: "yellow",
    icon: Mail
  },
  {
    name: "SendGrid",
    description: "Transactional ve marketing e-posta servisi",
    features: ["API entegrasyonu", "Email validation", "Analytics dashboard", "Template engine"],
    color: "blue",
    icon: Send
  },
  {
    name: "Constant Contact",
    description: "Küçük işletmeler için e-posta pazarlama",
    features: ["Email campaigns", "Event marketing", "Social media integration", "Contact management"],
    color: "green",
    icon: Contact
  },
  {
    name: "Campaign Monitor",
    description: "Tasarım odaklı e-posta pazarlama",
    features: ["Visual journey designer", "Personalization", "Advanced analytics", "API access"],
    color: "purple",
    icon: BarChart3
  }
];

const integrationModules = [
  {
    title: "Transactional Emails",
    description: "İşlemsel e-posta gönderimi ve yönetimi",
    features: ["Order confirmations", "Password resets", "Account notifications", "Receipt emails", "Shipping updates"],
    icon: MailCheck,
    color: "blue"
  },
  {
    title: "Marketing Campaigns",
    description: "Pazarlama e-postası kampanya yönetimi",
    features: ["Newsletter campaigns", "Promotional emails", "Product announcements", "Seasonal campaigns", "Event invitations"],
    icon: Megaphone,
    color: "green"
  },
  {
    title: "Automation Workflows",
    description: "Otomatik e-posta akış sistemleri",
    features: ["Welcome series", "Drip campaigns", "Behavioral triggers", "Re-engagement flows", "Win-back campaigns"],
    icon: Workflow,
    color: "purple"
  },
  {
    title: "Analytics & Reporting",
    description: "E-posta performans analizi ve raporlama",
    features: ["Open rate tracking", "Click-through analysis", "Conversion metrics", "A/B test results", "ROI calculations"],
    icon: BarChart3,
    color: "orange"
  }
];

export function EmailServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <MotionDiv
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full mb-6 border border-blue-500/20"
              >
                <Mail className="w-4 h-4" />
                <span className="font-medium">E-posta Servisleri Entegrasyonu</span>
              </MotionDiv>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                E-posta Servisleri
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Entegrasyonu</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Web sitenizi güçlü e-posta pazarlama platformlarıyla entegre edin. 
                Otomatik e-posta kampanyaları ve müşteri iletişimi oluşturun.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  E-posta Entegrasyonu Başlat
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Demo Talep Et
                </Button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">%99.9 teslimat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">GDPR uyumlu</span>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
                <div className="bg-white rounded-xl p-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1566918621183-ff90d3e0553f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMG1hcmtldGluZyUyMGF1dG9tYXRpb258ZW58MXx8fHwxNzU2MzAxNzY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Email Marketing Automation"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Floating Stats */}
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <MailOpen className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">%89</div>
                    <div className="text-sm text-gray-500">Açılma Oranı</div>
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">%156</div>
                    <div className="text-sm text-gray-500">ROI Artışı</div>
                  </div>
                </div>
              </MotionDiv>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              E-posta Servisleri Entegrasyonu ile
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Güçlü Sonuçlar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              E-posta servisleri entegrasyonu kullanan firmaların elde ettiği ortalama performans artışı
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Kapsamlı E-posta
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Servis Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesyonel e-posta pazarlama ve otomasyon çözümleri
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Email Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Desteklenen E-posta
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Platformları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Popüler e-posta pazarlama platformları ile hazır entegrasyon çözümleri
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-8">
            {emailServices.map((service, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 group h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Modules Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              E-posta Servisi Entegrasyon
              <span className="text-cyan-300"> Modülleri</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              E-posta pazarlama stratejinizin tamamı için özelleştirilmiş entegrasyon çözümleri
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-8">
            {integrationModules.map((module, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                        <module.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2">{module.title}</h3>
                        <p className="text-blue-200 mb-4">{module.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {module.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-blue-100 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl text-white mb-6">
              E-posta Servisi Entegrasyonuna Bugün Başlayın
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Müşteri iletişimini güçlendirin, e-posta kampanyalarınızı otomatikleştirin ve 
              satış dönüşümlerinizi artırın. Uzmanlarımızla iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                Ücretsiz Danışmanlık
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                Demo İzle
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}