"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", fullWidth, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group",
          {
            // Variants
            "bg-[#0B0B0D] text-[#F7F2EE] hover:bg-[#2A2A2A] focus-visible:ring-[#0B0B0D]":
              variant === "primary",
            "bg-[#F7F2EE] text-[#0B0B0D] border border-[#E8D9D2] hover:bg-[#E8D9D2] focus-visible:ring-[#E8D9D2]":
              variant === "secondary",
            "bg-transparent text-[#0B0B0D] border border-[#0B0B0D] hover:bg-[#0B0B0D] hover:text-[#F7F2EE] focus-visible:ring-[#0B0B0D]":
              variant === "outline",
            "bg-transparent text-[#2A2A2A] hover:text-[#B76E79] focus-visible:ring-[#B76E79]":
              variant === "ghost",
            "bg-[#C9A27E] text-[#0B0B0D] hover:bg-[#E2C89A] focus-visible:ring-[#C9A27E]":
              variant === "gold",
            // Sizes
            "text-xs tracking-[0.15em] uppercase px-4 py-2": size === "sm",
            "text-xs tracking-[0.15em] uppercase px-6 py-3": size === "md",
            "text-xs tracking-[0.15em] uppercase px-8 py-4": size === "lg",
            "text-sm tracking-[0.15em] uppercase px-10 py-5": size === "xl",
            "w-full": fullWidth,
          },
          className
        )}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
