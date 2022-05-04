import React from 'react';

import './App.css';

import SignUpForm from './components/SignUpForm/SignUpForm';
import PageWrapper from './shared/components/PageWrapper/PageWrapper';
import { SpinnerProvider } from './shared/hooks/useAppSpinner';
import { NotificationsProvider } from './shared/hooks/useNotifications';

function App() {
  return (
    <div>
      <SpinnerProvider>
        <NotificationsProvider>
          <PageWrapper>
            <SignUpForm />
          </PageWrapper>
        </NotificationsProvider>
      </SpinnerProvider>
    </div>
  );
}

export default App;
