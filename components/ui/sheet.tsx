"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { XIcon } from "lucide-react";
import { cn } from "./utils";

// Sheet Context
interface SheetContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  side: "top" | "right" | "bottom" | "left";
  onInteractOutside?: () => void;
}

const SheetContext = React.createContext<SheetContextValue | null>(null);

function useSheet() {
  const context = React.useContext(SheetContext);
  if (!context) {
    throw new Error("useSheet must be used within a Sheet component");
  }
  return context;
}

// Sheet Root Component
interface SheetProps {
  children: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
  modal?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const Sheet = React.forwardRef<HTMLDivElement, SheetProps>((
  { children, open, onOpenChange, defaultOpen = false, modal = true, className, style, ...props },
  ref
) => {
  const [isOpenInternal, setIsOpenInternal] = React.useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : isOpenInternal;
  
  const setIsOpen = React.useCallback((newOpen: boolean) => {
    if (!isControlled) {
      setIsOpenInternal(newOpen);
    }
    onOpenChange?.(newOpen);
  }, [isControlled, onOpenChange]);

  const onInteractOutside = React.useCallback(() => {
    if (modal) {
      setIsOpen(false);
    }
  }, [modal, setIsOpen]);

  return (
    <SheetContext.Provider value={{ 
      isOpen, 
      setIsOpen, 
      side: "right", 
      onInteractOutside 
    }}>
      <div data-slot="sheet" ref={ref} className={cn(className)} style={style} {...props}>
        {children}
      </div>
    </SheetContext.Provider>
  );
});

Sheet.displayName = "Sheet";

// Sheet Trigger Component
interface SheetTriggerProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
}

const SheetTrigger = React.forwardRef<HTMLButtonElement, SheetTriggerProps>(
  ({ children, onClick, asChild = false, ...props }, ref) => {
    const { setIsOpen } = useSheet();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      setIsOpen(true);
    };

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        ...props,
        onClick: (e: React.MouseEvent) => {
          // Call original onClick if it exists
          const originalOnClick = (children as any).props?.onClick;
          if (typeof originalOnClick === 'function') {
            originalOnClick(e);
          }
          // Call our handler
          handleClick(e as React.MouseEvent<HTMLButtonElement>);
        },
      });
    }

    return (
      <button
        ref={ref}
        data-slot="sheet-trigger"
        onClick={handleClick}
        type="button"
        {...props}
      >
        {children}
      </button>
    );
  }
);

SheetTrigger.displayName = "SheetTrigger";

// Sheet Close Component
interface SheetCloseProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
}

const SheetClose = React.forwardRef<HTMLButtonElement, SheetCloseProps>(
  ({ children, onClick, asChild = false, ...props }, ref) => {
    const { setIsOpen } = useSheet();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(e);
      setIsOpen(false);
    };

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<any>, {
        ...props,
        onClick: (e: React.MouseEvent) => {
          // Call original onClick if it exists
          const originalOnClick = (children as any).props?.onClick;
          if (typeof originalOnClick === 'function') {
            originalOnClick(e);
          }
          // Call our handler
          handleClick(e as React.MouseEvent<HTMLButtonElement>);
        },
      });
    }

    return (
      <button
        ref={ref}
        data-slot="sheet-close"
        onClick={handleClick}
        type="button"
        {...props}
      >
        {children}
      </button>
    );
  }
);

SheetClose.displayName = "SheetClose";

// Sheet Portal Component
interface SheetPortalProps {
  children: React.ReactNode;
  container?: HTMLElement;
}

const SheetPortal: React.FC<SheetPortalProps> = ({ 
  children, 
  container 
}) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (container) {
    return createPortal(children, container);
  }

  // Use document.body as default container
  if (typeof document !== 'undefined') {
    return createPortal(children, document.body);
  }

  // Fallback for SSR
  return null;
};

// Sheet Overlay Component
interface SheetOverlayProps extends React.ComponentProps<"div"> {}

const SheetOverlay = React.forwardRef<HTMLDivElement, SheetOverlayProps>(
  ({ className, onClick, ...props }, ref) => {
    const { isOpen, onInteractOutside } = useSheet();

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      onClick?.(e);
      onInteractOutside?.();
    };

    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        data-slot="sheet-overlay"
        data-state={isOpen ? "open" : "closed"}
        onClick={handleClick}
        className={cn(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-100",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          className
        )}
        {...props}
      />
    );
  }
);

SheetOverlay.displayName = "SheetOverlay";

// Sheet Content Component
interface SheetContentProps extends React.ComponentProps<"div"> {
  side?: "top" | "right" | "bottom" | "left";
  onInteractOutside?: (event: React.MouseEvent | React.TouchEvent) => void;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
}

const SheetContent = React.forwardRef<HTMLDivElement, SheetContentProps>(
  ({ 
    className, 
    children, 
    side = "right",
    onInteractOutside,
    onEscapeKeyDown,
    ...props 
  }, ref) => {
    const { isOpen, setIsOpen } = useSheet();
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => contentRef.current!);

    // Handle escape key
    React.useEffect(() => {
      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          if (onEscapeKeyDown) {
            onEscapeKeyDown(event);
          } else {
            setIsOpen(false);
          }
        }
      };

      if (isOpen) {
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
      }
    }, [isOpen, setIsOpen, onEscapeKeyDown]);

    // Prevent body scroll when sheet is open
    React.useEffect(() => {
      if (isOpen && typeof document !== 'undefined') {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        
        return () => {
          document.body.style.overflow = originalOverflow;
        };
      }
    }, [isOpen]);

    // Focus management
    React.useEffect(() => {
      if (isOpen && contentRef.current) {
        const timer = setTimeout(() => {
          contentRef.current?.focus();
        }, 0);
        
        return () => clearTimeout(timer);
      }
    }, [isOpen]);

    if (!isOpen) return null;

    const sideClasses = {
      top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
      bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
      left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
      right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
    };

    return (
      <SheetPortal>
        <SheetOverlay />
        <div
          ref={contentRef}
          data-slot="sheet-content"
          data-state={isOpen ? "open" : "closed"}
          data-side={side}
          tabIndex={-1}
          className={cn(
            "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out",
            "data-[state=open]:animate-in data-[state=closed]:animate-out",
            "data-[state=closed]:duration-300 data-[state=open]:duration-500",
            "focus:outline-none",
            sideClasses[side],
            className
          )}
          {...props}
        >
          {children}
          <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </div>
      </SheetPortal>
    );
  }
);

SheetContent.displayName = "SheetContent";

// Sheet Header Component
interface SheetHeaderProps extends React.ComponentProps<"div"> {}

const SheetHeader = React.forwardRef<HTMLDivElement, SheetHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="sheet-header"
        className={cn(
          "flex flex-col space-y-2 text-center sm:text-left",
          className
        )}
        {...props}
      />
    );
  }
);

SheetHeader.displayName = "SheetHeader";

// Sheet Footer Component
interface SheetFooterProps extends React.ComponentProps<"div"> {}

const SheetFooter = React.forwardRef<HTMLDivElement, SheetFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="sheet-footer"
        className={cn(
          "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
          className
        )}
        {...props}
      />
    );
  }
);

SheetFooter.displayName = "SheetFooter";

// Sheet Title Component
interface SheetTitleProps extends React.ComponentProps<"h2"> {}

const SheetTitle = React.forwardRef<HTMLHeadingElement, SheetTitleProps>(
  ({ className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        data-slot="sheet-title"
        className={cn("text-lg font-semibold text-foreground", className)}
        {...props}
      />
    );
  }
);

SheetTitle.displayName = "SheetTitle";

// Sheet Description Component
interface SheetDescriptionProps extends React.ComponentProps<"p"> {}

const SheetDescription = React.forwardRef<HTMLParagraphElement, SheetDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        data-slot="sheet-description"
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
      />
    );
  }
);

SheetDescription.displayName = "SheetDescription";

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetPortal,
  SheetOverlay,
  type SheetProps,
  type SheetTriggerProps,
  type SheetCloseProps,
  type SheetContentProps,
  type SheetHeaderProps,
  type SheetFooterProps,
  type SheetTitleProps,
  type SheetDescriptionProps,
};