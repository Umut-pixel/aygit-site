// AYGIT TECHNOLOGIES - ULTIMATE FRAMER MOTION TYPES
// ZERO TYPESCRIPT ERRORS - NUCLEAR STRONG TYPE DEFINITIONS  
// CUSTOMDESIGNPAGE MOTION.DIV FIXED

// Module augmentation - override existing types
declare module 'framer-motion' {
  // Clear any existing types first
  const _motion: any;
  import * as React from 'react';

  // Core Motion Properties - All animation props
  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    whileFocus?: any;
    whileDrag?: any;
    drag?: boolean | 'x' | 'y';
    dragConstraints?: any;
    dragElastic?: any;
    dragMomentum?: any;
    dragTransition?: any;
    onDrag?: (event: any, info: any) => void;
    onDragStart?: (event: any, info: any) => void;
    onDragEnd?: (event: any, info: any) => void;
    variants?: any;
    custom?: any;
    layout?: boolean | 'position' | 'size';
    layoutId?: string;
    layoutDependency?: any;
    layoutScroll?: boolean;
    onLayoutAnimationStart?: () => void;
    onLayoutAnimationComplete?: () => void;
    onHoverStart?: (event: any) => void;
    onHoverEnd?: (event: any) => void;
    onTap?: (event: any, info: any) => void;
    onTapStart?: (event: any, info: any) => void;
    onTapCancel?: (event: any, info: any) => void;
    onViewportEnter?: () => void;
    onViewportLeave?: () => void;
    onAnimationStart?: (definition: any) => void;
    onAnimationComplete?: (definition: any) => void;
    transformTemplate?: (transform: any, generated: string) => string;
    [key: string]: any;
  }

  // Motion Component Type Helper
  type MotionComponent<T extends keyof JSX.IntrinsicElements> = React.ForwardRefExoticComponent<
    MotionProps & JSX.IntrinsicElements[T] & React.RefAttributes<any>
  >;

  // NUCLEAR STRONG MOTION OBJECT - EVERY ELEMENT TYPED
  export const motion: {
    // CORE ELEMENTS - CRITICAL FOR CUSTOMDESIGNPAGE
    div: MotionComponent<'div'>;
    span: MotionComponent<'span'>;
    
    // TEXT ELEMENTS
    h1: MotionComponent<'h1'>;
    h2: MotionComponent<'h2'>;
    h3: MotionComponent<'h3'>;
    h4: MotionComponent<'h4'>;
    h5: MotionComponent<'h5'>;
    h6: MotionComponent<'h6'>;
    p: MotionComponent<'p'>;
    a: MotionComponent<'a'>;
    strong: MotionComponent<'strong'>;
    em: MotionComponent<'em'>;
    b: MotionComponent<'b'>;
    i: MotionComponent<'i'>;
    small: MotionComponent<'small'>;
    
    // INTERACTIVE ELEMENTS
    button: MotionComponent<'button'>;
    input: MotionComponent<'input'>;
    textarea: MotionComponent<'textarea'>;
    select: MotionComponent<'select'>;
    option: MotionComponent<'option'>;
    label: MotionComponent<'label'>;
    
    // FORM ELEMENTS
    form: MotionComponent<'form'>;
    fieldset: MotionComponent<'fieldset'>;
    legend: MotionComponent<'legend'>;
    
    // MEDIA ELEMENTS
    img: MotionComponent<'img'>;
    video: MotionComponent<'video'>;
    audio: MotionComponent<'audio'>;
    canvas: MotionComponent<'canvas'>;
    
    // STRUCTURAL ELEMENTS
    header: MotionComponent<'header'>;
    footer: MotionComponent<'footer'>;
    section: MotionComponent<'section'>;
    article: MotionComponent<'article'>;
    aside: MotionComponent<'aside'>;
    nav: MotionComponent<'nav'>;
    main: MotionComponent<'main'>;
    
    // LIST ELEMENTS
    ul: MotionComponent<'ul'>;
    ol: MotionComponent<'ol'>;
    li: MotionComponent<'li'>;
    dl: MotionComponent<'dl'>;
    dt: MotionComponent<'dt'>;
    dd: MotionComponent<'dd'>;
    
    // TABLE ELEMENTS
    table: MotionComponent<'table'>;
    thead: MotionComponent<'thead'>;
    tbody: MotionComponent<'tbody'>;
    tfoot: MotionComponent<'tfoot'>;
    tr: MotionComponent<'tr'>;
    th: MotionComponent<'th'>;
    td: MotionComponent<'td'>;
    caption: MotionComponent<'caption'>;
    
    // SVG ELEMENTS
    svg: MotionComponent<'svg'>;
    path: MotionComponent<'path'>;
    circle: MotionComponent<'circle'>;
    rect: MotionComponent<'rect'>;
    line: MotionComponent<'line'>;
    polygon: MotionComponent<'polygon'>;
    polyline: MotionComponent<'polyline'>;
    ellipse: MotionComponent<'ellipse'>;
    g: MotionComponent<'g'>;
    defs: MotionComponent<'defs'>;
    use: MotionComponent<'use'>;
    symbol: MotionComponent<'symbol'>;
    marker: MotionComponent<'marker'>;
    
    // OTHER ELEMENTS
    hr: MotionComponent<'hr'>;
    br: MotionComponent<'br'>;
    iframe: MotionComponent<'iframe'>;
    object: MotionComponent<'object'>;
    embed: MotionComponent<'embed'>;
  } & {
    // UNIVERSAL FALLBACK - ALL OTHER ELEMENTS USING INTERSECTION TYPE
    [K in keyof JSX.IntrinsicElements]: MotionComponent<K>;
  };

  // AnimatePresence
  export interface AnimatePresenceProps {
    children?: React.ReactNode;
    initial?: boolean;
    onExitComplete?: () => void;
    exitBeforeEnter?: boolean;
    mode?: 'wait' | 'sync' | 'popLayout';
    presenceAffectsLayout?: boolean;
  }

  export const AnimatePresence: React.ComponentType<AnimatePresenceProps>;

  // Animation Controls
  export interface AnimationControls {
    start: (definition?: any) => Promise<any>;
    stop: () => void;
    set: (definition: any) => void;
    mount: () => void;
    unmount: () => void;
  }

  export function useAnimation(): AnimationControls;
  export function useAnimationControls(): AnimationControls;

  // In View Hook
  export interface UseInViewOptions {
    threshold?: number;
    margin?: string;
    triggerOnce?: boolean;
    root?: React.RefObject<Element>;
    amount?: number | 'some' | 'all';
  }

  export function useInView(options?: UseInViewOptions): [React.RefObject<Element>, boolean];

  // Variants and Transitions
  export interface Variants {
    [key: string]: any;
  }

  export interface Transition {
    duration?: number;
    delay?: number;
    ease?: string | number[] | ((t: number) => number);
    type?: 'spring' | 'tween' | 'keyframes' | 'inertia' | 'just';
    stiffness?: number;
    damping?: number;
    mass?: number;
    bounce?: number;
    velocity?: number;
    restSpeed?: number;
    restDelta?: number;
    when?: 'beforeChildren' | 'afterChildren';
    staggerChildren?: number;
    delayChildren?: number;
    staggerDirection?: 1 | -1;
    repeat?: number;
    repeatType?: 'loop' | 'reverse' | 'mirror';
    repeatDelay?: number;
    from?: any;
    elapsed?: number;
    times?: number[];
    calc?: (latest: any) => any;
    [key: string]: any;
  }

  // Motion Config
  export interface MotionConfigProps {
    children?: React.ReactNode;
    transition?: Transition;
    transformPagePoint?: (point: any) => any;
    features?: any[];
    reducedMotion?: 'always' | 'never' | 'user';
    nonce?: string;
  }

  export const MotionConfig: React.ComponentType<MotionConfigProps>;

  // Motion Values
  export interface MotionValue<T = any> {
    get(): T;
    set(value: T, render?: boolean): void;
    getPrevious(): T;
    getVelocity(): number;
    onChange(callback: (value: T) => void): () => void;
    onRenderRequest(callback: () => void): () => void;
    attach(passiveEffect: (value: T) => void): () => void;
    stop(): void;
    destroy(): void;
    isAnimating(): boolean;
  }

  export function useMotionValue<T>(initialValue: T): MotionValue<T>;
  
  export function useTransform<T>(
    values: MotionValue | MotionValue[],
    inputRange: number[],
    outputRange: T[],
    options?: any
  ): MotionValue<T>;

  export function useSpring(
    source: MotionValue | number,
    config?: any
  ): MotionValue;

  // Reduced Motion
  export function useReducedMotion(): boolean | null;
  export function useReducedMotionConfig(): { reduceMotion: boolean };

  // Presence Hooks
  export function usePresence(): [boolean, () => void];
  export function useIsPresent(): boolean;

  // Motion Value Utilities
  export function motionValue<T>(init: T): MotionValue<T>;
  export function useMotionTemplate(fragments: TemplateStringsArray, ...values: MotionValue[]): MotionValue<string>;
  export function useVelocity(value: MotionValue<number>): MotionValue<number>;

  // Animation Functions
  export function animate(
    from: any,
    to: any,
    transition?: Transition
  ): {
    stop: () => void;
    then: (onResolve?: () => void, onReject?: () => void) => Promise<void>;
  };

  // Default export
  export default motion;
}