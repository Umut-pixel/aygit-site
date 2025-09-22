// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion, useInView } from "../../components/FramerMotionSafe";

// TYPE OVERRIDE - Fix ModernThemesPage motion.div issues
const MotionDiv = motion.div as any;
import { useRef, useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { 
  CheckCircle, 
  ArrowRight,
  Palette,
  Smartphone,
  Search,
  Zap,
  Settings,
  Eye,
  Download,
  Play,
  Star,
  Filter,
  Grid,
  Layout,
  X
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { useContactCallbackForm } from "../../components/ContactCallbackForm";
import React from "react";

interface Theme {
  id: number;
  name: string;
  category: string;
  image: string;
  preview: string;
  rating: number;
  downloads: string;
  price: string;
  features: string[];
  popular: boolean;
}

const themeCategories = [
  {
    id: "all",
    name: "Tümü",
    count: 150
  },
  {
    id: "business",
    name: "İş & Kurumsal",
    count: 45
  },
  {
    id: "ecommerce",
    name: "E-ticaret",
    count: 35
  },
  {
    id: "portfolio",
    name: "Portföy",
    count: 25
  },
  {
    id: "blog",
    name: "Blog & Haber",
    count: 20
  },
  {
    id: "restaurant",
    name: "Restoran & Cafe",
    count: 15
  },
  {
    id: "health",
    name: "Sağlık & Tıp",
    count: 10
  }
];

const featuredThemes: Theme[] = [
  {
    id: 1,
    name: "Corporate Pro",
    category: "İş & Kurumsal",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NjA0MTI0NHww&ixlib=rb-4.1.0&q=80&w=800",
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NjA0MTI0NHww&ixlib=rb-4.1.0&q=80&w=1200",
    rating: 4.9,
    downloads: "2.1k",
    price: "Ücretsiz",
    features: ["Responsive", "SEO Optimize", "1-Click Setup"],
    popular: true
  },
  {
    id: 2,
    name: "E-Shop Modern",
    category: "E-ticaret",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NjA0MTI0NHww&ixlib=rb-4.1.0&q=80&w=800",
    preview: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NjA0MTI0NHww&ixlib=rb-4.1.0&q=80&w=1200",
    rating: 4.8,
    downloads: "1.8k",
    price: "₺199",
    features: ["WooCommerce", "Payment Integration", "Mobile First"],
    popular: false
  },
  {
    id: 3,
    name: "Creative Portfolio",
    category: "Portföy",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NjA0MTI0NHww&ixlib=rb-4.1.0&q=80&w=800",
    preview: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NjA0MTI0NHww&ixlib=rb-4.1.0&q=80&w=1200",
    rating: 4.7,
    downloads: "1.5k",
    price: "₺299",
    features: ["Gallery System", "Animation Effects", "Dark Mode"],
    popular: false
  },
  {
    id: 4,
    name: "Restaurant Deluxe",
    category: "Restoran & Cafe",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTYwNDEyNDR8MA&ixlib=rb-4.1.0&q=80&w=800",
    preview: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTYwNDEyNDR8MA&ixlib=rb-4.1.0&q=80&w=1200",
    rating: 4.9,
    downloads: "950",
    price: "₺399",
    features: ["Menu System", "Reservation Form", "Location Map"],
    popular: false
  },
  {
    id: 5,
    name: "Health Care Plus",
    category: "Sağlık & Tıp",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTYwNDEyNDR8MA&ixlib=rb-4.1.0&q=80&w=800",
    preview: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTYwNDEyNDR8MA&ixlib=rb-4.1.0&q=80&w=1200",
    rating: 4.6,
    downloads: "780",
    price: "₺499",
    features: ["Appointment System", "Patient Portal", "HIPAA Compliant"],
    popular: false
  },
  {
    id: 6,
    name: "News Blog Pro",
    category: "Blog & Haber",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYmxvZyUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzU2MDQxMjQ0fDA&ixlib=rb-4.1.0&q=80&w=800",
    preview: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYmxvZyUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzU2MDQxMjQ0fDA&ixlib=rb-4.1.0&q=80&w=1200",
    rating: 4.8,
    downloads: "1.2k",
    price: "₺349",
    features: ["Article System", "Comment System", "Social Share"],
    popular: false
  }
];

const features = [
  {
    icon: Palette,
    title: "Sınırsız Özelleştirme",
    description: "Renk paletinden tipografiye, her detayı markanıza uygun şekilde düzenleyin."
  },
  {
    icon: Smartphone,
    title: "Mobil Öncelikli Tasarım",
    description: "Tüm temalarımız mobil cihazlarda mükemmel performans gösterir."
  },
  {
    icon: Zap,
    title: "1-Dakika Kurulum",
    description: "Tek tıkla tema kurulumu ve anında yayına alma imkanı."
  },
  {
    icon: Search,
    title: "SEO Optimize",
    description: "Arama motorları için optimize edilmiş, hızlı yüklenen temalar."
  },
  {
    icon: Settings,
    title: "Kolay Yönetim",
    description: "Drag & drop editör ile kod bilmeden sayfalarınızı düzenleyin."
  },
  {
    icon: Eye,
    title: "Canlı Önizleme",
    description: "Değişikliklerinizi gerçek zamanlı olarak görün ve test edin."
  }
];

export function ModernThemesPage() {
  const heroRef = useRef(null);
  const themesRef = useRef(null);
  const featuresRef = useRef(null);
  
  const heroInView = useInView(heroRef);
  const themesInView = useInView(themesRef);
  const featuresInView = useInView(featuresRef);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [previewTheme, setPreviewTheme] = useState<Theme | null>(null);

  const { openForm, CallbackFormComponent } = useContactCallbackForm();

  const filteredThemes = selectedCategory === "all" 
    ? featuredThemes 
    : featuredThemes.filter(theme => 
        theme.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-white">
      {/* Header Spacer */}
      <div className="h-32"></div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <Badge className="mb-6 bg-purple-500/20 text-purple-200 border-purple-400/30">
                <Palette className="w-4 h-4 mr-2" />
                Modern Tema Kütüphanesi
              </Badge>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Modern
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
                  {" "}Tema Seçenekleri
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                150+ profesyonel tema arasından sektörünüze uygun olanını seçin. 
                Tek tıkla kurulum, sınırsız özelleştirme ve anında yayına alma imkanı.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 px-8 py-4">
                  <span>Temaları Keşfet</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Canlı Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">150+</div>
                  <div className="text-sm text-blue-200">Premium Tema</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">7</div>
                  <div className="text-sm text-blue-200">Farklı Kategori</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-sm text-blue-200">Destek</div>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <MotionDiv
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
                    alt="Corporate Theme"
                    className="w-full rounded-lg mb-2"
                  />
                  <div className="text-white text-sm font-medium">Corporate Pro</div>
                </MotionDiv>
                
                <MotionDiv
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 mt-8"
                >
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=300&h=200&fit=crop"
                    alt="E-commerce Theme"
                    className="w-full rounded-lg mb-2"
                  />
                  <div className="text-white text-sm font-medium">E-Shop Modern</div>
                </MotionDiv>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span className="text-sm font-medium">1-Click Install</span>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Theme Gallery Section */}
      <section ref={themesRef} className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={themesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200">
              Tema Galerisi
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Sektörünüze Uygun
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {" "}Temayı Seçin
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesyonel tasarımcılarımız tarafından özenle hazırlanmış, 
              sektörel ihtiyaçlara özel tema koleksiyonumuz.
            </p>
          </MotionDiv>

          {/* Category Filter */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={themesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {themeCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-80">({category.count})</span>
              </button>
            ))}
          </MotionDiv>

          {/* Theme Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredThemes.map((theme, index) => (
              <MotionDiv
                key={theme.id}
                initial={{ opacity: 0, y: 30 }}
                animate={themesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <div className="relative">
                    {theme.popular && (
                      <div className="absolute top-4 left-4 z-10">
                        <Badge className="bg-gradient-to-r from-orange-400 to-red-500 text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Popüler
                        </Badge>
                      </div>
                    )}
                    
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        {theme.price}
                      </Badge>
                    </div>

                    <div className="aspect-[4/3] overflow-hidden relative group-hover:scale-105 transition-transform duration-500">
                      <ImageWithFallback
                        src={theme.image}
                        alt={theme.name}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                          <Button 
                            size="sm" 
                            className="flex-1 bg-white text-gray-900 hover:bg-gray-100"
                            onClick={() => setPreviewTheme(theme)}
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            Önizle
                          </Button>
                          <Button size="sm" className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500">
                            <Download className="w-4 h-4 mr-2" />
                            Kullan
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{theme.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{theme.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-purple-600 border-purple-200">
                        {theme.category}
                      </Badge>
                      <span className="text-sm text-gray-500">{theme.downloads} indirme</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {theme.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>

          {/* Load More Button */}
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={themesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" className="px-8 py-4">
              Daha Fazla Tema Yükle
              <Grid className="w-5 h-5 ml-2" />
            </Button>
          </MotionDiv>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200">
              Tema Özellikleri
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Neden Modern
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {" "}Temalarımız?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Temalarımız modern web standartlarına uygun olarak tasarlanmış, 
              kullanıcı deneyimi ve performansı önceliklendiren özellikler içerir.
            </p>
          </MotionDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <MotionDiv
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </MotionDiv>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-purple-50 text-purple-700 border-purple-200">
                Özel Tasarım
              </Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Size Özel Tema
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {" "}Tasarlayalım
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Mevcut temalarımız ihtiyacınızı karşılamıyorsa, size özel tema 
                tasarımı yapabiliriz. Markanıza uygun, unique tasarım.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Palette className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Marka kimliğinize uygun tasarım</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Sınırsız revizyon hakkı</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-gray-700">7-14 gün teslimat süresi</span>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-200/50 shadow-xl"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Layout className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Özel Tema Talebi</h3>
                <p className="text-gray-600">Size özel tema tasarımı yapmak için iletişime geçin</p>
              </div>

              <Button 
                onClick={openForm}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white text-lg py-6 mb-6"
              >
                <Palette className="w-5 h-5 mr-2" />
                Özel Tema Talebi
              </Button>

              <div className="text-center text-sm text-gray-500">
                <p>Talep sonrası 24 saat içinde size özel teklif sunulur</p>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-900/20" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Hemen Başlayın
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              150+ tema arasından seçim yapın ve dakikalar içinde profesyonel web sitenizi oluşturun.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={openForm}
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4"
              >
                <Layout className="w-5 h-5 mr-2" />
                Tema Seç & Başla
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
              >
                <Play className="w-5 h-5 mr-2" />
                Canlı Demo İzle
              </Button>
            </div>
          </MotionDiv>
        </div>
      </section>

      <CallbackFormComponent />
      
      {/* Theme Preview Modal */}
      {previewTheme && (
        <ThemePreviewModal 
          theme={previewTheme} 
          onClose={() => setPreviewTheme(null)} 
        />
      )}
    </div>
  );
}

// Separate component for the modal to ensure proper type inference
interface ThemePreviewModalProps {
  theme: Theme;
  onClose: () => void;
}

function ThemePreviewModal({ theme, onClose }: ThemePreviewModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <MotionDiv
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{theme.name}</h3>
            <p className="text-gray-600">{theme.category}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <div className="aspect-video mb-6 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={theme.preview}
              alt={`${theme.name} Preview`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-medium text-gray-900">{theme.rating}</span>
              </div>
              <Badge variant="outline" className="text-purple-600 border-purple-200">
                {theme.category}
              </Badge>
              <span className="text-sm text-gray-500">{theme.downloads} indirme</span>
            </div>
            
            <div className="text-2xl font-bold text-purple-600">{theme.price}</div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {theme.features.map((feature, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <Button 
              className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
              size="lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Bu Temayı Kullan
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open(theme.preview, '_blank')}
            >
              <Eye className="w-5 h-5 mr-2" />
              Canlı Önizleme
            </Button>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
}