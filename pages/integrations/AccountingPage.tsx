import { motion } from "framer-motion";

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  Calculator,
  Receipt,
  FileText,
  TrendingUp,
  PieChart,
  CheckCircle,
  ArrowRight,
  Shield,
  Clock,
  RefreshCw,
  Users,
  Building,
  CreditCard,
  Banknote,
  Eye,
  Globe,
  Smartphone,
  Package,
  Factory,
  Headphones,
  FileCheck,
  BookOpen,
  Archive,
  Database
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import React from "react";

const features = [
  {
    icon: RefreshCw,
    title: "Otomatik Veri Senkronizasyonu",
    description: "Finansal verileriniz muhasebe sisteminizle otomatik olarak senkronize edilir."
  },
  {
    icon: Receipt,
    title: "Fatura ve Dekont Yönetimi",
    description: "E-faturalar, dekontlar ve mali belgeler otomatik işlenir ve saklanır."
  },
  {
    icon: PieChart,
    title: "Mali Raporlama",
    description: "Gelir-gider, bilanço ve kar-zarar raporları real-time oluşturulur."
  },
  {
    icon: Users,
    title: "Cari Hesap İntegrasyonu",
    description: "Müşteri ve tedarikçi bilgileri muhasebe sistemiyle entegre edilir."
  },
  {
    icon: CreditCard,
    title: "Ödeme Takibi",
    description: "Tahsilatlar, ödemeler ve borç-alacak durumu otomatik güncellenir."
  },
  {
    icon: Shield,
    title: "Mali Mevzuat Uyumu",
    description: "GIB standartları ve vergi mevzuatına uygun işlem kayıtları."
  }
];

const stats = [
  { label: "İşlem Süresi Tasarrufu", value: "%84", icon: Clock },
  { label: "Veri Doğruluğu", value: "%99.8", icon: CheckCircle },
  { label: "Mali Raporlama Hızı", value: "%92", icon: TrendingUp },
  { label: "Mevzuat Uyumu", value: "%100", icon: Shield }
];

const accountingSystems = [
  {
    name: "Logo Go",
    description: "Türkiye'nin lider muhasebe yazılımı entegrasyonu",
    features: ["E-Fatura entegrasyonu", "GIB uyumluluğu", "Cari hesap yönetimi", "Stok takibi"],
    color: "blue",
    icon: Calculator
  },
  {
    name: "Mikro",
    description: "Kapsamlı işletme yönetimi sistemi entegrasyonu",
    features: ["ERP entegrasyonu", "Mali analiz", "Bütçe kontrolü", "Çok şirket desteği"],
    color: "green",
    icon: Building
  },
  {
    name: "SAP Business One",
    description: "Enterprise düzeyinde muhasebe çözümü",
    features: ["Uluslararası standartlar", "Multi-currency", "Advanced reporting", "Audit trail"],
    color: "purple",
    icon: Globe
  },
  {
    name: "Eta",
    description: "Esnek ve kullanıcı dostu muhasebe sistemi",
    features: ["Web tabanlı erişim", "Mobil uygulamalar", "Cloud backup", "Custom reports"],
    color: "orange",
    icon: Smartphone
  }
];

const integrationModules = [
  {
    title: "Genel Muhasebe",
    description: "Temel muhasebe işlemleri ve yevmiye kayıtları",
    features: ["Hesap planı senkronizasyonu", "Yevmiye fişleri", "Mizanlar", "Genel raporlar", "Dönem kapanış"],
    icon: FileText,
    color: "blue"
  },
  {
    title: "Cari Hesaplar",
    description: "Müşteri ve tedarikçi hesap yönetimi",
    features: ["Cari kart bilgileri", "Bakiye takibi", "Yaşlandırma raporları", "Risk limitleri", "Ödeme planları"],
    icon: Users,
    color: "green"
  },
  {
    title: "Satış & Satın Alma",
    description: "Alış-satış süreçleri ve faturalandırma",
    features: ["Sipariş entegrasyonu", "Fatura oluşturma", "E-fatura gönderimi", "İade işlemleri", "Vade takibi"],
    icon: Receipt,
    color: "purple"
  },
  {
    title: "Kasa & Banka",
    description: "Nakit akışı ve banka işlemleri yönetimi",
    features: ["Kasa hareketleri", "Banka mutabakatı", "Çek-senet takibi", "Ödeme planlaması", "Nakit akış raporları"],
    icon: Banknote,
    color: "orange"
  }
];

const reportingFeatures = [
  {
    category: "Mali Tablolar",
    reports: [
      "Bilanço",
      "Gelir Tablosu",
      "Nakit Akış Tablosu",
      "Özsermaye Değişim Tablosu",
      "Dipnotlar"
    ]
  },
  {
    category: "Analitik Raporlar",
    reports: [
      "Departman bazlı karlılık",
      "Ürün karlılık analizi",
      "Müşteri karlılığı",
      "Trend analizleri",
      "Budget vs Actual"
    ]
  },
  {
    category: "Vergi Raporları",
    reports: [
      "KDV beyannamesi",
      "Muhtasar beyanname",
      "Gelir vergisi beyannamesi",
      "Stopaj raporları",
      "İntrastat beyanı"
    ]
  }
];

const complianceFeatures = [
  { name: "GIB E-Fatura", icon: FileCheck, description: "Elektronik fatura entegrasyonu" },
  { name: "E-Defter", icon: BookOpen, description: "Elektronik defter tutma" },
  { name: "E-Arşiv", icon: Archive, description: "Mali evrak elektronik arşivleme" },
  { name: "XBRL Raporlama", icon: Database, description: "Standart format mali raporlama" },
  { name: "Vergi Dairesi Entegrasyonu", icon: Building, description: "Otomatik beyanname gönderimi" },
  { name: "SGK Bildirimleri", icon: Users, description: "Sosyal güvenlik bildirimleri" }
];

const technicalSpecs = [
  {
    title: "API Standartı",
    value: "REST/SOAP",
    description: "Modern API protokolleri ile güvenli bağlantı"
  },
  {
    title: "Veri Formatı",
    value: "XML/JSON",
    description: "Standart veri formatları ile uyumluluk"
  },
  {
    title: "Güvenlik",
    value: "SSL/TLS",
    description: "Bank-level güvenlik ve şifreleme"
  },
  {
    title: "Kurulum",
    value: "3-5 gün",
    description: "Hızlı kurulum ve test süreçleri"
  }
];

const integrationBenefits = [
  {
    title: "Zaman Tasarrufu",
    description: "Manuel veri girişini ortadan kaldırın",
    value: "15 saat/hafta",
    icon: Clock,
    color: "blue"
  },
  {
    title: "Hata Oranı Düşüşü",
    description: "Otomatik veri aktarımı ile hatasız işlemler",
    value: "%98 azalma",
    icon: CheckCircle,
    color: "green"
  },
  {
    title: "Mali Şeffaflık",
    description: "Real-time mali durum görünürlüğü",
    value: "Anlık raporlar",
    icon: Eye,
    color: "purple"
  },
  {
    title: "Maliyet Azalması",
    description: "İşletme maliyetlerinde önemli düşüş",
    value: "%35 tasarruf",
    icon: TrendingUp,
    color: "orange"
  }
];

const industryUseCases = [
  {
    industry: "Perakende",
    description: "Mağaza satışları ve stok yönetimi entegrasyonu",
    benefits: ["POS entegrasyonu", "Stok takibi", "Satış analizi", "Müşteri analizleri"],
    icon: Package,
    stats: { efficiency: "+67%", accuracy: "+89%", reporting: "+45%" }
  },
  {
    industry: "İmalat",
    description: "Üretim maliyetleri ve finansal kontrol",
    benefits: ["Maliyet merkezi analizi", "Hammadde takibi", "İş emri maliyetleri", "Karlılık analizi"],
    icon: Factory,
    stats: { costControl: "+52%", profitability: "+38%", reporting: "+61%" }
  },
  {
    industry: "Hizmet",
    description: "Proje tabanlı muhasebe ve faturalandırma",
    benefits: ["Proje karlılığı", "Zaman takibi", "Fatura otomasyonu", "Müşteri ödemeleri"],
    icon: Headphones,
    stats: { billing: "+74%", collections: "+43%", profitability: "+29%" }
  }
];

export function AccountingPage() {
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
                <Calculator className="w-4 h-4" />
                <span className="font-medium">Muhasebe Sistemi Entegrasyonu</span>
              </MotionDiv>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Muhasebe Sistemi
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Entegrasyonu</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Web sitenizi muhasebe yazılımınızla entegre edin. Mali işlemlerinizi 
                otomatikleştirin, real-time raporlar alın ve GİB uyumluluğunu sağlayın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Muhasebe Entegrasyonu Başlat
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Demo Talep Et
                </Button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">GİB uyumlu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">SSL güvenlik</span>
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
                    src="https://images.unsplash.com/photo-1753955900083-b62ee8d97805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2NvdW50aW5nJTIwc29mdHdhcmUlMjBpbnRlZ3JhdGlvbnxlbnwxfHx8fDE3NTYzMDA2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Accounting Software Integration"
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
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">%84</div>
                    <div className="text-sm text-gray-500">Tasarruf</div>
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
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">%99.8</div>
                    <div className="text-sm text-gray-500">Doğruluk</div>
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
              Muhasebe Entegrasyonu ile
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Güçlü Sonuçlar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Muhasebe entegrasyonu kullanan firmaların elde ettiği ortalama performans artışı
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
              Kapsamlı Muhasebe
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Entegrasyon Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mali süreçlerinizi tamamen otomatikleştirin ve gerçek zamanlı kontrol sağlayın
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

      {/* Accounting Systems Section */}
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
              Desteklenen Muhasebe
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Yazılımları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Türkiye'nin en popüler muhasebe yazılımları ile hazır entegrasyon
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 gap-8">
            {accountingSystems.map((system, index) => (
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
                        <system.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{system.name}</h3>
                        <p className="text-gray-600 mb-4">{system.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {system.features.map((feature, featureIndex) => (
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
              Muhasebe Entegrasyon
              <span className="text-cyan-300"> Modülleri</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              İşletmenizin tüm mali süreçleri için özelleştirilmiş entegrasyon çözümleri
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

      {/* Benefits Section */}
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
              Entegrasyon
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Avantajları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Muhasebe entegrasyonu ile işletmenizin elde edeceği somut faydalar
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationBenefits.map((benefit, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 h-full">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{benefit.description}</p>
                    <div className="text-2xl font-bold text-blue-600">{benefit.value}</div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
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
              Teknik <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Özellikler</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise seviyesinde muhasebe entegrasyon teknolojisi
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{spec.value}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{spec.title}</h3>
                  <p className="text-gray-600 text-sm">{spec.description}</p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
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
              Mevzuat
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Uyumluluğu</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Türkiye mali mevzuatına tam uyumlu entegrasyon özellikleri
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFeatures.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Reporting Features */}
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
              Mali Raporlama
              <span className="text-cyan-300"> Özellikleri</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Kapsamlı mali raporlama ve analiz araçları ile işletmenizi yönetin
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {reportingFeatures.map((category, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 h-full">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-white mb-6">{category.category}</h3>
                    <div className="space-y-3">
                      {category.reports.map((report, reportIndex) => (
                        <div key={reportIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-blue-100 text-sm">{report}</span>
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

      {/* Industry Use Cases */}
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
              Sektörel
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Kullanım Örnekleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı sektörlerde muhasebe entegrasyonu ile elde edilen başarı hikayeleri
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {industryUseCases.map((useCase, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                        <useCase.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{useCase.industry}</h3>
                        <p className="text-gray-600 text-sm">{useCase.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2 mb-6">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(useCase.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
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
              Muhasebe Entegrasyonuna Bugün Başlayın
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Mali süreçlerinizi otomatikleştirin, verimliliğinizi artırın ve 
              GİB uyumluluğunu sağlayın. Uzmanlarımızla iletişime geçin.
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