
import React from 'react';
import { MotionDiv, motion } from "./MotionWrapper";
import { useState, useEffect, useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useContactCallbackForm } from "./ContactCallbackForm";
import { 
  ArrowRight, 
  ShoppingCart, 
  Globe, 
  Server, 
  Smartphone,
  Sparkles,
  Zap,
  CheckCircle,
  Star,
  Users,
  Award,
  Phone
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Kurumsal Web Sitesi",
    subtitle: "Profesyonel Dijital Kimlik",
    description: "Modern tasarım ve güçlü altyapı ile kurumsal web sitenizi oluşturun. SEO optimizasyonu, mobil uyumluluk, içerik yönetimi ve güvenli hosting ile dijital varlığınızı güçlendirin.",
    image: "https://images.unsplash.com/photo-1740721455292-e5cd29544381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlY29tbWVyY2UlMjBsYXB0b3AlMjBzY3JlZW58ZW58MXx8fHwxNzU2MDQzMDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Globe,
    features: ["Modern Responsive Tasarım", "SEO Optimizasyonu", "İçerik Yönetim Sistemi", "SSL Güvenlik Sertifikası"],
    projects: 300,
    price: "Premium",
    rating: "4.9"
  },
  {
    id: 2,
    title: "Modern Tema Seçenekleri",
    subtitle: "Dilediğin Temayı Seç, Anında Kur",
    description: "Sektörel ihtiyaçlara göre tasarlanmış modern tema kütüphanemizden dilediğini seçin. İçeriği düzenleyin, logonuzu yükleyin, sitenizi anında yayına alın. Kod yazmadan güçlü bir dijital varlığa sahip olun.",
    image: "https://images.unsplash.com/photo-1742072594003-abf6ca86e154?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NTYwMjEwODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Server,
    features: ["Birbirinden modern ve her sektöre uygun temalar", "Sektörel Hazır Sayfa Şablonları", "Hızlı Kurulum ve Yayın", "Panel Üzerinden Özelleştirme", "SEO Uyumlu Altyapı"],
    projects: 150,
    price: "Standard",
    rating: "4.8"
  },
  {
    id: 3,
    title: "Ajanslar için Partnerlik",
    subtitle: "Markanıza özel tema, panel erişimi ve kazanç paylaşımı.",
    description: "Aygıt Themes altyapısını kullanarak kendi müşterilerinize web sitesi oluşturun. Tema düzenleme, alan adı yönetimi ve SEO optimizasyonu gibi işlemleri panelden kolayca yapın. Her oluşturduğunuz site için pasif gelir elde edin.",
    image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBob3N0aW5nJTIwZGF0YWNlbnRlcnxlbnwxfHx8fDE3NTYwNDMwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Smartphone,
    features: ["Ajansa Özel Yönetim Paneli", " Müşteri Bazlı Tema & İçerik Düzenleme", "Alan Adı & Hosting Kontrolü", "Otomatik Faturalama", "%30'a Varan Gelir Paylaşımı"],
    projects: 80,
    price: "Partner",
    rating: "4.9"
  },
  {
    id: 4,
    title: "Builder Teknolojisi",
    subtitle: "Sayfalarınızı kodsuz, görsel olarak düzenleyin.",
    description: "Aygıt Builder teknolojisi ile sürükle-bırak mantığıyla sayfalarınızı oluşturun. Metinleri değiştirin, görselleri yükleyin, yeni bloklar ekleyin. Gerçek zamanlı ön izleme ile anında sonucu görün ve sitenizi zahmetsizce yönetin.",
    image: "https://images.unsplash.com/photo-1695648443061-a14bc74bf29d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudCUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzU2MDMyNTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Zap,
    features: ["Sürükle-Bırak Blok Sistemi", "Hazır Şablonlar & Bileşenler", "Renk, Font, Buton Ayarları", "Gerçek Zamanlı Ön İzleme", "Panelden Anında Yayınlama"],
    projects: 200,
    price: "Pro",
    rating: "4.9"
  }
];

// Floating animation component
const FloatingElement = ({ delay, children }: { delay: number; children?: React.ReactNode }) => (
  <MotionDiv
    animate={{
      y: [0, -8, 0],
      rotate: [0, 0.5, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </MotionDiv>
);

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { openForm, CallbackFormComponent } = useContactCallbackForm();

  // Remove useScroll for now and use simple animation
  const backgroundY = "0%";
  
  return (
    <section 
      ref={containerRef}
      className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50/50 to-white overflow-hidden"
    >
      {/* Professional Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200 rounded-full blur-3xl" />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Professional Section Header */}
        <MotionDiv
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <MotionDiv
            className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
            <span className="text-blue-800 font-medium text-sm">Kurumsal Web Altyapısı</span>
          </MotionDiv>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Her İhtiyaca Uygun Çözümler
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Başlangıç seviyesinden kurumsal çözümlere kadar, işinizin büyümesini destekleyen 
            kapsamlı kurumsal web araçları ve entegrasyonları ile dijital dönüşümünüzü tamamlayın.
          </motion.p>
        </MotionDiv>

        {/* Professional Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <MotionDiv
                key={service.id}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100">
                  {/* Service Image */}
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-900/20 to-transparent" />
                    
                    {/* Professional Icon */}
                    <FloatingElement delay={index * 0.2}>
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/50 shadow-sm">
                        <Icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </FloatingElement>

                    {/* Price Badge */}
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                      {service.price}
                    </div>

                    {/* Professional Stats */}
                    <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                      <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-md">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-white text-xs font-medium">{service.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm px-2 py-1 rounded-md">
                        <Users className="w-3 h-3 text-white" />
                        <span className="text-white text-xs font-medium">{service.projects}+</span>
                      </div>
                    </div>
                  </div>

                  {/* Professional Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm">
                        {service.subtitle}
                      </p>
                    </div>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Professional Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <MotionDiv
                          key={idx}
                          className="flex items-center space-x-2 text-sm"
                          initial={{ opacity: 0, x: -15 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </MotionDiv>
                      ))}
                    </div>

                    {/* Professional CTA Button */}
                    <motion.button
                      onClick={openForm}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center group/btn"
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        Sizi Arayalım
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-0.5 transition-transform" />
                      </span>
                    </motion.button>
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </div>

        {/* Professional Bottom CTA Section */}
        <MotionDiv
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-blue-600 rounded-2xl p-10 shadow-xl relative overflow-hidden">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-blue-500/20"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-2xl transform translate-x-20 -translate-y-20"></div>
            
            <div className="relative z-10">
              <MotionDiv
                className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl mb-6"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <Award className="w-8 h-8 text-white" />
              </MotionDiv>
              
              <h3 className="text-3xl font-bold text-white mb-4">
                İşinizi Dönüştürmeye Hazır mısınız?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Ölçülebilir sonuçlar ve sürdürülebilir büyüme sağlayan son teknoloji çözümlerden yararlanmak için Aygıt Technologies ile ortaklık yapın.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={openForm}
                  className="bg-white text-blue-600 px-8 py-3 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300 shadow-sm hover:shadow-md"
                  whileHover={{ y: -1, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Sizi Arayalım
                  </span>
                </motion.button>
                
                <motion.button
                  onClick={openForm}
                  className="bg-blue-700 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-800 transition-all duration-300 border border-blue-500"
                  whileHover={{ y: -1, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    İletişime Geç
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </MotionDiv>
      </div>

      {/* Callback Form */}
      <CallbackFormComponent />
    </section>
  );
}