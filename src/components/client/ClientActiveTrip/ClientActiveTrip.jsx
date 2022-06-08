import React from 'react';

import ActiveTrip from '../../ActiveTrip/ActiveTrip';

import BottomActions from './components/BottomActions/BottomActions';
import BottomContent from './components/BottomContent/BottomContent';

function ClientActiveTrip() {
  return <ActiveTrip bottomContent={<BottomContent />} bottomActions={<BottomActions />} />;
}

export default ClientActiveTrip;
