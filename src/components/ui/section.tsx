import { cn } from "@/lib/utils";
import type { ElementType, HTMLAttributes } from "react";
import { Container } from "@/components/ui/container";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  /** Вертикальный воздух: md = py-24, lg = py-32 */
  spacing?: "md" | "lg";
  /** Обернуть содержимое в стандартный Container */
  contained?: boolean;
  containerClassName?: string;
}

const spacingMap = {
  md: "py-16 sm:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
} as const;

/**
 * Обёртка крупной секции страницы. Задаёт единый вертикальный ритм.
 */
export function Section({
  as: Tag = "section",
  spacing = "md",
  contained = true,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <Tag className={cn(spacingMap[spacing], className)} {...props}>
      {contained ? <Container className={containerClassName}>{children}</Container> : children}
    </Tag>
  );
}
