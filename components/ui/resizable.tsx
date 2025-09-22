"use client";

import * as React from "react";
import { GripVerticalIcon } from "lucide-react";
import { cn } from "./utils";

// Resizable Context
interface ResizableContextValue {
  direction: "horizontal" | "vertical";
  onResize?: (sizes: number[]) => void;
  panelSizes: number[];
  setPanelSizes: (sizes: number[]) => void;
  isResizing: boolean;
  setIsResizing: (resizing: boolean) => void;
}

const ResizableContext = React.createContext<ResizableContextValue | null>(null);

function useResizable() {
  const context = React.useContext(ResizableContext);
  if (!context) {
    throw new Error("useResizable must be used within a ResizablePanelGroup component");
  }
  return context;
}

// ResizablePanelGroup Component
interface ResizablePanelGroupProps extends React.ComponentProps<"div"> {
  direction?: "horizontal" | "vertical";
  onResize?: (sizes: number[]) => void;
  defaultSizes?: number[];
}

const ResizablePanelGroup = React.forwardRef<HTMLDivElement, ResizablePanelGroupProps>(
  ({ 
    className, 
    direction = "horizontal", 
    onResize,
    defaultSizes = [],
    children,
    ...props 
  }, ref) => {
    const [panelSizes, setPanelSizes] = React.useState<number[]>(defaultSizes);
    const [isResizing, setIsResizing] = React.useState(false);

    
    React.useEffect(() => {
      if (defaultSizes.length === 0) {
        const childrenArray = React.Children.toArray(children);
        
        const panelCount = childrenArray.filter( (child) =>
          (child as any).type === ResizablePanel
        ).length;
        
        if (panelCount > 0) {
          const equalSize = 100 / panelCount;
          setPanelSizes(Array(panelCount).fill(equalSize));
        }
      }
    }, [children, defaultSizes]);

    const handleResize = React.useCallback((newSizes: number[]) => {
      setPanelSizes(newSizes);
      onResize?.(newSizes);
    }, [onResize]);

    return (
      <ResizableContext.Provider 
        value={{ 
          direction, 
          onResize: handleResize,
          panelSizes,
          setPanelSizes,
          isResizing,
          setIsResizing
        }}
      >
        <div
          ref={ref}
          data-slot="resizable-panel-group"
          data-panel-group-direction={direction}
          className={cn(
            "flex h-full w-full",
            direction === "vertical" && "flex-col",
            className
          )}
          {...props}
        >
          {children}
        </div>
      </ResizableContext.Provider>
    );
  }
);

ResizablePanelGroup.displayName = "ResizablePanelGroup";

// ResizablePanel Component
interface ResizablePanelProps extends React.ComponentProps<"div"> {
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  id?: string;
}

const ResizablePanel = React.forwardRef<HTMLDivElement, ResizablePanelProps>(
  ({ 
    className, 
    defaultSize, 
    minSize = 10,
    maxSize = 90,
    id,
    children,
    style,
    ...props 
  }, ref) => {
    const { direction, panelSizes } = useResizable();
    const panelIndex = React.useRef<number>(-1);

    // Get panel index
    React.useEffect(() => {
      const parent = ref && 'current' in ref ? ref.current?.parentElement : null;
      if (parent) {
        const panels = Array.from(parent.children).filter(child => 
          child.getAttribute('data-slot') === 'resizable-panel'
        );
        panelIndex.current = panels.indexOf(ref && 'current' in ref ? ref.current! : parent);
      }
    }, [ref]);

    const currentSize = panelSizes[panelIndex.current] || defaultSize || 50;

    const panelStyle: React.CSSProperties = {
      ...style,
      [direction === "horizontal" ? "width" : "height"]: `${currentSize}%`,
      minWidth: direction === "horizontal" ? `${minSize}%` : undefined,
      minHeight: direction === "vertical" ? `${minSize}%` : undefined,
      maxWidth: direction === "horizontal" ? `${maxSize}%` : undefined,
      maxHeight: direction === "vertical" ? `${maxSize}%` : undefined,
      overflow: "hidden"
    };

    return (
      <div
        ref={ref}
        data-slot="resizable-panel"
        id={id}
        style={panelStyle}
        className={cn("relative", className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ResizablePanel.displayName = "ResizablePanel";

// ResizableHandle Component
interface ResizableHandleProps extends React.ComponentProps<"div"> {
  withHandle?: boolean;
  disabled?: boolean;
}

const ResizableHandle = React.forwardRef<HTMLDivElement, ResizableHandleProps>(
  ({ 
    className, 
    withHandle = false,
    disabled = false,
    ...props 
  }, ref) => {
    const { direction, panelSizes, setPanelSizes, setIsResizing } = useResizable();
    const handleRef = React.useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 });

    React.useImperativeHandle(ref, () => handleRef.current!);

    const handleMouseDown = React.useCallback((e: React.MouseEvent) => {
      if (disabled) return;
      
      e.preventDefault();
      setIsDragging(true);
      setIsResizing(true);
      setDragStart({ x: e.clientX, y: e.clientY });
      
      document.body.style.cursor = direction === "horizontal" ? "col-resize" : "row-resize";
      document.body.style.userSelect = "none";
    }, [disabled, direction, setIsResizing]);

    const handleMouseMove = React.useCallback((e: MouseEvent) => {
      if (!isDragging || disabled) return;

      const container = handleRef.current?.parentElement;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const delta = direction === "horizontal" 
        ? e.clientX - dragStart.x 
        : e.clientY - dragStart.y;
      
      const containerSize = direction === "horizontal" 
        ? containerRect.width 
        : containerRect.height;
      
      const deltaPercent = (delta / containerSize) * 100;

      // Find the panels adjacent to this handle
      const handles = Array.from(container.children).filter(child => 
        child.getAttribute('data-slot') === 'resizable-handle'
      );
      const handleIndex = handles.indexOf(handleRef.current!);
      
      if (handleIndex >= 0 && handleIndex < panelSizes.length - 1) {
        const newSizes = [...panelSizes];
        const leftPanelSize = newSizes[handleIndex];
        const rightPanelSize = newSizes[handleIndex + 1];
        
        const newLeftSize = Math.max(10, Math.min(90, leftPanelSize + deltaPercent));
        const newRightSize = Math.max(10, Math.min(90, rightPanelSize - deltaPercent));
        
        // Ensure total doesn't exceed bounds
        if (newLeftSize >= 10 && newRightSize >= 10) {
          newSizes[handleIndex] = newLeftSize;
          newSizes[handleIndex + 1] = newRightSize;
          setPanelSizes(newSizes);
        }
      }

      setDragStart({ x: e.clientX, y: e.clientY });
    }, [isDragging, disabled, direction, dragStart, panelSizes, setPanelSizes]);

    const handleMouseUp = React.useCallback(() => {
      setIsDragging(false);
      setIsResizing(false);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }, [setIsResizing]);

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

    // Touch support
    const handleTouchStart = React.useCallback((e: React.TouchEvent) => {
      if (disabled) return;
      
      const touch = e.touches[0];
      setIsDragging(true);
      setIsResizing(true);
      setDragStart({ x: touch.clientX, y: touch.clientY });
    }, [disabled, setIsResizing]);

    const handleTouchMove = React.useCallback((e: TouchEvent) => {
      if (!isDragging || disabled) return;
      
      const touch = e.touches[0];
      const container = handleRef.current?.parentElement;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const delta = direction === "horizontal" 
        ? touch.clientX - dragStart.x 
        : touch.clientY - dragStart.y;
      
      const containerSize = direction === "horizontal" 
        ? containerRect.width 
        : containerRect.height;
      
      const deltaPercent = (delta / containerSize) * 100;

      const handles = Array.from(container.children).filter(child => 
        child.getAttribute('data-slot') === 'resizable-handle'
      );
      const handleIndex = handles.indexOf(handleRef.current!);
      
      if (handleIndex >= 0 && handleIndex < panelSizes.length - 1) {
        const newSizes = [...panelSizes];
        const leftPanelSize = newSizes[handleIndex];
        const rightPanelSize = newSizes[handleIndex + 1];
        
        const newLeftSize = Math.max(10, Math.min(90, leftPanelSize + deltaPercent));
        const newRightSize = Math.max(10, Math.min(90, rightPanelSize - deltaPercent));
        
        if (newLeftSize >= 10 && newRightSize >= 10) {
          newSizes[handleIndex] = newLeftSize;
          newSizes[handleIndex + 1] = newRightSize;
          setPanelSizes(newSizes);
        }
      }

      setDragStart({ x: touch.clientX, y: touch.clientY });
    }, [isDragging, disabled, direction, dragStart, panelSizes, setPanelSizes]);

    const handleTouchEnd = React.useCallback(() => {
      setIsDragging(false);
      setIsResizing(false);
    }, [setIsResizing]);

    React.useEffect(() => {
      if (isDragging) {
        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);
        
        return () => {
          document.removeEventListener("touchmove", handleTouchMove);
          document.removeEventListener("touchend", handleTouchEnd);
        };
      }
    }, [isDragging, handleTouchMove, handleTouchEnd]);

    return (
      <div
        ref={handleRef}
        data-slot="resizable-handle"
        data-panel-group-direction={direction}
        data-disabled={disabled}
        role="separator"
        aria-orientation={direction === "horizontal" ? "vertical" : "horizontal"}
        tabIndex={disabled ? -1 : 0}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className={cn(
          "bg-border focus-visible:ring-ring relative flex items-center justify-center transition-colors hover:bg-border/80 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden",
          direction === "horizontal" && "w-px cursor-col-resize after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2",
          direction === "vertical" && "h-px cursor-row-resize after:absolute after:inset-x-0 after:top-1/2 after:h-1 after:-translate-y-1/2",
          disabled && "cursor-not-allowed opacity-50",
          isDragging && "bg-primary/20",
          className
        )}
        {...props}
      >
        {withHandle && (
          <div 
            className={cn(
              "bg-border z-10 flex items-center justify-center rounded-xs border transition-colors",
              direction === "horizontal" && "h-4 w-3",
              direction === "vertical" && "h-3 w-4 rotate-90",
              !disabled && "hover:bg-primary/10"
            )}
          >
            <GripVerticalIcon className="size-2.5" />
          </div>
        )}
      </div>
    );
  }
);

ResizableHandle.displayName = "ResizableHandle";

export { 
  ResizablePanelGroup, 
  ResizablePanel, 
  ResizableHandle,
  type ResizablePanelGroupProps,
  type ResizablePanelProps,
  type ResizableHandleProps
};