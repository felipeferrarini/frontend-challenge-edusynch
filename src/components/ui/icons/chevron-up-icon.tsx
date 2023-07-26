import cx from 'classnames';

export const ChevronUpIcon = ({
  className
}: PropsWithClassName): JSX.Element => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx('fill-secondary-300', className)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.63 12.294C15.1367 12.791 14.3369 12.791 13.8437 12.294L8 6.40605L2.15635 12.294C1.66305 12.791 0.863264 12.791 0.369972 12.294C-0.123322 11.7969 -0.123322 10.9911 0.369972 10.4941L7.10681 3.70619C7.60011 3.20916 8.39989 3.20916 8.89319 3.70619L15.63 10.4941C16.1233 10.9911 16.1233 11.7969 15.63 12.294Z"
      />
    </svg>
  );
};
