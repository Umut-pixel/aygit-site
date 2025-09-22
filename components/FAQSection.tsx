import React from 'react';
// AYGIT TECHNOLOGIES - MODERN MOTION IMPLEMENTATION
import {
  MotionDiv,
  AnimatePresence,
  useRef,
} from "./MotionWrapper";
import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  ChevronDown,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";
import { navigateTo } from "../router/Router";

const faqs = [
  {
    question:
      "Sitenizi kullanmak için teknik bilgiye ihtiyaç var mı?",
    answer:
      "Hayır. Sistemimiz, kod bilmeyen kullanıcılar düşünülerek tasarlanmıştır. Yönetim paneli son derece sade, kullanıcı dostu ve sezgiseldir. Tüm işlemleri birkaç tıklamayla gerçekleştirebilirsiniz.",
  },
  {
    question:
      "Tema seçtikten sonra içerikleri nasıl değiştireceğim?",
    answer:
      "Seçtiğiniz temanın tüm bölümleri yönetim panelinizde hazır olarak tanımlanır. Panel üzerinden başlıkları, metinleri, görselleri ve ikonları kolayca düzenleyebilirsiniz. Görsel yükleme ve içerik düzenleme işlemleri sürükle-bırak mantığıyla çalışır.",
  },
  {
    question:
      "Yönetim paneli üzerinden neleri kontrol edebilirim?",
    answer:
      "Yönetim panelinizden şunları kolayca kontrol edebilirsiniz: Tüm metin ve görsel içerikler,Ana menü ve alt sayfalar,Sosyal medya ve iletişim bilgileri,SEO ayarları (başlık, açıklama, anahtar kelime),WhatsApp bağlantısı, form ayarları ve butonlar,Tema rengi, logo ve favicon yüklemesi,Footer (alt bilgi) bölümü ve gizlilik politikaları",
  },
  {
    question:
      "Sitenin tüm içeriğini kendim düzenleyebilir miyim?",
    answer:
      "Evet, tüm içerik alanları sizin kontrolünüzdedir. Dilerseniz her yazıyı ve görseli değiştirebilir, yeni sayfalar oluşturabilir, mevcut yapıyı istediğiniz gibi güncelleyebilirsiniz.",
  },
  {
    question: "Mevcut web sitemi bu sisteme taşıyabilir miyim?",
    answer:
      "Evet, mevcut sitenizi Aygıt sistemine uyumlu şekilde yeniden kurabiliriz. Alan adınızı koruyarak yeni altyapıya geçiş yapılır. İsterseniz önce verilerinizi yedekleyip, aşamalı bir taşıma süreci de gerçekleştirebiliriz",
  },
];

const contactOptions = [
  {
    icon: MessageCircle,
    title: "Canlı Chat",
    description: "Destek ekibimizden anında yanıt alın",
    action: "Chat Başlat",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Phone,
    title: "Telefon Desteği",
    description: "Uzmanlarımızla doğrudan konuşun",
    action: "Hemen Arayın",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: Mail,
    title: "E-posta Desteği",
    description: "Detaylı sorularınızı bize gönderin",
    action: "E-posta Gönder",
    color: "from-blue-700 to-blue-800",
  },
];

// Safe constants to avoid JSX parsing issues
const RESPONSE_TIME = "2 saat";
const LESS_THAN_2_HOURS = "2 saat";

export function FAQSection() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsInView(true);
  }, []);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <MotionDiv
        initial={{ opacity: 0, scale: 0.8, rotate: -30 }}
        animate={
          isInView ? { opacity: 0.05, scale: 1, rotate: 0 } : {}
        }
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl"
      />
      <MotionDiv
        initial={{ opacity: 0, scale: 0.8, rotate: 30 }}
        animate={
          isInView ? { opacity: 0.05, scale: 1, rotate: 0 } : {}
        }
        transition={{
          duration: 2,
          delay: 0.5,
          ease: "easeOut",
        }}
        className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <Badge
            variant="outline"
            className="mb-4 px-4 py-2 bg-blue-50 text-blue-700 border-blue-200"
          >
            <HelpCircle className="w-4 h-4 mr-2" />
            Sık Sorulan Sorular
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Sorularınız mı Var?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Yanıtlarımız Burada
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kurumsal Web Altyapısı çözümlerimiz, uygulama süreci
            ve destek hizmetlerimiz hakkında en sık sorulan
            soruların yanıtlarını bulun.
          </p>
        </MotionDiv>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ List */}
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <MotionDiv
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                  }}
                >
                  <Card
                    className={`cursor-pointer transition-all duration-300 hover:shadow-lg border-0 bg-white/80 backdrop-blur-sm ${
                      openFAQ === index
                        ? "shadow-xl ring-2 ring-blue-200"
                        : "hover:shadow-md"
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <MotionDiv
                          animate={{
                            rotate: openFAQ === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ChevronDown className="w-5 h-5 text-blue-600" />
                        </MotionDiv>
                      </div>

                      <AnimatePresence>
                        {openFAQ === index && (
                          <MotionDiv
                            initial={{
                              opacity: 0,
                              height: 0,
                              marginTop: 0,
                            }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                              marginTop: 16,
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                              marginTop: 0,
                            }}
                            transition={{
                              duration: 0.4,
                              ease: "easeInOut",
                            }}
                            className="overflow-hidden"
                          >
                            <MotionDiv
                              initial={{ y: -10 }}
                              animate={{ y: 0 }}
                              transition={{ delay: 0.1 }}
                              className="text-gray-600 leading-relaxed"
                            >
                              {faq.answer}
                            </MotionDiv>
                          </MotionDiv>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </div>
          </MotionDiv>

          {/* Contact Support */}
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8">
              <Card className="p-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white border-0 shadow-xl">
                <MotionDiv
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView ? { opacity: 1, scale: 1 } : {}
                  }
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <h3 className="text-2xl font-bold mb-4">
                    Daha Fazla Yardıma mı İhtiyacınız Var?
                  </h3>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Aradığınız yanıtı bulamıyor musunuz? Uzman
                    destek ekibimiz tüm sorularınızda size
                    yardımcı olmak için burada.
                  </p>
                </MotionDiv>

                <div className="space-y-4">
                  {contactOptions.map((option, index) => (
                    <MotionDiv
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : {}
                      }
                      transition={{
                        duration: 0.6,
                        delay: 0.8 + index * 0.1,
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        if (index === 0)
                          navigateTo("/support/live-chat");
                        else navigateTo("/support");
                      }}
                      className={`p-4 rounded-xl bg-gradient-to-r ${option.color} hover:shadow-lg transition-all duration-300 cursor-pointer group`}
                    >
                      <div className="flex items-center space-x-3">
                        <MotionDiv
                          whileHover={{
                            rotate: 15,
                            scale: 1.1,
                          }}
                          className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center"
                        >
                          <option.icon className="w-5 h-5 text-white" />
                        </MotionDiv>
                        <div className="flex-1">
                          <h4 className="font-semibold text-white">
                            {option.title}
                          </h4>
                          <p className="text-blue-100 text-sm">
                            {option.description}
                          </p>
                        </div>
                      </div>
                      <MotionDiv
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="mt-3 text-center"
                      >
                        <span className="text-white text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                          {option.action}
                        </span>
                      </MotionDiv>
                    </MotionDiv>
                  ))}
                </div>

                <MotionDiv
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="mt-6 pt-6 border-t border-blue-500/30"
                >
                  <div className="text-center">
                    <div className="text-sm text-blue-200 mb-1">
                      Yanıt Süresi
                    </div>
                    <div className="text-lg font-bold text-white">
                      {RESPONSE_TIME}
                    </div>
                  </div>
                </MotionDiv>
              </Card>

              {/* Additional info card */}
              <MotionDiv
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="mt-6"
              >
                <Card className="p-4 bg-white/60 backdrop-blur-sm border-blue-200">
                  <div className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Bilgi Bankası
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Kapsamlı dokümantasyon ve eğitim
                      materyallerimizi keşfedin
                    </p>
                    <button
                      onClick={() => navigateTo("/support/docs")}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors cursor-pointer"
                    >
                      Makalelere Göz Atın →
                    </button>
                  </div>
                </Card>
              </MotionDiv>
            </div>
          </MotionDiv>
        </div>

        {/* Stats */}
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "1,200+", label: "Yanıtlanan Soru" },
            { number: LESS_THAN_2_HOURS, label: "Ortalama Yanıt" },
            { number: "%99.5", label: "Memnuniyet Oranı" },
            { number: "7/24", label: "Destek Hizmeti" },
          ].map((stat, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 1.8 + index * 0.1,
              }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-600 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </section>
  );
}