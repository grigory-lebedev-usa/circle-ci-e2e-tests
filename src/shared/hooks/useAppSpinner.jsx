import React, { useContext, useState } from 'react';

import PropTypes from 'prop-types';

import ProgressSpinner from '../components/ProgressSpinner/ProgressSpinner';

const SpinnerContext = React.createContext();

function useAppSpinner() {
  const [visibilitySpinner, setVisibilitySpinner] = useState(false);

  const showSpinner = () => {
    setVisibilitySpinner(true);
  };

  const closeSpinner = () => {
    setVisibilitySpinner(false);
  };

  return { visibilitySpinner, showSpinner, closeSpinner };
}

export function SpinnerProvider({ children }) {
  const spinnerHook = useAppSpinner();
  const { visibilitySpinner } = spinnerHook;
  return (
    <SpinnerContext.Provider value={spinnerHook}>
      <ProgressSpinner isVisible={visibilitySpinner} />
      {children}
    </SpinnerContext.Provider>
  );
}

SpinnerProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default function SpinnerContextConsumer() {
  return useContext(SpinnerContext);
}
