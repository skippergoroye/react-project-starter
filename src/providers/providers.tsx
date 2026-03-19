import React from "react";
import { Toaster } from "sonner";
import ReduxProvider from "@/redux/ReduxProvider";
import { RefetchProvider } from "@/contexts/RefetchContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReduxProvider>
      <RefetchProvider>
       {children}
       <Toaster position="top-right" richColors />
      </RefetchProvider>
    </ReduxProvider>
  );
};

export default Providers;