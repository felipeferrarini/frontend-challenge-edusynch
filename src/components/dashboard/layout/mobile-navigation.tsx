'use client';

import { MenuIcon } from '@/components/ui/icons';
import { useDisclosure } from '@/hooks/use-disclosure';
import * as Dialog from '@radix-ui/react-dialog';
import { sidebarItems } from './constants';

export const MobileNavigation = (): JSX.Element => {
  const { isOpen, onChange, onClose } = useDisclosure();

  return (
    <Dialog.Root open={isOpen} onOpenChange={onChange}>
      <Dialog.Trigger aria-controls="">
        <MenuIcon />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="drawer-overlay" />
        <Dialog.Content className="drawer-content drawer-left tablet:max-w-[240px] max-w-[224px]">
          <div className="mt-10 flex flex-col items-start gap-8 px-4">
            {sidebarItems.map(({ icon, label }) => (
              <button
                key={`mobile-navigation-item-${label}`}
                className="btn btn-primary btn-ghost btn-small h-auto w-full justify-start gap-4 rounded-md"
                onClick={onClose}
              >
                {icon}
                <span>{label}</span>
              </button>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
