// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import { motion, useInView } from "../../components/FramerMotionSafe";

// TYPE OVERRIDE - Fix BuilderTechnologyPage motion.div issues
const MotionDiv = motion.div as any;
import { useRef, useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { 
  CheckCircle, 
  ArrowRight,
  MousePointer,
  Palette,
  Eye,
  Zap,
  Code,
  Settings,
  Smartphone,
  Play,
  Monitor,
  Tablet,
  Move,
  Edit3,
  Layers,
  Grid,
  Type,
  Image,
  Square,
  Circle,
  Triangle,
  Phone
} from "lucide-react";
import { ImageWithFallback } from "../../components/figma/ImageWithFallback";
import { useContactCallbackForm } from "../../components/ContactCallbackForm";
import React from "react";

const builderFeatures = [
  {
    icon: MousePointer,
    title: "Sürükle-Bırak Blok Sistemi",
    description: "Kod yazmadan sayfalarınızı görsel olarak oluşturun",
    details: ["50+ hazır blok", "Kolay blok yerleştirme", "Otomatik responsive"]
  },
  {
    icon: Layers,
    title: "Hazır Şablonlar & Bileşenler",
    description: "Profesyonel tasarım şablonları ile hızla başlayın",
    details: ["100+ sayfa şablonu", "Sektörel tasarımlar", "Özelleştirilebilir bileşenler"]
  },
  {
    icon: Palette,
    title: "Renk, Font, Buton Ayarları",
    description: "Markanıza uygun görsel kimlik oluşturun",
    details: ["Sınırsız renk paleti", "Google Fonts entegrasyonu", "Özel buton stilleri"]
  },
  {
    icon: Eye,
    title: "Gerçek Zamanlı Ön İzleme",
    description: "Değişikliklerinizi anında görün ve test edin",
    details: ["Canlı önizleme", "Mobil/desktop görünüm", "Hızlı değişiklik"]
  },
  {
    icon: Zap,
    title: "Panelden Anında Yayınlama",
    description: "Tek tıkla sitenizi yayına alın",
    details: ["Otomatik yedekleme", "Versiyon kontrolü", "Rollback imkanı"]
  },
  {
    icon: Code,
    title: "Gelişmiş HTML/CSS Editörü",
    description: "İleri seviye kullanıcılar için kod editörü",
    details: ["Syntax highlighting", "Auto-complete", "CSS özelleştirme"]
  }
];

const blockCategories = [
  {
    name: "Layout Blokları",
    count: 15,
    icon: Grid,
    blocks: ["Header", "Footer", "Container", "Grid", "Flex"]
  },
  {
    name: "İçerik Blokları",
    count: 20,
    icon: Type,
    blocks: ["Başlık", "Paragraf", "Liste", "Quote", "Divider"]
  },
  {
    name: "Medya Blokları",
    count: 12,
    icon: Image,
    blocks: ["Resim", "Video", "Galeri", "Slider", "Embed"]
  },
  {
    name: "Form Blokları",
    count: 8,
    icon: Square,
    blocks: ["Contact Form", "Newsletter", "Survey", "Upload"]
  },
  {
    name: "İnteraktif Bloklar",
    count: 15,
    icon: Triangle,
    blocks: ["Button", "Modal", "Accordion", "Tab", "Carousel"]
  },
  {
    name: "Kurumsal Bloklar",
    count: 10,
    icon: Circle,
    blocks: ["Hizmetler", "Ekip", "Referanslar", "İstatistik"]
  }
];

const deviceViews = [
  { name: "Desktop", icon: Monitor, width: "100%", active: true },
  { name: "Tablet", icon: Tablet, width: "768px", active: false },
  { name: "Mobile", icon: Smartphone, width: "375px", active: false }
];

const workflowSteps = [
  {
    step: 1,
    title: "Şablon Seçin",
    description: "Sektörünüze uygun hazır şablondan başlayın",
    icon: Grid,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
  },
  {
    step: 2,
    title: "Blokları Sürükleyin",
    description: "İhtiyacınız olan blokları sayfaya sürükleyin",
    icon: MousePointer,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop"
  },
  {
    step: 3,
    title: "İçeriği Düzenleyin",
    description: "Metinleri değiştirin, görselleri yükleyin",
    icon: Edit3,
    image: "https://images.unsplash.com/photo-1596526131003-8dcdd186d6d0?w=300&h=200&fit=crop"
  },
  {
    step: 4,
    title: "Yayınlayın",
    description: "Tek tıkla sitenizi yayına alın",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=300&h=200&fit=crop"
  }
];

export function BuilderTechnologyPage() {
  const heroRef = useRef(null);
  const demoRef = useRef(null);
  const featuresRef = useRef(null);
  const blocksRef = useRef(null);
  const workflowRef = useRef(null);
  
  const heroInView = useInView(heroRef);
  const demoInView = useInView(demoRef);
  const featuresInView = useInView(featuresRef);
  const blocksInView = useInView(blocksRef);
  const workflowInView = useInView(workflowRef);

  const [activeDevice, setActiveDevice] = useState("Desktop");
  const [selectedBlock, setSelectedBlock] = useState(null);
  const { openForm, CallbackFormComponent } = useContactCallbackForm();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Header Spacer */}
        <div className="h-32"></div>

        {/* Hero Section */}
        <section ref={heroRef} className="relative pt-20 pb-20 bg-gradient-to-br from-blue-600 via-indigo-700 to-blue-800 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <MotionDiv
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30">
                  <Code className="w-4 h-4 mr-2" />
                  Visual Page Builder
                </Badge>
                
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Builder
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-300">
                    {" "}Teknolojisi
                  </span>
                </h1>
                
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Kod bilmeden profesyonel web sayfaları oluşturun. Sürükle-bırak 
                  teknolojisi ile sayfalarınızı görsel olarak düzenleyin, gerçek 
                  zamanlı önizleme ile anında sonucu görün.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button 
                    size="lg" 
                    onClick={openForm}
                    className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 flex items-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Demo Talebi</span>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Video İzle
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">80+</div>
                    <div className="text-sm text-blue-200">Hazır Blok</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">0%</div>
                    <div className="text-sm text-blue-200">Kod Gerekli</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">Live</div>
                    <div className="text-sm text-blue-200">Önizleme</div>
                  </div>
                </div>
              </MotionDiv>

              <MotionDiv
                initial={{ opacity: 0, x: 50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
                  {/* Mock Builder Interface */}
                  <div className="bg-gray-900 rounded-xl p-4 mb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-white text-sm font-medium">Page Builder</div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {["Header", "Text", "Image", "Button"].map((block, i) => (
                        <MotionDiv
                          key={block}
                          whileHover={{ scale: 1.1 }}
                          className="bg-blue-600 text-white text-xs p-2 rounded text-center cursor-pointer"
                        >
                          {block}
                        </MotionDiv>
                      ))}
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 h-32 flex items-center justify-center">
                      <MotionDiv
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-gray-400 text-sm"
                      >
                        Drag & Drop Area
                      </MotionDiv>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                      Preview
                    </Button>
                    <Button size="sm" className="flex-1 bg-indigo-600 hover:bg-indigo-700">
                      Publish
                    </Button>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <MousePointer className="w-4 h-4" />
                    <span className="text-sm font-medium">Drag & Drop</span>
                  </div>
                </div>
              </MotionDiv>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/20" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <MotionDiv
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Hemen Başlayın
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Visual Page Builder ile profesyonel web sayfalarınızı dakikalar içinde oluşturun.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={openForm}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4"
                >
                  <Code className="w-5 h-5 mr-2" />
                  Demo Talep Et
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Video İzle
                </Button>
              </div>
            </MotionDiv>
          </div>
        </section>
      </div>

      {/* Callback Form Component */}
      <CallbackFormComponent />
    </>
  );
}