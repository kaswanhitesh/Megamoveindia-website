"use client";

import { createContext, useContext, useState } from "react";

const HeaderFooterContext = createContext({
  headerOpacity: 1,
  setHeaderOpacity: (opacity: number) => {},
});

export function HeaderFooterProvider({ children }: { children: React.ReactNode }) {
  const [headerOpacity, setHeaderOpacity] = useState(1);
  return (
    <HeaderFooterContext.Provider value={{ headerOpacity, setHeaderOpacity }}>
      {children}
    </HeaderFooterContext.Provider>
  );
}

export function useHeaderFooter() {
  return useContext(HeaderFooterContext);
}
