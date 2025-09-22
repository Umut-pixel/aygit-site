"use client";

import * as React from "react";
import { MinusIcon } from "lucide-react";
import { cn } from "./utils";

// OTP Input Context
interface OTPInputContextValue {
  value: string;
  setValue: (value: string) => void;
  maxLength: number;
  slots: Array<{
    char: string | null;
    hasFakeCaret: boolean;
    isActive: boolean;
  }>;
  activeSlot: number;
  setActiveSlot: (index: number) => void;
}

const OTPInputContext = React.createContext<OTPInputContextValue | null>(null);

function useOTPInput() {
  const context = React.useContext(OTPInputContext);
  if (!context) {
    throw new Error("useOTPInput must be used within an InputOTP component");
  }
  return context;
}

function InputOTP({
  className,
  containerClassName,
  maxLength = 6,
  value: controlledValue,
  onChange,
  onComplete,
  disabled,
  autoFocus,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  containerClassName?: string;
  maxLength?: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  autoFocus?: boolean;
}) {
  const [internalValue, setInternalValue] = React.useState("");
  const [activeSlot, setActiveSlot] = React.useState(0);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  
  const setValue = React.useCallback((newValue: string) => {
    const sanitizedValue = newValue.slice(0, maxLength).replace(/[^0-9]/g, "");
    
    if (isControlled) {
      onChange?.(sanitizedValue);
    } else {
      setInternalValue(sanitizedValue);
    }
    
    if (sanitizedValue.length === maxLength) {
      onComplete?.(sanitizedValue);
    }
  }, [isControlled, onChange, onComplete, maxLength]);

  const slots = React.useMemo(() => {
    return Array.from({ length: maxLength }, (_, index) => ({
      char: value[index] || null,
      hasFakeCaret: index === activeSlot && index === value.length,
      isActive: index === activeSlot,
    }));
  }, [value, activeSlot, maxLength]);

  const handleKeyDown = React.useCallback((e: KeyboardEvent) => {
    if (disabled) return;

    const { key } = e;
    
    if (key >= "0" && key <= "9") {
      e.preventDefault();
      const newValue = value.slice(0, activeSlot) + key + value.slice(activeSlot + 1);
      setValue(newValue);
      if (activeSlot < maxLength - 1) {
        setActiveSlot(activeSlot + 1);
      }
    } else if (key === "Backspace") {
      e.preventDefault();
      if (value[activeSlot]) {
        const newValue = value.slice(0, activeSlot) + value.slice(activeSlot + 1);
        setValue(newValue);
      } else if (activeSlot > 0) {
        setActiveSlot(activeSlot - 1);
        const newValue = value.slice(0, activeSlot - 1) + value.slice(activeSlot);
        setValue(newValue);
      }
    } else if (key === "Delete") {
      e.preventDefault();
      const newValue = value.slice(0, activeSlot) + value.slice(activeSlot + 1);
      setValue(newValue);
    } else if (key === "ArrowLeft") {
      e.preventDefault();
      if (activeSlot > 0) {
        setActiveSlot(activeSlot - 1);
      }
    } else if (key === "ArrowRight") {
      e.preventDefault();
      if (activeSlot < maxLength - 1) {
        setActiveSlot(activeSlot + 1);
      }
    } else if (key === "Home") {
      e.preventDefault();
      setActiveSlot(0);
    } else if (key === "End") {
      e.preventDefault();
      setActiveSlot(Math.max(0, value.length - 1));
    }
  }, [value, activeSlot, maxLength, disabled, setValue]);

  const handlePaste = React.useCallback((e: ClipboardEvent) => {
    if (disabled) return;
    
    e.preventDefault();
    const pastedData = e.clipboardData?.getData("text/plain") || "";
    const sanitizedData = pastedData.replace(/[^0-9]/g, "").slice(0, maxLength);
    setValue(sanitizedData);
    setActiveSlot(Math.min(sanitizedData.length, maxLength - 1));
  }, [disabled, maxLength, setValue]);

  React.useEffect(() => {
    if (autoFocus) {
      setActiveSlot(0);
    }
  }, [autoFocus]);

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("paste", handlePaste);
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("paste", handlePaste);
    };
  }, [handleKeyDown, handlePaste]);

  return (
    <OTPInputContext.Provider 
      value={{ 
        value, 
        setValue, 
        maxLength, 
        slots, 
        activeSlot, 
        setActiveSlot 
      }}
    >
      <div
        data-slot="input-otp"
        className={cn(
          "flex items-center gap-2 has-disabled:opacity-50",
          containerClassName
        )}
        tabIndex={0}
        role="textbox"
        aria-label="One-time password input"
        aria-describedby="otp-description"
        {...props}
      >
        {children}
      </div>
    </OTPInputContext.Provider>
  );
}

function InputOTPGroup({ 
  className, 
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center gap-1", className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  onClick,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
}) {
  const { slots, setActiveSlot } = useOTPInput();
  const slot = slots[index];
  
  if (!slot) return null;

  const { char, hasFakeCaret, isActive } = slot;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(e);
    setActiveSlot(index);
  };

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      onClick={handleClick}
      className={cn(
        "data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm bg-input-background transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px] cursor-pointer select-none",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div 
            className="bg-foreground h-4 w-px" 
            style={{
              animation: "blink 1s step-end infinite"
            }}
          />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ 
  className,
  ...props 
}: React.ComponentProps<"div">) {
  return (
    <div 
      data-slot="input-otp-separator" 
      role="separator"
      className={cn("flex items-center justify-center", className)}
      {...props}
    >
      <MinusIcon className="h-4 w-4 text-muted-foreground" />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator };