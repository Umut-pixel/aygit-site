"use client";

import * as React from "react";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { cn } from "./utils";

// Menubar Context
interface MenubarContextValue {
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
  openMenus: Set<string>;
  toggleMenu: (menu: string) => void;
  closeAllMenus: () => void;
}

const MenubarContext = React.createContext<MenubarContextValue | null>(null);

function useMenubar() {
  const context = React.useContext(MenubarContext);
  if (!context) {
    throw new Error("useMenubar must be used within a Menubar component");
  }
  return context;
}

// Menubar Root Component
function Menubar({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const [openMenus, setOpenMenus] = React.useState<Set<string>>(new Set());

  const toggleMenu = React.useCallback((menu: string) => {
    setOpenMenus(prev => {
      const newSet = new Set(prev);
      if (newSet.has(menu)) {
        newSet.delete(menu);
        if (activeMenu === menu) {
          setActiveMenu(null);
        }
      } else {
        newSet.add(menu);
        setActiveMenu(menu);
      }
      return newSet;
    });
  }, [activeMenu]);

  const closeAllMenus = React.useCallback(() => {
    setOpenMenus(new Set());
    setActiveMenu(null);
  }, []);

  // Close menus when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-slot="menubar"]')) {
        closeAllMenus();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeAllMenus]);

  return (
    <MenubarContext.Provider 
      value={{ 
        activeMenu, 
        setActiveMenu, 
        openMenus, 
        toggleMenu, 
        closeAllMenus 
      }}
    >
      <div
        data-slot="menubar"
        className={cn(
          "bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </MenubarContext.Provider>
  );
}

// Individual Menu Component
interface MenubarMenuProps extends React.ComponentProps<"div"> {
  value?: string;
  children?: React.ReactNode;
}

function MenubarMenu({ 
  value = Math.random().toString(36),
  children,
  ...props 
}: MenubarMenuProps) {
  return (
    <div data-slot="menubar-menu" data-value={value} {...props}>
      {children}
    </div>
  );
}

// Menu Group
function MenubarGroup({ 
  className,
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div 
      data-slot="menubar-group" 
      className={cn("", className)}
      {...props} 
    />
  );
}

// Portal (simplified - just renders children)
interface MenubarPortalProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
}

function MenubarPortal({
  children,
  ...props
}: MenubarPortalProps) {
  return (
    <div data-slot="menubar-portal" {...props} >
      {children}
    </div>
  );
}

// Radio Group
function MenubarRadioGroup({ 
  className,
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div 
      data-slot="menubar-radio-group"
      role="radiogroup"
      className={className}
      {...props} 
    />
  );
}

// Menu Trigger
function MenubarTrigger({
  className,
  children,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const { activeMenu, toggleMenu } = useMenubar();
  const menuElement = React.useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    const menuContainer = menuElement.current?.closest('[data-value]');
    const menuValue = menuContainer?.getAttribute('data-value');
    
    if (menuValue) {
      toggleMenu(menuValue);
      setIsOpen(prev => !prev);
    }
  };

  return (
    <button
      ref={menuElement}
      data-slot="menubar-trigger"
      data-state={isOpen ? "open" : "closed"}
      onClick={handleClick}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

// Menu Content
function MenubarContent({
  className,
  children,
  align = "start",
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<"div"> & {
  align?: "start" | "center" | "end";
  alignOffset?: number;
  sideOffset?: number;
}) {
  const { openMenus } = useMenubar();
  const [isVisible, setIsVisible] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const menuContainer = contentRef.current?.closest('[data-value]');
    const menuValue = menuContainer?.getAttribute('data-value');
    
    if (menuValue && openMenus.has(menuValue)) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [openMenus]);

  if (!isVisible) return null;

  return (
    <MenubarPortal>
      <div
        ref={contentRef}
        data-slot="menubar-content"
        data-state={isVisible ? "open" : "closed"}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] overflow-hidden rounded-md border p-1 shadow-md absolute top-full mt-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </MenubarPortal>
  );
}

// Menu Item
function MenubarItem({
  className,
  inset,
  variant = "default",
  onClick,
  ...props
}: React.ComponentProps<"div"> & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  const { closeAllMenus } = useMenubar();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
    closeAllMenus();
  };

  return (
    <div
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      onClick={handleClick}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-accent hover:text-accent-foreground cursor-pointer",
        className
      )}
      {...props}
    />
  );
}

// Checkbox Item
function MenubarCheckboxItem({
  className,
  children,
  checked,
  onCheckedChange,
  ...props
}: React.ComponentProps<"div"> & {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}) {
  const handleClick = () => {
    onCheckedChange?.(!checked);
  };

  return (
    <div
      data-slot="menubar-checkbox-item"
      onClick={handleClick}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-accent hover:text-accent-foreground cursor-pointer",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        {checked && <CheckIcon className="size-4" />}
      </span>
      {children}
    </div>
  );
}

// Radio Item
function MenubarRadioItem({
  className,
  children,
  checked,
  onSelect,
  ...props
}: React.ComponentProps<"div"> & {
  checked?: boolean;
  onSelect?: () => void;
}) {
  return (
    <div
      data-slot="menubar-radio-item"
      onClick={onSelect}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-accent hover:text-accent-foreground cursor-pointer",
        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        {checked && <CircleIcon className="size-2 fill-current" />}
      </span>
      {children}
    </div>
  );
}

// Menu Label
function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<"div"> & {
  inset?: boolean;
}) {
  return (
    <div
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8 text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

// Menu Separator
function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="menubar-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

// Menu Shortcut
function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}

// Sub Menu (simplified)
function MenubarSub({ 
  children,
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div data-slot="menubar-sub" {...props}>
      {children}
    </div>
  );
}

// Sub Menu Trigger
function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  inset?: boolean;
}) {
  return (
    <div
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8 hover:bg-accent hover:text-accent-foreground cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </div>
  );
}

// Sub Menu Content
function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="menubar-sub-content"
      className={cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg absolute left-full top-0 ml-1",
        className
      )}
      {...props}
    />
  );
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
};