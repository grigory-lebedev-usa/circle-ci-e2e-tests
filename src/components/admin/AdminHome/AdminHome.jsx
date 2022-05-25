import Home from '../../Home/Home';

import AdminContent from './components/AdminContent/AdminContent';
import AdminTitle from './components/AdminTitle/AdminTitle';

function AdminHome() {
  return <Home title={<AdminTitle />} content={<AdminContent />} />;
}

export default AdminHome;
