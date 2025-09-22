// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";

// TYPE OVERRIDE - Fix LiveSupportPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  MessageSquare,
  Headphones,
  Clock,
  Users,
  Target,
  Zap,
  Shield,
  Settings,
  CheckCircle,
  ArrowRight,
  Calendar,
  BarChart3,
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
  Activity,
  Briefcase,
  Bot,
  Video,
  Mic,
  FileImage,
  ThumbsUp
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import React from "react";

const features = [
  {
    icon: MessageSquare,
    title: "Canlı Sohbet Widget'ı",
    description: "Web sitenize kolayca entegre edilen, özelleştirilebilir canlı sohbet widget'ı ile ziyaretçilerinizle anında iletişim kurun."
  },
  {
    icon: Clock,
    title: "7/24 Destek Sistemi",
    description: "Müşterileriniz günün her saati size ulaşabilsin. Mesai saatleri dışında otomatik mesaj sistemleri ile yanıt verin."
  },
  {
    icon: Users,
    title: "Çoklu Operatör Yönetimi",
    description: "Birden fazla destek temsilcisi aynı anda müşterilerle konuşabilir. Yoğun dönemlerde işbirliği yapın."
  },
  {
    icon: Bot,
    title: "Yapay Zeka Destekli Bot",
    description: "Sık sorulan sorulara otomatik yanıt veren akıllı bot ile müşteri memnuniyetini artırın, iş yükünü azaltın."
  },
  {
    icon: BarChart3,
    title: "Detaylı Raporlama",
    description: "Yanıt süreleri, müşteri memnuniyeti, konuşma geçmişi gibi metrikleri analiz edin ve hizmet kalitenizi iyileştirin."
  },
  {
    icon: Shield,
    title: "Güvenli İletişim",
    description: "Tüm konuşmalar SSL ile şifrelenir. Müşteri bilgileri ve sohbet geçmişi güvenle saklanır."
  }
];

const stats = [
  { label: "Ortalama Yanıt Süresi", value: "< 30 saniye", icon: Clock },
  { label: "Müşteri Memnuniyeti", value: "4.9/5", icon: Heart },
  { label: "Çözüm Oranı", value: "%94", icon: CheckCircle },
  { label: "Günlük Sohbet Sayısı", value: "10,000+", icon: MessageSquare }
];

const channels = [
  {
    title: "Canlı Sohbet",
    description: "Web sitesi üzerinden anlık mesajlaşma",
    features: ["Gerçek zamanlı iletişim", "Dosya paylaşımı", "Emoji desteği", "Sohbet geçmişi"],
    icon: MessageSquare
  },
  {
    title: "E-mail Desteği", 
    description: "Detaylı e-mail destegi sistemi",
    features: ["Otomatik bilet sistemi", "E-mail şablonları", "Takip numarası", "CC/BCC desteği"],
    icon: Mail
  },
  {
    title: "Telefon Desteği",
    description: "Sesli görüşme ve çağrı yönetimi",
    features: ["VoIP entegrasyonu", "Çağrı kayıtları", "Telefon menüsü", "Çağrı yönlendirme"],
    icon: Phone
  },
  {
    title: "Video Görüşme",
    description: "Karmaşık sorunlar için video desteği",
    features: ["HD video kalitesi", "Ekran paylaşımı", "Kayıt özelliği", "Randevu sistemi"],
    icon: Video
  }
];

const integrations = [
  { name: "WhatsApp Business", icon: MessageSquare, description: "WhatsApp üzerinden müşteri desteği" },
  { name: "Facebook Messenger", icon: Send, description: "Facebook sayfanızdan mesaj alın" },
  { name: "Telegram", icon: MessageSquare, description: "Telegram bot entegrasyonu" },
  { name: "Instagram Direct", icon: Smartphone, description: "Instagram mesajlarını yönetin" },
  { name: "CRM Sistemleri", icon: Database, description: "Müşteri verilerinizle entegrasyon" },
  { name: "E-ticaret Platformları", icon: Globe, description: "Shopify, WooCommerce desteği" }
];

const automationFeatures = [
  "Sık sorulan sorular için otomatik yanıtlar",
  "Müşteri bilgilerini otomatik toplama",
  "Konuşmaları uygun departmana yönlendirme",
  "Müşteri memnuniyet anketi gönderimi",
  "Takip e-maili gönderimi",
  "Çalışma saatleri dışı otomatik mesajlar"
];

export function LiveSupportPage() {
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
                <Headphones className="w-4 h-4" />
                <span className="font-medium">Canlı Destek Sistemi</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                7/24 Canlı
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Müşteri Desteği</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Müşterilerinize anında yanıt verin, sorunlarını çözün, memnuniyetlerini artırın. 
                Güçlü canlı destek sistemi ile müşteri deneyimini üst seviyeye taşıyın.
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
                  <span className="text-gray-600">5 dakikada kurulum</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">SSL şifreli</span>
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
                    src="https://images.unsplash.com/photo-1725798451557-fc60db3eb6a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBsaXZlJTIwY2hhdHxlbnwxfHx8fDE3NTYyOTg3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Canlı Destek Sistemi"
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
                    <MessageSquare className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">&lt; 30sn</div>
                    <div className="text-sm text-gray-500">Yanıt süresi</div>
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
                    <Heart className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">4.9/5</div>
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
              Canlı Destek ile
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Fark Yaratın</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşterilerimizin canlı destek sistemi ile elde ettiği ortalama performans
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
              Güçlü Canlı Destek
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşteri desteği süreçlerinizi optimize edecek kapsamlı araçlar
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

      {/* Channels Section */}
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
              Çoklu İletişim
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Kanalları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşterilerinizin tercih ettiği kanallarda onlarla buluşun
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {channels.map((channel, index) => (
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
                        <channel.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{channel.title}</h3>
                        <p className="text-gray-600 mb-4">{channel.description}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {channel.features.map((feature, featureIndex) => (
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
              Popüler Platformlarla
              <span className="text-cyan-300"> Entegre Olun</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Müşterilerinizin bulunduğu her platformda onlara ulaşın
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

      {/* Automation Section */}
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
                Akıllı Otomasyon ile
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Verimliliği Artırın</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Yapay zeka destekli otomasyon özellikleri ile rutin işleri otomatikleştirin, 
                destek ekibinizin daha değerli işlere odaklanmasını sağlayın.
              </p>

              <div className="space-y-4">
                {automationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
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
                    src="https://images.unsplash.com/photo-1496152658208-d41635783718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWxwJTIwZGVzayUyMGN1c3RvbWVyJTIwc2VydmljZXxlbnwxfHx8fDE3NTYyOTg3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Help Desk Customer Service"
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
              Müşteri Desteğinizi Güçlendirmeye Hazır mısınız?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Canlı destek sistemi ile müşteri memnuniyetini artırın, sadık müşteriler kazanın. 
              Güçlü destek özellikleri ile fark yaratın!
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