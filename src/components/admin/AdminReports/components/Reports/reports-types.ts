import { RenderReport } from "../../admin-reports.types";

export interface ReportsProps {
  renderTable: (items: RenderReport[]) => JSX.Element
}

export type DropDownItem = {
  id: number,
  value: number
}