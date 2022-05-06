import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './ app.constants';
import './App.css';

import { SpinnerProvider } from './shared/hooks/useAppSpinner';
import { NotificationsProvider } from './shared/hooks/useNotifications';
import { AuthProvider } from './shared/hooks/useAuth';
import PageWrapper from './shared/components/PageWrapper/PageWrapper';
import ClientHome from './components/ClientHome/ClientHome';
import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';

function App() {
  return (
    <div>
      <SpinnerProvider>
        <NotificationsProvider>
          <AuthProvider>
            <PageWrapper>
              <Routes>
                <Route path={ROUTES.HOME} element={<ClientHome />} />
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
