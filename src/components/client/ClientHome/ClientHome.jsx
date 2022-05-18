import Home from '../../Home/Home';

import Title from './components/Title/Title';
import Content from './components/Content/Content';
import BlockButtons from './components/BlockButtons/BlockButtons';

function ClientHome() {
  return <Home title={<Title />} content={<Content />} buttons={<BlockButtons />} />;
}

export default ClientHome;
