import React from 'react';
// AYGIT TECHNOLOGIES - MODERN MOTION IMPLEMENTATION
import { motion, MotionDiv } from "./MotionWrapper";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Youtube,
  ArrowRight,
  Globe,
  Award,
  Shield,
  Clock,
  Phone,
  Mail,
  MapPin,
  Star,
  Zap,
  Users,
  BarChart3,
  Settings
} from "lucide-react";
// Logo imports - white logo for dark backgrounds, black logo for light backgrounds  
import AygitLogoWhite from "../public/logos/aygit-technologies-logo-white.png";
import { navigateTo } from "../router/Router";

const footerLinks = {
  "Hizmetler": [
    { name: "Kurumsal Web Sitesi", href: "/services/kurumsal-web-sitesi" },
    { name: "Modern Tema Seçenekleri", href: "/services/modern-temalar" },
    { name: "Ajanslar için Partnerlik", href: "/services/ajans-partnerligi" },
    { name: "Builder Teknolojisi", href: "/services/builder-teknolojisi" }
  ],
  "Özellikler": [
    { name: "SEO Optimizasyonu", href: "/features/seo" },
    { name: "Analitik Raporlar", href: "/features/analytics" },
    { name: "Email Pazarlama", href: "/features/email-marketing" },
    { name: "Canlı Destek", href: "/features/live-support" },
    { name: "SSL Sertifikası", href: "/features/ssl" }
  ],

  "Destek": [
    { name: "Yardım Merkezi", href: "/support" },
    { name: "Canlı Destek", href: "/support/live-chat" },
    { name: "Dokümantasyon", href: "/support/docs" },
    { name: "Video Eğitimler", href: "/support/training" },
    { name: "Topluluk Forum", href: "/support" },
    { name: "İletişim", href: "/support" }
  ],
  "Şirket": [
    { name: "Hakkımızda", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Fiyatlandırma", href: "/pricing" },
    { name: "Kariyer", href: "/support" },
    { name: "Ortaklık", href: "/services/ajans-partnerligi" },
    { name: "İletişim", href: "/support" }
  ]
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/aygit-technologies", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/aygittechnologies", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com/aygittechnologies", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com/@aygittechnologies", label: "YouTube" }
];

const trustBadges = [
  { icon: Shield, text: "SSL Sertifikalı", color: "text-green-400" },
  { icon: Clock, text: "%99.9 Uptime", color: "text-blue-400" },
  { icon: Award, text: "ISO 27001", color: "text-purple-400" },
  { icon: Star, text: "4.9/5 Müşteri Memnuniyeti", color: "text-yellow-400" }
];

const contactInfo = [
  { icon: Phone, text: "0850 XXX XX XX", href: "tel:+908501234567" },
  { icon: Mail, text: "info@aygittechnologies.com", href: "mailto:info@aygittechnologies.com" },
  { icon: MapPin, text: "İstanbul, Türkiye", href: "#" }
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm-20-18c9.941 0 18 8.059 18 18s-8.059 18-18 18-18-8.059-18-18 8.059-18 18-18z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Newsletter Section */}
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 py-16 border-b border-white/10"
      >
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full mb-6 border border-blue-500/20"
              >
                <Zap className="w-4 h-4" />
                <span className="font-medium">Haftalık Bülten</span>
              </motion.div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Kurumsal Web Dünyasından
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Güncel Kalın</span>
              </h3>
              
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                En son web teknolojileri, dijital dönüşüm trendleri ve kurumsal çözümler hakkında 
                bilgilendirmelerimizi doğrudan e-posta kutunuzda alın.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2 text-blue-300">
                  <BarChart3 className="w-5 h-5" />
                  <span className="text-sm">Teknoloji İçgörüleri</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-300">
                  <Users className="w-5 h-5" />
                  <span className="text-sm">Başarı Hikayeleri</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-300">
                  <Globe className="w-5 h-5" />
                  <span className="text-sm">Web Geliştirme İpuçları</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-300">
                  <Settings className="w-5 h-5" />
                  <span className="text-sm">Platform Güncellemeleri</span>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10"
            >
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-white mb-2">Ücretsiz Abone Olun</h4>
                <p className="text-gray-400 text-sm">Haftada bir kez, spam yok, dilediğiniz zaman çıkabilirsiniz</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <Input
                  type="email"
                  placeholder="E-posta adresinizi girin"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                />
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 group whitespace-nowrap">
                  Abone Ol
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <p className="text-xs text-gray-400">
                Abone olarak <button className="text-blue-400 hover:text-blue-300 underline">Gizlilik Politikamızı</button> ve <button className="text-blue-400 hover:text-blue-300 underline">Hizmet Şartlarımızı</button> kabul etmiş olursunuz.
              </p>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="text-sm text-gray-300 mb-2">📊 Son 30 günde katılan</div>
                <div className="text-2xl font-bold text-white">1,247+ <span className="text-lg font-normal text-gray-400">kurumsal müşteri</span></div>
              </div>
            </motion.div>
          </div>
        </div>
      </MotionDiv>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 xl:grid-cols-12 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3 xl:col-span-3"
            >
              <motion.button 
                onClick={() => navigateTo('/')}
                className="flex items-center mb-6 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative"
                >
                  <img 
                    src={AygitLogoWhite} 
                    alt="Aygıt Technologies" 
                    className="h-10 w-auto"
                  />
                  <motion.div
                    className="absolute inset-0 bg-blue-400/30 rounded-lg blur-lg"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 0.3, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.button>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                2015'ten beri işletmeleri kurumsal web çözümleri, 
                profesyonel altyapı hizmetleri ve güvenilir hosting teknolojileri ile güçlendiriyoruz.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    whileHover={{ x: 4 }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-blue-300 transition-all duration-300"
                  >
                    <contact.icon className="w-4 h-4" />
                    <span className="text-sm">{contact.text}</span>
                  </motion.a>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <badge.icon className={`w-4 h-4 ${badge.color}`} />
                    <span className="text-xs text-gray-400">{badge.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Footer Links - Clean Layout */}
            <div className="lg:col-span-9 xl:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-semibold mb-6 text-white text-lg">{category}</h4>
                    <ul className="space-y-3">
                      {links.map((link, index) => (
                        <li key={index}>
                          <motion.button
                            onClick={() => navigateTo(link.href)}
                            whileHover={{ x: 4 }}
                            className="text-gray-300 hover:text-blue-300 transition-all duration-300 text-sm text-left w-full"
                          >
                            {link.name}
                          </motion.button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 py-6 md:py-6 lg:py-6 border-t border-white/10 bg-black/20 min-h-[100px] md:min-h-auto"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-400 text-sm text-center lg:text-left">
              © 2024 Aygıt Technologies. Tüm hakları saklıdır. 
              <span className="block lg:inline lg:ml-2 mt-1 lg:mt-0">
                2015'ten beri dijital dönüşüme öncülük ediyoruz.
              </span>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-2 text-sm">
              <motion.button 
                onClick={() => navigateTo('/privacy')}
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-blue-300 transition-colors"
              >
                Gizlilik Politikası
              </motion.button>
              <motion.button 
                onClick={() => navigateTo('/terms')}
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-blue-300 transition-colors"
              >
                Hizmet Şartları
              </motion.button>
              <motion.button 
                onClick={() => navigateTo('/cookies')}
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-blue-300 transition-colors"
              >
                Çerez Politikası
              </motion.button>
              <motion.button 
                onClick={() => navigateTo('/accessibility')}
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-blue-300 transition-colors"
              >
                Erişilebilirlik
              </motion.button>
            </div>
          </div>
          
          {/* Additional Bottom Info */}
          <div className="mt-4 pt-4 border-t border-white/5 flex flex-col lg:flex-row justify-between items-center text-xs text-gray-500">
            <div className="mb-2 lg:mb-0">
              🇹🇷 Türkiye merkezli, küresel çapta hizmet • Verileriniz Türkiye'de güvende
            </div>
            <div className="flex items-center space-x-4">
              <span>🔒 256-bit SSL Şifreli</span>
              <span>⚡ 99.9% Uptime Garantili</span>
              <span>🛡️ SOC 2 Uyumlu</span>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}