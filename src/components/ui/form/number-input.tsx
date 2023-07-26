import cx from 'classnames';
import { ComponentProps, forwardRef, useCallback, useState } from 'react';
import { ChevronUpIcon } from '../icons';

type Props = Omit<ComponentProps<'input'>, 'onChange'> & {
  onChange?: (value: number) => void;
};

export const NumberInput = forwardRef<HTMLInputElement, Props>(
  ({ name, onChange, min, ...rest }, ref): JSX.Element => {
    const [value, setValue] = useState<number>();

    const handleIncrement = useCallback(() => {
      setValue(prev => {
        const value = (prev || 0) + 1;
        onChange?.(value);
        return value;
      });
    }, [onChange]);

    const handleDecrement = useCallback(() => {
      setValue(prev => {
        const prevValue = prev || 0;
        if (min !== undefined && prevValue <= Number(min)) return prev;
        const value = prevValue - 1;
        onChange?.(value);
        return value;
      });
    }, [min, onChange]);

    return (
      <div
        className={cx(
          'input body input-large inline-flex w-full items-center justify-between',
          rest.className
        )}
      >
        <input
          {...rest}
          className="outline-none"
          ref={ref}
          name={name}
          id={name}
          value={value}
          type="number"
          min={min}
          onChange={e => {
            const value = Number(e.target.value);
            setValue(value);
            onChange?.(value);
          }}
        />
        <div className="flex flex-col">
          <button className="group" type="button" onClick={handleIncrement}>
            <ChevronUpIcon className="box-size-[12px] group-hover:fill-primary-500" />
          </button>
          <button className="group" type="button" onClick={handleDecrement}>
            <ChevronUpIcon className="box-size-[12px] group-hover:fill-primary-500 rotate-180 transform" />
          </button>
        </div>
      </div>
    );
  }
);
