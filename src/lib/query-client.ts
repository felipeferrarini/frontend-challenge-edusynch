import { MutationCache, QueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    },
    mutationCache: new MutationCache({
      onError(error) {
        if (error instanceof AxiosError) {
          toast.error(error.response?.data || error.message);
        }
      }
    })
  });
