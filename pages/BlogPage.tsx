import React from 'react';
import { motion } from "framer-motion";

// TypeScript compatibility fix for motion components
const MotionDiv = motion.div as any;
const MotionButton = motion.button as any;
import { Clock, User, Tag, ArrowRight, Search, TrendingUp, Lightbulb, Users, Shield } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";

const blogPosts = [
  {
    id: 1,
    title: "Kurumsal Web Altyapısında 2024 Trendleri: Neleri Takip Etmeli?",
    excerpt: "2024 yılında kurumsal web altyapısı dünyasını şekillendirecek en önemli trendleri ve bu trendlerin işletmenizde nasıl uygulanacağını keşfedin.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    category: "Trendler",
    author: "Ahmet Kaya",
    date: "15 Ocak 2024",
    readTime: "8 dk",
    featured: true,
    tags: ["Kurumsal Web", "Trendler", "2024", "Pazarlama"]
  },
  {
    id: 2,
    title: "Mobil Kurumsal Web Optimizasyonu: Performansı Artırmanın Yolları",
    excerpt: "Mobil cihazlarda mükemmel deneyim sunan kurumsal web siteleri nasıl oluşturulur? Pratik ipuçları ve stratejiler.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    category: "Optimizasyon",
    author: "Elif Demir",
    date: "12 Ocak 2024",
    readTime: "6 dk",
    featured: false,
    tags: ["Mobil", "UX", "Optimizasyon", "Performans"]
  },
  {
    id: 3,
    title: "SEO ile Kurumsal Web Sitenizi Google'da Öne Çıkarın",
    excerpt: "Kurumsal web SEO stratejileri ile organik trafiğinizi artırın ve rakiplerinizin önüne geçin. İçerik optimizasyonundan teknik SEO'ya kadar.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop",
    category: "SEO",
    author: "Can Özkan",
    date: "10 Ocak 2024",
    readTime: "10 dk",
    featured: false,
    tags: ["SEO", "Google", "Trafik", "Optimizasyon"]
  },
  {
    id: 4,
    title: "Müşteri Deneyimi: Kurumsal Web Sitelerinde Memnuniyet Nasıl Sağlanır?",
    excerpt: "Müşteri memnuniyetini artırmak ve müşteri sadakatini sağlamak için kurumsal web sitenizde uygulayabileceğiniz etkili stratejiler.",
    image: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?w=600&h=400&fit=crop",
    category: "Müşteri Deneyimi",
    author: "Zeynep Arslan",
    date: "8 Ocak 2024",
    readTime: "7 dk",
    featured: false,
    tags: ["CX", "Müşteri", "Memnuniyet", "Deneyim"]
  },
  {
    id: 5,
    title: "Kurumsal Web Güvenliği: Sitenizi ve Müşterilerinizi Koruyun",
    excerpt: "Kurumsal web sitelerinin karşılaştığı g��venlik tehditleri ve bu tehditlere karşı alınabilecek önlemler. SSL'den veri korumasına kadar.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    category: "Güvenlik",
    author: "Murat Yılmaz",
    date: "5 Ocak 2024",
    readTime: "9 dk",
    featured: false,
    tags: ["Güvenlik", "SSL", "Veri Koruma", "Güvenlik"]
  },
  {
    id: 6,
    title: "Sosyal Medya Pazarlaması ile Kurumsal Web Trafiği",
    excerpt: "Instagram, Facebook ve LinkedIn gibi platformları kullanarak kurumsal web trafiğinizi nasıl artırabilirsiniz? Sosyal medya stratejileri.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    category: "Pazarlama",
    author: "Ayşe Kara",
    date: "3 Ocak 2024",
    readTime: "5 dk",
    featured: false,
    tags: ["Sosyal Medya", "Pazarlama", "LinkedIn", "Trafik"]
  }
];

const categories = [
  { name: "Tüm Kategoriler", count: 24, icon: Tag },
  { name: "Trendler", count: 8, icon: TrendingUp },
  { name: "Optimizasyon", count: 6, icon: Lightbulb },
  { name: "SEO", count: 4, icon: Search },
  { name: "Müşteri Deneyimi", count: 3, icon: Users },
  { name: "Güvenlik", count: 2, icon: Shield },
  { name: "Pazarlama", count: 1, icon: TrendingUp }
];

export function BlogPage() {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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
            <Lightbulb className="w-4 h-4" />
            <span className="font-medium">Kurumsal Web Bilgi Merkezi</span>
          </MotionDiv>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Kurumsal Web
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Blog</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Kurumsal web altyapısı dünyasındaki en güncel gelişmeler, ipuçları ve stratejiler ile işletmenizi büyütün.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Blog yazılarında ara..." 
              className="pl-10 pr-4 py-3 rounded-xl border-gray-200 focus:border-blue-500"
            />
          </div>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Categories */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">Kategoriler</h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <MotionButton
                    key={category.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="w-full flex items-center justify-between p-2 rounded-lg hover:bg-blue-50 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <category.icon className="w-4 h-4" />
                      <span>{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                      {category.count}
                    </Badge>
                  </MotionButton>
                ))}
              </div>
            </Card>

            {/* Newsletter */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Haftalık Bülten</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Kurumsal web altyapısı dünyasındaki son gelişmeleri kaçırmayın!
                </p>
                <Input 
                  placeholder="Email adresiniz" 
                  className="mb-3"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Abone Ol
                </Button>
              </div>
            </Card>
          </MotionDiv>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {featuredPost && (
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="mb-12"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-red-500 text-white">Öne Çıkan</Badge>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <Badge variant="secondary">{featuredPost.category}</Badge>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                        {featuredPost.title}
                      </h2>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900">{featuredPost.author}</div>
                            <div className="text-sm text-gray-500">{featuredPost.date}</div>
                          </div>
                        </div>
                        
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Devamını Oku
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </MotionDiv>
            )}

            {/* Regular Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {regularPosts.map((post, index) => (
                <MotionDiv
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-gray-700">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                        <span>{post.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                            <User className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                          Oku
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </MotionDiv>
              ))}
            </div>

            {/* Load More */}
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="text-center mt-12"
            >
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3">
                Daha Fazla Yükle
              </Button>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
}