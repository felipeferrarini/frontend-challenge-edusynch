import { sidebarItems } from './constants';

export const Sidebar = (): JSX.Element => {
  return (
    <aside className="border-secondary-300 desktop:flex relative hidden min-h-full max-w-[86px] flex-1 flex-col items-center gap-8 border-y bg-white py-12">
      {sidebarItems.map(({ icon, label }) => (
        <div
          key={`sidebar-item-${label}`}
          className="tooltip tooltip-right tooltip-primary"
          data-tip={label}
        >
          <button aria-label="label">{icon}</button>
        </div>
      ))}
    </aside>
  );
};
