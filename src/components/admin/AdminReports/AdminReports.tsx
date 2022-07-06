import { RenderReport } from './admin-reports.types';
import Reports from './components/Reports/Reports';
import ReportsTable from './components/ReportsTable/ReportsTable';

function AdminReports() {
  const renderTableCallback = (items: RenderReport[]) => {
    return <ReportsTable items={items} />;
  };
  return <Reports renderTable={renderTableCallback} />;
}

export default AdminReports;
