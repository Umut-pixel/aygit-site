"use client";

import * as React from "react";
import { cn } from "./utils";

// ScrollArea Context
interface ScrollAreaContextValue {
  isScrolling: boolean;
  setIsScrolling: (scrolling: boolean) => void;
  scrollRef: React.RefObject<HTMLDivElement>;
  contentRef: React.RefObject<HTMLDivElement>;
}

const ScrollAreaContext = React.createContext<ScrollAreaContextValue | null>(null);

function useScrollArea() {
  const context = React.useContext(ScrollAreaContext);
  if (!context) {
    throw new Error("useScrollArea must be used within a ScrollArea component");
  }
  return context;
}

// ScrollArea Root Component
interface ScrollAreaProps extends React.ComponentProps<"div"> {
  type?: "auto" | "always" | "scroll" | "hover";
  scrollHideDelay?: number;
}

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ 
    className, 
    children, 
    type = "hover",
    scrollHideDelay = 600,
    ...props 
  }, ref) => {
    const [isScrolling, setIsScrolling] = React.useState(false);
    const [showScrollbar, setShowScrollbar] = React.useState(type === "always");
    const scrollRef = React.useRef<HTMLDivElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);
    const hideTimeoutRef = React.useRef<number>();

    React.useImperativeHandle(ref, () => scrollRef.current!);

    // Handle scroll events
    const handleScroll = React.useCallback(() => {
      setIsScrolling(true);
      setShowScrollbar(true);

      // Clear existing timeout
      if (hideTimeoutRef.current) {
        window.clearTimeout(hideTimeoutRef.current);
      }

      // Set new timeout to hide scrollbar
      if (type === "hover") {
        hideTimeoutRef.current = window.setTimeout(() => {
          setIsScrolling(false);
          setShowScrollbar(false);
        }, scrollHideDelay);
      }
    }, [type, scrollHideDelay]);

    // Handle mouse enter/leave for hover type
    const handleMouseEnter = React.useCallback(() => {
      if (type === "hover") {
        setShowScrollbar(true);
      }
    }, [type]);

    const handleMouseLeave = React.useCallback(() => {
      if (type === "hover" && !isScrolling) {
        setShowScrollbar(false);
      }
    }, [type, isScrolling]);

    // Check if scrolling is needed
    const [hasVerticalScroll, setHasVerticalScroll] = React.useState(false);
    const [hasHorizontalScroll, setHasHorizontalScroll] = React.useState(false);

    React.useEffect(() => {
      const checkScrollable = () => {
        if (scrollRef.current && contentRef.current) {
          const scrollElement = scrollRef.current;
          const contentElement = contentRef.current;
          
          setHasVerticalScroll(contentElement.scrollHeight > scrollElement.clientHeight);
          setHasHorizontalScroll(contentElement.scrollWidth > scrollElement.clientWidth);
        }
      };

      checkScrollable();

      // Use ResizeObserver if available
      if (window.ResizeObserver && contentRef.current) {
        const resizeObserver = new ResizeObserver(checkScrollable);
        resizeObserver.observe(contentRef.current);
        return () => resizeObserver.disconnect();
      }
    }, [children]);

    // Cleanup timeout on unmount
    React.useEffect(() => {
      return () => {
        if (hideTimeoutRef.current) {
          window.clearTimeout(hideTimeoutRef.current);
        }
      };
    }, []);

    const shouldShowVerticalScrollbar = hasVerticalScroll && (showScrollbar || type === "always" || type === "scroll");
    const shouldShowHorizontalScrollbar = hasHorizontalScroll && (showScrollbar || type === "always" || type === "scroll");

    return (
      <ScrollAreaContext.Provider 
        value={{ 
          isScrolling, 
          setIsScrolling, 
          scrollRef, 
          contentRef 
        }}
      >
        <div
          data-slot="scroll-area"
          className={cn("relative overflow-hidden", className)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          {...props}
        >
          {/* Viewport */}
          <div
            ref={scrollRef}
            data-slot="scroll-area-viewport"
            className={cn(
              "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",
              type === "scroll" ? "overflow-scroll" : "overflow-auto",
              type !== "scroll" && "scrollbar-hidden"
            )}
            style={{
              scrollbarWidth: type === "scroll" ? "auto" : "none",
              msOverflowStyle: type === "scroll" ? "auto" : "none",
            }}
            onScroll={handleScroll}
            tabIndex={0}
          >
            <div ref={contentRef} className="min-h-full">
              {children}
            </div>
          </div>

          {/* Custom Vertical Scrollbar */}
          {shouldShowVerticalScrollbar && (
            <ScrollBar 
              orientation="vertical" 
              className={cn(
                "transition-opacity duration-300",
                showScrollbar ? "opacity-100" : "opacity-0"
              )}
            />
          )}

          {/* Custom Horizontal Scrollbar */}
          {shouldShowHorizontalScrollbar && (
            <ScrollBar 
              orientation="horizontal"
              className={cn(
                "transition-opacity duration-300",
                showScrollbar ? "opacity-100" : "opacity-0"
              )}
            />
          )}
        </div>
      </ScrollAreaContext.Provider>
    );
  }
);

ScrollArea.displayName = "ScrollArea";

// ScrollBar Component
interface ScrollBarProps extends React.ComponentProps<"div"> {
  orientation?: "vertical" | "horizontal";
}

const ScrollBar = React.forwardRef<HTMLDivElement, ScrollBarProps>(
  ({ className, orientation = "vertical", ...props }, ref) => {
    const { scrollRef } = useScrollArea();
    const [thumbSize, setThumbSize] = React.useState(0);
    const [thumbPosition, setThumbPosition] = React.useState(0);
    const [isDragging, setIsDragging] = React.useState(false);
    const thumbRef = React.useRef<HTMLDivElement>(null);

    // Update scrollbar thumb
    const updateScrollbar = React.useCallback(() => {
      if (!scrollRef.current) return;

      const scrollElement = scrollRef.current;
      
      if (orientation === "vertical") {
        const scrollRatio = scrollElement.scrollTop / (scrollElement.scrollHeight - scrollElement.clientHeight);
        const thumbSizeRatio = scrollElement.clientHeight / scrollElement.scrollHeight;
        
        setThumbSize(Math.max(thumbSizeRatio * 100, 10)); // Minimum 10% size
        setThumbPosition(scrollRatio * (100 - thumbSizeRatio * 100));
      } else {
        const scrollRatio = scrollElement.scrollLeft / (scrollElement.scrollWidth - scrollElement.clientWidth);
        const thumbSizeRatio = scrollElement.clientWidth / scrollElement.scrollWidth;
        
        setThumbSize(Math.max(thumbSizeRatio * 100, 10)); // Minimum 10% size
        setThumbPosition(scrollRatio * (100 - thumbSizeRatio * 100));
      }
    }, [orientation, scrollRef]);

    // Listen to scroll events
    React.useEffect(() => {
      const scrollElement = scrollRef.current;
      if (!scrollElement) return;

      updateScrollbar();
      scrollElement.addEventListener("scroll", updateScrollbar);
      
      return () => scrollElement.removeEventListener("scroll", updateScrollbar);
    }, [updateScrollbar, scrollRef]);

    // Handle thumb dragging
    const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);
      
      document.body.style.userSelect = "none";
      document.body.style.cursor = orientation === "vertical" ? "ns-resize" : "ew-resize";
    }, [orientation]);

    const handleMouseMove = React.useCallback((e: MouseEvent) => {
      if (!isDragging || !scrollRef.current) return;

      const scrollElement = scrollRef.current;
      const rect = scrollElement.getBoundingClientRect();
      
      if (orientation === "vertical") {
        const trackHeight = rect.height;
        const mouseY = e.clientY - rect.top;
        const scrollPercentage = mouseY / trackHeight;
        const maxScroll = scrollElement.scrollHeight - scrollElement.clientHeight;
        
        scrollElement.scrollTop = scrollPercentage * maxScroll;
      } else {
        const trackWidth = rect.width;
        const mouseX = e.clientX - rect.left;
        const scrollPercentage = mouseX / trackWidth;
        const maxScroll = scrollElement.scrollWidth - scrollElement.clientWidth;
        
        scrollElement.scrollLeft = scrollPercentage * maxScroll;
      }
    }, [isDragging, orientation, scrollRef]);

    const handleMouseUp = React.useCallback(() => {
      setIsDragging(false);
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    }, []);

    React.useEffect(() => {
      if (isDragging) {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        
        return () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
        };
      }
    }, [isDragging, handleMouseMove, handleMouseUp]);

    const thumbStyle: React.CSSProperties = {
      [orientation === "vertical" ? "height" : "width"]: `${thumbSize}%`,
      [orientation === "vertical" ? "top" : "left"]: `${thumbPosition}%`,
    };

    return (
      <div
        ref={ref}
        data-slot="scroll-area-scrollbar"
        data-orientation={orientation}
        className={cn(
          "flex touch-none p-px transition-colors select-none",
          orientation === "vertical" && "absolute right-0 top-0 h-full w-2.5 border-l border-l-transparent",
          orientation === "horizontal" && "absolute bottom-0 left-0 h-2.5 w-full flex-col border-t border-t-transparent",
          className
        )}
        {...props}
      >
        <div
          ref={thumbRef}
          data-slot="scroll-area-thumb"
          className={cn(
            "bg-border relative rounded-full cursor-pointer hover:bg-border/80 transition-colors",
            orientation === "vertical" ? "w-full" : "h-full",
            isDragging && "bg-border/60"
          )}
          style={thumbStyle}
          onMouseDown={handleMouseDown}
        />
      </div>
    );
  }
);

ScrollBar.displayName = "ScrollBar";

export { ScrollArea, ScrollBar, type ScrollAreaProps, type ScrollBarProps };