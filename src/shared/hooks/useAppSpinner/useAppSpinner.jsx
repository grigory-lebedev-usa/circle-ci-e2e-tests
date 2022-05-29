import React, { useCallback, useContext } from 'react';

import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import ProgressSpinner from '../../components/ProgressSpinner/ProgressSpinner';

import { CLOSE_SPINNER, SHOW_SPINNER } from './app-spinner.constants';

const SpinnerContext = React.createContext();

function useAppSpinner() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.spinner.isLoading);
  const showSpinner = useCallback(() => {
    dispatch({ type: SHOW_SPINNER });
  }, [dispatch]);

  const closeSpinner = useCallback(() => {
    dispatch({ type: CLOSE_SPINNER });
  }, [dispatch]);

  return { isLoading, showSpinner, closeSpinner };
}

export function SpinnerProvider({ children }) {
  const spinnerHook = useAppSpinner();
  const { isLoading } = spinnerHook;
  return (
    <SpinnerContext.Provider value={spinnerHook}>
      <ProgressSpinner isLoading={isLoading} />
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
