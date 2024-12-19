import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Layout/Header';

function App() {
  return (
	<Router>
		<Header />
    <Routes>
      
      <Route>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
	</Router>
  );
}

export default App;
