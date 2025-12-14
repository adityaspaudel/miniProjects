"use client";

import { useState } from "react";

export function useToggle(initialValue = false) {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggle = () => setIsOpen((prev) => !prev);

  return { isOpen, toggle };
}
