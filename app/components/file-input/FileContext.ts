'use client'
import { createContext } from 'react';

interface IFileContext {
  files: File[];
  setFiles: (files: File[]) => void;
}

export const FileContext = createContext<IFileContext>({
  files: [],
  setFiles: (files: File[]) => {}
});
