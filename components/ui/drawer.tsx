"use client";

import * as React from "react";
import { cn } from "./utils";

interface DrawerContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  direction: "top" | "bottom" | "left" | "right";
}

const DrawerContext = React.createContext<DrawerContextValue | null>(null);

function useDrawer() {
  const context = React.useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a Drawer component");
  }
  return context;
}

function Drawer({
  open,
  onOpenChange,
  direction = "bottom",
  children,
  ...props
}: React.ComponentProps<"div"> & {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  direction?: "top" | "bottom" | "left" | "right";
}) {
  const [internalOpen, setInternalOpen] = React.useState(false);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internalOpen;
  
  const setOpen = React.useCallback((newOpen: boolean) => {
    if (isControlled) {
      onOpenChange?.(newOpen);
    } else {
      setInternalOpen(newOpen);
    }
  }, [isControlled, onOpenChange]);

  return (
    <DrawerContext.Provider value={{ open: isOpen, setOpen, direction }}>
      <div data-slot="drawer" {...props}>
        {children}
      </div>
    </DrawerContext.Provider>
  );
}

function DrawerTrigger({
  children,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const { setOpen } = useDrawer();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    setOpen(true);
  };

  return (
    <button
      data-slot="drawer-trigger"
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

function DrawerPortal({
  children,
  ...props
}: React.ComponentProps<"div">) {
  const { open } = useDrawer();
  
  if (!open) return null;

  return (
    <div data-slot="drawer-portal" {...props}>
      {children}
    </div>
  );
}

function DrawerClose({
  children,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const { setOpen } = useDrawer();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    setOpen(false);
  };

  return (
    <button
      data-slot="drawer-close"
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
}

function DrawerOverlay({
  className,
  onClick,
  ...props
}: React.ComponentProps<"div">) {
  const { setOpen } = useDrawer();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
    setOpen(false);
  };

  return (
    <div
      data-slot="drawer-overlay"
      onClick={handleClick}
      className={cn(
        "fixed inset-0 z-50 bg-black/50 animate-in fade-in-0",
        className
      )}
      {...props}
    />
  );
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const { open, setOpen, direction } = useDrawer();
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when drawer is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [open, setOpen]);

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!open) return null;

  const directionClasses = {
    top: "inset-x-0 top-0 mb-24 max-h-[80vh] rounded-b-lg border-b animate-in slide-in-from-top-full",
    bottom: "inset-x-0 bottom-0 mt-24 max-h-[80vh] rounded-t-lg border-t animate-in slide-in-from-bottom-full",
    right: "inset-y-0 right-0 w-3/4 border-l sm:max-w-sm animate-in slide-in-from-right-full",
    left: "inset-y-0 left-0 w-3/4 border-r sm:max-w-sm animate-in slide-in-from-left-full"
  };

  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <div
        ref={contentRef}
        data-slot="drawer-content"
        data-direction={direction}
        onClick={handleContentClick}
        className={cn(
          "bg-background fixed z-50 flex h-auto flex-col",
          directionClasses[direction],
          className
        )}
        {...props}
      >
        {/* Handle for bottom/top drawers */}
        {(direction === "bottom" || direction === "top") && (
          <div className="bg-muted mx-auto mt-4 h-2 w-[100px] shrink-0 rounded-full" />
        )}
        {children}
      </div>
    </DrawerPortal>
  );
}

function DrawerHeader({ 
  className, 
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
}

function DrawerFooter({ 
  className, 
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="drawer-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};