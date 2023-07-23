import cx from 'classnames';

type Props = PropsWithClassName<{
  value: number;
}>;

export const ChangePercentage = ({ value, className }: Props): JSX.Element => {
  const isPositive = value > 0;
  const percentageLeading = isPositive ? '+' : '';

  return (
    <span
      className={cx(
        isPositive ? 'text-success-500' : 'text-error-500',
        className
      )}
    >
      {percentageLeading}
      {value.toFixed(2)}%
    </span>
  );
};
