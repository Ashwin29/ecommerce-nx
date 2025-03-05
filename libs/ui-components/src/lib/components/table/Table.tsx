'use client';

import './Table.css';

interface TableProps {
  columns: string[];
  data: { [key: string]: React.ReactNode }[];
}

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="tableWrapper">
      <table className="table" role="table">
        <thead>
          <tr role="row">
            {columns.map((col) => (
              <th key={col} role="columnheader">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} role="row">
              {columns.map((col) => (
                <td key={col} role="cell">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
