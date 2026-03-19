// components/ui/CustomSheet.tsx
import * as React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

interface CustomSheetProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function CustomSheet({
  isOpen,
  onOpenChange,
  children,
  className = "focus:outline-none",
}: CustomSheetProps) {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className={className}>
        {children}
      </SheetContent>
    </Sheet>
  );
}

export default CustomSheet;