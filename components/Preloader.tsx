import React from 'react';
// AYGIT TECHNOLOGIES - MODERN MOTION IMPLEMENTATION
import { MotionDiv, MotionImg, MotionP, AnimatePresence } from "./MotionWrapper";
import { useState, useEffect } from "react";
import { Zap, Code, Globe, Server } from "lucide-react";
const AygitLogoWhite = "/logos/aygit-technologies-logo-white.png";

interface PreloaderProps {
  onComplete: () => void;
}

const loadingTexts = [
  "Kurumsal web altyapısı yükleniyor...",
  "Dijital çözümler hazırlanıyor...",
  "Sistem entegrasyonları yapılandırılıyor...",
  "Kurumsal portal oluşturuluyor...",
  "Aygıt Technologies'e hoş geldiniz!"
];

const icons = [Zap, Code, Globe, Server];

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  console.log("⏳ PRELOADER RENDER - Progress:", progress, "IsComplete:", isComplete);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const intervals = 100;
    const increment = 100 / (duration / intervals);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + increment;
        
        // Update text every 20% progress
        const textIndex = Math.min(Math.floor(newProgress / 20), loadingTexts.length - 1);
        setCurrentTextIndex(textIndex);
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          console.log("🎯 PRELOADER COMPLETE - Calling onComplete in 800ms");
          setTimeout(() => {
            console.log("🚀 PRELOADER TIMEOUT - Now calling onComplete callback");
            onComplete();
          }, 800); // Delay before hiding preloader
          return 100;
        }
        
        return newProgress;
      });
    }, intervals);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <MotionDiv
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <MotionDiv
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-64 h-64 border border-white/10 rounded-full"
            />
            <MotionDiv
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-white/5 rounded-full"
            />
            <MotionDiv
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10 text-center max-w-md mx-auto px-6">
            {/* Logo/Brand */}
            <MotionDiv
              initial={{ scale: 0, rotate: -180, y: 50 }}
              animate={{ scale: 1, rotate: 0, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", type: "spring", stiffness: 100 }}
              className="mb-8"
            >
              <MotionDiv 
                className="relative inline-block mb-6"
                whileHover={{ scale: 1.05 }}
              >
                {/* Glowing Background Effect */}
                <MotionDiv
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-2xl blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Logo Container */}
                <MotionDiv
                  className="relative w-32 h-32 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 flex items-center justify-center p-6"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 40px rgba(59, 130, 246, 0.6)",
                      "0 0 20px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <MotionImg
                    src={AygitLogoWhite}
                    alt="Aygıt Technologies"
                    className="w-full h-auto"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 2, -2, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Rotating Ring */}
                  <MotionDiv
                    className="absolute inset-0 border-2 border-transparent border-t-blue-400/60 border-r-blue-500/40 rounded-2xl"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </MotionDiv>
              </MotionDiv>
              
              <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <h1 className="text-3xl font-bold text-white mb-2">
                  Aygıt Technologies
                </h1>
                <MotionP 
                  className="text-blue-200"
                  animate={{
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Kurumsal Web Sitesi Altyapısı
                </MotionP>
              </MotionDiv>
            </MotionDiv>

            {/* Animated Icons */}
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center space-x-6 mb-8"
            >
              {icons.map((Icon, index) => (
                <MotionDiv
                  key={index}
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    delay: index * 0.3,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20"
                >
                  <Icon className="w-6 h-6 text-white" />
                </MotionDiv>
              ))}
            </MotionDiv>

            {/* Loading Text */}
            <MotionDiv
              key={currentTextIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-white text-lg font-medium">
                {loadingTexts[currentTextIndex]}
              </p>
            </MotionDiv>

            {/* Progress Bar */}
            <div className="relative">
              <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <MotionDiv
                  className="h-full bg-gradient-to-r from-white to-blue-200 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                />
              </div>
              
              {/* Progress Percentage */}
              <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -top-8 left-0 right-0 text-center"
              >
                <span className="text-white/80 text-sm font-medium">
                  {Math.round(progress)}%
                </span>
              </MotionDiv>
            </div>

            {/* Pulsing Dots */}
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex justify-center space-x-2 mt-8"
            >
              {[0, 1, 2].map((index) => (
                <MotionDiv
                  key={index}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 bg-white/60 rounded-full"
                />
              ))}
            </MotionDiv>
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-8 left-8">
            <MotionDiv
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full"
            />
          </div>
          
          <div className="absolute bottom-8 right-8">
            <MotionDiv
              animate={{ rotate: -360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 border-2 border-white/20 border-r-white/60 rounded-full"
            />
          </div>
        </MotionDiv>
      )}
    </AnimatePresence>
  );
}