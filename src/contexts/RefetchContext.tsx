"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type RefetchContextType = {
  refetchFlag: boolean;
  triggerRefetch: () => void;
  clearRefetch: () => void;
};

const RefetchContext = createContext<RefetchContextType | undefined>(undefined);

export const RefetchProvider = ({ children }: { children: ReactNode }) => {
  const [refetchFlag, setRefetchFlag] = useState(false);

  const triggerRefetch = () => setRefetchFlag(true);
  const clearRefetch = () => setRefetchFlag(false);

  return (
    <RefetchContext.Provider value={{ refetchFlag, triggerRefetch, clearRefetch }}>
      {children}
    </RefetchContext.Provider>
  );
};


export const useRefetch = () => {
  const context = useContext(RefetchContext);
  if (!context) {
    throw new Error("useRefetch must be used within a RefetchProvider");
  }
  return context;
};
