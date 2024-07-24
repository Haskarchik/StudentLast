'use client'
import { createContext } from 'react';

interface ITagsContext {
  tags: Array<string>;
  setTags: (tags: Array<string>) => void;
}

export const TagsContext = createContext<ITagsContext>({
  tags: [],
  setTags: (tags: Array<string>) => {}
});
