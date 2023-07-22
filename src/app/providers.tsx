'use client';

import { createQueryClient } from '@/lib/query-client';
import { QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren, useState } from 'react';

export const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(createQueryClient);

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
