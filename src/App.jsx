import React, { useState } from 'react';

import './App.css';
import PageWrapper from './shared/components/PageWrapper/PageWrapper';
import FormButton from './shared/components/form-elements/FormButton/FormButton';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <PageWrapper isLogin={isLogin}>
        <FormButton onClick={() => setIsLogin(true)}>Login</FormButton>
      </PageWrapper>
    </div>
  );
}

export default App;
