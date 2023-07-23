'use client';

import { MenuIcon } from '@/components/ui/icons';
import { homeLinks } from '@/config/constants';
import { useDisclosure } from '@/hooks/use-disclosure';
import * as Dialog from '@radix-ui/react-dialog';
import { useRouter } from 'next/navigation';

export const MobileNavigation = (): JSX.Element => {
  const { isOpen, onChange, onClose } = useDisclosure();
  const router = useRouter();

  return (
    <Dialog.Root open={isOpen} onOpenChange={onChange}>
      <Dialog.Trigger aria-controls="">
        <MenuIcon />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="drawer-overlay" />
        <Dialog.Content className="drawer-content drawer-right">
          <div className="mt-10 flex flex-col items-center gap-8">
            {homeLinks.map(({ href, name }) => (
              <button
                key={`home-link-item-${href}`}
                className="link"
                onClick={() => {
                  router.push(href);
                  onClose();
                }}
              >
                {name}
              </button>
            ))}

            <button className="link">Sign in</button>
            <button className="btn btn-small btn-primary">Sign up</button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
