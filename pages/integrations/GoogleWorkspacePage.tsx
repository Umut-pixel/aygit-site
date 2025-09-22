import { motion } from "framer-motion";

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;
import { Check, ArrowRight, Star, Users, Zap, Shield, Globe, BarChart3, Smartphone, Headphones, Award, CheckCircle, Database, Settings, FileText, Mail, Calendar, Cloud } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { navigateTo } from "../../router/Router";

const googleServices = [
  {
    name: "Gmail",
    icon: Mail,
    description: "Kurumsal email sistemi entegrasyonu",
    features: ["Özel domain email", "Email yönlendirme", "Otomatik imza yönetimi", "Email şablonları"]
  },
  {
    name: "Google Calendar",
    icon: Calendar,
    description: "Randevu ve etkinlik yönetimi",
    features: ["Online randevu sistemi", "Etkinlik takvimine ekleme", "Otomatik hatırlatmalar", "Takım takvimi senkronizasyonu"]
  },
  {
    name: "Google Drive",
    icon: Cloud,
    description: "Dosya paylaşım ve yönetimi",
    features: ["Doküman paylaşımı", "Otomatik yedekleme", "Klasör yönetimi", "Erişim kontrolü"]
  },
  {
    name: "Google Analytics",
    icon: BarChart3,
    description: "Web sitesi analiz ve raporlama",
    features: ["Ziyaretçi analizi", "Davranış raporları", "Dönüşüm takibi", "Özel dashboard'lar"]
  }
];

const features = [
  {
    icon: Shield,
    title: "Güvenli Entegrasyon",
    description: "OAuth 2.0 protokolü ile güvenli API bağlantıları"
  },
  {
    icon: Zap,
    title: "Otomatik Senkronizasyon",
    description: "Veriler otomatik olarak Google servisleri ile senkronize edilir"
  },
  {
    icon: Users,
    title: "Ekip Kolaborasyonu",
    description: "Takım çalışması için Google Workspace araçları entegrasyonu"
  },
  {
    icon: Settings,
    title: "Özel Konfigürasyon",
    description: "İşletmenizin ihtiyaçlarına göre özelleştirilmiş ayarlar"
  }
];

const integrationBenefits = [
  "Tek oturum açma (SSO) desteği",
  "Kurumsal email yönetimi",
  "Otomatik randevu sistemi",
  "Doküman yönetimi entegrasyonu",
  "Takım takvimi senkronizasyonu",
  "Google Maps entegrasyonu",
  "YouTube video entegrasyonu",
  "Google Forms entegrasyonu",
  "Google Ads entegrasyonu",
  "Search Console raporları"
];

const useCases = [
  {
    title: "Randevu Sistemi",
    description: "Google Calendar ile entegre online randevu sistemi",
    icon: Calendar,
    example: "Müşterileriniz web sitenizden randevu alabilir, otomatik Google Calendar'a eklenir"
  },
  {
    title: "Doküman Paylaşımı",
    description: "Google Drive ile güvenli dosya paylaşımı",
    icon: FileText,
    example: "Müşterilerinizle özel dokümanları güvenli şekilde paylaşabilirsiniz"
  },
  {
    title: "Email Marketing",
    description: "Gmail ile profesyonel email kampanyaları",
    icon: Mail,
    example: "Web sitesi ziyaretçilerine otomatik email serisi gönderebilirsiniz"
  },
  {
    title: "Analitik Raporlama",
    description: "Google Analytics ile detaylı web analizi",
    icon: BarChart3,
    example: "Web sitenizin performansını detaylı raporlarla takip edebilirsiniz"
  }
];

export function GoogleWorkspacePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}
      <div className="h-32"></div>
      
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full mb-8 border border-red-500/20"
          >
            <Globe className="w-4 h-4" />
            <span className="font-medium">Google Workspace</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">Google Workspace</span>
            <br />Entegrasyonu
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Web sitenizi Google'ın güçlü iş uygulamaları ile entegre ederek 
            kurumsal süreçlerinizi dijitalleştirin ve verimliliği artırın.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Button 
                onClick={() => navigateTo('/support')}
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 text-lg"
              >
                Entegrasyon Başlat
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Ücretsiz kurulum desteği</span>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-sm text-gray-600">Google Sertifikalı Partner</span>
          </div>
        </motion.div>

        {/* Google Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Google Workspace Servisleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Web sitenizle entegre edebileceğiniz Google servisleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {googleServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Kullanım Senaryoları</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Google Workspace entegrasyonu ile neler yapabilirsiniz?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 bg-white border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h3>
                      <p className="text-gray-600 mb-3">{useCase.description}</p>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-sm text-gray-700 italic">"{useCase.example}"</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Entegrasyon Özellikleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Google Workspace entegrasyonunun teknik özellikleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mb-32"
        >
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Entegrasyon Avantajları</h2>
              <p className="text-xl text-gray-600 leading-relaxed">Google Workspace entegrasyonu ile kazanacağınız faydalar</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {integrationBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 + index * 0.05, duration: 0.4 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors"
                >
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button 
                onClick={() => navigateTo('/support')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
              >
                Google Workspace Entegrasyonu Başlat
              </Button>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-12 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Google Workspace ile Verimliliği Artırın
          </h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Web sitenizi Google'ın güçlü iş uygulamaları ile entegre ederek 
            kurumsal süreçlerinizi otomatikleştirin.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={() => navigateTo('/support')}
              className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 text-lg font-medium"
            >
              Ücretsiz Konsültasyon
            </Button>
            <Button 
              onClick={() => navigateTo('/pricing')}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg"
            >
              Fiyat Bilgisi
            </Button>
          </div>
          
          <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-red-100">
            <span>☁️ Bulut tabanlı</span>
            <span>🔐 Güvenli entegrasyon</span>
            <span>⚡ Hızlı kurulum</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}