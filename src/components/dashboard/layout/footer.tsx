export const DashboardFooter = (): JSX.Element => {
  return (
    <footer className="tablet:h-16 flex h-14 items-center justify-center px-3 shadow-[0_-4px_8px_0_rgba(77,77,77,0.10)]">
      <p className="label-small tablet:label">
        Copyright © {new Date().getFullYear()} - All Rights Reserved
      </p>
    </footer>
  );
};
