import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { ROUTES } from './ app.constants';
import './App.css';

import SignUpForm from './components/SignUpForm/SignUpForm';
import SignInForm from './components/SignInForm/SignInForm';
import PageWrapper from './shared/components/PageWrapper/PageWrapper';
import { SpinnerProvider } from './shared/hooks/useAppSpinner';
import { NotificationsProvider } from './shared/hooks/useNotifications';

function App() {
  return (
    <div>
      <SpinnerProvider>
        <NotificationsProvider>
          <PageWrapper>
            <Routes>
              <Route path={ROUTES.REGISTER} element={<SignUpForm />} />
              <Route path={ROUTES.LOGIN} element={<SignInForm />} />
            </Routes>
          </PageWrapper>
        </NotificationsProvider>
      </SpinnerProvider>
    </div>
  );
}

export default App;
