import { motion } from "framer-motion";

const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  Database,
  Settings,
  Shield,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Package,
  Users,
  Clock,
  TrendingUp,
  Target,
  Search,
  UserCheck,
  ShoppingCart,
  Receipt,
  Headphones,
  CreditCard,
  Truck,
  Factory,
  Building,
  Calculator,
  Cpu,
  Rocket
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import React from "react";

const features = [
  {
    icon: Database,
    title: "Veri Senkronizasyonu",
    description: "ERP sisteminizdeki tüm işletme verileri web sitenizle otomatik olarak senkronize edilir."
  },
  {
    icon: Package,
    title: "Envanter Yönetimi",
    description: "Stok seviyeleri, ürün bilgileri ve tedarik zinciri verileri real-time güncellenir."
  },
  {
    icon: Users,
    title: "Müşteri & Tedarikçi Entegrasyonu",
    description: "Müşteri ve tedarikçi bilgileri ERP'den web platformuna otomatik aktarılır."
  },
  {
    icon: Receipt,
    title: "Mali İşlemler",
    description: "Faturalandırma, muhasebe kayıtları ve finansal raporlar entegre edilir."
  },
  {
    icon: BarChart3,
    title: "İş Zekası Raporları",
    description: "ERP verilerinizi görsel dashboard'larda analiz edin ve raporlayın."
  },
  {
    icon: Settings,
    title: "İş Akışı Otomasyonu",
    description: "Onay süreçleri, iş akışları ve operasyonel süreçler otomatikleştirilir."
  }
];

const stats = [
  { label: "Operasyonel Verimlilik", value: "%87", icon: TrendingUp },
  { label: "Veri Doğruluğu", value: "%99.2", icon: CheckCircle },
  { label: "İşlem Süresi Azalması", value: "%73", icon: Clock },
  { label: "ROI Artışı", value: "%156", icon: BarChart3 }
];

const erpSystems = [
  {
    name: "SAP ERP",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop",
    description: "Dünyanın lider kurumsal kaynak planlaması çözümü",
    features: ["SAP Business One", "SAP S/4HANA", "SAP ByDesign", "Real-time data sync"],
    color: "blue"
  },
  {
    name: "Microsoft Dynamics",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop",
    description: "Microsoft ekosistemi ERP entegrasyonu",
    features: ["Dynamics 365", "Power Platform", "Azure integration", "Office 365 sync"],
    color: "green"
  },
  {
    name: "Oracle NetSuite",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop",
    description: "Bulut tabanlı ERP çözümü entegrasyonu",
    features: ["SuiteCommerce", "SuiteAnalytics", "Cloud integration", "Multi-subsidiary"],
    color: "purple"
  },
  {
    name: "Odoo ERP",
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=64&h=64&fit=crop",
    description: "Açık kaynak ERP sistemi entegrasyonu",
    features: ["Modular structure", "Custom apps", "API integration", "Multi-language"],
    color: "orange"
  }
];

const integrationModules = [
  {
    title: "Finans & Muhasebe",
    description: "Mali işlemler ve muhasebe entegrasyonu",
    features: ["Genel muhasebe", "Borç/alacak takibi", "Bütçe yönetimi", "Mali raporlama", "Vergi yönetimi"],
    icon: Calculator,
    color: "blue"
  },
  {
    title: "Satış & CRM",
    description: "Satış süreçleri ve müşteri yönetimi",
    features: ["Fırsat yönetimi", "Sipariş işleme", "Fiyat listesi", "Kampanya yönetimi", "Müşteri analizi"],
    icon: Users,
    color: "green"
  },
  {
    title: "Envanter & Lojistik",
    description: "Stok ve tedarik zinciri yönetimi",
    features: ["Stok takibi", "Depo yönetimi", "Satın alma", "Tedarik zinciri", "Kalite kontrol"],
    icon: Package,
    color: "purple"
  },
  {
    title: "İnsan Kaynakları",
    description: "Personel ve bordro yönetimi",
    features: ["Personel bilgileri", "Bordro hesapları", "İzin yönetimi", "Performans takibi", "Eğitim planlama"],
    icon: UserCheck,
    color: "orange"
  }
];

const advancedFeatures = [
  {
    category: "Güvenlik & Uyumluluk",
    items: [
      "Role-based access control (RBAC)",
      "GDPR ve veri koruma uyumluluğu",
      "Audit log ve izleme sistemi",
      "Multi-factor authentication",
      "Veri şifreleme ve güvenlik"
    ]
  },
  {
    category: "Performans & Ölçeklenebilirlik",
    items: [
      "High-availability cluster desteği",
      "Load balancing ve dağıtık mimari",
      "Caching ve performans optimizasyonu",
      "Auto-scaling yetenekleri",
      "Disaster recovery planları"
    ]
  },
  {
    category: "Analytics & Raporlama",
    items: [
      "Real-time business intelligence",
      "Özelleştirilebilir dashboard'lar",
      "Automated report generation",
      "Data mining ve trend analizi",
      "Predictive analytics modülleri"
    ]
  }
];

const integrations = [
  { name: "Accounting Software", icon: Calculator, description: "Logo, Mikro, SAP" },
  { name: "Payment Systems", icon: CreditCard, description: "Multi-currency, Gateway" },
  { name: "Logistics", icon: Truck, description: "Shipping, Tracking, Warehousing" },
  { name: "Manufacturing", icon: Factory, description: "Production, Quality, Planning" },
  { name: "Banking", icon: Building, description: "Online banking, Reconciliation" },
  { name: "Compliance", icon: Shield, description: "Regulatory, Audit, Governance" }
];

const technicalSpecs = [
  {
    title: "API Protokolü",
    value: "REST/SOAP",
    description: "Modern API standartları ile güvenli bağlantı"
  },
  {
    title: "Veri Senkronizasyonu",
    value: "Real-time/Batch",
    description: "Anlık veya toplu veri aktarım seçenekleri"
  },
  {
    title: "Güvenlik Standardı",
    value: "Enterprise",
    description: "Bank-level security ve şifreleme"
  },
  {
    title: "Kurulum & Test",
    value: "5-10 gün",
    description: "Profesyonel kurulum ve kapsamlı test"
  }
];

const implementationSteps = [
  {
    step: "Keşif & Analiz",
    description: "Mevcut ERP sisteminizi ve iş süreçlerinizi detaylı analiz ediyoruz",
    icon: Search,
    details: ["Sistem mimarisi incelemesi", "Veri yapısı analizi", "İş akışı haritalama", "Güvenlik değerlendirmesi"]
  },
  {
    step: "Planlama & Tasarım",
    description: "Entegrasyon mimarisi ve implementasyon planı hazırlıyoruz",
    icon: Target,
    details: ["API tasarımı", "Veri akış şeması", "Güvenlik protokolleri", "Test senaryoları"]
  },
  {
    step: "Geliştirme & Test",
    description: "Custom entegrasyon geliştirip kapsamlı testler yapıyoruz",
    icon: Cpu,
    details: ["API development", "Unit testing", "Integration testing", "Performance testing"]
  },
  {
    step: "Dağıtım & Destek",
    description: "Production ortamına geçiş ve sürekli destek sağlıyoruz",
    icon: Rocket,
    details: ["Go-live strategy", "User training", "24/7 monitoring", "Ongoing support"]
  }
];

const industryUseCases = [
  {
    industry: "İmalat Sanayi",
    description: "Üretim süreçleri ve tedarik zinciri entegrasyonu",
    benefits: ["Üretim planlaması", "Kalite kontrol", "Maliyet analizi", "Tedarikçi yönetimi"],
    icon: Factory,
    stats: { efficiency: "+45%", cost: "-28%", quality: "+67%" }
  },
  {
    industry: "Perakende",
    description: "Envanter ve satış süreçleri optimizasyonu",
    benefits: ["Stok optimizasyonu", "Omnichannel satış", "Müşteri analizi", "Kampanya yönetimi"],
    icon: ShoppingCart,
    stats: { sales: "+38%", inventory: "-22%", satisfaction: "+52%" }
  },
  {
    industry: "Hizmet Sektörü",
    description: "Proje yönetimi ve kaynak planlaması",
    benefits: ["Proje takibi", "Kaynak tahsisi", "Faturalandırma", "Müşteri portali"],
    icon: Headphones,
    stats: { productivity: "+41%", billing: "+33%", delivery: "+29%" }
  }
];

export function ErpSystemsPage() {
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
                <Database className="w-4 h-4" />
                <span className="font-medium">ERP Sistem Entegrasyonu</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Kurumsal ERP
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Entegrasyonu</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                İşletmenizin ERP sistemini web platformunuzla entegre edin. 
                İş süreçlerinizi otomatikleştirin, verimliliği artırın ve gerçek zamanlı 
                iş zekası raporları elde edin.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  ERP Entegrasyonu Başlat
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Demo Talep Et
                </Button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Kurumsal güvenlik</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">7/24 destek</span>
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
                    src="https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlcnAlMjBzeXN0ZW0lMjBpbnRlZ3JhdGlvbnxlbnwxfHx8fDE3NTYzMDA0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="ERP System Integration"
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
                    <div className="font-semibold text-gray-900">%87</div>
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
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">%99.2</div>
                    <div className="text-sm text-gray-500">Doğruluk</div>
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
              ERP Entegrasyonu ile
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Güçlü Sonuçlar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ERP entegrasyonu kullanan kurumların elde ettiği ortalama performans
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
              Kapsamlı ERP
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Entegrasyon Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İşletmenizin tüm süreçlerini tek platform altında birleştirin
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

      {/* ERP Systems Section */}
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
              Desteklenen ERP
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Sistemleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Popüler ERP platformları ile hazır entegrasyon çözümleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {erpSystems.map((system, index) => (
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
                        <Database className="w-8 h-8 text-white" />
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

      {/* Integration Modules Section */}
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
              ERP Entegrasyon
              <span className="text-cyan-300"> Modülleri</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              İşletmenizin tüm departmanları için özelleştirilmiş entegrasyon çözümleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {integrationModules.map((module, index) => (
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

      {/* Technical Specifications */}
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
              Teknik <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Özellikler</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise seviyesinde ERP entegrasyon teknolojisi
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
              Sektörel
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Çözümler</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı sektörlere özel ERP entegrasyon senaryoları
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
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
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

      {/* Integrations */}
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
              Ek Sistem
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Entegrasyonları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ERP sisteminizle birlikte çalışan diğer iş uygulamaları
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <integration.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.name}</h3>
                    <p className="text-gray-600 text-sm">{integration.description}</p>
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
              ERP Entegrasyonunuza Başlamaya Hazır mısınız?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              İşletmenizin ERP sistemini web platformunuzla entegre ederek 
              operasyonel verimliliği artırın ve iş süreçlerinizi otomatikleştirin!
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