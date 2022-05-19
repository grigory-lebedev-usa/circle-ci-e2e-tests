import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './constants/app.constants';
import './App.css';

import { AuthProvider } from './shared/hooks/useAuth';

import { SpinnerProvider } from './shared/hooks/useAppSpinner';
import { NotificationsProvider } from './shared/hooks/useNotifications/useNotifications';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import ClientOrder from './components/client/ClientOrder/ClientOrder';
import CurrentOrder from './components/client/ClientCurrentOrder/CurrentOrder';
import PageWrapper from './shared/components/PageWrapper/PageWrapper';
import PrivateRoute from './shared/components/Router/components/PrivateRoute';
import DriverStartScreen from './components/driver/DriverStartScreen/DriverStartScreen';
import { USER_ROLES } from './constants/user-roles.constants';
import ClientHome from './components/client/ClientHome/ClientHome';
import NotFoundPage from './shared/components/NotFoundPage/NotFoundPage';

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
                    <PrivateRoute roles={[USER_ROLES.CLIENT, USER_ROLES.ADMIN, USER_ROLES.DRIVER]}>
                      <ClientHome />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={PRIVATE_ROUTES.ORDER}
                  element={
                    <PrivateRoute roles={[USER_ROLES.CLIENT]}>
                      <ClientOrder />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={PRIVATE_ROUTES.CURRENT_ORDER}
                  element={
                    <PrivateRoute roles={[USER_ROLES.CLIENT]}>
                      <CurrentOrder />
                    </PrivateRoute>
                  }
                />
                <Route
                  path={PRIVATE_ROUTES.DRIVER_START}
                  element={
                    <PrivateRoute roles={[USER_ROLES.DRIVER]}>
                      <DriverStartScreen />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<Navigate to={PUBLIC_ROUTES.NOT_FOUND_PAGE} replace />} />
                <Route path={PUBLIC_ROUTES.NOT_FOUND_PAGE} element={<NotFoundPage />} />
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
