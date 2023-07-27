'use client';

import { Spinner } from '@/components/ui/common';
import { signOut } from '@/services/authentication-service';
import { useGetUser } from '@/services/user-service/user-service';
import * as Avatar from '@radix-ui/react-avatar';
import { ChevronDownIcon, ExitIcon } from '@radix-ui/react-icons';
import * as Popover from '@radix-ui/react-popover';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

export const ProfileMenu = (): JSX.Element => {
  const { data, isLoading } = useGetUser();
  const router = useRouter();

  const { mutate } = useMutation(signOut, {
    onSuccess: () => router.push('/')
  });

  return (
    <Popover.Root>
      <Popover.Trigger asChild className="group" aria-controls="">
        <button
          aria-label="My Profile"
          className="label inline-flex items-center gap-2"
        >
          {!isLoading && data && (
            <>
              <Avatar.Root className="bg-primary-500 inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full align-middle">
                <Avatar.Image
                  className="h-full w-full rounded-[inherit] object-cover"
                  src={data.avatar}
                  alt={data.name}
                />
              </Avatar.Root>
              <span className="tablet:inline hidden">{data.name}</span>
              <ChevronDownIcon
                className="box-size-[16px] text-gray-400 transition-transform duration-150 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                aria-hidden
              />
            </>
          )}
          {isLoading && <Spinner />}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="data-[state=open]:data-[side=bottom]:animate-slideUpAndFade w-[124px] rounded-md bg-white p-4 drop-shadow-[0_0_10px_rgba(0,0,0,0.05)] will-change-[transform,opacity]"
          sideOffset={5}
        >
          <button
            className="label inline-flex items-center gap-4 text-gray-500"
            onClick={() => mutate()}
          >
            <ExitIcon width={16} height={16} /> Logout
          </button>
          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
