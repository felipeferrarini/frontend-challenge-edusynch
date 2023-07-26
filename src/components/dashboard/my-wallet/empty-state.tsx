import { EmptyWalletIcon } from '@/components/ui/icons';

export const EmptyState = (): JSX.Element => {
  return (
    <div className="my-auto flex flex-col items-center">
      <EmptyWalletIcon className="mb-6" />

      <h5 className="heading-5 mb-2 font-bold">Nothing here yet...</h5>

      <p className="label">Add a crypto and start earning</p>
    </div>
  );
};
