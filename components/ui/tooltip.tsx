"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "./utils";

// Tooltip Context
interface TooltipContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  delayDuration: number;
  triggerRef: React.RefObject<HTMLElement>;
  contentRef: React.RefObject<HTMLDivElement>;
}

const TooltipContext = React.createContext<TooltipContextValue | null>(null);

function useTooltip() {
  const context = React.useContext(TooltipContext);
  if (!context) {
    throw new Error("useTooltip must be used within a Tooltip component");
  }
  return context;
}

// Tooltip Provider Component
interface TooltipProviderProps {
  children: React.ReactNode;
  delayDuration?: number;
  skipDelayDuration?: number;
}

const tooltipProviderState = {
  isOpenDelayed: false,
  delayedOpenTimeoutId: null as number | null,
};

function TooltipProvider({
  children,
  delayDuration = 700,
  skipDelayDuration = 300,
}: TooltipProviderProps) {
  return <>{children}</>;
}

// Tooltip Root Component
interface TooltipProps {
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  delayDuration?: number;
  disableHoverableContent?: boolean;
}

function Tooltip({
  children,
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  delayDuration = 700,
  disableHoverableContent = false,
}: TooltipProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  const triggerRef = React.useRef<HTMLElement>(null);
  const contentRef = React.useRef<HTMLDivElement>(null);
  
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : internalOpen;

  const setOpen = React.useCallback((value: boolean) => {
    if (!isControlled) {
      setInternalOpen(value);
    }
    onOpenChange?.(value);
  }, [isControlled, onOpenChange]);

  const contextValue: TooltipContextValue = {
    open,
    setOpen,
    delayDuration,
    triggerRef,
    contentRef,
  };

  return (
    <TooltipContext.Provider value={contextValue}>
      {children}
    </TooltipContext.Provider>
  );
}

// Tooltip Trigger Component
interface TooltipTriggerProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
}

const TooltipTrigger = React.forwardRef<HTMLButtonElement, TooltipTriggerProps>(
  ({ className, asChild = false, onMouseEnter, onMouseLeave, onFocus, onBlur, children, ...props }, ref) => {
    const { open, setOpen, delayDuration, triggerRef } = useTooltip();
    const timeoutRef = React.useRef<number | undefined>();

    React.useImperativeHandle(ref, () => triggerRef.current as HTMLButtonElement);

    const handleMouseEnter = (event: React.MouseEvent) => {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => {
        setOpen(true);
      }, delayDuration);
      
      // Type-safe event handling
      if (onMouseEnter && typeof onMouseEnter === 'function') {
        (onMouseEnter as any)(event);
      }
    };

    const handleMouseLeave = (event: React.MouseEvent) => {
      window.clearTimeout(timeoutRef.current);
      setOpen(false);
      
      // Type-safe event handling
      if (onMouseLeave && typeof onMouseLeave === 'function') {
        (onMouseLeave as any)(event);
      }
    };

    const handleFocus = (event: React.FocusEvent) => {
      setOpen(true);
      
      // Type-safe event handling
      if (onFocus && typeof onFocus === 'function') {
        (onFocus as any)(event);
      }
    };

    const handleBlur = (event: React.FocusEvent) => {
      setOpen(false);
      
      // Type-safe event handling
      if (onBlur && typeof onBlur === 'function') {
        (onBlur as any)(event);
      }
    };

    React.useEffect(() => {
      return () => {
        window.clearTimeout(timeoutRef.current);
      };
    }, []);

    if (asChild && children && React.Children.count(children) === 1) {
      const child = React.Children.only(children);
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<any>, {
          ref: triggerRef,
          onMouseEnter: (e: React.MouseEvent) => {
            // Call original handler if exists
            const originalOnMouseEnter = (child as any).props?.onMouseEnter;
            if (typeof originalOnMouseEnter === 'function') {
              originalOnMouseEnter(e);
            }
            handleMouseEnter(e);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            // Call original handler if exists
            const originalOnMouseLeave = (child as any).props?.onMouseLeave;
            if (typeof originalOnMouseLeave === 'function') {
              originalOnMouseLeave(e);
            }
            handleMouseLeave(e);
          },
          onFocus: (e: React.FocusEvent) => {
            // Call original handler if exists
            const originalOnFocus = (child as any).props?.onFocus;
            if (typeof originalOnFocus === 'function') {
              originalOnFocus(e);
            }
            handleFocus(e);
          },
          onBlur: (e: React.FocusEvent) => {
            // Call original handler if exists
            const originalOnBlur = (child as any).props?.onBlur;
            if (typeof originalOnBlur === 'function') {
              originalOnBlur(e);
            }
            handleBlur(e);
          },
        });
      }
    }

    return (
      <button
        ref={triggerRef as React.RefObject<HTMLButtonElement>}
        data-slot="tooltip-trigger"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={className}
        {...props}
      >
        {children}
      </button>
    );
  }
);

TooltipTrigger.displayName = "TooltipTrigger";

// Tooltip Content Component
interface TooltipContentProps extends React.ComponentProps<"div"> {
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  sideOffset?: number;
}

const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
  ({
    className,
    children,
    side = "top",
    align = "center",
    sideOffset = 4,
    onMouseEnter,
    onMouseLeave,
    ...props
  }, ref) => {
    const { open, setOpen, triggerRef, contentRef } = useTooltip();
    const [position, setPosition] = React.useState({ top: 0, left: 0 });
    const [mounted, setMounted] = React.useState(false);

    React.useImperativeHandle(ref, () => contentRef.current!);

    // Mount check for SSR
    React.useEffect(() => {
      setMounted(true);
    }, []);

    // Calculate position
    React.useEffect(() => {
      if (!open || !triggerRef.current || !contentRef.current || !mounted) return;

      const calculatePosition = () => {
        if (!triggerRef.current || !contentRef.current) return;

        const triggerRect = triggerRef.current.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect();
        const viewport = {
          width: window.innerWidth,
          height: window.innerHeight,
        };

        let top = 0;
        let left = 0;

        // Calculate position based on side
        switch (side) {
          case "top":
            top = triggerRect.top - contentRect.height - sideOffset;
            left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
            break;
          case "bottom":
            top = triggerRect.bottom + sideOffset;
            left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
            break;
          case "left":
            top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
            left = triggerRect.left - contentRect.width - sideOffset;
            break;
          case "right":
            top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
            left = triggerRect.right + sideOffset;
            break;
        }

        // Adjust for alignment
        if (side === "top" || side === "bottom") {
          switch (align) {
            case "start":
              left = triggerRect.left;
              break;
            case "end":
              left = triggerRect.right - contentRect.width;
              break;
          }
        } else {
          switch (align) {
            case "start":
              top = triggerRect.top;
              break;
            case "end":
              top = triggerRect.bottom - contentRect.height;
              break;
          }
        }

        // Keep within viewport
        left = Math.max(8, Math.min(left, viewport.width - contentRect.width - 8));
        top = Math.max(8, Math.min(top, viewport.height - contentRect.height - 8));

        setPosition({ top, left });
      };

      // Initial calculation
      calculatePosition();

      // Recalculate on scroll/resize
      const handleReposition = () => calculatePosition();
      window.addEventListener('scroll', handleReposition, true);
      window.addEventListener('resize', handleReposition);

      return () => {
        window.removeEventListener('scroll', handleReposition, true);
        window.removeEventListener('resize', handleReposition);
      };
    }, [open, side, align, sideOffset, mounted]);

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
      onMouseEnter?.(event);
    };

    const handleMouseLeave = (event: React.MouseEvent<HTMLDivElement>) => {
      setOpen(false);
      onMouseLeave?.(event);
    };

    if (!open || !mounted) return null;

    return (
      <>
        {/* Portal to body */}
        {typeof document !== "undefined" &&
          createPortal(
            <div
              ref={contentRef}
              data-slot="tooltip-content"
              data-side={side}
              data-align={align}
              data-state={open ? "open" : "closed"}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={cn(
                "z-50 w-fit origin-center rounded-md px-3 py-1.5 text-xs",
                "bg-primary text-primary-foreground shadow-md",
                "animate-in fade-in-0 zoom-in-95 duration-200",
                "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
                "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
                "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                className
              )}
              style={{
                position: "fixed",
                top: position.top,
                left: position.left,
                zIndex: 50,
              }}
              {...props}
            >
              {children}
              
              {/* Arrow */}
              <div
                className={cn(
                  "absolute size-2.5 rotate-45 rounded-[2px] bg-primary",
                  side === "top" && "bottom-[-5px] left-1/2 -translate-x-1/2",
                  side === "bottom" && "top-[-5px] left-1/2 -translate-x-1/2",
                  side === "left" && "right-[-5px] top-1/2 -translate-y-1/2",
                  side === "right" && "left-[-5px] top-1/2 -translate-y-1/2"
                )}
              />
            </div>,
            document.body
          )}
      </>
    );
  }
);

TooltipContent.displayName = "TooltipContent";

export { 
  Tooltip, 
  TooltipTrigger, 
  TooltipContent, 
  TooltipProvider,
  type TooltipProps,
  type TooltipTriggerProps,
  type TooltipContentProps,
};