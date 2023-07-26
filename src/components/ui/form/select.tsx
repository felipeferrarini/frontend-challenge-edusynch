import { ReactElement, ReactNode, Ref, forwardRef } from 'react';
import _Select, {
  GroupBase,
  SelectInstance,
  Props as SelectProps
} from 'react-select';
import { ChevronRightIcon, ChevronUpIcon } from '../icons';

type Option = {
  value: string;
  label: ReactNode;
};

export type SelectElement<T> = SelectInstance<T, false, GroupBase<T>>;

type Props<T> = SelectProps<T, false> & {
  options: Option[];
  className?: string;
  optionWithArrow?: boolean;
};

export const SelectComponent = <T extends Option>(
  { options, optionWithArrow, ...rest }: Props<T>,
  ref?: Ref<SelectElement<T>>
): JSX.Element => {
  return (
    <_Select
      options={options}
      ref={ref}
      {...rest}
      components={{
        IndicatorSeparator: () => null,
        DropdownIndicator: ({ innerProps, selectProps }) => (
          <div
            {...innerProps}
            className="group"
            data-open={selectProps.menuIsOpen}
          >
            <ChevronUpIcon className="group-data-[open=true]:fill-primary-500 -rotate-180 transition-all duration-100 group-data-[open=true]:rotate-0" />
          </div>
        ),
        Option: ({ children, innerProps }) => (
          <div
            tabIndex={-1}
            className="hover:bg-primary-100 active:bg-primary-200 border-secondary-200 group flex cursor-pointer select-none items-center border-b p-4 transition-all last:border-b-0"
            {...innerProps}
          >
            {children}
            {optionWithArrow && (
              <ChevronRightIcon className="group-hover:fill-primary-500 ml-auto transition-colors" />
            )}
          </div>
        ),
        ValueContainer: ({ children, innerProps }) => (
          <div className="inline-flex items-center" {...innerProps}>
            {children}
          </div>
        ),
        SingleValue: ({ children, innerProps }) => (
          <div className="inline-flex items-center" {...innerProps}>
            {children}
          </div>
        ),
        Control: ({ children, innerProps }) => (
          <div
            className="input input-large inline-flex w-full cursor-pointer justify-between"
            {...innerProps}
          >
            {children}
          </div>
        )
      }}
    />
  );
};

export const Select = forwardRef(SelectComponent) as <T extends Option>(
  props: Props<T> & { ref?: Ref<SelectElement<T>> }
) => ReactElement;
