'use client';

import { useCallback, useState } from 'react';

export const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onToggle = useCallback(() => setIsOpen(isOpen => !isOpen), []);
  const onChange = useCallback((isOpen: boolean) => setIsOpen(isOpen), []);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    onChange
  };
};
