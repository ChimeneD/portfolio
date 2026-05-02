"use client";

import {
  Tooltip as TooltipRoot,
  TooltipContent,
  TooltipTrigger,
} from "@/types/components/ui/tooltip";

type TooltipProps = {
  children: React.ReactElement;
  title: React.ReactNode;
};

export function Tooltip({ children, title }: TooltipProps) {
  return (
    <TooltipRoot>
      <TooltipTrigger render={children} />
      <TooltipContent>{title}</TooltipContent>
    </TooltipRoot>
  );
}
