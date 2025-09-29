import React from 'react';
import { MotionDiv, useTransform, AnimatePresence } from "./MotionWrapper";
import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";
import { useContactCallbackForm } from "./ContactCallbackForm";
import { navigateTo } from "../router/Router";
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  ArrowRight, 
  CheckCircle,
  Users,
  Award,
  TrendingUp,
  Shield,
  Zap,
  Phone
} from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/images/slider-bg-2024.jpg",
    title: "Kurumsal Web Siteniz",
    subtitle: "Profesyonel Web Altyapısı",
    description: "Modern ve profesyonel kurumsal web sitenizi oluşturun. Mobil uyumlu tasarım, güvenli altyapı, SEO optimizasyonu ve yönetim paneli ile dijital kimliğinizi güçlendirin.",
    cta: "Web Sitenizi Kurun",
    secondaryCta: "Demo İsteyin",
    stats: [
      { icon: Users, value: "500+", label: "Aktif Web Sitesi" },
      { icon: Award, value: "99.9%", label: "Sistem Çalışma Süresi" },
      { icon: TrendingUp, value: "300%", label: "Ortalama Trafik Artışı" }
    ],
    features: ["Hızlı Kurulum", "Mobil Uyumlu", "SEO Optimize", "Güvenli Altyapı"]
  },
  {
    id: 2,
    image: "",
    title: "Kurumsal Portal Çözümleri",
    subtitle: "Dijital Dönüşüm",
    description: "Çalışanlarınız, müşterileriniz ve iş ortaklarınız için güçlü web portalları. Kullanıcı yönetimi, dokümantasyon sistemi ve iş akışı entegrasyonları ile verimliliği artırın.",
    cta: "Portal Çözümlerini Keşfedin",
    secondaryCta: "Örnekleri İnceleyin",
    stats: [
      { icon: TrendingUp, value: "50+", label: "Portal Projesi" },
      { icon: Shield, value: "100%", label: "Güvenli Erişim" },
      { icon: Zap, value: "Real-time", label: "Veri Senkronizasyonu" }
    ],
    features: ["Kullanıcı Yönetimi", "Doküman Sistemi", "API Entegrasyonu", "Mobil Erişim"]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1529126894674-8dd7cb884766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwY2xvdWQlMjBjb21wdXRpbmd8ZW58MXx8fHwxNzU2MDcyMDkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Kurumsal Altyapı",
    subtitle: "Ölçeklenebilir Teknoloji",
    description: "Büyüyen kurumunuz için güvenilir web altyapısı. Yüksek trafik kapasitesi, güvenli veri işleme ve otomatik yedekleme ile işinizi güvende tutun.",
    cta: "Kurumsal Çözümler",
    secondaryCta: "Fiyatlandırma",
    stats: [
      { icon: Shield, value: "SSL", label: "Güvenlik Sertifikası" },
      { icon: Users, value: "Unlimited", label: "Kullanıcı Kapasitesi" },
      { icon: Award, value: "7/24", label: "Teknik Destek" }
    ],
    features: ["Otomatik Yedekleme", "CDN Hızlandırma", "DDoS Koruması", "CRM Entegrasyonu"]
  }
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { openForm, CallbackFormComponent } = useContactCallbackForm();

  // Remove useScroll for now and use simple values
  const parallaxY = "0%";
  const scale = 1;

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  const getSecondaryButtonAction = () => {
    switch (currentSlide) {
      case 0: // Kurumsal Web Sitesi
        return () => navigateTo('/solutions/basic-corporate');
      case 1: // Kurumsal Portal Çözümleri
        return () => navigateTo('/solutions/enterprise-portal');
      case 2: // Kurumsal Altyapı
        return () => navigateTo('/pricing');
      default:
        return () => navigateTo('/solutions/basic-corporate');
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Background Images with Parallax */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <MotionDiv
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <div className="w-full h-full">
              <ImageWithFallback
                src={currentSlideData.image}
                alt={currentSlideData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-blue-900/80" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </MotionDiv>
        </AnimatePresence>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <MotionDiv
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-96 h-96 border border-white/10 rounded-full"
        />
        <MotionDiv
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-80 h-80 border border-white/5 rounded-full"
        />
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-300" />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <AnimatePresence mode="wait">
              <MotionDiv
                key={currentSlide}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-white space-y-8"
              >
                {/* Subtitle Badge */}
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                >
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse" />
                  <span className="text-sm font-medium">{currentSlideData.subtitle}</span>
                </MotionDiv>

                {/* Main Title */}
                <MotionDiv
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  {currentSlideData.title.split(' ').map((word, index) => (
                    <MotionDiv
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                      className="inline-block mr-4"
                    >
                      {word}
                    </MotionDiv>
                  ))}
                </MotionDiv>

                {/* Description */}
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl text-blue-100 leading-relaxed max-w-2xl"
                >
                  {currentSlideData.description}
                </MotionDiv>

                {/* Features List */}
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="flex flex-wrap gap-4"
                >
                  {currentSlideData.features.map((feature, index) => (
                    <MotionDiv
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm font-medium">{feature}</span>
                    </MotionDiv>
                  ))}
                </MotionDiv>

                {/* CTA Buttons */}
                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <MotionDiv
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={openForm}
                    className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    <span>Sizi Arayalım</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </MotionDiv>
                  
                  <MotionDiv
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={getSecondaryButtonAction()}
                    className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center justify-center cursor-pointer"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    <span>{currentSlideData.secondaryCta}</span>
                  </MotionDiv>
                </MotionDiv>
              </MotionDiv>
            </AnimatePresence>

            {/* Stats Side */}
            <AnimatePresence mode="wait">
              <MotionDiv
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="grid grid-cols-1 gap-6">
                  {currentSlideData.stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <MotionDiv
                        key={index}
                        initial={{ opacity: 0, y: 30, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-blue-200 text-sm">{stat.label}</div>
                          </div>
                        </div>
                      </MotionDiv>
                    );
                  })}
                </div>
              </MotionDiv>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Prev Button */}
          <MotionDiv
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </MotionDiv>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <MotionDiv
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </MotionDiv>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <MotionDiv
          className="h-full bg-white"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          key={currentSlide}
          transition={{ duration: 6, ease: "linear" }}
        />
      </div>

      {/* Scroll Indicator */}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 right-8 text-white"
      >
        <MotionDiv
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2"
        >
          <span className="text-sm font-medium opacity-80">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <MotionDiv
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </div>
        </MotionDiv>
      </MotionDiv>

      {/* Callback Form */}
      <CallbackFormComponent />
    </section>
  );
}