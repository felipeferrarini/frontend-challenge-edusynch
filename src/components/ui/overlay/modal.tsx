import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  isOpen: boolean;
  onChange: (_isOpen: boolean) => void;
  title: ReactNode;
  trigger?: ReactNode;
};

export const Modal = ({
  isOpen,
  onChange,
  title,
  children,
  trigger
}: PropsWithChildren<Props>): JSX.Element => (
  <Dialog.Root open={isOpen} onOpenChange={onChange}>
    {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
    <Dialog.Portal>
      <Dialog.Overlay className="bg-text-base data-[state=open]:animate-overlayShow fixed inset-0 z-40 opacity-90" />
      <Dialog.Content className="data-[state=open]:animate-contentShow tablet:p-6 desktop:p-8 tablet:max-w-[320px] desktop:max-w-[448px] fixed left-[50%] top-[50%] z-50 w-full max-w-[272px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-4 shadow-[0px_12px_24px_0px_rgba(0,0,0,0.10)]">
        <Dialog.Title className="mb-6 text-center">{title}</Dialog.Title>

        {children}

        <Dialog.Close asChild>
          <button
            className="text-secondary-500 hover:text-secondary-600 absolute right-4 top-4"
            aria-label="Close"
          >
            <Cross2Icon width={16} height={16} />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
