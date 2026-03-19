export interface ToastNotificationProps {
  title: string;
  description: string;
  type?: "success" | "error" | "info";
}


export interface SubmitButtonProps {
  type?: any;
  isLoading?: boolean;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
  loadingText?: string;
  children: React.ReactNode;
  // clickFn?: () => void;
  clickFn?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
