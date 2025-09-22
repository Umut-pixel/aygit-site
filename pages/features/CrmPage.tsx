// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";

// TYPE OVERRIDE - Fix CrmPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  Users,
  UserPlus,
  BarChart3,
  Clock,
  Target,
  Zap,
  Shield,
  Settings,
  CheckCircle,
  ArrowRight,
  Calendar,
  PieChart,
  TrendingUp,
  Globe,
  Smartphone,
  Heart,
  Star,
  Award,
  Filter,
  Send,
  Eye,
  MousePointer,
  DollarSign,
  RefreshCw,
  Database,
  FileText,
  Phone,
  Mail,
  MessageSquare,
  Activity,
  Briefcase
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import React from "react";

const features = [
  {
    icon: Users,
    title: "Müşteri Profili Yönetimi",
    description: "Müşterilerinizin detaylı profillerini oluşturun ve güncel tutun. Tüm iletişim geçmişini tek yerde görün."
  },
  {
    icon: Activity,
    title: "Satış Takip Sistemi",
    description: "Satış süreçlerinizi adım adım takip edin. Potansiyel müşterileri satışa dönüştürme oranınızı artırın."
  },
  {
    icon: BarChart3,
    title: "Performans Raporları",
    description: "Satış ekibinizin performansını, müşteri memnuniyetini ve gelir trendlerini detaylı raporlarla analiz edin."
  },
  {
    icon: Target,
    title: "Hedef ve Görev Yönetimi",
    description: "Ekibiniz için hedefler belirleyin, görevler atayın ve ilerlemeyi gerçek zamanlı olarak takip edin."
  },
  {
    icon: MessageSquare,
    title: "İletişim Hub'ı",
    description: "E-mail, telefon, sosyal medya ve canlı sohbet kanallarını tek platformda yönetin."
  },
  {
    icon: Database,
    title: "Veri Analizi ve İçgörüler",
    description: "Müşteri davranışlarını analiz edin, satış trendlerini öngörün ve stratejik kararlar alın."
  }
];

const stats = [
  { label: "Satış Artışı", value: "%142", icon: TrendingUp },
  { label: "Müşteri Memnuniyeti", value: "4.8/5", icon: Heart },
  { label: "Müşteri Tutma Oranı", value: "%87", icon: Users },
  { label: "Ortalama Yanıt Süresi", value: "< 2 saat", icon: Clock }
];

const modules = [
  {
    title: "Satış Yönetimi",
    description: "Potansiyel müşterilerden satışa kadar tüm süreci yönetin",
    features: ["Potansiyel müşteri takibi", "Satış aşamaları", "Teklif yönetimi", "Sözleşme takibi"],
    icon: Briefcase
  },
  {
    title: "Müşteri Hizmetleri", 
    description: "Müşteri destek süreçlerinizi optimize edin",
    features: ["Destek bilet sistemi", "Canlı sohbet", "FAQ yönetimi", "Müşteri geri bildirimleri"],
    icon: MessageSquare
  },
  {
    title: "Pazarlama Otomasyonu",
    description: "Pazarlama kampanyalarınızı otomatikleştirin",
    features: ["E-mail kampanyaları", "Müşteri segmentasyonu", "Pazarlama analitiği", "Sosyal medya entegrasyonu"],
    icon: Target
  },
  {
    title: "Raporlama ve Analiz",
    description: "Veri odaklı kararlar alın",
    features: ["Satış raporları", "Müşteri analitiği", "Performans metrikleri", "Özel dashboard'lar"],
    icon: BarChart3
  }
];

const integrations = [
  { name: "Email", icon: Mail, description: "Gmail, Outlook entegrasyonu" },
  { name: "Telefon", icon: Phone, description: "VoIP ve PBX sistemleri" },
  { name: "Sosyal Medya", icon: Globe, description: "Facebook, LinkedIn, Twitter" },
  { name: "E-ticaret", icon: Smartphone, description: "Shopify, WooCommerce" },
  { name: "Muhasebe", icon: FileText, description: "QuickBooks, Xero" },
  { name: "Pazarlama", icon: Send, description: "Mailchimp, HubSpot" }
];



export function CrmPage() {
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
                <span className="font-medium">CRM Sistemi</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Akıllı Müşteri
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> İlişkileri Yönetimi</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Müşterilerinizi daha iyi tanıyın, satışlarınızı artırın, ilişkilerinizi güçlendirin. 
                Güçlü CRM sistemi ile işinizi büyütün.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Ücretsiz Deneyin
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Demo İzleyin
                </Button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Kolay kurulum</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Güvenli veri saklama</span>
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
                    src="https://images.unsplash.com/photo-1543171165-6ec6ede147ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDUk0lMjBkYXNoYm9hcmQlMjBjdXN0b21lciUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzU2Mjk4NTA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="CRM Dashboard"
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
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">2,847</div>
                    <div className="text-sm text-gray-500">Aktif müşteri</div>
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
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">+42%</div>
                    <div className="text-sm text-gray-500">Satış artışı</div>
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
              CRM ile İşinizde
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Fark Yaratın</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşterilerimizin CRM sistemi ile elde ettiği ortalama sonuçlar
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
              Güçlü CRM
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşteri ilişkileri yönetiminizi güçlendirecek kapsamlı araçlar
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

      {/* Modules Section */}
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
              CRM
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Modülleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İşinizin her alanına uygun özelleştirilmiş çözümler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
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
                        <module.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{module.title}</h3>
                        <p className="text-gray-600 mb-4">{module.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {module.features.map((feature, featureIndex) => (
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

      {/* Integrations Section */}
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
              Mevcut Araçlarınızla
              <span className="text-cyan-300"> Entegre Olun</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Kullandığınız tüm araçları CRM sisteminizle bağlayın, tek bir yerden yönetin
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
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <integration.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{integration.name}</h3>
                    <p className="text-blue-200 text-sm">{integration.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">
                CRM Sisteminizi Gerçek Zamanlı
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Deneyimleyin</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Herhangi bir taahhüt gerektirmeden, CRM sistemimizin tüm özelliklerini 
                30 gün boyunca ücretsiz olarak test edin.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Tam özellikli 30 günlük deneme</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Kredi kartı bilgisi gerekmez</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">Ücretsiz kurulum ve eğitim</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-gray-700">7/24 teknik destek</span>
                </div>
              </div>

              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                Ücretsiz Deneme Başlatın
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-1 shadow-2xl">
                <div className="bg-white rounded-xl p-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1NjIyNzQyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Business Team Analytics"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </motion.div>
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
              Müşteri İlişkilerinizi Güçlendirmeye Hazır mısınız?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              CRM sistemi ile müşterilerinizi daha iyi tanıyın, satışlarınızı artırın 
              ve işinizi büyütün. Güçlü özellikleri keşfedin!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 shadow-lg">
                Ücretsiz Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                İletişime Geçin
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}