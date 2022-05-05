import React from 'react';

import './App.css';

import SignInForm from './components/SignInForm/SignInForm';

// import SignUpForm from './components/SignUpForm/SignUpForm';
// TODO: next task (router)
import PageWrapper from './shared/components/PageWrapper/PageWrapper';
import { SpinnerProvider } from './shared/hooks/useAppSpinner';
import { NotificationsProvider } from './shared/hooks/useNotifications';

function App() {
  return (
    <div>
      <SpinnerProvider>
        <NotificationsProvider>
          <PageWrapper>
            <SignInForm />
          </PageWrapper>
        </NotificationsProvider>
      </SpinnerProvider>
    </div>
  );
}

export default App;
