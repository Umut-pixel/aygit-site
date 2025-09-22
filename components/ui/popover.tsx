"use client";

import * as React from "react";
import { cn } from "./utils";

// Popover Context
interface PopoverContextValue {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  triggerId: string;
  contentId: string;
}

const PopoverContext = React.createContext<PopoverContextValue | null>(null);

function usePopover() {
  const context = React.useContext(PopoverContext);
  if (!context) {
    throw new Error("usePopover must be used within a Popover component");
  }
  return context;
}

// Popover Root Component
function Popover({
  children,
  open,
  onOpenChange,
  defaultOpen = false,
  ...props
}: React.ComponentProps<"div"> & {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  defaultOpen?: boolean;
}) {
  const [isOpenInternal, setIsOpenInternal] = React.useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : isOpenInternal;
  
  const setIsOpen = React.useCallback((newOpen: boolean) => {
    if (!isControlled) {
      setIsOpenInternal(newOpen);
    }
    onOpenChange?.(newOpen);
  }, [isControlled, onOpenChange]);

  const triggerId = React.useId();
  const contentId = React.useId();

  // Close popover when clicking outside
  React.useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      const triggerElement = document.getElementById(triggerId);
      const contentElement = document.getElementById(contentId);
      
      if (
        triggerElement && 
        contentElement && 
        !triggerElement.contains(target) && 
        !contentElement.contains(target)
      ) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, triggerId, contentId, setIsOpen]);

  return (
    <PopoverContext.Provider value={{ isOpen, setIsOpen, triggerId, contentId }}>
      <div data-slot="popover" className="relative" {...props}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
}

// Popover Trigger
function PopoverTrigger({
  children,
  asChild = false,
  onClick,
  ...props
}: React.ComponentProps<"button"> & {
  asChild?: boolean;
}) {
  const { isOpen, setIsOpen, triggerId, contentId } = usePopover();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    setIsOpen(!isOpen);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      id: triggerId,
      'aria-expanded': isOpen,
      'aria-haspopup': 'dialog',
      'aria-controls': contentId,
      onClick: handleClick,
      'data-slot': 'popover-trigger',
      ...children.props,
    });
  }

  return (
    <button
      id={triggerId}
      data-slot="popover-trigger"
      aria-expanded={isOpen}
      aria-haspopup="dialog"
      aria-controls={contentId}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

// Popover Content
function PopoverContent({
  className,
  align = "center",
  side = "bottom",
  sideOffset = 4,
  alignOffset = 0,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  alignOffset?: number;
}) {
  const { isOpen, contentId } = usePopover();
  const contentRef = React.useRef<HTMLDivElement>(null);

  // Position the popover content
  React.useEffect(() => {
    if (!isOpen || !contentRef.current) return;

    const triggerElement = document.getElementById(contentRef.current.getAttribute('aria-labelledby') || '');
    if (!triggerElement) return;

    const triggerRect = triggerElement.getBoundingClientRect();
    const contentElement = contentRef.current;
    const contentRect = contentElement.getBoundingClientRect();
    
    let top = 0;
    let left = 0;

    // Calculate position based on side
    switch (side) {
      case 'top':
        top = triggerRect.top - contentRect.height - sideOffset;
        break;
      case 'bottom':
        top = triggerRect.bottom + sideOffset;
        break;
      case 'left':
        left = triggerRect.left - contentRect.width - sideOffset;
        top = triggerRect.top;
        break;
      case 'right':
        left = triggerRect.right + sideOffset;
        top = triggerRect.top;
        break;
    }

    // Calculate alignment
    if (side === 'top' || side === 'bottom') {
      switch (align) {
        case 'start':
          left = triggerRect.left + alignOffset;
          break;
        case 'center':
          left = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2 + alignOffset;
          break;
        case 'end':
          left = triggerRect.right - contentRect.width + alignOffset;
          break;
      }
    } else {
      switch (align) {
        case 'start':
          top = triggerRect.top + alignOffset;
          break;
        case 'center':
          top = triggerRect.top + triggerRect.height / 2 - contentRect.height / 2 + alignOffset;
          break;
        case 'end':
          top = triggerRect.bottom - contentRect.height + alignOffset;
          break;
      }
    }

    // Ensure content stays within viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    if (left + contentRect.width > viewportWidth) {
      left = viewportWidth - contentRect.width - 8;
    }
    if (left < 8) {
      left = 8;
    }
    if (top + contentRect.height > viewportHeight) {
      top = viewportHeight - contentRect.height - 8;
    }
    if (top < 8) {
      top = 8;
    }

    contentElement.style.position = 'fixed';
    contentElement.style.top = `${top}px`;
    contentElement.style.left = `${left}px`;
    contentElement.style.zIndex = '50';
  }, [isOpen, align, side, sideOffset, alignOffset]);

  if (!isOpen) return null;

  return (
    <div
      ref={contentRef}
      id={contentId}
      data-slot="popover-content"
      data-state={isOpen ? "open" : "closed"}
      data-side={side}
      data-align={align}
      role="dialog"
      aria-modal="true"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 rounded-md border p-4 shadow-md outline-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Popover Anchor (for positioning reference)
function PopoverAnchor({
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div data-slot="popover-anchor" {...props}>
      {children}
    </div>
  );
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };