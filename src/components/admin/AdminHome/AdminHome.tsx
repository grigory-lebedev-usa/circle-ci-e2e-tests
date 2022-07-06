import Home from '../../Home/Home';

import AdminContent from './components/AdminContent/AdminContent';
import AdminTitle from './components/AdminTitle/AdminTitle';
import DecorationImage from './components/DecorationImage/DecorationImage';

function AdminHome() {
  return <Home title={<AdminTitle />} content={<AdminContent />} rightSide={<DecorationImage />} />;
}

export default AdminHome;
