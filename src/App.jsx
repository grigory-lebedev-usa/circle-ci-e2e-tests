import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { PRIVATE_ROUTES, PUBLIC_ROUTES } from './constants/app.constants';
import './App.css';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import ClientOrder from './components/client/ClientOrder/ClientOrder';
import ClientCurrentOrder from './components/client/ClientCurrentOrder/ClientCurrentOrder';
import PageWrapper from './shared/components/PageWrapper/PageWrapper';
import PrivateRoute from './shared/components/Router/components/PrivateRoute';
import DriverStartScreen from './components/driver/DriverStartScreen/DriverStartScreen';
import { USER_ROLES } from './constants/user-roles.constants';
import DriverOrders from './components/driver/DriverOrders/DriverOrders';
import HomeRoutes from './shared/components/Router/components/HomeRoutes/HomeRoutes';
import NotFoundPage from './shared/components/NotFoundPage/NotFoundPage';
import RootSpinner from './components/RootSpinner/RootSpinner';
import RootNotifications from './components/RootNotifications/RootNotifications';
import ActiveOrderGuard from './guards/ActiveOrderGuard';
import UploadPhotoGuard from './guards/UploadPhotoGuard';

function App() {
  return (
    <div>
      <RootSpinner />
      <RootNotifications />
      <PageWrapper>
        <Routes>
          <Route
            path={PRIVATE_ROUTES.HOME}
            element={
              <PrivateRoute roles={[USER_ROLES.CLIENT, USER_ROLES.ADMIN, USER_ROLES.DRIVER]}>
                <HomeRoutes />
              </PrivateRoute>
            }
          />
          <Route
            path={PRIVATE_ROUTES.ORDER}
            element={
              <PrivateRoute roles={[USER_ROLES.CLIENT]}>
                <ActiveOrderGuard>
                  <ClientOrder />
                </ActiveOrderGuard>
              </PrivateRoute>
            }
          />
          <Route
            path={PRIVATE_ROUTES.CURRENT_ORDER}
            element={
              <PrivateRoute roles={[USER_ROLES.CLIENT]}>
                <ClientCurrentOrder />
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
          <Route
            path={PRIVATE_ROUTES.DRIVER_ORDERS}
            element={
              <PrivateRoute roles={[USER_ROLES.DRIVER]}>
                <UploadPhotoGuard>
                  <DriverOrders />
                </UploadPhotoGuard>
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to={PUBLIC_ROUTES.NOT_FOUND_PAGE} replace />} />
          <Route path={PUBLIC_ROUTES.NOT_FOUND_PAGE} element={<NotFoundPage />} />
          <Route path={PUBLIC_ROUTES.REGISTER} element={<SignUpForm />} />
          <Route path={PUBLIC_ROUTES.LOGIN} element={<SignInForm />} />
        </Routes>
      </PageWrapper>
    </div>
  );
}

export default App;
