// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";

// TYPE OVERRIDE - Fix EmailMarketingPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  Mail,
  Users,
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
  RefreshCw
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import React from "react";

const features = [
  {
    icon: Mail,
    title: "Otomatik E-mail Kampanyaları",
    description: "Müşteri davranışlarına göre otomatik tetiklenen e-mail kampanyaları oluşturun."
  },
  {
    icon: Users,
    title: "Müşteri Segmentasyonu",
    description: "Müşterilerinizi demografik, davranışsal ve coğrafi kriterlere göre segmentlere ayırın."
  },
  {
    icon: BarChart3,
    title: "Detaylı Analiz Raporları",
    description: "Açılma oranları, tıklanma oranları ve dönüşüm verilerini detaylı olarak izleyin."
  },
  {
    icon: Target,
    title: "Kişiselleştirme",
    description: "Her müşteri için özelleştirilmiş içerik ve ürün önerileri sunun."
  },
  {
    icon: Clock,
    title: "Zamanlanmış Gönderim",
    description: "E-maillerinizi en etkili zamanlarda gönderilmek üzere programlayın."
  },
  {
    icon: Zap,
    title: "A/B Test Özelliği",
    description: "Farklı e-mail versiyonlarını test ederek en yüksek performansı elde edin."
  }
];

const stats = [
  { label: "E-mail Gönderim Başarı Oranı", value: "%99.2", icon: CheckCircle },
  { label: "Ortalama Açılma Oranı", value: "%35.8", icon: Eye },
  { label: "Ortalama Tıklanma Oranı", value: "%8.4", icon: MousePointer },
  { label: "Dönüşüm Artış Oranı", value: "%127", icon: TrendingUp }
];

const templates = [
  {
    name: "Hoş Geldin Serisi",
    description: "Yeni müşteriler için 5 aşamalı hoş geldin e-mail serisi",
    usage: "2,847 işletme kullanıyor",
    category: "Onboarding"
  },
  {
    name: "Terk Edilmiş Sepet",
    description: "Sepetini terk eden müşteriler için hatırlatma kampanyası",
    usage: "1,923 işletme kullanıyor", 
    category: "E-ticaret"
  },
  {
    name: "Müşteri Doğum Günü",
    description: "Kişiselleştirilmiş doğum günü kutlama e-maili",
    usage: "3,156 işletme kullanıyor",
    category: "Kişisel"
  },
  {
    name: "Ürün Tanıtım",
    description: "Yeni ürün ve hizmet duyuru kampanyası",
    usage: "4,521 işletme kullanıyor",
    category: "Pazarlama"
  }
];



export function EmailMarketingPage() {
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
                <Mail className="w-4 h-4" />
                <span className="font-medium">E-mail Pazarlama Çözümleri</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Akıllı E-mail 
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Pazarlama</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Müşterilerinizle güçlü bağlar kurun, satışlarınızı artırın. Otomatik kampanyalar, 
                kişiselleştirme ve detaylı analizlerle e-mail pazarlama stratejinizi güçlendirin.
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
                  <span className="text-gray-600">30 gün ücretsiz deneme</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">GDPR uyumlu</span>
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
                    src="https://images.unsplash.com/photo-1686061594183-8c864f508b00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMG1hcmtldGluZyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTYyOTgzODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="E-mail Pazarlama Dashboard"
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
                    <div className="font-semibold text-gray-900">+127% ROI</div>
                    <div className="text-sm text-gray-500">Bu ay</div>
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
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">98.5%</div>
                    <div className="text-sm text-gray-500">Teslimat oranı</div>
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
              Rakamlarla E-mail 
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Pazarlama</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Müşterilerimizin elde ettiği ortalama performans metrikleri
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
              Güçlü E-mail Pazarlama
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern e-mail pazarlama stratejiniz için ihtiyacınız olan tüm araçlar
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

      {/* Templates Section */}
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
              Hazır E-mail
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Şablonları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesyonel e-mail kampanyalarınızı dakikalar içinde oluşturun
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50 group">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        {template.category}
                      </Badge>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{template.name}</h3>
                    <p className="text-gray-600 mb-4">{template.description}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{template.usage}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl mb-6">
                Gelişmiş Otomasyon ve
                <span className="text-cyan-300"> Kişiselleştirme</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Yapay zeka destekli kişiselleştirme ve davranış bazlı otomasyon ile 
                müşterilerinize en doğru mesajı en doğru zamanda iletin.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-blue-100">Yapay zeka destekli içerik önerileri</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-blue-100">Davranış bazlı otomatik tetikleyiciler</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-blue-100">Dinamik içerik kişiselleştirmesi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-blue-100">Çok kanallı kampanya entegrasyonu</span>
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
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1635769429173-3ccc5022939f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBlbWFpbCUyMGNhbXBhaWduJTIwZGVzaWdufGVufDF8fHx8MTc1NjI5ODM4OXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="E-mail Campaign Design"
                  className="w-full h-auto rounded-lg"
                />
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
              E-mail Pazarlama Yolculuğunuza Bugün Başlayın
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Müşterilerinizle güçlü bağlar kurun, satışlarınızı artırın. 
              Profesyonel e-mail pazarlama çözümlerimizi keşfedin!
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