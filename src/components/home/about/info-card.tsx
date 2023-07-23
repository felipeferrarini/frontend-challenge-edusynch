import cx from 'classnames';

export type InfoCardProps = PropsWithClassName<{
  label: string;
  title: string;
  description: string;
  icon: JSX.Element;
}>;

export const InfoCard = ({
  description,
  icon,
  label,
  title,
  className
}: InfoCardProps): JSX.Element => {
  return (
    <div
      className={cx(
        'col tablet:max-w-[280px] flex max-w-[200px] flex-col items-start rounded-md p-6 shadow-[0px_12px_24px_0px_rgba(0,0,0,0.05)]',
        className
      )}
    >
      <div className="mb-4">{icon}</div>
      <p className="tablet:body label text-primary-500 mb-1 font-bold">
        {label}
      </p>

      <h4 className="tablet:heading-4 heading-5 mb-2 font-bold">{title}</h4>

      <p className="paragraphy">{description}</p>
    </div>
  );
};
