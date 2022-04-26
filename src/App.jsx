import React from 'react';

import './App.css';
import Header from './components/Header/Header';
import PageWrapper from './shared/components/PageWrapper/PageWrapper';

function App() {
  return (
    <div>
      <PageWrapper>
        <Header />
      </PageWrapper>
    </div>
  );
}

export default App;
