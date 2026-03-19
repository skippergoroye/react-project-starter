import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export interface CustomModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  size?:
    | "small"
    | "smallLg"
    | "normal"
    | "medium"
    | "mediumLg"
    | "large"
    | "verylarge";
}

const sizeClasses = {
  small: "max-w-md",
  smallLg: "max-w-lg",
  normal: "max-w-[550px]",
  medium: "max-w-2xl",
  mediumLg: "max-w-3xl",
  large: "max-w-6xl",
  verylarge: "max-w-8xl",
};

const CustomModal = ({
  isOpen,
  onClose,
  title,
  description,
  footer,
  children,
  className,
  size = "smallLg",
}: CustomModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose} modal={true}>
      <DialogContent className={cn(sizeClasses[size], className)}>
        <DialogHeader>
          {title ? (
            <DialogTitle>{title}</DialogTitle>
          ) : (
            <DialogTitle className="sr-only">Modal</DialogTitle>
          )}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        {children}

        {footer && (
          <DialogFooter className="sm:justify-start">{footer}</DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CustomModal;
