import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { 
  FileText, 
  Search, 
  BookOpen, 
  Code, 
  Settings, 
  Layers,
  ArrowRight,
  Download,
  Star,
  Clock,
  Users,
  ExternalLink,
  Copy,
  CheckCircle,
  Zap,
  Shield,
  Smartphone
} from "lucide-react";
import { useState } from "react";

export function DocsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSection, setSelectedSection] = useState("getting-started");

  const documentationSections = [
    {
      id: "getting-started",
      title: "Başlangıç",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
      articles: [
        { title: "Platform Tanıtımı", readTime: "5 dk", popular: true },
        { title: "İlk Web Sitenizi Oluşturun", readTime: "10 dk", popular: true },
        { title: "Dashboard Kullanımı", readTime: "7 dk", popular: false },
        { title: "Domain Bağlama", readTime: "8 dk", popular: true },
      ]
    },
    {
      id: "design",
      title: "Tasarım & Düzenleme",
      icon: Layers,
      color: "from-purple-500 to-indigo-500",
      articles: [
        { title: "Tema Seçimi ve Özelleştirme", readTime: "12 dk", popular: true },
        { title: "Page Builder Kullanımı", readTime: "15 dk", popular: true },
        { title: "CSS Özelleştirmeleri", readTime: "20 dk", popular: false },
        { title: "Responsive Tasarım", readTime: "18 dk", popular: true },
      ]
    },
    {
      id: "features",
      title: "Özellikler",
      icon: Settings,
      color: "from-green-500 to-emerald-500",
      articles: [
        { title: "SEO Ayarları", readTime: "10 dk", popular: true },
        { title: "Analytics Entegrasyonu", readTime: "8 dk", popular: true },
        { title: "İletişim Formları", readTime: "6 dk", popular: false },
        { title: "E-commerce Kurulumu", readTime: "25 dk", popular: true },
      ]
    },
    {
      id: "api",
      title: "API & Entegrasyonlar",
      icon: Code,
      color: "from-orange-500 to-red-500",
      articles: [
        { title: "API Dokümantasyonu", readTime: "15 dk", popular: false },
        { title: "Webhook Kullanımı", readTime: "12 dk", popular: false },
        { title: "Third-party Entegrasyonlar", readTime: "20 dk", popular: true },
        { title: "Custom Kodlar", readTime: "30 dk", popular: false },
      ]
    }
  ];

  const popularArticles = [
    {
      title: "İlk Web Sitenizi 10 Dakikada Oluşturun",
      description: "Baştan sona adım adım web sitesi oluşturma rehberi",
      category: "Başlangıç",
      readTime: "10 dk",
      views: "15.2K",
      rating: 4.9
    },
    {
      title: "SEO Optimizasyonu İçin Tam Rehber",
      description: "Google'da üst sıralarda yer almak için SEO ipuçları",
      category: "Özellikler",
      readTime: "18 dk",
      views: "12.8K",
      rating: 4.8
    },
    {
      title: "Tema Özelleştirme ve CSS Düzenlemeleri",
      description: "Temanızı istediğiniz gibi özelleştirme teknikleri",
      category: "Tasarım",
      readTime: "25 dk",
      views: "9.4K",
      rating: 4.7
    }
  ];

  const quickLinks = [
    {
      title: "API Referansı",
      description: "Tüm API endpoint'leri ve örnekleri",
      icon: Code,
      color: "text-blue-600 bg-blue-50"
    },
    {
      title: "Troubleshooting",
      description: "Sık karşılaşılan sorunlar ve çözümleri",
      icon: Shield,
      color: "text-red-600 bg-red-50"
    },
    {
      title: "Video Eğitimler",
      description: "Görsel öğrenme için video rehberler",
      icon: Zap,
      color: "text-purple-600 bg-purple-50"
    },
    {
      title: "Mobil Optimizasyon",
      description: "Mobil cihazlar için optimizasyon",
      icon: Smartphone,
      color: "text-green-600 bg-green-50"
    }
  ];

  const codeExample = `// Web sitenizdeki herhangi bir sayfaya özel kod ekleyin
function initializeWebsite() {
  // Google Analytics entegrasyonu
  gtag('config', 'GA_MEASUREMENT_ID', {
    page_title: document.title,
    page_location: window.location.href
  });
  
  // Custom form validation
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', handleFormSubmit);
  });
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', initializeWebsite);`;

  const getCurrentSection = () => {
    return documentationSections.find(section => section.id === selectedSection);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Spacer */}
      <div className="h-32"></div>
      
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
                <FileText className="w-4 h-4 mr-2" />
                Dokümantasyon
              </Badge>
              <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Her Şey Burada
                <br />Açıklanmış
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Aygıt Technologies platformunu etkili kullanmak için ihtiyacınız olan 
                tüm bilgiler detaylı dokümanlarda.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Dokümanlarda ara... (örn: SEO, theme, API)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:bg-white/20 focus:border-white/40 transition-all"
                />
                <Button className="absolute right-2 top-2 bg-white text-blue-600 hover:bg-blue-50">
                  <Search className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 rounded-xl ${link.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform`}>
                      <link.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{link.title}</h3>
                    <p className="text-sm text-gray-600">{link.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Popüler Makaleler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En çok okunan ve faydalı bulunan dokümantasyon makaleleri
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        {article.rating}
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription>{article.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {article.views}
                      </div>
                    </div>
                    <Button variant="ghost" className="w-full mt-4 group-hover:bg-blue-50">
                      Makaleyi Oku
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Dokümantasyon Kategorileri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Konuya göre organize edilmiş detaylı rehberler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {documentationSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 ${
                    selectedSection === section.id 
                      ? 'ring-2 ring-blue-500 shadow-lg' 
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedSection(section.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold">{section.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {section.articles.length} makale
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Selected Section Articles */}
          <motion.div
            key={selectedSection}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${getCurrentSection()?.color} rounded-xl flex items-center justify-center`}>
                  {(() => {
                    const section = getCurrentSection();
                    const IconComponent = section?.icon;
                    return IconComponent ? <IconComponent className="w-6 h-6 text-white" /> : null;
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{getCurrentSection()?.title}</h3>
                  <p className="text-gray-600">Bu kategorideki tüm makaleler</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {getCurrentSection()?.articles.map((article, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer group"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h4>
                        {article.popular && (
                          <Badge variant="secondary" className="text-xs">
                            Popüler
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{article.readTime} okuma</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Code Example */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Kod Örnekleri ve API
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Geliştiriciler için detaylı kod örnekleri ve API dokümantasyonu
            </p>
          </motion.div>

          <Card className="max-w-4xl mx-auto overflow-hidden">
            <CardHeader className="bg-gray-900 text-white">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  JavaScript Entegrasyon Örneği
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-white hover:bg-gray-800">
                  <Copy className="w-4 h-4 mr-2" />
                  Kopyala
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <pre className="bg-gray-900 text-green-400 p-6 overflow-x-auto text-sm">
                <code>{codeExample}</code>
              </pre>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <ExternalLink className="w-4 h-4 mr-2" />
              Tam API Dokümantasyonu
            </Button>
          </div>
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
              Aradığınızı Bulamadınız mı?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Destek ekibimiz size yardımcı olmaktan mutluluk duyar. 
              Teknik sorularınız için canlı destek hattımızı kullanın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3">
                <Users className="w-5 h-5 mr-2" />
                Canlı Destek
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                <Download className="w-5 h-5 mr-2" />
                PDF İndir
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}