import { motion } from "framer-motion";

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  Users,
  Clock,
  Calendar,
  Award,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Shield,
  DollarSign,
  Target,
  Star,
  Zap,
  Globe,
  Smartphone,
  Lock,
  Building,
  GraduationCap,
  Briefcase,
  Heart,
  FileCheck,
  Receipt,
  Calculator,
  Headphones
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";

const features = [
  {
    icon: Users,
    title: "Personel Bilgi Yönetimi",
    description: "Çalışan bilgileri, kişisel dosyalar ve özgeçmişler merkezi sistemde yönetilir."
  },
  {
    icon: Clock,
    title: "Zaman ve Devam Takibi",
    description: "Mesai saatleri, geç kalma, erken ayrılma ve vardiya düzenlemeleri otomatik takip edilir."
  },
  {
    icon: Calendar,
    title: "İzin ve Tatil Yönetimi",
    description: "Yıllık izinler, hastalık izinleri ve resmi tatil günleri sistematik olarak planlanır."
  },
  {
    icon: DollarSign,
    title: "Bordro ve Maaş Yönetimi",
    description: "Maaş hesaplamaları, primler, kesintiler ve ödemeler otomatik işlenir."
  },
  {
    icon: Award,
    title: "Performans Değerlendirme",
    description: "Çalışan performansı, hedefler ve başarı değerlendirmeleri sistematik takip edilir."
  },
  {
    icon: GraduationCap,
    title: "Eğitim ve Gelişim",
    description: "Çalışan eğitimleri, sertifikalar ve kariyer gelişim planları yönetilir."
  }
];

const stats = [
  { label: "İK Süreç Verimliliği", value: "%78", icon: TrendingUp },
  { label: "Veri Doğruluğu", value: "%99.5", icon: CheckCircle },
  { label: "Zaman Tasarrufu", value: "%65", icon: Clock },
  { label: "Çalışan Memnuniyeti", value: "%89", icon: Star }
];

const hrSystems = [
  {
    name: "BordroNet",
    description: "Türkiye'nin lider bordro ve İK sistemi",
    features: ["E-bordro entegrasyonu", "SGK bildirimleri", "Vergi hesaplamaları", "Personel self-service"],
    color: "blue",
    icon: Calculator
  },
  {
    name: "Netsis İK",
    description: "Kapsamlı insan kaynakları yönetim sistemi",
    features: ["Personel takibi", "Performans yönetimi", "Eğitim planlama", "Organizasyon şeması"],
    color: "green",
    icon: Users
  },
  {
    name: "SAP SuccessFactors",
    description: "Küresel İK bulut çözümü entegrasyonu",
    features: ["Talent management", "Learning management", "Performance review", "Succession planning"],
    color: "purple",
    icon: Globe
  },
  {
    name: "Workday HCM",
    description: "Modern İK yönetim platformu",
    features: ["Employee experience", "Analytics", "Mobile access", "Integration hub"],
    color: "orange",
    icon: Smartphone
  }
];

const hrModules = [
  {
    title: "Personel Yönetimi",
    description: "Çalışan bilgileri ve dosya yönetimi",
    features: ["Personel kartları", "Özgeçmiş yönetimi", "Belge arşivi", "İletişim bilgileri", "Acil durum kontakları"],
    icon: Users,
    color: "blue"
  },
  {
    title: "Bordro Sistemi",
    description: "Maaş hesaplama ve ödeme süreçleri",
    features: ["Maaş hesaplamaları", "SGK primleri", "Vergi kesintileri", "Avans ve harcırah", "E-bordro dağıtımı"],
    icon: Calculator,
    color: "green"
  },
  {
    title: "İzin Yönetimi",
    description: "Tatil ve izin takip sistemi",
    features: ["Yıllık izin takibi", "Hastalık izinleri", "Doğum izni", "Ücretsiz izinler", "İzin onay süreçleri"],
    icon: Calendar,
    color: "purple"
  },
  {
    title: "Performans Yönetimi",
    description: "Çalışan değerlendirme ve hedef takibi",
    features: ["Performans değerlendirme", "Hedef belirleme", "360 derece geri bildirim", "Kariyer planlama", "Ödül sistemleri"],
    icon: Target,
    color: "orange"
  }
];

const complianceFeatures = [
  { name: "SGK Bildirimleri", icon: FileCheck, description: "Otomatik SGK işe giriş/çıkış bildirimleri" },
  { name: "Vergi Beyanları", icon: Receipt, description: "Gelir vergisi ve muhtasar beyanname" },
  { name: "İş Kanunu Uyumu", icon: Shield, description: "4857 sayılı İş Kanunu uyumluluğu" },
  { name: "KVKK Uyumu", icon: Lock, description: "Kişisel verilerin korunması kanunu" },
  { name: "İSG Kayıtları", icon: Heart, description: "İş sağlığı ve güvenliği kayıtları" },
  { name: "Sendika İlişkileri", icon: Users, description: "Sendika üyelik ve kesinti takibi" }
];

const technicalSpecs = [
  {
    title: "API Entegrasyonu",
    value: "REST/GraphQL",
    description: "Modern API protokolleri ile güvenli bağlantı"
  },
  {
    title: "Veri Senkronizasyonu",
    value: "Real-time",
    description: "Anlık personel ve bordro güncellemeleri"
  },
  {
    title: "Güvenlik Standardı",
    value: "ISO 27001",
    description: "Uluslararası güvenlik standartları"
  },
  {
    title: "Kurulum Süresi",
    value: "2-4 hafta",
    description: "Kapsamlı kurulum ve eğitim süreci"
  }
];

const hrBenefits = [
  {
    title: "Süreç Otomasyonu",
    description: "Manuel İK süreçlerini otomatikleştirin",
    value: "20 saat/hafta",
    icon: Zap,
    color: "blue"
  },
  {
    title: "Hata Oranı Düşüşü",
    description: "Bordro ve personel bilgi hatalarını minimize edin",
    value: "%95 azalma",
    icon: CheckCircle,
    color: "green"
  },
  {
    title: "Uyumluluk Garantisi",
    description: "Yasal mevzuata tam uyumlu süreçler",
    value: "%100 uyum",
    icon: Shield,
    color: "purple"
  },
  {
    title: "Çalışan Deneyimi",
    description: "Self-service portalı ile çalışan memnuniyeti",
    value: "%89 memnuniyet",
    icon: Star,
    color: "orange"
  }
];

const employeePortalFeatures = [
  {
    category: "Self-Service Portal",
    features: [
      "Kişisel bilgi güncelleme",
      "İzin talep etme",
      "Bordro görüntüleme",
      "Performans sonuçları",
      "Eğitim kayıtları"
    ]
  },
  {
    category: "Mobile App",
    features: [
      "Mobil izin başvurusu",
      "Mesai giriş/çıkış",
      "Bildirim sistemi",
      "Şirket rehberi",
      "Duyuru takibi"
    ]
  },
  {
    category: "Manager Dashboard",
    features: [
      "Ekip yönetimi",
      "İzin onayları",
      "Performans değerlendirme",
      "Bütçe takibi",
      "Raporlama araçları"
    ]
  }
];

const industryUseCases = [
  {
    industry: "İmalat Sanayi",
    description: "Vardiyalı çalışma ve saha personeli yönetimi",
    benefits: ["Vardiya planlaması", "Saha personel takibi", "İSG kayıtları", "Performans ölçümü"],
    icon: Building,
    stats: { efficiency: "+56%", compliance: "+78%", satisfaction: "+41%" }
  },
  {
    industry: "Perakende",
    description: "Mağaza personeli ve esnek çalışma saatleri",
    benefits: ["Esnek mesai", "Satış performansı", "Müşteri hizmet eğitimi", "Komisyon hesaplama"],
    icon: Briefcase,
    stats: { productivity: "+48%", turnover: "-35%", training: "+67%" }
  },
  {
    industry: "Hizmet Sektörü",
    description: "Proje ekipleri ve uzaktan çalışma yönetimi",
    benefits: ["Uzaktan çalışma", "Proje tabanlı ücretlendirme", "Müşteri memnuniyeti", "Kariyer gelişimi"],
    icon: Headphones,
    stats: { flexibility: "+73%", engagement: "+52%", retention: "+34%" }
  }
];

const reportingCapabilities = [
  {
    title: "Personel Raporları",
    description: "Detaylı personel istatistikleri ve analizleri",
    reports: ["Personel listesi", "Demografik analiz", "Devir hızı raporları", "Maliyet analizi", "Org chart"],
    icon: Users
  },
  {
    title: "Bordro Raporları",
    description: "Maaş ve ödeme detay raporları",
    reports: ["Aylık bordro", "Vergi raporları", "SGK raporları", "Gider analizi", "Maliyet merkezi"],
    icon: Calculator
  },
  {
    title: "Performans Raporları",
    description: "Çalışan performansı ve verimlilik raporları",
    reports: ["Performans değerlendirme", "Hedef takibi", "Eğitim etkinliği", "Kariyer gelişimi", "Yetenek analizi"],
    icon: Target
  }
];

export function HrSystemsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full mb-6 border border-blue-500/20"
              >
                <Users className="w-4 h-4" />
                <span className="font-medium">İK Sistemi Entegrasyonu</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                İnsan Kaynakları
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Entegrasyonu</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Web sitenizi İK sisteminizle entegre edin. Personel yönetimini 
                otomatikleştirin, bordro süreçlerini dijitalleştirin ve çalışan 
                deneyimini geliştirin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  İK Entegrasyonu Başlat
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Demo Talep Et
                </Button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">KVKK uyumlu</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">SGK entegrasyonu</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
                <div className="bg-white rounded-xl p-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbiUyMHJlc291cmNlcyUyMG1hbmFnZW1lbnQlMjBzeXN0ZW18ZW58MXx8fHwxNzU2MzAwODUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="HR Management System"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Floating Stats */}
              <motion.div
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
                    <div className="font-semibold text-gray-900">%78</div>
                    <div className="text-sm text-gray-500">Verimlilik</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">%89</div>
                    <div className="text-sm text-gray-500">Memnuniyet</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              İK Entegrasyonu ile
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Güçlü Sonuçlar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İK entegrasyonu kullanan firmaların elde ettiği ortalama performans artışı
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Kapsamlı İK
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Entegrasyon Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personel yönetiminden bordro süreçlerine kadar tüm İK işlemlerini dijitalleştirin
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HR Systems Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Desteklenen İK
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Sistemleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Popüler İK ve bordro yazılımları ile hazır entegrasyon çözümleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {hrSystems.map((system, index) => (
              <motion.div
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HR Modules Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              İK Entegrasyon
              <span className="text-cyan-300"> Modülleri</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              İnsan kaynakları süreçlerinizin tamamı için özelleştirilmiş entegrasyon çözümleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {hrModules.map((module, index) => (
              <motion.div
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
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
              İK entegrasyonu ile işletmenizin elde edeceği somut faydalar
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hrBenefits.map((benefit, index) => (
              <motion.div
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
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
              Enterprise seviyesinde İK entegrasyon teknolojisi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              Sektörel
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Çözümler</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı sektörlere özel İK entegrasyon senaryoları ve çözümleri
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryUseCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.industry}</h3>
                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                      {Object.entries(useCase.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              İK Entegrasyonunuzu Başlatmaya Hazır mısınız?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Personel yönetimini dijitalleştirin, bordro süreçlerini otomatikleştirin 
              ve çalışan deneyimini artırın. Hemen başlayın!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 shadow-lg">
                Entegrasyon Başlat
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                Uzman Görüşmesi
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}