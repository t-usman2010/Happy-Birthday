import { createContext, ReactNode, useContext, useState } from "react";

type LoaderContextType = {
  isLoaderOpen: boolean;
  openLoader: () => void;
  closeLoader: () => void;
};

const LoaderContext = createContext<LoaderContextType | null>(null);

export function LoaderProvider({ children }: { children: ReactNode }) {
  // Show interactive loader initially so all pictures are guaranteed preloaded
  const [isLoaderOpen, setIsLoaderOpen] = useState(true);

  return (
    <LoaderContext.Provider
      value={{
        isLoaderOpen,
        openLoader: () => setIsLoaderOpen(true),
        closeLoader: () => setIsLoaderOpen(false),
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoader() {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error("useLoader must be used inside LoaderProvider");
  }
  return context;
}
