// AYGIT TECHNOLOGIES - MOTION OVERRIDE
// Direct motion type override for problematic files

import * as React from 'react';

// Motion Props Interface
interface MotionPropsOverride {
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

// Motion Div Component Type
export type MotionDiv = React.ForwardRefExoticComponent<
  MotionPropsOverride & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
>;

// Complete Motion Object Override
export interface MotionOverride {
  div: MotionDiv;
  span: React.ForwardRefExoticComponent<MotionPropsOverride & React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>;
  h1: React.ForwardRefExoticComponent<MotionPropsOverride & React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
  h2: React.ForwardRefExoticComponent<MotionPropsOverride & React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
  h3: React.ForwardRefExoticComponent<MotionPropsOverride & React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
  p: React.ForwardRefExoticComponent<MotionPropsOverride & React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
  button: React.ForwardRefExoticComponent<MotionPropsOverride & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>;
  section: React.ForwardRefExoticComponent<MotionPropsOverride & React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;
}

// Universal Motion Component Type Mapping
export type MotionElementOverride = {
  [K in keyof JSX.IntrinsicElements]: React.ForwardRefExoticComponent<
    MotionPropsOverride & JSX.IntrinsicElements[K] & React.RefAttributes<any>
  >;
}

// Export the override motion object using intersection type
export const motion: MotionOverride & MotionElementOverride;