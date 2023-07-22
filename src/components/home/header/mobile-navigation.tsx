import { MenuIcon } from '@/components/ui/icons';
import { homeLinks } from '@/config/constants';
import { useDisclosure } from '@/hooks/use-disclosure';
import * as Dialog from '@radix-ui/react-dialog';

export const MobileNavigation = (): JSX.Element => {
  const { isOpen, onChange } = useDisclosure();

  return (
    <Dialog.Root open={isOpen} onOpenChange={onChange}>
      <Dialog.Trigger>
        <MenuIcon />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="drawer-overlay" />
        <Dialog.Content className="drawer-content drawer-right">
          <div className="mt-10 flex flex-col items-center gap-8">
            {homeLinks.map(({ href, name }) => (
              <a key={`home-link-item-${href}`} className="link" href={href}>
                {name}
              </a>
            ))}

            <button className="btn-link">Sign in</button>
            <button className="btn-primary">Sign up</button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
