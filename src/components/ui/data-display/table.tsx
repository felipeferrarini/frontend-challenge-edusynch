export type ITableColumn = {
  label: string;
  className?: string;
};

export type ITableRow = {
  cells: Array<{
    key: string;
    value: React.ReactNode;
  }>;
};

type Props = {
  columns: ITableColumn[];
  rows: ITableRow[];
};

export const Table = ({ columns, rows }: Props): JSX.Element => {
  return (
    <table className="w-full">
      <thead className="label text-secondary-500">
        <tr>
          {columns.map(({ label, className }) => (
            <th
              key={`table-column-${label}`}
              className={'py-2 text-start font-normal first:pl-6 ' + className}
            >
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="body">
        {rows.map((row, index) => (
          <tr key={`table-row-${index}`} className="odd:bg-secondary-100 h-16">
            {row.cells.map(({ key, value }) => (
              <td key={`table-row-cell-${key}`} className="last:pr-6">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
