// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion } from "framer-motion";

// TYPE OVERRIDE - Fix AnalyticsPage motion.div issues
const MotionDiv = motion.div as any;
import { Check, ArrowRight, BarChart3, Users, Zap, Shield, Globe, TrendingUp, Smartphone, Headphones, Award, CheckCircle, Star, Settings, Mail, PieChart, Activity, Target, Eye, MousePointer, ShoppingCart, Calendar, Filter } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { navigateTo } from "../../router/Router";
import React from "react";

const analyticsFeatures = [
  {
    icon: BarChart3,
    title: "Real-time Dashboard", 
    description: "Anlık satış, ziyaretçi ve performans verileri tek ekranda"
  },
  {
    icon: Target,
    title: "Conversion Analytics",
    description: "Detaylı dönüşüm analizi ve funnel optimizasyonu"
  },
  {
    icon: Users,
    title: "Customer Journey",
    description: "Müşteri yolculuğu haritası ve davranış analizi"
  },
  {
    icon: PieChart,
    title: "Sales Reports",
    description: "Kapsamlı satış raporları ve trend analizleri"
  },
  {
    icon: MousePointer,
    title: "Heatmap Analysis",
    description: "Sayfa heatmap'leri ve kullanıcı etkileşim analizi"
  },
  {
    icon: Activity,
    title: "Performance Monitoring",
    description: "Site performansı ve sayfa hızı izleme"
  }
];

const reportTypes = [
  {
    title: "Satış & Gelir Raporları",
    description: "Detaylı satış analizleri ve gelir projeksiyonları",
    features: ["Günlük/Haftalık/Aylık satış", "Ürün bazlı performans", "Kategori analizleri", "Gelir projeksiyonları"],
    icon: BarChart3,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Müşteri Davranışı",
    description: "Müşteri segmentasyonu ve davranış analizleri",
    features: ["Segment analizleri", "RFM analizleri", "Churn prediction", "Lifetime value"],
    icon: Users,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Traffic & SEO Analytics",
    description: "Organik trafik ve SEO performans raporları",
    features: ["Keyword rankings", "Organic trafik", "Backlink analizi", "Competitor analysis"],
    icon: TrendingUp,
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Marketing ROI",
    description: "Pazarlama kampanyaları ROI ve performans ölçümü",
    features: ["Campaign tracking", "Attribution modeling", "Cost per acquisition", "ROAS analysis"],
    icon: Target,
    color: "from-orange-500 to-red-600"
  }
];

const analyticsMetrics = [
  {
    metric: "Conversion Rate Improvement",
    value: "+35%",
    description: "Analytics insights ile ortalama conversion artışı",
    icon: TrendingUp,
    color: "text-green-600 bg-green-50"
  },
  {
    metric: "Customer Lifetime Value", 
    value: "+280%",
    description: "Segmentation ile CLV optimizasyonu",
    icon: Users,
    color: "text-blue-600 bg-blue-50"
  },
  {
    metric: "Marketing ROI",
    value: "+420%",
    description: "Data-driven marketing decisions ile ROI artışı",
    icon: Target,
    color: "text-purple-600 bg-purple-50"
  },
  {
    metric: "Revenue Growth",
    value: "+185%",
    description: "Analytics optimizasyonu ile gelir artışı",
    icon: BarChart3,
    color: "text-orange-600 bg-orange-50"
  }
];

const analyticsPackages = [
  {
    name: "Analytics Starter",
    price: "1.800",
    description: "Küçük siteler için temel analytics",
    features: [
      "Google Analytics 4 setup",
      "Basic e-commerce tracking",
      "Monthly reports",
      "5 custom KPIs",
      "Basic dashboard",
      "Email alerts",
      "3 ay destek"
    ],
    popular: false,
    duration: "Aylık"
  },
  {
    name: "Analytics Professional", 
    price: "3.500",
    description: "Büyüyen siteler için gelişmiş analytics",
    features: [
      "Advanced GA4 + GTM setup",
      "Custom dashboard",
      "Heatmap integration",
      "Customer segmentation",
      "Weekly reports",
      "A/B testing analytics",
      "Conversion optimization",
      "6 ay destek + training"
    ],
    popular: true,
    duration: "Aylık"
  },
  {
    name: "Analytics Enterprise",
    price: "Özel",
    description: "Büyük siteler için enterprise analytics",
    features: [
      "Full analytics stack",
      "Custom data warehouse",
      "AI-powered insights",
      "Predictive analytics",
      "Real-time dashboards",
      "Dedicated analyst",
      "Daily reports",
      "Advanced integrations"
    ],
    popular: false,
    duration: "Aylık"
  }
];

export function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header Spacer */}
      <div className="h-32"></div>
      
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <MotionDiv
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 px-4 py-2 rounded-full mb-8 border border-purple-500/20"
          >
            <BarChart3 className="w-4 h-4" />
            <span className="font-medium">Analytics & Raporlama</span>
          </MotionDiv>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            Data-Driven
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> E-ticaret</span>
            <br />Analytics
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Gelişmiş analytics ve raporlama araçları ile müşterilerinizi daha iyi anlayın, 
            data-driven kararlar alın ve sürekli büyüme sağlayın.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Button 
                onClick={() => navigateTo('/support')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
              >
                Analytics Başlat
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </MotionDiv>
            
            <div className="flex items-center space-x-2 text-gray-600">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Ücretsiz analytics audit</span>
            </div>
          </div>

          {/* Analytics Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {analyticsMetrics.map((metric, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-3 ${metric.color}`}>
                  <metric.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm font-medium text-gray-700 mb-1">{metric.metric}</div>
                <div className="text-xs text-gray-500">{metric.description}</div>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Analytics Features */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Analytics Özellikleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Kapsamlı analytics araçları ile işletmenizi data-driven şekilde yönetin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-white/90 to-purple-50/50 backdrop-blur-sm border-purple-200/50">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Report Types */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Rapor Türleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Her ihtiyacınız için özel tasarlanmış kapsamlı raporlar
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reportTypes.map((report, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${report.color}`}></div>
                  
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${report.color} text-white flex-shrink-0`}>
                      <report.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{report.title}</h3>
                      <p className="text-gray-600">{report.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {report.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Pricing Packages */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.6 }}
          className="mb-32"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Analytics Paketleri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              İhtiyacınıza uygun analytics çözümü seçin
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {analyticsPackages.map((pkg, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.7 + index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 text-sm font-medium">
                      En Popüler
                    </Badge>
                  </div>
                )}
                
                <Card className={`relative h-full p-8 transition-all duration-300 hover:shadow-2xl ${
                  pkg.popular 
                    ? 'border-2 border-purple-500 bg-white scale-105' 
                    : 'border border-gray-200 bg-white hover:border-purple-200'
                }`}>
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                      pkg.popular ? 'bg-purple-500' : 'bg-gray-100'
                    }`}>
                      <BarChart3 className={`w-6 h-6 ${pkg.popular ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                    
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="text-4xl font-bold text-gray-900">
                        {pkg.price === "Özel" ? pkg.price : `₺${pkg.price}`}
                      </span>
                      {pkg.price !== "Özel" && (
                        <span className="text-gray-500">/{pkg.duration}</span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full py-3 font-medium rounded-lg transition-all duration-300 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    {pkg.price === "Özel" ? 'Teklif Al' : 'Hemen Başla'}
                  </Button>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* CTA Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 0.6 }}
          className="text-center mb-32"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Analytics Yolculuğunuza Başlayın
            </h2>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Data-driven kararlar alın, müşterilerinizi daha iyi anlayın ve sürekli büyüme sağlayın.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                onClick={() => navigateTo('/support')}
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold"
              >
                Ücretsiz Analiz İsteyin
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <div className="flex items-center space-x-2 text-purple-100">
                <CheckCircle className="w-5 h-5" />
                <span>30 dakika ücretsiz konsültasyon</span>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}