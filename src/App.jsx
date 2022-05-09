import React from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import PropTypes from 'prop-types';

import { ROUTES } from './ app.constants';
import './App.css';

import useAuth, { AuthProvider } from './shared/hooks/useAuth';

import { SpinnerProvider } from './shared/hooks/useAppSpinner';
import { NotificationsProvider } from './shared/hooks/useNotifications';
import PageWrapper from './shared/components/PageWrapper/PageWrapper';
import ClientHome from './components/ClientHome/ClientHome';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';

function RequireAuth({ children }) {
  const { isAuthed } = useAuth();

  return isAuthed === true ? children : <Navigate to="/login" replace />;
}

RequireAuth.propTypes = {
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
                  path={ROUTES.HOME}
                  element={
                    <RequireAuth>
                      <ClientHome />
                    </RequireAuth>
                  }
                />
                <Route path={ROUTES.REGISTER} element={<SignUpForm />} />
                <Route path={ROUTES.LOGIN} element={<SignInForm />} />
              </Routes>
            </PageWrapper>
          </AuthProvider>
        </NotificationsProvider>
      </SpinnerProvider>
    </div>
  );
}

export default App;
