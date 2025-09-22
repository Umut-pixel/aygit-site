"use client";

import * as React from "react";
import { SearchIcon } from "lucide-react";
import { cn } from "./utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./dialog";

interface CommandContextValue {
  search: string;
  setSearch: (search: string) => void;
  filteredItems: number;
  setFilteredItems: (count: number) => void;
}

const CommandContext = React.createContext<CommandContextValue | null>(null);

function useCommand() {
  const context = React.useContext(CommandContext);
  if (!context) {
    throw new Error("useCommand must be used within a Command component");
  }
  return context;
}

function Command({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  const [search, setSearch] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState(0);

  return (
    <CommandContext.Provider
      value={{ search, setSearch, filteredItems, setFilteredItems }}
    >
      <div
        data-slot="command"
        className={cn(
          "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </CommandContext.Provider>
  );
}

function CommandDialog({
  title = "Command Palette",
  description = "Search for a command to run...",
  children,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string;
  description?: string;
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent className="overflow-hidden p-0">
        <Command className="[&_[data-slot=command-input-wrapper]]:h-12">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

function CommandInput({
  className,
  value,
  onValueChange,
  ...props
}: React.ComponentProps<"input"> & {
  value?: string;
  onValueChange?: (value: string) => void;
}) {
  const { search, setSearch } = useCommand();
  const inputValue = value !== undefined ? value : search;
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (onValueChange) {
      onValueChange(newValue);
    } else {
      setSearch(newValue);
    }
  };

  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <input
        data-slot="command-input"
        value={inputValue}
        onChange={handleChange}
        className={cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50 border-none focus:ring-0",
          className
        )}
        {...props}
      />
    </div>
  );
}

function CommandList({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="command-list"
      className={cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CommandEmpty({
  className,
  children = "No results found.",
  ...props
}: React.ComponentProps<"div">) {
  const { filteredItems } = useCommand();
  
  if (filteredItems > 0) return null;
  
  return (
    <div
      data-slot="command-empty"
      className={cn("py-6 text-center text-sm", className)}
      {...props}
    >
      {children}
    </div>
  );
}

function CommandGroup({
  className,
  heading,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  heading?: React.ReactNode;
}) {
  return (
    <div
      data-slot="command-group"
      className={cn(
        "text-foreground overflow-hidden p-1",
        className
      )}
      {...props}
    >
      {heading && (
        <div className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
          {heading}
        </div>
      )}
      {children}
    </div>
  );
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="command-separator"
      className={cn("bg-border -mx-1 h-px", className)}
      {...props}
    />
  );
}

function CommandItem({
  className,
  children,
  onSelect,
  disabled,
  ...props
}: React.ComponentProps<"div"> & {
  onSelect?: () => void;
  disabled?: boolean;
}) {
  const { search } = useCommand();
  const [selected, setSelected] = React.useState(false);
  
  const handleClick = () => {
    if (!disabled && onSelect) {
      onSelect();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !disabled && onSelect) {
      onSelect();
    }
  };

  return (
    <div
      data-slot="command-item"
      data-selected={selected}
      data-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )}
      {...props}
    />
  );
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};