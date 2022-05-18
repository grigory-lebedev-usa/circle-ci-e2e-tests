import Home from '../../Home/Home';

import Title from './components/Title/Title';
import BlockButtons from './components/BlockButtons/BlockButtons';

function AdminHome() {
  return <Home title={<Title />} buttons={<BlockButtons />} />;
}

export default AdminHome;
