import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  BookOpen, 
  Video, 
  Download,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Bookmark,
  Share2,
  Monitor,
  Smartphone,
  Settings
} from "lucide-react";
import { useState } from "react";

export function TrainingPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "Tümü", count: 45 },
    { id: "getting-started", name: "Başlangıç", count: 12 },
    { id: "website-building", name: "Site Oluşturma", count: 15 },
    { id: "customization", name: "Özelleştirme", count: 10 },
    { id: "seo", name: "SEO & Pazarlama", count: 8 }
  ];

  const featuredCourses = [
    {
      id: 1,
      title: "Aygıt Technologies'e Giriş",
      description: "Platform tanıtımı ve temel özellikler",
      duration: "45 dk",
      lessons: 8,
      level: "Başlangıç",
      thumbnail: "🚀",
      rating: 4.9,
      students: 1250,
      category: "getting-started"
    },
    {
      id: 2,
      title: "Modern Web Sitesi Oluşturma",
      description: "Sıfırdan profesyonel web sitesi kurma",
      duration: "2.5 saat",
      lessons: 15,
      level: "Orta",
      thumbnail: "🌐",
      rating: 4.8,
      students: 890,
      category: "website-building"
    },
    {
      id: 3,
      title: "Gelişmiş Tasarım Teknikleri",
      description: "Custom CSS ve advanced styling",
      duration: "3 saat",
      lessons: 20,
      level: "İleri",
      thumbnail: "🎨",
      rating: 4.7,
      students: 650,
      category: "customization"
    },
    {
      id: 4,
      title: "SEO Optimizasyonu",
      description: "Google'da üst sıralarda yer almak",
      duration: "1.5 saat",
      lessons: 12,
      level: "Orta",
      thumbnail: "📈",
      rating: 4.9,
      students: 720,
      category: "seo"
    }
  ];

  const quickTutorials = [
    {
      title: "Logo Yükleme",
      duration: "3 dk",
      views: "15K",
      thumbnail: "📷"
    },
    {
      title: "Menü Düzenleme",
      duration: "5 dk",
      views: "12K",
      thumbnail: "📋"
    },
    {
      title: "İletişim Formu Ekleme",
      duration: "4 dk",
      views: "8K",
      thumbnail: "📝"
    },
    {
      title: "Sosyal Medya Linkleri",
      duration: "2 dk",
      views: "10K",
      thumbnail: "🔗"
    }
  ];

  const learningPaths = [
    {
      title: "Başlangıç Rehberi",
      description: "Platform tanıtımından ilk sitenizi yayınlamaya kadar",
      courses: 5,
      duration: "3 saat",
      color: "from-blue-500 to-cyan-500",
      icon: BookOpen
    },
    {
      title: "Profesyonel Geliştirici",
      description: "Gelişmiş özellikler ve özelleştirme teknikleri",
      courses: 8,
      duration: "6 saat",
      color: "from-purple-500 to-indigo-500",
      icon: Settings
    },
    {
      title: "Dijital Pazarlama",
      description: "SEO, analytics ve online pazarlama stratejileri",
      courses: 6,
      duration: "4 saat",
      color: "from-green-500 to-emerald-500",
      icon: Monitor
    }
  ];

  const filteredCourses = featuredCourses.filter(course => {
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
                <Video className="w-4 h-4 mr-2" />
                Video Eğitimler
              </Badge>
              <h1 className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                Adım Adım
                <br />Öğrenin
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Aygıt Technologies platformunu kullanarak profesyonel web siteleri 
                oluşturmayı video eğitimlerle öğrenin.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3">
                  <Play className="w-5 h-5 mr-2" />
                  Eğitimlere Başla
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                  <Download className="w-5 h-5 mr-2" />
                  Mobil App İndir
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Eğitim ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="whitespace-nowrap"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Öğrenme Yolları
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hedeflerinize göre özel olarak tasarlanmış eğitim programları
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${path.color}`}></div>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${path.color} rounded-xl flex items-center justify-center`}>
                        <path.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{path.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span>{path.courses} kurs</span>
                          <span>{path.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{path.description}</p>
                    <Button className="w-full">
                      Öğrenme Yolunu Başlat
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Öne Çıkan Kurslar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En popüler ve kapsamlı video eğitim serilerimiz
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-6xl">{course.thumbnail}</span>
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button size="lg" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                          <Play className="w-6 h-6" />
                        </Button>
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-white/90 text-gray-900">
                      {course.level}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                        <CardDescription className="text-gray-600">{course.description}</CardDescription>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <Video className="w-4 h-4 mr-1" />
                        {course.lessons} ders
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {course.students}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="font-medium">{course.rating}</span>
                      </div>
                      <Button>
                        Kursa Başla
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Tutorials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Hızlı Öğreticiler
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kısa sürede öğrenebileceğiniz pratik ipuçları
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickTutorials.map((tutorial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                        <span className="text-2xl">{tutorial.thumbnail}</span>
                      </div>
                      <h3 className="font-semibold mb-2">{tutorial.title}</h3>
                      <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                        <span>{tutorial.duration}</span>
                        <span>{tutorial.views} izlenme</span>
                      </div>
                      <Button variant="ghost" size="sm" className="mt-3 group-hover:bg-blue-50">
                        <Play className="w-4 h-4 mr-2" />
                        İzle
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
              Öğrenmeye Bugün Başlayın
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Tüm video eğitimlerimize sınırsız erişim sağlayın ve uzman desteği alın.
              İlk 7 gün ücretsiz deneme fırsatını kaçırmayın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3">
                <Play className="w-5 h-5 mr-2" />
                7 Gün Ücretsiz Dene
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                <Smartphone className="w-5 h-5 mr-2" />
                Mobil App İndir
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}