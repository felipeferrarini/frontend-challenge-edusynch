import cx from 'classnames';
import { ComponentProps, forwardRef } from 'react';

export type InputFieldProps = ComponentProps<'input'> & {
  icon?: JSX.Element;
  inputClassName?: string;
};

export const TextInput = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref): JSX.Element => {
    const { icon, className, inputClassName, ...rest } = props;

    return (
      <div className={cx('relative', className)}>
        <input
          id={props.name}
          {...rest}
          className={cx(
            inputClassName,
            'input tablet:input-large input-medium w-full',
            { 'pl-12': icon }
          )}
          ref={ref}
        />
        <div className="text-secondary-300 absolute bottom-0 left-0 top-0 flex items-center pl-4">
          {icon}
        </div>
      </div>
    );
  }
);
