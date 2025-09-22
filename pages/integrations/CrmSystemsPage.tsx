import { motion } from "framer-motion";

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;
import { Check, ArrowRight, Star, Users, Zap, Shield, Globe, BarChart3, Smartphone, Headphones, Award, CheckCircle, Database, Settings, FileText } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { navigateTo } from "../../router/Router";
import React from "react";


const crmSystems = [
  {
    name: "Salesforce",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop",
    description: "Dünyanın lider CRM platformu ile tam entegrasyon",
    features: ["Müşteri verileri senkronizasyonu", "Otomatik lead transferi", "Satış fırsatları takibi"]
  },
  {
    name: "HubSpot",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop",
    description: "İnbound marketing ve satış süreçleri entegrasyonu",
    features: ["Marketing otomasyonu", "Lead scoring", "Email kampanya entegrasyonu"]
  },
  {
    name: "Microsoft Dynamics",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop",
    description: "Microsoft ekosistemi ile uyumlu CRM çözümü",
    features: ["Office 365 entegrasyonu", "Power BI raporlama", "Teams entegrasyonu"]
  },
  {
    name: "Pipedrive",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop",
    description: "Satış odaklı CRM sistemi entegrasyonu",
    features: ["Satış pipeline yönetimi", "Aktivite takibi", "Raporlama"]
  }
];

const features = [
  {
    icon: Database,
    title: "Veri Senkronizasyonu",
    description: "CRM sisteminizdeki müşteri verileri otomatik olarak web sitenizle senkronize edilir"
  },
  {
    icon: Users,
    title: "Lead Yönetimi",
    description: "Web sitenizdeki formlardan gelen potansiyel müşteriler otomatik CRM'e aktarılır"
  },
  {
    icon: BarChart3,
    title: "Satış Raporları",
    description: "CRM verilerinizi web sitenizde görsel raporlar halinde gösterebilirsiniz"
  },
  {
    icon: Settings,
    title: "Özel API Geliştirme",
    description: "Özel CRM sisteminiz için özelleştirilmiş API entegrasyonu geliştiriyoruz"
  }
];

const benefits = [
  "Müşteri verilerinde tek kaynak doğruluğu",
  "Manuel veri girişi ihtiyacının ortadan kalkması",
  "Satış süreçlerinde otomatikleşme",
  "Müşteri deneyiminde tutarlılık",
  "Raporlama ve analitikte bütünlük",
  "Ekip verimliliğinde artış"
];

const integrationSteps = [
  {
    step: "1",
    title: "İhtiyaç Analizi",
    description: "Mevcut CRM sisteminizi ve entegrasyon ihtiyaçlarınızı analiz ediyoruz"
  },
  {
    step: "2",  
    title: "API Bağlantısı",
    description: "CRM sisteminizin API'si ile güvenli bağlantı kuruyoruz"
  },
  {
    step: "3",
    title: "Veri Haritalaması",
    description: "CRM verilerinizi web sitesi alanları ile eşleştiriyoruz"
  },
  {
    step: "4",
    title: "Test ve Optimizasyon",
    description: "Entegrasyonu test edip performansını optimize ediyoruz"
  }
];

export function CrmSystemsPage() {
  return (
    <div className="min-h-screen bg-white">
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
            <Database className="w-4 h-4" />
            <span className="font-medium">CRM Entegrasyonları</span>
          </MotionDiv>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CRM Sistemleri</span>
            <br />Entegrasyonu
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Web sitenizi mevcut CRM sisteminizle entegre ederek müşteri yönetimi süreçlerinizi 
            otomatikleştirin ve verimliliği artırın.
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
                Entegrasyon Talep Et
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </MotionDiv>
            
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Ücretsiz analiz</span>
            </div>
          </div>
        </MotionDiv>

        {/* CRM Systems Grid */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Desteklenen CRM Sistemleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Popüler CRM platformları ile hazır entegrasyon çözümlerimiz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {crmSystems.map((crm, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100">
                  <div className="flex items-center mb-4">
                    <img 
                      src={crm.logo} 
                      alt={crm.name}
                      className="w-12 h-12 rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{crm.name}</h3>
                      <p className="text-gray-600">{crm.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {crm.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Features Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Entegrasyon Özellikleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              CRM entegrasyonu ile kazanacağınız güçlü özellikler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border border-gray-100">
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

        {/* Integration Process */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Entegrasyon Süreci</h2>
            <p className="text-xl text-gray-600 leading-relaxed">CRM entegrasyonunuz 4 basit adımda tamamlanır</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationSteps.map((step, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Benefits Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mb-32"
        >
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">CRM Entegrasyonunun Faydaları</h2>
              <p className="text-xl text-gray-600 leading-relaxed">İş süreçlerinizde yaşayacağınız iyileştirmeler</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 + index * 0.05, duration: 0.4 }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-colors"
                >
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </MotionDiv>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button 
                onClick={() => navigateTo('/support')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                CRM Entegrasyonu Talep Et
              </Button>
            </div>
          </div>
        </MotionDiv>

        {/* CTA Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            CRM Entegrasyonuna Bugün Başlayın
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Mevcut CRM sisteminizi web sitenizle entegre ederek iş süreçlerinizi otomatikleştirin.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={() => navigateTo('/support')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-medium"
            >
              Ücretsiz Analiz Talep Et
            </Button>
            <Button 
              onClick={() => navigateTo('/pricing')}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
              Fiyat Bilgisi Al
            </Button>
          </div>
          
          <div className="mt-8 flex justify-center items-center space-x-8 text-sm text-blue-100">
            <span>🔗 Hızlı entegrasyon</span>
            <span>🛡️ Güvenli veri transferi</span>
            <span>📞 Uzman destek</span>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}