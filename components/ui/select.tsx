"use client";

import * as React from "react";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import { cn } from "./utils";

// Select Context
interface SelectContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  triggerId: string;
  contentId: string;
}

const SelectContext = React.createContext<SelectContextValue | null>(null);

function useSelect() {
  const context = React.useContext(SelectContext);
  if (!context) {
    throw new Error("useSelect must be used within a Select component");
  }
  return context;
}

// Select Root Component
interface SelectProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  children?: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
  value,
  defaultValue,
  onValueChange,
  open,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
  required = false,
  name,
  children,
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue || "");
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
  
  const isControlledValue = value !== undefined;
  const isControlledOpen = open !== undefined;
  
  const currentValue = isControlledValue ? value : internalValue;
  const currentOpen = isControlledOpen ? open : internalOpen;

  const triggerId = React.useId();
  const contentId = React.useId();

  const handleValueChange = React.useCallback((newValue: string) => {
    if (!isControlledValue) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  }, [isControlledValue, onValueChange]);

  const handleOpenChange = React.useCallback((newOpen: boolean) => {
    if (!isControlledOpen) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  }, [isControlledOpen, onOpenChange]);

  return (
    <SelectContext.Provider
      value={{
        value: currentValue,
        onValueChange: handleValueChange,
        open: currentOpen,
        setOpen: handleOpenChange,
        disabled,
        required,
        triggerId,
        contentId,
      }}
    >
      <div data-slot="select">
        {children}
        {/* Hidden input for form submission */}
        {name && (
          <input
            type="hidden"
            name={name}
            value={currentValue}
            required={required}
            disabled={disabled}
          />
        )}
      </div>
    </SelectContext.Provider>
  );
};

// Select Group Component
interface SelectGroupProps extends React.ComponentProps<"div"> {}

const SelectGroup = React.forwardRef<HTMLDivElement, SelectGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="select-group"
        role="group"
        className={className}
        {...props}
      />
    );
  }
);

SelectGroup.displayName = "SelectGroup";

// Select Value Component (for displaying current value)
interface SelectValueProps extends React.ComponentProps<"span"> {
  placeholder?: string;
}

const SelectValue = React.forwardRef<HTMLSpanElement, SelectValueProps>(
  ({ className, placeholder, ...props }, ref) => {
    const { value } = useSelect();
    
    return (
      <span
        ref={ref}
        data-slot="select-value"
        data-placeholder={!value}
        className={cn(
          "line-clamp-1 flex items-center gap-2",
          !value && "text-muted-foreground",
          className
        )}
        {...props}
      >
        {value || placeholder}
      </span>
    );
  }
);

SelectValue.displayName = "SelectValue";

// Select Trigger Component
interface SelectTriggerProps extends React.ComponentProps<"button"> {
  size?: "sm" | "default";
}

const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className, size = "default", children, ...props }, ref) => {
    const { open, setOpen, disabled, triggerId, contentId } = useSelect();

    const handleClick = () => {
      if (!disabled) {
        setOpen(!open);
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === " " || event.key === "Enter" || event.key === "ArrowDown") {
        event.preventDefault();
        setOpen(true);
      } else if (event.key === "Escape") {
        setOpen(false);
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        id={triggerId}
        data-slot="select-trigger"
        data-size={size}
        data-state={open ? "open" : "closed"}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={contentId}
        disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "border-input data-[placeholder]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          size === "default" && "h-9",
          size === "sm" && "h-8",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon 
          className={cn(
            "size-4 opacity-50 transition-transform",
            open && "rotate-180"
          )} 
        />
      </button>
    );
  }
);

SelectTrigger.displayName = "SelectTrigger";

// Select Content Component
interface SelectContentProps extends React.ComponentProps<"div"> {
  position?: "item-aligned" | "popper";
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
}

const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ 
    className, 
    children, 
    position = "popper",
    side = "bottom",
    sideOffset = 4,
    align = "start",
    alignOffset = 0,
    ...props 
  }, ref) => {
    const { open, setOpen, triggerId, contentId } = useSelect();
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useImperativeHandle(ref, () => contentRef.current!);

    // Close on outside click
    React.useEffect(() => {
      if (!open) return;

      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Element;
        const triggerElement = document.getElementById(triggerId);
        const contentElement = contentRef.current;
        
        if (
          triggerElement && 
          contentElement && 
          !triggerElement.contains(target) && 
          !contentElement.contains(target)
        ) {
          setOpen(false);
        }
      };

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          setOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscape);
      };
    }, [open, triggerId, setOpen]);

    // Position the content
    React.useEffect(() => {
      if (!open || !contentRef.current) return;

      const triggerElement = document.getElementById(triggerId);
      if (!triggerElement) return;

      const triggerRect = triggerElement.getBoundingClientRect();
      const contentElement = contentRef.current;
      
      let top = 0;
      let left = 0;

      // Calculate position based on side
      switch (side) {
        case 'top':
          top = triggerRect.top - sideOffset;
          break;
        case 'bottom':
          top = triggerRect.bottom + sideOffset;
          break;
        case 'left':
          left = triggerRect.left - sideOffset;
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
            left = triggerRect.left + triggerRect.width / 2 + alignOffset;
            break;
          case 'end':
            left = triggerRect.right + alignOffset;
            break;
        }
      }

      // Ensure content stays within viewport
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const contentRect = contentElement.getBoundingClientRect();
      
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
      contentElement.style.minWidth = `${triggerRect.width}px`;
    }, [open, triggerId, side, sideOffset, align, alignOffset]);

    if (!open) return null;

    return (
      <div
        ref={contentRef}
        id={contentId}
        data-slot="select-content"
        data-state={open ? "open" : "closed"}
        data-side={side}
        data-align={align}
        role="listbox"
        aria-labelledby={triggerId}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
          position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        {...props}
      >
        <div className="p-1">
          {children}
        </div>
      </div>
    );
  }
);

SelectContent.displayName = "SelectContent";

// Select Label Component
interface SelectLabelProps extends React.ComponentProps<"div"> {}

const SelectLabel = React.forwardRef<HTMLDivElement, SelectLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="select-label"
        className={cn("text-muted-foreground px-2 py-1.5 text-xs font-medium", className)}
        {...props}
      />
    );
  }
);

SelectLabel.displayName = "SelectLabel";

// Select Item Component
interface SelectItemProps extends React.ComponentProps<"div"> {
  value: string;
  disabled?: boolean;
}

const SelectItem = React.forwardRef<HTMLDivElement, SelectItemProps>(
  ({ className, children, value, disabled = false, ...props }, ref) => {
    const { value: selectedValue, onValueChange, setOpen } = useSelect();
    const isSelected = selectedValue === value;

    const handleClick = () => {
      if (!disabled) {
        onValueChange?.(value);
        setOpen(false);
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        handleClick();
      }
    };

    return (
      <div
        ref={ref}
        data-slot="select-item"
        data-value={value}
        data-state={isSelected ? "checked" : "unchecked"}
        data-disabled={disabled}
        role="option"
        aria-selected={isSelected}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "focus:bg-accent focus:text-accent-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 hover:bg-accent hover:text-accent-foreground",
          className
        )}
        {...props}
      >
        <span className="absolute right-2 flex size-3.5 items-center justify-center">
          {isSelected && <CheckIcon className="size-4" />}
        </span>
        <span className="flex items-center gap-2">
          {children}
        </span>
      </div>
    );
  }
);

SelectItem.displayName = "SelectItem";

// Select Separator Component
interface SelectSeparatorProps extends React.ComponentProps<"div"> {}

const SelectSeparator = React.forwardRef<HTMLDivElement, SelectSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="select-separator"
        role="separator"
        className={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
        {...props}
      />
    );
  }
);

SelectSeparator.displayName = "SelectSeparator";

// Select Scroll Buttons (for large lists)
interface SelectScrollButtonProps extends React.ComponentProps<"div"> {}

const SelectScrollUpButton = React.forwardRef<HTMLDivElement, SelectScrollButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="select-scroll-up-button"
        className={cn(
          "flex cursor-default items-center justify-center py-1",
          className
        )}
        {...props}
      >
        <ChevronUpIcon className="size-4" />
      </div>
    );
  }
);

SelectScrollUpButton.displayName = "SelectScrollUpButton";

const SelectScrollDownButton = React.forwardRef<HTMLDivElement, SelectScrollButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="select-scroll-down-button"
        className={cn(
          "flex cursor-default items-center justify-center py-1",
          className
        )}
        {...props}
      >
        <ChevronDownIcon className="size-4" />
      </div>
    );
  }
);

SelectScrollDownButton.displayName = "SelectScrollDownButton";

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  type SelectProps,
  type SelectTriggerProps,
  type SelectContentProps,
  type SelectItemProps,
};