import { Report } from '../../admin-reports.types';

export type ReportsProps = {
  renderTable: (items: Report[]) => JSX.Element;
};

export type DropDownItem = {
  id: number;
  value: number;
};
