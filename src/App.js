import React from 'react';
import axios from 'axios';
import './App.css';

function App() {
  
  axios.get('https://swapi.dev/api/people')
    .then((res) => console.log(res.data.results))
    .catch((error) => console.error(error))

  return (
    <div className="App">
      <h1>Hello React!</h1>
    </div>
  );
}

export default App;
