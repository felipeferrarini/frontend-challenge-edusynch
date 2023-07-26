'use client';

import { useGetUser } from '@/services/user-service/user-service';
import * as Avatar from '@radix-ui/react-avatar';
import { ChevronDownIcon, ExitIcon } from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';
import Link from 'next/link';

export const ProfileMenu = (): JSX.Element => {
  const { data } = useGetUser();
  const userName = data?.name ?? 'John Doe';

  return (
    <Popover.Root>
      <Popover.Trigger asChild className="group">
        <button
          aria-label="My Profile"
          className="label inline-flex items-center gap-2"
        >
          <Avatar.Root className="bg-primary-500 inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full align-middle">
            <Avatar.Image
              className="h-full w-full rounded-[inherit] object-cover"
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              alt={userName}
            />
          </Avatar.Root>
          <span className="tablet:inline hidden">{userName}</span>
          <ChevronDownIcon
            className="box-size-[16px] text-gray-400 transition-transform duration-150 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
            aria-hidden
          />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="data-[state=open]:data-[side=bottom]:animate-slideUpAndFade w-[124px] rounded-md bg-white p-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.05)] will-change-[transform,opacity]"
          sideOffset={5}
        >
          <Link href="/">
            <button className="label inline-flex items-center gap-4 text-gray-500">
              <ExitIcon width={16} height={16} /> Logout
            </button>
          </Link>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
