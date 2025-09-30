// AYGIT TECHNOLOGIES - MOTION TYPE FIX
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// TYPE OVERRIDE - Fix HeaderWithMegaMenu motion.div issues
const MotionDiv = motion.div as any;
import { Button } from "./ui/button";
import { Menu, X, ChevronDown, Palette, Smartphone, Globe, BarChart3, Users, Shield, Settings, ArrowRight, Play, FileText, Headphones, Award, Phone } from "lucide-react";
// Logo imports - white logo for dark backgrounds, black logo for light backgrounds  
import { AygitLogoBlack, AygitLogoWhite } from "../assets";
import { navigateTo } from "../router/Router";
import { useContactCallbackForm } from "./ContactCallbackForm";

const megaMenuData = {
  "Çözümler": {
    sections: [
      {
        title: "Kurumsal Çözümler",
        icon: Globe,
        items: [
          { name: "Temel Kurumsal", href: "/solutions/basic-corporate", description: "Küçük işletmeler için temel web altyapısı" },
          { name: "Profesyonel Kurumsal", href: "/solutions/professional-corporate", description: "Orta ölçekli işletmeler için gelişmiş çözümler" },
          { name: "Kurumsal Portal", href: "/solutions/enterprise-portal", description: "Büyük kurumlar i��in kapsamlı portal çözümleri" },
          { name: "B2B Platform", href: "/solutions/b2b-platform", description: "İş ortakları için B2B platformu" }
        ]
      },

      {
        title: "Özel Geliştirme",
        icon: Settings,
        items: [
          { name: "Özel Tasarım", href: "/solutions/custom-design", description: "Markanıza özel web tasarım çözümleri" },
          { name: "Mobil Uygulama", href: "/solutions/mobile-app", description: "İOS ve Android mobil uygulaması" }
        ]
      }
    ]
  },
  "Hizmetler": {
    sections: [
      {
        title: "Ana Hizmetlerimiz",
        icon: Globe,
        items: [
          { name: "Kurumsal Web Sitesi", href: "/services/kurumsal-web-sitesi", description: "Profesyonel kurumsal web altyapısı" },
          { name: "Modern Tema Seçenekleri", href: "/services/modern-temalar", description: "150+ premium tema koleksiyonu" },
          { name: "Ajanslar için Partnerlik", href: "/services/ajans-partnerligi", description: "%30 komisyon ile partner olun" },
          { name: "Builder Teknolojisi", href: "/services/builder-teknolojisi", description: "Kod yazmadan sayfa oluşturun" }
        ]
      },
      {
        title: "Özel Çözümler",
        icon: Settings,
        items: [
          { name: "Özel Tasarım", href: "/solutions/custom-design", description: "Markanıza özel web tasarım çözümleri" },
          { name: "Mobil Uygulama", href: "/solutions/mobile-app", description: "İOS ve Android mobil uygulaması" }
        ]
      },
      {
        title: "Destek & Eğitim",
        icon: Headphones,
        items: [
          { name: "7/24 Teknik Destek", href: "/support", description: "Kesintisiz destek hizmeti" },
          { name: "Video Eğitimler", href: "/support/training", description: "Adım adım eğitim videoları" },
          { name: "Dokümantasyon", href: "/support/docs", description: "Detaylı kullanım kılavuzları" }
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
          { name: "İletişim Formu", href: "/features/contact-form", description: "Gelişmiş iletişim form yönetimi" },
          { name: "Müşteri Portali", href: "/features/customer-portal", description: "Müşteri özel alanları" },
          { name: "Sosyal Medya Entegrasyonu", href: "/features/social-media", description: "Sosyal medya platformları entegrasyonu" }
        ]
      },
      {
        title: "Güvenlik ve Altyapı",
        icon: Shield,
        items: [
          { name: "SSL Sertifikası", href: "/features/ssl", description: "Güvenli web sitesi altyapısı" },
          { name: "Yedekleme Sistemi", href: "/features/backup", description: "Otomatik veri yedekleme" },
          { name: "Hız Optimizasyonu", href: "/features/speed", description: "Yüksek performans ve hız" }
        ]
      }
    ]
  },

};

export function HeaderWithMegaMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMegaMenu, setOpenMegaMenu] = useState<string | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const { openForm, CallbackFormComponent } = useContactCallbackForm();
  
  console.log("📘 HeaderWithMegaMenu RENDERING - White logo when not scrolled, black logo when scrolled");
  console.log(`🎯 Current URL path: ${window.location.pathname}`);

  const navItems = [
    { name: "Ana Sayfa", href: "/", type: "link" },
    { name: "Çözümler", href: "/solutions", type: "mega", key: "Çözümler" },
    { name: "Hizmetler", href: "/services", type: "mega", key: "Hizmetler" },
    { name: "Özellikler", href: "/features", type: "mega", key: "Özellikler" },
    { name: "Fiyatlar", href: "/pricing", type: "link" },
    { name: "Blog", href: "/blog", type: "link" },
    { name: "Destek", href: "/support", type: "link" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
      
      // After first scroll interaction, we're no longer on initial load
      if (isInitialLoad) {
        setIsInitialLoad(false);
      }
    };

    // Set initial scroll position
    const initialScrollTop = window.scrollY;
    setIsScrolled(initialScrollTop > 100);
    
    // Mark as loaded after a brief delay to ensure proper initial state
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [isInitialLoad]);

  const handleMegaMenuToggle = (key: string | null) => {
    setOpenMegaMenu(openMegaMenu === key ? null : key);
  };

  const handleMegaMenuClick = (key: string) => {
    setOpenMegaMenu(openMegaMenu === key ? null : key);
  };

  const handleMegaMenuHover = (key: string | null) => {
    setOpenMegaMenu(key);
  };

  const handleMegaMenuLeave = () => {
    // Slight delay to allow users to move to submenu
    setTimeout(() => {
      setOpenMegaMenu(null);
    }, 150);
  };

  // Homepage header styling - transparent background with white text/logo
  const getHeaderStyles = () => {
    // During initial load or when not scrolled, keep transparent
    if (isInitialLoad || !isScrolled) {
      return 'bg-transparent';
    } else {
      // White background when scrolled
      return 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200';
    }
  };

  const getTextColor = () => {
    // During initial load or when not scrolled, use white text
    if (isInitialLoad || !isScrolled) {
      return 'text-white hover:text-blue-200';
    } else {
      // Dark text when scrolled (white background)
      return 'text-gray-900 hover:text-blue-600';
    }
  };

  const getLogoSrc = () => {
    // Use white logo when transparent (dark/gradient background), black logo when white background
    const shouldUseWhiteLogo = (isInitialLoad || !isScrolled);
    console.log(`🎨 Logo src - isInitialLoad: ${isInitialLoad}, isScrolled: ${isScrolled}, shouldUseWhiteLogo: ${shouldUseWhiteLogo}`);
    
    if (shouldUseWhiteLogo) {
      return AygitLogoWhite; // White logo for dark/gradient backgrounds  
    } else {
      return AygitLogoBlack; // Black logo for light backgrounds
    }
  };

  const getUnderlineColor = () => {
    // During initial load or when not scrolled, use white underline
    if (isInitialLoad || !isScrolled) {
      return 'bg-white';
    } else {
      // Blue underline when scrolled (white background)
      return 'bg-blue-600';
    }
  };

  const getButtonStyles = () => {
    // During initial load or when not scrolled, use white text buttons
    if (isInitialLoad || !isScrolled) {
      return {
        ghost: 'text-white hover:text-blue-200 hover:bg-white/10',
        primary: 'bg-blue-600 text-white hover:bg-blue-700'
      };
    } else {
      // Dark text buttons when scrolled (white background)
      return {
        ghost: 'text-gray-900 hover:text-blue-600 hover:bg-blue-50',
        primary: 'bg-blue-600 text-white hover:bg-blue-700'
      };
    }
  };

  const getMobileMenuButtonColor = () => {
    // During initial load or when not scrolled, use white mobile button
    if (isInitialLoad || !isScrolled) {
      return 'text-white hover:text-blue-200';
    } else {
      // Dark mobile button when scrolled (white background)
      return 'text-gray-900 hover:text-blue-600';
    }
  };

  const buttonStyles = getButtonStyles();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 ${getHeaderStyles()}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <MotionDiv
            initial={{ scale: 0, x: -20 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex items-center group cursor-pointer"
            onClick={() => navigateTo('/')}
          >
            <MotionDiv
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative overflow-hidden rounded-lg"
            >
              <img 
                src={getLogoSrc()} 
                alt="Aygıt Technologies" 
                className="h-10 w-auto transition-all duration-300 relative z-10"
              />
              
              <MotionDiv
                className={`absolute top-0 left-0 h-full w-8 bg-gradient-to-r ${
                  (isInitialLoad || !isScrolled)
                    ? 'from-transparent via-white/60 to-transparent' 
                    : 'from-transparent via-blue-400/60 to-transparent'
                } skew-x-12`}
                initial={{ x: "-100%" }}
                whileHover={{ 
                  x: "calc(100% + 2rem)",
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
              />
              
              <MotionDiv
                className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md opacity-0 -z-10"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </MotionDiv>
          </MotionDiv>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.type === "mega" ? (
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className={`flex items-center space-x-1 font-medium transition-colors duration-300 relative group ${getTextColor()}`}
                    onClick={() => handleMegaMenuClick(item.key!)}
                    onMouseEnter={() => handleMegaMenuHover(item.key!)}
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openMegaMenu === item.key ? 'rotate-180' : ''
                      }`} 
                    />
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${getUnderlineColor()}`}></span>
                  </motion.button>
                ) : (
                  <motion.button
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.preventDefault();
                      console.log(`🔗 MAIN MENU CLICK: ${item.name} -> ${item.href}`);
                      navigateTo(item.href);
                      setOpenMegaMenu(null);
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className={`font-medium transition-colors duration-300 relative group ${getTextColor()}`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${getUnderlineColor()}`}></span>
                  </motion.button>
                )}

                {/* Mega Menu */}
                {item.type === "mega" && openMegaMenu === item.key && (
                  <MotionDiv
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 z-50"
                    onMouseEnter={() => handleMegaMenuHover(item.key!)}
                    onMouseLeave={handleMegaMenuLeave}
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
                                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    console.log(`🎯 MEGA MENU CLICK: ${subItem.name} -> ${subItem.href}`);
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
                      <div className="grid grid-cols-3 gap-6">
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
                          <Button 
                            size="sm" 
                            onClick={() => navigateTo('/solutions/enterprise-portal')}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                          >
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
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => navigateTo('/support/docs')}
                            className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                          >
                            İncele
                          </Button>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="flex items-center justify-center w-10 h-10 bg-purple-500 rounded-lg">
                              <ArrowRight className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Tümünü Görüntüle</h4>
                              <p className="text-sm text-gray-600">Kategori sayfasını ziyaret et</p>
                            </div>
                          </div>
                          <Button 
                            size="sm" 
                            onClick={() => {
                              navigateTo(item.href);
                              setOpenMegaMenu(null);
                            }}
                            className="bg-purple-600 hover:bg-purple-700 text-white"
                          >
                            Tümünü Gör
                          </Button>
                        </div>
                      </div>
                    </div>
                  </MotionDiv>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <MotionDiv
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="hidden lg:flex items-center space-x-4"
          >
            <Button
              variant="ghost"
              onClick={() => navigateTo('/login')}
              className={`font-medium transition-colors duration-300 ${buttonStyles.ghost}`}
            >
              Giriş Yap
            </Button>
            <Button 
              onClick={openForm}
              className={`px-6 py-2 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${buttonStyles.primary} flex items-center space-x-2`}
            >
              <Phone className="w-4 h-4" />
              <span>Sizi Arayalım</span>
            </Button>
          </MotionDiv>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden transition-colors duration-300 ${getMobileMenuButtonColor()}`}
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
              <div key={item.name}>
                <motion.button
                  onClick={() => {
                    if (item.type === "link") {
                      navigateTo(item.href);
                      setIsMenuOpen(false);
                    } else if (item.type === "mega") {
                      handleMegaMenuClick(item.key!);
                    }
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center justify-between py-3 text-gray-800 font-medium hover:text-blue-600 transition-colors w-full text-left"
                >
                  <span>{item.name}</span>
                  {item.type === "mega" && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openMegaMenu === item.key ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </motion.button>
                
                {/* Mobile Mega Menu */}
                {item.type === "mega" && openMegaMenu === item.key && (
                  <MotionDiv
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="ml-4 mt-2 space-y-2"
                  >
                    {megaMenuData[item.key as keyof typeof megaMenuData]?.sections.map((section) => (
                      <div key={section.title} className="py-2">
                        <h4 className="text-sm font-semibold text-gray-600 mb-2">{section.title}</h4>
                        {section.items.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                              e.preventDefault();
                              e.stopPropagation();
                              console.log(`📱 MOBILE MEGA MENU CLICK: ${subItem.name} -> ${subItem.href}`);
                              navigateTo(subItem.href);
                              setOpenMegaMenu(null);
                              setIsMenuOpen(false);
                            }}
                            className="block py-1 text-sm text-gray-700 hover:text-blue-600 transition-colors w-full text-left"
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    ))}
                  </MotionDiv>
                )}
              </div>
            ))}
            <div className="mt-4 space-y-3">
              <Button 
                variant="outline" 
                onClick={() => navigateTo('/login')}
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Giriş Yap
              </Button>
              <Button 
                onClick={openForm}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Sizi Arayalım</span>
              </Button>
            </div>
          </motion.nav>
        )}
      </div>

      {/* Callback Form */}
      <CallbackFormComponent />
    </motion.header>
  );
}