// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";

// TYPE OVERRIDE - Fix HostingPage motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "../../components/ui/button";
import { Server, Shield, Zap, Globe, ArrowRight, CheckCircle, HardDrive, Wifi, Phone } from "lucide-react";
import { useContactCallbackForm } from "../../components/ContactCallbackForm";
import React from "react";

const hostingFeatures = [
  {
    icon: Server,
    title: "SSD NVMe Depolama",
    description: "En hızlı SSD teknolojisi ile maksimum performans",
    color: "text-blue-500"
  },
  {
    icon: Shield,
    title: "DDoS Koruması",
    description: "Siber saldırılara karşı enterprise seviye koruma",
    color: "text-green-500"
  },
  {
    icon: Zap,
    title: "LiteSpeed Web Server",
    description: "Apache'den 40x daha hızlı web sunucu teknolojisi",
    color: "text-yellow-500"
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "50+ lokasyonlu içerik dağıtım ağı",
    color: "text-purple-500"
  }
];

const hostingPlans = [
  {
    name: "Starter",
    price: "₺99",
    period: "/ay",
    storage: "25 GB SSD",
    bandwidth: "Sınırsız",
    email: "10 Email",
    ssl: "Ücretsiz SSL",
    features: ["cPanel kontrol paneli", "WordPress kurulu", "7/24 destek", "Günlük yedekleme"]
  },
  {
    name: "Professional",
    price: "₺199",
    period: "/ay",
    storage: "100 GB SSD",
    bandwidth: "Sınırsız", 
    email: "Sınırsız Email",
    ssl: "Wildcard SSL",
    features: ["LiteSpeed Cache", "Staging ortamı", "Git entegrasyonu", "Performans izleme", "Öncelikli destek"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "₺399",
    period: "/ay",
    storage: "500 GB SSD",
    bandwidth: "Sınırsız",
    email: "Sınırsız Email",
    ssl: "EV SSL",
    features: ["Dedicated CPU", "RAM garantili", "WP-CLI erişimi", "Developer araçları", "Özel destek temsilcisi", "SLA garantisi"]
  }
];

const hostingStats = [
  { number: "99.99%", label: "Uptime Garantisi", icon: Shield },
  { number: "< 100ms", label: "Yanıt Süresi", icon: Zap },
  { number: "24/7", label: "Teknik Destek", icon: Server },
  { number: "50+", label: "Sunucu Lokasyonu", icon: Globe }
];

const includedFeatures = [
  "LiteSpeed Web Server",
  "PHP 8.2 Desteği", 
  "MySQL/MariaDB",
  "WordPress Toolkit",
  "Cloudflare CDN",
  "DDoS Koruması",
  "Malware Taraması",
  "Otomatik Yedekleme",
  "Staging Ortamı",
  "Git Entegrasyonu",
  "WP-CLI Erişimi",
  "Redis Cache"
];

export function HostingPage() {
  const { openForm, CallbackFormComponent } = useContactCallbackForm();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                <Server className="w-4 h-4" />
                <span className="font-medium">Güvenilir Web Hosting</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Web Siteniz için
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Güvenilir Hosting</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Enterprise seviyede altyapı, 99.99% uptime garantisi ve 7/24 teknik destek ile 
                web sitenizin her zaman online kalmasını sağlayın.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  onClick={openForm}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Hosting Başlat</span>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                >
                  Sunucu Testi
                </Button>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>30 gün para iade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Ücretsiz migration</span>
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
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Server className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Server Durumu</h3>
                    <p className="text-green-600">🟢 Tüm sistemler çalışıyor</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Uptime</span>
                    <span className="font-semibold text-green-600">99.99%</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">Yanıt Süresi</span>
                    <span className="font-semibold text-blue-600">87ms</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600">CPU Kullanımı</span>
                    <span className="font-semibold text-purple-600">12%</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Aktif Siteler</span>
                    <span className="font-semibold text-orange-600">25,847</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="font-semibold text-gray-700">Güvenlik Aktif</span>
                  </div>
                  <p className="text-sm text-gray-600">DDoS koruması, malware tarama ve otomatik güncellemeler aktif</p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {hostingStats.map((stat, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Seviye Hosting Özellikleri
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Büyük şirketlerin tercih ettiği altyapı teknolojilerini herkes için erişilebilir hale getirdik
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hostingFeatures.map((feature, index) => (
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

      {/* Hosting Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hosting Planları
            </h2>
            <p className="text-xl text-gray-600">
              İhtiyacınıza uygun hosting planını seçin, istediğiniz zaman yükseltin
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {hostingPlans.map((plan, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow ${
                  plan.popular ? 'border-2 border-blue-500 scale-105' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      En Popüler
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Depolama</span>
                    <span className="font-semibold">{plan.storage}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bant Genişliği</span>
                    <span className="font-semibold">{plan.bandwidth}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email</span>
                    <span className="font-semibold">{plan.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">SSL</span>
                    <span className="font-semibold">{plan.ssl}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={openForm}
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Bu Planı Seç
                </Button>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Included Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tüm Planlarda Dahil
            </h2>
            <p className="text-xl text-gray-600">
              En temel plandan enterprise'a kadar tüm hosting planlarında dahil olan özellikler
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {includedFeatures.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
        <div className="container mx-auto px-6 text-center">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Web Sitenizi Güvenilir Eller İle Teslim Edin
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Enterprise seviye altyapı, 30 gün para iade garantisi ve ücretsiz site transferi ile hemen başlayın.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={openForm}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold flex items-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Hosting Planlarını İncele</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3"
              >
                Sunucu Performansı Test Et
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            
            <div className="mt-8 flex justify-center items-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm">99.99% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <HardDrive className="w-4 h-4" />
                <span className="text-sm">SSD NVMe</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="w-4 h-4" />
                <span className="text-sm">Ücretsiz CDN</span>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      <CallbackFormComponent />
    </div>
  );
}