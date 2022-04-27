import React from 'react';

import './App.css';
import SignUpForm from './components/SignUpForm/SignUpForm';
import PageWrapper from './shared/components/PageWrapper/PageWrapper';

function App() {
  return (
    <div>
      <PageWrapper>
        <SignUpForm />
      </PageWrapper>
    </div>
  );
}

export default App;
