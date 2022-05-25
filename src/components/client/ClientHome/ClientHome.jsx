import Home from '../../Home/Home';

import ClientTitle from './components/ClientTitle/ClientTitle';
import ClientContent from './components/ClientContent/ClientContent';

function ClientHome() {
  return <Home title={<ClientTitle />} content={<ClientContent />} />;
}

export default ClientHome;
