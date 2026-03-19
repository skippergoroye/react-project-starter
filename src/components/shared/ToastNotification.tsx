import type { ToastNotificationProps } from "@/types";
import { toast } from "sonner";

const ToastNotification = ({
  title,
  description,
  type = "success",
}: ToastNotificationProps) => {
  const toastType = type === "success" ? toast.success : toast.error;

  toastType(title, {
    description: <span className="text-xs  font-light">{description}</span>,
    // action: {
    //   label: "X",
    //   onClick: () => {},
    // },
    // duration: 5000,
  });

  return null;
};

export default ToastNotification;
