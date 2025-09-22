// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";

// TYPE OVERRIDE - Fix SocialMediaPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { 
  Share2,
  Users,
  TrendingUp,
  MessageCircle,
  Heart,
  Eye,
  Calendar,
  BarChart3,
  Target,
  CheckCircle,
  ArrowRight,
  Settings,
  Zap,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Image,
  Video,
  Hash,
  AtSign,
  Bell,
  Star,
  ThumbsUp,
  Send,
  Filter,
  Edit,
  Camera,
  Award,
  Shield,
  Building,
  Briefcase,
  GraduationCap,
  ShoppingCart
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import React from "react";

const features = [
  {
    icon: Share2,
    title: "Sosyal Medya Yönetimi",
    description: "Tüm sosyal medya hesaplarınızı tek bir yerden yönetin ve zamanlanmış paylaşımlar yapın."
  },
  {
    icon: Calendar,
    title: "İçerik Planlama",
    description: "Sosyal medya içeriklerinizi önceden planlayın ve otomatik olarak yayınlayın."
  },
  {
    icon: BarChart3,
    title: "Performans Analizi",
    description: "Sosyal medya performansınızı detaylı raporlarla takip edin ve optimize edin."
  },
  {
    icon: MessageCircle,
    title: "Etkileşim Yönetimi",
    description: "Yorumları, mesajları ve etkileşimleri tek yerden yönetin ve yanıtlayın."
  },
  {
    icon: Target,
    title: "Hedef Kitle Analizi",
    description: "Takipçi demografilerini analiz edin ve hedef kitlenize uygun içerik üretin."
  },
  {
    icon: Image,
    title: "Görsel İçerik Editörü",
    description: "Profesyonel görseller ve videolar oluşturun, düzenleyin ve paylaşın."
  }
];

const stats = [
  { label: "Engagement Artışı", value: "%245", icon: TrendingUp },
  { label: "Follower Büyümesi", value: "%189", icon: Users },
  { label: "Reach Artışı", value: "%167", icon: Eye },
  { label: "Zaman Tasarrufu", value: "8 saat/hafta", icon: Clock }
];

const socialPlatforms = [
  {
    name: "Instagram",
    description: "Stories, posts ve reels yönetimi",
    features: ["Story scheduling", "Hashtag optimization", "Instagram Shopping", "Reels automation"],
    color: "purple",
    icon: Camera
  },
  {
    name: "Facebook",
    description: "Business ve personal hesap yönetimi",
    features: ["Page management", "Ad campaign tracking", "Event promotion", "Group management"],
    color: "blue",
    icon: ThumbsUp
  },
  {
    name: "Twitter/X",
    description: "Tweet planlama ve engagement",
    features: ["Tweet scheduling", "Thread creation", "Hashtag tracking", "Mention monitoring"],
    color: "gray",
    icon: Hash
  },
  {
    name: "LinkedIn",
    description: "Profesyonel network yönetimi",
    features: ["Company page", "Professional content", "Network building", "Lead generation"],
    color: "indigo",
    icon: Briefcase
  }
];

const contentTypes = [
  {
    type: "Görsel İçerik",
    description: "Profesyonel fotoğraf ve grafik tasarımı",
    tools: ["Canva entegrasyonu", "Stock photo library", "Brand template", "Auto-resize", "Filter effects"],
    icon: Image
  },
  {
    type: "Video İçerik",
    description: "Engaging video content creation",
    tools: ["Video editor", "Template library", "Music integration", "Auto-subtitles", "Format optimization"],
    icon: Video
  },
  {
    type: "Metin İçerikleri",
    description: "Caption ve copy writing",
    tools: ["AI copywriter", "Hashtag generator", "Emoji suggestions", "Character counter", "Language optimizer"],
    icon: Edit
  }
];

const technicalSpecs = [
  {
    title: "Multi-Platform",
    value: "15+ Platform",
    description: "Tüm popüler sosyal medya platformları"
  },
  {
    title: "Scheduling",
    value: "365 gün",
    description: "Gelecek paylaşım planlama kapasitesi"
  },
  {
    title: "Analytics",
    value: "Real-time",
    description: "Anlık performans takibi"
  },
  {
    title: "Team Access",
    value: "Unlimited",
    description: "Sınırsız ekip üyesi erişimi"
  }
];

const automationFeatures = [
  {
    title: "Auto-Publishing",
    description: "Zamanlanmış otomatik paylaşım",
    value: "%95 hassasiyet",
    icon: Send,
    color: "blue"
  },
  {
    title: "Content Curation",
    description: "AI destekli içerik önerisi",
    value: "1000+ template",
    icon: Star,
    color: "yellow"
  },
  {
    title: "Hashtag Intelligence",
    description: "Optimal hashtag önerileri",
    value: "Trending takip",
    icon: Hash,
    color: "purple"
  },
  {
    title: "Response Management",
    description: "Otomatik yanıt sistemi",
    value: "<5dk yanıt",
    icon: MessageCircle,
    color: "green"
  }
];

const industryUseCases = [
  {
    industry: "E-ticaret",
    description: "Online mağaza sosyal medya stratejisi",
    benefits: ["Product showcasing", "Customer reviews", "Shopping integrations", "Influencer campaigns"],
    icon: ShoppingCart,
    stats: { sales: "+78%", reach: "+134%", engagement: "+89%" }
  },
  {
    industry: "Kurumsal",
    description: "B2B sosyal medya yönetimi",
    benefits: ["Thought leadership", "Company updates", "Professional networking", "Industry insights"],
    icon: Building,
    stats: { leads: "+56%", awareness: "+123%", connections: "+234%" }
  },
  {
    industry: "Eğitim",
    description: "Eğitim kurumları sosyal medya",
    benefits: ["Student engagement", "Course promotion", "Event marketing", "Alumni network"],
    icon: GraduationCap,
    stats: { enrollment: "+43%", engagement: "+167%", awareness: "+89%" }
  }
];

const analyticsMetrics = [
  {
    category: "Engagement Metrics",
    metrics: ["Likes", "Comments", "Shares", "Saves", "Click-through rate"],
    description: "Etkileşim ve katılım ölçümleri"
  },
  {
    category: "Reach Metrics", 
    metrics: ["Impressions", "Reach", "Follower growth", "Hashtag performance", "Story views"],
    description: "Erişim ve görünürlük metrikleri"
  },
  {
    category: "Conversion Metrics",
    metrics: ["Website clicks", "Profile visits", "Lead generation", "Sales attribution", "ROI tracking"],
    description: "Dönüşüm ve satış metrikleri"
  }
];

export function SocialMediaPage() {
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
                <Share2 className="w-4 h-4" />
                <span className="font-medium">Sosyal Medya Yönetimi</span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Sosyal Medya
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Yönetimi</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Tüm sosyal medya hesaplarınızı tek yerden yönetin. İçerik planlayın, 
                performans analizi yapın ve etkileşimi artırın.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Sosyal Medya Başlat
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                  Demo İzle
                </Button>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">15+ platform</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600">Otomatik yayın</span>
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
                    src="https://images.unsplash.com/photo-1708447134640-2b57ad0dd846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hbmFnZW1lbnQlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU2MjgyMjE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Social Media Management Dashboard"
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
                    <div className="font-semibold text-gray-900">%245</div>
                    <div className="text-sm text-gray-500">Engagement</div>
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
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">%189</div>
                    <div className="text-sm text-gray-500">Follower</div>
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
              Sosyal Medya Yönetimi ile
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Güçlü Sonuçlar</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesyonel sosyal medya yönetimi kullanan markaların elde ettiği ortalama performans artışı
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
              Kapsamlı Sosyal Medya
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Yönetim Özellikleri</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sosyal medya stratejinizi güçlendiren profesyonel araçlar ve özellikler
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

      {/* Social Platforms Section */}
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
              Desteklenen Sosyal Medya
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Platformları</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tüm popüler sosyal medya platformlarında profesyonel yönetim
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {socialPlatforms.map((platform, index) => (
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
                        <platform.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{platform.name}</h3>
                        <p className="text-gray-600 mb-4">{platform.description}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {platform.features.map((feature, featureIndex) => (
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

      {/* Automation Features Section */}
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
              Otomatik Sosyal Medya
              <span className="text-cyan-300"> Yönetimi</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Zamanınızı verimli kullanın, sosyal medya işlemlerinizi otomatikleştirin
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-blue-200 text-sm mb-3">{feature.description}</p>
                    <div className="text-xl font-bold text-cyan-300">{feature.value}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
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
              Teknik <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Özellikler</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise seviyesinde sosyal medya yönetim teknolojisi
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technicalSpecs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center h-full bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{spec.value}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{spec.title}</h3>
                  <p className="text-gray-600 text-sm">{spec.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
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
              Sektörel
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Çözümler</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farklı sektörlere özel sosyal medya stratejileri ve başarı hikayleri
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {industryUseCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6">
                      <useCase.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{useCase.industry}</h3>
                    <p className="text-gray-600 mb-6">{useCase.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                      {Object.entries(useCase.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</div>
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
              Sosyal Medya Yönetiminizi Başlatmaya Hazır mısınız?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Profesyonel sosyal medya araçlarıyla markanızın online görünürlüğünü artırın. 
              Etkileşimi yükseltin ve takipçi kitlenizi büyütün!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 shadow-lg">
                Sosyal Medya Başlat
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                Demo Talep Et
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}