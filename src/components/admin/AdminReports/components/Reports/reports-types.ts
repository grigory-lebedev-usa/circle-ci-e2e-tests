import { Report } from '../../admin-reports.types';

export interface ReportsProps {
  renderTable: (items: Report[]) => JSX.Element;
}

export type DropDownItem = {
  id: number;
  value: number;
};
