
import React from 'react';
import { motion } from "framer-motion";

// TypeScript compatibility fix for motion components
const MotionDiv = motion.div as any;
import {
  Check,
  Star,
  Zap,
  Crown,
  Shield,
  Sparkles,
  Phone,
  Play,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const pricingPlans = [
  {
    name: "Core",
    icon: Star,
    price: "583",
    period: "aylık",
    description:
      "Küçük işletmeler için profesyonel tek sayfalık kurumsal site",
    popular: false,
    features: [
      "One Page yapı (tek sayfalık profesyonel kurumsal site)",
      "Sayfa sınırı yok (blok çoğaltma serbesttir)",
      "Yönetim panelinden metin düzenleme",
      "Yönetim panelinden görsel değiştirme",
      "Mobil uyumlu (responsive) tasarım",
      "Hızlı kurulum ve yayınlama",
      "SEO uyumlu altyapı",
      "SSL sertifikası (güvenli bağlantı)",
      "Alan adı ve sunucu entegrasyonu",
      "İletişim formu ve harita desteği",
    ],
    limitations: [],
  },
  {
    name: "Galaxy",
    icon: Zap,
    price: "1.166",
    period: "aylık",
    description:
      "Büyüyen işletmeler için gelişmiş çoklu sayfa ve e-ticaret sistemi",
    popular: true,
    features: [
      "Çok sayfalı yapı (birden fazla sayfa)",
      "Yönetici panelinden tüm sayfa içeriğini düzenleme yeteneği",
      "Metin, resim ve simgeleri değiştirme desteği",
      "Hazır içerik blokları seçeneği",
      "Blok tabanlı sürükle ve bırak düzenleme arayüzü",
      "Mobil uyumlu (Responsive) tasarım",
      "SEO dostu altyapı (meta, URL ve başlık yönetimi)",
      "İletişim formu, harita ve sosyal medya entegrasyonu",
      "Alan adı, barındırma ve SSL kurulumu dahil",
      "Tema özel hızlı kurulum sihirbazı",
      "Site genelinde arama motoru desteği",
      "Yedekleme ve sürüm geçmişi sistemi",
      "Teknik destek paneline erişim",
    ],
    limitations: [],
  },
  {
    name: "Advanced",
    icon: Sparkles,
    price: "1.666",
    period: "aylık",
    description:
      "AI destekli gelişmiş özellikler ve profesyonel entegrasyonlar",
    popular: false,
    features: [
      "Çok sayfalı yapı + modüler sayfa oluşturucusu",
      "Tema blokları arası sürükle-bırak ile sınırsız kombinasyonlar",
      "AI destekli içerik önerileri ve site optimizasyonu",
      "Form oluşturucu + gelişmiş form yanıt yönetimi",
      "Dinamik içerik bölümleri (blog, haberler, referanslar, vb.)",
      "Kullanıcı rolleri ve izin sistemi",
      "Mobil uyumlu (Responsive) tasarım",
      "Email SMTP ve bildirim sistemi",
      "Dil desteği (çok dilli yönetim)",
      "SEO dostu altyapı (meta, URL ve başlık yönetimi)",
      "Otomatik site yedekleme + bakım modülü",
      "Versiyon kontrolü ve geri alma özelliği",
      "İletişim formu, harita ve sosyal medya entegrasyonu",
      "VIP destek ve bire bir proje danışmanlığı",
    ],
    limitations: [],
  },
];

const faqs = [
  {
    question: "Ücretsiz deneme süresi var mı?",
    answer:
      "Evet, tüm paketlerimizde 30 gün ücretsiz deneme imkanı sunuyoruz. Kredi kartı bilgisi gerektirmez.",
  },
  {
    question: "Paket değişikliği yapabilir miyim?",
    answer:
      "Tabii ki! İhtiyaçlarınız doğrultusunda istediğiniz zaman paketinizi yükseltebilir veya düşürebilirsiniz.",
  },
  {
    question:
      "Advanced paketinde AI destekli özellikler nasıl çalışır?",
    answer:
      "AI sistemi içerik önerilerinde bulunur, SEO optimizasyonu yapar ve site performansını analiz ederek otomatik iyileştirmeler sunar.",
  },
  {
    question: "Kullanıcı rolleri ve izin sistemi nedir?",
    answer:
      "Farklı kullanıcılara farklı yetkiler verebilirsiniz: admin, editör, yazar gibi. Her rolün erişim izinleri ayrı ayrı belirlenebilir.",
  },
  {
    question: "Çok dilli yönetim nasıl çalışır?",
    answer:
      "Advanced paketinde sitenizi birden fazla dilde yönetebilir, dil bazında içerik düzenleyebilir ve otomatik dil yönlendirmesi ayarlayabilirsiniz.",
  },
  {
    question:
      "Hangi üçüncü taraf entegrasyonları destekleniyor?",
    answer:
      "CRM sistemleri, canlı destek araçları, Google Analytics, Facebook Pixel ve 50+ farklı servis entegrasyonu mevcuttur.",
  },
  {
    question: "VIP destek ve proje danışmanlığı ne içerir?",
    answer:
      "Özel hesap yöneticiniz olur, öncelikli destek alırsınız ve proje hedefleriniz için bire bir stratejik danışmanlık hizmeti verilir.",
  },
  {
    question: "Versiyon kontrolü nasıl çalışır?",
    answer:
      "Yaptığınız tüm değişiklikler kaydedilir ve istenilen zaman noktasına geri dönebilirsiniz. Değişiklik geçmişini detaylı şekilde görüntüleyebilirsiniz.",
  },
];

export function PricingPage() {
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
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-600 px-4 py-2 rounded-full mb-6 border border-blue-500/20"
          >
            <Shield className="w-4 h-4" />
            <span className="font-medium">
              Şeffaf Fiyatlandırma
            </span>
          </MotionDiv>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Size Uygun
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {" "}
              Paketi
            </span>
            <br />
            Seçin
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            İhtiyaçlarınıza göre tasarlanmış esnek
            paketlerimizle Kurumsal Web Altyapısı yolculuğunuza bugün
            başlayın. Demolarımızı hemen inceleyin !
          </p>
        </MotionDiv>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <MotionDiv
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.6,
              }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-1 text-sm font-medium">
                    En Popüler
                  </Badge>
                </div>
              )}

              <Card
                className={`relative h-full p-8 transition-all duration-300 hover:shadow-2xl ${
                  plan.popular
                    ? "border-2 border-blue-500 bg-white scale-105"
                    : "border-2 border-blue-500 bg-white hover:border-blue-600"
                }`}
              >
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3
                    className={`text-2xl font-bold bg-gradient-to-r from-[#0365F4] to-[#0091BB] bg-clip-text text-transparent mb-2 ${plan.popular ? "mt-[13px]" : ""}`}
                  >
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {plan.description}
                  </p>

                  {/* Core Package Special Pricing */}
                  {plan.name === "Core" ? (
                    <div className="space-y-4">
                      {/* Monthly Pricing */}
                      <div>
                        <div className="flex items-baseline justify-center space-x-2">
                          <span className="text-4xl font-bold text-gray-900">
                            ₺{plan.price}
                          </span>
                          <span className="text-gray-500">
                            /{plan.period}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          KDV dahil • İptal edebilirsiniz
                        </div>
                      </div>

                      {/* Annual Pricing */}
                      <div className="bg-gradient-to-r from-[#0365F4] to-[#0091BB] border border-blue-200 rounded-lg p-4 mx-2">
                        <div className="text-sm text-white font-medium mb-1">
                          Yıllık Ödeme
                        </div>
                        <div className="text-xs text-white/70 line-through mb-1">
                          ₺8.749/yıl
                        </div>
                        <div className="flex items-baseline justify-center space-x-2">
                          <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                            ₺6.999
                          </span>
                          <span className="text-white/90">
                            /yıl
                          </span>
                        </div>
                        <div className="text-xs text-white/80 mt-1">
                          %20 tasarruf
                        </div>
                      </div>
                    </div>
                  ) : plan.name === "Galaxy" ? (
                    <div className="space-y-4">
                      {/* Monthly Pricing */}
                      <div>
                        <div className="flex items-baseline justify-center space-x-2">
                          <span className="text-4xl font-bold text-gray-900">
                            ₺{plan.price}
                          </span>
                          <span className="text-gray-500">
                            /{plan.period}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          KDV dahil • İptal edebilirsiniz
                        </div>
                      </div>

                      {/* Annual Pricing */}
                      <div className="bg-gradient-to-r from-[#0365F4] to-[#0091BB] border border-blue-200 rounded-lg p-4 mx-2">
                        <div className="text-sm text-white font-medium mb-1">
                          Yıllık Ödeme
                        </div>
                        <div className="text-xs text-white/70 line-through mb-1">
                          ₺17.499/yıl
                        </div>
                        <div className="flex items-baseline justify-center space-x-2">
                          <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                            ₺14.999
                          </span>
                          <span className="text-white/90">
                            /yıl
                          </span>
                        </div>
                        <div className="text-xs text-white/80 mt-1">
                          %20 tasarruf
                        </div>
                      </div>
                    </div>
                  ) : plan.name === "Advanced" ? (
                    <div className="space-y-4">
                      {/* Monthly Pricing */}
                      <div>
                        <div className="flex items-baseline justify-center space-x-2">
                          <span className="text-4xl font-bold text-gray-900">
                            ₺{plan.price}
                          </span>
                          <span className="text-gray-500">
                            /{plan.period}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          KDV dahil • İptal edebilirsiniz
                        </div>
                      </div>

                      {/* Annual Pricing */}
                      <div className="bg-gradient-to-r from-[#0365F4] to-[#0091BB] border border-blue-200 rounded-lg p-4 mx-2">
                        <div className="text-sm text-white font-medium mb-1">
                          Yıllık Ödeme
                        </div>
                        <div className="text-xs text-white/70 line-through mb-1">
                          ₺24.999/yıl
                        </div>
                        <div className="flex items-baseline justify-center space-x-2">
                          <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                            ₺19.999
                          </span>
                          <span className="text-white/90">
                            /yıl
                          </span>
                        </div>
                        <div className="text-xs text-white/80 mt-1">
                          %20 tasarruf
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-4xl font-bold text-gray-900">
                          ₺{plan.price}
                        </span>
                        <span className="text-gray-500">
                          /{plan.period}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 mt-2">
                        KDV dahil • İptal edebilirsiniz
                      </div>
                    </div>
                  )}
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map(
                    (feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">
                          {feature}
                        </span>
                      </div>
                    ),
                  )}

                  {plan.limitations.map(
                    (limitation, limitIndex) => (
                      <div
                        key={limitIndex}
                        className="flex items-start space-x-3 opacity-60"
                      >
                        <Check className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500">
                          {limitation}
                        </span>
                      </div>
                    ),
                  )}
                </div>

                {/* CTA Button */}
                <Button 
                  className={`w-full py-3 font-medium rounded-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {plan.popular
                    ? "Ücretsiz Deneyin"
                    : "Paketi Seç"}
                </Button>

                {/* Additional Buttons for All Packages */}
                <div className="space-y-3 -mt-2">
                  <Button
                    variant="outline"
                    className="w-full py-3 font-medium rounded-lg border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Sizi Arayalım</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full py-3 font-medium rounded-lg border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>Demoyu görüntüle</span>
                  </Button>
                </div>
              </Card>
            </MotionDiv>
          ))}
        </div>

        {/* Enterprise CTA */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-center text-white mb-20"
        >
          <h3 className="text-2xl font-bold mb-4">
            Özel İhtiyaçlarınız mı Var?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Büyük ölçekli projeler ve özel gereksinimler için
            size özel çözümler geliştiriyoruz. Uzman ekibimizle
            görüşerek ihtiyaçlarınıza uygun teklifimizi alın.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-8 py-3">
              Özel Teklif İsteyin
            </Button>
            <span className="text-blue-100">veya</span>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 font-medium px-8 py-3"
            >
              Satış Ekibiyle Görüşün
            </Button>
          </div>
        </MotionDiv>

        {/* FAQ Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sıkça Sorulan Sorular
            </h2>
            <p className="text-gray-600">
              Aklınıza takılan sorular için yanıtlarımız
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.2 + index * 0.1,
                  duration: 0.4,
                }}
              >
                <Card className="p-6 h-full">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              </MotionDiv>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Başka sorularınız mı var?
            </p>
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              Destek Ekibiyle İletişime Geçin
            </Button>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}