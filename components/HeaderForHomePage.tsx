import React from 'react';
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown, ShoppingCart, Palette, Smartphone, Globe, BarChart3, Users, Shield, Settings, ArrowRight, Play, FileText, Headphones, Award } from "lucide-react";
import { useState, useEffect } from "react";
// Logo imports - white logo for homepage (always dark background)
import AygitLogoWhite from "../assets/logos/aygit-beyaz.png";
import { navigateTo } from "../router/Router";

const megaMenuData = {
  "Çözümler": {
    sections: [
      {
        title: "Kurumsal Web Siteleri",
        icon: ShoppingCart,
        items: [
          { name: "Temel Kurumsal Site", href: "/solutions/basic-corporate", description: "Küçük işletmeler için ideal web sitesi" },
          { name: "Profesyonel Kurumsal Site", href: "/solutions/professional-corporate", description: "Gelişmiş özelliklerle büyük ölçekli web sitesi" },
          { name: "Kurumsal Portal", href: "/solutions/enterprise-portal", description: "Büyük şirketler için özel portal çözümleri" },
          { name: "B2B Web Platformu", href: "/solutions/b2b-platform", description: "Şirketler arası iş geliştirme platformları" }
        ]
      },
      {
        title: "Tasarım ve UX",
        icon: Palette,
        items: [
          { name: "Özel Tasarım", href: "/solutions/custom-design", description: "Markanıza özel web tasarım çözümleri" },
          { name: "Mobil Uyumlu Tasarım", href: "/solutions/responsive-design", description: "Tüm cihazlarda mükemmel görünüm" },
          { name: "Kullanıcı Deneyimi", href: "/solutions/user-experience", description: "Müşteri odaklı kullanıcı deneyimi" },
          { name: "Marka Kimliği", href: "/solutions/brand-identity", description: "Güçlü kurumsal marka kimliği oluşturma" }
        ]
      },
      {
        title: "Mobil ve Web Uygulamaları",
        icon: Smartphone,
        items: [
          { name: "Mobil Uygulama", href: "/solutions/mobile-app", description: "iOS ve Android kurumsal uygulamalar" },
          { name: "PWA Çözümleri", href: "/solutions/pwa", description: "Hızlı ve güvenilir web uygulamaları" },
          { name: "Web Portal Geliştirme", href: "/solutions/web-portal", description: "Kurumsal web portal çözümleri" }
        ]
      }
    ]
  },
  "Özellikler": {
    sections: [
      {
        title: "Dijital Pazarlama",
        icon: BarChart3,
        items: [
          { name: "SEO Optimizasyonu", href: "/features/seo", description: "Google'da üst sıralarda yer alın" },
          { name: "Sosyal Medya Entegrasyonu", href: "/features/social-media", description: "Tüm sosyal platformlarla entegrasyon" },
          { name: "E-mail Pazarlama", href: "/features/email-marketing", description: "Otomatik email kampanyaları" },
          { name: "Analitik Raporlar", href: "/features/analytics", description: "Detaylı web sitesi ve ziyaretçi raporları" }
        ]
      },
      {
        title: "Müşteri Yönetimi",
        icon: Users,
        items: [
          { name: "CRM Sistemi", href: "/features/crm", description: "Müşteri ilişkileri yönetimi" },
          { name: "Canlı Destek", href: "/features/live-support", description: "7/24 müşteri desteği sistemi" },
          { name: "İletişim Formu", href: "/features/contact-forms", description: "Gelişmiş iletişim form yönetimi" },
          { name: "Müşteri Portali", href: "/features/customer-portal", description: "Müşteri özel alanları" }
        ]
      },
      {
        title: "Güvenlik ve Altyapı",
        icon: Shield,
        items: [
          { name: "SSL Sertifikası", href: "/features/ssl", description: "Güvenli web sitesi altyapısı" },
          { name: "Yedekleme Sistemi", href: "/features/backup", description: "Otomatik veri yedekleme" },
          { name: "Hız Optimizasyonu", href: "/features/speed", description: "Yüksek performans ve hız" },
          { name: "Sunucu Yönetimi", href: "/features/hosting", description: "Güvenilir hosting çözümleri" }
        ]
      }
    ]
  },
  "Entegrasyonlar": {
    sections: [
      {
        title: "İş Uygulamaları",
        icon: Settings,
        items: [
          { name: "CRM Entegrasyonları", href: "/integrations/crm-systems", description: "Müşteri yönetim sistemleri entegrasyonu" },
          { name: "ERP Entegrasyonları", href: "/integrations/erp-systems", description: "Kurumsal kaynak planlaması entegrasyonu" },
          { name: "Muhasebe Sistemi", href: "/integrations/accounting", description: "Muhasebe yazılımları entegrasyonu" },
          { name: "İK Sistemi", href: "/integrations/hr-systems", description: "İnsan kaynakları sistemi entegrasyonu" }
        ]
      },
      {
        title: "Dijital Platformlar",
        icon: Globe,
        items: [
          { name: "Google Workspace", href: "/integrations/google-workspace", description: "Google iş uygulamaları entegrasyonu" },
          { name: "Microsoft 365", href: "/integrations/microsoft-365", description: "Microsoft iş uygulamaları entegrasyonu" },
          { name: "Sosyal Medya API'ları", href: "/integrations/social-media-apis", description: "Sosyal medya platformları entegrasyonu" },
          { name: "Analitik Araçları", href: "/integrations/analytics-tools", description: "Web analitik araçları entegrasyonu" }
        ]
      },
      {
        title: "İletişim ve İş Akışı",
        icon: Award,
        items: [
          { name: "Email Servisleri", href: "/integrations/email-services", description: "Profesyonel email sistemleri" },
          { name: "Dokümantasyon", href: "/integrations/documentation", description: "Akıllı doküman yönetimi" },
          { name: "Proje Yönetimi", href: "/integrations/project-management", description: "Proje takip ve yönetim araçları" }
        ]
      }
    ]
  }
};

export function HeaderForHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
  
  // Always use white text/logo for homepage - no conditional states needed
  console.log("🏠 HeaderForHomePage COMPONENT RENDERING - WHITE LOGO/TEXT MODE");

  const navItems = [
    { name: "Ana Sayfa", href: "/", type: "link" },
    { name: "Çözümler", href: "#", type: "mega", key: "Çözümler" },
    { name: "Özellikler", href: "#", type: "mega", key: "Özellikler" },
    { name: "Entegrasyonlar", href: "#", type: "mega", key: "Entegrasyonlar" },
    { name: "Fiyatlar", href: "/pricing", type: "link" },
    { name: "Blog", href: "/blog", type: "link" },
    { name: "Destek", href: "/support", type: "link" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 300);
    };

    // Initialize with default values
    setIsScrolled(false);
    console.log("🟢 HeaderForHomePage MOUNTED - WHITE logo and text ACTIVE");

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMegaMenuToggle = (key: string | null) => {
    setOpenMegaMenu(openMegaMenu === key ? null : key);
  };

  // STATIC STYLES - NO FUNCTIONS, NO CONDITIONS
  console.log("🎨 HeaderForHomePage: Using STATIC WHITE styles");

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, x: -20 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex items-center group cursor-pointer"
            onClick={() => navigateTo('/')}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden rounded-lg"
            >
              <img 
                src={AygitLogoWhite} 
                alt="Aygıt Technologies" 
                className="h-10 w-auto transition-all duration-300 relative z-10"
              />
              
              <motion.div
                className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-12"
                initial={{ x: "-100%" }}
                whileHover={{ 
                  x: "calc(100% + 2rem)",
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
              />
              
              <motion.div
                className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md opacity-0 -z-10"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.type === "mega" ? (
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex items-center space-x-1 font-medium transition-colors duration-300 relative group text-white hover:text-blue-200"
                    style={{ color: 'white !important' }}
                    onMouseEnter={() => handleMegaMenuToggle(item.key!)}
                    onMouseLeave={() => handleMegaMenuToggle(null)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openMegaMenu === item.key ? 'rotate-180' : ''
                      }`} 
                    />
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-white"></span>
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={() => {
                      navigateTo(item.href);
                      setOpenMegaMenu(null);
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="font-medium transition-colors duration-300 relative group text-white hover:text-blue-200"
                    style={{ color: 'white !important' }}
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full bg-white"></span>
                  </motion.button>
                )}

                {/* Mega Menu */}
                {item.type === "mega" && openMegaMenu === item.key && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 z-50"
                    onMouseEnter={() => handleMegaMenuToggle(item.key!)}
                    onMouseLeave={() => handleMegaMenuToggle(null)}
                  >
                    <div className="grid grid-cols-3 gap-8">
                      {megaMenuData[item.key as keyof typeof megaMenuData]?.sections.map((section, sectionIndex) => (
                        <div key={section.title}>
                          <div className="flex items-center space-x-2 mb-4">
                            <div className="flex items-center justify-center w-8 h-8 bg-blue-500/10 rounded-lg">
                              <section.icon className="w-4 h-4 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900">{section.title}</h3>
                          </div>
                          <ul className="space-y-3">
                            {section.items.map((subItem, subIndex) => (
                              <li key={subItem.name}>
                                <button
                                  onClick={() => {
                                    navigateTo(subItem.href);
                                    setOpenMegaMenu(null);
                                  }}
                                  className="group flex items-start space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 w-full text-left"
                                >
                                  <div className="flex-1">
                                    <div className="flex items-center space-x-2">
                                      <span className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {subItem.name}
                                      </span>
                                      <ArrowRight className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-blue-600 transition-all duration-200" />
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">{subItem.description}</p>
                                  </div>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Featured Section */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-lg">
                              <Play className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Demo İzleyin</h4>
                              <p className="text-sm text-gray-600">Platformumuzu keşfedin</p>
                            </div>
                          </div>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                            Demo İzle
                          </Button>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-lg">
                              <FileText className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Başlangıç Kılavuzu</h4>
                              <p className="text-sm text-gray-600">Adım adım rehber</p>
                            </div>
                          </div>
                          <Button size="sm" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                            İncele
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <Button
              variant="ghost"
              className="font-medium transition-colors duration-300 text-white hover:text-blue-200 hover:bg-white/10"
              style={{ color: 'white !important' }}
            >
              Giriş Yap
            </Button>
            <Button 
              className="px-6 py-2 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
              style={{ color: 'white !important' }}
            >
              Ücretsiz Deneyin
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden transition-colors duration-300 text-white hover:text-blue-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-6 bg-white/95 backdrop-blur-lg rounded-xl border border-gray-200 shadow-lg px-6 mb-4"
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => {
                  if (item.type === "link") {
                    navigateTo(item.href);
                  }
                  setIsMenuOpen(false);
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="block py-3 text-gray-800 font-medium hover:text-blue-600 transition-colors w-full text-left"
              >
                {item.name}
              </motion.button>
            ))}
            <div className="mt-4 space-y-3">
              <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Giriş Yap
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium">
                Ücretsiz Deneyin
              </Button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}