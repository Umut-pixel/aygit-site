import React from 'react';
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
    image: "src/assets/images/anlas-slider.jpg",
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
    image: "https://images.unsplash.com/photo-1726607424598-139ff3391ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTYwMDA5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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

export function HeroSliderSimple() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const { openForm, CallbackFormComponent } = useContactCallbackForm();

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
      case 0:
        return () => navigateTo('/solutions/basic-corporate');
      case 1:
        return () => navigateTo('/solutions/enterprise-portal');
      case 2:
        return () => navigateTo('/pricing');
      default:
        return () => navigateTo('/solutions/basic-corporate');
    }
  };

  return (
    <section 
      className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        <div 
          key={currentSlide}
          className="absolute inset-0 animate-fade-in"
        >
          <ImageWithFallback
            src={currentSlideData.image}
            alt={currentSlideData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-blue-900/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 border border-white/10 rounded-full animate-float" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 border border-white/5 rounded-full animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '300ms'}} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Side */}
            <div
              key={currentSlide}
              className="text-white space-y-8 animate-slide-up"
            >
              {/* Subtitle Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse" />
                <span className="text-sm font-medium">{currentSlideData.subtitle}</span>
              </div>

              {/* Main Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {currentSlideData.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-blue-100 leading-relaxed max-w-2xl">
                {currentSlideData.description}
              </p>

              {/* Features List */}
              <div className="flex flex-wrap gap-4">
                {currentSlideData.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openForm}
                  className="group bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span>Sizi Arayalım</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={getSecondaryButtonAction()}
                  className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all duration-300 border border-white/30 hover:-translate-y-1 flex items-center justify-center"
                >
                  <Play className="w-5 h-5 mr-2" />
                  <span>{currentSlideData.secondaryCta}</span>
                </button>
              </div>
            </div>

            {/* Stats Side */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-1 gap-6">
                {currentSlideData.stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                      style={{animationDelay: `${400 + index * 100}ms`}}
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
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-4">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-[6s] ease-linear"
          style={{ width: '100%' }}
          key={currentSlide}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white animate-fade-in" style={{animationDelay: '1.5s'}}>
        <div className="flex flex-col items-center space-y-2 animate-float">
          <span className="text-sm font-medium opacity-80">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-float" />
          </div>
        </div>
      </div>

      {/* Callback Form */}
      <CallbackFormComponent />
    </section>
  );
}