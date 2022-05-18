import Home from '../../Home/Home';

import Title from './components/ClientTitle/ClientTitle';
import Content from './components/ClientContent/ClientContent';
import BlockButtons from './components/ClientActions/ClientActions';

function ClientHome() {
  return <Home title={<Title />} content={<Content />} buttons={<BlockButtons />} />;
}

export default ClientHome;
