import React from 'react';
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import Version1 from './pages/Version1';
import Version2 from './pages/Version2';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/v1" element={<Version1 />} />
      <Route path="/v2" element={<Version2 />} />
    </Routes>
  );
}

export default App;
