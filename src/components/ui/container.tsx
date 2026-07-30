import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

/**
 * Единый макетный контейнер проекта.
 * Всегда: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
 */
export function Container({ as: Tag = "div", className, ...props }: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)} {...props} />
  );
}
