// Framer Motion type definitions for Aygıt Technologies
// Clean and production-ready declarations

declare module 'framer-motion' {
  import * as React from 'react';

  export interface MotionProps {
    initial?: any;
    animate?: any;
    exit?: any;
    transition?: any;
    whileHover?: any;
    whileTap?: any;
    whileInView?: any;
    drag?: boolean | 'x' | 'y';
    dragConstraints?: any;
    onDragEnd?: (event: any, info: any) => void;
    variants?: any;
    custom?: any;
    layout?: boolean;
    layoutId?: string;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler;
    onMouseEnter?: React.MouseEventHandler;
    onMouseLeave?: React.MouseEventHandler;
    [key: string]: any;
  }

  // HTML Motion Components
  interface MotionComponent<T> {
    (props: MotionProps & T): React.ReactElement;
  }

  export const motion: {
    div: MotionComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
    span: MotionComponent<React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
    h1: MotionComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
    h2: MotionComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
    h3: MotionComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
    p: MotionComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
    button: MotionComponent<React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
    img: MotionComponent<React.ImgHTMLAttributes<HTMLImageElement> & React.RefAttributes<HTMLImageElement>>;
    section: MotionComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
    nav: MotionComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
    header: MotionComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
    footer: MotionComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
    article: MotionComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
    aside: MotionComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
    ul: MotionComponent<React.HTMLAttributes<HTMLUListElement> & React.RefAttributes<HTMLUListElement>>;
    li: MotionComponent<React.HTMLAttributes<HTMLLIElement> & React.RefAttributes<HTMLLIElement>>;
    a: MotionComponent<React.AnchorHTMLAttributes<HTMLAnchorElement> & React.RefAttributes<HTMLAnchorElement>>;
    form: MotionComponent<React.FormHTMLAttributes<HTMLFormElement> & React.RefAttributes<HTMLFormElement>>;
    input: MotionComponent<React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
    textarea: MotionComponent<React.TextareaHTMLAttributes<HTMLTextAreaElement> & React.RefAttributes<HTMLTextAreaElement>>;
    svg: MotionComponent<React.SVGProps<SVGSVGElement> & React.RefAttributes<SVGSVGElement>>;
    path: MotionComponent<React.SVGProps<SVGPathElement> & React.RefAttributes<SVGPathElement>>;
  };

  export interface AnimatePresenceProps {
    children?: React.ReactNode;
    initial?: boolean;
    onExitComplete?: () => void;
    exitBeforeEnter?: boolean;
    mode?: 'wait' | 'sync' | 'popLayout';
  }

  export const AnimatePresence: React.ComponentType<AnimatePresenceProps>;

  export interface UseAnimationControlsResult {
    start: (definition?: any) => Promise<any>;
    stop: () => void;
    set: (definition: any) => void;
  }

  export function useAnimation(): UseAnimationControlsResult;

  export interface UseInViewOptions {
    threshold?: number;
    margin?: string;
    triggerOnce?: boolean;
  }

  export function useInView(options?: UseInViewOptions): [React.RefObject<Element>, boolean];

  export interface Variants {
    [key: string]: any;
  }

  export interface Transition {
    duration?: number;
    delay?: number;
    ease?: string | number[];
    type?: 'spring' | 'tween' | 'keyframes' | 'inertia';
    stiffness?: number;
    damping?: number;
    mass?: number;
    bounce?: number;
    when?: 'beforeChildren' | 'afterChildren';
    staggerChildren?: number;
    delayChildren?: number;
    repeat?: number;
    repeatType?: 'loop' | 'reverse' | 'mirror';
    repeatDelay?: number;
  }

  export const MotionConfig: React.ComponentType<{
    children?: React.ReactNode;
    transition?: Transition;
    transformPagePoint?: (point: any) => any;
    features?: any[];
  }>;

  export const LazyMotion: React.ComponentType<{
    children?: React.ReactNode;
    features: any;
    strict?: boolean;
  }>;

  export function domAnimation(): any;
  export function domMax(): any;

  export interface LayoutGroupProps {
    children?: React.ReactNode;
    id?: string;
  }

  export const LayoutGroup: React.ComponentType<LayoutGroupProps>;

  export interface MotionValueConfig {
    transformer?: (value: any) => any;
  }

  export interface MotionValue<T = any> {
    get(): T;
    set(value: T): void;
    onChange(callback: (value: T) => void): () => void;
    stop(): void;
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

  export interface DragHandlers {
    onDrag?: (event: any, info: any) => void;
    onDragStart?: (event: any, info: any) => void;
    onDragEnd?: (event: any, info: any) => void;
  }

  export interface TapHandlers {
    onTap?: (event: any, info: any) => void;
    onTapStart?: (event: any, info: any) => void;
    onTapCancel?: (event: any, info: any) => void;
  }

  export interface HoverHandlers {
    onHoverStart?: (event: any, info: any) => void;
    onHoverEnd?: (event: any, info: any) => void;
  }

  export interface FocusHandlers {
    onFocus?: () => void;
    onBlur?: () => void;
  }

  export interface ViewportHandlers {
    onViewportEnter?: (entry?: any) => void;
    onViewportLeave?: (entry?: any) => void;
  }

  export interface PanHandlers {
    onPan?: (event: any, info: any) => void;
    onPanStart?: (event: any, info: any) => void;
    onPanEnd?: (event: any, info: any) => void;
  }

  export const Reorder: {
    Group: React.ComponentType<{
      children?: React.ReactNode;
      values: any[];
      onReorder: (values: any[]) => void;
      axis?: 'x' | 'y';
      as?: keyof JSX.IntrinsicElements;
      [key: string]: any;
    }>;
    Item: React.ComponentType<{
      children?: React.ReactNode;
      value: any;
      as?: keyof JSX.IntrinsicElements;
      [key: string]: any;
    }>;
  };

  export function stagger(delayValue: number, options?: any): any;
  export function spring(options?: any): any;
  export function anticipate(p: number): number;
  export function backIn(p: number): number;
  export function backOut(p: number): number;
  export function backInOut(p: number): number;
  export function bounceIn(p: number): number;
  export function bounceOut(p: number): number;
  export function bounceInOut(p: number): number;
  export function circIn(p: number): number;
  export function circOut(p: number): number;
  export function circInOut(p: number): number;
  export function easeIn(p: number): number;
  export function easeOut(p: number): number;
  export function easeInOut(p: number): number;

  export interface ScrollOptions {
    container?: React.RefObject<Element>;
    target?: React.RefObject<Element>;
    offset?: string[] | number[];
    axis?: 'x' | 'y';
  }

  export function useScroll(options?: ScrollOptions): {
    scrollX: MotionValue<number>;
    scrollY: MotionValue<number>;
    scrollXProgress: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
  };

  export function useElementScroll(ref: React.RefObject<Element>): {
    scrollX: MotionValue<number>;
    scrollY: MotionValue<number>;
    scrollXProgress: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
  };

  export function useViewportScroll(): {
    scrollX: MotionValue<number>;
    scrollY: MotionValue<number>;
    scrollXProgress: MotionValue<number>;
    scrollYProgress: MotionValue<number>;
  };

  export interface UseAnimatedStateResult<T> {
    0: T;
    1: (newState: T | ((prevState: T) => T)) => void;
  }

  export function useAnimationFrame(callback: (time: number, delta: number) => void): void;

  export interface UseReducedMotionResult {
    prefersReducedMotion: boolean;
  }

  export function useReducedMotion(): boolean | null;

  export function useDragControls(): {
    start: (event: any, options?: any) => void;
  };

  export const MotionGlobalConfig: {
    skipAnimations?: boolean;
    useManualTiming?: boolean;
  };

  export interface TargetAndTransition {
    [key: string]: any;
  }

  export interface VariantLabels {
    [key: string]: TargetAndTransition;
  }

  export type Target = TargetAndTransition;
  export type TargetResolver = (custom: any, current: Target, velocity: Target) => TargetAndTransition;
  export type Variant = TargetAndTransition | TargetResolver;

  export interface CustomDomComponent<Props> {
    (props: Props & MotionProps): JSX.Element;
  }

  export default motion;
}