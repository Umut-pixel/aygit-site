"use client";

import * as React from "react";
import { cn } from "./utils";

interface HoverCardContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  position: { x: number; y: number };
  setPosition: (position: { x: number; y: number }) => void;
  align: "start" | "center" | "end";
}

const HoverCardContext = React.createContext<HoverCardContextValue | null>(null);

function useHoverCard() {
  const context = React.useContext(HoverCardContext);
  if (!context) {
    throw new Error("useHoverCard must be used within a HoverCard component");
  }
  return context;
}

function HoverCard({
  openDelay = 700,
  closeDelay = 300,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  openDelay?: number;
  closeDelay?: number;
}) {
  const [open, setOpen] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const openTimeoutRef = React.useRef<number>();
  const closeTimeoutRef = React.useRef<number>();

  const handleOpenChange = React.useCallback((newOpen: boolean) => {
    if (openTimeoutRef.current) {
      window.clearTimeout(openTimeoutRef.current);
    }
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
    }

    if (newOpen) {
      openTimeoutRef.current = window.setTimeout(() => {
        setOpen(true);
      }, openDelay);
    } else {
      closeTimeoutRef.current = window.setTimeout(() => {
        setOpen(false);
      }, closeDelay);
    }
  }, [openDelay, closeDelay]);

  React.useEffect(() => {
    return () => {
      if (openTimeoutRef.current) {
        window.clearTimeout(openTimeoutRef.current);
      }
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <HoverCardContext.Provider 
      value={{ 
        open, 
        setOpen: handleOpenChange, 
        position, 
        setPosition,
        align: "center"
      }}
    >
      <div data-slot="hover-card" {...props}>
        {children}
      </div>
    </HoverCardContext.Provider>
  );
}

function HoverCardTrigger({
  children,
  onMouseEnter,
  onMouseLeave,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const { setOpen, setPosition } = useHoverCard();
  const triggerRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseEnter?.(e);
    
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPosition({ 
        x: rect.left + rect.width / 2, 
        y: rect.top 
      });
    }
    
    setOpen(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseLeave?.(e);
    setOpen(false);
  };

  if (asChild && React.Children.count(children) === 1) {
    const child = React.Children.only(children);
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ref: triggerRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        ...child.props,
      });
    }
  }

  return (
    <div
      ref={triggerRef}
      data-slot="hover-card-trigger"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  children,
  onMouseEnter,
  onMouseLeave,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "start" | "center" | "end";
  sideOffset?: number;
}) {
  const { open, setOpen, position } = useHoverCard();
  const contentRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseEnter?.(e);
    setOpen(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseLeave?.(e);
    setOpen(false);
  };

  React.useEffect(() => {
    if (open && contentRef.current) {
      const content = contentRef.current;
      const contentRect = content.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let left = position.x;
      let top = position.y - contentRect.height - sideOffset;

      // Adjust horizontal position based on alignment
      switch (align) {
        case "start":
          left = position.x;
          break;
        case "center":
          left = position.x - contentRect.width / 2;
          break;
        case "end":
          left = position.x - contentRect.width;
          break;
      }

      // Keep within viewport bounds
      if (left < 8) left = 8;
      if (left + contentRect.width > viewportWidth - 8) {
        left = viewportWidth - contentRect.width - 8;
      }
      
      if (top < 8) {
        top = position.y + 8; // Show below trigger if no space above
      }

      content.style.left = `${left}px`;
      content.style.top = `${top}px`;
    }
  }, [open, position, align, sideOffset]);

  if (!open) return null;

  return (
    <div
      ref={contentRef}
      data-slot="hover-card-content"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "fixed",
        zIndex: 50,
      }}
      className={cn(
        "bg-popover text-popover-foreground z-50 w-64 rounded-md border p-4 shadow-md outline-hidden animate-in fade-in-0 zoom-in-95",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export { HoverCard, HoverCardTrigger, HoverCardContent };