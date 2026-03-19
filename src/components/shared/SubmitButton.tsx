import type { SubmitButtonProps } from "@/types";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

const SubmitButton = ({
  type = "submit",
  isLoading,
  loading,
  loadingText,
  className,
  clickFn,
  children,
  disabled,
}: SubmitButtonProps) => {
  return (
    <Button
      type={type}
      disabled={isLoading || loading || disabled}
      className={className ?? " text-white cursor-pointer"}
      onClick={clickFn}
    >
      {isLoading || loading ? (
        <div className="flex items-center gap-4">
          <Loader className="inline-block ml-2 animate-spin" />
          {loadingText}
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default SubmitButton;
