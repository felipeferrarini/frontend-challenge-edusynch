import cx from 'classnames';

export const ChevronRightIcon = ({
  className
}: PropsWithClassName): JSX.Element => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx('fill-secondary-300', className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.77958 11.7225C2.40681 11.3526 2.40681 10.7527 2.77958 10.3827L7.19552 6L2.77958 1.61726C2.40681 1.24729 2.40681 0.647449 2.77958 0.277479C3.15235 -0.0924921 3.75674 -0.0924922 4.12951 0.277479L9.22042 5.33011C9.59319 5.70008 9.59319 6.29992 9.22042 6.66989L4.12951 11.7225C3.75674 12.0925 3.15235 12.0925 2.77958 11.7225Z"
      />
    </svg>
  );
};
