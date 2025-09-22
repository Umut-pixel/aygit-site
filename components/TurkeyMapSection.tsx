import React from 'react';
import { motion } from "./FramerMotionSafe";
import { MapPin, Users, TrendingUp, Globe } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useContactCallbackForm } from "./ContactCallbackForm";
// Turkey map image - using placeholder for now
const newTurkeyMap = "https://images.unsplash.com/photo-1583249598328-9e21c7b6e5a5?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3";

// Turkish cities - streamlined to show only major, well-positioned cities that shine beautifully
const activeCities = [
  { 
    name: "İstanbul", 
    users: 35, 
    growth: "+24%", 
    position: { left: "26%", top: "37%" }, // Northwestern Turkey, Bosphorus strait - moved down by 5%
    priority: "high"
  },
  { 
    name: "Ankara", 
    users: 28, 
    growth: "+18%", 
    position: { left: "46%", top: "48%" }, // Central Anatolia - adjusted for new map
    priority: "high"
  },
  { 
    name: "İzmir", 
    users: 20, 
    growth: "+31%", 
    position: { left: "28%", top: "54%" }, // Western Aegean coast - moved up and right
    priority: "medium"
  },
  { 
    name: "Antalya", 
    users: 12, 
    growth: "+45%", 
    position: { left: "40%", top: "54%" }, // Mediterranean coast - moved up by 20%
    priority: "medium"
  },
  { 
    name: "Trabzon", 
    users: 5, 
    growth: "+29%", 
    position: { left: "64%", top: "42%" }, // Black Sea coast - moved down 10% and left 10%
    priority: "accent"
  }
];

const totalUsers = activeCities.reduce((sum, city) => sum + city.users, 0);

export function TurkeyMapSection() {
  const { openForm, CallbackFormComponent } = useContactCallbackForm();
  
  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full mb-6 border border-blue-500/20"
          >
            <Globe className="w-4 h-4" />
            <span className="font-medium">Türkiye Genelinde Aktif</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Aktif Kullanıcı
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Haritası</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Türkiye'nin dört bir yanından işletmeler Aygıt Technologies ile 
            kurumsal web altyapısı yolculuklarını başarıyla sürdürüyor.
          </p>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-4xl mx-auto"
          >
            <Card className="p-6 text-center bg-white/5 backdrop-blur-lg border-blue-500/20 hover:bg-white/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                100+
              </div>
              <p className="text-gray-400">Aktif Kullanıcı</p>
            </Card>

            <Card className="p-6 text-center bg-white/5 backdrop-blur-lg border-green-500/20 hover:bg-white/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-4">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                25+
              </div>
              <p className="text-gray-400">Aktif Şehir</p>
            </Card>

            <Card className="p-6 text-center bg-white/5 backdrop-blur-lg border-purple-500/20 hover:bg-white/10 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-4">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                81
              </div>
              <p className="text-gray-400">İl </p>
            </Card>
          </motion.div>
        </motion.div>

        {/* Turkey Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative w-full mx-auto"
        >
          {/* Main Map Container */}
          <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-3xl p-3 md:p-6 border border-blue-500/20 shadow-2xl">
            {/* Map Background with Real Turkey Map */}
            <div className="relative aspect-[5/3] md:aspect-[4/2.5] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 min-h-[400px] md:min-h-[480px]">
              {/* Real Turkey Map Background */}
              <div className="absolute inset-0">
                <img 
                  src={newTurkeyMap} 
                  alt="Turkey Map" 
                  className="w-full h-full object-contain opacity-90 rounded-2xl"
                />
                
                {/* Subtle overlay for better marker visibility */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 to-blue-900/20 rounded-2xl"></div>
              </div>

              {/* City Markers */}
              {activeCities.map((city, index) => (
                <motion.div
                  key={city.name}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    delay: 0.5 + index * 0.2, 
                    type: "spring", 
                    stiffness: 200 
                  }}
                  viewport={{ once: true }}
                  className="absolute group cursor-pointer z-20"
                  style={city.position}
                >
                  {/* Outer Glow Ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className={`absolute -inset-4 w-12 h-12 rounded-full blur-sm z-10 ${
                      city.priority === 'high' 
                        ? 'bg-blue-400' 
                        : city.priority === 'medium' 
                        ? 'bg-green-400' 
                        : 'bg-purple-400'
                    }`}
                  />

                  {/* Middle Pulsing Ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.6, 0, 0.6]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    className={`absolute -inset-2 w-8 h-8 rounded-full z-10 ${
                      city.priority === 'high' 
                        ? 'bg-blue-500' 
                        : city.priority === 'medium' 
                        ? 'bg-green-500' 
                        : 'bg-purple-500'
                    }`}
                  />
                  
                  {/* Main Marker with Enhanced Glow */}
                  <motion.div
                    whileHover={{ scale: 1.4 }}
                    className={`w-6 h-6 rounded-full shadow-2xl relative z-30 border-2 border-white/70 ${
                      city.priority === 'high' 
                        ? 'bg-gradient-to-br from-blue-400 to-blue-600 shadow-blue-500/50' 
                        : city.priority === 'medium' 
                        ? 'bg-gradient-to-br from-green-400 to-green-600 shadow-green-500/50' 
                        : 'bg-gradient-to-br from-purple-400 to-purple-600 shadow-purple-500/50'
                    }`}
                    style={{
                      boxShadow: `0 0 20px ${
                        city.priority === 'high' 
                          ? 'rgba(59, 130, 246, 0.8)' 
                          : city.priority === 'medium' 
                          ? 'rgba(34, 197, 94, 0.8)' 
                          : 'rgba(147, 51, 234, 0.8)'
                      }`
                    }}
                  >
                    {/* Inner brilliant glow */}
                    <motion.div
                      className="absolute inset-1 rounded-full bg-white/90"
                      animate={{
                        scale: [0.4, 0.7, 0.4],
                        opacity: [0.9, 0.5, 0.9]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Sparkle effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        rotate: [0, 360]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div className="absolute w-0.5 h-0.5 bg-white rounded-full top-1 left-1/2 transform -translate-x-1/2"></div>
                      <div className="absolute w-0.5 h-0.5 bg-white rounded-full bottom-1 left-1/2 transform -translate-x-1/2"></div>
                      <div className="absolute w-0.5 h-0.5 bg-white rounded-full left-1 top-1/2 transform -translate-y-1/2"></div>
                      <div className="absolute w-0.5 h-0.5 bg-white rounded-full right-1 top-1/2 transform -translate-y-1/2"></div>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    whileHover={{ opacity: 1, y: -30, scale: 1 }}
                    className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-6 pointer-events-none z-40"
                  >
                    <div className="bg-slate-800/95 backdrop-blur-lg rounded-xl shadow-2xl border border-blue-500/20 p-4 min-w-[180px]">
                      <div className="font-semibold text-white mb-2 text-center text-lg">{city.name}</div>
                      <div className="text-sm text-gray-300 mb-3 text-center">
                        <span className="font-medium">{city.users.toLocaleString('tr-TR')}</span> aktif kullanıcı
                      </div>
                      <div className="flex items-center justify-center">
                        <Badge 
                          variant="secondary" 
                          className={`text-xs px-3 py-1 ${
                            city.growth.includes('+') 
                              ? 'bg-green-500/20 text-green-300 border-green-500/30' 
                              : 'bg-red-500/20 text-red-300 border-red-500/30'
                          }`}
                        >
                          {city.growth} büyüme
                        </Badge>
                      </div>
                      
                      {/* Tooltip Arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800/95"></div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {activeCities.slice(0, 3).map((city, index) => (
                  <motion.line
                    key={`line-${index}`}
                    x1={city.position.left}
                    y1={city.position.top}
                    x2={activeCities[(index + 1) % 3].position.left}
                    y2={activeCities[(index + 1) % 3].position.top}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    strokeDasharray="2,4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: index * 0.5 }}
                    viewport={{ once: true }}
                  />
                ))}
                
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Enhanced Legend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-6 flex flex-wrap justify-center gap-8"
            >
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full border border-white/30 shadow-lg"></div>
                <span className="text-sm text-gray-300">Yüksek Aktivite (10K+ kullanıcı)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full border border-white/30 shadow-lg"></div>
                <span className="text-sm text-gray-300">Orta Aktivite (3K-10K kullanıcı)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-purple-500 rounded-full border border-white/30 shadow-lg"></div>
                <span className="text-sm text-gray-300">Gelişen Bölge (1K-3K kullanıcı)</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 mb-8">
            Siz de Türkiye'nin lider Altyapı platformuna katılın ve işletmenizi büyütün
          </p>
          <motion.button
            onClick={openForm}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-10 py-4 rounded-xl font-medium shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-400/20"
          >
            <span>Hemen Başla</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <MapPin className="w-5 h-5" />
            </motion.div>
          </motion.button>
          
          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-6 text-sm text-gray-400"
          >
            <span> 🚀 Kurulum desteği • 💬 7/24 canlı yardım</span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Callback Form */}
      <CallbackFormComponent />
    </section>
  );
}