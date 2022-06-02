import { useSelector } from 'react-redux';

import ProgressSpinner from '../../shared/components/ProgressSpinner/ProgressSpinner';

function RootSpinner() {
  const isShowSpinner = useSelector((state) => state.spinner.isShowSpinner);
  return <ProgressSpinner isShow={isShowSpinner} />;
}

export default RootSpinner;
