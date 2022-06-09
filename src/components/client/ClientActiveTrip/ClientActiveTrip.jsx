import React from 'react';

import ActiveTrip from '../../ActiveTrip/ActiveTrip';

import ClientActiveTripActions from './components/ClientActiveTripActions/ClientActiveTripActions';
import ClientActiveTripBottomContent from './components/ClientActiveTripBottomContent/ClientActiveTripBottomContent';

function ClientActiveTrip() {
  return (
    <ActiveTrip
      bottomContent={<ClientActiveTripBottomContent />}
      bottomActions={<ClientActiveTripActions />}
    />
  );
}

export default ClientActiveTrip;
