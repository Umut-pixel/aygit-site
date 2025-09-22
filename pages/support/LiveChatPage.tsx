import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { 
  MessageCircle, 
  Clock, 
  Users, 
  Star, 
  Send, 
  Phone, 
  Mail,
  Headphones,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  FileText,
  Video,
  Smartphone,
  User,
  Bot
} from "lucide-react";
import { useState } from "react";

export function LiveChatPage() {
  const [message, setMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);

  const supportChannels = [
    {
      title: "Canlı Sohbet",
      description: "Anlık destek için canlı sohbet başlatın",
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-500",
      availability: "7/24 Aktif",
      responseTime: "< 2 dakika",
      featured: true
    },
    {
      title: "Telefon Desteği",
      description: "Doğrudan telefon ile görüşme",
      icon: Phone,
      color: "from-green-500 to-emerald-500",
      availability: "09:00 - 18:00",
      responseTime: "Anında",
      featured: false
    },
    {
      title: "Email Desteği",
      description: "Detaylı sorular için email gönderin",
      icon: Mail,
      color: "from-purple-500 to-indigo-500",
      availability: "7/24 Aktif",
      responseTime: "< 4 saat",
      featured: false
    },
    {
      title: "Video Call",
      description: "Ekran paylaşımı ile teknik destek",
      icon: Video,
      color: "from-orange-500 to-red-500",
      availability: "Randevu ile",
      responseTime: "15 dakika",
      featured: false
    }
  ];

  const supportStats = [
    { label: "Ortalama Yanıt Süresi", value: "< 2 dk", icon: Clock },
    { label: "Müşteri Memnuniyeti", value: "98.5%", icon: Star },
    { label: "Çözülen Sorun Oranı", value: "94%", icon: CheckCircle },
    { label: "7/24 Aktif Destek", value: "365 gün", icon: Shield }
  ];

  const faqItems = [
    {
      question: "Web sitemi nasıl yayınlayabilirim?",
      answer: "Dashboard'dan 'Yayınla' butonuna tıklayarak sitenizi canlıya alabilirsiniz.",
      category: "Başlangıç"
    },
    {
      question: "Domain adresimi nasıl bağlarım?",
      answer: "Ayarlar > Domain bölümünden kendi domain'inizi bağlayabilirsiniz.",
      category: "Domain"
    },
    {
      question: "SEO ayarlarını nasıl yaparım?",
      answer: "Her sayfa için ayrı SEO title, description ve keywords belirleyebilirsiniz.",
      category: "SEO"
    },
    {
      question: "Ödemeler güvenli mi?",
      answer: "Tüm ödemeler SSL ile şifrelenmiş güvenli kanallardan işlenir.",
      category: "Güvenlik"
    }
  ];

  const chatMessages = [
    {
      type: "bot",
      message: "Merhaba! Aygıt Technologies destek ekibine hoş geldiniz. Size nasıl yardımcı olabilirim?",
      time: "14:23"
    },
    {
      type: "user", 
      message: "Web sitemi mobil cihazlarda düzgün görüntüleyemiyorum.",
      time: "14:24"
    },
    {
      type: "bot",
      message: "Bu durumu hemen kontrol edelim. Hangi mobil cihaz ve tarayıcı kullanıyorsunuz?",
      time: "14:24"
    }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessage("");
      }, 2000);
    }
  };

  const startChat = () => {
    setChatStarted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[length:60px_60px] animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Headphones className="w-4 h-4 mr-2" />
                Canlı Destek
              </Badge>
              <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Anında Yardım
                <br />7/24 Destek
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Uzman destek ekibimiz tüm sorularınızı yanıtlamak ve teknik problemlerinizi 
                çözmek için 7 gün 24 saat hizmetinizde.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3" onClick={startChat}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Canlı Sohbet Başlat
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                  <Phone className="w-5 h-5 mr-2" />
                  +90 (212) 555 0123
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {supportStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Destek Kanalları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Size en uygun iletişim kanalını seçin ve anında yardım alın
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                  channel.featured ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}>
                  {channel.featured && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-blue-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Önerilen
                      </Badge>
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform`}>
                      <channel.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{channel.title}</CardTitle>
                    <CardDescription>{channel.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Müsaitlik:</span>
                        <span className="text-sm font-medium text-green-600">{channel.availability}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Yanıt Süresi:</span>
                        <span className="text-sm font-medium">{channel.responseTime}</span>
                      </div>
                    </div>
                    <Button className={`w-full ${channel.featured ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'}`}>
                      {channel.title === "Canlı Sohbet" ? "Sohbet Başlat" : "İletişime Geç"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Chat Interface */}
      {chatStarted && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-white">Canlı Destek Sohbeti</CardTitle>
                        <CardDescription className="text-purple-100">Ahmet Destek Uzmanı - Çevrimiçi</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center text-green-300">
                      <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                      Aktif
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-0">
                  {/* Chat Messages */}
                  <div className="h-96 overflow-y-auto p-6 space-y-4">
                    {chatMessages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`flex items-start space-x-2 max-w-sm ${msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            msg.type === 'user' 
                              ? 'bg-blue-500 text-white' 
                              : 'bg-gray-200 text-gray-600'
                          }`}>
                            {msg.type === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                          </div>
                          <div className={`px-4 py-2 rounded-lg ${
                            msg.type === 'user'
                              ? 'bg-blue-500 text-white rounded-br-none'
                              : 'bg-gray-100 text-gray-900 rounded-bl-none'
                          }`}>
                            <p className="text-sm">{msg.message}</p>
                            <p className={`text-xs mt-1 ${msg.type === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                              {msg.time}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <Bot className="w-4 h-4 text-gray-600" />
                          </div>
                          <div className="bg-gray-100 px-4 py-2 rounded-lg rounded-bl-none">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Message Input */}
                  <div className="border-t p-4">
                    <div className="flex space-x-2">
                      <Input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Mesajınızı yazın..."
                        className="flex-1"
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <Button onClick={handleSendMessage} disabled={!message.trim()}>
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Sık Sorulan Sorular
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hızlı çözümler için en çok sorulan soruları kontrol edin
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg pr-4">{item.question}</CardTitle>
                      <Badge variant="secondary" className="text-xs">{item.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.answer}</p>
                    <Button variant="ghost" size="sm" className="mt-3 p-0 h-auto text-blue-600 hover:text-blue-700">
                      Detaylı bilgi →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Bize Ulaşın
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Özel durumlar için form doldurarak bize ulaşabilirsiniz
            </p>
          </motion.div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Destek Talebi Oluştur</CardTitle>
              <CardDescription>
                Detaylı bilgi vererek size en iyi şekilde yardımcı olmamızı sağlayın
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Ad Soyad</label>
                  <Input placeholder="Adınızı girin" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="email@example.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Konu</label>
                <Input placeholder="Sorun başlığı" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Detaylı Açıklama</label>
                <Textarea 
                  placeholder="Sorununuzu detaylı olarak açıklayın..."
                  rows={4}
                />
              </div>
              
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Send className="w-4 h-4 mr-2" />
                Destek Talebi Gönder
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl mb-6">
              7/24 Yanınızdayız
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Herhangi bir sorunuzda tereddüt etmeyin. Uzman ekibimiz size anında yardımcı olmak için burada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3">
                <MessageCircle className="w-5 h-5 mr-2" />
                Şimdi Canlı Destek Al
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                <Smartphone className="w-5 h-5 mr-2" />
                WhatsApp Destek
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}