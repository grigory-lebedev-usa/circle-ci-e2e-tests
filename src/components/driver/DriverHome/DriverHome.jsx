import Home from '../../Home/Home';

import Title from './components/Title/Title';
import Content from './components/Content/Content';
import BlockButtons from './components/BlockButtons/BlockButtons';
import Rating from './components/Rating/Rating';

function DriverHome() {
  return (
    <Home title={<Title />} content={<Content />} buttons={<BlockButtons />} rating={<Rating />} />
  );
}

export default DriverHome;
