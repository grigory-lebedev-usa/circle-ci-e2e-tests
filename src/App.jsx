import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './constants/app.constants';
import './App.css';

import { AuthProvider } from './shared/hooks/useAuth';

import { SpinnerProvider } from './shared/hooks/useAppSpinner';
import { NotificationsProvider } from './shared/hooks/useNotifications/useNotifications';
import ClientHome from './components/client/ClientHome/ClientHome';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import ClientOrder from './components/client/ClientOrder/ClientOrder';
import CurrentOrder from './components/client/CurrentOrder/CurrentOrder';
import PageWrapper from './shared/components/PageWrapper/PageWrapper';
import PrivateRoute from './shared/components/Router/components/PrivateRoute';
import DriverStartScreen from './components/driver/DriverStartScreen/DriverStartScreen';

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
                      <DriverStartScreen />
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
