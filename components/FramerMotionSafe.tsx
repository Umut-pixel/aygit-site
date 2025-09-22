// Safe Framer Motion Implementation for Aygıt Technologies
// NO external dependencies, NO motion-dom, SAFE implementation
import React from 'react';

// Safe development logging
const isDev = typeof window !== 'undefined' && (
  window.location.hostname === 'localhost' || 
  window.location.hostname === '127.0.0.1'
);

if (isDev) {
  console.log('🛡️ FramerMotionSafe: Safe motion implementation loaded');
}

// Safe motion component creator
const createSafeMotionComponent = (tagName: string) => {
  return React.forwardRef<HTMLElement, Record<string, any>>((props, ref) => {
    const { 
      animate, 
      initial, 
      exit, 
      transition, 
      variants, 
      whileHover, 
      whileTap, 
      whileInView,
      whileFocus,
      drag,
      dragConstraints,
      layout,
      layoutId,
      style, 
      children, 
      className = '',
      onAnimationStart,
      onAnimationComplete,
      viewport,
      ...htmlProps 
    } = props;
    
    // Safe CSS classes
    let safeClassName = className;
    
    // Safe animation classes
    if (animate || initial) {
      safeClassName += ' animate-fade-in';
    }
    
    // Safe hover effects
    if (whileHover) {
      safeClassName += ' hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300';
    }
    
    // Safe tap effects
    if (whileTap) {
      safeClassName += ' active:transform active:scale-95 transition-all duration-150';
    }
    
    // Safe in-view effects
    if (whileInView) {
      safeClassName += ' animate-slide-up';
    }
    
    // Safe style object
    const safeStyle = {
      transition: transition ? 'all 0.3s ease' : 'all 0.2s ease',
      ...style
    };
    
    // Safe rendering
    return React.createElement(tagName, {
      ...htmlProps,
      ref,
      className: safeClassName,
      style: safeStyle,
      onAnimationStart: onAnimationStart,
      onAnimationEnd: onAnimationComplete
    }, children);
  });
};

// Safe Motion Proxy
interface SafeMotionProxyTarget {
  [key: string]: React.ForwardRefExoticComponent<any>;
}

export const motion = new Proxy({} as SafeMotionProxyTarget, {
  get: (target: SafeMotionProxyTarget, prop: string | symbol) => {
    if (typeof prop === 'string') {
      if (!target[prop]) {
        target[prop] = createSafeMotionComponent(prop);
      }
      return target[prop];
    }
    return createSafeMotionComponent('div');
  }
}) as {
  [K in keyof JSX.IntrinsicElements]: React.ForwardRefExoticComponent<
    JSX.IntrinsicElements[K] & Record<string, any>
  >;
};

// Safe AnimatePresence
export interface SafeAnimatePresenceProps {
  children: React.ReactNode; 
  mode?: 'wait' | 'sync' | 'popLayout'; 
  initial?: boolean;
  onExitComplete?: () => void;
}

export const AnimatePresence: React.FC<SafeAnimatePresenceProps> = ({ 
  children, 
  onExitComplete
}) => {
  React.useEffect(() => {
    if (onExitComplete) {
      const timer = setTimeout(onExitComplete, 300);
      return () => clearTimeout(timer);
    }
  }, [onExitComplete]);
  
  return <div className="animate-fade-in">{children}</div>;
};

// Safe useInView hook - Framer Motion v10+ compatible with overloads
export function useInView(ref: React.RefObject<Element> | null): boolean;
export function useInView(
  ref: React.RefObject<Element> | null, 
  options: {
    margin?: string;
    amount?: number | "some" | "all";
    once?: boolean;
  }
): boolean;
export function useInView(
  ref: React.RefObject<Element> | null, 
  options: {
    margin?: string;
    amount?: number | "some" | "all";
    once?: boolean;
  } = {}
): boolean {
  const [inView, setInView] = React.useState(false);
  
  React.useEffect(() => {
    if (!ref?.current) return;
    
    try {
      const observer = new IntersectionObserver(
        ([entry]) => setInView(entry.isIntersecting),
        { 
          threshold: options?.amount === 'all' ? 1 : 
                     options?.amount === 'some' ? 0.1 : 
                     typeof options?.amount === 'number' ? options.amount : 0.1,
          rootMargin: options?.margin || '0px'
        }
      );
      
      observer.observe(ref.current);
      return () => observer.disconnect();
    } catch (error) {
      if (isDev) console.warn('IntersectionObserver error:', error);
      setInView(true);
    }
  }, [ref, options]);
  
  return inView;
}

// Safe animation controls
export const useAnimation = () => ({
  start: () => Promise.resolve(),
  stop: () => {},
  set: () => {}
});

// Safe useScroll hook
export const useScroll = (options?: {
  target?: React.RefObject<Element>;
  container?: React.RefObject<Element>;
  offset?: string[];
}) => {
  const [scrollValues, setScrollValues] = React.useState({
    scrollY: { get: () => 0 as number },
    scrollYProgress: { get: () => 0 as number },
    scrollX: { get: () => 0 as number },
    scrollXProgress: { get: () => 0 as number }
  });
  
  React.useEffect(() => {
    const updateScroll = () => {
      try {
        const scrollY = window.scrollY || 0;
        const maxScroll = Math.max(1, document.body.scrollHeight - window.innerHeight);
        const scrollYProgress = Math.min(scrollY / maxScroll, 1);
        
        setScrollValues({
          scrollY: { get: () => scrollY },
          scrollYProgress: { get: () => scrollYProgress },
          scrollX: { get: () => window.scrollX || 0 },
          scrollXProgress: { get: () => 0 }
        });
      } catch (error) {
        if (isDev) console.warn('Scroll update error:', error);
      }
    };
    
    window.addEventListener('scroll', updateScroll);
    updateScroll();
    
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  
  return scrollValues;
};

// Safe useTransform hook
export const useTransform = (
  source: any, 
  inputRange: number[], 
  outputRange: any[]
) => {
  const [value, setValue] = React.useState(outputRange[0] || 0);
  
  React.useEffect(() => {
    try {
      if (source && typeof source.get === 'function') {
        const sourceValue = source.get();
        const maxInput = Math.max(...inputRange);
        const progress = Math.max(0, Math.min(1, sourceValue / maxInput));
        const transformedValue = outputRange[0] + (outputRange[1] - outputRange[0]) * progress;
        setValue(transformedValue);
      }
    } catch (error) {
      if (isDev) console.warn('Transform error:', error);
    }
  }, [source, inputRange, outputRange]);
  
  return { 
    get: () => value,
    set: setValue
  };
};

// Default export for compatibility
export default {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
  useScroll,
  useTransform
};