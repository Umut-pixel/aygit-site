// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";

// TYPE OVERRIDE - Fix SslPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Shield, Lock, CheckCircle, Globe, ArrowRight, Star, Users, Clock, Zap, Phone } from "lucide-react";
import { useContactCallbackForm } from "../../components/ContactCallbackForm";

const sslFeatures = [
  {
    icon: Shield,
    title: "256-bit SSL Şifreleme",
    description: "En güçlü şifreleme teknolojisi ile verilerinizi koruyun",
    color: "text-green-500"
  },
  {
    icon: Lock,
    title: "Otomatik SSL Kurulumu",
    description: "Manuel müdahale gerektirmeden otomatik SSL sertifika yönetimi",
    color: "text-blue-500"
  },
  {
    icon: Globe,
    title: "Tüm Alt Domainler",
    description: "Ana domain ve tüm alt domainleriniz için kapsamlı SSL koruması",
    color: "text-purple-500"
  },
  {
    icon: CheckCircle,
    title: "Sertifika Yenileme",
    description: "Otomatik sertifika yenileme ile kesintisiz güvenlik",
    color: "text-orange-500"
  }
];

const sslBenefits = [
  "Google SEO sıralamasında artış",
  "Müşteri güvenini artıran yeşil kilit",
  "HTTPS protokolü ile veri koruması",
  "Tarayıcı uyarılarının önlenmesi",
  "E-ticaret siteler için zorunlu",
  "Profesyonel kurumsal imaj"
];

const sslStats = [
  { number: "99.9%", label: "Güvenlik Oranı", icon: Shield },
  { number: "24/7", label: "Sürekli Koruma", icon: Clock },
  { number: "100K+", label: "Korunan Site", icon: Globe },
  { number: "5★", label: "Müşteri Memnuniyeti", icon: Star }
];

export function SslPage() {
  const { openForm, CallbackFormComponent } = useContactCallbackForm();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4" />
                <span className="font-medium">SSL Güvenlik Sertifikası</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Web Sitenizi
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> SSL ile Koruyun</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                256-bit SSL şifreleme teknolojisi ile müşteri verilerini koruyun, 
                Google sıralamanızı yükseltin ve güvenilirliğinizi artırın.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  onClick={openForm}
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Ücretsiz SSL Al</span>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
                >
                  SSL Test Et
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Ücretsiz kurulum</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Otomatik yenileme</span>
                </div>
              </div>
            </MotionDiv>
            
            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">SSL Sertifikası Aktif</h3>
                    <p className="text-green-600">🔒 aygittechnologies.com</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Şifreleme Seviyesi</span>
                    <span className="font-semibold text-green-600">256-bit</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Sertifika Türü</span>
                    <span className="font-semibold text-blue-600">EV SSL</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Geçerlilik</span>
                    <span className="font-semibold text-purple-600">1 Yıl</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Durumu</span>
                    <span className="flex items-center space-x-2 text-green-600 font-semibold">
                      <CheckCircle className="w-4 h-4" />
                      <span>Aktif</span>
                    </span>
                  </div>
                </div>
              </div>
              
              <MotionDiv
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {sslStats.map((stat, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              SSL Güvenlik Özellikleri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Endüstri standardındaki SSL sertifika çözümlerimizle web sitenizi güvenli hale getirin
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sslFeatures.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 mb-4 group-hover:scale-110 transition-transform ${feature.color}`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                SSL Sertifikasının
                <span className="text-green-600"> Faydaları</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                SSL sertifikası sadece güvenlik sağlamakla kalmaz, aynı zamanda SEO performansınızı da artırır.
              </p>
              
              <div className="space-y-4">
                {sslBenefits.map((benefit, index) => (
                  <MotionDiv
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </MotionDiv>
                ))}
              </div>
            </MotionDiv>
            
            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">SSL Kurulum Süreci</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Otomatik Doğrulama</h4>
                      <p className="text-sm text-white/80">Domain sahipliğiniz otomatik olarak doğrulanır</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">SSL Kurulumu</h4>
                      <p className="text-sm text-white/80">Sertifika sunucunuza otomatik yüklenir</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Aktivasyon</h4>
                      <p className="text-sm text-white/80">SSL aktif hale gelir ve yeşil kilit görünür</p>
                    </div>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Web Sitenizi Güvenli Hale Getirin
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Ücretsiz SSL sertifikası kurulumu ile müşteri güvenini kazanın ve Google sıralamanızı yükseltin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={openForm}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 font-semibold flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Hemen SSL Başlat</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3"
              >
                SSL Rehberini İncele
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center items-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm">256-bit Şifreleme</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">5 Dakikada Kurulum</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span className="text-sm">Ücretsiz</span>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      <CallbackFormComponent />
    </div>
  );
}