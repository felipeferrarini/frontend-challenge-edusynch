'use client';

import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

export const signInModalAtom = atom(false);
export const signUpModalAtom = atom(false);

export const useSignInModal = () => {
  const [isOpen, onChange] = useAtom(signInModalAtom);
  const onOpen = useCallback(() => onChange(true), [onChange]);

  return { isOpen, onChange, onOpen };
};

export const useSignUpModal = () => {
  const [isOpen, onChange] = useAtom(signUpModalAtom);
  const onOpen = useCallback(() => onChange(true), [onChange]);

  return { isOpen, onChange, onOpen };
};
