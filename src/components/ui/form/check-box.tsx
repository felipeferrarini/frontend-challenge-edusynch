import * as RxCheckbox from '@radix-ui/react-checkbox';
import { CheckboxProps } from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import cx from 'classnames';
import { ComponentProps, ReactNode, forwardRef } from 'react';

type Props = ComponentProps<'button'> &
  CheckboxProps & {
    label: ReactNode;
    id: string;
  };

export const Checkbox = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { id, label, className } = props;

  return (
    <div className="flex items-center">
      <RxCheckbox.Root
        className={cx(
          'border-primary-500 hover:bg-secondary-100 flex h-4 min-w-[16px] appearance-none items-center justify-center rounded-[4px] border-[1px] bg-white transition-colors',
          className
        )}
        {...props}
        ref={ref}
        id={id}
      >
        <RxCheckbox.Indicator className="text-primary-500 h-4 w-4">
          <CheckIcon />
        </RxCheckbox.Indicator>
      </RxCheckbox.Root>
      <label className="select-none pl-4 hover:cursor-pointer" htmlFor={id}>
        {label}
      </label>
    </div>
  );
});
