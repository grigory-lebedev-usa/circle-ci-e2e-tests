import Home from '../../Home/Home';

import DriverTitle from './components/DriverTitle/DriverTitle';
import DriverContent from './components/DriverContent/DriverContent';
import DriverRating from './components/DriverRating/DriverRating';

function DriverHome() {
  return <Home title={<DriverTitle />} content={<DriverContent />} rightSide={<DriverRating />} />;
}

export default DriverHome;
