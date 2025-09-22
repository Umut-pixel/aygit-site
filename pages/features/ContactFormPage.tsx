// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";

// TYPE OVERRIDE - Fix ContactFormPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  Mail,
  MessageSquare,
  Shield,
  Settings,
  CheckCircle,
  ArrowRight,
  Filter,
  Send,
  Eye,
  BarChart3,
  Globe,
  Smartphone,
  Clock,
  Users,
  FileText,
  AlertCircle,
  Archive,
  Star,
  TrendingUp,
  Zap,
  Bell,
  Database,
  Lock,
  Layers,
  Target,
  Search,
  Calendar,
  Tag,
  Download,
  Upload,
  Copy,
  Edit,
  Trash2,
  Reply,
  Forward,
  RefreshCw,
  UserCheck,
  MapPin,
  Phone,
  Link,
  Image,
  Paperclip,
  CheckSquare
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import React from "react";

const features = [
  {
    icon: MessageSquare,
    title: "Akıllı Form Oluşturucu",
    description: "Sürükle-bırak ile kolayca özelleştirilebilir iletişim formları oluşturun. Alan türleri, validasyonlar ve tasarım seçenekleri."
  },
  {
    icon: Send,
    title: "Otomatik Yanıt Sistemi",
    description: "Müşterilerinize anında otomatik teşekkür mesajları gönderin. Özelleştirilebilir e-mail şablonları ile profesyonel görünüm."
  },
  {
    icon: Shield,
    title: "Spam Koruma",
    description: "Gelişmiş spam filtreleme ve CAPTCHA sistemleri ile istenmeyen mesajları engelleyin. Temiz ve güvenilir iletişim."
  },
  {
    icon: Database,
    title: "Mesaj Yönetimi",
    description: "Gelen tüm mesajları merkezi panelde organize edin. Kategorilendir, etiketle ve takip et."
  },
  {
    icon: BarChart3,
    title: "Form Analitikleri",
    description: "Form performansını detaylı olarak analiz edin. Doldurma oranları, bırakma noktaları ve optimizasyon önerileri."
  },
  {
    icon: Bell,
    title: "Anında Bildirimler",
    description: "Yeni mesajlar geldiğinde e-mail, SMS veya push bildirimleri ile anında haberdar olun."
  }
];

const stats = [
  { label: "Form Doldurma Oranı", value: "%87", icon: CheckSquare },
  { label: "Ortalama Yanıt Süresi", value: "2 saat", icon: Clock },
  { label: "Spam Engelleme", value: "%99.9", icon: Shield },
  { label: "Müşteri Memnuniyeti", value: "4.8/5", icon: Star }
];

const formTypes = [
  {
    title: "İletişim Formu",
    description: "Genel müşteri iletişimi için standart form",
    features: ["Ad, soyad alanları", "E-mail validasyonu", "Mesaj alanı", "Telefon numarası"],
    icon: MessageSquare
  },
  {
    title: "Destek Talebi", 
    description: "Teknik destek ve yardım istekleri için",
    features: ["Kategori seçimi", "Öncelik seviyesi", "Dosya ekleme", "Takip numarası"],
    icon: Users
  },
  {
    title: "Teklif Talebi",
    description: "Ürün/hizmet teklifleri için özel form",
    features: ["Bütçe aralığı", "Proje detayları", "Zaman çizelgesi", "Şirket bilgileri"],
    icon: Target
  },
  {
    title: "Randevu Formu",
    description: "Görüşme ve randevu planlaması için",
    features: ["Tarih seçici", "Saat aralıkları", "Görüşme türü", "Katılımcı bilgileri"],
    icon: Calendar
  }
];

const integrations = [
  { name: "E-mail Sistemleri", icon: Mail, description: "Gmail, Outlook, SMTP entegrasyonu" },
  { name: "CRM Platformları", icon: Database, description: "Müşteri verilerini doğrudan CRM'e aktar" },
  { name: "Marketing Araçları", icon: Target, description: "Mailchimp, Constant Contact entegrasyonu" },
  { name: "Bildirim Servisleri", icon: Bell, description: "Slack, Discord, Telegram bildirimleri" },
  { name: "Analitik Araçları", icon: BarChart3, description: "Google Analytics, conversion tracking" },
  { name: "Dosya Depolama", icon: Archive, description: "Google Drive, Dropbox, AWS S3" }
];

const securityFeatures = [
  "SSL/TLS şifreleme ile güvenli veri iletimi",
  "GDPR uyumlu veri toplama ve saklama",
  "İki faktörlü doğrulama (2FA) desteği",
  "IP bazlı erişim kısıtlamaları",
  "Otomatik veri yedekleme sistemi",
  "Audit log ve aktivite takibi"
];

const advancedFeatures = [
  "Çok adımlı form wizard'ları",
  "Koşullu alan gösterimi",
  "Dosya yükleme ve format kısıtlamaları",
  "E-imza entegrasyonu",
  "QR kod ile mobil form erişimi",
  "A/B test desteği form optimizasyonu için"
];

export function ContactFormPage() {
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
                <MessageSquare className="w-4 h-4" />
                <span className="font-medium">İletişim Formu Sistemi</span>
              </MotionDiv>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Akıllı İletişim
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Form Çözümleri</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Müşterilerinizle etkili iletişim kurun. Güçlü form oluşturucu, otomatik yanıtlar, 
                spam koruması ve detaylı analitikler ile profesyonel iletişim deneyimi sunan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Form Oluşturmaya Başla
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Örnek Formları Gör
                </Button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Dakikalar içinde kurulum</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">GDPR uyumlu</span>
                </div>
              </div>
            </MotionDiv>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
                <div className="bg-white rounded-xl p-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1676042349618-9f8c85d76b7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250YWN0JTIwZm9ybSUyMHdlYiUyMGRlc2lnbnxlbnwxfHx8fDE3NTYyOTkxMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="İletişim Formu Sistemi"
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
                    <CheckSquare className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">%87</div>
                    <div className="text-sm text-gray-500">Doldurma oranı</div>
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
                    <Shield className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">%99.9</div>
                    <div className="text-sm text-gray-500">Spam koruma</div>
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
              İletişim Formu ile
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Güçlü Sonuçlar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşterilerimizin iletişim formu sistemi ile elde ettiği ortalama performans
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
              Güçlü İletişim Formu
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşteri iletişiminizi profesyonelleştirecek kapsamlı araçlar
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

      {/* Form Types Section */}
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
              Her İhtiyaca Uygun
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Form Türleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              İşletmenizin ihtiyaçlarına özel hazır form şablonları
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {formTypes.map((formType, index) => (
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
                        <formType.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{formType.title}</h3>
                        <p className="text-gray-600 mb-4">{formType.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {formType.features.map((feature, featureIndex) => (
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
              Popüler Araçlarla
              <span className="text-cyan-300"> Sorunsuz Entegrasyon</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Mevcut iş akışlarınızla uyumlu çalışan güçlü entegrasyonlar
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

      {/* Security & Advanced Features Section */}
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
                Güvenlik ve
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Gelişmiş Özellikler</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Enterprise seviyesinde güvenlik önlemleri ve gelişmiş form özellikleri 
                ile profesyonel iletişim deneyimi sunun.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Shield className="w-5 h-5 text-blue-600 mr-2" />
                    Güvenlik Özellikleri
                  </h3>
                  <div className="space-y-2">
                    {securityFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Zap className="w-5 h-5 text-blue-600 mr-2" />
                    Gelişmiş Özellikler
                  </h3>
                  <div className="space-y-2">
                    {advancedFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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
                    src="https://images.unsplash.com/photo-1712145176394-614207f639ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBlbWFpbHxlbnwxfHx8fDE3NTYyOTkxMDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Customer Service Email"
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
              İletişim Formlarınızı Güçlendirmeye Hazır mısınız?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Akıllı form sistemi ile müşteri iletişiminizi profesyonelleştirin, 
              daha fazla potansiyel müşteriye ulaşın. Güçlü özellikleri keşfedin!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 shadow-lg">
                Form Oluştur
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                Örnekleri İncele
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}