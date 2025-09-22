// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";

// TYPE OVERRIDE - Fix BackupPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { HardDrive, Shield, Clock, RotateCcw, ArrowRight, CheckCircle, Database, Server, Phone } from "lucide-react";
import { useContactCallbackForm } from "../../components/ContactCallbackForm";
import React from "react";

const backupFeatures = [
  {
    icon: HardDrive,
    title: "Otomatik Yedekleme",
    description: "Günlük otomatik yedekleme ile verilerinizi güvende tutun",
    color: "text-blue-500"
  },
  {
    icon: RotateCcw,
    title: "Anında Geri Yükleme",
    description: "Tek tıkla verilerinizi istediğiniz tarihe geri yükleyin",
    color: "text-green-500"
  },
  {
    icon: Database,
    title: "Çoklu Konum",
    description: "Yedekleriniz farklı coğrafi konumlarda saklanır",
    color: "text-purple-500"
  },
  {
    icon: Shield,
    title: "Şifreli Saklama",
    description: "256-bit AES şifreleme ile maksimum güvenlik",
    color: "text-orange-500"
  }
];

const backupPlans = [
  {
    name: "Günlük Yedek",
    frequency: "Her gün",
    retention: "30 gün",
    storage: "10 GB",
    features: ["Otomatik yedekleme", "Email bildirim", "Temel geri yükleme"]
  },
  {
    name: "Saatlik Yedek",
    frequency: "Her saat",
    retention: "7 gün",
    storage: "50 GB",
    features: ["Saatlik yedekleme", "SMS + Email bildirim", "Hızlı geri yükleme", "Özel destek"],
    popular: true
  },
  {
    name: "Gerçek Zamanlı",
    frequency: "Anlık",
    retention: "90 gün",
    storage: "Sınırsız",
    features: ["Gerçek zamanlı yedekleme", "Tüm kanallardan bildirim", "Anında geri yükleme", "7/24 öncelikli destek", "Kurumsal SLA"]
  }
];

const backupStats = [
  { number: "99.99%", label: "Veri Güvenliği", icon: Shield },
  { number: "< 5dk", label: "Geri Yükleme", icon: RotateCcw },
  { number: "500TB+", label: "Korunan Veri", icon: Database },
  { number: "24/7", label: "İzleme", icon: Clock }
];

export function BackupPage() {
  const { openForm, CallbackFormComponent } = useContactCallbackForm();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                <HardDrive className="w-4 h-4" />
                <span className="font-medium">Otomatik Yedekleme Sistemi</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Verilerinizi
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Güvende Tutun</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Otomatik yedekleme sistemi ile verilerinizi koruyun, anında geri yükleyin. 
                Hiçbir veri kaybı yaşamadan güvenle çalışın.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  onClick={openForm}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Yedekleme Başlat</span>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                >
                  Demo İzle
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Otomatik kurulum</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>7 gün ücretsiz</span>
                </div>
              </div>
            </MotionDiv>
            
            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <HardDrive className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Yedekleme Aktif</h3>
                    <p className="text-blue-600">Son yedek: 2 dakika önce</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">Bugünkü Yedek</span>
                      <span className="text-green-600 font-semibold">✓ Tamamlandı</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-full"></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">2.4 GB • 14:30</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Toplam Yedek</span>
                      <span className="font-semibold text-gray-900">847 adet</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Toplam Boyut</span>
                      <span className="font-semibold text-gray-900">127.8 GB</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">En Eski Yedek</span>
                      <span className="font-semibold text-gray-900">30 gün önce</span>
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {backupStats.map((stat, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Gelişmiş Yedekleme Özellikleri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise seviyesinde yedekleme çözümleri ile verilerinizi maksimum güvenlik altına alın
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {backupFeatures.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Yedekleme Planları
            </h2>
            <p className="text-xl text-gray-600">
              İhtiyacınıza uygun yedekleme sıklığı ve saklama süresini seçin
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {backupPlans.map((plan, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                  plan.popular ? 'border-2 border-blue-500' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      En Popüler
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{plan.frequency}</div>
                  <p className="text-gray-600">yedekleme</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saklama Süresi</span>
                    <span className="font-semibold">{plan.retention}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Depolama</span>
                    <span className="font-semibold">{plan.storage}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={openForm}
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Bu Planı Seç
                </Button>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Verilerinizi Kaybetmeyin
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Otomatik yedekleme ile veri kayıplarının önüne geçin. 7 gün ücretsiz deneyin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={openForm}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>7 Gün Ücretsiz Başlat</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3"
              >
                Tüm Planları İncele
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center items-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm">256-bit Şifreleme</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">24/7 İzleme</span>
              </div>
              <div className="flex items-center space-x-2">
                <Server className="w-4 h-4" />
                <span className="text-sm">Çoklu Lokasyon</span>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      <CallbackFormComponent />
    </div>
  );
}