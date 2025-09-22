// Modern Motion Wrapper - Framer-Motion implementation 
import { motion, AnimatePresence, useInView, useTransform, useAnimation } from 'framer-motion';
import { useRef } from 'react';

// Type assertion for motion components TypeScript compatibility 
const MotionDiv = motion.div as any;
const MotionImg = motion.img as any;
const MotionP = motion.p as any;
const MotionH1 = motion.h1 as any;
const MotionH2 = motion.h2 as any;
const MotionH3 = motion.h3 as any;
const MotionSpan = motion.span as any;
const MotionButton = motion.button as any;

export { 
  motion,
  MotionDiv,
  MotionImg,
  MotionP,
  MotionH1,
  MotionH2,
  MotionH3,
  MotionSpan,
  MotionButton,
  AnimatePresence, 
  useInView, 
  useTransform,
  useAnimation,
  useRef
};

// Safe development logging
const isDev = typeof window !== 'undefined' && (
  window.location.hostname === 'localhost' || 
  window.location.hostname === '127.0.0.1'
);

if (isDev) {
  console.log('🚀 MotionWrapper: Framer-Motion successfully loaded');
}