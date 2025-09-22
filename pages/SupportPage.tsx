import { motion } from "framer-motion";

// TypeScript compatibility fix for motion components
const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;
import { MessageCircle, Phone, Mail, Book, Video, Users, Clock, CheckCircle, ArrowRight, Search, FileText, Headphones } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const supportChannels = [
  {
    icon: MessageCircle,
    title: "Canlı Destek",
    description: "7/24 canlı chat desteği ile anında yardım alın",
    status: "Çevrimiçi",
    responseTime: "Ortalama 2 dakika",
    action: "Chat Başlat",
    color: "bg-green-500"
  },
  {
    icon: Phone,
    title: "Telefon Desteği",
    description: "Uzman ekibimizle telefonla görüşün",
    status: "09:00 - 18:00",
    responseTime: "Anında bağlantı",
    action: "Ara: 0850 XXX XX XX",
    color: "bg-blue-500"
  },
  {
    icon: Mail,
    title: "Email Desteği",
    description: "Detaylı sorularınız için email gönderin",
    status: "Her zaman aktif",
    responseTime: "24 saat içinde",
    action: "Email Gönder",
    color: "bg-purple-500"
  }
];

const quickHelp = [
  {
    icon: Book,
    title: "Dokümantasyon",
    description: "Kapsamlı kullanım kılavuzu ve API dokümantasyonu",
    link: "#"
  },
  {
    icon: Video,
    title: "Video Eğitimler",
    description: "Adım adım video eğitimlerle platformu öğrenin",
    link: "#"
  },
  {
    icon: Users,
    title: "Topluluk Forumu",
    description: "Diğer kullanıcılarla deneyim paylaşın",
    link: "#"
  },
  {
    icon: FileText,
    title: "SSS",
    description: "Sıkça sorulan soruların yanıtları",
    link: "#"
  }
];

const popularTopics = [
  "Ürün ekleme ve düzenleme",
  "Ödeme sistemi kurulumu",
  "Tema özelleştirme",
  "SEO ayarları",
  "Kargo entegrasyonu",
  "Mobil uygulama",
  "Raporlar ve analitik",
  "Güvenlik ayarları"
];

const faqs = [
  {
    question: "Platform nasıl kurulur?",
    answer: "Kurulum işlemi tamamen otomatiktir. Kaydolduktan sonra 5 dakika içinde mağazanız hazır olur. Detaylı kurulum kılavuzumuzu takip edebilirsiniz."
  },
  {
    question: "Ödeme sistemleri nasıl entegre edilir?",
    answer: "Türkiye'nin tüm bankalarıyla entegrasyonu destekliyoruz. Yönetim panelinden birkaç tıkla ödeme sistemlerinizi aktif edebilirsiniz."
  },
  {
    question: "Mobil uygulamam var mı?",
    answer: "Evet, tüm paketlerimizde mobil uyumlu responsive tasarım bulunur. Profesyonel ve Kurumsal paketlerde özel mobil uygulama da mevcuttur."
  },
  {
    question: "Veri güvenliği nasıl sağlanır?",
    answer: "SSL sertifikası, düzenli yedeklemeler ve güvenlik güncellemeleri ile verilerinizi koruyoruz. SOC 2 ve ISO 27001 sertifikalarımız mevcuttur."
  }
];

export function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Spacer */}
      <div className="h-32"></div>
      
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <MotionDiv
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full mb-6 border border-blue-500/20"
          >
            <Headphones className="w-4 h-4" />
            <span className="font-medium">7/24 Destek</span>
          </MotionDiv>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Size Nasıl
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Yardımcı</span>
            <br />Olabiliriz?
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Uzman destek ekibimiz size her zaman yardımcı olmaya hazır. 
            Sorunlarınızı hızlıca çözmek için en uygun destek kanalını seçin.
          </p>

          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Yardıma mı ihtiyacınız var? Arayın..." 
              className="pl-12 pr-4 py-4 text-lg rounded-xl border-gray-200 focus:border-blue-500"
            />
            <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700">
              Ara
            </Button>
          </div>
        </MotionDiv>

        {/* Support Channels */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {supportChannels.map((channel, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
            >
              <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${channel.color} rounded-2xl mb-6`}>
                  <channel.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{channel.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{channel.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{channel.status}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{channel.responseTime}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-3">
                  {channel.action}
                </Button>
              </Card>
            </MotionDiv>
          ))}
        </MotionDiv>

        {/* Quick Help */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hızlı Yardım</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kendi kendine öğrenme kaynaklarımızla sorunlarınızı hızlıca çözün
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickHelp.map((item, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/10 rounded-lg mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <div className="flex items-center justify-center text-blue-600 hover:text-blue-700">
                    <span className="text-sm font-medium">Keşfet</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <MotionDiv
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="lg:col-span-2"
          >
            <Card className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bize Yazın</h3>
                <p className="text-gray-600">Detaylı sorularınız için form doldurarak bize ulaşın</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Adınız Soyadınız
                    </label>
                    <Input placeholder="Adınız Soyadınız" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Adresiniz
                    </label>
                    <Input type="email" placeholder="ornek@email.com" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Konu
                  </label>
                  <Input placeholder="Sorunuzun konusu" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesajınız
                  </label>
                  <Textarea 
                    placeholder="Lütfen sorunuzu detaylı bir şekilde açıklayın..."
                    rows={6}
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3">
                  Mesaj Gönder
                </Button>
              </form>
            </Card>
          </MotionDiv>

          {/* Sidebar */}
          <MotionDiv
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="space-y-6"
          >
            {/* Popular Topics */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">Popüler Konular</h3>
              <div className="space-y-3">
                {popularTopics.map((topic, index) => (
                  <MotionButton
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    className="w-full text-left p-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors text-sm"
                  >
                    {topic}
                  </MotionButton>
                ))}
              </div>
            </Card>

            {/* Status */}
            <Card className="p-6 bg-green-50 border-green-200">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="font-bold text-gray-900">Sistem Durumu</h3>
              </div>
              <p className="text-green-700 text-sm mb-4">
                Tüm sistemler normal çalışıyor
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">API</span>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-green-600">Çalışıyor</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Ödemeler</span>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-green-600">Çalışıyor</span>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Database</span>
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-green-600">Çalışıyor</span>
                  </div>
                </div>
              </div>
            </Card>
          </MotionDiv>
        </div>

        {/* FAQ Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sıkça Sorulan Sorular</h2>
            <p className="text-gray-600">En çok merak edilen konuların yanıtları</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1, duration: 0.4 }}
              >
                <Card className="p-6 h-full">
                  <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </Card>
              </MotionDiv>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              Tüm SSS'leri Görüntüle
            </Button>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}