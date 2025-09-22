import { motion } from "framer-motion";

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;
import { Check, ArrowRight, Package, Users, Zap, Shield, Globe, BarChart3, Smartphone, Headphones, Award, CheckCircle, Star, TrendingUp, Settings, Mail, RefreshCw, ShoppingCart, Truck, CreditCard, FileText, AlertCircle } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { navigateTo } from "../../router/Router";
import React from "react";

const integrationFeatures = [
  {
    icon: RefreshCw,
    title: "Otomatik Ürün Senkronizasyonu", 
    description: "Ürünleriniz, stoklar ve fiyatlar otomatik olarak Trendyol ile senkronize olur"
  },
  {
    icon: Package,
    title: "Stok Yönetimi",
    description: "Real-time stok takibi ile her iki platformda stok kontrolü"
  },
  {
    icon: ShoppingCart,
    title: "Sipariş Yönetimi",
    description: "Trendyol siparişleri otomatik olarak sisteminize aktarılır"
  },
  {
    icon: Truck,
    title: "Kargo Entegrasyonu",
    description: "Kargo süreçleri otomatik yönetilir ve takip numaraları paylaşılır"
  },
  {
    icon: BarChart3,
    title: "Satış Raporları",
    description: "Detaylı Trendyol satış raporları ve performans analizi"
  },
  {
    icon: CreditCard,
    title: "Ödeme Takibi",
    description: "Trendyol ödemelerini takip edin ve hesaplarınızı yönetin"
  }
];

const integrationProcess = [
  {
    step: "1",
    title: "API Bağlantısı",
    description: "Trendyol API'si ile güvenli bağlantı kuruyoruz",
    duration: "15 dk",
    tasks: ["API Key Setup", "Güvenlik Doğrulaması", "İlk Bağlantı Testi"]
  },
  {
    step: "2", 
    title: "Ürün Mapping",
    description: "Mevcut ürünlerinizi Trendyol kategorileri ile eşleştiriyoruz",
    duration: "30 dk",
    tasks: ["Kategori Eşleştirme", "Özellik Mapping", "Fiyat Stratejisi"]
  },
  {
    step: "3",
    title: "Senkronizasyon",
    description: "Ürün, stok ve fiyat bilgilerini senkronize ediyoruz",
    duration: "45 dk",
    tasks: ["Toplu Ürün Yükleme", "Stok Senkronizasyonu", "Fiyat Güncelleme"]
  },
  {
    step: "4",
    title: "Test & Aktivasyon",
    description: "Entegrasyonu test edip canlıya alıyoruz",
    duration: "30 dk", 
    tasks: ["Test Siparişi", "Stok Kontrolü", "Canlıya Alma"]
  }
];

const benefits = [
  {
    title: "Satış Artışı",
    value: "+285%",
    description: "Trendyol entegrasyonu ile ortalama satış artışı",
    icon: TrendingUp,
    color: "text-green-600 bg-green-50"
  },
  {
    title: "Zaman Tasarrufu", 
    value: "15 Saat/Hafta",
    description: "Manuel süreçlerin otomatikleşmesi ile tasarruf",
    icon: Zap,
    color: "text-blue-600 bg-blue-50"
  },
  {
    title: "Hata Oranı Düşüşü",
    value: "%95",
    description: "Manuel girdi hatalarının ortadan kalkması",
    icon: Shield,
    color: "text-purple-600 bg-purple-50"
  },
  {
    title: "Müşteri Memnuniyeti",
    value: "%98",
    description: "Hızlı teslimat ve doğru sipariş işleme",
    icon: Star,
    color: "text-yellow-600 bg-yellow-50"
  }
];

const technicalSpecs = [
  {
    title: "API Versiyonu",
    value: "REST API v2.1",
    description: "Trendyol'un en güncel API versiyonu ile bağlantı"
  },
  {
    title: "Senkronizasyon",
    value: "Real-time",
    description: "Anlık ürün, stok ve fiyat güncellemeleri"
  },
  {
    title: "Veri Güvenliği",
    value: "OAuth 2.0",
    description: "Güvenli kimlik doğrulama ve şifreleme"
  },
  {
    title: "Kurulum Süresi",
    value: "2-4 saat",
    description: "Hızlı kurulum ve test süreçleri"
  }
];

const successStories = [
  {
    company: "Moda Butik",
    category: "Fashion",
    results: {
      sales: "+400%",
      orders: "2.5K+/ay", 
      efficiency: "80% otomasyon"
    },
    quote: "Trendyol entegrasyonu sayesinde satışlarımız 4 katına çıktı. Artık siparişler otomatik işleniyor.",
    owner: "Ayşe Kaya - Moda Butik",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop"
  },
  {
    company: "Tech Store",
    category: "Electronics", 
    results: {
      sales: "+320%",
      orders: "1.8K+/ay",
      efficiency: "90% otomasyon"
    },
    quote: "Elektronik ürünlerimizin stok yönetimi artık çok kolay. Tüm platformlarda güncel stok bilgisi.",
    owner: "Mehmet Özkan - Tech Store",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop"
  }
];

const faqItems = [
  {
    question: "Trendyol entegrasyonu nasıl çalışır?",
    answer: "API bağlantısı kurarak ürün, stok, sipariş ve fiyat bilgilerinizi otomatik olarak senkronize ederiz. Tüm süreçler otomatik gerçekleşir."
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer: "Temel entegrasyon 2 saat, profesyonel entegrasyon 4-6 saat içinde tamamlanır. Kurulum süresince destek ekibimiz yanınızda olur."
  },
  {
    question: "Mevcut ürünlerim otomatik aktarılır mı?",
    answer: "Evet, mevcut tüm ürünleriniz kategori mapping işlemi sonrası otomatik olarak Trendyol'a aktarılır."
  },
  {
    question: "Stok güncellemeleri real-time mi?",
    answer: "Profesyonel paket ve üstünde stok güncellemeleri real-time yapılır. Temel pakette 15 dakikada bir güncellenir."
  },
  {
    question: "Siparişler nasıl yönetilir?",
    answer: "Trendyol'dan gelen siparişler otomatik olarak sisteminize aktarılır. Kargo süreci de otomatik başlatılır."
  },
  {
    question: "Destek hizmeti var mı?",
    answer: "Tüm paketlerimizde kurulum desteği vardır. Profesyonel pakette telefon, Enterprise'da 7/24 destek sunuyoruz."
  }
];

export function TrendyolPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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
            className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full mb-8 border border-blue-500/20"
          >
            <Package className="w-4 h-4" />
            <span className="font-medium">Trendyol Entegrasyonu</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Trendyol ile
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Otomatik</span>
            <br />Entegrasyon
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            E-ticaret sitenizi Trendyol ile entegre edin. Ürün, stok, sipariş ve kargo süreçlerinizi 
            otomatikleştirerek satışlarınızı artırın ve iş yükünüzü azaltın.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Button 
                onClick={() => navigateTo('/support')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg"
              >
                Hemen Entegre Et
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>2 saatte kurulum</span>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3 ${benefit.color}`}>
                  <benefit.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{benefit.value}</div>
                <div className="text-sm font-medium text-gray-700 mb-1">{benefit.title}</div>
                <div className="text-xs text-gray-500">{benefit.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Entegrasyon Özellikleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Trendyol ile tam entegrasyon için gereken tüm özellikler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-sm border-blue-200/50">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Entegrasyon Süreci</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              4 adımda hızlı ve güvenli Trendyol entegrasyonu
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {integrationProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 text-center h-full bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto">
                    {process.step}
                  </div>
                  
                  <Badge variant="secondary" className="mb-4 bg-blue-50 text-blue-700">
                    {process.duration}
                  </Badge>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 mb-6">{process.description}</p>
                  
                  <div className="space-y-2">
                    {process.tasks.map((task, taskIndex) => (
                      <div key={taskIndex} className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{task}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Başarı Hikayeleri</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Trendyol entegrasyonu ile büyüyen işletmeler</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <div className="relative h-48">
                    <img 
                      src={story.image} 
                      alt={story.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-blue-500 text-white">
                        {story.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{story.company}</h3>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Object.entries(story.results).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 italic mb-4">
                      "{story.quote}"
                    </blockquote>
                    
                    <div className="text-sm font-medium text-gray-600">
                      {story.owner}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Teknik <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Özellikler</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Enterprise seviyesinde Trendyol entegrasyon teknolojisi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.9 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 text-center h-full bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{spec.value}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{spec.title}</h3>
                  <p className="text-gray-600 text-sm">{spec.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sık Sorulan Sorular</h2>
            <p className="text-xl text-gray-600 leading-relaxed">Trendyol entegrasyonu hakkında merak edilenler</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.3 + index * 0.1, duration: 0.4 }}
              >
                <Card className="p-6 h-full bg-white/80 backdrop-blur-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trendyol Satışlarınızı Başlatın
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            2 saatte kurulumunu tamamlayın ve Trendyol'da satış yapmaya hemen başlayın.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={() => navigateTo('/support')}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-medium"
            >
              Hemen Entegre Et
            </Button>
            <Button 
              onClick={() => navigateTo('/pricing')}
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
            >
              Paketleri İncele
            </Button>
          </div>
          
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-blue-100">
            <span>🔄 Otomatik Sync</span>
            <span>📦 Stok Yönetimi</span>
            <span>🚚 Kargo Entegrasyonu</span>
            <span>📊 Satış Raporları</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}