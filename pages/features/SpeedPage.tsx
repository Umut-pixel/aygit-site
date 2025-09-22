// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";

// TYPE OVERRIDE - Fix SpeedPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Zap, Gauge, Globe, Rocket, ArrowRight, CheckCircle, Clock, TrendingUp, Phone, BarChart3, Shield, Target } from "lucide-react";
import { useContactCallbackForm } from "../../components/ContactCallbackForm";

const speedFeatures = [
  {
    icon: Zap,
    title: "CDN Hızlandırma",
    description: "Global CDN ağı ile dünya çapında hızlı erişim",
    color: "text-blue-500"
  },
  {
    icon: Rocket,
    title: "Görüntü Optimizasyonu",
    description: "Otomatik görüntü sıkıştırma ve format optimizasyonu",
    color: "text-cyan-500"
  },
  {
    icon: Gauge,
    title: "Performans İzleme",
    description: "Gerçek zamanlı hız ve performans analizi",
    color: "text-blue-600"
  },
  {
    icon: Globe,
    title: "Önbellek Sistemi",
    description: "Akıllı önbellek ile ultra hızlı sayfa yüklemeleri",
    color: "text-indigo-500"
  }
];

const speedMetrics = [
  {
    name: "Sayfa Yükleme",
    before: "4.2s",
    after: "0.8s",
    improvement: "81% daha hızlı"
  },
  {
    name: "İlk İçerik",
    before: "2.8s",
    after: "0.3s",
    improvement: "89% daha hızlı"
  },
  {
    name: "Core Web Vitals",
    before: "Kötü",
    after: "Mükemmel",
    improvement: "Google puanı"
  }
];

const speedStats = [
  { number: "0.5s", label: "Ortalama Yükleme", icon: Clock },
  { number: "99%", label: "Performans Puanı", icon: Gauge },
  { number: "50+", label: "CDN Konumu", icon: Globe },
  { number: "95%", label: "Hız Artışı", icon: TrendingUp }
];

const optimizationSteps = [
  {
    title: "Görüntü Optimizasyonu",
    description: "WebP format ve otomatik sıkıştırma",
    impact: "60% daha küçük dosya boyutu"
  },
  {
    title: "CSS/JS Minifikasyonu",
    description: "Kod optimizasyonu ve gzip sıkıştırma",
    impact: "40% daha az veri transferi"
  },
  {
    title: "Akıllı Önbellek",
    description: "Browser ve server seviyesinde önbellek",
    impact: "80% daha hızlı tekrar ziyaretler"
  },
  {
    title: "CDN Dağıtımı",
    description: "Global içerik dağıtım ağı",
    impact: "75% daha hızlı global erişim"
  }
];

const performanceMetrics = [
  { label: "Sayfa Hızı", value: 98, color: "from-blue-500 to-cyan-500" },
  { label: "SEO Puanı", value: 95, color: "from-cyan-500 to-blue-600" },
  { label: "Mobil Uyum", value: 100, color: "from-blue-600 to-indigo-600" },
  { label: "Kullanıcı Deneyimi", value: 97, color: "from-indigo-600 to-blue-500" }
];

export function SpeedPage() {
  const { openForm, CallbackFormComponent } = useContactCallbackForm();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4" />
                <span className="font-medium">Hız Optimizasyonu</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Sitenizi
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Işık Hızında</span> Yapın
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Gelişmiş optimizasyon teknikleri ve CDN ile web sitenizin hızını maksimuma çıkarın. 
                SEO puanınızı yükseltin, kullanıcı deneyimini artırın.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  onClick={openForm}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-3 flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Hız Testi Al</span>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                >
                  Performans Analizi
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Ücretsiz analiz</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Garantili iyileştirme</span>
                </div>
              </div>
            </MotionDiv>
            
            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-blue-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Gauge className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Performans Analizi</h3>
                    <p className="text-blue-600">aygittechnologies.com</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">PageSpeed Score</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-green-600">98</span>
                      </div>
                      <span className="text-green-600 font-semibold">Mükemmel</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {speedMetrics.map((metric, index) => (
                      <div key={index} className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-gray-700">{metric.name}</span>
                          <span className="text-blue-600 font-semibold text-sm">{metric.improvement}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-red-500 line-through text-sm">{metric.before}</span>
                          <ArrowRight className="w-3 h-3 text-gray-400" />
                          <span className="text-blue-600 font-semibold">{metric.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <MotionDiv
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-200"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      className={`text-blue-500`}
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: metric.value / 100 }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      style={{
                        strokeDasharray: "251.2",
                        strokeDashoffset: `${251.2 * (1 - metric.value / 100)}`,
                      }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3B82F6" />
                        <stop offset="100%" stopColor="#06B6D4" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-900">{metric.value}</span>
                  </div>
                </div>
                <div className="text-gray-900 font-semibold">{metric.label}</div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {speedStats.map((stat, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hız Optimizasyon Teknikleri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern web teknolojileri ile sitenizin performansını maksimuma çıkarın
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {speedFeatures.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group border border-blue-100 hover:border-blue-200"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-blue-100 to-cyan-100 mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Optimization Steps */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hız Optimizasyon Süreci
            </h2>
            <p className="text-xl text-gray-600">
              Adım adım web sitenizin hızını artırıyoruz
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {optimizationSteps.map((step, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-blue-100 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-2">{step.description}</p>
                  <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    <TrendingUp className="w-3 h-3" />
                    <span className="font-medium">{step.impact}</span>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Dramatik
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Hız Artışları</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Müşterilerimizin web sitelerinde elde ettiğimiz gerçek hız iyileştirme sonuçları.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-4">E-ticaret Sitesi</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Sayfa Yükleme</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-red-500">6.2s</span>
                        <ArrowRight className="w-3 h-3" />
                        <span className="text-blue-600 font-semibold">1.1s</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Dönüşüm Oranı</span>
                      <div className="text-blue-600 font-semibold">+47% artış</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-100">
                  <h4 className="font-semibold text-gray-900 mb-4">Kurumsal Web Sitesi</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Mobile Hız</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-red-500">3.8s</span>
                        <ArrowRight className="w-3 h-3" />
                        <span className="text-blue-600 font-semibold">0.7s</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">SEO Puanı</span>
                      <div className="text-blue-600 font-semibold">+82% artış</div>
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>
            
            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Hız Garantisi</h3>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>En az %50 hız artışı garantili</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Google PageSpeed 90+ puanı</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Mobil hız optimizasyonu</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Core Web Vitals uyumluluğu</span>
                  </li>
                </ul>
                
                <Button 
                  onClick={openForm}
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                >
                  Hız Testini Başlat
                </Button>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Speed Comparison Chart */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hız Karşılaştırması
            </h2>
            <p className="text-xl text-gray-600">
              Rakiplerinize karşı ne kadar hızlı olduğunuzu görün
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-10 h-10 text-red-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Yavaş Siteler</h3>
                <div className="text-3xl font-bold text-red-500 mb-2">5.2s</div>
                <p className="text-gray-600">Ortalama yükleme süresi</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gauge className="w-10 h-10 text-yellow-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Ortalama Siteler</h3>
                <div className="text-3xl font-bold text-yellow-500 mb-2">2.8s</div>
                <p className="text-gray-600">Sektör ortalaması</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Aygıt Tech</h3>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">0.7s</div>
                <p className="text-gray-600">Optimizasyon sonrası</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Sitenizi Hızlandırın, Satışlarınızı Artırın
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Yavaş web sitesi müşteri kaybettirir. Ücretsiz hız analizi ile ne kadar hızlandırabileceğimizi öğrenin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={openForm}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Ücretsiz Hız Analizi</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3"
              >
                Başarı Hikayelerini İncele
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center items-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span className="text-sm">%50+ Hız Artışı</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">24 Saat İçinde</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm">Garanti</span>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      <CallbackFormComponent />
    </div>
  );
}