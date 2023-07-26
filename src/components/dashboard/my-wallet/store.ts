'use client';

import { ICoinInfo } from '@/interfaces/coin-info';
import { atom, useAtom } from 'jotai';
import { useCallback } from 'react';

const transferModalAtom = atom(false);
const transferDataAtom = atom<ICoinInfo | null>(null);

export const useTransferModal = () => {
  const [isOpen, onChange] = useAtom(transferModalAtom);
  const [coinInfo, setTransferData] = useAtom(transferDataAtom);

  const onOpen = useCallback(
    (data: ICoinInfo) => {
      setTransferData(data);
      onChange(true);
    },
    [onChange, setTransferData]
  );

  return { isOpen, onChange, onOpen, coinInfo };
};
