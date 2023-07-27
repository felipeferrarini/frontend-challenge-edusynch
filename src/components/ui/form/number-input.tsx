import cx from 'classnames';
import { ComponentProps, forwardRef, useCallback, useState } from 'react';
import { ChevronUpIcon } from '../icons';

type Props = Omit<ComponentProps<'input'>, 'onChange'> & {
  onChange?: (value: number) => void;
};

export const NumberInput = forwardRef<HTMLInputElement, Props>(
  ({ name, onChange, min = 0, max = Infinity, ...rest }, ref): JSX.Element => {
    const [value, setValue] = useState<number>(0);
    const minNumber = Number(min);
    const maxNumber = Number(max);

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(event.target.value);
        if (!isNaN(value) && value >= minNumber && value <= maxNumber) {
          setValue(value);
          onChange?.(value);
        }
      },
      [maxNumber, minNumber, onChange]
    );

    const handleIncrement = useCallback(() => {
      setValue(prev => (prev + 1 <= maxNumber ? prev + 1 : prev));
      onChange?.(value + 1);
    }, [maxNumber, onChange, value]);

    const handleDecrement = useCallback(() => {
      setValue(prev => (prev - 1 >= minNumber ? prev - 1 : prev));
      onChange?.(value - 1);
    }, [minNumber, onChange, value]);

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
          max={max}
          onChange={handleChange}
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
