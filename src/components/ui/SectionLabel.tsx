import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export function SectionLabel({ children, className, light }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-3",
        className
      )}
    >
      <div
        className={cn(
          "h-px w-8 flex-shrink-0",
          light ? "bg-[#C9A27E]" : "bg-[#C9A27E]"
        )}
      />
      <span
        className={cn(
          "label-luxury",
          light ? "text-[#C9A27E]" : "text-[#C9A27E]"
        )}
      >
        {children}
      </span>
      <div
        className={cn(
          "h-px w-8 flex-shrink-0",
          light ? "bg-[#C9A27E]" : "bg-[#C9A27E]"
        )}
      />
    </div>
  );
}
