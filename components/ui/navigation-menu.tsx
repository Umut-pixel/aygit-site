import * as React from "react";
import { cva } from "class-variance-authority";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "./utils";

// Navigation Menu Context
interface NavigationMenuContextValue {
  activeItem: string | null;
  setActiveItem: (item: string | null) => void;
  viewport: boolean;
  orientation: "horizontal" | "vertical";
}

const NavigationMenuContext = React.createContext<NavigationMenuContextValue | null>(null);

function useNavigationMenu() {
  const context = React.useContext(NavigationMenuContext);
  if (!context) {
    throw new Error("useNavigationMenu must be used within a NavigationMenu component");
  }
  return context;
}

// Navigation Menu Root
function NavigationMenu({
  className,
  children,
  viewport = true,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<"nav"> & {
  viewport?: boolean;
  orientation?: "horizontal" | "vertical";
}) {
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-slot="navigation-menu"]')) {
        setActiveItem(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <NavigationMenuContext.Provider 
      value={{ 
        activeItem, 
        setActiveItem, 
        viewport,
        orientation 
      }}
    >
      <nav
        data-slot="navigation-menu"
        data-viewport={viewport}
        data-orientation={orientation}
        className={cn(
          "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
          className
        )}
        {...props}
      >
        {children}
        {viewport && <NavigationMenuViewport />}
      </nav>
    </NavigationMenuContext.Provider>
  );
}

// Navigation Menu List
function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<"ul">) {
  const { orientation } = useNavigationMenu();
  
  return (
    <ul
      data-slot="navigation-menu-list"
      className={cn(
        "group flex flex-1 list-none items-center justify-center gap-1",
        orientation === "vertical" && "flex-col",
        className
      )}
      {...props}
    />
  );
}

// Navigation Menu Item
function NavigationMenuItem({
  className,
  value,
  ...props
}: React.ComponentProps<"li"> & {
  value?: string;
}) {
  return (
    <li
      data-slot="navigation-menu-item"
      data-value={value}
      className={cn("relative", className)}
      {...props}
    />
  );
}

// Navigation Menu Trigger Styles
const navigationMenuTriggerStyle = cva(
  "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1"
);

// Navigation Menu Trigger
function NavigationMenuTrigger({
  className,
  children,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const { activeItem, setActiveItem } = useNavigationMenu();
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    
    const menuItem = triggerRef.current?.closest('[data-value]');
    const itemValue = menuItem?.getAttribute('data-value');
    
    if (itemValue) {
      if (activeItem === itemValue) {
        setActiveItem(null);
        setIsOpen(false);
      } else {
        setActiveItem(itemValue);
        setIsOpen(true);
      }
    }
  };

  React.useEffect(() => {
    const menuItem = triggerRef.current?.closest('[data-value]');
    const itemValue = menuItem?.getAttribute('data-value');
    setIsOpen(activeItem === itemValue);
  }, [activeItem]);

  return (
    <button
      ref={triggerRef}
      data-slot="navigation-menu-trigger"
      data-state={isOpen ? "open" : "closed"}
      onClick={handleClick}
      className={cn(navigationMenuTriggerStyle(), "group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </button>
  );
}

// Navigation Menu Content
function NavigationMenuContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const { activeItem, viewport } = useNavigationMenu();
  const [isVisible, setIsVisible] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const menuItem = contentRef.current?.closest('[data-value]');
    const itemValue = menuItem?.getAttribute('data-value');
    
    setIsVisible(activeItem === itemValue);
  }, [activeItem]);

  if (!isVisible) return null;

  return (
    <div
      ref={contentRef}
      data-slot="navigation-menu-content"
      data-state={isVisible ? "open" : "closed"}
      className={cn(
        "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto",
        !viewport && "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 top-full mt-1.5 overflow-hidden rounded-md border shadow duration-200",
        viewport && "absolute top-full left-0 mt-1.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Navigation Menu Viewport
function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { activeItem } = useNavigationMenu();
  const [contentHeight, setContentHeight] = React.useState<number>(0);
  const [contentWidth, setContentWidth] = React.useState<number>(0);

  React.useEffect(() => {
    if (activeItem) {
      const activeContent = document.querySelector(`[data-value="${activeItem}"] [data-slot="navigation-menu-content"]`);
      if (activeContent) {
        const rect = activeContent.getBoundingClientRect();
        setContentHeight(rect.height);
        setContentWidth(rect.width);
      }
    }
  }, [activeItem]);

  const isOpen = !!activeItem;

  return (
    <div
      className={cn(
        "absolute top-full left-0 isolate z-50 flex justify-center"
      )}
    >
      <div
        data-slot="navigation-menu-viewport"
        data-state={isOpen ? "open" : "closed"}
        style={{
          height: isOpen ? contentHeight : 0,
          width: contentWidth || "auto"
        }}
        className={cn(
          "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 overflow-hidden rounded-md border shadow transition-all duration-200",
          className
        )}
        {...props}
      />
    </div>
  );
}

// Navigation Menu Link
function NavigationMenuLink({
  className,
  href,
  onClick,
  ...props
}: React.ComponentProps<"a">) {
  const { setActiveItem } = useNavigationMenu();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    setActiveItem(null); // Close menu on link click
  };

  return (
    <a
      data-slot="navigation-menu-link"
      href={href}
      onClick={handleClick}
      className={cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

// Navigation Menu Indicator
function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { activeItem } = useNavigationMenu();
  const isVisible = !!activeItem;

  return (
    <div
      data-slot="navigation-menu-indicator"
      data-state={isVisible ? "visible" : "hidden"}
      className={cn(
        "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </div>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
};