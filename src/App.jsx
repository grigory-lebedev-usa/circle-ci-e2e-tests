import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './constants/app.constants';
import './App.css';

import useAuth, { AuthProvider } from './shared/hooks/useAuth';

import { SpinnerProvider } from './shared/hooks/useAppSpinner';
import { NotificationsProvider } from './shared/hooks/useNotifications/useNotifications';
import ClientHome from './components/client/ClientHome/ClientHome';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import ClientOrder from './components/client/ClientOrder/ClientOrder';
import CurrentOrder from './components/client/CurrentOrder/CurrentOrder';
import StartScreen from './components/driver/StartScreen/StartScreen';
import PageWrapper from './shared/components/PageWrapper/PageWrapper';

function PrivateRoute({ children }) {
  const { isAuthed } = useAuth();
  return isAuthed === true ? children : <Navigate to={PUBLIC_ROUTES.LOGIN} replace />;
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
};

function App() {
  return (
    <div>
      <SpinnerProvider>
        <NotificationsProvider>
          <AuthProvider>
            <PageWrapper>
              <Routes>
                <Route
                  path={PRIVATE_ROUTES.HOME}
                  element={
                    <PrivateRoute>
                      <ClientHome />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={PRIVATE_ROUTES.ORDER}
                  element={
                    <PrivateRoute>
                      <ClientOrder />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={PRIVATE_ROUTES.CURRENT_ORDER}
                  element={
                    <PrivateRoute>
                      <CurrentOrder />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={PRIVATE_ROUTES.DRIVER_START}
                  element={
                    <PrivateRoute>
                      <StartScreen />
                    </PrivateRoute>
                  }
                />
                <Route path={PUBLIC_ROUTES.REGISTER} element={<SignUpForm />} />
                <Route path={PUBLIC_ROUTES.LOGIN} element={<SignInForm />} />
              </Routes>
            </PageWrapper>
          </AuthProvider>
        </NotificationsProvider>
      </SpinnerProvider>
    </div>
  );
}

export default App;
