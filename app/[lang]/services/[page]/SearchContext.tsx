"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface SearchContextProps {
  isSearching: boolean;
  startSearch: () => void;
  endSearch: () => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const startSearch = () => setIsSearching(true);
  const endSearch = () => setIsSearching(false);

  return (
    <SearchContext.Provider value={{ isSearching, startSearch, endSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
