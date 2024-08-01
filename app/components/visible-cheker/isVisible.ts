// components/isVisible.ts

"use client";

import { useEffect, useState } from "react";

export function getVisible(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  const { top, left, bottom, right } = rect;

  return (
    top >= 0 &&
    left >= 0 &&
    bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export function chekVisible(searchClass: string) {
  const [visibilityState, setVisibilityState] = useState<boolean>(false);

  const checkVisibility = () => {
    const elements = document.querySelectorAll(searchClass);
    let newVisibilityState = false;

    elements.forEach((element) => {
    
      newVisibilityState = getVisible(element as HTMLElement);

    });

    setVisibilityState(newVisibilityState);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check visibility on initial render

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return visibilityState;
} /*".info-block-item "*/
