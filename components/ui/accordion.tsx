"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { cn } from "./utils";

interface AccordionContextValue {
  openItems: string[];
  toggleItem: (value: string) => void;
  type: "single" | "multiple";
  collapsible?: boolean;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an Accordion component");
  }
  return context;
}

function Accordion({
  type = "single",
  collapsible = false,
  value,
  defaultValue,
  onValueChange,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  type?: "single" | "multiple";
  collapsible?: boolean;
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}) {
  const [internalValue, setInternalValue] = React.useState<string[]>(() => {
    if (defaultValue) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [];
  });

  const isControlled = value !== undefined;
  const openItems = isControlled 
    ? (Array.isArray(value) ? value : [value])
    : internalValue;

  const toggleItem = React.useCallback((itemValue: string) => {
    const newValue = openItems.includes(itemValue)
      ? openItems.filter(item => item !== itemValue)
      : type === "multiple" 
        ? [...openItems, itemValue]
        : type === "single" && collapsible
          ? openItems.includes(itemValue) ? [] : [itemValue]
          : [itemValue];

    if (isControlled) {
      const callbackValue = type === "single" 
        ? (newValue[0] || "")
        : newValue;
      onValueChange?.(callbackValue);
    } else {
      setInternalValue(newValue);
    }
  }, [openItems, type, collapsible, isControlled, onValueChange]);

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type, collapsible }}>
      <div data-slot="accordion" className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

function AccordionItem({
  value,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  value: string;
}) {
  return (
    <div
      data-slot="accordion-item"
      data-value={value}
      className={cn("border-b last:border-b-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function AccordionTrigger({
  value,
  className,
  children,
  onClick,
  ...props
}: React.ComponentProps<"button"> & {
  value: string;
}) {
  const { openItems, toggleItem } = useAccordion();
  const isOpen = openItems.includes(value);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    toggleItem(value);
  };

  return (
    <div className="flex">
      <button
        data-slot="accordion-trigger"
        data-state={isOpen ? "open" : "closed"}
        onClick={handleClick}
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon 
          className={cn(
            "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>
    </div>
  );
}

function AccordionContent({
  value,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  value: string;
}) {
  const { openItems } = useAccordion();
  const isOpen = openItems.includes(value);

  if (!isOpen) return null;

  return (
    <div
      data-slot="accordion-content"
      data-state="open"
      className="overflow-hidden text-sm animate-accordion-down"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>
        {children}
      </div>
    </div>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };