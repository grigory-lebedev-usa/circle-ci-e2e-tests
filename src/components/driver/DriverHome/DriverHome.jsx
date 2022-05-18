import Home from '../../Home/Home';

import DriverTitle from './components/DriverTitle/DriverTitle';
import DriverContent from './components/DriverContent/DriverContent';

function DriverHome() {
  return <Home title={<DriverTitle />} content={<DriverContent />} />;
}

export default DriverHome;
