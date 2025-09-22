"use client";

import * as React from "react";
import { cn } from "./utils";

interface CollapsibleContextValue {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  disabled?: boolean;
}

const CollapsibleContext = React.createContext<CollapsibleContextValue | null>(null);

function useCollapsible() {
  const context = React.useContext(CollapsibleContext);
  if (!context) {
    throw new Error("useCollapsible must be used within a Collapsible component");
  }
  return context;
}

interface CollapsibleProps extends React.ComponentProps<"div"> {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

function Collapsible({
  open: openProp,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
  className,
  children,
  ...props
}: CollapsibleProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  
  const isControlled = openProp !== undefined;
  const open = isControlled ? openProp : internalOpen;

  const handleOpenChange = React.useCallback((newOpen: boolean) => {
    if (disabled) return;
    
    if (!isControlled) {
      setInternalOpen(newOpen);
    }
    
    onOpenChange?.(newOpen);
  }, [disabled, isControlled, onOpenChange]);

  return (
    <CollapsibleContext.Provider
      value={{
        open,
        onOpenChange: handleOpenChange,
        disabled,
      }}
    >
      <div 
        data-slot="collapsible" 
        data-state={open ? "open" : "closed"}
        className={className}
        {...props}
      >
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
}

interface CollapsibleTriggerProps extends React.ComponentProps<"button"> {
  asChild?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

function CollapsibleTrigger({
  asChild = false,
  className,
  onClick,
  children,
  ...props
}: CollapsibleTriggerProps) {
  const { open, onOpenChange, disabled } = useCollapsible();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    onOpenChange(!open);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...children.props,
      onClick: handleClick,
      disabled: disabled,
      "data-slot": "collapsible-trigger",
      "data-state": open ? "open" : "closed",
      "aria-expanded": open,
    });
  }

  return (
    <button
      type="button"
      data-slot="collapsible-trigger"
      data-state={open ? "open" : "closed"}
      aria-expanded={open}
      onClick={handleClick}
      disabled={disabled}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
}

interface CollapsibleContentProps extends React.ComponentProps<"div"> {
  forceMount?: boolean;
  className?: string;
  children?: React.ReactNode;
}

function CollapsibleContent({
  forceMount = false,
  className,
  children,
  ...props
}: CollapsibleContentProps) {
  const { open } = useCollapsible();
  const [height, setHeight] = React.useState<number | "auto">(open ? "auto" : 0);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = React.useState(false);

  React.useEffect(() => {
    if (!contentRef.current) return;

    const element = contentRef.current;
    
    if (open) {
      setIsAnimating(true);
      
      // Measure the natural height
      element.style.height = "auto";
      const naturalHeight = element.scrollHeight;
      element.style.height = "0px";
      
      // Force reflow
      element.offsetHeight;
      
      // Animate to natural height
      element.style.height = `${naturalHeight}px`;
      
      const timer = setTimeout(() => {
        element.style.height = "auto";
        setHeight("auto");
        setIsAnimating(false);
      }, 200);
      
      return () => clearTimeout(timer);
    } else {
      setIsAnimating(true);
      
      // Get current height and animate to 0
      const currentHeight = element.scrollHeight;
      element.style.height = `${currentHeight}px`;
      
      // Force reflow
      element.offsetHeight;
      
      element.style.height = "0px";
      setHeight(0);
      
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 200);
      
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!open && !forceMount && !isAnimating) {
    return null;
  }

  return (
    <div
      ref={contentRef}
      data-slot="collapsible-content"
      data-state={open ? "open" : "closed"}
      className={cn(
        "overflow-hidden transition-all duration-200 ease-in-out",
        className
      )}
      style={{
        height: isAnimating ? undefined : height,
      }}
      {...props}
    >
      <div className={open || isAnimating ? "opacity-100" : "opacity-0 transition-opacity duration-200"}>
        {children}
      </div>
    </div>
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
export type { CollapsibleProps, CollapsibleTriggerProps, CollapsibleContentProps };