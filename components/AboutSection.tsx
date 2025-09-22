import React from 'react';
// AYGIT TECHNOLOGIES - MODERN MOTION IMPLEMENTATION
import { MotionDiv, motion, useRef } from "./MotionWrapper";
import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { CheckCircle, Users, Target, Zap, Globe, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  { number: "100+", label: "Kurumsal Altyapı", icon: CheckCircle },
  { number: "100+", label: "Mutlu İşletme", icon: Users },
  { number: "25", label: "Ülke Erişimi", icon: Globe },
  { number: "3", label: "Sektör Ödülü", icon: Award },
];

const values = [
  {
    icon: Target,
    title: "Odaklılık",
    description: "İşletmenizin özel ihtiyaçlarına ve hedeflerine göre tasarlanmış kesin çözümler sunuyoruz."
  },
  {
    icon: Zap,
    title: "İnovasyon",
    description: "Son teknoloji araçları ve yaratıcı yaklaşımlarla problem çözme metodolojimizi şekillendiriyoruz."
  },
  {
    icon: Users,
    title: "İş Birliği",
    description: "Ekibinizin bir uzantısı olarak çalışıyor, sorunsuz entegrasyon ve iletişim sağlıyoruz."
  },
  {
    icon: Globe,
    title: "Küresel Erişim",
    description: "Dünya çapındaki varlığımız, farklı pazarlar ve bölgelerdeki müşterilerimize hizmet vermemizi sağlıyor."
  }
];

export function AboutSection() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsInView(true);
  }, []);

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
        animate={isInView ? { opacity: 0.1, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl"
      />
      <MotionDiv
        initial={{ opacity: 0, scale: 0.8, rotate: 45 }}
        animate={isInView ? { opacity: 0.05, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-2 bg-blue-50 text-blue-700 border-blue-200">
            Hakkımızda
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              5 Yıldır
            </span>{" "}
            İşletmeleri ve kobileri dönüştürüyoruz!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dünya çapında sektörler boyunca büyüme, verimlilik ve inovasyonu 
            sağlayan istisnai Altyapı çözümleri sunmaya adanmış tutkulu profesyonellerden oluşan bir ekibiz.
          </p>
        </MotionDiv>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          {/* Left content */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Her Çözümde Mükemmellik
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Uzmanlığımız birçok alanda yayılmış durumda, bugünün zorluklarını karşılamakla kalmayıp 
              yarının fırsatlarını öngören çözümler oluşturmak için stratejik düşünceyi teknik mükemmellikle birleştiriyoruz.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Elinizin altındaki tüm kontrollerle, modern yönetim paneli",
                "Özel teknoloji çözümleri ve uygulama",
                "Dijital dönüşüm ve süreç optimizasyonu",
                "7/24 destek ve bakım hizmetleri"
              ].map((item, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </MotionDiv>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-blue-600 mr-2" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          {/* Right content - Images */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              <MotionDiv
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-6"
              >
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1650784854945-264d5b0b6b07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHRlYW0lMjBkaXZlcnNlfGVufDF8fHx8MTc1NjA0MTE5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Professional team"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Card>
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 rounded-xl text-white">
                  <h4 className="font-bold mb-2">Uzman Ekip</h4>
                  <p className="text-blue-100">5 yıl boyunca deneyim biriktirmiş deneyimli profesyoneller</p>
                </div>
              </MotionDiv>
              
              <MotionDiv
                initial={{ opacity: 0, y: -50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-6 mt-12"
              >
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                  <h4 className="font-bold mb-2">İnovasyon Odağı</h4>
                  <p className="text-blue-100">Yarının zorluklarına yönelik son teknoloji çözümleri</p>
                </div>
                <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1750365919878-2735d30fa3d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc1NjA0MTIwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Innovation technology"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Card>
              </MotionDiv>
            </div>

            {/* Floating elements */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-xl"
            >
              5Y
            </MotionDiv>
          </MotionDiv>
        </div>

        {/* Values section */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Temel Değerlerimiz</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 group border-0 bg-white/80 backdrop-blur-sm">
                  <MotionDiv
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg"
                  >
                    <value.icon className="w-8 h-8 text-white" />
                  </MotionDiv>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}